"use client";

import { useEffect, useRef, useCallback, useState } from "react";

const CANVAS_W = 600;
const CANVAS_H = 200;
const GROUND_Y = 160;
const GRAVITY = 0.6;
const JUMP_FORCE = -11;
const GAME_SPEED_INITIAL = 4;
const GAME_SPEED_INCREMENT = 0.001;

// Tooth character (simple pixel art style)
function drawTooth(ctx: CanvasRenderingContext2D, x: number, y: number, size: number) {
  ctx.fillStyle = "#FFFFFF";
  ctx.strokeStyle = "#2E2E2E";
  ctx.lineWidth = 2;

  // Crown (rounded rectangle top)
  ctx.beginPath();
  ctx.moveTo(x - size * 0.4, y);
  ctx.quadraticCurveTo(x - size * 0.4, y - size * 0.8, x - size * 0.2, y - size);
  ctx.quadraticCurveTo(x, y - size * 1.1, x + size * 0.2, y - size);
  ctx.quadraticCurveTo(x + size * 0.4, y - size * 0.8, x + size * 0.4, y);
  // Roots
  ctx.lineTo(x + size * 0.25, y + size * 0.4);
  ctx.quadraticCurveTo(x + size * 0.15, y + size * 0.5, x + size * 0.05, y + size * 0.3);
  ctx.lineTo(x - size * 0.05, y + size * 0.3);
  ctx.quadraticCurveTo(x - size * 0.15, y + size * 0.5, x - size * 0.25, y + size * 0.4);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Eyes
  ctx.fillStyle = "#2E2E2E";
  ctx.beginPath();
  ctx.arc(x - size * 0.12, y - size * 0.5, size * 0.06, 0, Math.PI * 2);
  ctx.arc(x + size * 0.12, y - size * 0.5, size * 0.06, 0, Math.PI * 2);
  ctx.fill();

  // Smile
  ctx.beginPath();
  ctx.arc(x, y - size * 0.25, size * 0.12, 0.1 * Math.PI, 0.9 * Math.PI);
  ctx.stroke();
}

// Toothbrush obstacle
function drawToothbrush(ctx: CanvasRenderingContext2D, x: number, y: number, h: number) {
  // Handle
  ctx.fillStyle = "#338075";
  ctx.strokeStyle = "#17554C";
  ctx.lineWidth = 1.5;
  const handleW = 8;
  const handleH = h * 0.65;
  ctx.fillRect(x - handleW / 2, y - handleH, handleW, handleH);
  ctx.strokeRect(x - handleW / 2, y - handleH, handleW, handleH);

  // Head (bristles)
  const headW = 16;
  const headH = h * 0.35;
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(x - headW / 2, y - handleH - headH, headW, headH);
  ctx.strokeStyle = "#17554C";
  ctx.strokeRect(x - headW / 2, y - handleH - headH, headW, headH);

  // Bristle lines
  ctx.strokeStyle = "#7EE081";
  ctx.lineWidth = 1;
  for (let i = 0; i < 4; i++) {
    const bx = x - headW / 2 + 3 + i * 3.5;
    ctx.beginPath();
    ctx.moveTo(bx, y - handleH - headH + 2);
    ctx.lineTo(bx, y - handleH - 2);
    ctx.stroke();
  }
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
        const toothLeft = 50 - 12;
        const toothRight = 50 + 12;
        const toothTop = g.toothY - 28;
        const toothBottom = g.toothY + 14;

        for (const obs of g.obstacles) {
          const obsLeft = obs.x - 8;
          const obsRight = obs.x + 8;
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
