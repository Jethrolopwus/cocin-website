"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  Target,
  Eye,
  Calendar,
  Users,
  Building2,
  CheckCircle,
  BookOpen,
  Layers,
  Music,
  Cross,
  Heart,
  Flame,
  Star,
  Shield,
  UserCheck,
  Phone,
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
  { name: "Rev. Patrobas Deshi", tenure: "1993" },
  { name: "Rev. Mugana Dazai", tenure: "1993 – 1996" },
  { name: "Rev. Mutashi Shehu", tenure: "1996 – 1999" },
  { name: "Rev. Solomon Naanmiyap", tenure: "2000 – 2006" },
  { name: "Rev. Nnenbam B. Manguh", tenure: "2006 – 2011" },
  { name: "Rev. Paul G. Mangkam", tenure: "2012 – 2020" },
];

const dcgLeaders = [
  { name: "Rev. Tsok Bulus D.", tenure: "2020 – 2023", note: "Pioneer Director" },
  { name: "Rev. Ayizeh James Ayuba", tenure: "2023 – Present" },
];

const priorityAreas = [
  "Mobilization of groups for Evangelism & Outreach",
  "Discipleship and Counseling",
  "Social Services",
  "Teaching Materials",
  "Bible Study for the Groups",
  "Classes for Sunday School",
  "Funding and Financial Support to Mission Stations",
  "Human Resources",
  "Worship",
  "Training and Leadership Development",
  "Volunteers Support Groups",
  "Administration",
  "Investment",
  "Conference and Camp",
  "Visitation of Members",
  "Prayer and Revival Program",
  "Skills Development",
  "Staff Welfare",
];

