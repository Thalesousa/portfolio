"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface PreviewProjectProps {
  repository: {
    id: number;
    name: string;
    title: string;
    thumbnail: string;
    created_at: string;
  };
  index: number;
}

export function PreviewProject({ repository, index }: PreviewProjectProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y });
  };

  const cardStyle = isHovered
    ? {
        transform: `perspective(1000px) rotateY(${mousePosition.x * 10}deg) rotateX(${-mousePosition.y * 10}deg) scale(1.03)`,
      }
    : {
        transform: "perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)",
      };

  return (
    <Link
      href={`/projetos/${repository.name}`}
      className="block group"
      style={{
        animationDelay: `${index * 150}ms`,
      }}
    >
      <div
        className="relative overflow-hidden rounded-3xl transition-all duration-700 ease-out"
        style={cardStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setMousePosition({ x: 0, y: 0 });
        }}
        onMouseMove={handleMouseMove}
      >
        {/* Card Background with celestial styling */}
        <div className="absolute inset-0 bg-space-deep/80 backdrop-blur-md border border-stellar-gold/5 rounded-3xl transition-all duration-700 group-hover:border-stellar-gold/30 group-hover:shadow-cosmic-lg" />

        {/* Dynamic glow effect following mouse */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"
          style={{
            background: isHovered
              ? `radial-gradient(circle at ${(mousePosition.x + 0.5) * 100}% ${(mousePosition.y + 0.5) * 100}%, rgba(251, 191, 36, 0.15) 0%, transparent 60%)`
              : "none",
          }}
        />

        {/* Top gradient border accent */}
        <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-stellar-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10">
          {/* Image Container */}
          <figure className="relative w-full aspect-video overflow-hidden rounded-t-3xl">
            <Image
              src={repository.thumbnail}
              width={400}
              height={225}
              alt={repository.title}
              className="object-cover w-full h-full transition-all duration-1000 group-hover:scale-110"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-space-deep via-space-deep/50 to-transparent opacity-90" />

            {/* Hover overlay with icon */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-cosmic-purple/20 backdrop-blur-sm">
              <div className="w-16 h-16 rounded-full bg-stellar-gold/20 backdrop-blur-md border border-stellar-gold/30 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                <svg
                  className="w-7 h-7 text-stellar-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
            </div>
          </figure>

          {/* Content */}
          <div className="p-7 relative">
            {/* Title */}
            <h3
              className="text-xl md:text-2xl font-bold font-syne text-stardust group-hover:text-stellar-gold transition-colors duration-500"
              translate="no"
            >
              {repository.title}
            </h3>

            {/* Link indicator */}
            <div className="flex items-center gap-3 mt-4 text-sm text-stardust/30 group-hover:text-stellar-gold/70 transition-colors duration-500">
              <span className="font-syne tracking-wide">Ver projeto</span>
              <svg
                className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>

            {/* Bottom border glow */}
            <div className="absolute bottom-0 left-7 right-7 h-px bg-gradient-to-r from-transparent via-stellar-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>
        </div>
      </div>
    </Link>
  );
}
