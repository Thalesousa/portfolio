"use client";

import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import LogoSvg from "../Icons/Logo";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-base-100/90 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 w-full">
      <div className="navbar container-main">
        <div className="flex-1">
          <Link href="/#home" className="text-white hover:text-secondary transition-colors">
            <LogoSvg pathFill="currentColor" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="menu menu-horizontal px-1 text-lg font-light gap-2">
            <li>
              <Link href="/#about" className="hover:text-secondary font-semibold">
                Sobre
              </Link>
            </li>
            <li>
              <Link href="/#experience" className="hover:text-secondary font-semibold">
                Skills
              </Link>
            </li>
            <li>
              <Link href="/#projects" className="hover:text-secondary font-semibold">
                Projetos
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="hover:text-secondary font-semibold">
                Contato
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="btn btn-ghost md:hidden text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 min-h-screen bg-base-100/95 z-99 md:hidden transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
          >
        <button
            className="btn btn-ghost md:hidden text-2xl"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        <nav className="flex flex-col items-center justify-center h-full">
          <ul className="menu text-2xl gap-6 text-center">
            <li>
              <Link
                href="/#about"
                onClick={closeMenu}
                className="hover:text-secondary"
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                href="/#experience"
                onClick={closeMenu}
                className="hover:text-secondary"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href="/#projects"
                onClick={closeMenu}
                className="hover:text-secondary"
              >
                Projetos
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                onClick={closeMenu}
                className="hover:text-secondary"
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
