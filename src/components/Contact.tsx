import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmitTime, setLastSubmitTime] = useState<number>(0);

  const validate = () => {
    const errs: Record<string, string> = {};

    const cleanName = formData.name.trim();
    if (!cleanName) {
      errs.name = 'Please enter your full name.';
    } else if (cleanName.length < 2) {
      errs.name = 'Name must be at least 2 characters long.';
    } else if (cleanName.length > 80) {
      errs.name = 'Name must be under 80 characters.';
    }

    const cleanEmail = formData.email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!cleanEmail) {
      errs.email = 'Please provide an email address.';
    } else if (!emailRegex.test(cleanEmail)) {
      errs.email = 'Please enter a valid email address.';
    } else if (cleanEmail.length > 100) {
      errs.email = 'Email address is too long.';
    }

    const cleanMessage = formData.message.trim();
    if (!cleanMessage) {
      errs.message = 'Please provide a message or inquiry details.';
    } else if (cleanMessage.length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    } else if (cleanMessage.length > 2000) {
      errs.message = 'Message must be under 2000 characters.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const now = Date.now();
    if (now - lastSubmitTime < 5000) {
      setErrors({ form: 'Please wait a few seconds before sending another message.' });
      return;
    }

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setLastSubmitTime(now);

    setTimeout(() => {
      const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name.trim()}`);
      const body = encodeURIComponent(
        `Name: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}`
      );
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    }, 600);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F8FAFD] border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#6D28D9]">
            Get In Touch
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E1B4B] mt-2">
            Contact Me
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-[#2563EB] to-[#7C3AED] mt-4 mb-6"></div>
          <p className="text-[#334155] text-base sm:text-lg leading-relaxed">
            Interested in discussing corporate opportunities, internships, or academic projects? Feel free to reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-7 sm:p-8 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-6">
              <h3 className="font-serif text-2xl font-bold text-[#1E1B4B]">
                Contact Information
              </h3>
              
              <div className="space-y-5 text-sm">
                {/* Email Item */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EEF2FF] border border-[#C7D2FE] flex items-center justify-center shrink-0 text-[#2563EB]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-[#6D28D9]">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="font-medium text-[#1E1B4B] hover:text-[#7C3AED] transition-colors break-all"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Phone Item */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F5F3FF] border border-[#DDD6FE] flex items-center justify-center shrink-0 text-[#7C3AED]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-[#6D28D9]">
                      Phone
                    </span>
                    <a
                      href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                      className="font-medium text-[#1E1B4B] hover:text-[#7C3AED] transition-colors"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EEF2FF] border border-[#C7D2FE] flex items-center justify-center shrink-0 text-[#2563EB]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-[#6D28D9]">
                      Location
                    </span>
                    <span className="font-medium text-[#1E1B4B]">
                      {PERSONAL_INFO.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Privacy & Security Note */}
              <div className="pt-6 border-t border-[#E2E8F0] text-xs text-[#64748B] flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 shrink-0 text-[#2563EB] mt-0.5" />
                <span>
                  Privacy-first communication. Your contact details and correspondence are strictly held in confidence and never shared.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-7 sm:p-10 rounded-2xl border border-[#E2E8F0] shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-[#1E1B4B] mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] mb-6">
                Fill out the form below. Client-side verified and sent securely to Pallavi Rathod.
              </p>

              {isSubmitted ? (
                <div className="p-6 rounded-xl bg-[#F8FAFD] border border-[#C7D2FE] text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white flex items-center justify-center mx-auto">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-[#1E1B4B]">
                    Message Prepared Successfully
                  </h4>
                  <p className="text-xs sm:text-sm text-[#334155] max-w-md mx-auto">
                    Thank you, <strong className="text-[#1E1B4B]">{formData.name}</strong>. Your correspondence has been formatted and directed to <span className="font-medium text-[#6D28D9]">{PERSONAL_INFO.email}</span>.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="inline-flex items-center text-xs font-semibold text-[#2563EB] hover:text-[#7C3AED] underline underline-offset-4 mt-2 cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {errors.form && (
                    <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errors.form}</span>
                    </div>
                  )}

                  {/* Name Input */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#1E1B4B] mb-1.5"
                    >
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      maxLength={80}
                      placeholder="e.g. Anand Sharma"
                      className={`w-full px-4 py-2.5 rounded-lg border text-sm text-[#0F172A] bg-[#F8FAFD] focus:bg-white transition-colors outline-none ${
                        errors.name
                          ? 'border-red-400 focus:border-red-500'
                          : 'border-[#CBD5E1] focus:border-[#6366F1]'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-600">{errors.name}</p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#1E1B4B] mb-1.5"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      maxLength={100}
                      placeholder="name@company.com"
                      className={`w-full px-4 py-2.5 rounded-lg border text-sm text-[#0F172A] bg-[#F8FAFD] focus:bg-white transition-colors outline-none ${
                        errors.email
                          ? 'border-red-400 focus:border-red-500'
                          : 'border-[#CBD5E1] focus:border-[#6366F1]'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                    )}
                  </div>

                  {/* Message Input */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#1E1B4B] mb-1.5"
                    >
                      Message / Inquiry <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      maxLength={2000}
                      placeholder="Write your message or inquiry here..."
                      className={`w-full px-4 py-2.5 rounded-lg border text-sm text-[#0F172A] bg-[#F8FAFD] focus:bg-white transition-colors outline-none resize-none ${
                        errors.message
                          ? 'border-red-400 focus:border-red-500'
                          : 'border-[#CBD5E1] focus:border-[#6366F1]'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-600">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[#1E1B4B] to-[#581C87] text-white text-sm font-semibold hover:from-[#2563EB] hover:to-[#7C3AED] disabled:opacity-70 transition-all cursor-pointer shadow-sm hover:shadow-md"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Processing...' : 'Send Message'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
