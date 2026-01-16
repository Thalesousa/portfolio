"use client";

import { useState, useRef, useEffect } from "react";
import { BsChevronDown, BsFileEarmarkPdf, BsFileEarmarkWord } from "react-icons/bs";

interface DownloadCvButtonProps {
  defaultLink: string;
  pdfLink?: string;
  docxLink?: string;
}

export function DownloadCvButton({ defaultLink, pdfLink, docxLink }: DownloadCvButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  return (
    <div className="relative inline-flex" ref={dropdownRef}>
      <a
        href={defaultLink}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-secondary px-6 rounded-r-none border-r-0"
      >
        Download CV
      </a>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="btn btn-secondary px-3 rounded-l-none border-l border-l-base-content/20"
        aria-label="Escolher formato"
      >
        <BsChevronDown className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <ul className="absolute top-full right-0 mt-2 w-32 bg-base-100 rounded-lg shadow-lg border border-base-300 overflow-hidden z-50">
          {pdfLink && (
            <li>
              <button
                onClick={() => handleDownload(pdfLink)}
                className="w-full px-4 py-3 text-left hover:bg-secondary/20 transition-colors flex items-center gap-3"
              >
                <BsFileEarmarkPdf className="text-red-500 text-lg" />
                <span className="font-medium">PDF</span>
              </button>
            </li>
          )}
          {docxLink && (
            <li>
              <button
                onClick={() => handleDownload(docxLink)}
                className={`w-full px-4 py-3 text-left hover:bg-secondary/20 transition-colors flex items-center gap-3 ${pdfLink ? "border-t border-base-300" : ""}`}
              >
                <BsFileEarmarkWord className="text-blue-500 text-lg" />
                <span className="font-medium">DOCX</span>
              </button>
            </li>
          )}
        </ul>
      )}
    </div>
  );
}
