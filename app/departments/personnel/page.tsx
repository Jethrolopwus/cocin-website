import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Building2,
  ArrowLeft,
  Briefcase,
  UserCheck,
  ClipboardList,
  ShieldCheck,
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

const responsibilities = [
  "Recruitment, deployment, and staff welfare management across all COCIN institutions.",
  "Implementation of human resource policies and staff development programs.",
  "Coordination of staff records, leave management, and disciplinary procedures.",
  "Pension processing, promotions, and inter-departmental transfers.",
  "Ensuring compliance with church employment policies and labour standards.",
];

export default function PersonnelDepartmentPage() {
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
            Personnel Department
          </h1>
          <p className="text-gray-500 max-w-2xl leading-relaxed">
            Managing human resources and staff administration to support the
            operational effectiveness of COCIN across all its institutions and
            departments.
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
                  dept.slug === "personnel"
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
                  Human Resource Management & Staff Administration
                </h2>
                <p className="text-gray-500 leading-relaxed mb-4">
                  The Personnel Department is responsible for the overall
                  management of COCIN&apos;s workforce. From recruitment and deployment
                  to welfare and disciplinary coordination, the department ensures
                  that all staff across RCCs, PCCs, and headquarters are well
                  managed and supported in their service to the church.
                </p>
                <p className="text-gray-500 leading-relaxed">
                  The department plays a vital role in staff development,
                  performance evaluation, and ensuring compliance with
                  ecclesiastical and employment policies across all COCIN
                  institutions.
                </p>
              </div>

              {/* Key Responsibilities */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-[#EFF6FF] rounded-xl flex items-center justify-center">
                    <ClipboardList size={20} className="text-[#2563EB]" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Key Responsibilities
                  </h2>
                </div>
                <div className="space-y-3">
                  {responsibilities.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <ShieldCheck
                        size={18}
                        className="text-green-500 mt-0.5 flex-shrink-0"
                      />
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center">
                  <div className="w-10 h-10 bg-[#EFF6FF] rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Users size={20} className="text-[#2563EB]" />
                  </div>
                  <div className="text-2xl font-bold text-[#2563EB] mb-1">
                    100+
                  </div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    PCCs Served
                  </div>
                </div>
                <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center">
                  <div className="w-10 h-10 bg-[#EFF6FF] rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Briefcase size={20} className="text-[#2563EB]" />
                  </div>
                  <div className="text-2xl font-bold text-[#2563EB] mb-1">
                    3,500+
                  </div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Staff Managed
                  </div>
                </div>
                <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center">
                  <div className="w-10 h-10 bg-[#EFF6FF] rounded-xl flex items-center justify-center mx-auto mb-3">
                    <UserCheck size={20} className="text-[#2563EB]" />
                  </div>
                  <div className="text-2xl font-bold text-[#2563EB] mb-1">
                    8+
                  </div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Departments
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column — Director Cards */}
            <div className="lg:col-span-1 space-y-6">
              {/* Director Card */}
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                <div className="relative w-full" style={{ height: 280 }}>
                  <Image
                    src="/DP.png"
                    alt="Director of Personnel"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 350px"
                  />
                </div>
                <div className="p-6">
                  <span className="text-[#2563EB] font-semibold text-xs tracking-widest uppercase block mb-1">
                    Director of Personnel
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    Director of Personnel
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Overseeing all human resource operations and staff welfare
                    management across COCIN.
                  </p>
                </div>
              </div>

              {/* Deputy Director Card */}
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                <div className="relative w-full" style={{ height: 280 }}>
                  <Image
                    src="/DDP.png"
                    alt="Deputy Director of Personnel"
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
                    Deputy Director of Personnel
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Supporting the Director in daily operations, staff
                    coordination, and policy implementation.
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
