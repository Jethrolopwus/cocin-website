import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Target,
  Eye,
  Monitor,
  Printer,
  BookOpen,
  Newspaper,
  CheckCircle,
  Layers,
  Building2,
  Globe,
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

const units = [
  {
    icon: Newspaper,
    name: "Light Bearer Unit",
    description:
      "The church's media organ and newspaper, committed to bearing the Light of the Gospel through godly, balanced information that evangelises and disciples members and non-members alike in preparation for the return of Christ.",
  },
  {
    icon: Monitor,
    name: "Computer Unit",
    description:
      "Provides Information Technology (IT) support and services that help build the church to meet up with the challenges of Information Technology in the 21st century. Organises training seminars and workshops across PCCs, RCCs, departments and units.",
  },
  {
    icon: Printer,
    name: "Printing Press Unit",
    description:
      "Handles the printing of all church materials for COCIN institutions. The unit ensures quality control of materials produced, strict adherence to COCIN Financial Policies and Guidelines, and maintains distribution outposts for availability of materials at all times.",
  },
  {
    icon: BookOpen,
    name: "Publication Unit",
    description:
      "Responsible for the editing and publication of church literature, newsletters, and resources. Works with regional correspondents and vendors to publish truthful, balanced, and educative articles and information for readers.",
  },
];

const objectives = [
  "Carry out awareness programmes on the dynamism of IT in the 11 PCCs of COCIN.",
  "Build an ICT Complex to serve as a hub for all technology and media operations.",
  "Continue to train workers and members on IT communication.",
  "Organise training seminars and workshops in collaboration with PCCs, RCCs, Departments and Units.",
  "Recruit, train and develop a committed workforce for all units for effectiveness and productivity.",
  "Purchase appropriate equipment and machines for different units to enhance productivity and service delivery.",
  "Monitor quality control of materials produced and ensure strict adherence to COCIN Financial Policies.",
  "Enforce printing of church materials at the COCIN Printing Press.",
  "Arrange outposts for distribution and ensure availability of materials at all times.",
  "Acquire computers for workers, churches and members on request.",
  "Build the capacity of the Light Bearer, regional correspondents and vendors to publish truthful, balanced, rich, and educative articles.",
  "Develop a comprehensive database and use the church website and social media to evangelise.",
];

