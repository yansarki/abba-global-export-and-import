import React from "react";
import { Phone, Mail, MapPin, MessageCircle, ArrowUp } from "lucide-react";
import { COMPANY_INFO, PRODUCTS } from "../data/companyData";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Home", id: "hero" },
    { label: "About Us", id: "about" },
    { label: "Products", id: "products" },
    { label: "Why Choose Us", id: "why-choose-us" },
    { label: "Gallery", id: "gallery" },
    { label: "Video Gallery", id: "video-gallery" },
    { label: "Buyer Enquiry", id: "enquiry-form" },
    { label: "Contact Us", id: "contact" }
  ];

  return (
    <footer className="bg-[#051c11] text-white border-t border-emerald-900/60 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-emerald-900/80">
          
          {/* Brand & Purpose Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 flex items-center justify-center shadow-md text-emerald-950 font-extrabold text-lg font-serif-heading">
                AG
              </div>
              <span className="font-serif-heading text-lg sm:text-xl font-bold tracking-wide text-white">
                {COMPANY_INFO.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-emerald-200/80 leading-relaxed font-light max-w-md">
              A Nigerian agricultural export business based in Wudil City, Kano State. Dedicated to connecting local and international buyers with authentic agricultural commodities including dried hibiscus flowers, soybeans, and groundnuts.
            </p>

            {/* Quick Sourcing Credentials */}
            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="px-2.5 py-1 rounded bg-emerald-900/60 text-amber-300 border border-emerald-800">
                Wudil, Kano State
              </span>
              <span className="px-2.5 py-1 rounded bg-emerald-900/60 text-emerald-100 border border-emerald-800">
                Agricultural Export
              </span>
              <span className="px-2.5 py-1 rounded bg-emerald-900/60 text-emerald-100 border border-emerald-800">
                Nigerian Commodities
              </span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif-heading text-sm font-bold uppercase tracking-wider text-amber-400">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-emerald-200/80">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="hover:text-amber-300 transition-colors cursor-pointer text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif-heading text-sm font-bold uppercase tracking-wider text-amber-400">
              Key Products
            </h4>
            <ul className="space-y-2 text-xs text-emerald-200/80">
              {PRODUCTS.map((p) => (
                <li key={p.id}>
                  <button
                    onClick={() => onNavigate("products")}
                    className="hover:text-amber-300 transition-colors cursor-pointer text-left"
                  >
                    {p.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif-heading text-sm font-bold uppercase tracking-wider text-amber-400">
              Contact Information
            </h4>
            
            <div className="space-y-2.5 text-xs text-emerald-200/85">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.location}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="hover:text-amber-300 transition-colors"
                >
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-amber-300 transition-colors break-all"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#25D366] text-emerald-950 font-bold hover:bg-[#20ba59] transition-colors text-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-emerald-950" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-300/60">
          <div>
            &copy; {new Date().getFullYear()} <strong className="text-white font-medium">{COMPANY_INFO.name}</strong>. All rights reserved.
          </div>

          <div className="text-center sm:text-right text-[11px] text-emerald-400/50">
            Registered Agricultural Commodity Business • Wudil City, Kano State, Nigeria.
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-emerald-900/60 hover:bg-emerald-800 text-amber-300 transition-colors cursor-pointer flex items-center gap-1.5"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
