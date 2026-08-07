import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const articles = [
  {
    image: "/article1.png",
    date: "July 21, 2026",
    readTime: "3 min read",
    title: "COCIN President Delivers New Year Charge to Pastoral Staff in Jos",
    description:
      "Rev. Dr. Amos Mohzo urges ministers to remain steadfast in prayer, integrity,",
  },
  {
    image: "/article2.png",
    date: "July 15, 2026",
    readTime: "4 min read",
    title:
      "Karl Kumm University Matrix Accreditation: New Science Laboratories Commissioned",
    description:
      "The university board celebrates landmark infrastructure expansions",
  },
  {
    image: "/article3.png",
    date: "July 08, 2026",
    readTime: "6 min read",
    title:
      "Reflections on 120 Years of SUM Heritage and Missionary Courage",
    description:
      "Tracing the historical journey of the Sudan United Mission from 1904 to the",
  },
];

export default function AnnouncementsSection() {
  return (
    <section className="w-full bg-[#EDE8DF] py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-start justify-between mb-10">
          <div>
            <span className="text-[#2563EB] font-semibold text-sm mb-2 block">
              Updates & Periodicals
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              News & Announcements
            </h2>
          </div>
          <a
            href="#"
            className="flex items-center gap-1.5 text-[#2563EB] hover:text-[#1d4ed8] font-medium text-sm transition-colors mt-6"
          >
            All News
            <ArrowRight size={16} />
          </a>
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
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
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 295px"
                />
              </div>

              {/* Card Content */}
              <div className="p-5">
                {/* Date + Read Time */}
                <div className="flex items-center gap-3 mb-3 text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {article.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug">
                  {article.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {article.description}
                </p>

                {/* Read Article Link */}
                <a
                  href="#"
                  className="flex items-center justify-between text-[#2563EB] hover:text-[#1d4ed8] text-sm font-semibold transition-colors"
                >
                  Read Article
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
