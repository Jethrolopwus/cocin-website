import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Target,
  Eye,
  Heart,
  Calendar,
  Users,
} from "lucide-react";

const departments = [
  { label: "Health and Social Services", slug: "health-and-social-services" },
  { label: "Evangelism and Mission", slug: "evangelism-and-mission" },
  { label: "Finance", slug: "finance" },
  { label: "Internal Audit", slug: "internal-audit" },
  { label: "Education", slug: "education" },
  { label: "Personnel", slug: "personnel" },
  { label: "Church Growth", slug: "church-growth" },
  { label: "ICT", slug: "ict" },
];

const pastLeaders = [
  { name: "Chief (Barrister) Samuel Gitik Mafuyai", tenure: "1985 – 1987" },
  { name: "Mr. Daniel Makut", tenure: "1987 – 1992" },
  { name: "Mr. Yusufu Dalyop", tenure: "1992 – 1993" },
  { name: "Dr. Daniel Nanshep Gobgab", tenure: "1993 – 1997" },
  { name: "Dr. Gyang Dalyop Dantong", tenure: "1997 – 1998" },
  { name: "Dr. Daniel Nanshep Gobgab", tenure: "2000 – 2006" },
  { name: "Dr. Emmanuel Nanle", tenure: "2007 – 2014" },
  { name: "Mrs. Josephine William Goro", tenure: "Jan – May 2015" },
  { name: "Dr. Kuden K. Deyin", tenure: "Jun 2015 – Mar 2016" },
  { name: "Dr. Nantok Dami", tenure: "2016 – 2021" },
  { name: "Dr. Kuden K. Deyin", tenure: "2021 – Present" },
];

export default function HealthSocialServicesPage() {
  return (
    <main className="w-full">
      {/* Hero Header */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/departments/finance"
            className="inline-flex items-center gap-1.5 text-[#2563EB] text-sm font-medium mb-4 hover:underline"
          >
            <ArrowLeft size={14} />
            All Departments
          </Link>
          <span className="text-[#2563EB] font-semibold text-xs tracking-widest uppercase mb-3 block">
            COCIN Departments
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Health and Social Services Department
          </h1>
          <p className="text-gray-500 max-w-2xl leading-relaxed">
            Providing excellent, accessible medical care to everyone regardless
            of background — demonstrating the love of Jesus Christ through
            compassionate service since 1985.
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-hide">
            {departments.map((dept) => (
              <Link
                key={dept.slug}
                href={`/departments/${dept.slug}`}
                className={`flex-shrink-0 px-4 py-2.5 rounded-full text-sm font-medium transition-colors ${
                  dept.slug === "health-and-social-services"
                    ? "bg-[#2563EB] text-white"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                }`}
              >
                {dept.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-[#F5F3EF] py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column — Content */}
            <div className="lg:col-span-2 space-y-8">

              {/* Overview */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8">
                <span className="text-[#2563EB] font-semibold text-xs tracking-widest uppercase mb-2 block">
                  Brief History
                </span>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Organised as a Department in 1985
                </h2>
                <p className="text-gray-500 leading-relaxed mb-4">
                  The Department of Health and Social Services does not have a
                  single founding date. Mission hospitals and dispensaries were
                  already operating in the early to mid-1900s as part of
                  COCIN&apos;s compassionate outreach. However, these scattered
                  healthcare efforts were brought together into a formal,
                  organised structure and recognised as a Department in{" "}
                  <strong className="text-gray-700">1985</strong>.
                </p>
                <p className="text-gray-500 leading-relaxed">
                  Since then, the department has grown to become a vital pillar
                  of COCIN&apos;s witness — acting as a beacon of hope by providing
                  excellent and accessible medical care to everyone regardless
                  of background, and demonstrating the love of Jesus Christ
                  through dedicated service to the sick and vulnerable.
                </p>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center">
                  <div className="w-10 h-10 bg-[#EFF6FF] rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Calendar size={20} className="text-[#2563EB]" />
                  </div>
                  <div className="text-3xl font-bold text-[#2563EB] mb-1">1985</div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Established
                  </div>
                </div>
                <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center">
                  <div className="w-10 h-10 bg-[#EFF6FF] rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Users size={20} className="text-[#2563EB]" />
                  </div>
                  <div className="text-3xl font-bold text-[#2563EB] mb-1">11</div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Past Leaders
                  </div>
                </div>
                <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center">
                  <div className="w-10 h-10 bg-[#EFF6FF] rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Heart size={20} className="text-[#2563EB]" />
                  </div>
                  <div className="text-3xl font-bold text-[#2563EB] mb-1">40+</div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Years of Service
                  </div>
                </div>
              </div>

              {/* Vision & Mission */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl border border-gray-200 p-6">
                  <div className="w-10 h-10 bg-[#EFF6FF] rounded-xl flex items-center justify-center mb-4">
                    <Eye size={20} className="text-[#2563EB]" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">
                    Vision
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    To ensure that all men and women receive total salvation and
                    healing for their spirit, soul and body through the
                    compassionate healing ministry of the Church.
                  </p>
                </div>
                <div className="bg-white rounded-2xl border border-gray-200 p-6">
                  <div className="w-10 h-10 bg-[#EFF6FF] rounded-xl flex items-center justify-center mb-4">
                    <Target size={20} className="text-[#2563EB]" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">
                    Mission
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    To provide excellent, accessible medical care to everyone
                    regardless of background, acting as a beacon of hope and
                    demonstrating the love of Jesus Christ through service.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column — Director Card & Leadership Succession */}
            <div className="lg:col-span-1 space-y-6">
              {/* Director Card */}
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden sticky top-28">
                <div className="relative w-full" style={{ height: 280 }}>
                  <Image
                    src="/DP.png"
                    alt="Director of Health and Social Services"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 350px"
                  />
                </div>
                <div className="p-6">
                  <span className="text-[#2563EB] font-semibold text-xs tracking-widest uppercase block mb-1">
                    Director
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    Dr. Kuden K. Deyin
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Serving since 2021, leading COCIN&apos;s healthcare and social
                    services outreach across all institutions.
                  </p>
                </div>
              </div>

              {/* Leadership Succession */}
              <div className="bg-[#1F2937] rounded-2xl p-6 text-white">
                <h3 className="text-base font-bold mb-4">
                  Leadership Succession
                </h3>
                <div className="space-y-3">
                  {pastLeaders.map((leader, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center justify-between text-sm pb-3 ${
                        idx !== pastLeaders.length - 1
                          ? "border-b border-gray-700"
                          : ""
                      }`}
                    >
                      <span className="text-gray-300 font-medium">
                        {leader.name}
                      </span>
                      <span className="text-gray-500 text-xs flex-shrink-0 ml-3">
                        {leader.tenure}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
