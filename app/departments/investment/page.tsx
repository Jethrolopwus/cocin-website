import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  ArrowLeft,
  TrendingUp,
  Users,
  Layers,
  Wallet,
  Hotel,
  Scissors,
} from "lucide-react";

const departments = [
  { label: "Health and Social Services", slug: "health-and-social-services" },
  { label: "Evangelism and Mission", slug: "evangelism-and-mission" },
  { label: "Finance", slug: "finance" },
  { label: "Internal Audit", slug: "internal-audit" },
  { label: "Education", slug: "education" },
  { label: "Personnel", slug: "personnel" },
  { label: "Investment", slug: "investment" },
  { label: "Church Growth", slug: "church-growth" },
  { label: "ICT", slug: "ict" },
];

const coreUnits = [
  {
    icon: Wallet,
    name: "Funds and Portfolio Management",
    description:
      "Managing the church's investment portfolio, asset allocation, and financial growth strategies.",
    type: "Original",
  },
  {
    icon: TrendingUp,
    name: "Account and Collection",
    description:
      "Overseeing revenue collection, account reconciliation, and financial record-keeping for investments.",
    type: "Original",
  },
];

const transferredUnits = [
  {
    icon: Hotel,
    name: "COCIN Guest House",
    description:
      "Hospitality and accommodation services for church officials, visitors, and conference delegates.",
    type: "Transferred",
  },
  {
    icon: Hotel,
    name: "Emmanuel Guest House",
    description:
      "Additional lodging facility providing quality accommodation and event hosting services.",
    type: "Transferred",
  },
  {
    icon: Scissors,
    name: "Tailoring Unit",
    description:
      "Production of church vestments, uniforms, and textile services for COCIN institutions.",
    type: "Transferred",
  },
];

export default function InvestmentDepartmentPage() {
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
            Investment Department
          </h1>
          <p className="text-gray-500 max-w-2xl leading-relaxed">
            Established on 1st January, 2024 to oversee the church&apos;s
            investment portfolio, revenue-generating enterprises, and strategic
            financial growth.
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
                  dept.slug === "investment"
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
                  Department Overview
                </span>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Strategic Investment & Enterprise Management
                </h2>
                <p className="text-gray-500 leading-relaxed mb-4">
                  The Investment Department was established on 1st January, 2024
                  with five units as provided in its policy document. However, at
                  the commencement of operation, only two units were activated:
                  <strong className="text-gray-700"> Funds and Portfolio Management</strong> and
                  <strong className="text-gray-700"> Account and Collection</strong>.
                </p>
                <p className="text-gray-500 leading-relaxed">
                  As the department expanded, the church transferred three
                  existing units for its oversight. They include:
                  <strong className="text-gray-700"> COCIN Guest House</strong>,
                  <strong className="text-gray-700"> Emmanuel Guest House</strong>, and
                  <strong className="text-gray-700"> Tailoring Unit</strong>.
                  Consequently, the department now has 6 units as listed below.
                </p>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center">
                  <div className="w-10 h-10 bg-[#EFF6FF] rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Layers size={20} className="text-[#2563EB]" />
                  </div>
                  <div className="text-3xl font-bold text-[#2563EB] mb-1">
                    6
                  </div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Total Units
                  </div>
                </div>
                <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center">
                  <div className="w-10 h-10 bg-[#EFF6FF] rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Users size={20} className="text-[#2563EB]" />
                  </div>
                  <div className="text-3xl font-bold text-[#2563EB] mb-1">
                    34
                  </div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Total Staff
                  </div>
                </div>
                <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center">
                  <div className="w-10 h-10 bg-[#EFF6FF] rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Building2 size={20} className="text-[#2563EB]" />
                  </div>
                  <div className="text-3xl font-bold text-[#2563EB] mb-1">
                    2024
                  </div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Established
                  </div>
                </div>
              </div>

              {/* Core Units */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  Original Activated Units
                </h2>
                <p className="text-gray-500 text-sm mb-5">
                  The two units activated at inception of the department.
                </p>
                <div className="space-y-4">
                  {coreUnits.map((unit) => (
                    <div
                      key={unit.name}
                      className="bg-[#F5F3EF] rounded-xl p-5 flex items-start gap-4"
                    >
                      <div className="w-10 h-10 bg-[#EFF6FF] rounded-xl flex items-center justify-center flex-shrink-0">
                        <unit.icon size={18} className="text-[#2563EB]" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-gray-900 mb-1">
                          {unit.name}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                          {unit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Transferred Units */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  Transferred Units
                </h2>
                <p className="text-gray-500 text-sm mb-5">
                  Three existing church units transferred under Investment
                  Department oversight.
                </p>
                <div className="space-y-4">
                  {transferredUnits.map((unit) => (
                    <div
                      key={unit.name}
                      className="bg-[#F5F3EF] rounded-xl p-5 flex items-start gap-4"
                    >
                      <div className="w-10 h-10 bg-[#EFF6FF] rounded-xl flex items-center justify-center flex-shrink-0">
                        <unit.icon size={18} className="text-[#2563EB]" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-base font-bold text-gray-900">
                            {unit.name}
                          </h3>
                          <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">
                            Transferred
                          </span>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed">
                          {unit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Workforce Breakdown */}
              <div className="bg-[#1F2937] rounded-2xl p-8 text-white">
                <h2 className="text-xl font-bold mb-4">
                  Workforce Composition
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#374151] rounded-xl p-5 border border-gray-600/30">
                    <div className="text-3xl font-bold text-[#2563EB] mb-1">
                      7
                    </div>
                    <div className="text-gray-400 text-sm">
                      Core Departmental Staff
                    </div>
                  </div>
                  <div className="bg-[#374151] rounded-xl p-5 border border-gray-600/30">
                    <div className="text-3xl font-bold text-[#2563EB] mb-1">
                      27
                    </div>
                    <div className="text-gray-400 text-sm">
                      Personnel across 3 Supervised Units
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column — Director Cards */}
            <div className="lg:col-span-1 space-y-6">
              {/* Director Card */}
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden sticky top-28">
                <div className="relative w-full" style={{ height: 280 }}>
                  <Image
                    src="/DP.png"
                    alt="Director of Investment"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 350px"
                  />
                </div>
                <div className="p-6">
                  <span className="text-[#2563EB] font-semibold text-xs tracking-widest uppercase block mb-1">
                    Director of Investment
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    Director of Investment
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Leading the strategic management of COCIN&apos;s investment
                    portfolio and enterprise units.
                  </p>
                </div>
              </div>

              {/* Deputy Director Card */}
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                <div className="relative w-full" style={{ height: 280 }}>
                  <Image
                    src="/DDP.png"
                    alt="Deputy Director of Investment"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 350px"
                  />
                </div>
                <div className="p-6">
                  <span className="text-[#2563EB] font-semibold text-xs tracking-widest uppercase block mb-1">
                    Deputy Director
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    Deputy Director of Investment
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Supporting the Director in operational oversight of all
                    enterprise and investment units.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
