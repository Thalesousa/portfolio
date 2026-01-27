"use client";

import { useState, useRef, useEffect } from "react";
import { BsChevronDown, BsFileEarmarkPdf, BsFileEarmarkWord } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

interface DownloadCvButtonProps {
  defaultLink: string;
  pdfLink?: string;
  docxLink?: string;
}

export function DownloadCvButton({ defaultLink, pdfLink, docxLink }: DownloadCvButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const hasOptions = Boolean(pdfLink) || Boolean(docxLink);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDownload = (url?: string) => {
    if (url) {
      window.open(url, "_blank");
    }
    setIsOpen(false);
  };

  if (!hasOptions) {
    return (
      <a
        href={defaultLink}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-cosmic inline-flex items-center gap-2"
      >
        <HiDownload className="text-lg relative z-10" />
        <span className="relative z-10">Download CV</span>
      </a>
    );
  }

  return (
    <div className="relative inline-flex" ref={dropdownRef}>
      <a
        href={defaultLink}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-cosmic inline-flex items-center gap-2 rounded-r-none border-r border-r-space-dark/30"
      >
        <HiDownload className="text-lg relative z-10" />
        <span className="relative z-10">Download CV</span>
      </a>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 rounded-r-full transition-all duration-300"
        style={{
          background: "linear-gradient(135deg, var(--stellar-gold), var(--stellar-amber))",
        }}
        aria-label="Escolher formato"
      >
        <BsChevronDown
          className={`text-space-dark transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute top-full right-0 mt-3 w-44 transition-all duration-300 origin-top-right ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="celestial-card overflow-hidden shadow-cosmic-lg">
          <div className="p-1">
            {pdfLink && (
              <button
                onClick={() => handleDownload(pdfLink)}
                className="w-full px-4 py-3 text-left hover:bg-stellar-gold/10 transition-all duration-300 flex items-center gap-3 group rounded-xl"
              >
                <BsFileEarmarkPdf className="text-red-400 text-lg group-hover:scale-110 transition-transform" />
                <span className="font-syne font-medium text-stardust group-hover:text-stellar-gold transition-colors">
                  PDF
                </span>
              </button>
            )}
            {docxLink && (
              <button
                onClick={() => handleDownload(docxLink)}
                className="w-full px-4 py-3 text-left hover:bg-stellar-gold/10 transition-all duration-300 flex items-center gap-3 group rounded-xl"
              >
                <BsFileEarmarkWord className="text-blue-400 text-lg group-hover:scale-110 transition-transform" />
                <span className="font-syne font-medium text-stardust group-hover:text-stellar-gold transition-colors">
                  DOCX
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
