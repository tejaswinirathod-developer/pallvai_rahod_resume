import React from 'react';
import { FileText, Download, Eye, CheckCircle2 } from 'lucide-react';

interface ResumeSectionProps {
  onOpenResume: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenResume }) => {
  const handleDownload = () => {
    onOpenResume();
  };

  return (
    <section id="resume" className="py-20 lg:py-28 bg-[#F8FAFD] border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-14 border border-[#C7D2FE] shadow-md text-center relative overflow-hidden">
          {/* Subtle Decorative Atmosphere */}
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 w-48 h-48 bg-[#EDE9FE]/50 rounded-full blur-3xl -z-10"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-0 w-48 h-48 bg-[#EEF2FF]/60 rounded-full blur-3xl -z-10"
          />

          {/* Section Eyebrow */}
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[#EEF2FF] to-[#F5F3FF] border border-[#C7D2FE] text-[#1E1B4B] mb-6 shadow-xs">
            <FileText className="w-7 h-7 text-[#6D28D9]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E1B4B]">
            My Resume
          </h2>

          <div className="w-16 h-[2px] bg-gradient-to-r from-[#2563EB] to-[#7C3AED] mx-auto mt-4 mb-6"></div>

          <p className="text-[#334155] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            View my professional resume for a detailed overview of my education, skills and certifications.
          </p>

          {/* Key Quick Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-10 text-left">
            <div className="p-4 rounded-xl bg-[#F8FAFD] border border-[#C7D2FE]/70">
              <div className="text-xs font-bold text-[#6D28D9] uppercase tracking-wider mb-1">
                Specialization
              </div>
              <div className="text-sm font-semibold text-[#1E1B4B]">
                MBA Finance &amp; HR
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#F8FAFD] border border-[#C7D2FE]/70">
              <div className="text-xs font-bold text-[#6D28D9] uppercase tracking-wider mb-1">
                Status
              </div>
              <div className="text-sm font-semibold text-[#1E1B4B]">
                Fresher · Ready to Join
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#F8FAFD] border border-[#C7D2FE]/70">
              <div className="text-xs font-bold text-[#6D28D9] uppercase tracking-wider mb-1">
                Certifications
              </div>
              <div className="text-sm font-semibold text-[#1E1B4B]">
                Power BI · Tally · MS CIT
              </div>
            </div>
          </div>

          {/* Interactive CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#1E1B4B] to-[#581C87] text-white text-sm font-semibold hover:from-[#2563EB] hover:to-[#7C3AED] transition-all cursor-pointer shadow-sm hover:shadow-md transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Eye className="w-4 h-4 text-[#DDD6FE]" />
              <span>View Resume</span>
            </button>

            <button
              type="button"
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border-2 border-[#312E81] bg-white text-[#1E1B4B] text-sm font-semibold hover:bg-[#EEF2FF] hover:border-[#6366F1] transition-all cursor-pointer shadow-2xs hover:shadow-xs transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Download className="w-4 h-4 text-[#6D28D9]" />
              <span>Download Resume</span>
            </button>
          </div>

          {/* Security and Integrity notice */}
          <p className="mt-8 text-xs text-[#6D28D9] flex items-center justify-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>Encrypted preview &amp; safe document generation without external third-party tracking</span>
          </p>
        </div>
      </div>
    </section>
  );
};
