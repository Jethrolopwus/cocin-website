"use client";

import { useState } from "react";
import Image from "next/image";

const categories = [
  "All Ministries",
  "Youth Ministry",
  "Women's Fellowship",
  "Children Ministry",
  "Foreign Mission",
  "Chaplaincy Services",
  "Music & Worship",
];

const ministries = [
  {
    image: "/Container6.png",
    title: "Youth Ministry",
    subtitle: "Discipling the Next Generation",
    description:
      "Vibrant fellowship equipping teenagers and young adults with spiritual conviction, academic excellence, and leadership skills.",
    director: "Rev. Emmanuel Pam",
    category: "Youth Ministry",
  },
  {
    image: "/Container5.png",
    title: "Women's Fellowship",
    subtitle: "Pillars of Prayer & Home",
    description:
      "Uniting Christian women in spiritual growth, maternal guidance, skill acquisition, and compassionate widow care.",
    director: "Mrs. Naomi Mohzo",
    category: "Women's Fellowship",
  },
  {
    image: "/Container4.png",
    title: "Children Ministry",
    subtitle: "Nurturing Young Hearts",
    description:
      "Child-centered Sunday school programs, VBS, and moral foundation building tailored for ages 3 to 14.",
    director: "Mrs. Grace D. Lar",
    category: "Children Ministry",
  },
  {
    image: "/Container3.png",
    title: "Foreign Mission",
    subtitle: "To the Ends of the Earth",
    description:
      "Active cross-cultural missionary stations in Niger Republic, Cameroon, Benin, the United Kingdom, and North America.",
    director: "Rev. Solomon Danfulani",
    category: "Foreign Mission",
  },
  {
    image: "/Container2.png",
    title: "Chaplaincy Services",
    subtitle: "Salt & Light Beyond Church Walls",
    description:
      "Providing spiritual counsel in hospitals, prisons, security agencies, universities, and secondary schools nationwide.",
    director: "Rev. Chap. Markus Gyang",
    category: "Chaplaincy Services",
  },
  {
    image: "/Container.png",
    title: "Music & Worship Ministry",
    subtitle: "Exalting the Holy One",
    description:
      "Harmonious choir networks, indigenous brass bands, and contemporary praise teams lifting high the name of Jesus.",
    director: "Evang. Luka Mangwat",
    category: "Music & Worship",
  },
];

export default function MinistriesPage() {
  const [activeCategory, setActiveCategory] = useState("All Ministries");

  const filtered =
    activeCategory === "All Ministries"
      ? ministries
      : ministries.filter((m) => m.category === activeCategory);

  return (
    <main className="w-full">
      {/* Hero Header */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[#2563EB] font-semibold text-xs tracking-widest uppercase mb-3 block">
            Fellowships & Mission Wings
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            COCIN Integrated Ministries Hub
          </h1>
          <p className="text-gray-500 max-w-2xl leading-relaxed">
            Discover how every department, fellowship wing, and mission outreach
            operates together to build mature disciples and transform
            communities.
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto pb-4 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-[#2563EB] text-white"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Ministry Cards Grid */}
      <section className="bg-[#F5F3EF] py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((ministry) => (
              <div
                key={ministry.title}
                className="bg-white overflow-hidden"
                style={{
                  borderRadius: 18,
                  borderWidth: 1,
                  borderColor: "#E5E7EB",
                  borderStyle: "solid",
                }}
              >
                {/* Image Container */}
                <div className="relative w-full p-4 pb-0">
                  <div
                    className="relative w-full overflow-hidden"
                    style={{ height: 200, borderRadius: 14 }}
                  >
                    <Image
                      src={ministry.image}
                      alt={ministry.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 295px"
                    />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 pt-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-0.5">
                    {ministry.title}
                  </h3>
                  <p className="text-[#2563EB] text-sm font-medium italic mb-3">
                    {ministry.subtitle}
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">
                    {ministry.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">
                        Director / Leader
                      </div>
                      <div className="text-sm font-semibold text-gray-900">
                        {ministry.director}
                      </div>
                    </div>
                    <button className="text-sm font-medium text-gray-900 border border-gray-300 hover:bg-gray-50 px-4 py-2 rounded-full transition-colors">
                      View Hub
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
