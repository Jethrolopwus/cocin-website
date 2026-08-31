import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Target,
  Eye,
  Heart,
  Calendar,
  Users,
  Building2,
  CheckCircle,
  BookOpen,
  Layers,
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

const pastLeaders = [
  { name: "Mr. Yohanna Nyam Dang", tenure: "1985 – 1987" },
  { name: "Rev. Luther Cishak", tenure: "1987 – 1989" },
  { name: "Mr. Ado Noma", tenure: "1989 – 1996" },
  { name: "Rev. John Audu", tenure: "1996 – 1999" },
  { name: "Mr. Obadiah K. Gutip", tenure: "1999 – 2005" },
  { name: "Rev. Josiah Mallo", tenure: "Acting 2005" },
  { name: "Mr. George Y. Yakzum", tenure: "2005 – 2015" },
  { name: "Rev. Shiwe P. Deshi", tenure: "2015 – 2022" },
  { name: "Rev. Dr. Toma H. Abungyak", tenure: "2022 – Date" },
];

const units = [
  "Karl Kumm University, Vom",
  "Gindiri Theological Seminary, Gindiri",
  "Theological Education by Extension, Jos",
  "COCIN Pastors' College, Kabwir",
  "COCIN Bible and Agricultural Institute, Zamko",
  "Boys' Secondary School, Gindiri",
  "Girls' High School, Gindiri",
  "COCIN Comprehensive College, Gindiri",
  "School for the Visually Impaired, Gindiri",
  "School for the Physically Challenged Sabon Layi, Mangu",
  "Gindiri Material Centre for Persons with Disability",
];

const strategicGoals = [
  {
    title: "Deliver Academic Excellence",
    description:
      "Establish rigorous, accredited curriculum across all educational tiers.",
  },
  {
    title: "Foster Spiritual Maturity",
    description:
      "Cultivate deep Christian character, biblical excellence and servant leadership.",
  },
  {
    title: "Advance Inclusive Learning",
    description:
      "Provide specialised resources and barrier-free environment for all abilities.",
  },
  {
    title: "Strengthen Vocational Capacity",
    description:
      "Equip higher education students with market-ready professional and ministerial skills.",
  },
  {
    title: "Expand Community Impact",
    description:
      "Engage in local and global outreach through service-oriented initiatives.",
  },
];

const coreValues = [
  {
    title: "Christ-centeredness",
    description:
      "Keeping biblical truth at the heart of all administration and teaching.",
  },
  {
    title: "Inclusivity",
    description:
      "Ensuring unconditional dignity, respect and accessibility for learners of every ability.",
  },
  {
    title: "Integrity",
    description:
      "Operating with absolute transparency, honesty and high ethical standards — for Light and Truth.",
  },
  {
    title: "Excellence",
    description:
      "Pursuing the highest quality in teaching, facility management, staff and student care.",
  },
  {
    title: "Stewardship",
    description:
      "Managing financial, human and physical resources responsibly and transparently.",
  },
];

