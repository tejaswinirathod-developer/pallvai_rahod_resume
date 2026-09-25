import React from 'react';
import { GraduationCap, BookOpen, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 lg:py-28 bg-[#F8FAFD] border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#6D28D9]">
            Academic Milestones
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E1B4B] mt-2">
            Education
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-[#2563EB] to-[#7C3AED] mt-4 mb-6"></div>
          <p className="text-[#334155] text-base sm:text-lg leading-relaxed">
            A comprehensive record of formal higher education and scholastic performance across management and commerce disciplines.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center Line */}
          <div
            aria-hidden="true"
            className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#2563EB] via-[#7C3AED] to-[#C7D2FE] -translate-x-1/2"
          />

          <div className="space-y-12 sm:space-y-16">
            {EDUCATION_DATA.map((item, index) => {
              const isEven = index % 2 === 0;
              const isDegree = item.type === 'degree';

              return (
                <div
                  key={index}
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Node Indicator */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-2 border-[#312E81] shadow-sm flex items-center justify-center z-10">
                    {isDegree ? (
                      <GraduationCap className="w-4 h-4 text-[#2563EB]" />
                    ) : (
                      <BookOpen className="w-3.5 h-3.5 text-[#7C3AED]" />
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="pl-12 sm:pl-0 w-full sm:w-1/2 sm:px-8">
                    <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-[#C7D2FE] transition-all group">
                      {/* Period & Institution Type */}
                      <div className="flex items-center justify-between gap-2 text-xs font-medium text-[#6D28D9] mb-2">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-[#4338CA]" />
                          <span>{item.period}</span>
                        </div>
                        <span className="text-[11px] uppercase tracking-wider text-[#64748B]">
                          {isDegree ? 'Higher Education' : 'State Board'}
                        </span>
                      </div>

                      {/* Degree / Program Title */}
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1E1B4B] group-hover:text-[#4338CA] transition-colors leading-snug">
                        {item.degree}
                      </h3>

                      {/* Institution / College */}
                      <div className="flex items-start gap-1.5 text-xs sm:text-sm text-[#475569] mt-2">
                        <MapPin className="w-4 h-4 text-[#7C3AED] shrink-0 mt-0.5" />
                        <span>{item.institution}</span>
                      </div>

                      {/* Divider */}
                      <div className="h-[1px] bg-[#E2E8F0] my-4" />

                      {/* Score or Completion Status */}
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[#64748B] font-medium">Academic Status:</span>
                        <div className="flex items-center gap-1.5 font-semibold text-[#1E1B4B]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB]" />
                          <span>{item.statusOrScore}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
