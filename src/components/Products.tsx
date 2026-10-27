import React, { useState } from "react";
import { ArrowRight, Sparkles, Check, Package, Info, X } from "lucide-react";
import { PRODUCTS, ProductItem } from "../data/companyData";

interface ProductsProps {
  onSelectProductForEnquiry: (productName: string) => void;
}

export const Products: React.FC<ProductsProps> = ({ onSelectProductForEnquiry }) => {
  const [activeModalProduct, setActiveModalProduct] = useState<ProductItem | null>(null);

  return (
    <section id="products" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider border border-emerald-200 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span>Our Product Portfolio</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-heading text-emerald-950 tracking-tight">
            Agricultural Commodities & Export Supply
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Directly aggregate-sourced from Northern Nigerian farm networks. Each commodity is prepared to meet the specifications of domestic and global buyers.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1"
            >
              {/* Product Card Image Container */}
              <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                <img
                  src={product.imageUrl}
                  alt={product.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                
                {product.badge && (
                  <span className="absolute top-4 left-4 bg-emerald-900/90 text-amber-300 border border-amber-400/30 text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm shadow-sm">
                    {product.badge}
                  </span>
                )}

                <span className="absolute bottom-3 left-4 text-xs font-medium text-white/90 bg-black/40 backdrop-blur-xs px-2.5 py-0.5 rounded">
                  {product.category}
                </span>
              </div>

              {/* Product Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-serif-heading text-xl font-bold text-emerald-950 group-hover:text-emerald-850">
                      {product.name}
                    </h3>
                  </div>
                  
                  {product.botanicalName && (
                    <span className="text-xs italic text-emerald-700 block mt-0.5">
                      {product.botanicalName}
                    </span>
                  )}

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {product.shortDesc}
                  </p>

                  {/* Highlights Pill Specs */}
                  <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                    {product.keySpecs.slice(0, 2).map((spec, i) => (
                      <div key={i} className="flex items-center justify-between text-xs">
                        <span className="text-slate-500">{spec.label}:</span>
                        <span className="font-medium text-slate-800 text-right">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
                  <button
                    onClick={() => onSelectProductForEnquiry(product.name)}
                    className="w-full inline-flex items-center justify-center gap-2 bg-emerald-900 hover:bg-emerald-800 text-white font-semibold py-3 px-4 rounded-xl text-sm transition-all duration-200 shadow-sm hover:shadow group/btn cursor-pointer"
                  >
                    <span>Enquire About This Product</span>
                    <ArrowRight className="w-4 h-4 text-amber-300 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => setActiveModalProduct(product)}
                    className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-emerald-800 hover:text-emerald-950 py-1.5 transition-colors cursor-pointer"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>View Specifications & Packaging</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom inquiry note banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-emerald-900 to-[#0e482d] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg border border-emerald-700/60">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-serif-heading font-bold text-lg sm:text-xl text-amber-300">
              Need custom packaging, specific moisture metrics, or other commodities?
            </h4>
            <p className="text-sm text-emerald-100/90 max-w-2xl font-light">
              We discuss custom requirements directly with buyers. Sourcing inquiries for sesame seeds, ginger, sorghum, or large volume hibiscus are welcomed.
            </p>
          </div>
          <button
            onClick={() => onSelectProductForEnquiry("Custom Commodity Inquiries")}
            className="shrink-0 bg-amber-400 hover:bg-amber-300 text-emerald-950 font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-md cursor-pointer"
          >
            Custom Commodity Enquiry
          </button>
        </div>

      </div>

      {/* Product Details Modal */}
      {activeModalProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative border border-slate-200">
            <button
              onClick={() => setActiveModalProduct(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-start gap-4 mb-4">
              <img
                src={activeModalProduct.imageUrl}
                alt={activeModalProduct.name}
                className="w-20 h-20 rounded-xl object-cover shrink-0 border border-slate-200"
              />
              <div>
                <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">
                  {activeModalProduct.category}
                </span>
                <h3 className="font-serif-heading text-2xl font-bold text-emerald-950">
                  {activeModalProduct.name}
                </h3>
                {activeModalProduct.botanicalName && (
                  <p className="text-xs italic text-slate-500">
                    Botanical: {activeModalProduct.botanicalName}
                  </p>
                )}
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {activeModalProduct.fullDesc}
            </p>

            {/* Specifications */}
            <div className="mb-6">
              <h4 className="font-bold text-sm text-slate-900 mb-3 flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                Key Product Parameters
              </h4>
              <div className="bg-slate-50 rounded-xl p-4 divide-y divide-slate-200 text-xs">
                {activeModalProduct.keySpecs.map((spec, i) => (
                  <div key={i} className="py-2.5 flex justify-between items-center first:pt-0 last:pb-0">
                    <span className="font-medium text-slate-500">{spec.label}</span>
                    <span className="font-semibold text-slate-900">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Packaging */}
            <div className="mb-8">
              <h4 className="font-bold text-sm text-slate-900 mb-3 flex items-center gap-2">
                <Package className="w-4 h-4 text-amber-600" />
                Packaging & Loading Options
              </h4>
              <ul className="space-y-2 text-xs text-slate-600">
                {activeModalProduct.packagingOptions.map((opt, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                    <span>{opt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-100">
              <button
                onClick={() => {
                  const pName = activeModalProduct.name;
                  setActiveModalProduct(null);
                  onSelectProductForEnquiry(pName);
                }}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-900 hover:bg-emerald-800 text-white font-semibold py-3 px-6 rounded-xl text-sm transition-colors cursor-pointer"
              >
                <span>Enquire About {activeModalProduct.name}</span>
                <ArrowRight className="w-4 h-4 text-amber-300" />
              </button>
              <button
                onClick={() => setActiveModalProduct(null)}
                className="py-3 px-6 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold text-sm transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
