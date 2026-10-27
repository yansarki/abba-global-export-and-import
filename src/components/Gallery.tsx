import React, { useState } from "react";
import { Sparkles, Maximize2, X, ExternalLink, Filter } from "lucide-react";
import { GALLERY_ITEMS, GalleryItem, COMPANY_INFO } from "../data/companyData";

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  const categories = ["All", "Hibiscus / Zobo", "Soybeans", "Groundnuts", "Agricultural Field", "Commodities & Logistics"];

  const filteredItems = selectedCategory === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory || item.category.includes(selectedCategory));

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider border border-emerald-200 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span>Agricultural Showcase</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-heading text-emerald-950 tracking-tight">
            Agricultural Gallery
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Visual highlights of our key agricultural commodities, harvesting environments, and produce packaging.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <div className="flex items-center gap-1 text-xs font-semibold text-slate-500 mr-2">
            <Filter className="w-3.5 h-3.5" />
            <span>Filter:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs sm:text-sm font-semibold px-4 py-2 rounded-full transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-emerald-900 text-amber-300 shadow-sm"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
              onClick={() => setActiveImage(item)}
            >
              <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-100">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white w-full">
                    <span className="text-[11px] font-semibold text-amber-300 uppercase tracking-wider block">
                      {item.category}
                    </span>
                    <p className="text-sm font-bold truncate">{item.title}</p>
                  </div>
                </div>

                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm text-emerald-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-semibold text-emerald-700 uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h4 className="font-semibold text-slate-900 text-sm mt-0.5 line-clamp-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cloudinary Collections Reference Drawer / Information Box */}
        <div className="mt-14 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div>
              <h3 className="font-serif-heading font-bold text-lg text-emerald-950">
                Official Cloudinary Digital Asset Collections
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                In compliance with Cloudinary collection guidelines, browse the company’s dedicated asset collection portals directly.
              </p>
            </div>
            <span className="text-xs px-3 py-1 bg-emerald-50 text-emerald-800 rounded-full font-medium border border-emerald-200 w-fit">
              Cloudinary trdqjutt
            </span>
          </div>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {COMPANY_INFO.cloudinaryCollections.map((col, index) => (
              <a
                key={index}
                href={col.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl border border-slate-200/80 hover:border-emerald-500 hover:bg-emerald-50/50 transition-colors text-xs text-slate-700 group"
              >
                <span className="font-medium truncate mr-2">{col.title}</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-700 shrink-0" />
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors"
              aria-label="Close image"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={activeImage.imageUrl}
                alt={activeImage.title}
                className="max-h-[70vh] w-full object-contain"
              />
            </div>

            <div className="p-6 bg-white">
              <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">
                {activeImage.category}
              </span>
              <h3 className="font-serif-heading text-xl font-bold text-slate-900 mt-1">
                {activeImage.title}
              </h3>
              <p className="text-sm text-slate-600 mt-2">
                {activeImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
