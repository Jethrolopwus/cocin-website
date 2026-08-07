"use client";

import { useState } from "react";
import Link from "next/link";
import GiveModal from "./GiveModal";
import FindChurchModal from "./FindChurchModal";

const aboutLinks = [
  { label: "Who We Are", href: "/about" },
  { label: "Vision & Mission", href: "/about#vision-mission" },
  { label: "Leadership", href: "/about#leadership" },
  { label: "History", href: "/about#about-cocin" },
  { label: "Governance", href: "/about#constitution" },
];

const connectLinks = [
  { label: "Find a Church", href: "#find-a-church" },
  { label: "Ministries", href: "/ministries" },
  { label: "Events", href: "/events" },
  { label: "Prayer Request", href: "/contact" },
  { label: "Contact Us", href: "/contact" },
];

const resourceLinks = [
  { label: "Sermons", href: "/#sermons" },
  { label: "News & Blog", href: "/news" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Downloads", href: "/about#constitution" },
  { label: "Give", href: "#give" },
];

export default function Footer() {
  const [giveModalOpen, setGiveModalOpen] = useState(false);
  const [findChurchOpen, setFindChurchOpen] = useState(false);

  const handleLinkClick = (href: string, e: React.MouseEvent) => {
    if (href === "#give") {
      e.preventDefault();
      setGiveModalOpen(true);
    } else if (href === "#find-a-church") {
      e.preventDefault();
      setFindChurchOpen(true);
    }
  };

  const renderLink = (link: { label: string; href: string }) => {
    if (link.href === "#give" || link.href === "#find-a-church") {
      return (
        <li key={link.label}>
          <button
            onClick={(e) => handleLinkClick(link.href, e as unknown as React.MouseEvent)}
            className="text-gray-500 hover:text-gray-800 text-sm transition-colors"
          >
            {link.label}
          </button>
        </li>
      );
    }
    return (
      <li key={link.label}>
        <Link
          href={link.href}
          className="text-gray-500 hover:text-gray-800 text-sm transition-colors"
        >
          {link.label}
        </Link>
      </li>
    );
  };

  return (
    <>
      <footer className="w-full">
        {/* Main Footer */}
        <div className="bg-[#EDE8DF]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {/* Brand Column */}
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-8 h-8 bg-[#2563EB] rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">C</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">COCIN</div>
                    <div className="text-gray-500 text-xs">
                      Church of Christ in Nations
                    </div>
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  Proclaiming the Gospel of Jesus Christ and discipling all
                  nations. Founded 1904, headquartered in Jos, Nigeria.
                </p>

                {/* Social Icons */}
                <div className="flex items-center gap-2">
                  {["FB", "TW", "IG", "YT"].map((label) => (
                    <a
                      key={label}
                      href="#"
                      className="w-8 h-8 bg-[#D5CFC5] hover:bg-[#c5bfb5] rounded-full flex items-center justify-center text-gray-600 text-xs font-semibold transition-colors"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>

              {/* About Column */}
              <div>
                <h3 className="font-bold text-gray-900 text-xs uppercase tracking-wider mb-4">
                  About
                </h3>
                <ul className="space-y-2.5">
                  {aboutLinks.map((link) => renderLink(link))}
                </ul>
              </div>

              {/* Connect Column */}
              <div>
                <h3 className="font-bold text-gray-900 text-xs uppercase tracking-wider mb-4">
                  Connect
                </h3>
                <ul className="space-y-2.5">
                  {connectLinks.map((link) => renderLink(link))}
                </ul>
              </div>

              {/* Resources Column */}
              <div>
                <h3 className="font-bold text-gray-900 text-xs uppercase tracking-wider mb-4">
                  Resources
                </h3>
                <ul className="space-y-2.5">
                  {resourceLinks.map((link) => renderLink(link))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-[#E2DCD2] border-t border-[#D5CFC5]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-gray-500 text-xs">
              Copyright © 2026 Church of Christ in Nations. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <Link
                href="/privacy"
                className="hover:text-gray-800 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-gray-800 transition-colors"
              >
                Terms of Use
              </Link>
              <Link
                href="/sitemap"
                className="hover:text-gray-800 transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <GiveModal
        isOpen={giveModalOpen}
        onClose={() => setGiveModalOpen(false)}
      />
      <FindChurchModal
        isOpen={findChurchOpen}
        onClose={() => setFindChurchOpen(false)}
      />
    </>
  );
}
