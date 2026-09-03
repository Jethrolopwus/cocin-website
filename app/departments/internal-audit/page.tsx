import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Target,
  Eye,
  Shield,
  CheckCircle,
  Users,
  BookOpen,
  AlertTriangle,
  BarChart2,
  ClipboardList,
  TrendingUp,
  Award,
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

const goals = [
  {
    icon: AlertTriangle,
    title: "Evaluate Risk Management",
    description:
      "Identify operational, financial, and strategic risks and ensure Management has proper mitigation plans in place.",
  },
  {
    icon: Shield,
    title: "Improve Internal Control System",
    description:
      "To detect and prevent fraud, errors, waste, and system inefficiencies.",
  },
  {
    icon: ClipboardList,
    title: "Ensure Compliance",
    description:
      "Determine whether activities comply with applicable laws, regulations, policies, procedures, and standards.",
  },
  {
    icon: BarChart2,
    title: "Improve Governance",
    description:
      "Strengthen organizational accountability, transparency, and ethical decision-making across leadership and departments.",
  },
  {
    icon: TrendingUp,
    title: "Improve Efficiency and Effectiveness",
    description:
      "Examine whether resources are being used economically, efficiently, and effectively.",
  },
  {
    icon: Award,
    title: "Add Value to Organisation",
    description:
      "Provide objective insights and recommendations that help Management improve performance and achieve objectives.",
  },
];

const coreValues = [
  {
    title: "Integrity",
    description:
      "Acting with honesty, diligence, and responsibility to build the fundamental trust required to rely on an auditor's judgment.",
  },
  {
    title: "Objectivity",
    description:
      "Maintaining an impartial and unbiased mental attitude, ensuring findings rely strictly on factual evidence rather than personal interest or external pressure.",
  },
  {
    title: "Confidentiality",
    description:
      "Respecting the security and ownership of sensitive information, withholding disclosure unless legally or professionally mandated.",
  },
  {
    title: "Competency",
    description:
      "Applying the precise knowledge, technical skills, and professional experience required for the specific audit service.",
  },
  {
    title: "Independence",
    description:
      "Remaining free from conflicts of interest or undue influences that could compromise professional judgment.",
  },
  {
    title: "Due Professional Care",
    description:
      "Exercising proper diligence, thoroughness, and standard auditing frameworks during planning and execution.",
  },
];

const leadershipSuccession = [
  { name: "Keith Minus (Australian)", tenure: "1982 – 1987" },
  { name: "Mr. Simon Itse Madaki", tenure: "1987 – 1991" },
  { name: "Mr. Moses Kpamor", tenure: "1991 – Early 1999" },
  { name: "Mrs. Regina Guda (Acting)", tenure: "1999 (interim)" },
  { name: "Mr. Innocent Vwandem", tenure: "1999 – 2012" },
  { name: "Mrs. Rebecca U. Kingyong", tenure: "2012 – 2020" },
  { name: "Mr. Joseph Adams", tenure: "2020 – Dec 2023" },
  { name: "Mr. Stanley Jephthah Gokper", tenure: "Jan 2024 – Present" },
];

const organogramUnits = [
  {
    title: "Investigation, Corporate Affairs, Salaries & Staff Matters",
    sections: ["Investigation", "Corporate Affairs", "Salaries & Staff Matters"],
  },
  {
    title: "Residential Audit, Training, Research & Development Unit",
    sections: ["Resident Auditors' Section", "Training", "Research & Development Section"],
  },
  {
    title: "Monitoring & Evaluation / Data Processing & Storage Unit",
    sections: ["Monitoring & Evaluation Section", "Data Processing Section"],
  },
];

