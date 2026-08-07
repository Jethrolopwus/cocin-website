import Image from "next/image";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";

const events = [
  {
    image: "/Frame-2.png",
    badge: "GCC National",
    badgeBg: "#E8D44D",
    badgeText: "#1a1a1a",
    category: "Conference",
    categoryBg: "#EFF6FF",
    categoryText: "#2563EB",
    date: "November 17 - 21, 2026",
    time: "08:00 AM Daily",
    title: "105th General Church Council (GCC) Assembly",
    description:
      "The supreme decision-making gathering of delegates, pastors, and church executives from all",
    location: "COCIN Headquarters Conference Hall, Jos",
    isActive: true,
  },
  {
    image: "/Frame-4.png",
    badge: "Youth",
    badgeBg: "#D1FAE5",
    badgeText: "#065F46",
    category: "",
    categoryBg: "",
    categoryText: "",
    date: "August 25 - 30, 2026",
    time: "All Day",
    title: "National Youth Fellowship Annual Camp",
    description:
      "Gathering over 5,000 young believers for intensive Bible exposition, career workshops, worship,",
    location: "Karl Kumm University Campus, Vom",
    isActive: false,
  },
  {
    image: "/Frame-5.png",
    badge: "Women",
    badgeBg: "#DBEAFE",
    badgeText: "#1E40AF",
    category: "",
    categoryBg: "",
    categoryText: "",
    date: "September 15 - 19, 2026",
    time: "09:00 AM - 04:00 PM",
    title: "COCIN Women Fellowship International Convention",
    description:
      "A spiritual retreat empowering women in godly family management, entrepreneurship,",
    location: "Jos Township Stadium, Plateau State",
    isActive: false,
  },
  {
    image: "/Frame-6.png",
    badge: "Summit",
    badgeBg: "#E5E7EB",
    badgeText: "#374151",
    category: "",
    categoryBg: "",
    categoryText: "",
    date: "October 06 - 08, 2026",
    time: "09:00 AM Daily",
    title: "Clergy & Ministers Pastoral Leadership Summit",
    description:
      "Refresher training for ordained pastors, chaplains, and mission leaders on contemporary",
    location: "Centenary Chapel, Jos Headquarters",
    isActive: false,
  },
];

export default function UpcomingEventsSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-start justify-between mb-10">
          <div>
            <span className="text-[#2563EB] font-semibold text-sm mb-2 block">
              Gatherings & Assemblies
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Upcoming Events
            </h2>
          </div>
          <a
            href="#"
            className="flex items-center gap-1.5 text-[#2563EB] hover:text-[#1d4ed8] font-medium text-sm transition-colors mt-6"
          >
            View Full Calendar
            <ArrowRight size={16} />
          </a>
        </div>

        {/* Events List */}
        <div className="space-y-4">
          {events.map((event, index) => (
            <div
              key={index}
              className={`rounded-2xl border p-6 flex flex-col sm:flex-row items-start gap-5 transition-all duration-300 ${
                event.isActive
                  ? "bg-[#C1BAAC] border-[#C1BAAC]"
                  : "bg-white border-gray-200 hover:border-gray-300"
              }`}
            >
              {/* Circular Image */}
              <div className="flex-shrink-0 relative">
                <div className="w-[100px] h-[100px] rounded-full overflow-hidden relative">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                    sizes="100px"
                  />
                </div>
                {/* Badge on image */}
                <span
                  className="absolute top-0 left-0 text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{
                    backgroundColor: event.badgeBg,
                    color: event.badgeText,
                  }}
                >
                  {event.badge}
                </span>
              </div>

              {/* Event Info */}
              <div className="flex-1 min-w-0">
                {/* Category + Date + Time row */}
                <div className="flex flex-wrap items-center gap-3 mb-2 text-sm text-gray-500">
                  {event.category && (
                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: event.categoryBg,
                        color: event.categoryText,
                      }}
                    >
                      {event.category}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <Calendar size={13} />
                    {event.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={13} />
                    {event.time}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {event.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm mb-2 leading-relaxed">
                  {event.description}
                </p>

                {/* Location */}
                <div className="flex items-center gap-1.5 text-sm text-gray-500">
                  <MapPin size={13} className="text-[#2563EB]" />
                  <span>{event.location}</span>
                </div>
              </div>

              {/* Details Button */}
              <div className="flex-shrink-0 self-center">
                <button
                  className="text-white text-sm font-medium transition-colors"
                  style={{
                    backgroundColor: "#2E2D29",
                    borderRadius: "33554400px",
                    paddingTop: "10.63px",
                    paddingRight: "21.25px",
                    paddingBottom: "10.63px",
                    paddingLeft: "21.25px",
                    width: "86.5px",
                    height: "42.25px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
