"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Send, MapPinned } from "lucide-react";
import FindChurchModal from "@/Components/FindChurchModal";

export default function ContactPage() {
  const [findChurchOpen, setFindChurchOpen] = useState(false);

  return (
    <>
      <main className="w-full">
        {/* Hero Header */}
        <section className="bg-white py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-[#2563EB] font-semibold text-xs tracking-widest uppercase mb-3 block">
              Connect With Us
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Contact General Secretariat Headquarters
            </h1>
            <p className="text-gray-500 max-w-2xl">
              Inquiries regarding membership, PCC administration, Karl Kumm
              University, or foreign missions.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="bg-[#F5F3EF] py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Left — Contact Info Card */}
              <div className="lg:col-span-2 bg-[#1F2937] rounded-2xl p-8 text-white flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-bold mb-6">
                    Headquarters Secretariat
                  </h2>

                  {/* Address */}
                  <div className="flex items-start gap-3 mb-5">
                    <MapPin
                      size={18}
                      className="text-[#2563EB] mt-0.5 flex-shrink-0"
                    />
                    <p className="text-gray-300 text-sm leading-relaxed">
                      No. 1 Noad Avenue, Off Ahmadu Bello Way, P.M.B. 2004,
                      <br />
                      Jos, Plateau State, Nigeria
                    </p>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-3 mb-5">
                    <Phone
                      size={18}
                      className="text-[#2563EB] flex-shrink-0"
                    />
                    <a
                      href="tel:+2347002624667"
                      className="text-gray-300 hover:text-white text-sm transition-colors"
                    >
                      +234 700 262 4667
                    </a>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-3 mb-8">
                    <Mail
                      size={18}
                      className="text-[#2563EB] flex-shrink-0"
                    />
                    <a
                      href="mailto:headquarters@cocin.org"
                      className="text-gray-300 hover:text-white text-sm transition-colors"
                    >
                      headquarters@cocin.org
                    </a>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => setFindChurchOpen(true)}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-semibold py-3 rounded-full transition-colors text-sm"
                  >
                    <MapPinned size={16} />
                    Locate a Local PCC / Church
                  </button>
                  <button className="w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-900 font-semibold py-3 rounded-full transition-colors text-sm">
                    Submit Prayer Request
                  </button>
                </div>
              </div>

              {/* Right — Contact Form */}
              <div className="lg:col-span-3 bg-white rounded-2xl p-8 border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Send an Official Secretariat Inquiry
                </h2>

                <form className="space-y-5">
                  {/* Name + Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#FAFAFA] text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30 focus:border-[#2563EB] transition-colors"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#FAFAFA] text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30 focus:border-[#2563EB] transition-colors"
                    />
                  </div>

                  {/* Subject */}
                  <input
                    type="text"
                    placeholder="Subject / PCC Division"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#FAFAFA] text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30 focus:border-[#2563EB] transition-colors"
                  />

                  {/* Message */}
                  <textarea
                    rows={5}
                    placeholder="Your message or inquiry..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#FAFAFA] text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30 focus:border-[#2563EB] transition-colors resize-none"
                  />

                  {/* Submit */}
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-[#1F2937] hover:bg-[#111827] text-white font-semibold px-6 py-3 rounded-full transition-colors text-sm"
                  >
                    <Send size={14} />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Find a Church Modal */}
      <FindChurchModal
        isOpen={findChurchOpen}
        onClose={() => setFindChurchOpen(false)}
      />
    </>
  );
}
