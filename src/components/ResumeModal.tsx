import React from 'react';
import { X, Printer, ExternalLink, Mail, Phone, MapPin, GraduationCap, Award, Briefcase } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_DATA, SKILLS_DATA, CERTIFICATIONS_DATA, STRENGTHS_DATA, PROJECT_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleOpenInNewTab = () => {
    // Generate clean standalone HTML document safely via Blob URL without exposing internal paths
    const resumeHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>Pallavi Rathod - Resume (MBA Finance & HR)</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
          body {
            font-family: 'Plus Jakarta Sans', sans-serif;
            color: #0F172A;
            background: #F8FAFD;
            margin: 0;
            padding: 40px;
            font-size: 13px;
            line-height: 1.5;
          }
          .container {
            max-width: 800px;
            margin: 0 auto;
            background: #ffffff;
            padding: 48px;
            border: 1px solid #C7D2FE;
            border-radius: 12px;
            box-shadow: 0 4px 16px rgba(30,27,75,0.06);
          }
          header {
            border-bottom: 2px solid #1E1B4B;
            padding-bottom: 20px;
            margin-bottom: 24px;
          }
          h1 {
            font-family: 'Cormorant Garamond', serif;
            font-size: 32px;
            color: #1E1B4B;
            margin: 0 0 6px 0;
            letter-spacing: 1px;
          }
          .title {
            font-size: 14px;
            font-weight: 600;
            color: #6D28D9;
            margin-bottom: 12px;
            text-transform: uppercase;
            letter-spacing: 1px;
          }
          .contact-bar {
            display: flex;
            flex-wrap: wrap;
            gap: 16px;
            font-size: 12px;
            color: #334155;
          }
          .section-title {
            font-family: 'Cormorant Garamond', serif;
            font-size: 20px;
            color: #1E1B4B;
            border-bottom: 1px solid #E2E8F0;
            padding-bottom: 4px;
            margin: 20px 0 12px 0;
          }
          .objective {
            font-style: italic;
            color: #334155;
            margin-bottom: 20px;
          }
          .edu-item {
            margin-bottom: 12px;
          }
          .edu-header {
            display: flex;
            justify-content: space-between;
            font-weight: 600;
            color: #1E1B4B;
          }
          .edu-sub {
            color: #6D28D9;
            font-size: 12px;
          }
          .skill-group {
            margin-bottom: 10px;
          }
          .skill-title {
            font-weight: 600;
            color: #1E1B4B;
          }
          ul {
            margin: 4px 0 12px 18px;
            padding: 0;
          }
          li {
            margin-bottom: 4px;
          }
          @media print {
            body { padding: 0; background: #fff; }
            .container { box-shadow: none; border: none; padding: 0; max-width: 100%; }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <header>
            <h1>${PERSONAL_INFO.name}</h1>
            <div class="title">${PERSONAL_INFO.title}</div>
            <div class="contact-bar">
              <span>Email: ${PERSONAL_INFO.email}</span>
              <span>·</span>
              <span>Phone: ${PERSONAL_INFO.phone}</span>
              <span>·</span>
              <span>Location: ${PERSONAL_INFO.location}</span>
            </div>
          </header>

          <div class="section-title">CAREER OBJECTIVE</div>
          <div class="objective">&ldquo;${PERSONAL_INFO.objective}&rdquo;</div>

          <div class="section-title">EDUCATION</div>
          ${EDUCATION_DATA.map(
            (e) => `
            <div class="edu-item">
              <div class="edu-header">
                <span>${e.degree}</span>
                <span>${e.period}</span>
              </div>
              <div class="edu-sub">${e.institution} | ${e.statusOrScore}</div>
            </div>
          `
          ).join('')}

          <div class="section-title">SKILLS</div>
          ${SKILLS_DATA.map(
            (s) => `
            <div class="skill-group">
              <span class="skill-title">${s.title}:</span> ${s.skills.join(', ')}
            </div>
          `
          ).join('')}

          <div class="section-title">KEY STRENGTHS</div>
          <div>${STRENGTHS_DATA.map((st) => st.title).join(' · ')}</div>

          <div class="section-title">CERTIFICATIONS & ACHIEVEMENTS</div>
          ${CERTIFICATIONS_DATA.map(
            (c) => `
            <div class="skill-group">
              <span class="skill-title">${c.title}:</span>
              <ul>
                ${c.items.map((it) => `<li>${it}</li>`).join('')}
              </ul>
            </div>
          `
          ).join('')}

          <div class="section-title">PROJECTS</div>
          <div>
            <strong>${PROJECT_DATA.title}</strong> — ${PROJECT_DATA.status}
          </div>
        </div>
      </body>
      </html>
    `;

    const blob = new Blob([resumeHtml], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0F172A]/70 backdrop-blur-sm overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-[#C7D2FE] overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Modal Header Bar */}
        <div className="px-6 py-4 bg-[#F8FAFD] border-b border-[#C7D2FE] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="font-serif font-bold text-lg text-[#1E1B4B]">
              Resume Preview
            </span>
            <span className="text-xs text-[#6D28D9] hidden sm:inline">
              · Pallavi Rathod (MBA Finance &amp; HR)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleOpenInNewTab}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#C7D2FE] text-xs font-semibold text-[#1E1B4B] hover:bg-white transition-colors"
              title="Open safe copy in new tab"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#6D28D9]" />
              <span className="hidden sm:inline">New Tab</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#1E1B4B] to-[#581C87] text-white text-xs font-semibold hover:from-[#2563EB] hover:to-[#7C3AED] transition-all"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-[#DDD6FE]" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#64748B] hover:text-[#1E1B4B] hover:bg-[#EEF2FF] transition-colors ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet Content */}
        <div className="p-6 sm:p-10 overflow-y-auto print:p-0 print:overflow-visible">
          <div className="max-w-3xl mx-auto space-y-8 text-[#0F172A]">
            {/* Header */}
            <div className="border-b-2 border-[#1E1B4B] pb-6">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <h1 id="resume-modal-title" className="font-serif text-3xl sm:text-4xl font-bold text-[#1E1B4B] tracking-wide">
                    {PERSONAL_INFO.name}
                  </h1>
                  <p className="text-sm font-semibold uppercase tracking-wider text-[#6D28D9] mt-1">
                    {PERSONAL_INFO.title}
                  </p>
                </div>

                <div className="text-xs sm:text-right space-y-1 text-[#475569]">
                  <div className="flex items-center sm:justify-end gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#2563EB]" />
                    <span>{PERSONAL_INFO.email}</span>
                  </div>
                  <div className="flex items-center sm:justify-end gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#7C3AED]" />
                    <span>{PERSONAL_INFO.phone}</span>
                  </div>
                  <div className="flex items-center sm:justify-end gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#2563EB]" />
                    <span>{PERSONAL_INFO.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Career Objective */}
            <div>
              <h2 className="font-serif text-xl font-bold text-[#1E1B4B] border-b border-[#E2E8F0] pb-1 mb-2">
                Career Objective
              </h2>
              <p className="text-xs sm:text-sm text-[#334155] italic leading-relaxed">
                &ldquo;{PERSONAL_INFO.objective}&rdquo;
              </p>
            </div>

            {/* Education */}
            <div>
              <h2 className="font-serif text-xl font-bold text-[#1E1B4B] border-b border-[#E2E8F0] pb-1 mb-3 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#2563EB]" />
                <span>Education</span>
              </h2>
              <div className="space-y-3">
                {EDUCATION_DATA.map((item, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 text-xs sm:text-sm">
                    <div>
                      <div className="font-semibold text-[#1E1B4B]">{item.degree}</div>
                      <div className="text-[#6D28D9] text-xs">{item.institution}</div>
                    </div>
                    <div className="text-xs sm:text-right shrink-0">
                      <span className="font-medium text-[#0F172A]">{item.period}</span>
                      <div className="text-[#2563EB] font-medium">{item.statusOrScore}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div>
              <h2 className="font-serif text-xl font-bold text-[#1E1B4B] border-b border-[#E2E8F0] pb-1 mb-3 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-[#7C3AED]" />
                <span>Skills Profile</span>
              </h2>
              <div className="space-y-2 text-xs sm:text-sm">
                {SKILLS_DATA.map((cat, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                    <span className="font-semibold text-[#1E1B4B] sm:w-44 shrink-0">
                      {cat.title}:
                    </span>
                    <span className="text-[#334155]">
                      {cat.skills.join(' · ')}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Strengths */}
            <div>
              <h2 className="font-serif text-xl font-bold text-[#1E1B4B] border-b border-[#E2E8F0] pb-1 mb-2">
                Key Strengths
              </h2>
              <p className="text-xs sm:text-sm text-[#334155] font-medium">
                {STRENGTHS_DATA.map((st) => st.title).join('  ·  ')}
              </p>
            </div>

            {/* Certifications & Workshops */}
            <div>
              <h2 className="font-serif text-xl font-bold text-[#1E1B4B] border-b border-[#E2E8F0] pb-1 mb-3 flex items-center gap-2">
                <Award className="w-4 h-4 text-[#2563EB]" />
                <span>Certifications &amp; Achievements</span>
              </h2>
              <div className="space-y-3 text-xs sm:text-sm">
                {CERTIFICATIONS_DATA.map((cat, idx) => (
                  <div key={idx} className="space-y-1">
                    <span className="font-semibold text-[#1E1B4B] block">
                      {cat.title}:
                    </span>
                    <p className="text-[#334155] pl-3 border-l-2 border-[#C7D2FE]">
                      {cat.items.join('  |  ')}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Project */}
            <div>
              <h2 className="font-serif text-xl font-bold text-[#1E1B4B] border-b border-[#E2E8F0] pb-1 mb-2">
                Academic Project
              </h2>
              <div className="text-xs sm:text-sm">
                <span className="font-semibold text-[#1E1B4B]">{PROJECT_DATA.title}</span>
                <span className="text-[#6D28D9] ml-2 italic">({PROJECT_DATA.status})</span>
                <p className="text-[#475569] text-xs mt-1">
                  {PROJECT_DATA.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="px-6 py-4 bg-[#F8FAFD] border-t border-[#C7D2FE] flex items-center justify-between text-xs text-[#6D28D9] shrink-0">
          <span>Official candidate resume document</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-white border border-[#C7D2FE] text-[#1E1B4B] font-semibold hover:bg-[#EEF2FF] transition-colors"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
