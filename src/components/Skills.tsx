import React from 'react';
import { Briefcase, Check, Award, Layers } from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 lg:py-28 bg-[#F8FAFD] border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#6D28D9]">
            Capabilities &amp; Competencies
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E1B4B] mt-2">
            Skills &amp; Expertise
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-[#2563EB] to-[#7C3AED] mt-4 mb-6"></div>
          <p className="text-[#334155] text-base sm:text-lg leading-relaxed">
            A balanced skill profile encompassing interpersonal management, operational work resilience, and financial computer applications.
          </p>
        </div>

        {/* 3 Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILLS_DATA.map((category, index) => {
            const getIcon = () => {
              switch (index) {
                case 0:
                  return <Briefcase className="w-5 h-5 text-[#2563EB]" />;
                case 1:
                  return <Layers className="w-5 h-5 text-[#7C3AED]" />;
                case 2:
                  return <Award className="w-5 h-5 text-[#4338CA]" />;
                default:
                  return <Briefcase className="w-5 h-5 text-[#2563EB]" />;
              }
            };

            return (
              <div
                key={category.title}
                className="bg-white rounded-2xl p-7 sm:p-8 border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-[#C7D2FE] transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#EEF2FF] border border-[#C7D2FE] flex items-center justify-center shrink-0 group-hover:bg-[#1E1B4B] group-hover:border-[#1E1B4B] group-hover:text-white transition-colors">
                      {getIcon()}
                    </div>
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1E1B4B]">
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#475569] mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  <div className="h-[1px] bg-[#E2E8F0] mb-6" />

                  {/* Skills List */}
                  <ul className="space-y-3.5">
                    {category.skills.map((skill) => (
                      <li key={skill} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#F5F3FF] border border-[#DDD6FE] flex items-center justify-center shrink-0 text-[#7C3AED]">
                          <Check className="w-3 h-3 stroke-[2.5]" />
                        </div>
                        <span className="text-sm font-medium text-[#1E1B4B]">
                          {skill}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Sub-note */}
                <div className="mt-8 pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-[11px] text-[#6D28D9]">
                  <span>{category.skills.length} core attributes</span>
                  <span className="font-medium text-[#4338CA]">Verified from resume</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
