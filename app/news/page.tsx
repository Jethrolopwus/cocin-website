"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

const newsTabs = [
  "All Updates",
  "Press Releases & News",
  "Blog & Theological Insights",
  "Official Announcements",
];

const articles = [
  {
    badge: "News",
    badgeBg: "#DBEAFE",
    badgeText: "#1E40AF",
    date: "July 21, 2026",
    title:
      "COCIN President Delivers New Year Charge to Pastoral Staff in Jos",
    description:
      "Rev. Dr. Amos Mohzo urges ministers to remain steadfast in prayer, integrity, and proactive community engagement across all PCC divisions.",
    author: "By Secretariat Press Office",
    category: "Press Releases & News",
  },
  {
    badge: "Announcements",
    badgeBg: "#D1FAE5",
    badgeText: "#065F46",
    date: "July 15, 2026",
    title:
      "Karl Kumm University Matrix Accreditation: New Science Laboratories Commissioned",
    description:
      "The university board celebrates landmark infrastructure expansions funded by church contributions and educational development grants.",
    author: "By KKU Media Unit",
    category: "Official Announcements",
  },
  {
    badge: "Blog",
    badgeBg: "#FEF3C7",
    badgeText: "#92400E",
    date: "July 08, 2026",
    title:
      "Reflections on 120 Years of SUM Heritage and Missionary Courage",
    description:
      "Tracing the historical journey of the Sudan United Mission from 1904 to the vibrant indigenous church body that COCIN is today.",
    author: "By Rev. Prof. Musa A. Gaiya",
    category: "Blog & Theological Insights",
  },
  {
    badge: "News",
    badgeBg: "#DBEAFE",
    badgeText: "#1E40AF",
    date: "June 28, 2026",
    title:
      "COCIN Women Fellowship Launches New Empowerment Initiative Across Northern States",
    description:
      "A comprehensive skills acquisition and economic empowerment programme targeting women in rural and semi-urban communities.",
    author: "By Women Fellowship Media",
    category: "Press Releases & News",
  },
  {
    badge: "Announcements",
    badgeBg: "#D1FAE5",
    badgeText: "#065F46",
    date: "June 20, 2026",
    title:
      "2026 GCC Assembly Registration Now Open for All PCC Delegates",
    description:
      "All Provincial Church Councils are urged to complete delegate registration before the September 30 deadline for the 105th Assembly.",
    author: "By General Secretariat",
    category: "Official Announcements",
  },
  {
    badge: "Blog",
    badgeBg: "#FEF3C7",
    badgeText: "#92400E",
    date: "June 12, 2026",
    title:
      "The Role of the Church in Nation-Building: A Biblical Perspective",
    description:
      "Exploring how COCIN's mission mandate intersects with civic responsibility, social justice, and transformational leadership.",
    author: "By Rev. Dr. Danlami Shemang",
    category: "Blog & Theological Insights",
  },
];

export default function NewsPage() {
  const [activeTab, setActiveTab] = useState("All Updates");

  const filtered =
    activeTab === "All Updates"
      ? articles
      : articles.filter((a) => a.category === activeTab);

  return (
    <main className="w-full">
      {/* Hero Header */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[#2563EB] font-semibold text-xs tracking-widest uppercase mb-3 block">
            Press Releases & Reflections
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            News, Blog & Official Announcements
          </h1>
          <p className="text-gray-500 max-w-2xl leading-relaxed">
            Stay informed with verified press releases, Karl Kumm University
            updates, and theological reflections.
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto pb-4 scrollbar-hide">
            {newsTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? "bg-[#2563EB] text-white"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="bg-[#F5F3EF] py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((article, index) => (
              <div
                key={index}
                className="bg-white overflow-hidden flex flex-col"
                style={{
                  borderRadius: 18,
                  borderWidth: 1,
                  borderColor: "#E5E7EB",
                  borderStyle: "solid",
                }}
              >
                {/* Card Content */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Badge + Date Row */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: article.badgeBg,
                        color: article.badgeText,
                      }}
                    >
                      {article.badge}
                    </span>
                    <span className="text-gray-400 text-sm">
                      {article.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-gray-900 mb-3 leading-snug">
                    {article.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">
                    {article.description}
                  </p>

                  {/* Footer */}
                  <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
                    <span className="text-gray-400 text-sm">
                      {article.author}
                    </span>
                    <a
                      href="#"
                      className="flex items-center gap-1 text-[#2563EB] hover:text-[#1d4ed8] text-sm font-semibold transition-colors"
                    >
                      Read
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-gray-400">
              No articles found in this category.
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
