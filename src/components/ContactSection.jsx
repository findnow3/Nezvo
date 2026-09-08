import React, { useState, useEffect } from 'react';
import { CONTACT_INFO, SERVICES } from '../data/websiteData';
import { 
  Mail, Phone, MapPin, Send, CheckCircle2, Shield, Clock, Sparkles, 
  Building, Globe, ArrowRight, MessageSquare, AlertCircle, Copy, Check 
} from 'lucide-react';

export default function ContactSection({ preselectedService, prefilledScope }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    service: 'Custom Software & Enterprise Architecture',
    budget: '$50,000 – $150,000',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  useEffect(() => {
    if (prefilledScope) {
      setFormData((prev) => ({
        ...prev,
        message: `Project Scope Requirement: ${prefilledScope}\n\nPlease share architecture blueprint and recommended timeline.`
      }));
    }
  }, [prefilledScope]);

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Corporate email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email format';
    }
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    if (!formData.message.trim()) newErrors.message = 'Please briefly describe your project objectives';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_INFO.headquarters.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-28 bg-[#030712] text-white relative">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/10 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-cyber-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Connect With Nezvo Infotech
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Initiate Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
              Architectural Consultation
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Discuss your technical hurdles directly with our Principal Solutions Architects. We evaluate specs, establish NDAs, and deliver actionable technical recommendations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Contact Information & Hubs */}
          <div className="lg:col-span-5 space-y-6">
            {/* Main HQ Card */}
            <div className="p-8 rounded-3xl bg-[#080e1e]/90 border border-cyan-500/20 backdrop-blur-xl shadow-2xl space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold block mb-1">
                  GLOBAL HEADQUARTERS
                </span>
                <h3 className="text-xl font-black text-white">
                  Nezvo Infotech Engineering Center
                </h3>
              </div>

              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{CONTACT_INFO.headquarters.address}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span className="font-mono text-xs sm:text-sm">{CONTACT_INFO.headquarters.phone}</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-[#040813] border border-white/5">
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span className="font-mono text-xs text-cyan-200 truncate">
                      {CONTACT_INFO.headquarters.email}
                    </span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* SLA Response Guarantee */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-950/50 to-blue-950/30 border border-cyan-500/30 space-y-2">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-bold text-white uppercase font-mono tracking-wider">
                    Enterprise SLA Commitment
                  </span>
                </div>
                <p className="text-xs text-slate-300">
                  All enterprise architecture inquiries are reviewed by a Senior Solutions Architect with a guaranteed initial response within <span className="text-cyan-300 font-bold">2 business hours</span>.
                </p>
              </div>
            </div>

            {/* Regional Tech Hubs */}
            <div className="p-6 rounded-3xl bg-[#080e1e]/60 border border-white/10 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                REGIONAL DELIVERY CENTERS
              </span>
              <div className="grid grid-cols-1 gap-3">
                {CONTACT_INFO.regionalOffices.map((office, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3.5 rounded-xl bg-[#040813] border border-white/5"
                  >
                    <div>
                      <div className="text-xs font-bold text-slate-200">
                        {office.region}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {office.city}
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-cyan-400">
                      {office.email}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Security Assurance */}
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#040813] border border-white/5 text-xs text-slate-400">
              <Shield className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>
                Standard Mutual Non-Disclosure Agreement (NDA) executed before technical discovery sessions.
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Inquiry Form */}
          <div className="lg:col-span-7 bg-[#080e1e]/90 border border-cyan-500/20 rounded-3xl p-8 sm:p-10 backdrop-blur-xl shadow-2xl relative">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-6 animate-fadeIn">
                <div className="w-20 h-20 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto shadow-lg shadow-emerald-500/20">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-2">
                  <span className="font-mono text-xs text-emerald-400 font-bold uppercase tracking-widest">
                    CONSULTATION DISPATCHED // REF #NZ-{(Math.random() * 90000 + 10000).toFixed(0)}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    Thank You, {formData.fullName}!
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                    Your inquiry regarding <span className="text-cyan-300 font-semibold">{formData.service}</span> has been assigned to our Lead Solutions Architect. We will reach out to <span className="text-cyan-300 font-semibold">{formData.email}</span> within 2 hours.
                  </p>
                </div>

                <div className="p-4 max-w-md mx-auto rounded-xl bg-[#040813] border border-white/10 text-xs text-slate-400 space-y-1">
                  <div>Company: <span className="text-white font-semibold">{formData.company}</span></div>
                  <div>Estimated Budget: <span className="text-white font-semibold">{formData.budget}</span></div>
                </div>

                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      fullName: '',
                      email: '',
                      company: '',
                      service: SERVICES[0].title,
                      budget: '$50,000 – $150,000',
                      message: ''
                    });
                  }}
                  className="px-6 py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-white/10 pb-4 mb-2">
                  <h3 className="text-xl font-bold text-white">
                    Request Architectural Consultation
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Fill out the form below and an engineer will connect with you directly.
                  </p>
                </div>

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono uppercase text-slate-300 block mb-1.5 font-semibold">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className={`w-full px-4 py-3 rounded-xl bg-[#040813] border text-white text-sm focus:outline-none transition-colors ${
                        errors.fullName ? 'border-red-500 focus:border-red-400' : 'border-white/10 focus:border-cyan-400'
                      }`}
                    />
                    {errors.fullName && (
                      <span className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.fullName}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase text-slate-300 block mb-1.5 font-semibold">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className={`w-full px-4 py-3 rounded-xl bg-[#040813] border text-white text-sm focus:outline-none transition-colors ${
                        errors.email ? 'border-red-500 focus:border-red-400' : 'border-white/10 focus:border-cyan-400'
                      }`}
                    />
                    {errors.email && (
                      <span className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Company & Target Service */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono uppercase text-slate-300 block mb-1.5 font-semibold">
                      Organization / Company *
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Acme Technologies Inc."
                      className={`w-full px-4 py-3 rounded-xl bg-[#040813] border text-white text-sm focus:outline-none transition-colors ${
                        errors.company ? 'border-red-500 focus:border-red-400' : 'border-white/10 focus:border-cyan-400'
                      }`}
                    />
                    {errors.company && (
                      <span className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.company}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase text-slate-300 block mb-1.5 font-semibold">
                      Primary Service Focus
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#040813] border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title} className="bg-[#040813] text-white">
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Budget Bracket */}
                <div>
                  <label className="text-xs font-mono uppercase text-slate-300 block mb-1.5 font-semibold">
                    Anticipated Investment Tier
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      '$25k – $50k',
                      '$50k – $150k',
                      '$150k – $350k',
                      '$350k+'
                    ].map((tier) => (
                      <button
                        type="button"
                        key={tier}
                        onClick={() => setFormData({ ...formData, budget: tier })}
                        className={`py-2 px-3 rounded-xl text-xs font-mono font-medium transition-all border ${
                          formData.budget === tier
                            ? 'bg-cyan-500 text-black font-bold border-cyan-400'
                            : 'bg-[#040813] text-slate-300 border-white/10 hover:border-white/20'
                        }`}
                      >
                        {tier}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message / Scope */}
                <div>
                  <label className="text-xs font-mono uppercase text-slate-300 block mb-1.5 font-semibold">
                    Project Objectives & Technical Scope *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your current system challenges, architectural targets, or timelines..."
                    className={`w-full px-4 py-3 rounded-xl bg-[#040813] border text-white text-sm focus:outline-none transition-colors ${
                      errors.message ? 'border-red-500 focus:border-red-400' : 'border-white/10 focus:border-cyan-400'
                    }`}
                  />
                  {errors.message && (
                    <span className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm tracking-wide shadow-xl shadow-cyan-500/25 flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Transmitting Consultation Dossier...</span>
                    </div>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Strategic Project Inquiry</span>
                    </>
                  )}
                </button>

                <div className="text-center text-[11px] text-slate-500">
                  Protected by 256-bit TLS encryption. Nezvo Infotech respects your privacy and will never share your details.
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