export default function ICTDepartmentPage() {
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
            ICT Department
          </h1>
          <p className="text-gray-500 max-w-2xl leading-relaxed">
            Leveraging Information and Communication Technology to establish
            strategic links with COCIN members, institutions, and the society
            at large — to the glory of God.
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
                  dept.slug === "ict"
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
                  Information, Communication &amp; Media
                </h2>
                <p className="text-gray-500 leading-relaxed mb-4">
                  The ICT Department oversees COCIN&apos;s Information and
                  Communication Technology infrastructure, media operations, and
                  publications. The department brings together four key units —
                  <strong className="text-gray-700"> Light Bearer</strong>,{" "}
                  <strong className="text-gray-700">Computer Unit</strong>,{" "}
                  <strong className="text-gray-700">Printing Press</strong>, and{" "}
                  <strong className="text-gray-700">Publication Unit</strong> —
                  to serve the church&apos;s communication and technology needs.
                </p>
                <p className="text-gray-500 leading-relaxed">
                  The department is committed to building a well-established
                  Information and Communication outfit that is led by committed,
                  loyal, and holy leaders and workers — helping COCIN and
                  non-COCIN members to be prepared to see Jesus.
                </p>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center">
                  <div className="w-10 h-10 bg-[#EFF6FF] rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Layers size={20} className="text-[#2563EB]" />
                  </div>
                  <div className="text-3xl font-bold text-[#2563EB] mb-1">4</div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Units
                  </div>
                </div>
                <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center">
                  <div className="w-10 h-10 bg-[#EFF6FF] rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Building2 size={20} className="text-[#2563EB]" />
                  </div>
                  <div className="text-3xl font-bold text-[#2563EB] mb-1">11</div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    PCCs Reached
                  </div>
                </div>
                <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center">
                  <div className="w-10 h-10 bg-[#EFF6FF] rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Globe size={20} className="text-[#2563EB]" />
                  </div>
                  <div className="text-3xl font-bold text-[#2563EB] mb-1">
                    Web
                  </div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    &amp; Social Media
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
                    To have a well established Information and Communication
                    outfit that is led and operated by committed, loyal and holy
                    leaders and workers to help season the world, show the way
                    by dispelling darkness and setting the standard; thus helping
                    COCIN and non-COCIN members to be prepared to see Jesus.
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
                    To make appropriate use of Information and Communication
                    Technology to establish and maintain strategic links with
                    COCIN members, institutions and like-minded individuals,
                    Christian groups and the society in general.
                  </p>
                </div>
              </div>

              {/* Units */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  Departmental Units
                </h2>
                <p className="text-gray-500 text-sm mb-6">
                  The four units that make up the ICT Department.
                </p>
                <div className="space-y-4">
                  {units.map((unit) => (
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

              {/* Light Bearer Unit Vision & Mission */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-[#EFF6FF] rounded-xl flex items-center justify-center">
                    <Newspaper size={20} className="text-[#2563EB]" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      Light Bearer Unit
                    </h2>
                    <p className="text-gray-400 text-xs mt-0.5">
                      Vision &amp; Mission
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-[#F5F3EF] rounded-xl p-5">
                    <p className="text-[#2563EB] font-semibold text-xs uppercase tracking-wider mb-2">
                      Vision
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      To have a newspaper and a workforce that are committed to
                      bearing the Light of the Gospel through godly and balanced
                      information and conduct that would evangelise and disciple
                      members and non-members alike for the return of Christ.
                    </p>
                  </div>
                  <div className="bg-[#F5F3EF] rounded-xl p-5">
                    <p className="text-[#2563EB] font-semibold text-xs uppercase tracking-wider mb-2">
                      Mission
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      To have a media organ that serves as an effective link for
                      the church and with the outside world.
                    </p>
                  </div>
                </div>
                <div className="mt-5 flex justify-start">
                  <a
                    href="https://lightbearernews.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1d4ed8] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
                  >
                    Visit Light Bearer Website
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Computer Unit Vision & Mission */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-[#EFF6FF] rounded-xl flex items-center justify-center">
                    <Monitor size={20} className="text-[#2563EB]" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      Computer Unit
                    </h2>
                    <p className="text-gray-400 text-xs mt-0.5">
                      Vision &amp; Mission
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-[#F5F3EF] rounded-xl p-5">
                    <p className="text-[#2563EB] font-semibold text-xs uppercase tracking-wider mb-2">
                      Vision
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      To have a Computer Unit that provides Information
                      Technology (IT) support and services that will help build
                      the church to meet up with challenges of Information
                      Technology in the 21st century.
                    </p>
                  </div>
                  <div className="bg-[#F5F3EF] rounded-xl p-5">
                    <p className="text-[#2563EB] font-semibold text-xs uppercase tracking-wider mb-2">
                      Mission
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      To have a committed computer staff and unit that will help
                      the church use information technology to glorify God.
                    </p>
                  </div>
                </div>
              </div>

              {/* Objectives */}
              <div className="bg-[#1F2937] rounded-2xl p-8 text-white">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-[#374151] rounded-xl flex items-center justify-center">
                    <Target size={20} className="text-[#60A5FA]" />
                  </div>
                  <h2 className="text-xl font-bold">Departmental Objectives</h2>
                </div>
                <div className="space-y-3">
                  {objectives.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle
                        size={17}
                        className="text-[#60A5FA] mt-0.5 flex-shrink-0"
                      />
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column — Director Cards */}
            <div className="lg:col-span-1 space-y-6">
              {/* Director Card */}
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden sticky top-28">
                <div className="relative w-full" style={{ height: 280 }}>
                  <Image
                    src="/DICT.jpeg"
                    alt="Director of ICT"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 350px"
                  />
                </div>
                <div className="p-6">
                  <span className="text-[#2563EB] font-semibold text-xs tracking-widest uppercase block mb-1">
                    Director of ICT
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    Director of ICT
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Leading COCIN&apos;s Information and Communication Technology
                    operations and media outreach.
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
