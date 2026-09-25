import React from 'react';
import { Users, MessageSquare, Zap, TrendingUp } from 'lucide-react';
import { STRENGTHS_DATA } from '../data/portfolioData';

export const Strengths: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'users':
        return <Users className="w-6 h-6 text-[#2563EB]" />;
      case 'message-square':
        return <MessageSquare className="w-6 h-6 text-[#7C3AED]" />;
      case 'zap':
        return <Zap className="w-6 h-6 text-[#2563EB]" />;
      case 'trending-up':
        return <TrendingUp className="w-6 h-6 text-[#7C3AED]" />;
      default:
        return <Users className="w-6 h-6 text-[#2563EB]" />;
    }
  };

  return (
    <section id="strengths" className="py-20 lg:py-28 bg-[#F8FAFD] border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#6D28D9]">
            Interpersonal &amp; Behavioral Value
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E1B4B] mt-2">
            Key Strengths
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-[#2563EB] to-[#7C3AED] mt-4 mb-6"></div>
          <p className="text-[#334155] text-base sm:text-lg leading-relaxed">
            Essential behavioral strengths and personal attributes that drive successful collaboration, adaptability, and high workplace standards.
          </p>
        </div>

        {/* 4 Clean Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STRENGTHS_DATA.map((item, idx) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-7 border border-[#E2E8F0] shadow-xs hover:shadow-md hover:border-[#C7D2FE] transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Subtle Icon Box */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#EEF2FF] to-[#F5F3FF] border border-[#C7D2FE] flex items-center justify-center mb-5 group-hover:from-[#1E1B4B] group-hover:to-[#581C87] group-hover:border-[#1E1B4B] transition-all">
                  <span className="group-hover:text-white transition-colors">
                    {getIcon(item.iconName)}
                  </span>
                </div>

                <div className="text-xs font-semibold text-[#6D28D9] tracking-wider uppercase mb-1">
                  Strength 0{idx + 1}
                </div>

                <h3 className="font-serif text-xl font-bold text-[#1E1B4B] mb-3 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E2E8F0] flex items-center gap-1.5 text-[11px] font-medium text-[#4338CA]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
                <span>Professional Characteristic</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
