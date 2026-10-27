import React from "react";
import { ArrowRight, PhoneCall, Sparkles, MapPin, Globe2, Leaf, Shield } from "lucide-react";

interface HeroProps {
  onExploreProducts: () => void;
  onContactUs: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProducts, onContactUs }) => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-emerald-950 text-white">
      {/* High-quality Agricultural Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/13094651/pexels-photo-13094651.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=2000"
          alt="Lush agricultural farmland"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.75]"
        />
        {/* Layered Gradient Overlays for Deep Green & Gold aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#062917]/95 via-[#0c4025]/85 to-[#0b331f]/75 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#062917] via-transparent to-[#052113]/60" />
        <div className="absolute inset-0 bg-grid-subtle opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 flex flex-col items-center text-center">
        {/* Origin & Trust Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/80 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-sm shadow-inner">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Wudil, Kano State • Agricultural Export Center Nigeria</span>
        </div>

        {/* Required Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-serif-heading max-w-5xl leading-tight sm:leading-tight lg:leading-[1.15] text-white drop-shadow-sm">
          Connecting Nigerian Agricultural Products to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
            Global Markets
          </span>
        </h1>

        {/* Required Supporting Text */}
        <p className="mt-6 text-base sm:text-xl text-emerald-100/90 max-w-3xl leading-relaxed font-light">
          ABBA GLOBAL EXPORT AND IMPORT is focused on connecting buyers with agricultural
          products from Nigeria, including dried hibiscus, soybeans, and groundnuts.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={onExploreProducts}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-emerald-950 font-bold px-8 py-4 rounded-xl shadow-xl hover:shadow-amber-500/25 hover:scale-[1.02] transition-all duration-200 text-base tracking-wide cursor-pointer border border-amber-300/40"
          >
            <span>Explore Our Products</span>
            <ArrowRight className="w-5 h-5 text-emerald-950" />
          </button>

          <button
            onClick={onContactUs}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-emerald-900/80 hover:bg-emerald-800 text-emerald-100 hover:text-white font-semibold px-8 py-4 rounded-xl border border-emerald-500/40 backdrop-blur-sm transition-all duration-200 text-base cursor-pointer"
          >
            <PhoneCall className="w-4 h-4 text-amber-400" />
            <span>Contact Us</span>
          </button>
        </div>

        {/* Agricultural Highlights bar */}
        <div className="mt-14 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 w-full max-w-5xl text-left">
          <div className="bg-emerald-900/60 backdrop-blur-md border border-emerald-700/50 rounded-xl p-4 sm:p-5 flex items-start gap-3.5">
            <div className="p-2.5 rounded-lg bg-amber-400/15 border border-amber-400/30 text-amber-400 shrink-0">
              <Leaf className="w-5 h-5" />
            </div>
            <div>
              <div className="text-white font-bold text-sm sm:text-base">Dried Hibiscus</div>
              <div className="text-emerald-200/80 text-xs mt-0.5">Vibrant red calyces (Zobo)</div>
            </div>
          </div>

          <div className="bg-emerald-900/60 backdrop-blur-md border border-emerald-700/50 rounded-xl p-4 sm:p-5 flex items-start gap-3.5">
            <div className="p-2.5 rounded-lg bg-amber-400/15 border border-amber-400/30 text-amber-400 shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <div className="text-white font-bold text-sm sm:text-base">Soybeans & Grains</div>
              <div className="text-emerald-200/80 text-xs mt-0.5">High-protein oilseeds</div>
            </div>
          </div>

          <div className="bg-emerald-900/60 backdrop-blur-md border border-emerald-700/50 rounded-xl p-4 sm:p-5 flex items-start gap-3.5">
            <div className="p-2.5 rounded-lg bg-amber-400/15 border border-amber-400/30 text-amber-400 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-white font-bold text-sm sm:text-base">Wudil, Kano Origin</div>
              <div className="text-emerald-200/80 text-xs mt-0.5">Direct regional hub sourcing</div>
            </div>
          </div>

          <div className="bg-emerald-900/60 backdrop-blur-md border border-emerald-700/50 rounded-xl p-4 sm:p-5 flex items-start gap-3.5">
            <div className="p-2.5 rounded-lg bg-amber-400/15 border border-amber-400/30 text-amber-400 shrink-0">
              <Globe2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-white font-bold text-sm sm:text-base">Buyer Enquiries</div>
              <div className="text-emerald-200/80 text-xs mt-0.5">Local & overseas trade</div>
            </div>
          </div>
        </div>
      </div>

      {/* Elegant Bottom Curve Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-slate-50 to-transparent" />
    </section>
  );
};
