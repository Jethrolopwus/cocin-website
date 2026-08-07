import { Heart, Globe, Building2 } from "lucide-react";

const supportItems = [
  {
    icon: Heart,
    title: "Tithes & Offerings",
    description:
      "Sustain local church operations and pastoral care across all PCCs.",
  },
  {
    icon: Globe,
    title: "Mission Outreach",
    description:
      "Evangelism campaigns reaching unreached people groups in Nigeria and beyond.",
  },
  {
    icon: Building2,
    title: "Community Projects",
    description:
      "Schools, clinics, and skill-acquisition centres transforming lives.",
  },
];

export default function SupportMissionSection() {
  return (
    <section className="w-full bg-[#1F2937] py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">
          {/* Left Column — Text */}
          <div className="lg:max-w-md">
            <span className="text-[#2563EB] font-semibold text-xs tracking-widest uppercase mb-4 block">
              Support the Mission
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
              Partner with us to
              <br />
              <span className="text-[#2563EB]">change lives.</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              Your generosity fuels the work of the Church of Christ in Nations
              — from local fellowships to international missions. Every
              contribution makes an eternal difference.
            </p>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3">
              <button className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-semibold px-6 py-3 rounded-full transition-colors text-sm">
                <Heart size={16} />
                Give Now
              </button>
              <button className="inline-flex items-center gap-2 bg-[#374151] hover:bg-[#4B5563] text-white font-semibold px-6 py-3 rounded-full transition-colors text-sm border border-gray-600">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Column — Support Cards */}
          <div className="flex flex-col gap-4 lg:max-w-md w-full">
            {supportItems.map((item, index) => (
              <div
                key={index}
                className="bg-[#374151] rounded-2xl p-5 flex items-start gap-4 border border-gray-600/30"
              >
                <div className="w-10 h-10 bg-[#2563EB]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon size={18} className="text-[#2563EB]" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
