import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";

export default function WelcomeSection() {
  return (
    <section className="w-full bg-[#FAF9F6] py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="flex flex-col md:flex-row">
            {/* Image Column */}
            <div className="relative md:w-[380px] flex-shrink-0">
              <div className="relative w-full h-80 md:h-full">
                <Image
                  src="/(Rev. Dr. Amos Mohzo — President, COCIN).png"
                  alt="Rev. Dr. Amos Mohzo — President, Church of Christ in Nations"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 380px"
                />
                {/* Name Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                  <h3 className="text-white font-semibold text-base">
                    Rev. Dr. Amos Mohzo
                  </h3>
                  <p className="text-gray-300 text-sm">
                    President, Church of Christ in Nations
                  </p>
                </div>
              </div>
            </div>

            {/* Text Column */}
            <div className="flex-1 p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
              {/* Label */}
              <span className="text-[#2563EB] font-semibold text-sm mb-3">
                Pastoral Welcome
              </span>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                Welcome to COCIN
              </h2>

              {/* Subheading */}
              <p className="text-lg font-semibold text-gray-800 mb-4">
                A Christ-centered church committed to raising disciples.
              </p>

              {/* Body */}
              <p className="text-gray-500 leading-relaxed mb-8">
                For over twelve decades, COCIN has stood firm on the unshakeable
                Gospel of Jesus Christ. We invite you to encounter His
                life-transforming grace through our worship, fellowship, and
                community transformation.
              </p>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 flex-wrap">
                <button className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-semibold px-6 py-3 rounded-full transition-colors text-sm">
                  Read Our Story
                  <ArrowRight size={16} />
                </button>
                <button className="inline-flex items-center gap-2 text-[#2563EB] hover:text-[#1d4ed8] font-semibold text-sm transition-colors">
                  Watch Addresses
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
