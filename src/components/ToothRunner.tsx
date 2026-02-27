"use client";

import { useEffect, useRef, useCallback, useState } from "react";

const CANVAS_W = 600;
const CANVAS_H = 200;
const GROUND_Y = 160;
const GRAVITY = 0.6;
const JUMP_FORCE = -11;
const GAME_SPEED_INITIAL = 4;
const GAME_SPEED_INCREMENT = 0.001;

// Tooth character — cute cartoon style
function drawTooth(ctx: CanvasRenderingContext2D, x: number, y: number, size: number) {
  const s = size * 1.3;
  ctx.save();

  // Shadow
  ctx.fillStyle = "rgba(0,0,0,0.06)";
  ctx.beginPath();
  ctx.ellipse(x, y + s * 0.55, s * 0.35, s * 0.08, 0, 0, Math.PI * 2);
  ctx.fill();

  // Main tooth body (wide crown)
  ctx.fillStyle = "#FFFFFF";
  ctx.strokeStyle = "#BDBDBD";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  // Left side of crown
  ctx.moveTo(x - s * 0.38, y - s * 0.1);
  ctx.quadraticCurveTo(x - s * 0.42, y - s * 0.7, x - s * 0.15, y - s * 0.95);
  // Top bump (two cusps)
  ctx.quadraticCurveTo(x - s * 0.05, y - s * 1.08, x, y - s * 0.9);
  ctx.quadraticCurveTo(x + s * 0.05, y - s * 1.08, x + s * 0.15, y - s * 0.95);
  // Right side of crown
  ctx.quadraticCurveTo(x + s * 0.42, y - s * 0.7, x + s * 0.38, y - s * 0.1);
  // Right root
  ctx.quadraticCurveTo(x + s * 0.35, y + s * 0.15, x + s * 0.2, y + s * 0.45);
  ctx.quadraticCurveTo(x + s * 0.15, y + s * 0.55, x + s * 0.08, y + s * 0.4);
  // Center gap between roots
  ctx.quadraticCurveTo(x, y + s * 0.2, x - s * 0.08, y + s * 0.4);
  // Left root
  ctx.quadraticCurveTo(x - s * 0.15, y + s * 0.55, x - s * 0.2, y + s * 0.45);
  ctx.quadraticCurveTo(x - s * 0.35, y + s * 0.15, x - s * 0.38, y - s * 0.1);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Shine highlight
  ctx.fillStyle = "rgba(255,255,255,0.7)";
  ctx.beginPath();
  ctx.ellipse(x - s * 0.12, y - s * 0.65, s * 0.07, s * 0.15, -0.3, 0, Math.PI * 2);
  ctx.fill();

  // Eyes (bigger, cuter)
  ctx.fillStyle = "#2E2E2E";
  ctx.beginPath();
  ctx.ellipse(x - s * 0.14, y - s * 0.5, s * 0.045, s * 0.06, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(x + s * 0.14, y - s * 0.5, s * 0.045, s * 0.06, 0, 0, Math.PI * 2);
  ctx.fill();

  // Eye highlights
  ctx.fillStyle = "#FFFFFF";
  ctx.beginPath();
  ctx.arc(x - s * 0.12, y - s * 0.52, s * 0.02, 0, Math.PI * 2);
  ctx.arc(x + s * 0.16, y - s * 0.52, s * 0.02, 0, Math.PI * 2);
  ctx.fill();

  // Rosy cheeks
  ctx.fillStyle = "rgba(255,150,150,0.25)";
  ctx.beginPath();
  ctx.ellipse(x - s * 0.25, y - s * 0.32, s * 0.07, s * 0.04, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(x + s * 0.25, y - s * 0.32, s * 0.07, s * 0.04, 0, 0, Math.PI * 2);
  ctx.fill();

  // Happy smile
  ctx.strokeStyle = "#2E2E2E";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(x, y - s * 0.3, s * 0.1, 0.15 * Math.PI, 0.85 * Math.PI);
  ctx.stroke();

  ctx.restore();
}

// Toothbrush obstacle — standing upright with rounded head
function drawToothbrush(ctx: CanvasRenderingContext2D, x: number, y: number, h: number) {
  ctx.save();
  const totalH = h + 10;

  // Handle (rounded rectangle)
  const handleW = 10;
  const handleH = totalH * 0.6;
  const handleY = y - handleH;
  ctx.fillStyle = "#338075";
  ctx.strokeStyle = "#17554C";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.roundRect(x - handleW / 2, handleY, handleW, handleH, 3);
  ctx.fill();
  ctx.stroke();

  // Handle grip lines
  ctx.strokeStyle = "rgba(255,255,255,0.3)";
  ctx.lineWidth = 1;
  for (let i = 1; i <= 3; i++) {
    const ly = handleY + handleH * 0.3 + i * (handleH * 0.15);
    ctx.beginPath();
    ctx.moveTo(x - handleW / 2 + 2, ly);
    ctx.lineTo(x + handleW / 2 - 2, ly);
    ctx.stroke();
  }

  // Neck (slightly narrower)
  const neckH = totalH * 0.08;
  ctx.fillStyle = "#e0e0e0";
  ctx.fillRect(x - 3, handleY - neckH, 6, neckH);

  // Head (rounded, wider)
  const headW = 18;
  const headH = totalH * 0.32;
  const headY = handleY - neckH - headH;
  ctx.fillStyle = "#f5f5f5";
  ctx.strokeStyle = "#BDBDBD";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.roundRect(x - headW / 2, headY, headW, headH, 4);
  ctx.fill();
  ctx.stroke();

  // Bristle rows (colorful)
  const bristleColors = ["#7EE081", "#5BC85F", "#7EE081"];
  const rows = 3;
  const cols = 4;
  const bristlePadX = 2.5;
  const bristlePadY = 2.5;
  const bristleW = (headW - bristlePadX * 2) / cols;
  const bristleH = (headH - bristlePadY * 2) / rows;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      ctx.fillStyle = bristleColors[r % bristleColors.length];
      const bx = x - headW / 2 + bristlePadX + c * bristleW + 0.5;
      const by = headY + bristlePadY + r * bristleH + 0.5;
      ctx.beginPath();
      ctx.roundRect(bx, by, bristleW - 1, bristleH - 1, 1);
      ctx.fill();
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
