import Link from "next/link";
import { ArrowLeft, Building2 } from "lucide-react";

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

export default function ICTPage() {
  return (
    <main className="w-full">
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/departments/finance" className="inline-flex items-center gap-1.5 text-[#2563EB] text-sm font-medium mb-4 hover:underline">
            <ArrowLeft size={14} />
            All Departments
          </Link>
          <span className="text-[#2563EB] font-semibold text-xs tracking-widest uppercase mb-3 block">COCIN Departments</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">ICT Department</h1>
          <p className="text-gray-500 max-w-2xl leading-relaxed">Digital infrastructure, technology solutions, and communications systems for COCIN operations.</p>
        </div>
      </section>
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-hide">
            {departments.map((dept) => (
              <Link key={dept.slug} href={`/departments/${dept.slug}`} className={`flex-shrink-0 px-4 py-2.5 rounded-full text-sm font-medium transition-colors ${dept.slug === "ict" ? "bg-[#2563EB] text-white" : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"}`}>{dept.label}</Link>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#F5F3EF] py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-[#EFF6FF] rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Building2 size={28} className="text-[#2563EB]" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Coming Soon</h2>
          <p className="text-gray-500 max-w-md mx-auto leading-relaxed">Detailed information about the ICT Department is being compiled and will be available shortly.</p>
        </div>
      </section>
    </main>
  );
}
