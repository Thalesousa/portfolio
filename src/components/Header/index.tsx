"use client";

import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-base-100/90 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 w-full">
      <div className="navbar container-main">
        <div className="flex-1">
          <Link href="/#home" className="hover:opacity-80 transition-opacity">
            <svg
              width="48"
              height="48"
              viewBox="0 0 260 299"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current hover:stroke-secondary transition-colors"
            >
              <path
                d="M40.758 138.893L5 159.064V222.011L40.758 242.182V138.893Z"
                strokeWidth="8"
              />
              <path
                d="M130.326 45.6895L5 118.026L5.69433 76.9892L130.326 5L236.906 66.2082L112.274 138.197V179.582L256 96.8123V222.011L130.674 294L94.5685 272.786L220.242 199.753V158.716L77.2102 242.182V118.026L166.432 66.2082L130.326 45.6895Z"
                strokeWidth="8"
              />
            </svg>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="menu menu-horizontal px-1 text-lg font-light gap-2">
            <li>
              <Link href="/#about" className="hover:text-secondary">
                Sobre
              </Link>
            </li>
            <li>
              <Link href="/#experience" className="hover:text-secondary">
                Skills
              </Link>
            </li>
            <li>
              <Link href="/#projects" className="hover:text-secondary">
                Projetos
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="hover:text-secondary">
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
        className={`fixed inset-0 bg-base-100/95 z-40 md:hidden transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
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