const units = [
  {
    name: "COCIN Choir",
    coordinator: "Mr. Julfa",
    icon: "music",
    vision:
      "A vibrant, united, and spiritually mature GCC Choir that is a powerful instrument for worship, evangelism, and discipleship, positively impacting the COCIN Church and the world with a message of hope through music.",
    mission:
      "To glorify God by developing and empowering Choristers at all levels (CC, LCC, RCC, GCC) through intentional discipleship, rigorous musical and leadership training, and strategic evangelistic outreach, ensuring the sustainability and relevance of the choir for generations to come.",
    history:
      "This group has been in existence in the church at congregation level since early 1960s and came to the GCC level in the 1980s. Its sole aim is to propagate the Gospel of Jesus Christ through songs, singing during worship services and evangelising to make disciples.",
  },
  {
    name: "COCIN Women Fellowship (CWF)",
    coordinator: "Dr. Justina Damap",
    icon: "heart",
    vision:
      "CWF envisions women growing together in faith, love and service using their God-given gifts and resources to support one another and advance the Gospel, thereby becoming godly examples and agents of positive transformation in the Church and society.",
    mission:
      "To empower Christian women to grow spiritually, live according to the teachings of Christ, support one another in love and fellowship, and positively impact their families, Churches, communities and society through faith, service and godly leadership.",
    history:
      "The COCIN Women Fellowship (CWF) is believed to have started in Vom in 1945 through the pioneering efforts of Mrs. Barnden and Miss Bissie Barnie, both of whom were serving at the Vom Christian Hospital at the time. Challenged and inspired by a women\'s convention she witnessed in Wukari, Miss Barnie organised the first meeting for communicant members around the Vom area.",
  },
  {
    name: "COCIN Sunday School",
    coordinator: "Rev. Nathaniel Y. Panmun",
    icon: "book",
    vision:
      "To present children and adults as salt and light of the world through sound biblical teaching, making them matured and equipped for God\'s worship, discipleship and wholistic gospel, ready for the second coming of Christ.",
    mission:
      "COCIN Sunday School exists to glorify God, evangelise, disciple, train and equip children and adults for wholistic service to build up the body of Christ.",
    history:
      "COCIN Sunday School came into existence as a result of the work of the Sudan United Mission (SUM) British Branch, which came into Nigeria in 1904 through the first four missionaries: Dr. Karl Kumm, Dr. Ambrose H. Bateman, Mr. John Burt and Mr. J. Lowery Maxwell.",
  },
  {
    name: "COCIN Youth Fellowship",
    coordinator: "Rev. Pirfa Mamven",
    icon: "star",
    vision:
      "Youth Fellowship envisages a holistic developing Christian Youth, that is God-fearing, maturing in wisdom and serves as the salt and the light to the world (Matthew 5:13–16).",
    mission:
      "Youth Fellowship is committed to reaching the unreached with the holistic gospel of our Lord Jesus Christ, using every available godly means or method.",
    history:
      "The Youth Fellowship started in the early 1970s with Rev. Seth Usman Nden as the pioneer coordinator, then known as EKAS (Ekkilisiyan Kristi A Sudan). COCIN convened the first church district representatives meeting for youth work in August 1972. The fellowship started as a movement in RCC Borno in 1970 to cater for the spiritual and social needs of young men and women.',",
  },
  {
    name: "COCIN Boy's Brigade Fellowship",
    coordinator: "Pastor Masok Dauda",
    icon: "shield",
    vision:
      "To raise disciplined, Christ-centred, responsible and servant-hearted young people who will positively influence the Church, society and future generations.",
    mission:
      "To help lead children and young people to Christ, nurture them in Christian faith and character, develop disciplined and responsible leaders, and equip them to serve God, the Church and society.",
    history:
      "The Boys' Brigade was founded by Sir William Alexander Smith in Glasgow, Scotland, on 4 October 1883. The movement came to Nigeria through churches and Christian organisations and became an important avenue for youth development. The COCIN Fellowship is the expression of Boys' Brigade work within the Church of Christ in Nations.",
  },
  {
    name: "COCIN Men's Fellowship",
    coordinator: "Mr. Daniel Lawan",
    icon: "users",
    vision:
      "To bring Christian men together for fellowship as well as helping one another and the Church.",
    mission:
      "To reach more people with the Gospel and bring them to Christ (Mark 16:15).",
    history:
      "The Men's Fellowship was officially inaugurated on 25th November 2018, with the vision to prepare Christian men to assume the role God created them to fulfil — equipping men to be spiritual leaders in their homes, the church and their communities (Ephesians 5:23). Its goal is to help all men grow spiritually (Philippians 3:14).",
  },
  {
    name: "COCIN Prayer and Revival Unit",
    coordinator: "Rev. Budadi Taki",
    icon: "flame",
    vision:
      "COCIN Prayer and Revival Unit envisions a Church that is becoming God\'s house of Prayer with leadership and members that are maturing in Christ, obeying the word of God through the power of prayers, thereby spreading the holistic gospel that brings soul winning and revival towards impacting the world as salt and light to the glory of God till the return of Christ.",
    mission:
      "COCIN Prayer and Revival Unit exists to glorify God, to declare COCIN as a house of Prayer (Luke 19:49), that edifies and equips believers to pray and preach the good news of holistic salvation that brings revival in the entire Church, thereby ensuring the sustainability of a three self-propagating, self-supporting and self-governing Church.",
    history:
      "This unit operates under the leadership of Rev. Prof. Dachollom Chumang Datiri (Rtd) with Pioneer Coordinator Rev. Ezekiel Bwede Dachomo. The unit works alongside RCC Chairmen, creating Prayer and Revival Supervisors at RCC level, Organisers at LCC level, and Co-ordinators at CC levels. It exists to spur members to develop a life of prayer and holiness, and to confront occultism among some members.",
  },
  {
    name: "COCIN Girl's Brigade Unit",
    coordinator: "Mrs. Ruth Gukas",
    icon: "cross",
    vision:
      "To develop girls who are physically, mentally and spiritually equipped to serve God, the Church and society.",
    mission:
      "To provide a structured Christian programme that develops girls holistically, nurturing their faith, character and leadership in service to God and humanity.",
    history:
      "This unit focuses on developing girls physically, mentally and spiritually. It is a single-sex unit — members who are in Boy's Brigade are not allowed. The unit is committed to the welfare and holistic development of its members in line with the Great Commission mandate (Matthew 28:18–20).",
  },
];

