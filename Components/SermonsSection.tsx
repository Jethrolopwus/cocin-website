import Image from "next/image";
import { Calendar, ArrowRight, Video, Volume2 } from "lucide-react";

const sermons = [
  {
    image: "/sermon3.png",
    scripture: "Hebrews 12:26-28",
    date: "July 19, 2026",
    title: "Unwavering Faith in Times of Global Shaking",
    speaker: "Rev. Dr. Amos Mohzo · COCIN President",
  },
  {
    image: "/sermon2.png",
    scripture: "Matthew 28:18-20",
    date: "July 12, 2026",
    title: "Raising Disciples with Kingdom Impact",
    speaker: "Rev. Assoc. Prof. Benjamin Pokol · COCIN Vice President",
  },
  {
    image: "/sermon1.png",
    scripture: "2 Corinthians 9:6-11",
    date: "July 05, 2026",
    title: "The Grace of Stewardships and Generosity",
    speaker: "Rev. Dauda A. Jimra · General Secretary",
  },
];

export default function SermonsSection() {
  return (
    <section className="w-full bg-[#FAF9F6] py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-start justify-between mb-10">
          <div>
            <span className="text-[#2563EB] font-semibold text-sm mb-2 block">
              Spiritual Nourishment
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Latest Sermons
            </h2>
          </div>
          <a
            href="#"
            className="flex items-center gap-1.5 text-[#2563EB] hover:text-[#1d4ed8] font-medium text-sm transition-colors mt-6"
          >
            Browse Full Library
            <ArrowRight size={16} />
          </a>
        </div>

        {/* Sermon Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sermons.map((sermon, index) => (
            <div
              key={index}
              className="bg-white overflow-hidden"
              style={{
                borderRadius: 18,
                borderWidth: 1,
                borderColor: "#E5E7EB",
                borderStyle: "solid",
              }}
            >
              {/* Image Container */}
              <div className="relative w-full" style={{ height: 200 }}>
                <Image
                  src={sermon.image}
                  alt={sermon.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 295px"
                />
              </div>

              {/* Card Content */}
              <div className="p-5">
                {/* Scripture + Date */}
                <div className="flex items-center gap-3 mb-2 text-sm">
                  <span className="text-[#2563EB] font-medium">
                    {sermon.scripture}
                  </span>
                  <span className="flex items-center gap-1 text-gray-400">
                    <Calendar size={12} />
                    {sermon.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug">
                  {sermon.title}
                </h3>

                {/* Speaker */}
                <p className="text-gray-400 text-sm mb-4 flex items-center gap-1.5">
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
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  {sermon.speaker}
                </p>

                {/* Actions */}
                <div className="flex items-center justify-between">
                  <button className="inline-flex items-center gap-2 bg-[#1F2937] hover:bg-[#111827] text-white text-sm font-medium px-4 py-2 rounded-full transition-colors">
                    <Video size={14} />
                    Watch
                  </button>
                  <button className="text-gray-400 hover:text-gray-600 transition-colors">
                    <Volume2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
