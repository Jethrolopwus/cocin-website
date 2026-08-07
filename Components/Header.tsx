"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  ChevronDown,
  MenuSquare,
  Menu,
  X,
} from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    hasDropdown: true,
  },
  {
    label: "Ministries",
    href: "/ministries",
    hasDropdown: true,
  },
  {
    label: "Resources",
    href: "/resources",
    hasDropdown: true,
  },
  {
    label: "Events",
    href: "/events",
    hasDropdown: true,
  },
  {
    label: "News",
    href: "/news",
    hasDropdown: true,
  },
  {
    label: "Contact",
    href: "/contact",
    hasDropdown: true,
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-[#1a1a2e] text-gray-300 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-8">
          {/* Left: Phone & Email */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+2347002624667"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone size={12} />
              <span>+234 700 262 4667</span>
            </a>
            <a
              href="mailto:headquarters@cocin.org"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail size={12} />
              <span>headquarters@cocin.org</span>
            </a>
          </div>

          {/* Right: Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <MenuSquare size={14} />
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors"
              aria-label="X (Twitter)"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors"
              aria-label="YouTube"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                <path d="m10 15 5-3-5-3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-[#111827] border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/cocinlogo.png"
                alt="COCIN Logo"
                width={40}
                height={40}
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors ${item.label === "Home"
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                    }`}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown size={14} className="opacity-60" />
                  )}
                </Link>
              ))}
            </div>

            {/* Give Button */}
            <div className="hidden md:flex items-center">
              <Link
                href="/give"
                className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white text-sm font-semibold px-6 py-2 rounded-full transition-colors"
              >
                Give
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#111827] border-t border-gray-800 pb-4">
            <div className="px-4 pt-2 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center justify-between px-3 py-2.5 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown size={14} className="opacity-60" />
                  )}
                </Link>
              ))}
              <div className="pt-3 px-3">
                <Link
                  href="/give"
                  className="block text-center bg-[#2563EB] hover:bg-[#1d4ed8] text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-colors"
                >
                  Give
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
