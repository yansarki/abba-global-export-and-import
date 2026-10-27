import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { AboutUs } from "./components/AboutUs";
import { Products } from "./components/Products";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Gallery } from "./components/Gallery";
import { VideoGallery } from "./components/VideoGallery";
import { EnquiryForm } from "./components/EnquiryForm";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { FloatingActions } from "./components/FloatingActions";

export function App() {
  const [selectedProductForEnquiry, setSelectedProductForEnquiry] = useState<string>(
    "Dried Hibiscus Flowers (Zobo)"
  );

  const handleScrollTo = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectProductForEnquiry = (productName: string) => {
    setSelectedProductForEnquiry(productName);
    handleScrollTo("enquiry-form");
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col selection:bg-amber-400 selection:text-emerald-950">
      {/* Header Navigation */}
      <Navbar
        onNavigate={handleScrollTo}
        onRequestQuote={() => handleScrollTo("enquiry-form")}
      />

      {/* Main Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onExploreProducts={() => handleScrollTo("products")}
          onContactUs={() => handleScrollTo("contact")}
        />

        {/* 2. About Us */}
        <AboutUs />

        {/* 3. Our Products */}
        <Products onSelectProductForEnquiry={handleSelectProductForEnquiry} />

        {/* 4. Why Choose Us */}
        <WhyChooseUs onContactClick={() => handleScrollTo("contact")} />

        {/* 5. Agricultural Gallery */}
        <Gallery />

        {/* 6. Video Gallery */}
        <VideoGallery />

        {/* 7. International Buyer Enquiry Form */}
        <EnquiryForm initialProduct={selectedProductForEnquiry} />

        {/* 8. Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleScrollTo} />

      {/* Floating WhatsApp and Quote Actions */}
      <FloatingActions onRequestQuote={() => handleScrollTo("enquiry-form")} />
    </div>
  );
}

export default App;
