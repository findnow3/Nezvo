import React, { useState, useEffect } from 'react';
import { CONTACT_INFO, SERVICES } from '../data/websiteData';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, Sparkles, Copy, Check, AlertCircle } from 'lucide-react';

export default function ContactSection({ preselectedService, prefilledScope }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: 'Custom Web Application Development',
    budget: '$2.5k – $6k / ₹2L – ₹5L',
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
        message: `Project Requirement: ${prefilledScope}\n\nPlease get in touch with an estimated proposal and availability.`
      }));
    }
  }, [prefilledScope]);

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Please enter your name';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Please describe your project';
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
    }, 600);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_INFO.office.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-white border-t border-slate-200/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-700 font-bold">
            GET IN TOUCH
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
            Let’s Build Your Next Project
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Tell us about your project requirements and we will provide a detailed proposal and timeline within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Real Office Information */}
          <div className="lg:col-span-5 space-y-5 bg-slate-50 border border-slate-200/80 rounded-2xl p-6">
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Nezvo Infotech
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Software Development & Cloud Engineering
              </p>
            </div>

            <div className="space-y-3 text-xs text-slate-700">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.office.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyan-600 shrink-0" />
                <span className="font-mono">{CONTACT_INFO.office.phone}</span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200">
                <div className="flex items-center gap-2 overflow-hidden">
                  <Mail className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span className="font-mono text-xs text-slate-800 truncate">
                    {CONTACT_INFO.office.email}
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <div className="flex items-center gap-2.5 text-[11px] text-slate-500 pt-1">
                <Clock className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                <span>{CONTACT_INFO.hours}</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-cyan-50/70 border border-cyan-200 text-xs text-slate-700">
              <span className="font-semibold text-cyan-900 block mb-0.5">
                Quick Response Guarantee
              </span>
              <p className="text-[11px] text-slate-600">
                Every inquiry is reviewed directly by our engineering leads. You will hear back within 24 hours with questions or an initial proposal.
              </p>
            </div>
          </div>

          {/* Right Column: Clean Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-sm">
            {isSubmitted ? (
              <div className="py-8 text-center space-y-3 animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Thank You, {formData.fullName}!
                </h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  We have received your project details and will email you at <strong className="text-slate-800">{formData.email}</strong> within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      fullName: '',
                      email: '',
                      phone: '',
                      service: SERVICES[0].title,
                      budget: '$2.5k – $6k / ₹2L – ₹5L',
                      message: ''
                    });
                  }}
                  className="mt-2 px-4 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className={`w-full px-3.5 py-2 rounded-xl bg-slate-50 border text-xs sm:text-sm focus:bg-white focus:outline-none ${
                        errors.fullName ? 'border-red-400' : 'border-slate-300 focus:border-cyan-600'
                      }`}
                    />
                    {errors.fullName && (
                      <span className="text-[11px] text-red-500 mt-0.5 block">{errors.fullName}</span>
                    )}
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className={`w-full px-3.5 py-2 rounded-xl bg-slate-50 border text-xs sm:text-sm focus:bg-white focus:outline-none ${
                        errors.email ? 'border-red-400' : 'border-slate-300 focus:border-cyan-600'
                      }`}
                    />
                    {errors.email && (
                      <span className="text-[11px] text-red-500 mt-0.5 block">{errors.email}</span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-300 text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-cyan-600"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">
                      Service Interested In
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-800 text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-cyan-600"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Estimated Budget Range
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                    {[
                      '< ₹2L (< $2.5k)',
                      '₹2L – ₹5L ($2.5k–$6k)',
                      '₹5L – ₹10L ($6k–$12k)',
                      '₹10L+ ($12k+)'
                    ].map((tier) => (
                      <button
                        type="button"
                        key={tier}
                        onClick={() => setFormData({ ...formData, budget: tier })}
                        className={`py-1.5 px-2 rounded-lg text-[11px] font-mono transition-all border ${
                          formData.budget === tier
                            ? 'bg-cyan-50 border-cyan-500 text-cyan-900 font-bold shadow-sm'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {tier}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Project Summary *
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe what you're looking to build, any deadlines, or specific features..."
                    className={`w-full px-3.5 py-2 rounded-xl bg-slate-50 border text-xs sm:text-sm focus:bg-white focus:outline-none ${
                      errors.message ? 'border-red-400' : 'border-slate-300 focus:border-cyan-600'
                    }`}
                  />
                  {errors.message && (
                    <span className="text-[11px] text-red-500 mt-0.5 block">{errors.message}</span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-xs sm:text-sm tracking-wide shadow-sm flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Project Inquiry</span>
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
