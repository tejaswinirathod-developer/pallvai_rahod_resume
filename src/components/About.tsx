import React from 'react';
import { Target, Compass, Award, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F8FAFD] border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#6D28D9]">
            Background &amp; Profile
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E1B4B] mt-2">
            About Me
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-[#2563EB] to-[#7C3AED] mt-4 mb-6"></div>
          <p className="text-[#334155] text-base sm:text-lg leading-relaxed">
            A dedicated MBA candidate in Finance &amp; Human Resources with a Commerce background, committed to ethical leadership, analytical problem-solving, and continuous organizational learning.
          </p>
        </div>

        {/* Narrative & Profile Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Narrative Card */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-6">
            <h3 className="font-serif text-2xl font-bold text-[#1E1B4B]">
              Academic Foundation &amp; Professional Vision
            </h3>
            
            <div className="space-y-4 text-sm sm:text-base text-[#334155] leading-relaxed">
              {PERSONAL_INFO.about.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Core Values / Competencies List */}
            <div className="pt-6 border-t border-[#E2E8F0]">
              <span className="text-xs font-bold tracking-wider uppercase text-[#6D28D9] block mb-3">
                Core Professional Focus Areas
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#1E1B4B]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                  <span>Financial Analysis &amp; Accounting</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
                  <span>Human Resource Management</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                  <span>Collaborative Team Dynamics</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
                  <span>Structured Problem Solving</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Attributes & Summary Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Card 1: Dual Specialization */}
            <div className="bg-white p-6 rounded-xl border border-[#E2E8F0] shadow-xs hover:border-[#818CF8] hover:shadow-sm transition-all">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-[#EEF2FF] text-[#2563EB] border border-[#C7D2FE]">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg text-[#1E1B4B]">
                    Dual Specialization: Finance &amp; HR
                  </h4>
                  <p className="text-xs sm:text-sm text-[#475569] mt-1 leading-relaxed">
                    Bridging quantitative rigor in financial evaluation with essential people management and organizational frameworks.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Fresher Readiness */}
            <div className="bg-white p-6 rounded-xl border border-[#E2E8F0] shadow-xs hover:border-[#A78BFA] hover:shadow-sm transition-all">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-[#F5F3FF] text-[#7C3AED] border border-[#DDD6FE]">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg text-[#1E1B4B]">
                    Fresher with Dynamic Learning Agility
                  </h4>
                  <p className="text-xs sm:text-sm text-[#475569] mt-1 leading-relaxed">
                    Eager to channel fresh academic learning, software capabilities, and disciplined work ethics into high-impact corporate teams.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Continuous Improvement */}
            <div className="bg-white p-6 rounded-xl border border-[#E2E8F0] shadow-xs hover:border-[#818CF8] hover:shadow-sm transition-all">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-[#EEF2FF] text-[#2563EB] border border-[#C7D2FE]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg text-[#1E1B4B]">
                    Workshops &amp; Skill Development
                  </h4>
                  <p className="text-xs sm:text-sm text-[#475569] mt-1 leading-relaxed">
                    Active participant in professional workshops, state board academic distinction, and analytical certification modules.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4: Integrity & Corporate Discipline */}
            <div className="bg-white p-6 rounded-xl border border-[#E2E8F0] shadow-xs hover:border-[#A78BFA] hover:shadow-sm transition-all">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-[#F5F3FF] text-[#7C3AED] border border-[#DDD6FE]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg text-[#1E1B4B]">
                    Professional Reliability
                  </h4>
                  <p className="text-xs sm:text-sm text-[#475569] mt-1 leading-relaxed">
                    High accountability, capacity to manage tight schedules and pressure, and prompt communication in structured corporate settings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
