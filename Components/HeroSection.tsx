"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { MapPin, Play, ChevronLeft, ChevronRight } from "lucide-react";

const carouselImages = [
  { src: "/Frame-2.png", alt: "COCIN Community 1" },
  { src: "/Frame-4.png", alt: "COCIN Community 2" },
  { src: "/Frame-5.png", alt: "COCIN Community 3" },
  { src: "/Frame-6.png", alt: "COCIN Community 4" },
  { src: "/Frame-8.png", alt: "COCIN Community 5" },
];

const stats = [
  { value: "3,500+", label: "Local Congregations" },
  { value: "100+", label: "PCC Divisions" },
  { value: "18", label: "Global Mission Fields" },
];

export default function HeroSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      slidesToScroll: 1,
      containScroll: false,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="w-full bg-white">
      {/* Hero Text Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#2563EB]"></span>
          <span className="text-sm text-gray-700 font-medium">
            Founded 1904 · Over 120 Years of Gospel Impact
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
          Growing disciples.
          <br />
          <span className="text-[#2563EB]">Changing nations.</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-gray-500 mb-8 max-w-lg mx-auto">
          3,500+ congregations. 18 global
          <br />
          missions. One Lord.
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <button className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-semibold px-6 py-3 rounded-full transition-colors text-sm">
            <MapPin size={16} />
            Find a Church
          </button>
          <button className="inline-flex items-center gap-2 text-[#2563EB] hover:text-[#1d4ed8] font-semibold text-sm transition-colors">
            <Play size={16} />
            Watch Sermons
          </button>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="relative w-full pb-12">
        {/* Carousel Navigation Arrows */}
        <button
          onClick={scrollPrev}
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 hover:bg-white shadow-lg rounded-full flex items-center justify-center transition-all hover:scale-105"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} className="text-gray-700" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 hover:bg-white shadow-lg rounded-full flex items-center justify-center transition-all hover:scale-105"
          aria-label="Next slide"
        >
          <ChevronRight size={20} className="text-gray-700" />
        </button>

        {/* Embla Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4 px-4">
            {carouselImages.map((image, index) => (
              <div
                key={index}
                className="flex-none"
                style={{ width: 224 }}
              >
                <div
                  className="relative overflow-hidden"
                  style={{
                    width: 224,
                    height: 312,
                    borderRadius: 12,
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="224px"
                  />
                </div>
              </div>
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
  );
}
