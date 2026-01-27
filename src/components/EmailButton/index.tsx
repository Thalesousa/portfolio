"use client";

import { useState } from "react";
import Image from "next/image";
import { SiGmail } from "react-icons/si";
import { HiClipboardCopy } from "react-icons/hi";

interface EmailButtonProps {
  email: string;
}

export function EmailButton({ email }: EmailButtonProps) {
  const [showToast, setShowToast] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2500);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <>
      {/* Toast */}
      <div
        className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          showToast
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="celestial-card px-5 py-3 flex items-center gap-3 shadow-cosmic-lg">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-green-500/10 flex-shrink-0">
            <Image
              src="/avatar-et.png"
              alt="ET"
              width={40}
              height={40}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <span className="font-syne font-medium text-stardust">
            Email copiado!
          </span>
        </div>
      </div>

      {/* Button with copy icon */}
      <div className="inline-flex">
        <a
          href={`mailto:${email}`}
          className="btn-cosmic no-lift inline-flex items-center gap-3 text-lg rounded-r-none border-r border-r-space-dark/30"
        >
          <SiGmail className="text-xl relative z-10" />
          <span className="relative z-10">Enviar e-mail</span>
        </a>
        <button
          onClick={handleCopyEmail}
          className="px-4 rounded-r-full transition-all duration-300 hover:brightness-110"
          style={{
            background: "linear-gradient(135deg, var(--stellar-gold), var(--stellar-amber))",
          }}
          aria-label="Copiar email"
        >
          <HiClipboardCopy className="text-space-dark text-lg" />
        </button>
      </div>
    </>
  );
}
