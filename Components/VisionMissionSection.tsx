import { Target, Compass, ShieldCheck, Sparkles } from "lucide-react";

const coreValues = [
  {
    number: "01",
    title: "Faith",
    description: "Unwavering commitment to Biblical truth",
  },
  {
    number: "02",
    title: "Service",
    description: "Humility and compassionate Christ-like outreach",
  },
  {
    number: "03",
    title: "Integrity",
    description: "Financial, moral and spiritual accountability",
  },
  {
    number: "04",
    title: "Community",
    description: "Unity and fellowship across all cultures",
  },
  {
    number: "05",
    title: "Evangelism",
    description: "Zealous global proclamation of Jesus Christ",
  },
];

export default function VisionMissionSection() {
  return (
    <section className="w-full bg-[#111827] py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-[#2563EB] font-semibold text-sm mb-3 block">
            Guiding Pillars
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Vision, Mission & Core Values
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            The foundational convictions that anchor our global ministries.
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Vision Card */}
          <div className="bg-[#1F2937] rounded-2xl p-8 border border-gray-700/50">
            {/* Icon */}
            <div className="w-12 h-12 bg-[#2563EB] rounded-xl flex items-center justify-center mb-5">
              <Target size={22} className="text-white" />
            </div>

            {/* Label */}
            <span className="text-[#2563EB] font-semibold text-sm mb-2 block">
              Vision Statement
            </span>

            {/* Title */}
            <h3 className="text-xl font-bold text-white mb-3">
              Transforming Lives and Nations
            </h3>

            {/* Quote */}
            <p className="text-gray-400 leading-relaxed mb-6">
              &quot;To be a dynamic, self-supporting, Christ-like Church
              transformed and transforming the world.&quot;
            </p>

            {/* Bottom Note */}
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <Sparkles size={14} />
              <span>Inspiring spiritual maturity and holistic growth</span>
            </div>
          </div>

          {/* Mission Card */}
          <div className="bg-[#1F2937] rounded-2xl p-8 border border-gray-700/50">
            {/* Icon */}
            <div className="w-12 h-12 bg-[#2563EB] rounded-xl flex items-center justify-center mb-5">
              <Compass size={22} className="text-white" />
            </div>

            {/* Label */}
            <span className="text-[#2563EB] font-semibold text-sm mb-2 block">
              Mission Mandate
            </span>

            {/* Title */}
            <h3 className="text-xl font-bold text-white mb-3">
              Holistic Gospel & Discipleship
            </h3>

            {/* Quote */}
            <p className="text-gray-400 leading-relaxed mb-6">
              &quot;To glorify God through holistic gospel preaching,
              discipleship, church planting, and social responsibility.&quot;
            </p>

            {/* Bottom Note */}
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <Sparkles size={14} />
              <span>
                Integrating spiritual care with educational and health
                development
              </span>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="bg-[#1F2937] rounded-2xl p-8 border border-gray-700/50">
          {/* Core Values Header */}
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-[#1F2937] border border-gray-600 rounded-xl flex items-center justify-center">
              <ShieldCheck size={18} className="text-gray-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Core Values</h3>
              <p className="text-gray-500 text-sm">
                Non-negotiable principles guiding every COCIN minister and
                assembly
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-6">
            {coreValues.map((value) => (
              <div
                key={value.number}
                className="bg-[#374151] rounded-xl p-5 border border-gray-600/30"
              >
                <div className="text-[#2563EB] font-bold text-sm mb-1">
                  {value.number} · {value.title}
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
