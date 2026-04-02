"use client";

import { useEffect, useRef, useCallback, useState } from "react";

const CANVAS_W = 600;
const CANVAS_H = 200;
const GROUND_Y = 160;
const GRAVITY = 0.6;
const JUMP_FORCE = -11;
const GAME_SPEED_INITIAL = 4;
const GAME_SPEED_INCREMENT = 0.001;

// Tooth icon — classic tooth icon shape with smiley face
function drawTooth(ctx: CanvasRenderingContext2D, x: number, y: number, size: number) {
  const s = size * 1.4;
  ctx.save();

  // Tooth icon shape (like a dental logo)
  ctx.fillStyle = "#FFFFFF";
  ctx.strokeStyle = "#CCCCCC";
  ctx.lineWidth = 2;
  ctx.beginPath();
  // Start from left side, go up
  ctx.moveTo(x - s * 0.35, y + s * 0.05);
  // Left side up to crown
  ctx.quadraticCurveTo(x - s * 0.5, y - s * 0.3, x - s * 0.4, y - s * 0.65);
  // Left top curve
  ctx.quadraticCurveTo(x - s * 0.35, y - s * 0.95, x - s * 0.1, y - s * 0.85);
  // Top dip (center notch like real tooth icon)
  ctx.quadraticCurveTo(x, y - s * 0.75, x + s * 0.1, y - s * 0.85);
  // Right top curve
  ctx.quadraticCurveTo(x + s * 0.35, y - s * 0.95, x + s * 0.4, y - s * 0.65);
  // Right side down
  ctx.quadraticCurveTo(x + s * 0.5, y - s * 0.3, x + s * 0.35, y + s * 0.05);
  // Right root (tapers to point)
  ctx.quadraticCurveTo(x + s * 0.3, y + s * 0.35, x + s * 0.15, y + s * 0.55);
  ctx.quadraticCurveTo(x + s * 0.1, y + s * 0.6, x + s * 0.05, y + s * 0.45);
  // Valley between roots
  ctx.quadraticCurveTo(x, y + s * 0.25, x - s * 0.05, y + s * 0.45);
  // Left root (tapers to point)
  ctx.quadraticCurveTo(x - s * 0.1, y + s * 0.6, x - s * 0.15, y + s * 0.55);
  ctx.quadraticCurveTo(x - s * 0.3, y + s * 0.35, x - s * 0.35, y + s * 0.05);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Eyes — simple dots
  ctx.fillStyle = "#2E2E2E";
  ctx.beginPath();
  ctx.arc(x - s * 0.13, y - s * 0.4, s * 0.05, 0, Math.PI * 2);
  ctx.arc(x + s * 0.13, y - s * 0.4, s * 0.05, 0, Math.PI * 2);
  ctx.fill();

  // Smile — simple arc
  ctx.strokeStyle = "#2E2E2E";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(x, y - s * 0.18, s * 0.13, 0.2 * Math.PI, 0.8 * Math.PI);
  ctx.stroke();

  ctx.restore();
}

// Toothbrush obstacle — side view (horizontal brush, bristles facing left toward player)
function drawToothbrush(ctx: CanvasRenderingContext2D, x: number, y: number, h: number) {
  ctx.save();
  const totalH = h + 10;

  // Handle — long horizontal bar extending right, thin
  const handleLen = 28;
  const handleThick = 6;
  const handleY = y - totalH * 0.35;
  ctx.fillStyle = "#338075";
  ctx.strokeStyle = "#17554C";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.roundRect(x, handleY - handleThick / 2, handleLen, handleThick, 2);
  ctx.fill();
  ctx.stroke();

  // Grip texture on handle
  ctx.strokeStyle = "rgba(255,255,255,0.3)";
  for (let i = 0; i < 3; i++) {
    const gx = x + 8 + i * 7;
    ctx.beginPath();
    ctx.moveTo(gx, handleY - handleThick / 2 + 1);
    ctx.lineTo(gx, handleY + handleThick / 2 - 1);
    ctx.stroke();
  }

  // Neck — connecting handle to head
  const neckLen = 5;
  ctx.fillStyle = "#e0e0e0";
  ctx.fillRect(x - neckLen, handleY - 2, neckLen, 4);

  // Head — vertical rectangle on the left side (bristles face player)
  const headW = 10;
  const headH = totalH * 0.75;
  const headX = x - neckLen - headW;
  const headY = y - totalH + 2;
  ctx.fillStyle = "#f0f0f0";
  ctx.strokeStyle = "#BDBDBD";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.roundRect(headX, headY, headW, headH, 3);
  ctx.fill();
  ctx.stroke();

  // Bristles — rows of green tufts on the left face of the head
  const bristleLen = 6;
  const rows = Math.max(3, Math.floor(headH / 6));
  const bristleGap = headH / (rows + 1);
  const colors = ["#7EE081", "#5BC85F", "#7EE081"];

  for (let i = 1; i <= rows; i++) {
    const by = headY + i * bristleGap;
    ctx.fillStyle = colors[i % colors.length];
    // Each tuft is 2-3 tiny bristles
    for (let j = 0; j < 3; j++) {
      const bx = headX - bristleLen + j * 2;
      ctx.fillRect(bx, by - 1.5, 2, 3);
    }
  }

  ctx.restore();
}

interface Obstacle {
  x: number;
  height: number;
  passed: boolean;
}

