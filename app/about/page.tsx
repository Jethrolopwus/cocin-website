import {
  MapPin,
  Heart,
  Download,
  ShieldCheck,
  BookOpen,
  Check,
  UserCircle,
} from "lucide-react";

const tabs = [
  { label: "About COCIN", href: "#about-cocin", active: true },
  { label: "Executive Leadership", href: "#leadership" },
  { label: "100+ Years History", href: "#history" },
  { label: "Vision & Mandate", href: "#vision-mission" },
  { label: "Statement of Faith", href: "#statement-of-faith" },
  { label: "Constitution & Governance", href: "#constitution" },
];

const leaders = [
  {
    role: "President",
    name: "Rev. Dr. Amos Mohzo",
    description:
      "Spiritual Leader of COCIN Worldwide & Chairman of the General Church Council.",
  },
  {
    role: "Vice President",
    name: "Rev. Assoc. Prof. Benjamin Pokol",
    description:
      "Overseeing Theological Education, Campus Ministries & Discipleship Directorate.",
  },
  {
    role: "General Secretary",
    name: "Rev. Dauda A. Jimra",
    description:
      "Chief Executive Administrator managing Secretariat Headquarters and PCC Coordination.",
  },
  {
    role: "Deputy General Secretary",
    name: "Rev. Timothy Nwan",
    description:
      "Operations Coordinator supervising regional field stations and pastoral deployments.",
  },
];

const faithStatements = [
  {
    title: "The Holy Scriptures:",
    text: "We believe in the verbal inspiration and total authority of the 66 books of the Bible as God's infallible word.",
  },
  {
    title: "The Godhead:",
    text: "We believe in one eternal God existing in three co-equal Persons: Father, Son, and Holy Spirit.",
  },
  {
    title: "Salvation by Grace:",
    text: "We believe justification is solely by grace through personal faith in Jesus Christ and His substitutionary death.",
  },
  {
    title: "Church Unity & Holiness:",
    text: "We believe in the spiritual unity of all true believers, living sanctified lives in love and righteousness.",
  },
];

