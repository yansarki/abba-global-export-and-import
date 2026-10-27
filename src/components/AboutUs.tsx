import React from "react";
import { MapPin, Globe, CheckCircle2, Building, MessageSquare, Truck } from "lucide-react";
import { COMPANY_INFO } from "../data/companyData";

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Story & Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider border border-emerald-200">
              <Building className="w-3.5 h-3.5 text-emerald-700" />
              <span>About Our Business</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-heading text-emerald-950 tracking-tight leading-tight">
              Rooted in Northern Nigeria’s Agricultural Heart
            </h2>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              <strong className="text-emerald-900 font-semibold">{COMPANY_INFO.name}</strong> is an agricultural export business based in{" "}
              <strong className="text-emerald-900 font-semibold">Wudil City, Kano State, Nigeria</strong>. Kano State is widely recognized as one of West Africa’s primary historic trading crossroads, surrounded by fertile savannah farmlands that produce some of the continent's finest agricultural staples.
            </p>

            <p className="text-base text-slate-600 leading-relaxed">
              Our business focuses on agricultural commodities — including dried hibiscus flowers (zobo), soybeans, groundnuts, and complementary farm produce. We bridge the critical link between grassroots farming communities across Kano and northern agricultural belts and the commercial buyers who depend on steady, authentic supplies.
            </p>

            <p className="text-base text-slate-600 leading-relaxed">
              Rather than making unverified claims, we pride ourselves on building real, honest connections with local and international buyers. We respond diligently to buyer enquiries, supply honest product information, and facilitate smooth communication from crop aggregation in Wudil to shipping arrangements.
            </p>

            {/* Strategic Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-50 text-emerald-800 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm">Strategic Wudil Base</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Direct access to Kano’s vibrant rural and urban commodity trading corridors.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                <div className="p-2 rounded-lg bg-amber-50 text-amber-700 shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm">Global & Local Markets</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Dedicated to developing dependable supply relationships for food processors and importers.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-50 text-emerald-800 shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm">Buyer Enquiry Focus</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Prompt attention to order specifications, sample requests, and pricing breakdowns.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                <div className="p-2 rounded-lg bg-amber-50 text-amber-700 shrink-0">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm">Commodity Aggregation</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Careful sorting and aggregation of hibiscus calyces, soybeans, and groundnuts.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Feature & Business Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Background decorative frame */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-amber-400/20 via-emerald-600/20 to-emerald-800/20 blur-xl opacity-70" />
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src="https://images.pexels.com/photos/32956482/pexels-photo-32956482.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                  alt="Agricultural landscape in Nigeria"
                  className="w-full h-80 object-cover"
                />
                
                <div className="p-6 bg-gradient-to-b from-white via-emerald-50/40 to-emerald-50/80 border-t border-slate-100">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                      Business Identity
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                      Verified Location
                    </span>
                  </div>

                  <h3 className="font-serif-heading font-bold text-xl text-emerald-950">
                    {COMPANY_INFO.name}
                  </h3>
                  <p className="text-sm text-slate-600 mt-1 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>{COMPANY_INFO.location}</span>
                  </p>

                  <div className="mt-5 pt-4 border-t border-emerald-200/60 grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-slate-500 block">Primary Focus:</span>
                      <span className="font-semibold text-slate-800">Agricultural Export & Import</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Core Belt:</span>
                      <span className="font-semibold text-slate-800">Kano / Northern Nigeria</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