export const ToothRunner = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gameRef = useRef({
    toothY: GROUND_Y,
    velocityY: 0,
    isJumping: false,
    obstacles: [] as Obstacle[],
    score: 0,
    highScore: 0,
    gameSpeed: GAME_SPEED_INITIAL,
    isRunning: false,
    isGameOver: false,
    frameCount: 0,
    animFrame: 0,
  });
  const [displayScore, setDisplayScore] = useState(0);
  const [displayHigh, setDisplayHigh] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [started, setStarted] = useState(false);

  const jump = useCallback(() => {
    const g = gameRef.current;
    if (g.isGameOver) {
      // Restart
      g.toothY = GROUND_Y;
      g.velocityY = 0;
      g.isJumping = false;
      g.obstacles = [];
      g.score = 0;
      g.gameSpeed = GAME_SPEED_INITIAL;
      g.isGameOver = false;
      g.frameCount = 0;
      g.isRunning = true;
      setGameOver(false);
      setStarted(true);
      return;
    }
    if (!g.isRunning) {
      g.isRunning = true;
      setStarted(true);
    }
    if (!g.isJumping) {
      g.velocityY = JUMP_FORCE;
      g.isJumping = true;
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    const g = gameRef.current;

    // Load high score
    try {
      g.highScore = parseInt(localStorage.getItem("toothRunnerHigh") || "0");
      setDisplayHigh(g.highScore);
    } catch {}

    let raf: number;

    const gameLoop = () => {
      ctx.clearRect(0, 0, CANVAS_W, CANVAS_H);

      // Ground
      ctx.strokeStyle = "#EAEAEA";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, GROUND_Y + 20);
      ctx.lineTo(CANVAS_W, GROUND_Y + 20);
      ctx.stroke();

      // Ground texture dots
      ctx.fillStyle = "#EAEAEA";
      for (let i = 0; i < CANVAS_W; i += 20) {
        const offset = g.isRunning ? (g.frameCount * g.gameSpeed) % 20 : 0;
        ctx.fillRect((i - offset + CANVAS_W) % CANVAS_W, GROUND_Y + 25, 2, 1);
      }

      if (g.isRunning && !g.isGameOver) {
        // Physics
        g.velocityY += GRAVITY;
        g.toothY += g.velocityY;
        if (g.toothY >= GROUND_Y) {
          g.toothY = GROUND_Y;
          g.velocityY = 0;
          g.isJumping = false;
        }

        // Spawn obstacles
        g.frameCount++;
        const minGap = Math.max(80, 120 - g.score * 0.3);
        if (g.frameCount % Math.floor(minGap + Math.random() * 60) === 0) {
          g.obstacles.push({
            x: CANVAS_W + 20,
            height: 30 + Math.random() * 25,
            passed: false,
          });
        }

        // Update obstacles
        g.gameSpeed += GAME_SPEED_INCREMENT;
        g.obstacles.forEach((obs) => {
          obs.x -= g.gameSpeed;
          if (!obs.passed && obs.x + 10 < 50) {
            obs.passed = true;
            g.score++;
            setDisplayScore(g.score);
          }
        });
        g.obstacles = g.obstacles.filter((o) => o.x > -30);

        // Collision
        const toothLeft = 50 - 10;
        const toothRight = 50 + 10;
        const toothTop = g.toothY - 24;
        const toothBottom = g.toothY + 12;

        for (const obs of g.obstacles) {
          const obsLeft = obs.x - 20;
          const obsRight = obs.x + 5;
          const obsTop = GROUND_Y + 20 - obs.height;

          if (
            toothRight > obsLeft &&
            toothLeft < obsRight &&
            toothBottom > obsTop
          ) {
            g.isGameOver = true;
            g.isRunning = false;
            if (g.score > g.highScore) {
              g.highScore = g.score;
              setDisplayHigh(g.highScore);
              try { localStorage.setItem("toothRunnerHigh", String(g.highScore)); } catch {}
            }
            setGameOver(true);
            break;
          }
        }
      }

      // Draw tooth
      drawTooth(ctx, 50, g.toothY, 20);

      // Draw obstacles
      g.obstacles.forEach((obs) => {
        drawToothbrush(ctx, obs.x, GROUND_Y + 20, obs.height);
      });

      // Score
      ctx.fillStyle = "#2E2E2E";
      ctx.font = "bold 14px monospace";
      ctx.textAlign = "right";
      ctx.fillText(`${String(g.score).padStart(5, "0")}`, CANVAS_W - 10, 25);

      if (g.highScore > 0) {
        ctx.fillStyle = "#999";
        ctx.font = "12px monospace";
        ctx.fillText(`HI ${String(g.highScore).padStart(5, "0")}`, CANVAS_W - 70, 25);
      }

      // Start prompt
      if (!g.isRunning && !g.isGameOver) {
        ctx.fillStyle = "#2E2E2E";
        ctx.font = "16px sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("Naciśnij spację lub dotknij, żeby grać!", CANVAS_W / 2, 90);
      }

      // Game over
      if (g.isGameOver) {
        ctx.fillStyle = "#2E2E2E";
        ctx.font = "bold 20px sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("GAME OVER", CANVAS_W / 2, 80);
        ctx.font = "14px sans-serif";
        ctx.fillText("Dotknij lub naciśnij spację, żeby zagrać ponownie", CANVAS_W / 2, 105);
      }

      g.animFrame = raf;
      raf = requestAnimationFrame(gameLoop);
    };

    raf = requestAnimationFrame(gameLoop);

    const handleKey = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.code === "ArrowUp") {
        e.preventDefault();
        jump();
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
      cancelAnimationFrame(raf);
    };
  }, [jump]);

  return (
    <div className="w-full max-w-[600px]">
      <canvas
        ref={canvasRef}
        width={CANVAS_W}
        height={CANVAS_H}
        className="w-full border border-light-gray rounded-[12px] bg-white cursor-pointer touch-none"
        onClick={jump}
        onTouchStart={(e) => { e.preventDefault(); jump(); }}
      />
    </div>
  );
};