export default function AboutPage() {
  return (
    <main className="w-full">
      {/* Hero Header */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[#2563EB] font-semibold text-xs tracking-widest uppercase mb-3 block">
            Heritage & Governance
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            About Church of Christ in Nations (COCIN)
          </h1>
          <p className="text-gray-500 max-w-2xl leading-relaxed">
            Founded in 1904 as the Sudan United Mission (SUM), COCIN has grown
            into an international Christian movement with over 3,500
            congregations across Nigeria and global mission stations.
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto pb-4 scrollbar-hide">
            {tabs.map((tab) => (
              <a
                key={tab.label}
                href={tab.href}
                className={`flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                  tab.active
                    ? "bg-[#2563EB] text-white"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                }`}
              >
                {tab.label}
              </a>
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
              {/* About COCIN / History */}
              <div
                id="about-cocin"
                className="bg-white rounded-2xl border border-gray-200 p-8"
              >
                <span className="text-[#2563EB] font-semibold text-xs tracking-widest uppercase mb-2 block">
                  Historical Legacy
                </span>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Over a Century of Mission & Faith
                </h2>
                <p className="text-gray-500 leading-relaxed mb-4">
                  The Church of Christ in Nations (COCIN) was established in
                  1904 through the pioneering efforts of Dr. Karl Kumm and the
                  Sudan United Mission (SUM). From its modest beginnings in
                  Wase, Plateau State, God expanded the mission into an
                  indigenous, self-governing Christian body.
                </p>
                <p className="text-gray-500 leading-relaxed">
                  Today, COCIN oversees over 100 Provincial Church Councils
                  (PCCs) and 3,500 Local Church Councils (LCCs), operating
                  higher education institutions like Karl Kumm University,
                  medical centers, theological seminaries, and foreign mission
                  fields.
                </p>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center">
                  <div className="text-3xl font-bold text-[#2563EB] mb-1">
                    1904
                  </div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Founded
                  </div>
                </div>
                <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center">
                  <div className="text-3xl font-bold text-[#2563EB] mb-1">
                    100+
                  </div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Provincial Councils
                  </div>
                </div>
                <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center">
                  <div className="text-3xl font-bold text-[#2563EB] mb-1">
                    3.5M+
                  </div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Active Members
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column — Secretariat Info */}
            <div className="lg:col-span-1">
              <div className="bg-[#1F2937] rounded-2xl p-7 text-white sticky top-28">
                <h3 className="text-lg font-bold mb-3">
                  General Secretariat Info
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Contact the central headquarters for official administrative,
                  PCC deployment, or institutional inquiries.
                </p>

                <div className="flex flex-col gap-3 mb-6">
                  <button className="w-full inline-flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-semibold py-3 rounded-full transition-colors text-sm">
                    <MapPin size={16} />
                    Find a Local PCC / Church
                  </button>
                  <button className="w-full inline-flex items-center justify-center gap-2 bg-[#374151] hover:bg-[#4B5563] text-white font-semibold py-3 rounded-full transition-colors text-sm border border-gray-600">
                    <Heart size={16} />
                    Support Headquarters Giving
                  </button>
                </div>

                <div className="space-y-2 text-sm">
                  <p className="text-gray-400">
                    <span className="font-semibold text-gray-300">
                      Address:
                    </span>{" "}
                    No. 1 Noad Avenue, Jos, Nigeria
                  </p>
                  <p className="text-gray-400">
                    <span className="font-semibold text-gray-300">Phone:</span>{" "}
                    +234 700 262 4667
                  </p>
                  <p className="text-gray-400">
                    <span className="font-semibold text-gray-300">Email:</span>{" "}
                    headquarters@cocin.org
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="bg-white py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Executive Secretariat & Leadership
          </h2>
          <p className="text-gray-500 text-sm mb-8">
            The General Church Council (GCC) executive officers guiding
            spiritual and administrative affairs.
          </p>
          <hr className="border-gray-200 mb-8" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {leaders.map((leader) => (
              <div
                key={leader.name}
                className="bg-white rounded-2xl border border-gray-200 p-6"
              >
                <div className="w-12 h-12 bg-[#F5F3EF] rounded-xl flex items-center justify-center mb-4">
                  <UserCircle size={24} className="text-gray-400" />
                </div>
                <span className="text-[#2563EB] font-semibold text-xs tracking-widest uppercase block mb-1">
                  {leader.role}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {leader.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {leader.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section id="vision-mission" className="bg-[#1F2937] py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Vision */}
          <div className="mb-10">
            <span className="text-[#2563EB] font-semibold text-xs tracking-widest uppercase mb-2 block">
              Vision Statement
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              A Mature, Self-Propagating & Globally Impactful Church
            </h2>
            <p className="text-gray-400 leading-relaxed max-w-3xl">
              To be a vibrant, Christ-centered church that nurtures mature
              believers, transforms society through holistic ministry, and
              reaches the unreached across the globe.
            </p>
          </div>

          {/* Mission */}
          <div>
            <span className="text-[#2563EB] font-semibold text-xs tracking-widest uppercase mb-2 block">
              Mission Statement
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Exalting God, Equipping Saints & Evangelizing Nations
            </h2>
            <p className="text-gray-400 leading-relaxed max-w-3xl">
              To glorify God by preaching the uncompromised Gospel of Jesus
              Christ, making disciples, providing quality Christian education
              and social welfare services to all people.
            </p>
          </div>
        </div>
      </section>

      {/* Statement of Faith */}
      <section id="statement-of-faith" className="bg-[#F5F3EF] py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#EFF6FF] rounded-xl flex items-center justify-center">
                <ShieldCheck size={20} className="text-[#2563EB]" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">
                Statement of Faith & Biblical Convictions
              </h2>
            </div>

            <div className="space-y-4">
              {faithStatements.map((statement) => (
                <div
                  key={statement.title}
                  className="flex items-start gap-3"
                >
                  <Check
                    size={18}
                    className="text-green-500 mt-0.5 flex-shrink-0"
                  />
                  <p className="text-gray-600 text-sm leading-relaxed">
                    <span className="font-semibold text-gray-900">
                      {statement.title}
                    </span>{" "}
                    {statement.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Constitution */}
      <section id="constitution" className="bg-[#F5F3EF] pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#EFF6FF] rounded-xl flex items-center justify-center">
                <BookOpen size={20} className="text-[#2563EB]" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">
                Constitution & Church Order
              </h2>
            </div>

            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              COCIN operates under a unified constitution that establishes the
              supreme authority of the General Church Council (GCC), Provincial
              Church Councils (PCCs), and Local Church Councils (LCCs).
            </p>

            <button className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-semibold px-6 py-3 rounded-full transition-colors text-sm">
              <Download size={16} />
              Download COCIN Constitution (PDF)
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
