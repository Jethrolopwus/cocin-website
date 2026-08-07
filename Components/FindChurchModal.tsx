"use client";

import { useState } from "react";
import { X, MapPin, Phone, Clock } from "lucide-react";

const churches = [
  {
    name: "COCIN Headquarters Chapel (HQ)",
    pcc: "PCC Headquarters",
    location: "Jos, Plateau State",
    phone: "+234 700 262 4667",
    service: "1st Service (English): 07:00 AM",
  },
  {
    name: "COCIN Centre of Glory (Gyel)",
    pcc: "PCC Jos Metropolis",
    location: "Jos South, Plateau State",
    phone: "+234 803 123 4567",
    service: "Morning Service: 08:00 AM",
  },
  {
    name: "COCIN Headquarters Church Abuja (Garki)",
    pcc: "PCC Abuja",
    location: "Abuja, FCT Abuja",
    phone: "+234 802 987 6543",
    service: "English Service: 08:30 AM",
  },
  {
    name: "COCIN Church Maryland Lagos",
    pcc: "PCC Lagos",
    location: "Lagos, Lagos State",
    phone: "+234 805 444 3322",
    service: "Sunday Service: 09:00 AM",
  },
  {
    name: "COCIN Church Barnawa",
    pcc: "PCC Kaduna",
    location: "Kaduna, Kaduna State",
    phone: "+234 806 777 8899",
    service: "Combined Service: 08:30 AM",
  },
];

interface FindChurchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FindChurchModal({
  isOpen,
  onClose,
}: FindChurchModalProps) {
  const [search, setSearch] = useState("");

  if (!isOpen) return null;

  const filtered = churches.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.location.toLowerCase().includes(search.toLowerCase()) ||
      c.pcc.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl w-full max-w-xl max-h-[85vh] flex flex-col shadow-2xl z-10">
        {/* Header */}
        <div className="p-6 pb-4 flex-shrink-0">
          <div className="flex items-start justify-between mb-1">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Find a Church
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                Locate a COCIN assembly near you
              </p>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
            >
              <X size={18} className="text-gray-500" />
            </button>
          </div>

          {/* Search */}
          <div className="mt-4">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by city, state, or church name..."
              className="w-full px-5 py-3.5 rounded-xl bg-[#F5F3EF] border-none text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30"
            />
          </div>
        </div>

        {/* Church List */}
        <div className="flex-1 overflow-y-auto px-6 pb-6 space-y-3">
          {filtered.map((church) => (
            <div
              key={church.name}
              className="bg-[#F5F3EF] rounded-xl p-5 hover:bg-[#EDE8DF] transition-colors cursor-pointer"
            >
              <div className="flex items-start justify-between mb-1">
                <h3 className="text-base font-bold text-gray-900">
                  {church.name}
                </h3>
                <span className="flex-shrink-0 ml-3 text-xs font-semibold text-[#2563EB] bg-[#EFF6FF] px-2.5 py-1 rounded-full">
                  PCC
                </span>
              </div>
              <p className="text-gray-500 text-sm mb-2">{church.pcc}</p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <MapPin size={13} className="text-gray-400" />
                  {church.location}
                </span>
                <span className="flex items-center gap-1">
                  <Phone size={13} className="text-gray-400" />
                  {church.phone}
                </span>
              </div>
              <div className="flex items-center gap-1 mt-1.5 text-sm text-gray-500">
                <Clock size={13} className="text-gray-400" />
                {church.service}
              </div>
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="text-center py-8 text-gray-400 text-sm">
              No churches found matching &quot;{search}&quot;
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
