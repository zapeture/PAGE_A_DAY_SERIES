"use client";

import Link from "next/link";
import { useState } from "react";

const navigationItems = [
  { label: "HOME", href: "#" },
  { label: "SERVICES", href: "#" },
  { label: "FEATURES", href: "#" },
  { label: "REVIEWS", href: "#" },
  { label: "PRICING", href: "#" },
  { label: "CONTACT", href: "#" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    console.log("Menu toggled, current state:", isOpen);
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative z-50">
      {/* Mobile menu button */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-white p-2 rounded-md hover:bg-white/10 fixed top-4 right-4 z-50"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-8">
        {navigationItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="text-white hover:text-white/80 text-sm font-medium"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Mobile Navigation */}
      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden fixed inset-0 bg-black/90 py-20 px-6 space-y-4 z-40`}
      >
        {navigationItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="block text-white hover:text-white/80 text-sm font-medium text-center"
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
