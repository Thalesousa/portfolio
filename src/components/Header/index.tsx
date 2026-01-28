"use client";

import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { useState, useEffect } from "react";
import LogoSvg from "../Icons/Logo";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/#about", label: "Sobre" },
    { href: "/#experience", label: "Skills" },
    { href: "/#projects", label: "Projetos" },
    { href: "/#contact", label: "Contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? "glass-card border-b border-cosmic-blue/20 shadow-cosmic"
          : "bg-transparent"
      }`}
    >
      <div className="navbar container-main py-4">
        <div className="flex-1">
          <Link
            href="/#home"
            className="text-stardust hover:text-cosmic-cyan transition-all duration-300"
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
          className="relative md:hidden p-3 rounded-xl text-stardust hover:text-cosmic-cyan transition-all duration-300 hover:bg-cosmic-blue/10"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`block transition-all duration-300 ${isOpen ? "rotate-180 scale-0" : "rotate-0 scale-100"}`}>
            <FaBars className="text-xl" />
          </span>
          <span className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isOpen ? "rotate-0 scale-100" : "-rotate-180 scale-0"}`}>
            <FaTimes className="text-xl" />
          </span>
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 min-h-screen md:hidden transition-all duration-500 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-space-dark/95 backdrop-blur-xl transition-opacity duration-500 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeMenu}
        />

        {/* Close Button */}
        <button
          className="absolute top-4 right-6 p-3 rounded-xl text-stardust hover:text-cosmic-cyan transition-all duration-300 hover:bg-cosmic-blue/10 z-20"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          <FaTimes className="text-2xl" />
        </button>

        {/* Menu Content */}
        <nav className="relative flex flex-col items-center justify-center h-full z-10">
          <ul className="flex flex-col items-center gap-8">
            {navLinks.map((link, index) => (
              <li
                key={link.href}
                className={`transition-all duration-500 ${
                  isOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: isOpen ? `${index * 100}ms` : "0ms" }}
              >
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className="relative font-syne text-3xl font-bold text-stardust hover:text-stellar-gold transition-all duration-300 group"
                >
                  <span className="relative z-10">{link.label}</span>
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-stellar-gold via-cosmic-cyan to-cosmic-purple transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          {/* Decorative Elements */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-stellar-gold/50 to-transparent" />
        </nav>
      </div>
    </header>
  );
}