export default function EducationDepartmentPage() {
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
            Directorate of Education
          </h1>
          <p className="text-gray-500 max-w-2xl leading-relaxed">
            Providing wholistic, Christ-centered education across all learning
            levels — fostering academic excellence, spiritual growth and
            vocational competence since 1985.
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
                  dept.slug === "education"
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
                  Rooted in Education Since 1934
                </h2>
                <p className="text-gray-500 leading-relaxed mb-4">
                  COCIN&apos;s educational heritage stretches back to{" "}
                  <strong className="text-gray-700">1934</strong>, when the
                  Gindiri Schools were established — laying the foundation for
                  Christian education in the region. These institutions became
                  beacons of academic and spiritual formation long before the
                  department was formally organised.
                </p>
                <p className="text-gray-500 leading-relaxed">
                  The <strong className="text-gray-700">Department of Education</strong>{" "}
                  was officially founded in{" "}
                  <strong className="text-gray-700">1985</strong>, bringing
                  together COCIN&apos;s growing network of schools, colleges, and
                  theological institutions under a unified directorate. Today it
                  oversees 11 educational units with a staff strength of 711,
                  serving learners from childhood through higher education —
                  including specialised institutions for persons with
                  disabilities.
                </p>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center">
                  <div className="w-10 h-10 bg-[#EFF6FF] rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Calendar size={20} className="text-[#2563EB]" />
                  </div>
                  <div className="text-3xl font-bold text-[#2563EB] mb-1">1934</div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Gindiri Schools
                  </div>
                </div>
                <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center">
                  <div className="w-10 h-10 bg-[#EFF6FF] rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Layers size={20} className="text-[#2563EB]" />
                  </div>
                  <div className="text-3xl font-bold text-[#2563EB] mb-1">11</div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Institutions
                  </div>
                </div>
                <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center">
                  <div className="w-10 h-10 bg-[#EFF6FF] rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Users size={20} className="text-[#2563EB]" />
                  </div>
                  <div className="text-3xl font-bold text-[#2563EB] mb-1">711</div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Staff Members
                  </div>
                </div>
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
                    To provide wholistic, Christ-centered Education across all
                    learning levels by fostering academic excellence, spiritual
                    growth and vocational competence, while ensuring inclusive
                    and accessible training for individuals of all abilities to
                    impact society for God&apos;s glory.
                  </p>
                </div>
                <div className="bg-white rounded-2xl border border-gray-200 p-6">
                  <div className="w-10 h-10 bg-[#EFF6FF] rounded-xl flex items-center justify-center mb-4">
                    <Eye size={20} className="text-[#2563EB]" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">
                    Vision Statement
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    To be a premier global educational network that transforms
                    lives through divine truth, academic distinction and
                    inclusive love, shaping exceptional leaders from childhood
                    to advance scholarship.
                  </p>
                </div>
              </div>

              {/* Units */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-[#EFF6FF] rounded-xl flex items-center justify-center">
                    <Building2 size={20} className="text-[#2563EB]" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      Educational Institutions
                    </h2>
                    <p className="text-gray-400 text-xs mt-0.5">
                      11 units under the Directorate
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {units.map((unit, idx) => (
                    <div
                      key={idx}
                      className="bg-[#F5F3EF] rounded-xl p-4 flex items-start gap-3"
                    >
                      <div className="w-7 h-7 bg-[#EFF6FF] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <BookOpen size={14} className="text-[#2563EB]" />
                      </div>
                      <p className="text-gray-700 text-sm font-medium leading-snug">
                        {unit}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Strategic Goals */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-[#EFF6FF] rounded-xl flex items-center justify-center">
                    <Target size={20} className="text-[#2563EB]" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Strategic Goals
                  </h2>
                </div>
                <div className="space-y-4">
                  {strategicGoals.map((goal, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle
                        size={18}
                        className="text-[#2563EB] mt-0.5 flex-shrink-0"
                      />
                      <div>
                        <p className="text-gray-900 text-sm font-semibold">
                          {goal.title}
                        </p>
                        <p className="text-gray-500 text-sm leading-relaxed">
                          {goal.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Values */}
              <div className="bg-[#1F2937] rounded-2xl p-8 text-white">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-[#374151] rounded-xl flex items-center justify-center">
                    <Heart size={20} className="text-[#60A5FA]" />
                  </div>
                  <h2 className="text-xl font-bold">Operational Core Values</h2>
                </div>
                <div className="space-y-4">
                  {coreValues.map((value, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <ShieldCheck
                        size={18}
                        className="text-[#60A5FA] mt-0.5 flex-shrink-0"
                      />
                      <div>
                        <p className="text-white text-sm font-semibold">
                          {value.title}
                        </p>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column — Director Cards & Leadership Succession */}
            <div className="lg:col-span-1 space-y-6">
              {/* Director Card */}
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden sticky top-28">
                <div className="relative w-full" style={{ height: 300 }}>
                  <Image
                    src="/DE.PNG"
                    alt="Rev. Dr. Toma H. Abungyak — Director of Education"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 350px"
                  />
                </div>
                <div className="p-6">
                  <span className="text-[#2563EB] font-semibold text-xs tracking-widest uppercase block mb-1">
                    Director of Education
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    Rev. Dr. Toma H. Abungyak
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Serving since 2022, leading COCIN&apos;s educational institutions
                    and overseeing academic, spiritual and vocational development
                    across all 11 units.
                  </p>
                </div>
              </div>

              {/* Deputy Director Card */}
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                <div className="relative w-full" style={{ height: 300 }}>
                  <Image
                    src="/DDE.PNG"
                    alt="Deputy Director of Education"
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
                    Deputy Director of Education
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Supporting the Director in coordinating all educational
                    institutions and overseeing daily administrative operations.
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
