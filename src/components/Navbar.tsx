import React, { useState, useEffect } from "react";
import { Phone, Mail, MapPin, Menu, X, ArrowRight, MessageCircle } from "lucide-react";
import { COMPANY_INFO } from "../data/companyData";

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  onRequestQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, onRequestQuote }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About Us", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Why Choose Us", href: "#why-choose-us" },
    { label: "Gallery", href: "#gallery" },
    { label: "Video Gallery", href: "#video-gallery" },
    { label: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Bar for International Contacts */}
      <div className="bg-[#0b3b24] text-emerald-100 text-xs border-b border-emerald-800/40 py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex items-center gap-1.5 hover:text-amber-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{COMPANY_INFO.phoneDisplay}</span>
            </a>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="flex items-center gap-1.5 hover:text-amber-300 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>{COMPANY_INFO.email}</span>
            </a>
            <span className="hidden md:flex items-center gap-1.5 text-emerald-200/80">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>{COMPANY_INFO.location}</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-800/80 text-emerald-100 border border-emerald-700/50">
              Kano State • Nigeria
            </span>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-950 bg-amber-400 hover:bg-amber-300 px-2.5 py-0.5 rounded-full transition-colors"
            >
              <MessageCircle className="w-3 h-3 text-emerald-950" />
              <span>Chat WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#0d4a2d]/95 backdrop-blur-md shadow-lg py-3"
            : "bg-[#0e5232] py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Name */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, "#hero")}
            className="flex items-center gap-3 group"
          >
            {/* Custom Brand Mark */}
            <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 flex items-center justify-center shadow-md shadow-black/20 text-emerald-950 font-extrabold text-xl font-serif-heading border border-amber-300/40 group-hover:scale-105 transition-transform">
              AG
            </div>
            <div className="flex flex-col">
              <span className="font-serif-heading text-white font-bold text-base sm:text-lg tracking-wide leading-tight group-hover:text-amber-300 transition-colors">
                ABBA GLOBAL
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-emerald-200 font-semibold">
                Export and Import • Nigeria
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-medium text-emerald-50 hover:text-amber-300 px-3 py-2 rounded-md transition-colors hover:bg-emerald-800/40"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onRequestQuote}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-emerald-950 font-bold px-4 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-sm tracking-wide cursor-pointer"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onRequestQuote}
              className="sm:hidden inline-flex items-center gap-1 bg-amber-400 text-emerald-950 font-bold text-xs px-2.5 py-1.5 rounded shadow cursor-pointer"
            >
              <span>Quote</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-emerald-100 hover:text-amber-300 p-2 rounded-lg bg-emerald-800/50 hover:bg-emerald-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="lg:hidden bg-[#0a3822] border-t border-emerald-800/80 px-4 pt-3 pb-6 mt-3 space-y-1 animate-fadeIn">
            <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-amber-400 border-b border-emerald-800/60 mb-2">
              Navigation Menu
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="block text-emerald-100 hover:text-amber-300 hover:bg-emerald-800/60 px-3 py-2.5 rounded-md text-base font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-emerald-800/60 space-y-2">
              <button
                onClick={() => {
                  onRequestQuote();
                  setIsOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-400 text-emerald-950 font-bold py-3 rounded-lg text-sm shadow cursor-pointer"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-emerald-700/60 text-emerald-100 hover:text-white py-2.5 rounded-lg text-sm border border-emerald-600/50"
              >
                <MessageCircle className="w-4 h-4 text-amber-400" />
                <span>WhatsApp: {COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
