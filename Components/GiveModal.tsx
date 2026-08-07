"use client";

import { useState } from "react";
import { X, Shield, CreditCard } from "lucide-react";

const presetAmounts = [1000, 2500, 5000, 10000, 25000];

interface GiveModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GiveModal({ isOpen, onClose }: GiveModalProps) {
  const [frequency, setFrequency] = useState<"once" | "monthly">("once");
  const [selectedAmount, setSelectedAmount] = useState<number | null>(5000);
  const [customAmount, setCustomAmount] = useState("");

  if (!isOpen) return null;

  const displayAmount =
    customAmount !== ""
      ? Number(customAmount)
      : selectedAmount ?? 0;

  const handleAmountClick = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setCustomAmount(value);
    if (value !== "") {
      setSelectedAmount(null);
    }
  };

  const formatNaira = (amount: number) =>
    `₦${amount.toLocaleString("en-NG")}`;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl w-full max-w-md shadow-2xl z-10 overflow-hidden animate-[fadeScaleIn_0.25s_ease-out]">
        {/* Dark Header */}
        <div className="bg-[#1F2937] px-7 py-6 flex items-start justify-between">
          <div>
            <h2 className="text-xl font-bold text-white">Give to COCIN</h2>
            <p className="text-gray-400 text-sm mt-0.5">
              Support the mission of Christ
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
          >
            <X size={16} className="text-gray-300" />
          </button>
        </div>

        {/* Body */}
        <div className="p-7">
          {/* Frequency Toggle */}
          <div className="flex bg-[#F5F3EF] rounded-full p-1 mb-7">
            <button
              onClick={() => setFrequency("once")}
              className={`flex-1 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                frequency === "once"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Give Once
            </button>
            <button
              onClick={() => setFrequency("monthly")}
              className={`flex-1 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                frequency === "monthly"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Give Monthly
            </button>
          </div>

          {/* Amount Selection */}
          <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 block">
            Select Amount (₦)
          </label>
          <div className="grid grid-cols-3 gap-2.5 mb-4">
            {presetAmounts.map((amount) => (
              <button
                key={amount}
                onClick={() => handleAmountClick(amount)}
                className={`py-3 rounded-xl text-sm font-semibold transition-all duration-200 border ${
                  selectedAmount === amount && customAmount === ""
                    ? "border-[#2563EB] text-[#2563EB] bg-[#EFF6FF] shadow-sm"
                    : "border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                {formatNaira(amount)}
              </button>
            ))}
          </div>

          {/* Custom Amount Input */}
          <div className="relative mb-5">
            <input
              type="text"
              value={customAmount}
              onChange={handleCustomChange}
              placeholder="Custom amount"
              className="w-full px-5 py-3.5 rounded-xl bg-[#F5F3EF] border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30 focus:border-[#2563EB]/30 transition-all"
            />
          </div>

          {/* Trust Badges */}
          <div className="flex items-center gap-4 mb-6 text-xs text-gray-400">
            <span className="flex items-center gap-1.5">
              <Shield size={13} className="text-gray-400" />
              Secure payment
            </span>
            <span className="flex items-center gap-1.5">
              <CreditCard size={13} className="text-gray-400" />
              All cards accepted
            </span>
          </div>

          {/* CTA Button */}
          <button
            className="w-full bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-bold py-4 rounded-xl transition-colors text-base shadow-lg shadow-[#2563EB]/25"
            disabled={displayAmount === 0}
          >
            Give {displayAmount > 0 ? formatNaira(displayAmount) : ""}
          </button>
        </div>
      </div>

      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes fadeScaleIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