const coordinators = [
  { role: "COCIN Choir", name: "Mr. Julfa" },
  { role: "COCIN Women Fellowship", name: "Dr. Justina Damap" },
  { role: "COCIN Youth Fellowship", name: "Rev. Pirfa Mamven" },
  { role: "COCIN Men's Fellowship", name: "Mr. Daniel Lawan" },
  { role: "COCIN Sunday School", name: "Rev. Nathaniel Y. Panmun" },
  { role: "COCIN Prayer and Revival", name: "Rev. Budadi Taki" },
  { role: "COCIN Boy's Brigade Fellowship", name: "Pastor Masok Dauda" },
  { role: "COCIN Girl's Brigade Fellowship", name: "Mrs. Ruth Gukas" },
];

const officeStaff = [
  { role: "Driver", name: "Mr. Samson" },
  { role: "Secretary", name: "Mrs. Rhoda Azi" },
  { role: "Cleaner", name: "Mrs. Ladi Musa" },
];

const functions = [
  {
    title: "Morning Devotion Coordination",
    description:
      "The Department plans the roster for morning devotions at the COCIN Headquarters and manages all activities and programmes during devotion time.",
  },
  {
    title: "Group Monitoring & Outreach",
    description:
      "The Department monitors the activities of all groups at the GCC level, organises outreaches, facilitates the planting of churches, and monitors their growth through the Director.",
  },
  {
    title: "Church Growth Through Prayer & Nurturing",
    description:
      "The Department ensures the growth of the Church through prayers and ensures that young churches are well nurtured in order to raise a godly generation.",
  },
];

const unitIconMap: Record<string, React.ReactNode> = {
  music: <Music size={14} className="text-[#2563EB]" />,
  heart: <Heart size={14} className="text-[#2563EB]" />,
  book: <BookOpen size={14} className="text-[#2563EB]" />,
  star: <Star size={14} className="text-[#2563EB]" />,
  shield: <Shield size={14} className="text-[#2563EB]" />,
  users: <Users size={14} className="text-[#2563EB]" />,
  flame: <Flame size={14} className="text-[#2563EB]" />,
  cross: <Cross size={14} className="text-[#2563EB]" />,
};

