import React from "react";
import {
  MapPin,
  MessageSquareCheck,
  ClipboardCheck,
  Wheat,
  Globe,
  ShieldCheck,
  ArrowUpRight
} from "lucide-react";
import { WHY_CHOOSE_US_POINTS, COMPANY_INFO } from "../data/companyData";

const iconMap = {
  MapPin: MapPin,
  MessageSquareCheck: MessageSquareCheck,
  ClipboardCheck: ClipboardCheck,
  Wheat: Wheat,
  Globe: Globe,
  ShieldCheck: ShieldCheck
};

interface WhyChooseUsProps {
  onContactClick: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onContactClick }) => {
  return (
    <section id="why-choose-us" className="py-20 lg:py-28 bg-[#0a3520] text-white relative overflow-hidden">
      {/* Background Subtle Aesthetics */}
      <div className="absolute inset-0 bg-grid-subtle opacity-20 pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-800/80 text-amber-300 text-xs font-semibold uppercase tracking-wider border border-amber-400/20 mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>Integrity & Sourcing Values</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-heading text-white tracking-tight">
            Why Partner with ABBA GLOBAL EXPORT AND IMPORT
          </h2>

          <p className="mt-4 text-base sm:text-lg text-emerald-100/80 leading-relaxed font-light">
            We operate with straightforward clarity: dependable on-the-ground communication, honest product descriptions, and focused sourcing from northern Nigeria’s agricultural heartland.
          </p>
        </div>

        {/* Value Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_US_POINTS.map((point, index) => {
            const IconComponent = iconMap[point.icon as keyof typeof iconMap] || ShieldCheck;
            return (
              <div
                key={index}
                className="bg-emerald-900/40 hover:bg-emerald-900/70 border border-emerald-700/50 hover:border-amber-400/50 rounded-2xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400/20 to-emerald-500/10 border border-amber-400/30 flex items-center justify-center text-amber-300 mb-5 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6 text-amber-300" />
                  </div>

                  <h3 className="font-serif-heading font-bold text-lg sm:text-xl text-white group-hover:text-amber-200 transition-colors">
                    {point.title}
                  </h3>

                  <p className="mt-3 text-sm text-emerald-100/75 leading-relaxed font-light">
                    {point.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-emerald-800/60 flex items-center text-xs font-semibold text-amber-400/80 group-hover:text-amber-300">
                  <span>Agricultural Export Focus</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Direct Sourcing Reassurance Callout */}
        <div className="mt-16 bg-gradient-to-br from-emerald-800/60 to-emerald-950/80 border border-amber-400/30 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 backdrop-blur-sm">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="hidden sm:flex w-12 h-12 rounded-full bg-amber-400/20 items-center justify-center text-amber-300 shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-base sm:text-lg text-white">
                Located in Wudil City, Kano State
              </h4>
              <p className="text-xs sm:text-sm text-emerald-200/80 mt-1">
                Have specific agricultural enquiries or wish to request product information? We are available to assist.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onContactClick}
              className="w-full sm:w-auto bg-amber-400 hover:bg-amber-300 text-emerald-950 font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-md cursor-pointer text-center"
            >
              Contact Our Desk
            </button>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3 rounded-xl border border-emerald-500/50 hover:bg-emerald-800/60 text-white text-sm font-semibold text-center transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
