"use client";

import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import LogoSvg from "../Icons/Logo";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    { href: "/#about", label: "Sobre" },
    { href: "/#experience", label: "Skills" },
    { href: "/#projects", label: "Projetos" },
    { href: "/#contact", label: "Contato" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-colors duration-300 ${
          isScrolled
            ? "bg-space-dark/90 border-b border-stellar-gold/10 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="navbar container-main py-4">
          <div className="flex-1">
            <Link
              href="/#home"
              className="text-stardust hover:text-cosmic-cyan transition-colors duration-300"
            >
              <LogoSvg pathFill="currentColor" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="link-cosmic px-4 py-2 font-syne font-medium text-sm tracking-wide"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3 rounded-xl text-stardust hover:text-stellar-gold transition-colors duration-200"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <FaTimes className="text-xl" />
            ) : (
              <FaBars className="text-xl" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Navigation - Outside header */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop - solid color instead of blur for performance */}
        <div
          className="absolute inset-0 bg-space-dark/98"
          onClick={closeMenu}
        />

        {/* Menu Content */}
        <nav className="relative flex flex-col items-center justify-center h-full">
          <ul className="flex flex-col items-center gap-6">
            {navLinks.map((link, index) => (
              <li
                key={link.href}
                className={`transition-transform duration-300 ${
                  isOpen ? "translate-y-0" : "translate-y-4"
                }`}
                style={{ transitionDelay: isOpen ? `${index * 50}ms` : "0ms" }}
              >
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className="block px-8 py-3 font-syne text-2xl font-bold text-stardust hover:text-stellar-gold transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Decorative line */}
          <div className="absolute bottom-24 left-1/2 -translate-x-1/2 w-24 h-px bg-stellar-gold/30" />
        </nav>
      </div>
    </>
  );
}
