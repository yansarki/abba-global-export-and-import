import React from "react";
import { MessageCircle, FileText } from "lucide-react";
import { COMPANY_INFO } from "../data/companyData";

interface FloatingActionsProps {
  onRequestQuote: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onRequestQuote }) => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end">
      {/* Quick Quote Floating Pill */}
      <button
        onClick={onRequestQuote}
        className="hidden md:inline-flex items-center gap-2 bg-emerald-900 hover:bg-emerald-800 text-white px-4 py-2.5 rounded-full shadow-lg border border-amber-400/40 text-xs font-bold transition-all duration-200 hover:scale-105 cursor-pointer"
      >
        <FileText className="w-4 h-4 text-amber-300" />
        <span>Request a Quote</span>
      </button>

      {/* Floating WhatsApp Action Button */}
      <a
        href={COMPANY_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-200 border-2 border-white group relative"
      >
        <MessageCircle className="w-7 h-7 fill-white" />
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Chat on WhatsApp: +234 703 773 7995
        </span>
      </a>
    </div>
  );
};
