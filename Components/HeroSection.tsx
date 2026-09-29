"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { MapPin, Play } from "lucide-react";
import FindChurchModal from "./FindChurchModal";

const carouselImages = [
  { src: "/President.png", alt: "COCIN President" },
  { src: "/GS.png", alt: "COCIN General Secretary" },
  { src: "/DP.png", alt: "COCIN Leadership" },
  { src: "/Frame-5.png", alt: "COCIN Community 3" },
  { src: "/DDP.png", alt: "COCIN Deputy Director" },
  { src: "/Sylvester_Dachomo.png", alt: "Sylvester Dachomo" },
  { src: "/DF.png", alt: "COCIN Director of Finance" },
  { src: "/VP.png", alt: "COCIN Vice President" },
];

const SLIDE_INTERVAL = 4000; // ms

const stats = [
  { value: "3,500+", label: "Local Congregations" },
  { value: "100+", label: "PCC Divisions" },
  { value: "18", label: "Global Mission Fields" },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [findChurchOpen, setFindChurchOpen] = useState(false);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section className="w-full">
        {/* Background Carousel Hero */}
        <div className="relative w-full h-[55vh] min-h-[420px] lg:h-[75vh] lg:min-h-[700px] overflow-hidden bg-[#0f172a]">
          {/* Slide images — all stacked, only the active one is visible */}
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`absolute transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"
                } inset-0 lg:left-[40%] lg:right-0 lg:top-0 lg:bottom-0`}
            >
              {/* Mobile: full cover; Desktop: constrained to right portion */}
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={index === 0}
                className="object-cover object-[center_22%] lg:object-[center_15%]"
                sizes="(min-width: 1024px) 60vw, 100vw"
              />
            </div>
          ))}

          {/* Overlay: uniform on mobile; gradient on desktop blending image into dark left */}
          <div className="absolute inset-0 bg-black/55 lg:bg-transparent" />
          <div
            className="absolute inset-0 hidden lg:block"
            style={{
              background:
                "linear-gradient(to right, #0f172a 0%, #0f172a 38%, rgba(15,23,42,0.85) 48%, rgba(15,23,42,0.4) 65%, rgba(15,23,42,0.15) 85%, rgba(15,23,42,0.05) 100%)",
            }}
          />

          {/* Text content — centred on mobile, left-aligned on desktop */}
          <div className="relative z-10 h-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center text-center lg:items-start lg:text-left lg:max-w-7xl pb-16 lg:pb-24">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-16">
                <span className="w-2 h-2 rounded-full bg-[#60A5FA]"></span>
                <span className="text-sm text-white/90 font-medium">
                  Founded 1904 · Over 120 Years of Gospel Impact
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
                Growing disciples.
                <br />
                <span className="text-[#60A5FA]">Changing nations.</span>
              </h1>

              {/* Subheading */}
              <p className="text-lg sm:text-xl text-white/75 mb-10 max-w-lg">
                3,500+ congregations. 18 global
                <br />
                missions. One Lord.
              </p>

              {/* CTA Buttons */}
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => setFindChurchOpen(true)}
                  className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-semibold px-6 py-3 rounded-full transition-colors text-sm shadow-lg"
                >
                  <MapPin size={16} />
                  Find a Church
                </button>
                <button className="inline-flex items-center gap-2 text-white hover:text-white/80 font-semibold text-sm transition-colors">
                  <Play size={16} />
                  Watch Sermons
                </button>
              </div>
            </div>
          </div>

          {/* Slide indicator dots — aligned with content container */}
          <div className="absolute bottom-6 z-10 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center lg:justify-start gap-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`rounded-full transition-all duration-300 ${index === current
                    ? "w-6 h-2 bg-white"
                    : "w-2 h-2 bg-white/40 hover:bg-white/70"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-[#FAF9F6] border-t border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Find a Church Modal */}
      <FindChurchModal
        isOpen={findChurchOpen}
        onClose={() => setFindChurchOpen(false)}
      />
    </>
  );
}
