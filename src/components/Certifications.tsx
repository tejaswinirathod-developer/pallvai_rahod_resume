import React from 'react';
import { Award, BookOpen, Globe, CheckCircle } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 lg:py-28 bg-[#F8FAFD] border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#6D28D9]">
            Credentials &amp; Participation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E1B4B] mt-2">
            Certifications &amp; Achievements
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-[#2563EB] to-[#7C3AED] mt-4 mb-6"></div>
          <p className="text-[#334155] text-base sm:text-lg leading-relaxed">
            Documented participation in analytics workshops, foundational software proficiencies, and interdisciplinary conferences.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CERTIFICATIONS_DATA.map((category, index) => {
            const getIcon = () => {
              switch (index) {
                case 0:
                  return <BookOpen className="w-5 h-5 text-[#2563EB]" />;
                case 1:
                  return <Award className="w-5 h-5 text-[#7C3AED]" />;
                case 2:
                  return <Globe className="w-5 h-5 text-[#4338CA]" />;
                default:
                  return <Award className="w-5 h-5 text-[#7C3AED]" />;
              }
            };

            return (
              <div
                key={category.title}
                className="bg-white rounded-2xl p-7 sm:p-8 border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-[#C7D2FE] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-[#EEF2FF] border border-[#C7D2FE] flex items-center justify-center shrink-0 group-hover:bg-[#1E1B4B] group-hover:text-white transition-colors">
                      {getIcon()}
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1E1B4B]">
                      {category.title}
                    </h3>
                  </div>

                  <div className="h-[1px] bg-[#E2E8F0] mb-6" />

                  {/* Items List */}
                  <ul className="space-y-4">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-[#7C3AED] shrink-0 mt-0.5" />
                        <span className="text-sm font-medium text-[#1E1B4B] leading-snug">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-[11px] text-[#6D28D9]">
                  <span>{category.items.length} Credentials Listed</span>
                  <span className="font-medium text-[#4338CA]">Curricular Verified</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
