import React from "react";
import { Play, Sparkles, ExternalLink, Video, Clock, CheckCircle } from "lucide-react";
import { COMPANY_INFO } from "../data/companyData";

export const VideoGallery: React.FC = () => {
  return (
    <section id="video-gallery" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider border border-emerald-200 mb-3">
            <Video className="w-3.5 h-3.5 text-emerald-700" />
            <span>Multimedia & Feature Video</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-heading text-emerald-950 tracking-tight">
            Agricultural Video Gallery
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Explore authentic media highlighting dried hibiscus flowers, wellness brewing rituals, and agricultural production.
          </p>
        </div>

        {/* Video Showcase Card */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-emerald-950 via-[#0a3520] to-[#072416] rounded-3xl overflow-hidden shadow-2xl border border-emerald-800/60 text-white">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
            
            {/* Thumbnail / Video Preview Area */}
            <div className="md:col-span-7 relative group overflow-hidden bg-black flex items-center justify-center min-h-[340px] sm:min-h-[400px]">
              {/* Actual Valid Pinterest Thumbnail */}
              <img
                src={COMPANY_INFO.pinterestVideoThumbnail}
                alt="Hibiscus Tea Healthy Drink Ritual - Pinterest Video Preview"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                onError={(e) => {
                  // Fallback to high-res orig image if thumbnail fails
                  (e.target as HTMLImageElement).src = COMPANY_INFO.pinterestOrigImage;
                }}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-black/30 opacity-70" />

              {/* Play Badge Overlay */}
              <a
                href={COMPANY_INFO.pinterestVideoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 w-20 h-20 rounded-full bg-amber-400 hover:bg-amber-300 text-emerald-950 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300 border-4 border-white/20"
                aria-label="Watch video on Pinterest"
              >
                <Play className="w-8 h-8 text-emerald-950 fill-emerald-950 ml-1" />
              </a>

              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-amber-300 text-xs font-semibold flex items-center gap-1.5 border border-white/10">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  Pinterest Feature Video
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-xs text-emerald-100/90 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  Short Video Format
                </span>
                <span className="font-medium text-amber-300">NaturalEvity & Hibiscus</span>
              </div>
            </div>

            {/* Video Details & CTA */}
            <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-emerald-950/90 backdrop-blur-sm">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    Product in Focus
                  </span>
                  <span className="text-emerald-400">•</span>
                  <span className="text-xs text-emerald-300 font-medium">Dried Hibiscus</span>
                </div>

                <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-white leading-snug">
                  Why Everyone’s Talking About Hibiscus Tea 🌺
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-emerald-100/80 leading-relaxed font-light">
                  A visual glimpse into the vibrant natural color, deep ruby infusion, and healthy drink ritual made possible by dried hibiscus flowers (zobo). Naturally caffeine-free and cherished globally for wellness.
                </p>

                <div className="mt-5 space-y-2.5">
                  <div className="flex items-center gap-2 text-xs text-emerald-200">
                    <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Real dried red calyces infusion</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-emerald-200">
                    <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Vibrant natural crimson pigment</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-emerald-200">
                    <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Pure botanical commodity supply</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-emerald-800/80 space-y-3">
                {/* Watch on Pinterest Button (Strictly required) */}
                <a
                  href={COMPANY_INFO.pinterestVideoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold py-3.5 px-6 rounded-xl text-sm transition-all shadow-lg hover:shadow-red-600/30 cursor-pointer"
                >
                  <span>Watch on Pinterest</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <p className="text-[11px] text-center text-emerald-300/70">
                  Opens original Pinterest pin in a new tab (https://pin.it/6Psm17iuf)
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* Informative Sourcing Note */}
        <div className="mt-10 max-w-4xl mx-auto p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-600" />
            <span>Interested in bulk dried hibiscus flower shipments from Kano State for herbal beverages or teas?</span>
          </div>
          <a
            href="#enquiry-form"
            className="font-semibold text-emerald-900 hover:text-emerald-700 underline shrink-0"
          >
            Submit an Enquiry →
          </a>
        </div>

      </div>
    </section>
  );
};