export default function ChurchGrowthPage() {
  const [activeUnit, setActiveUnit] = useState<number | null>(null);

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
            Department of Church Growth (DCG)
          </h1>
          <p className="text-gray-500 max-w-2xl leading-relaxed">
            Equipping and mobilising Christians of all ages through worship,
            discipleship, prayer and strategic group ministry to build a vibrant,
            growing Church for the glory of God.
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
                  dept.slug === "church-growth"
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
                  From ECG to DCG — The Emergence of Church Growth
                </h2>
                <p className="text-gray-500 leading-relaxed mb-4">
                  The Department of Church Growth was formerly part of the{" "}
                  <strong className="text-gray-700">
                    Department of Evangelism and Church Growth (ECG)
                  </strong>
                  , which came into existence in{" "}
                  <strong className="text-gray-700">1985</strong>. That
                  department was set up to oversee the activities of various
                  groups in the Church and to encourage church councils at all
                  levels to partake actively in the Great Commission mandate
                  (Matthew 28:18–20).
                </p>
                <p className="text-gray-500 leading-relaxed mb-4">
                  In order to reposition the groups in the church for more robust
                  and strategic involvement in evangelism and other activities for
                  the strength of the Church, a proposal was made to separate the
                  groups from the Department of Evangelism and Missions. The
                  quest to split ECG into two departments came in{" "}
                  <strong className="text-gray-700">2013</strong> when{" "}
                  <strong className="text-gray-700">Rev. Paul G. Mangkam</strong>{" "}
                  forwarded the need to the Executive Council (EC) through the
                  Board.
                </p>
                <p className="text-gray-500 leading-relaxed">
                  The COCIN Executive Council approved the request, and in{" "}
                  <strong className="text-gray-700">2020</strong> the{" "}
                  <strong className="text-gray-700">
                    Department of Church Growth (DCG)
                  </strong>{" "}
                  was officially established.{" "}
                  <strong className="text-gray-700">Rev. Tsok Bulus D.</strong>{" "}
                  was appointed as the pioneer Director (2020–2023), and{" "}
                  <strong className="text-gray-700">
                    Rev. Ayizeh James Ayuba
                  </strong>{" "}
                  took over from 2023 to the present.
                </p>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center">
                  <div className="w-10 h-10 bg-[#EFF6FF] rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Calendar size={20} className="text-[#2563EB]" />
                  </div>
                  <div className="text-3xl font-bold text-[#2563EB] mb-1">
                    2020
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
                    8
                  </div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Units / Groups
                  </div>
                </div>
                <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center">
                  <div className="w-10 h-10 bg-[#EFF6FF] rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Users size={20} className="text-[#2563EB]" />
                  </div>
                  <div className="text-3xl font-bold text-[#2563EB] mb-1">
                    8
                  </div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Coordinators
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
                    Vision Statement
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Department of Church Growth exists to glorify God, aid
                    worship, Evangelism, Discipleship and equipping Christians of
                    all ages to be transformed holistically for service to one
                    another and humanity.
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
                    To mobilise and equip all groups within COCIN for effective
                    evangelism, discipleship and church planting — nurturing
                    young churches and raising a godly generation through prayer,
                    worship and intentional ministry.
                  </p>
                </div>
              </div>

              {/* Functions & Responsibilities */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-[#EFF6FF] rounded-xl flex items-center justify-center">
                    <UserCheck size={20} className="text-[#2563EB]" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Functions &amp; Responsibilities
                  </h2>
                </div>
                <div className="space-y-4">
                  {functions.map((fn, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle
                        size={18}
                        className="text-[#2563EB] mt-0.5 flex-shrink-0"
                      />
                      <div>
                        <p className="text-gray-900 text-sm font-semibold">
                          {fn.title}
                        </p>
                        <p className="text-gray-500 text-sm leading-relaxed">
                          {fn.description}
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

              {/* Units / Groups */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-[#EFF6FF] rounded-xl flex items-center justify-center">
                    <Building2 size={20} className="text-[#2563EB]" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      Units &amp; Groups
                    </h2>
                    <p className="text-gray-400 text-xs mt-0.5">
                      8 fellowship units under the Department of Church Growth
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  {units.map((unit, idx) => (
                    <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
                      <button
                        onClick={() =>
                          setActiveUnit(activeUnit === idx ? null : idx)
                        }
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-[#F5F3EF] transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-[#EFF6FF] rounded-lg flex items-center justify-center flex-shrink-0">
                            {unitIconMap[unit.icon]}
                          </div>
                          <div>
                            <p className="text-gray-900 text-sm font-semibold">
                              {unit.name}
                            </p>
                            <p className="text-gray-400 text-xs mt-0.5">
                              Coordinator: {unit.coordinator}
                            </p>
                          </div>
                        </div>
                        <span className="text-[#2563EB] text-xs font-medium flex-shrink-0 ml-4">
                          {activeUnit === idx ? "Hide" : "Details"}
                        </span>
                      </button>
                      {activeUnit === idx && (
                        <div className="bg-[#F5F3EF] border-t border-gray-200 p-5 space-y-4">
                          <p className="text-gray-500 text-sm leading-relaxed">
                            {unit.history}
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <p className="text-[#2563EB] text-xs font-semibold uppercase tracking-wider mb-1">
                                Vision
                              </p>
                              <p className="text-gray-600 text-sm leading-relaxed">
                                {unit.vision}
                              </p>
                            </div>
                            <div>
                              <p className="text-[#2563EB] text-xs font-semibold uppercase tracking-wider mb-1">
                                Mission
                              </p>
                              <p className="text-gray-600 text-sm leading-relaxed">
                                {unit.mission}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Coordinators */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-[#EFF6FF] rounded-xl flex items-center justify-center">
                    <Phone size={20} className="text-[#2563EB]" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Unit Coordinators
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {coordinators.map((c, idx) => (
                    <div
                      key={idx}
                      className="bg-[#F5F3EF] rounded-xl p-4 flex items-start gap-3"
                    >
                      <div className="w-8 h-8 bg-[#EFF6FF] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Users size={14} className="text-[#2563EB]" />
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs">{c.role}</p>
                        <p className="text-gray-900 text-sm font-semibold">
                          {c.name}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Office Staff */}
              <div className="bg-[#1F2937] rounded-2xl p-8 text-white">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-[#374151] rounded-xl flex items-center justify-center">
                    <UserCheck size={20} className="text-[#60A5FA]" />
                  </div>
                  <h2 className="text-xl font-bold">Office Staff</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {officeStaff.map((s, idx) => (
                    <div
                      key={idx}
                      className="bg-[#374151] rounded-xl p-4"
                    >
                      <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">
                        {s.role}
                      </p>
                      <p className="text-white text-sm font-semibold">
                        {s.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column — Director Card & Leadership Succession */}
            <div className="lg:col-span-1 space-y-6">

              {/* Current Director Card */}
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden sticky top-28">
                <div className="relative w-full" style={{ height: 300 }}>
                  <Image
                    src="/DirectoChurchGrowth.jpeg"
                    alt="Rev. Ayizeh James Ayuba — Director of Church Growth"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 350px"
                  />
                </div>
                <div className="p-6">
                  <span className="text-[#2563EB] font-semibold text-xs tracking-widest uppercase block mb-1">
                    Director of Church Growth
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    Rev. Ayizeh James Ayuba
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Serving as Director of Church Growth since 2023, overseeing
                    all 8 fellowship units and driving strategic growth,
                    discipleship and church planting across COCIN.
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
                      className={`flex items-start justify-between text-sm pb-3 ${
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

              {/* DCG Leadership Succession */}
              <div className="bg-[#2563EB] rounded-2xl p-6 text-white">
                <h3 className="text-base font-bold mb-1">
                  DCG Leadership Succession
                </h3>
                <p className="text-blue-200 text-xs mb-4">
                  Department of Church Growth (2020–Present)
                </p>
                <div className="space-y-3">
                  {dcgLeaders.map((leader, idx) => (
                    <div
                      key={idx}
                      className={`flex items-start justify-between text-sm pb-3 ${
                        idx !== dcgLeaders.length - 1
                          ? "border-b border-blue-400/30"
                          : ""
                      }`}
                    >
                      <div>
                        <span className="text-white font-medium block">
                          {leader.name}
                        </span>
                        {leader.note && (
                          <span className="text-blue-200 text-xs">
                            {leader.note}
                          </span>
                        )}
                      </div>
                      <span className="text-blue-200 text-xs flex-shrink-0 ml-3">
                        {leader.tenure}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Department Quick Info */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <span className="text-gray-400 font-semibold text-xs tracking-widest uppercase block mb-3">
                  Department Overview
                </span>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Calendar size={15} className="text-[#2563EB] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700 text-xs font-semibold uppercase tracking-wider">
                        ECG Founded
                      </p>
                      <p className="text-gray-500 text-sm">1985</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar size={15} className="text-[#2563EB] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700 text-xs font-semibold uppercase tracking-wider">
                        DCG Separated
                      </p>
                      <p className="text-gray-500 text-sm">2020</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Layers size={15} className="text-[#2563EB] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700 text-xs font-semibold uppercase tracking-wider">
                        Units Under DCG
                      </p>
                      <p className="text-gray-500 text-sm">8 fellowship groups</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users size={15} className="text-[#2563EB] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700 text-xs font-semibold uppercase tracking-wider">
                        Pioneer Director
                      </p>
                      <p className="text-gray-500 text-sm">Rev. Tsok Bulus D.</p>
                    </div>
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
