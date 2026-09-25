import React from 'react';
import { FileSpreadsheet, Lock, Mail, ArrowUpRight } from 'lucide-react';
import { PROJECT_DATA, PERSONAL_INFO } from '../data/portfolioData';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 lg:py-28 bg-[#F8FAFD] border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#6D28D9]">
            Academic Work &amp; Case Studies
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E1B4B] mt-2">
            Projects
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-[#2563EB] to-[#7C3AED] mt-4 mb-6"></div>
          <p className="text-[#334155] text-base sm:text-lg leading-relaxed">
            Curricular analytical project completed as part of the MBA program in finance and management.
          </p>
        </div>

        {/* Project Card Display */}
        <div className="max-w-3xl">
          <div className="bg-white rounded-2xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-[#C7D2FE] transition-all group">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#EEF2FF] to-[#F5F3FF] border border-[#C7D2FE] flex items-center justify-center text-[#2563EB] group-hover:from-[#1E1B4B] group-hover:to-[#581C87] group-hover:text-white transition-all">
                  <FileSpreadsheet className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold tracking-wider uppercase text-[#6D28D9]">
                    {PROJECT_DATA.summary}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E1B4B]">
                    {PROJECT_DATA.title}
                  </h3>
                </div>
              </div>

              {/* Status Indicator */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#F5F3FF] border border-[#DDD6FE] text-xs font-semibold text-[#6D28D9]">
                <Lock className="w-3.5 h-3.5 text-[#7C3AED]" />
                <span>Confidential Academic Project</span>
              </div>
            </div>

            <div className="h-[1px] bg-[#E2E8F0] my-6" />

            <div className="space-y-4">
              <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
                {PROJECT_DATA.description}
              </p>

              {/* Notice Box */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-[#EEF2FF] to-[#F5F3FF] border-l-4 border-[#7C3AED] border-y border-r border-[#C7D2FE] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-[#1E1B4B] mb-0.5">
                    Documentation Availability
                  </span>
                  <p className="text-xs sm:text-sm font-medium text-[#6D28D9]">
                    &ldquo;{PROJECT_DATA.status}&rdquo;
                  </p>
                </div>

                <a
                  href={`mailto:${PERSONAL_INFO.email}?subject=Inquiry%20regarding%20Finance%20Project%20Details&body=Hello%20Pallavi,%0A%0AI%20would%20like%20to%20request%20more%20details%20regarding%20your%20Finance%20Project.`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1E1B4B] hover:text-[#6D28D9] underline underline-offset-4 decoration-[#C7D2FE] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#7C3AED]" />
                  <span>Request Full Project Brief</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
                </a>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-[11px] text-[#6D28D9]">
              <span>Master of Business Administration (MBA) Specialization</span>
              <span>Nagpur, Maharashtra</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
