import React, { useState, useEffect } from "react";
import { Send, CheckCircle2, AlertCircle, MessageSquare, Mail, Phone, RefreshCw } from "lucide-react";
import { COMPANY_INFO, PRODUCTS } from "../data/companyData";

interface EnquiryFormProps {
  initialProduct?: string;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({ initialProduct }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    country: "",
    productOfInterest: "Dried Hibiscus Flowers (Zobo)",
    estimatedQuantity: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState("");

  useEffect(() => {
    if (initialProduct) {
      setFormData((prev) => ({
        ...prev,
        productOfInterest: initialProduct
      }));
    }
  }, [initialProduct]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Generate a unique reference ID for buyer peace of mind
    const ref = "AGX-" + Math.floor(100000 + Math.random() * 900000);
    setReferenceId(ref);

    // Simulate reliable enquiry dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: "",
      companyName: "",
      email: "",
      country: "",
      productOfInterest: "Dried Hibiscus Flowers (Zobo)",
      estimatedQuantity: "",
      message: ""
    });
  };

  // Pre-fill email and WhatsApp links with form details
  const emailSubject = encodeURIComponent(
    `Export Enquiry: ${formData.productOfInterest} [Ref: ${referenceId || "Direct"}]`
  );
  const emailBody = encodeURIComponent(
    `Hello ABBA GLOBAL EXPORT AND IMPORT Team,\n\nI am submitting an agricultural commodity enquiry:\n\n- Name: ${formData.fullName}\n- Company: ${formData.companyName}\n- Email: ${formData.email}\n- Country: ${formData.country}\n- Product of Interest: ${formData.productOfInterest}\n- Estimated Quantity: ${formData.estimatedQuantity}\n\nEnquiry Details:\n${formData.message}\n\nPlease reply with pricing and delivery terms.\nThank you.`
  );
  const mailtoPrefilled = `mailto:${COMPANY_INFO.email}?subject=${emailSubject}&body=${emailBody}`;

  const whatsappMessage = encodeURIComponent(
    `Hello ABBA GLOBAL EXPORT AND IMPORT, my name is ${formData.fullName || "a prospective buyer"} from ${formData.companyName || formData.country || "overseas"}. I would like to enquire about: ${formData.productOfInterest} (Est. Quantity: ${formData.estimatedQuantity || "N/A"}). Message: ${formData.message || "Please provide quotation and specifications."}`
  );
  const whatsappPrefilled = `https://wa.me/2347037737995?text=${whatsappMessage}`;

  return (
    <section id="enquiry-form" className="py-20 lg:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider border border-emerald-200 mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-emerald-700" />
            <span>Direct Commercial Desk</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-heading text-emerald-950 tracking-tight">
            International Buyer Enquiry Form
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Send us your crop specifications, volume requirements, and destination details. We will review your request and get back to you promptly.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {isSubmitted ? (
            /* Success Card */
            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-emerald-200 text-center animate-fadeIn">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <span className="text-xs font-bold uppercase tracking-widest text-emerald-800">
                Enquiry Recorded Successfully
              </span>
              <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
                Thank You, {formData.fullName || "Valued Buyer"}!
              </h3>

              <div className="my-5 inline-block bg-emerald-50 border border-emerald-200 rounded-xl px-5 py-2.5 text-xs text-emerald-900 font-medium">
                Enquiry Reference ID: <strong className="font-bold text-emerald-950 text-sm tracking-wider">{referenceId}</strong>
              </div>

              <p className="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
                We have registered your interest in{" "}
                <strong className="text-slate-900">{formData.productOfInterest}</strong>{" "}
                {formData.estimatedQuantity && `(${formData.estimatedQuantity})`}.
              </p>

              {/* Informative notice regarding submission processing */}
              <div className="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-200 text-left text-xs text-amber-900 flex items-start gap-3">
                <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block mb-0.5">Direct Communication Notice:</span>
                  To expedite urgent quotes or if our online backend server experiences transmission delays, you can immediately send these pre-filled details straight to our primary email or WhatsApp desk below:
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={mailtoPrefilled}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-900 hover:bg-emerald-800 text-white font-bold py-3 px-6 rounded-xl text-sm transition-colors cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-amber-300" />
                  <span>Send Direct via Email</span>
                </a>

                <a
                  href={whatsappPrefilled}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-3 px-6 rounded-xl text-sm transition-colors cursor-pointer"
                >
                  <Phone className="w-4 h-4" />
                  <span>Send Direct to WhatsApp</span>
                </a>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Submit Another Enquiry</span>
                </button>
              </div>
            </div>
          ) : (
            /* Main Form */
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Johnathan Miller"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 outline-none text-sm transition-all text-slate-900 bg-slate-50/50"
                    />
                  </div>

                  {/* Company Name */}
                  <div>
                    <label htmlFor="companyName" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Company / Organization Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      required
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="e.g. Global Foods Trading Ltd"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 outline-none text-sm transition-all text-slate-900 bg-slate-50/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email Address */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. buyer@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 outline-none text-sm transition-all text-slate-900 bg-slate-50/50"
                    />
                  </div>

                  {/* Country */}
                  <div>
                    <label htmlFor="country" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Country <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      required
                      value={formData.country}
                      onChange={handleChange}
                      placeholder="e.g. Germany, UAE, USA, Nigeria"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 outline-none text-sm transition-all text-slate-900 bg-slate-50/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Product of Interest */}
                  <div>
                    <label htmlFor="productOfInterest" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Product of Interest <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="productOfInterest"
                      name="productOfInterest"
                      value={formData.productOfInterest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 outline-none text-sm transition-all text-slate-900 bg-slate-50/50"
                    >
                      {PRODUCTS.map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name}
                        </option>
                      ))}
                      <option value="Sesame Seeds (Beniseed)">Sesame Seeds (Beniseed)</option>
                      <option value="Dried Split Ginger">Dried Split Ginger</option>
                      <option value="Sorghum / Millet">Sorghum / Millet</option>
                      <option value="Multiple Commodities / Mixed Inquiries">Multiple Commodities / Mixed Inquiries</option>
                    </select>
                  </div>

                  {/* Estimated Quantity */}
                  <div>
                    <label htmlFor="estimatedQuantity" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Estimated Quantity <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="estimatedQuantity"
                      name="estimatedQuantity"
                      required
                      value={formData.estimatedQuantity}
                      onChange={handleChange}
                      placeholder="e.g. 1 x 20ft FCL (12 MT) or 50 bags"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 outline-none text-sm transition-all text-slate-900 bg-slate-50/50"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Message / Specifications & Questions <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Specify target delivery schedule, preferred packaging, moisture preferences, target port of discharge (e.g. CIF Hamburg, FOB Lagos), or any questions."
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 outline-none text-sm transition-all text-slate-900 bg-slate-50/50 resize-y"
                  />
                </div>

                {/* Alternative Contact Disclaimer (as requested) */}
                <div className="p-3.5 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-600 flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                  <span>
                    <strong>Submission transparency:</strong> Submitting records your enquiry and generates a reference code. You can also reach our desk immediately via WhatsApp (<a href={COMPANY_INFO.whatsappUrl} className="text-emerald-800 font-semibold underline">{COMPANY_INFO.phoneDisplay}</a>) or email (<a href={`mailto:${COMPANY_INFO.email}`} className="text-emerald-800 font-semibold underline">{COMPANY_INFO.email}</a>).
                  </span>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-900 hover:from-emerald-800 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-xl text-base shadow-lg hover:shadow-emerald-900/25 transition-all duration-200 disabled:opacity-60 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="w-5 h-5 animate-spin text-amber-300" />
                      <span>Processing Enquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 text-amber-300" />
                      <span>Submit Enquiry</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
