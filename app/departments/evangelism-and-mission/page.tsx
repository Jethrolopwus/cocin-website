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
  Globe,
  BookOpen,
  ShieldCheck,
  Layers,
  Compass,
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
  { label: "Investment", slug: "investment" },
];

const ecgLeaders = [
  { name: "Rev. Davou D. Gyang", tenure: "1985 – 1989" },
  { name: "Rev. Mugana Dazai", tenure: "1989 – 1991" },
  { name: "Rev. Dr. Stephen Nyang", tenure: "1991 – 1993" },
  { name: "Rev. Patrobas Dashi", tenure: "1993" },
  { name: "Rev. Mugana Dazai", tenure: "1993 – 1996" },
  { name: "Rev. Mutashi Shehu", tenure: "1996 – 1999" },
  { name: "Rev. Solomon Naamiyap", tenure: "2000 – 2006" },
  { name: "Rev. Nnenbam B. Manguh", tenure: "2006 – 2011" },
  { name: "Rev. Paul G. Mangkam", tenure: "2012 – 2020" },
];

const demLeaders = [
  { name: "Rev. Ripji G. Merkuk", tenure: "2021 – 2023" },
  { name: "Rev. Dung John Dayuru", tenure: "2024 – 2026" },
  { name: "Rev. Moses S. Gonam", tenure: "2026 – Present (Acting)" },
];

const units = [
  {
    name: "COCIN Community Mission (CCM)",
    coordinator: "Rev. Moses S. Gonam",
    staff: 14,
  },
  {
    name: "COCIN Kanuri Project (CKP)",
    coordinator: "Rev. John K. Bida",
    staff: 5,
  },
  {
    name: "COCIN Muslim Evangelism (CME)",
    coordinator: "Rev. Hassa Abdul Mohammed",
    staff: 1,
  },
  {
    name: "COCIN Mission to Nations (CMTN)",
    coordinator: "The Director",
    staff: 11,
  },
];

const priorityAreas = [
  "Evangelism / Outreach / Church Planting",
  "Discipleship and Counseling",
  "Social Services",
  "Teaching Materials",
  "Infrastructural Development and Maintenance",
  "Staff Welfare",
  "Other Religions",
  "Bible Study",
  "Human Resources",
  "Funding and Financial",
  "Sensitization and Mobilization",
  "Classes for Sunday School and Groups",
  "Worship",
  "Training and Leadership Development",
  "Visitation",
  "Conference and Camp",
  "Information and Communication Technology",
  "Volunteers Support Group",
  "Administration",
  "Partnership and Networking",
  "Skills Development",
  "Governance Advocacy",
  "Literacy, Research, Reading and Writing Culture",
  "Support Groups",
  "Investment",
];

const coreValues = [
  {
    title: "Evangelism and Mission",
    description:
      "All members are called to be witnesses through both their lives and words, wherever they are, reaching out to the lost.",
  },
  {
    title: "Church Planting",
    description:
      "Establishing healthy and reproducing churches where there are none.",
  },
  {
    title: "Nurturing and Discipleship",
    description:
      "Edifying and equipping new converts and all members for effective service to both God and humanity.",
  },
  {
    title: "Sound Biblical Teaching",
    description:
      "Equipping the saints to live holy lives and engage in ministry.",
  },
  {
    title: "Holistic Gospel Approach",
    description:
      "Meeting both the spiritual and physical needs of members and their communities.",
  },
  {
    title: "Servant Leadership",
    description:
      "The only effective style of leadership — leading by example.",
  },
  {
    title: "Training and Capacity Building",
    description:
      "Building efficiency, effectiveness, and continuity through equipping.",
  },
  {
    title: "Passion for Mission Support",
    description:
      "Caring for and sharing with members and missionaries the resources that God has blessed us with.",
  },
  {
    title: "Developing Mission Leaders",
    description:
      "Equipping Pastors, church planters, mission coordinators, and other leaders with biblical, theological, practical and cross-cultural mission skills.",
  },
  {
    title: "Cross-Cultural Mission",
    description:
      "Preparing and encouraging workers to cross ethnic, linguistic, geographical, cultural and social boundaries with the Gospel.",
  },
  {
    title: "Integrity, Accountability and Transparency",
    description:
      "The only means of effectively and efficiently managing resources for the glory of God.",
  },
  {
    title: "Missionary Care and Support",
    description:
      "Promoting the spiritual, emotional, relational, financial and practical well-being of missionaries.",
  },
  {
    title: "Strategic Partnerships",
    description:
      "Collaborating with RCCs, local churches, mission organisations, theological institutions, and other gospel-focused bodies.",
  },
  {
    title: "Research and Mission Information",
    description:
      "Gathering demographic, religious, geographical, cultural and church growth information to guide strategic decisions.",
  },
  {
    title: "Monitoring and Evaluation",
    description:
      "Establishing systems for measuring evangelistic outreach, conversions, discipleship, church planting and missionary deployment.",
  },
];

