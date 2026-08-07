import Image from "next/image";
import { ArrowRight } from "lucide-react";

const ministries = [
  {
    image: "/Container6.png",
    title: "Youth Ministry",
    subtitle: "Discipling the Next Generation",
    description:
      "Vibrant fellowship equipping teenagers and young adults with",
    director: "Dir: Rev. Emmanuel Pam",
  },
  {
    image: "/Container5.png",
    title: "Women's Fellowship",
    subtitle: "Pillars of Prayer & Home",
    description:
      "Uniting Christian women in spiritual growth, maternal guidance, skill",
    director: "Dir: Mrs. Naomi Mohzo",
  },
  {
    image: "/Container4.png",
    title: "Children Ministry",
    subtitle: "Nurturing Young Hearts",
    description:
      "Child-centered Sunday school programs, VBS, and moral foundation",
    director: "Dir: Mrs. Grace D. Lar",
  },
  {
    image: "/Container3.png",
    title: "Foreign Mission",
    subtitle: "To the Ends of the Earth",
    description:
      "Active cross-cultural missionary stations in Niger Republic, Cameroon,",
    director: "Dir: Rev. Solomon Danfulani",
  },
  {
    image: "/Container2.png",
    title: "Chaplaincy Services",
    subtitle: "Salt & Light Beyond Church Walls",
    description:
      "Providing spiritual counsel in hospitals, prisons, security agencies,",
    director: "Dir: Rev. Chap. Markus Gyang",
  },
  {
    image: "/Container.png",
    title: "Music & Worship Ministry",
    subtitle: "Exalting the Holy One",
    description:
      "Harmonious choir networks, indigenous brass bands, and",
    director: "Dir: Evang. Luka Mangwat",
  },
];

export default function MinistrySection() {
  return (
    <section className="w-full bg-[#EDE8DF] py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-12">
          <div>
            <span className="text-[#2563EB] font-semibold text-sm mb-2 block">
              Integrated Fellowship
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Ministry Hubs & Wings
            </h2>
          </div>
          <p className="text-gray-500 text-sm max-w-xs mt-3 md:mt-6 md:text-right">
            All specialized arms organized under a unified, intuitive structure.
          </p>
        </div>

        {/* Ministry Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ministries.map((ministry, index) => (
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
                  src={ministry.image}
                  alt={ministry.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 295px"
                />
              </div>

              {/* Card Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-0.5">
                  {ministry.title}
                </h3>
                <p className="text-[#2563EB] text-sm font-medium italic mb-3">
                  {ministry.subtitle}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {ministry.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-xs">
                    {ministry.director}
                  </span>
                  <a
                    href="#"
                    className="flex items-center gap-1 text-[#2563EB] hover:text-[#1d4ed8] text-sm font-medium transition-colors"
                  >
                    Explore
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