export default function InternalAuditPage() {
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
            Internal Audit Department
          </h1>
          <p className="text-gray-500 max-w-2xl leading-relaxed">
            Providing independent and objective assurance that strengthens
            internal controls, safeguards Church assets, and builds trust
            through accountability, transparency, and compliance.
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
                  dept.slug === "internal-audit"
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

              {/* Introduction */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8">
                <span className="text-[#2563EB] font-semibold text-xs tracking-widest uppercase mb-2 block">
                  Department Overview
                </span>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Independent Assurance &amp; Advisory Services
                </h2>
                <p className="text-gray-500 leading-relaxed">
                  The Audit Department provides independent and objective
                  assurance and advisory services that help the organisation
                  improve its operations, governance, risk management, and
                  internal controls. Its goals and core values support
                  accountability, transparency, integrity, compliance, and the
                  effective use of organisational resources.
                </p>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center">
                  <div className="w-10 h-10 bg-[#EFF6FF] rounded-xl flex items-center justify-center mx-auto mb-3">
                    <ClipboardList size={20} className="text-[#2563EB]" />
                  </div>
                  <div className="text-3xl font-bold text-[#2563EB] mb-1">3</div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Units
                  </div>
                </div>
                <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center">
                  <div className="w-10 h-10 bg-[#EFF6FF] rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Users size={20} className="text-[#2563EB]" />
                  </div>
                  <div className="text-3xl font-bold text-[#2563EB] mb-1">7</div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Sections
                  </div>
                </div>
                <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center">
                  <div className="w-10 h-10 bg-[#EFF6FF] rounded-xl flex items-center justify-center mx-auto mb-3">
                    <BookOpen size={20} className="text-[#2563EB]" />
                  </div>
                  <div className="text-3xl font-bold text-[#2563EB] mb-1">1982</div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Est.
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
                    To build trust in the system through guidance in adherence
                    to policies and documents of the Church, thereby
                    strengthening the bond within the ekklesia in order to
                    achieve the greater goal of spreading the good news of
                    Christ to the world.
                  </p>
                </div>
                <div className="bg-white rounded-2xl border border-gray-200 p-6">
                  <div className="w-10 h-10 bg-[#EFF6FF] rounded-xl flex items-center justify-center mb-4">
                    <Target size={20} className="text-[#2563EB]" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">
                    Mission Statement
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    To partner with Management in improving operational
                    effectiveness, strengthening internal controls and
                    safeguarding Church assets through objective and independent
                    evaluation.
                  </p>
                </div>
              </div>

              {/* Goals */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[#EFF6FF] rounded-xl flex items-center justify-center">
                    <Target size={20} className="text-[#2563EB]" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      Departmental Goals
                    </h2>
                    <p className="text-gray-400 text-xs mt-0.5">
                      Six strategic objectives guiding the department
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  {goals.map((goal, idx) => (
                    <div
                      key={idx}
                      className="bg-[#F5F3EF] rounded-xl p-5 flex items-start gap-4"
                    >
                      <div className="w-10 h-10 bg-[#EFF6FF] rounded-xl flex items-center justify-center flex-shrink-0">
                        <goal.icon size={18} className="text-[#2563EB]" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-gray-900 mb-1">
                          {idx + 1}. {goal.title}
                        </h3>
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
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[#374151] rounded-xl flex items-center justify-center">
                    <Shield size={20} className="text-[#60A5FA]" />
                  </div>
                  <h2 className="text-xl font-bold">Core Values</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {coreValues.map((value, idx) => (
                    <div
                      key={idx}
                      className="bg-[#374151] rounded-xl p-5"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle
                          size={16}
                          className="text-[#60A5FA] flex-shrink-0"
                        />
                        <h3 className="text-sm font-bold text-white">
                          {value.title}
                        </h3>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* History */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8">
                <span className="text-[#2563EB] font-semibold text-xs tracking-widest uppercase mb-2 block">
                  Brief History
                </span>
                <h2 className="text-2xl font-bold text-gray-900 mb-5">
                  History of the Department
                </h2>
                <div className="space-y-4 text-gray-500 leading-relaxed">
                  <p>
                    Historically, Audit started as a unit under Finance in 1982
                    under an Australian named Keith Minus. He practically laid
                    out the structure, function and the importance of audit. It
                    started on a slower level, restricting its activity to the
                    headquarters administration. It began to expand to other
                    sections of the Church like departments and units, under the
                    leadership of the first indigenous staff, Mr. Simon Itse
                    Madaki.
                  </p>
                  <p>
                    Mr. Madaki vigorously and rigorously worked for the
                    acceptance and importance of the audit as he employed quite
                    a number of staff that he trained and who later became
                    leaders, not only in the Department but other departments of
                    the Church, particularly the Finance Department. He took
                    over from Keith Minus in 1987 and handed over to one of his
                    trainees, Mr. Moses Kpamor in 1991.
                  </p>
                  <p>
                    It was under Mr. Kpamor that the Audit Unit became a
                    full-fledged Department and he extended its reach to RCCs.
                    It was during his time the RCCs started accepting accountants
                    to work for them, replacing the Financial Secretaries who
                    hitherto were in charge at these levels of the Church. Audit,
                    at that period, restricted its activities at the RCCs to only
                    periodical visits — checking records of all LCCs under an
                    RCC and reporting to headquarters. Mr. Kpamor later left the
                    Department in the early part of 1999, and the office was left
                    in the care of Mrs. Regina Guda for a while until the
                    appointment of Mr. Innocent Vwandem as Director in the later
                    part of 1999.
                  </p>
                  <p>
                    Mr. Vwandem served the Church for thirteen (13) years — the
                    longest tenure in this office so far. He was aggressive in
                    pushing for the appointment of Resident Auditors to every
                    RCC. Although not adopted wholly as he desired, it was
                    partially accepted: Auditors were posted to the PCCs to
                    check work done at the RCCs. When Mr. Vwandem left in 2012,
                    his Deputy, Mrs. Rebecca U. Kingyong, was appointed to take
                    over, serving for a glorious eight and a half years before
                    handing over to Mr. Joseph Adams in 2020.
                  </p>
                  <p>
                    Mr. Joseph Adams served until his retirement, officially
                    leaving the office in December 2023. Like a race, the baton
                    has been entrusted to Mr. Stanley Jephthah Gokper in January
                    2024. He is to sustain the vision and the ideals left behind
                    by his predecessors, with the responsibility to add value to
                    the Department and the Church in general.
                  </p>
                </div>
              </div>

              {/* Organogram */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8">
                <span className="text-[#2563EB] font-semibold text-xs tracking-widest uppercase mb-2 block">
                  Structure
                </span>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Departmental Organogram
                </h2>
                <p className="text-gray-500 text-sm mb-6">
                  The Department has three (3) Units and seven (7) sections,
                  manned by seasoned staff with a wealth of experience.
                </p>

                {/* Hierarchy */}
                <div className="space-y-3">
                  {/* Executive Council */}
                  <div className="flex flex-col items-center">
                    <div className="bg-[#1F2937] text-white rounded-xl px-5 py-3 text-sm font-semibold text-center w-full max-w-sm">
                      Executive Council through the President
                    </div>
                    <div className="w-px h-5 bg-gray-300" />
                  </div>

                  {/* Audit Board */}
                  <div className="flex flex-col items-center">
                    <div className="bg-[#374151] text-white rounded-xl px-5 py-3 text-sm font-semibold text-center w-full max-w-sm">
                      Audit Board
                    </div>
                    <div className="w-px h-5 bg-gray-300" />
                  </div>

                  {/* Director */}
                  <div className="flex flex-col items-center">
                    <div className="bg-[#2563EB] text-white rounded-xl px-5 py-3 text-sm font-bold text-center w-full max-w-sm">
                      Director
                    </div>
                    <div className="w-px h-5 bg-gray-300" />
                  </div>

                  {/* Deputy Director */}
                  <div className="flex flex-col items-center">
                    <div className="bg-[#3B82F6] text-white rounded-xl px-5 py-3 text-sm font-bold text-center w-full max-w-sm">
                      Deputy Director
                    </div>
                    <div className="w-px h-5 bg-gray-300" />
                  </div>

                  {/* Three units */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {organogramUnits.map((unit, idx) => (
                      <div key={idx} className="bg-[#F5F3EF] rounded-xl p-4 border border-gray-200">
                        <p className="text-gray-900 font-semibold text-xs mb-3 leading-tight">
                          {unit.title}
                        </p>
                        <div className="space-y-1.5">
                          {unit.sections.map((section, sIdx) => (
                            <div
                              key={sIdx}
                              className="bg-white rounded-lg px-3 py-2 text-xs text-gray-600 border border-gray-200"
                            >
                              {section}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column — Director & Deputy Director Cards + Succession */}
            <div className="lg:col-span-1 space-y-6">

              {/* Director Card */}
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                <div className="relative w-full" style={{ height: 280 }}>
                  <Image
                    src="/DA.jpeg"
                    alt="Director of Internal Audit — Mr. Stanley Jephthah Gokper"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 350px"
                  />
                </div>
                <div className="p-6">
                  <span className="text-[#2563EB] font-semibold text-xs tracking-widest uppercase block mb-1">
                    Director of Audit
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    Mr. Stanley Jephthah Gokper
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Appointed January 2024. Leading the Department with a
                    mandate to sustain the vision of his predecessors and add
                    value to the Church.
                  </p>
                </div>
              </div>

              {/* Deputy Director Card */}
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                <div className="relative w-full" style={{ height: 260 }}>
                  <Image
                    src="/DDA.jpeg"
                    alt="Deputy Director of Internal Audit"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 350px"
                  />
                </div>
                <div className="p-6">
                  <span className="text-[#2563EB] font-semibold text-xs tracking-widest uppercase block mb-1">
                    Deputy Director of Audit
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    Deputy Director
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Supporting the Director in overseeing the Department&apos;s
                    three units and ensuring independent and objective audit
                    services across COCIN.
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
                      className={`flex items-start justify-between text-sm pb-3 gap-3 ${
                        idx !== leadershipSuccession.length - 1
                          ? "border-b border-gray-700"
                          : ""
                      }`}
                    >
                      <span className="text-gray-300 font-medium leading-snug">
                        {leader.name}
                      </span>
                      <span className="text-gray-500 text-xs flex-shrink-0 mt-0.5">
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