export default function EvangelismMissionPage() {
  const totalStaff = units.reduce((sum, u) => sum + u.staff, 0);

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
            Department of Evangelism and Missions (DEM)
          </h1>
          <p className="text-gray-500 max-w-2xl leading-relaxed">
            Leading the Church in fulfilling the Great Commission by
            evangelizing the lost, making disciples, planting churches, and
            partnering with local and global ministries to advance God&apos;s
            kingdom.
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
                  dept.slug === "evangelism-and-mission"
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
                  From ECG to DEM — A Legacy of Mission
                </h2>
                <p className="text-gray-500 leading-relaxed mb-4">
                  The Department of Evangelism and Missions traces its roots to
                  the{" "}
                  <strong className="text-gray-700">
                    Department of Evangelism and Church Growth (ECG)
                  </strong>
                  , which was established in{" "}
                  <strong className="text-gray-700">1985</strong>. The ECG
                  department was set up to oversee the activities of various
                  mission agencies (units/groups) and to encourage church
                  councils at various levels, institutions, and individuals to
                  partake actively in the Great Commission mandate (Matthew
                  28:18–20).
                </p>
                <p className="text-gray-500 leading-relaxed mb-4">
                  In order to reposition the Church for a more robust and
                  strategic involvement in missions, a six-man committee was set
                  up to explore the possibility of restructuring ECG. The
                  committee recommended splitting the ECG department and
                  establishing a dedicated mission department responsible for the
                  expansion of COCIN churches both at home and abroad.
                </p>
                <p className="text-gray-500 leading-relaxed">
                  After consultation and some modifications, the recommendation
                  was approved, and in{" "}
                  <strong className="text-gray-700">2021</strong> the{" "}
                  <strong className="text-gray-700">
                    Department of Evangelism and Missions (DEM)
                  </strong>{" "}
                  came into being with{" "}
                  <strong className="text-gray-700">
                    Rev. Ripji G. Merkuk
                  </strong>{" "}
                  as the first Director. Units such as COCIN Community Mission
                  (CCM), COCIN Kanuri Project (CKP), COCIN Muslim Evangelism
                  (CME), and COCIN Mission to Nations (CMTN) were brought under
                  the new department.
                </p>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center">
                  <div className="w-10 h-10 bg-[#EFF6FF] rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Calendar size={20} className="text-[#2563EB]" />
                  </div>
                  <div className="text-3xl font-bold text-[#2563EB] mb-1">
                    2021
                  </div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Established
                  </div>
                </div>
                <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center">
                  <div className="w-10 h-10 bg-[#EFF6FF] rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Layers size={20} className="text-[#2563EB]" />
                  </div>
                  <div className="text-3xl font-bold text-[#2563EB] mb-1">
                    4
                  </div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Mission Units
                  </div>
                </div>
                <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center">
                  <div className="w-10 h-10 bg-[#EFF6FF] rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Users size={20} className="text-[#2563EB]" />
                  </div>
                  <div className="text-3xl font-bold text-[#2563EB] mb-1">
                    {totalStaff}
                  </div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Staff Members
                  </div>
                </div>
              </div>

              {/* Vision, Mission & Goal */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl border border-gray-200 p-6">
                  <div className="w-10 h-10 bg-[#EFF6FF] rounded-xl flex items-center justify-center mb-4">
                    <Eye size={20} className="text-[#2563EB]" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">
                    Vision Statement
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    DEM envisions transformed people and communities within the
                    nation and across the world through the Gospel of Jesus
                    Christ, expressed through vibrant disciple-making churches
                    and a mission-minded people.
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
                    To lead the Church in fulfilling the Great Commission by
                    evangelizing the lost, making disciples, planting churches,
                    developing mission leaders, and partnering with local and
                    global ministries to advance God&apos;s kingdom.
                  </p>
                </div>
              </div>

              {/* Goal */}
              <div className="bg-[#2563EB] rounded-2xl p-6 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <Compass size={20} className="text-white" />
                  </div>
                  <h3 className="text-base font-bold">Our Goal</h3>
                </div>
                <p className="text-blue-100 text-sm leading-relaxed">
                  &ldquo;To mobilize the clergy and laity, recruit missionaries
                  and train them to reach the unreached.&rdquo;
                </p>
              </div>

              {/* Units Under DEM */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-[#EFF6FF] rounded-xl flex items-center justify-center">
                    <Building2 size={20} className="text-[#2563EB]" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      Units Under the Department
                    </h2>
                    <p className="text-gray-400 text-xs mt-0.5">
                      4 mission units with {totalStaff} total staff (+ 2
                      headquarters office)
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
                        <Globe size={14} className="text-[#2563EB]" />
                      </div>
                      <div>
                        <p className="text-gray-700 text-sm font-medium leading-snug">
                          {unit.name}
                        </p>
                        <p className="text-gray-400 text-xs mt-1">
                          Coordinator: {unit.coordinator}
                        </p>
                        <p className="text-[#2563EB] text-xs font-semibold mt-0.5">
                          {unit.staff} staff
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Priority Program Areas */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-[#EFF6FF] rounded-xl flex items-center justify-center">
                    <BookOpen size={20} className="text-[#2563EB]" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Priority Program Areas
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {priorityAreas.map((area, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle
                        size={16}
                        className="text-[#2563EB] mt-0.5 flex-shrink-0"
                      />
                      <p className="text-gray-700 text-sm leading-snug">
                        {area}
                      </p>
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
                  <h2 className="text-xl font-bold">Core Values</h2>
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

            {/* Right Column — Director Card & Leadership Succession */}
            <div className="lg:col-span-1 space-y-6">
              {/* Acting Director Card */}
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden sticky top-28">
                <div className="p-6 bg-gradient-to-br from-[#EFF6FF] to-white">
                  <div className="w-16 h-16 bg-[#2563EB] rounded-2xl flex items-center justify-center mb-4">
                    <Globe size={28} className="text-white" />
                  </div>
                  <span className="text-[#2563EB] font-semibold text-xs tracking-widest uppercase block mb-1">
                    Acting Director of Evangelism &amp; Missions
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    Rev. Moses S. Gonam
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Serving as Acting Director since July 22, 2026, leading
                    COCIN&apos;s evangelism and missions outreach, coordinating
                    all four mission units, and driving the Great Commission
                    mandate across the church.
                  </p>
                </div>
              </div>

              {/* ECG Leadership Succession */}
              <div className="bg-[#1F2937] rounded-2xl p-6 text-white">
                <h3 className="text-base font-bold mb-1">
                  ECG Leadership Succession
                </h3>
                <p className="text-gray-400 text-xs mb-4">
                  Department of Evangelism &amp; Church Growth (1985–2020)
                </p>
                <div className="space-y-3">
                  {ecgLeaders.map((leader, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center justify-between text-sm pb-3 ${
                        idx !== ecgLeaders.length - 1
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

              {/* DEM Leadership Succession */}
              <div className="bg-[#2563EB] rounded-2xl p-6 text-white">
                <h3 className="text-base font-bold mb-1">
                  DEM Leadership Succession
                </h3>
                <p className="text-blue-200 text-xs mb-4">
                  Department of Evangelism &amp; Missions (2021–Present)
                </p>
                <div className="space-y-3">
                  {demLeaders.map((leader, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center justify-between text-sm pb-3 ${
                        idx !== demLeaders.length - 1
                          ? "border-b border-blue-400/30"
                          : ""
                      }`}
                    >
                      <span className="text-white font-medium">
                        {leader.name}
                      </span>
                      <span className="text-blue-200 text-xs flex-shrink-0 ml-3">
                        {leader.tenure}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Former ECG Vision & Mission */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <span className="text-gray-400 font-semibold text-xs tracking-widest uppercase block mb-2">
                  Former ECG Department
                </span>
                <h3 className="text-base font-bold text-gray-900 mb-3">
                  Historical Vision &amp; Mission
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-gray-700 text-xs font-semibold uppercase tracking-wider mb-1">
                      Vision
                    </p>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      An ECG Department creating increased passion for mission by
                      motivating and mobilizing COCIN members of all ages for
                      effective involvement in reaching unreached peoples of
                      Africa towards individual and collective church growth.
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 text-xs font-semibold uppercase tracking-wider mb-1">
                      Mission
                    </p>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      ECG Department exists to glorify God, aid worship,
                      evangelism, discipleship and equipping Christians of all
                      ages to be transformed holistically for service to one
                      another and humanity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
