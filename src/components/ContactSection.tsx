import React from "react";
import { Phone, Mail, MapPin, MessageCircle, Clock, Globe, ArrowUpRight } from "lucide-react";
import { COMPANY_INFO } from "../data/companyData";

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-emerald-950 text-white relative overflow-hidden">
      {/* Background Subtle Gradient & Grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/80 text-amber-300 text-xs font-semibold uppercase tracking-wider border border-amber-400/20 mb-3">
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>Direct Commercial Channels</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-heading text-white tracking-tight">
            Contact Us
          </h2>

          <p className="mt-4 text-base sm:text-lg text-emerald-100/80 leading-relaxed font-light">
            We are accessible to discuss export supply, order volume, quality parameters, and trade agreements.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Card 1: Phone & WhatsApp */}
          <div className="bg-emerald-900/50 border border-emerald-700/60 rounded-3xl p-7 flex flex-col justify-between hover:border-amber-400/50 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-400/20 text-amber-400 flex items-center justify-center mb-6 border border-amber-400/30">
                <Phone className="w-6 h-6" />
              </div>

              <h3 className="font-serif-heading font-bold text-xl text-white">
                Telephone & WhatsApp
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-emerald-200/80 leading-relaxed">
                Connect directly with our export coordinator for immediate updates, photo verification, and order queries.
              </p>

              <div className="mt-6 space-y-3">
                {/* Clickable Telephone */}
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-emerald-950/60 hover:bg-emerald-950 border border-emerald-700/40 text-sm font-semibold text-white transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-amber-400" />
                    <span>{COMPANY_INFO.phoneDisplay}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-emerald-400 group-hover:text-amber-300 transition-colors" />
                </a>

                {/* Clickable WhatsApp */}
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-emerald-950 text-sm font-bold shadow-md transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <MessageCircle className="w-4 h-4 text-emerald-950 fill-emerald-950" />
                    <span>WhatsApp Us Now</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-emerald-800/80 text-[11px] text-emerald-300/70 flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Available West Africa Time (WAT / GMT+1)</span>
            </div>
          </div>

          {/* Card 2: Official Email */}
          <div className="bg-emerald-900/50 border border-emerald-700/60 rounded-3xl p-7 flex flex-col justify-between hover:border-amber-400/50 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-400/20 text-amber-400 flex items-center justify-center mb-6 border border-amber-400/30">
                <Mail className="w-6 h-6" />
              </div>

              <h3 className="font-serif-heading font-bold text-xl text-white">
                Email Correspondence
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-emerald-200/80 leading-relaxed">
                For formal purchase orders, contracts, tenders, and technical commodity specification sheets.
              </p>

              <div className="mt-6">
                {/* Clickable Mailto link */}
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-emerald-950/60 hover:bg-emerald-950 border border-emerald-700/40 text-sm font-semibold text-white transition-colors group break-all"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="truncate">{COMPANY_INFO.email}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-emerald-400 group-hover:text-amber-300 shrink-0 ml-2" />
                </a>
              </div>

              <div className="mt-4 p-3 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-xs text-emerald-200/90">
                <span className="font-semibold text-amber-300 block mb-1">Direct Recipient:</span>
                Management Desk, ABBA GLOBAL EXPORT AND IMPORT
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-emerald-800/80 text-[11px] text-emerald-300/70 flex items-center gap-2">
              <Globe className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>We reply to emails within 24 business hours</span>
            </div>
          </div>

          {/* Card 3: Location & Agro Hub */}
          <div className="bg-emerald-900/50 border border-emerald-700/60 rounded-3xl p-7 flex flex-col justify-between hover:border-amber-400/50 transition-all duration-300 md:col-span-2 lg:col-span-1">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-400/20 text-amber-400 flex items-center justify-center mb-6 border border-amber-400/30">
                <MapPin className="w-6 h-6" />
              </div>

              <h3 className="font-serif-heading font-bold text-xl text-white">
                Location & Origin
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-emerald-200/80 leading-relaxed">
                Operating out of Wudil City, a key agricultural and livestock trading nexus in Kano State, Nigeria.
              </p>

              <div className="mt-6 p-4 rounded-xl bg-emerald-950/70 border border-emerald-700/50 space-y-2">
                <div className="text-xs text-amber-400 font-semibold uppercase tracking-wider">
                  Operational Hub
                </div>
                <div className="font-serif-heading font-bold text-sm text-white">
                  {COMPANY_INFO.name}
                </div>
                <div className="text-xs text-emerald-200 flex items-start gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>{COMPANY_INFO.location}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-emerald-800/80 text-[11px] text-emerald-300/70 flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Mon – Sat: 8:00 AM – 6:00 PM (WAT)</span>
            </div>
          </div>

        </div>

        {/* Business Summary Card */}
        <div className="mt-12 bg-gradient-to-r from-emerald-900/80 via-[#0d4a2d] to-emerald-900/80 border border-amber-400/30 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-300">
              Ready to Discuss Sourcing?
            </div>
            <div className="font-serif-heading text-xl sm:text-2xl font-bold text-white">
              Connect directly with our Nigerian export desk today
            </div>
            <p className="text-xs sm:text-sm text-emerald-200/80">
              Dried Hibiscus Flowers (Zobo) • Soybeans • Groundnuts • Agricultural Commodities
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="bg-white hover:bg-slate-100 text-emerald-950 font-bold px-5 py-3 rounded-xl text-sm transition-colors"
            >
              Call {COMPANY_INFO.phoneDisplay}
            </a>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-400 hover:bg-amber-300 text-emerald-950 font-bold px-5 py-3 rounded-xl text-sm transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
