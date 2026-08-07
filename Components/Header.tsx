"use client";

import { useState, useRef, useEffect } from "react";
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
import FindChurchModal from "./FindChurchModal";

type DropdownItem = {
  label: string;
  description: string;
  href: string;
};

const dropdownData: Record<string, DropdownItem[]> = {
  About: [
    {
      label: "About COCIN",
      description: "Our history, heritage and core identity since 1904",
      href: "/about",
    },
    {
      label: "Leadership",
      description:
        "Meet the President, Vice President & Executive Secretariat",
      href: "/about#leadership",
    },
    {
      label: "History",
      description: "Over a century of grace, growth, and gospel impact",
      href: "/about#history",
    },
    {
      label: "Vision & Mission",
      description: "Our divine mandate and roadmap for global discipleship",
      href: "/about#vision-mission",
    },
    {
      label: "Statement of Faith",
      description: "The biblical foundational truths we uphold",
      href: "/about#statement-of-faith",
    },
    {
      label: "Constitution",
      description: "Governance, order and operational guidelines of COCIN",
      href: "/about#constitution",
    },
  ],
  Ministries: [
    {
      label: "Youth Ministry",
      description: "Empowering young disciples for kingdom leadership",
      href: "/ministries",
    },
    {
      label: "Women Fellowship",
      description:
        "Building virtuous, prayerful and community-minded women",
      href: "/ministries",
    },
    {
      label: "Children Ministry",
      description:
        "Nurturing the next generation in sound Christian doctrine",
      href: "/ministries",
    },
    {
      label: "Foreign Mission",
      description:
        "Proclaiming Christ across international borders and unreached fields",
      href: "/ministries",
    },
    {
      label: "Chaplaincies",
      description:
        "Pastoral care in military, educational, medical and corporate fields",
      href: "/ministries",
    },
    {
      label: "Music & Worship",
      description: "Choral networks, brass bands and congregational praise",
      href: "/ministries",
    },
  ],
  Resources: [
    {
      label: "Sermons",
      description: "Watch and listen to life-transforming messages",
      href: "/resources",
    },
    {
      label: "Downloads",
      description: "Access official documents, hymnals, and manuals",
      href: "/resources",
    },
    {
      label: "Publications",
      description: "The Light Newspaper and quarterly theological journals",
      href: "/resources",
    },
    {
      label: "Bible Study",
      description: "52-week study manuals and personal growth guides",
      href: "/resources",
    },
    {
      label: "Church Documents",
      description: "GCC guidelines, constitution, and administrative manuals",
      href: "/resources",
    },
  ],
  Events: [
    {
      label: "Upcoming Events",
      description: "Conferences, summits and fellowship gatherings",
      href: "/events",
    },
    {
      label: "Annual Conference",
      description: "General Church Council annual supreme assembly",
      href: "/events",
    },
    {
      label: "Church Calendar",
      description:
        "Full year schedule of national and regional activities",
      href: "/events",
    },
  ],
  News: [
    {
      label: "Press Releases",
      description: "Official statements from the General Secretariat",
      href: "/news",
    },
    {
      label: "Blog & Reflections",
      description: "Theological insights and pastoral reflections",
      href: "/news",
    },
    {
      label: "Announcements",
      description: "Institutional updates and community notices",
      href: "/news",
    },
  ],
  Contact: [
    {
      label: "Headquarters",
      description: "HQ location, phone numbers and executive offices in Jos",
      href: "/contact",
    },
    {
      label: "Contact Form",
      description:
        "Direct contact form for administrative and membership inquiries",
      href: "/contact",
    },
    {
      label: "Prayer Request",
      description:
        "Submit confidential prayer requests to our intercessory team",
      href: "/contact",
    },
    {
      label: "Find a Church",
      description: "Locate local assemblies across Nigeria and abroad",
      href: "#find-a-church",
    },
  ],
};

