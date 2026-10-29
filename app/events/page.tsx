"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";

const eventTabs = [
  "Upcoming Assemblies",
  "Annual GCC Conference",
  "Church Calendar",
];

const events = [
  {
    badge: "Conference",
    badgeBg: "#EFF6FF",
    badgeText: "#2563EB",
    date: "November 2 - 7, 2026 (08:00 AM Daily)",
    title: "105th General Church Council (GCC) Assembly",
    description:
      "The supreme decision-making gathering of delegates, pastors, and church executives from all PCCs across Nigeria and international missions.",
    location: "COCIN Headquarters Church Auditorium, Jos",
    isFeatured: true,
  },
];

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState("Upcoming Assemblies");

  return (
    <main className="w-full">
      {/* Hero Header */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[#2563EB] font-semibold text-xs tracking-widest uppercase mb-3 block">
            National Assemblies & Calendar
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Events & General Church Council Assemblies
          </h1>
          <p className="text-gray-500 max-w-2xl leading-relaxed">
            Stay connected with General Church Council assemblies, national
            youth camps, women fellowship conventions, and pastoral summits.
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto pb-4 scrollbar-hide">
            {eventTabs.map((tab) => (
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

      {/* Events Content */}
      <section className="bg-[#F5F3EF] py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          {/* Featured Event Banner */}
          <div className="bg-[#1F2937] rounded-2xl p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <span className="inline-block text-xs font-bold text-white bg-red-500 px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                Supreme Ruling Body
              </span>
              <h2 className="text-2xl font-bold text-white mb-2">
                105th General Church Council (GCC) Assembly
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Date: November 2 - 7, 2026 • Venue: Headquarters Secretariat
                Auditorium, Jos. Gathering all ordained clergy, PCC executives,
                and lay delegates across Nigeria and international fields.
              </p>
            </div>
            <button className="flex-shrink-0 inline-flex items-center justify-center bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-semibold px-6 py-3 rounded-full transition-colors text-sm whitespace-nowrap">
              Delegate Guidelines
            </button>
          </div>

          {/* Event Cards */}
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5"
            >
              <div className="flex-1 min-w-0">
                {/* Badge + Date */}
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: event.badgeBg,
                      color: event.badgeText,
                    }}
                  >
                    {event.badge}
                  </span>
                  <span className="text-gray-400 text-sm">•</span>
                  <span className="text-gray-500 text-sm">{event.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {event.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed mb-3">
                  {event.description}
                </p>

                {/* Location */}
                <div className="flex items-center gap-1.5 text-sm text-gray-500">
                  <MapPin size={14} className="text-[#2563EB]" />
                  <span>{event.location}</span>
                </div>
              </div>

              {/* CTA Button */}
              <button className="flex-shrink-0 self-start inline-flex items-center justify-center bg-[#1F2937] hover:bg-[#111827] text-white font-semibold px-5 py-3 rounded-full transition-colors text-sm whitespace-nowrap">
                Register / View Details
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
