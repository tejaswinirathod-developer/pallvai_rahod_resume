import React from 'react';
import { ArrowUp, Mail, Phone, MapPin, FileText, FileCode } from 'lucide-react';
import { PERSONAL_INFO, NAV_LINKS } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
  onOpenCodePdf?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume, onOpenCodePdf }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-[#1E1B4B] to-[#0F172A] text-white pt-16 pb-12 border-t border-[#312E81]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#312E81]/80">
          {/* Brand & Summary */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#2563EB] to-[#7C3AED] text-white flex items-center justify-center font-serif text-lg font-bold shadow-sm">
                PR
              </div>
              <span className="font-serif font-bold text-xl tracking-wider text-white">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#CBD5E1] max-w-sm leading-relaxed">
              Master of Business Administration (MBA) in Finance &amp; Human Resources. Dedicated to analytical integrity, organizational teamwork, and corporate value creation.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-2">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-[#A78BFA]/50 text-xs font-semibold text-white hover:bg-white hover:text-[#1E1B4B] transition-colors cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-[#A78BFA]" />
                <span>Executive Resume</span>
              </button>

              {onOpenCodePdf && (
                <button
                  onClick={onOpenCodePdf}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-xs font-semibold text-white hover:from-[#1D4ED8] hover:to-[#6D28D9] transition-all cursor-pointer shadow-sm"
                >
                  <FileCode className="w-3.5 h-3.5 text-white" />
                  <span>Download Code PDF</span>
                </button>
              )}
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif text-lg font-bold text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {NAV_LINKS.slice(0, 5).map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#CBD5E1] hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif text-lg font-bold text-white">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs text-[#CBD5E1]">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#A78BFA] shrink-0" />
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#A78BFA] shrink-0" />
                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                  className="hover:text-white transition-colors"
                >
                  {PERSONAL_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#A78BFA] shrink-0" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#94A3B8]">
          <p>© 2026 Pallavi Rathod. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-[11px] text-[#A78BFA]">
              MBA Specialization: Finance &amp; HR
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#312E81] text-white hover:bg-[#4338CA] transition-colors"
              aria-label="Scroll back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
