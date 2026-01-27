"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
  twinkleOffset: number;
  color: string;
}

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const starColors = [
      "rgba(255, 255, 255,", // White
      "rgba(251, 191, 36,",  // Gold
      "rgba(0, 212, 255,",   // Cyan
      "rgba(139, 92, 246,",  // Purple
    ];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      const starCount = Math.floor((canvas.width * canvas.height) / 7000);
      starsRef.current = [];

      for (let i = 0; i < starCount; i++) {
        const colorIndex = Math.random() < 0.7 ? 0 : Math.floor(Math.random() * starColors.length);
        starsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2.5 + 0.3,
          opacity: Math.random() * 0.5 + 0.2,
          twinkleSpeed: Math.random() * 0.015 + 0.003,
          twinkleOffset: Math.random() * Math.PI * 2,
          color: starColors[colorIndex],
        });
      }
    };

    const drawNebula = () => {
      // Purple nebula top-left
      const gradient1 = ctx.createRadialGradient(
        canvas.width * 0.15,
        canvas.height * 0.25,
        0,
        canvas.width * 0.15,
        canvas.height * 0.25,
        canvas.width * 0.45
      );
      gradient1.addColorStop(0, "rgba(139, 92, 246, 0.06)");
      gradient1.addColorStop(0.5, "rgba(139, 92, 246, 0.02)");
      gradient1.addColorStop(1, "transparent");
      ctx.fillStyle = gradient1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Cyan nebula bottom-right
      const gradient2 = ctx.createRadialGradient(
        canvas.width * 0.85,
        canvas.height * 0.75,
        0,
        canvas.width * 0.85,
        canvas.height * 0.75,
        canvas.width * 0.35
      );
      gradient2.addColorStop(0, "rgba(0, 212, 255, 0.04)");
      gradient2.addColorStop(0.5, "rgba(0, 212, 255, 0.015)");
      gradient2.addColorStop(1, "transparent");
      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Gold nebula center
      const gradient3 = ctx.createRadialGradient(
        canvas.width * 0.5,
        canvas.height * 0.5,
        0,
        canvas.width * 0.5,
        canvas.height * 0.5,
        canvas.width * 0.5
      );
      gradient3.addColorStop(0, "rgba(251, 191, 36, 0.025)");
      gradient3.addColorStop(1, "transparent");
      ctx.fillStyle = gradient3;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const drawStars = (time: number) => {
      starsRef.current.forEach((star) => {
        const twinkle =
          Math.sin(time * star.twinkleSpeed + star.twinkleOffset) * 0.35 + 0.65;
        const currentOpacity = star.opacity * twinkle;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `${star.color} ${currentOpacity})`;
        ctx.fill();

        // Glow for larger stars
        if (star.size > 1.3) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 2.5, 0, Math.PI * 2);
          const glowGradient = ctx.createRadialGradient(
            star.x,
            star.y,
            0,
            star.x,
            star.y,
            star.size * 2.5
          );
          glowGradient.addColorStop(0, `${star.color} ${currentOpacity * 0.25})`);
          glowGradient.addColorStop(1, "transparent");
          ctx.fillStyle = glowGradient;
          ctx.fill();
        }
      });
    };

    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawNebula();
      drawStars(time);
      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
}
