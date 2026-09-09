import React, { useState, useEffect } from 'react';
import { CONTACT_INFO, SERVICES } from '../data/websiteData';
import { 
  Mail, Phone, MapPin, Send, CheckCircle2, Shield, Clock, Sparkles, 
  Copy, Check, AlertCircle 
} from 'lucide-react';

export default function ContactSection({ preselectedService, prefilledScope }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    service: 'Custom Software & Distributed Systems',
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
        message: `Scope Specification: ${prefilledScope}\n\nPlease provide architectural recommendations and sprint timeline.`
      }));
    }
  }, [prefilledScope]);

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Corporate email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Valid corporate email required';
    }
    if (!formData.company.trim()) newErrors.company = 'Company is required';
    if (!formData.message.trim()) newErrors.message = 'Please specify your project scope';
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

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_INFO.headquarters.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-white border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-700 text-xs font-semibold uppercase">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            Direct Engagement
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
            Initiate An Architectural Consultation
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Connect directly with a Senior Solutions Architect. We evaluate specifications under NDA and respond within 2 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Contact Information & Hubs */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-6 sm:p-7 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm space-y-5">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-700 font-bold block mb-0.5">
                  GLOBAL HEADQUARTERS
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  Nezvo Infotech Engineering Center
                </h3>
              </div>

              <div className="space-y-3.5 text-xs text-slate-700">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                  <span>{CONTACT_INFO.headquarters.address}</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span className="font-mono">{CONTACT_INFO.headquarters.phone}</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200">
                  <div className="flex items-center gap-2 overflow-hidden">
                    <Mail className="w-4 h-4 text-cyan-600 shrink-0" />
                    <span className="font-mono text-xs text-cyan-800 font-medium truncate">
                      {CONTACT_INFO.headquarters.email}
                    </span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* SLA Response Guarantee */}
              <div className="p-3.5 rounded-xl bg-cyan-50/70 border border-cyan-200 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-cyan-900">
                  <Clock className="w-3.5 h-3.5 text-cyan-700" />
                  <span>Enterprise SLA Response</span>
                </div>
                <p className="text-[11px] text-slate-600">
                  Direct evaluation by a Lead Architect with guaranteed initial response within <strong className="text-cyan-800">2 business hours</strong>.
                </p>
              </div>
            </div>

            {/* Regional Hubs & NDA */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold block">
                REGIONAL DELIVERY HUBS
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {CONTACT_INFO.regionalOffices.map((office, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-white border border-slate-200 text-[11px]">
                    <div className="font-bold text-slate-900">{office.city}</div>
                    <div className="text-[10px] text-cyan-700 font-mono mt-0.5">{office.email}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
              <Shield className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Standard Mutual NDA executed prior to technical architecture reviews.</span>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Inquiry Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-lg relative">
            {isSubmitted ? (
              <div className="py-10 text-center space-y-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mx-auto shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-1.5">
                  <span className="font-mono text-xs text-emerald-700 font-bold uppercase tracking-wider">
                    CONSULTATION DISPATCHED
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                    Thank You, {formData.fullName}!
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto">
                    Your inquiry regarding <strong className="text-cyan-800">{formData.service}</strong> has been routed to our Senior Solution Architect. Expect contact at <strong className="text-cyan-800">{formData.email}</strong> within 2 hours.
                  </p>
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
                  className="px-5 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-slate-100 pb-3 mb-1">
                  <h3 className="text-lg font-bold text-slate-900">
                    Consultation Request Form
                  </h3>
                  <p className="text-xs text-slate-500">
                    Fill out the form below to receive a customized architectural proposal.
                  </p>
                </div>

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border text-slate-900 text-xs sm:text-sm focus:bg-white focus:outline-none transition-colors ${
                        errors.fullName ? 'border-red-400 focus:border-red-500' : 'border-slate-300 focus:border-cyan-600 focus:ring-1 focus:ring-cyan-500'
                      }`}
                    />
                    {errors.fullName && (
                      <span className="text-[11px] text-red-500 mt-0.5 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.fullName}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border text-slate-900 text-xs sm:text-sm focus:bg-white focus:outline-none transition-colors ${
                        errors.email ? 'border-red-400 focus:border-red-500' : 'border-slate-300 focus:border-cyan-600 focus:ring-1 focus:ring-cyan-500'
                      }`}
                    />
                    {errors.email && (
                      <span className="text-[11px] text-red-500 mt-0.5 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Company & Service */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">
                      Company *
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Acme Technologies Inc."
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border text-slate-900 text-xs sm:text-sm focus:bg-white focus:outline-none transition-colors ${
                        errors.company ? 'border-red-400 focus:border-red-500' : 'border-slate-300 focus:border-cyan-600 focus:ring-1 focus:ring-cyan-500'
                      }`}
                    />
                    {errors.company && (
                      <span className="text-[11px] text-red-500 mt-0.5 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.company}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">
                      Target Service Focus
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-cyan-600"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Investment Tier */}
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Investment Tier
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {['$25k – $50k', '$50k – $150k', '$150k – $350k', '$350k+'].map((tier) => (
                      <button
                        type="button"
                        key={tier}
                        onClick={() => setFormData({ ...formData, budget: tier })}
                        className={`py-2 px-2.5 rounded-xl text-xs font-mono transition-all border ${
                          formData.budget === tier
                            ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold border-transparent shadow-sm'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {tier}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Objectives & Scope *
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your current system hurdles, milestones, or questions..."
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border text-slate-900 text-xs sm:text-sm focus:bg-white focus:outline-none transition-colors ${
                      errors.message ? 'border-red-400 focus:border-red-500' : 'border-slate-300 focus:border-cyan-600 focus:ring-1 focus:ring-cyan-500'
                    }`}
                  />
                  {errors.message && (
                    <span className="text-[11px] text-red-500 mt-0.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-xs sm:text-sm tracking-wide shadow-md shadow-cyan-600/20 flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Routing to Solution Architect...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Consultation Request</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
