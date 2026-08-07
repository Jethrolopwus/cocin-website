import Image from "next/image";
import Link from "next/link";
import {
  Target,
  Eye,
  Heart,
  CheckCircle,
  Users,
  Building2,
  ArrowLeft,
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

const leadershipSuccession = [
  { name: "Mr. David Owers", tenure: "July 1982 – 1987" },
  { name: "Mr. Joseph Azi", tenure: "1988" },
  { name: "Mr. Simon Madaki FCPA", tenure: "1989 – 1991" },
  { name: "Mrs. Hannatu Ochoga CNA", tenure: "1992 – 1998" },
  { name: "Mr. Alexander H. Aluma CNA", tenure: "1999 – 2007" },
  { name: "Mr. Yakubu Dutse CNA", tenure: "2007 – 2016" },
  { name: "Mrs. Monica B. Tang'an CNA", tenure: "2016 – 2020" },
  { name: "Mr. Philip I. Zerah CNA", tenure: "2021 – Present" },
];

const coreValues = [
  "Transparency and accountability.",
  "Preparation of timely, accurate and reliable financial reports for church leadership and stakeholders.",
  "Compliance with church policies.",
  "Prudence in handling financial resources.",
  "Excellence – we strive for the highest standards in financial management and services.",
];

export default function FinanceDepartmentPage() {
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
            Finance Department
          </h1>
          <p className="text-gray-500 max-w-2xl leading-relaxed">
            Ensuring faithful stewardship and excellence in management of God&apos;s
            resources for the fulfilment of the Church&apos;s Mission since 1972.
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
                  dept.slug === "finance"
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
              {/* Brief History */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8">
                <span className="text-[#2563EB] font-semibold text-xs tracking-widest uppercase mb-2 block">
                  Brief History
                </span>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Established in 1972
                </h2>
                <p className="text-gray-500 leading-relaxed">
                  The Finance Department was established in 1972. Mr. David Owers
                  was the first person to head the department as the Financial
                  Secretary then. Over the decades, the department has grown to
                  become a critical pillar of COCIN&apos;s administrative framework,
                  ensuring transparent and accountable management of all financial
                  resources.
                </p>
              </div>

              {/* Mission & Vision */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl border border-gray-200 p-6">
                  <div className="w-10 h-10 bg-[#EFF6FF] rounded-xl flex items-center justify-center mb-4">
                    <Target size={20} className="text-[#2563EB]" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">
                    Mission Statement
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    To ensure the adequate management of all financial resources
                    of the Church transparently and accountably towards the
                    fulfilment of COCIN&apos;s Vision and Mission statements in its
                    strategic plans.
                  </p>
                </div>
                <div className="bg-white rounded-2xl border border-gray-200 p-6">
                  <div className="w-10 h-10 bg-[#EFF6FF] rounded-xl flex items-center justify-center mb-4">
                    <Eye size={20} className="text-[#2563EB]" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">
                    Vision
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    To be a department that ensures faithful stewardship and
                    excellence in management of God&apos;s resources for the
                    fulfilment of the Church&apos;s Mission.
                  </p>
                </div>
              </div>

              {/* Core Values */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-[#EFF6FF] rounded-xl flex items-center justify-center">
                    <Heart size={20} className="text-[#2563EB]" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Goals / Core Values
                  </h2>
                </div>
                <div className="space-y-3">
                  {coreValues.map((value, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle
                        size={18}
                        className="text-green-500 mt-0.5 flex-shrink-0"
                      />
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Units & Staff */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl border border-gray-200 p-6">
                  <div className="w-10 h-10 bg-[#EFF6FF] rounded-xl flex items-center justify-center mb-4">
                    <Building2 size={20} className="text-[#2563EB]" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-3">
                    Departmental Units
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-[#2563EB] rounded-full flex-shrink-0" />
                      Expenditure and Control
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-[#2563EB] rounded-full flex-shrink-0" />
                      Pension and Terminal Benefits
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl border border-gray-200 p-6">
                  <div className="w-10 h-10 bg-[#EFF6FF] rounded-xl flex items-center justify-center mb-4">
                    <Users size={20} className="text-[#2563EB]" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">
                    Staff Strength
                  </h3>
                  <div className="text-4xl font-bold text-[#2563EB] mb-1">
                    218
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Staff members working across RCCs, units, and departments
                    accordingly.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column — Director Card & Succession */}
            <div className="lg:col-span-1 space-y-6">
              {/* Director Card */}
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden sticky top-28">
                <div className="relative w-full" style={{ height: 280 }}>
                  <Image
                    src="/DF.png"
                    alt="Mr. Philip I. Zerah - Director of Finance"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 350px"
                  />
                </div>
                <div className="p-6">
                  <span className="text-[#2563EB] font-semibold text-xs tracking-widest uppercase block mb-1">
                    Director of Finance
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    Mr. Philip I. Zerah CNA
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Serving since 2021, leading the financial stewardship and
                    accountability of COCIN&apos;s resources.
                  </p>
                </div>
              </div>

              {/* Leadership Succession */}
              <div className="bg-[#1F2937] rounded-2xl p-6 text-white">
                <h3 className="text-base font-bold mb-4">
                  Leadership Succession
                </h3>
                <div className="space-y-3">
                  {leadershipSuccession.map((leader, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center justify-between text-sm pb-3 ${
                        idx !== leadershipSuccession.length - 1
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