const navItems = [
  { label: "Home", href: "/", hasDropdown: false },
  { label: "About", href: "/about", hasDropdown: true },
  { label: "Ministries", href: "/ministries", hasDropdown: true },
  { label: "Resources", href: "/resources", hasDropdown: true },
  { label: "Events", href: "/events", hasDropdown: true },
  { label: "News", href: "/news", hasDropdown: true },
  { label: "Contact", href: "/contact", hasDropdown: true },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(
    null
  );
  const [findChurchOpen, setFindChurchOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDropdownItemClick = (item: DropdownItem) => {
    setOpenDropdown(null);
    setMobileMenuOpen(false);
    setMobileOpenDropdown(null);
    if (item.href === "#find-a-church") {
      setFindChurchOpen(true);
    }
  };

  return (
    <>
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
        <nav className="bg-[#111827] border-b border-gray-800" ref={navRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-14">
              {/* Logo */}
              <Link
                href="/"
                className="flex-shrink-0 flex items-center gap-2.5"
              >
                <Image
                  src="/cocinlogo.png"
                  alt="COCIN Logo"
                  width={36}
                  height={36}
                />
                <div className="hidden sm:block">
                  <div className="text-white font-bold text-sm leading-tight">
                    COCIN
                  </div>
                  <div className="text-gray-400 text-[10px] leading-tight uppercase tracking-wider">
                    Church of Christ in Nations
                  </div>
                </div>
              </Link>

              {/* Desktop Nav */}
              <div className="hidden md:flex items-center gap-1">
                {navItems.map((item) =>
                  item.hasDropdown ? (
                    <div key={item.label} className="relative">
                      <button
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === item.label ? null : item.label
                          )
                        }
                        className="flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors text-gray-300 hover:text-white"
                      >
                        {item.label}
                        <ChevronDown
                          size={14}
                          className={`opacity-60 transition-transform duration-200 ${
                            openDropdown === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Dropdown Panel */}
                      {openDropdown === item.label &&
                        dropdownData[item.label] && (
                          <div className="absolute top-full left-0 mt-1 w-[280px] bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50">
                            {dropdownData[item.label].map(
                              (dropItem, idx) => {
                                const isLast =
                                  idx ===
                                  dropdownData[item.label].length - 1;

                                if (dropItem.href === "#find-a-church") {
                                  return (
                                    <button
                                      key={dropItem.label}
                                      onClick={() =>
                                        handleDropdownItemClick(dropItem)
                                      }
                                      className={`block w-full text-left px-5 py-3 hover:bg-gray-50 transition-colors ${
                                        !isLast
                                          ? "border-b border-gray-100"
                                          : ""
                                      }`}
                                    >
                                      <div className="text-sm font-semibold text-gray-900">
                                        {dropItem.label}
                                      </div>
                                      <div className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                                        {dropItem.description}
                                      </div>
                                    </button>
                                  );
                                }

                                return (
                                  <Link
                                    key={dropItem.label}
                                    href={dropItem.href}
                                    onClick={() =>
                                      handleDropdownItemClick(dropItem)
                                    }
                                    className={`block px-5 py-3 hover:bg-gray-50 transition-colors ${
                                      !isLast
                                        ? "border-b border-gray-100"
                                        : ""
                                    }`}
                                  >
                                    <div className="text-sm font-semibold text-gray-900">
                                      {dropItem.label}
                                    </div>
                                    <div className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                                      {dropItem.description}
                                    </div>
                                  </Link>
                                );
                              }
                            )}
                          </div>
                        )}
                    </div>
                  ) : (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors ${
                        item.label === "Home"
                          ? "text-white"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )
                )}
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
            <div className="md:hidden bg-[#111827] border-t border-gray-800 pb-4 max-h-[80vh] overflow-y-auto">
              <div className="px-4 pt-2 space-y-1">
                {navItems.map((item) =>
                  item.hasDropdown && dropdownData[item.label] ? (
                    <div key={item.label}>
                      <button
                        onClick={() =>
                          setMobileOpenDropdown(
                            mobileOpenDropdown === item.label
                              ? null
                              : item.label
                          )
                        }
                        className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                      >
                        {item.label}
                        <ChevronDown
                          size={14}
                          className={`opacity-60 transition-transform duration-200 ${
                            mobileOpenDropdown === item.label
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </button>
                      {mobileOpenDropdown === item.label && (
                        <div className="ml-4 mt-1 space-y-0.5 border-l border-gray-700 pl-3">
                          {dropdownData[item.label].map((dropItem) => {
                            if (dropItem.href === "#find-a-church") {
                              return (
                                <button
                                  key={dropItem.label}
                                  onClick={() =>
                                    handleDropdownItemClick(dropItem)
                                  }
                                  className="block w-full text-left px-3 py-2 text-sm text-gray-400 hover:text-white transition-colors"
                                >
                                  {dropItem.label}
                                </button>
                              );
                            }
                            return (
                              <Link
                                key={dropItem.label}
                                href={dropItem.href}
                                onClick={() =>
                                  handleDropdownItemClick(dropItem)
                                }
                                className="block px-3 py-2 text-sm text-gray-400 hover:text-white transition-colors"
                              >
                                {dropItem.label}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="flex items-center justify-between px-3 py-2.5 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )
                )}
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

      {/* Find a Church Modal */}
      <FindChurchModal
        isOpen={findChurchOpen}
        onClose={() => setFindChurchOpen(false)}
      />
    </>
  );
}
