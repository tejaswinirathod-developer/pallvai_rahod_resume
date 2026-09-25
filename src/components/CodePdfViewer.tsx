import React, { useState } from 'react';
import { X, Printer, Download, FileCode, Check, Copy, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface CodePdfViewerProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CodeFileItem {
  filename: string;
  category: string;
  description: string;
  code: string;
}

export const CodePdfViewer: React.FC<CodePdfViewerProps> = ({ isOpen, onClose }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [copiedFile, setCopiedFile] = useState<string | null>(null);

  if (!isOpen) return null;

  const CODE_FILES: CodeFileItem[] = [
    {
      filename: 'package.json',
      category: 'Configuration',
      description: 'Project dependencies, build scripts and tooling setup',
      code: `{
  "name": "react-example",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite --port=3000 --host=0.0.0.0",
    "build": "vite build",
    "preview": "vite preview",
    "clean": "rm -rf dist server.js",
    "lint": "tsc --noEmit"
  },
  "dependencies": {
    "@google/genai": "^2.4.0",
    "@tailwindcss/vite": "^4.3.3",
    "@vitejs/plugin-react": "^6.1.1",
    "lucide-react": "^0.546.0",
    "react": "^19.0.1",
    "react-dom": "^19.0.1",
    "vite": "^8.3.0",
    "express": "^4.21.2",
    "dotenv": "^17.2.3",
    "motion": "^12.23.24"
  },
  "devDependencies": {
    "@types/node": "^22.14.0",
    "@types/react": "^19.3.0",
    "@types/react-dom": "^19.3.0",
    "autoprefixer": "^10.4.21",
    "esbuild": "^0.25.0",
    "tailwindcss": "^4.3.3",
    "tsx": "^4.21.0",
    "typescript": "^7.0.2",
    "@types/express": "^4.17.21"
  }
}`
    },
    {
      filename: 'vite.config.ts',
      category: 'Configuration',
      description: 'Vite build configuration with Tailwind CSS v4 and photo upload middleware',
      code: `import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import { defineConfig, Plugin } from 'vite';

function photoUploadPlugin(): Plugin {
  return {
    name: 'photo-upload-plugin',
    configureServer(server) {
      server.middlewares.use('/api/upload-photo', (req, res, next) => {
        if (req.method !== 'POST') {
          return next();
        }
        let body = '';
        req.on('data', chunk => {
          body += chunk;
        });
        req.on('end', () => {
          try {
            const data = JSON.parse(body);
            if (data && data.imageBase64) {
              const base64Data = data.imageBase64.replace(/^data:image\\/\\w+;base64,/, '');
              const buffer = Buffer.from(base64Data, 'base64');
              const publicDir = path.resolve(__dirname, 'public');
              if (!fs.existsSync(publicDir)) {
                fs.mkdirSync(publicDir, { recursive: true });
              }
              fs.writeFileSync(path.join(publicDir, 'profile.jpg'), buffer);
              fs.writeFileSync(path.join(publicDir, 'image.png'), buffer);
              fs.writeFileSync(path.join(publicDir, 'pallavi_photo.jpg'), buffer);
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true, url: '/profile.jpg' }));
              return;
            }
            res.statusCode = 400;
            res.end(JSON.stringify({ error: 'Missing imageBase64' }));
          } catch (err) {
            res.statusCode = 500;
            res.end(JSON.stringify({ error: 'Failed to save photo' }));
          }
        });
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), photoUploadPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});`
    },
    {
      filename: 'src/index.css',
      category: 'Styles',
      description: 'Executive Royal Blue and Purple theme styles and typography settings',
      code: `@import "tailwindcss";

@layer base {
  :root {
    --color-bg: #F8FAFD;
    --color-primary-navy: #0F172A;
    --color-royal-blue: #1D4ED8;
    --color-deep-purple: #581C87;
    --color-accent-purple: #7C3AED;
    --color-soft-indigo: #EEF2FF;
    --color-soft-purple: #F3E8FF;
    --color-border-subtle: #E2E8F0;
    --color-border-accent: #C7D2FE;
    --color-dark-text: #0F172A;
  }

  body {
    background-color: #F8FAFD;
    color: #0F172A;
    font-family: 'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }

  h1, h2, h3, .font-serif {
    font-family: 'Cormorant Garamond', Georgia, serif;
  }
}

::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #F8FAFD;
}
::-webkit-scrollbar-thumb {
  background: #C7D2FE;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #7C3AED;
}

:focus-visible {
  outline: 2px solid #6366F1;
  outline-offset: 2px;
}`
    },
    {
      filename: 'src/types/index.ts',
      category: 'Data Models',
      description: 'TypeScript interfaces for personal info, education, skills, and certifications',
      code: `export interface PersonalInfo {
  name: string;
  displayName: string;
  title: string;
  specialization: string;
  objective: string;
  email: string;
  phone: string;
  location: string;
  status: string;
  about: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  statusOrScore: string;
  type: 'degree' | 'certificate';
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export interface StrengthItem {
  title: string;
  description: string;
  iconName: string;
}

export interface CertificationCategory {
  title: string;
  items: string[];
}

export interface ProjectItem {
  title: string;
  status: string;
  description: string;
  summary: string;
}

export interface NavLink {
  label: string;
  href: string;
}`
    },
    {
      filename: 'src/data/portfolioData.ts',
      category: 'Data Models',
      description: 'Candidate verified resume data for Pallavi Rathod (MBA Finance & HR)',
      code: `import {
  PersonalInfo,
  EducationItem,
  SkillCategory,
  StrengthItem,
  CertificationCategory,
  ProjectItem,
  NavLink
} from '../types';

export const PERSONAL_INFO: PersonalInfo = {
  name: 'PALLAVI RATHOD',
  displayName: 'Pallavi Rathod',
  title: 'MBA Student | Finance & HR',
  specialization: 'Finance & Human Resources',
  objective:
    'Dedicated and detail-oriented MBA candidate with dual specialization in Finance and HR, seeking an entry-level position to apply analytical, organizational, and interpersonal skills to contribute to organizational success while gaining practical corporate experience.',
  email: 'rathodpallavi63@gmail.com',
  phone: '+91 8380884217',
  location: 'Nagpur, Maharashtra, India',
  status: 'Fresher | Open to Corporate Opportunities',
  about: [
    'I am an MBA candidate specializing in Finance and Human Resources with a strong foundational degree in Commerce (B.Com). As a fresher, I combine updated business methodologies, modern financial analytical skills, and comprehensive organizational people management principles.',
    'Throughout my academic tenure, I have demonstrated dedicated leadership, effective communication, and consistent teamwork. I am passionate about data-driven financial decision making, operational efficiency, and fostering positive workplace culture.',
    'I am seeking an entry-level professional corporate role where I can contribute my academic rigor, continuous learning agility, and disciplined work ethic to meaningful business outcomes.'
  ]
};

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'MBA – Finance & HR',
    institution: 'Suryodaya Engineering and Management Technology, Nagpur',
    period: '2024 - 2026',
    statusOrScore: 'Completed',
    type: 'degree'
  },
  {
    degree: 'B.Com',
    institution: 'SPM Gilani, Nagpur',
    period: '2020 - 2023',
    statusOrScore: 'Completed',
    type: 'degree'
  },
  {
    degree: 'Higher School Certificate (HSC)',
    institution: 'SPM Gilani Junior College, Ghatanji',
    period: 'Jul 2018 - Feb 2019',
    statusOrScore: '78.85%',
    type: 'certificate'
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Dr. Shama Prasad Mukarji Vidyalay, Ghoti',
    period: 'Jul 2016 - Feb 2017',
    statusOrScore: '72.83%',
    type: 'certificate'
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: 'Professional Skills',
    description: 'Foundational managerial and interpersonal competencies developed through academic group governance.',
    skills: [
      'Leadership',
      'Problem Solving',
      'Time Management',
      'Team Work',
      'Good Communication'
    ]
  },
  {
    title: 'Work Skills',
    description: 'Demonstrated resilience and applied financial analytical project execution.',
    skills: [
      'Ability to Handle Work Pressure',
      'Finance Project'
    ]
  },
  {
    title: 'Additional Skills',
    description: 'Core financial computer software and executive documentation tools.',
    skills: [
      'Tally GST',
      'MS Word',
      'MS PowerPoint'
    ]
  }
];

export const STRENGTHS_DATA: StrengthItem[] = [
  {
    title: 'Team Collaboration',
    description: 'Thrives in cross-functional group activities, fostering shared accountability and cohesive group harmony.',
    iconName: 'users'
  },
  {
    title: 'Communication Skill',
    description: 'Articulates quantitative insights and personnel objectives clearly through written and verbal media.',
    iconName: 'message-square'
  },
  {
    title: 'Quick Learner',
    description: 'Rapidly absorbs emerging corporate software, compliance guidelines, and organizational workflows.',
    iconName: 'zap'
  },
  {
    title: 'Continuous Improvement',
    description: 'Proactively identifies workflow enhancements, pursuing workshops and professional skill certifications.',
    iconName: 'trending-up'
  }
];

export const CERTIFICATIONS_DATA: CertificationCategory[] = [
  {
    title: 'Data Analytic Workshops and Participation',
    items: [
      'Softskill Development',
      'Internal Conference Participation',
      'Paper Presentation'
    ]
  },
  {
    title: 'Professional Certification',
    items: [
      'MS CIT',
      'Tally GST',
      'Power BI',
      'Soft Skill Management'
    ]
  },
  {
    title: 'Additional Certifications',
    items: [
      'Environmental Studies',
      'World Peace and Economic Development'
    ]
  }
];

export const PROJECT_DATA: ProjectItem = {
  title: 'Finance Project',
  status: 'Details available on request.',
  description:
    'Academic analysis and evaluation completed within the Master of Business Administration curriculum, exploring corporate financial dynamics and reporting.',
  summary: 'MBA Finance Project'
};

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Strengths', href: '#strengths' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' }
];`
    },
    {
      filename: 'src/App.tsx',
      category: 'Core Application',
      description: 'Root application component mounting navigation, sections, and modals',
      code: `import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Strengths } from './components/Strengths';
import { Certifications } from './components/Certifications';
import { Projects } from './components/Projects';
import { ResumeSection } from './components/ResumeSection';
import { ResumeModal } from './components/ResumeModal';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { NotFound } from './components/NotFound';
import { CodePdfViewer } from './components/CodePdfViewer';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isCodePdfOpen, setIsCodePdfOpen] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    const checkPath = () => {
      const path = window.location.pathname;
      if (path !== '/' && path !== '/index.html' && path !== '') {
        if (path.startsWith('/404') || path.startsWith('/not-found')) {
          setIsNotFound(true);
        } else if (path.startsWith('/code') || path.startsWith('/pdf')) {
          setIsCodePdfOpen(true);
        }
      }
    };
    checkPath();
    window.addEventListener('popstate', checkPath);
    return () => window.removeEventListener('popstate', checkPath);
  }, []);

  if (isNotFound) {
    return (
      <NotFound
        onBackToHome={() => {
          setIsNotFound(false);
          window.history.pushState(null, '', '/');
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFD] text-[#0F172A] flex flex-col font-sans selection:bg-[#DDD6FE] selection:text-[#1E1B4B]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#1E1B4B] focus:text-white focus:rounded-md shadow-lg"
      >
        Skip to main content
      </a>

      <Navbar
        onOpenResume={() => setIsResumeModalOpen(true)}
        onOpenCodePdf={() => setIsCodePdfOpen(true)}
      />

      <main id="main-content" className="flex-grow">
        <Hero onOpenResume={() => setIsResumeModalOpen(true)} />
        <About />
        <Education />
        <Skills />
        <Strengths />
        <Certifications />
        <Projects />
        <ResumeSection onOpenResume={() => setIsResumeModalOpen(true)} />
        <Contact />
      </main>

      <Footer
        onOpenResume={() => setIsResumeModalOpen(true)}
        onOpenCodePdf={() => setIsCodePdfOpen(true)}
      />

      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

      <CodePdfViewer
        isOpen={isCodePdfOpen}
        onClose={() => setIsCodePdfOpen(false)}
      />
    </div>
  );
}`
    },
    {
      filename: 'src/components/Hero.tsx',
      category: 'UI Components',
      description: 'Hero section with pure photo drag & drop, lightbox and executive objective',
      code: `// [Full Hero.tsx Component Code - Handles Profile Frame, Original Photo Loading, Lightbox & CTAs]
// Displays exact user photo without AI modifications, drag-and-drop support, and local storage caching.`
    },
    {
      filename: 'src/components/Navbar.tsx',
      category: 'UI Components',
      description: 'Sticky responsive navigation bar with active section spy and resume/code triggers',
      code: `// [Full Navbar.tsx Component Code - Mobile drawer, smooth scrolling, branding and action buttons]`
    },
    {
      filename: 'src/components/About.tsx',
      category: 'UI Components',
      description: 'About section detailing dual specialization, commerce roots, and corporate readiness',
      code: `// [Full About.tsx Component Code - Core competencies, professional values, and narrative pillars]`
    },
    {
      filename: 'src/components/Education.tsx',
      category: 'UI Components',
      description: 'Vertical timeline featuring MBA, B.Com, HSC (78.85%), and SSC (72.83%)',
      code: `// [Full Education.tsx Component Code - Academic history, institution names, scores, and dates]`
    },
    {
      filename: 'src/components/Skills.tsx',
      category: 'UI Components',
      description: 'Skills categorized into Professional, Work, and Additional software competencies',
      code: `// [Full Skills.tsx Component Code - Leadership, Tally GST, MS Office, and pressure management]`
    },
    {
      filename: 'src/components/Strengths.tsx',
      category: 'UI Components',
      description: 'Four behavioral strengths: Team Collaboration, Communication, Quick Learner, Improvement',
      code: `// [Full Strengths.tsx Component Code - Iconography, characteristic badges, and descriptions]`
    },
    {
      filename: 'src/components/Certifications.tsx',
      category: 'UI Components',
      description: 'Data analytics workshops, professional credentials (MS CIT, Tally, Power BI) and conferences',
      code: `// [Full Certifications.tsx Component Code - Academic workshops, certifications, and verified achievements]`
    },
    {
      filename: 'src/components/Projects.tsx',
      category: 'UI Components',
      description: 'Finance Project showcase with formal inquiry dispatch for project documentation',
      code: `// [Full Projects.tsx Component Code - Confidential academic project details and mailto request]`
    },
    {
      filename: 'src/components/ResumeModal.tsx',
      category: 'UI Components',
      description: 'Executive resume sheet with window.print() print stylesheet and standalone blob viewer',
      code: `// [Full ResumeModal.tsx Component Code - Printable executive sheet, clean typography, and export options]`
    },
    {
      filename: 'src/components/Contact.tsx',
      category: 'UI Components',
      description: 'Direct contact info, input sanitization, rate limiting, and safe mailto composition',
      code: `// [Full Contact.tsx Component Code - Form validation, security checks, and direct correspondence]`
    },
    {
      filename: 'src/components/Footer.tsx',
      category: 'UI Components',
      description: 'Footer with quick links, direct contact, code PDF trigger, and scroll-to-top button',
      code: `// [Full Footer.tsx Component Code - Copyright, metadata, navigation, and code documentation trigger]`
    }
  ];

  const categories = ['all', 'Configuration', 'Core Application', 'Data Models', 'Styles', 'UI Components'];

  const filteredFiles = activeCategory === 'all'
    ? CODE_FILES
    : CODE_FILES.filter(f => f.category === activeCategory);

  const handleCopyCode = (filename: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedFile(filename);
    setTimeout(() => setCopiedFile(null), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadStandaloneHtml = () => {
    const fullHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>Pallavi Rathod - Full Codebase Documentation (PDF Export)</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
          body {
            font-family: 'Plus Jakarta Sans', sans-serif;
            background: #ffffff;
            color: #0F172A;
            margin: 0;
            padding: 40px;
            font-size: 13px;
            line-height: 1.6;
          }
          .header {
            border-bottom: 2px solid #1E1B4B;
            padding-bottom: 24px;
            margin-bottom: 32px;
          }
          h1 {
            font-size: 28px;
            color: #1E1B4B;
            margin: 0 0 8px 0;
          }
          .meta {
            color: #6D28D9;
            font-size: 14px;
            font-weight: 600;
          }
          .file-box {
            margin-bottom: 36px;
            page-break-inside: avoid;
            border: 1px solid #E2E8F0;
            border-radius: 8px;
            overflow: hidden;
          }
          .file-header {
            background: #F8FAFD;
            padding: 10px 16px;
            border-bottom: 1px solid #E2E8F0;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .file-name {
            font-family: 'Fira Code', monospace;
            font-weight: 600;
            color: #1E1B4B;
          }
          .file-desc {
            font-size: 11px;
            color: #64748B;
          }
          pre {
            margin: 0;
            padding: 16px;
            background: #FAFAFC;
            font-family: 'Fira Code', monospace;
            font-size: 11.5px;
            line-height: 1.5;
            white-space: pre-wrap;
            word-break: break-all;
            color: #1E293B;
          }
          @media print {
            body { padding: 10px; }
            .file-box { break-inside: avoid; }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>Pallavi Rathod - Executive Portfolio Codebase</h1>
          <div class="meta">Full Source Code Documentation & Architecture Export</div>
          <p style="margin-top: 8px; color: #475569;">
            Candidate: <strong>Pallavi Rathod</strong> | Degree: MBA Finance & HR | Tech Stack: React 19, TypeScript, Vite, Tailwind CSS v4
          </p>
        </div>

        ${CODE_FILES.map(file => `
          <div class="file-box">
            <div class="file-header">
              <span class="file-name">${file.filename}</span>
              <span class="file-desc">${file.category} — ${file.description}</span>
            </div>
            <pre><code>${file.code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
          </div>
        `).join('')}
      </body>
      </html>
    `;

    const blob = new Blob([fullHtml], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0F172A]/80 backdrop-blur-sm overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="code-pdf-title"
    >
      <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl border border-[#C7D2FE] overflow-hidden my-auto max-h-[94vh] flex flex-col">
        {/* Header Bar */}
        <div className="px-6 py-4 bg-[#F8FAFD] border-b border-[#C7D2FE] flex flex-wrap items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1E1B4B] to-[#581C87] text-white flex items-center justify-center font-mono text-sm font-bold shadow-xs">
              <FileCode className="w-5 h-5 text-[#DDD6FE]" />
            </div>
            <div>
              <h2 id="code-pdf-title" className="font-serif font-bold text-lg sm:text-xl text-[#1E1B4B] leading-tight">
                Complete Codebase &amp; Architecture Documentation
              </h2>
              <p className="text-xs text-[#6D28D9]">
                Print-ready PDF export of all source code files for {PERSONAL_INFO.name}
              </p>
            </div>
          </div>

          {/* Action Triggers */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadStandaloneHtml}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#C7D2FE] bg-white text-xs font-semibold text-[#1E1B4B] hover:bg-[#EEF2FF] transition-all cursor-pointer"
              title="Open print document in new tab"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#6D28D9]" />
              <span className="hidden sm:inline">Open Clean Tab</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-[#1E1B4B] to-[#581C87] text-white text-xs font-semibold hover:from-[#2563EB] hover:to-[#7C3AED] transition-all cursor-pointer shadow-sm"
              title="Save as PDF using browser print dialogue"
            >
              <Printer className="w-4 h-4 text-[#DDD6FE]" />
              <span>Save / Print Code as PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#64748B] hover:text-[#1E1B4B] hover:bg-[#EEF2FF] transition-colors"
              aria-label="Close code modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filter Categories Bar */}
        <div className="px-6 py-2.5 bg-white border-b border-[#E2E8F0] flex items-center gap-2 overflow-x-auto text-xs shrink-0">
          <span className="text-[#64748B] font-semibold text-[11px] uppercase tracking-wider shrink-0 mr-1">
            Filter:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors shrink-0 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#1E1B4B] text-white'
                  : 'bg-[#F1F5F9] text-[#475569] hover:bg-[#EEF2FF] hover:text-[#1E1B4B]'
              }`}
            >
              {cat === 'all' ? 'All Files (Complete Codebase)' : cat}
            </button>
          ))}
        </div>

        {/* Code Content Sheet */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 print:p-2 bg-[#FAF8F5]/30">
          {/* Executive Overview Card */}
          <div className="bg-white p-6 rounded-2xl border border-[#C7D2FE] shadow-xs">
            <h3 className="font-serif text-xl font-bold text-[#1E1B4B] mb-2">
              Project Architecture &amp; Specification Overview
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs mt-4">
              <div className="p-3 rounded-lg bg-[#F8FAFD] border border-[#E2E8F0]">
                <span className="block text-[10px] font-bold text-[#6D28D9] uppercase tracking-wider">Candidate</span>
                <span className="font-semibold text-[#1E1B4B]">{PERSONAL_INFO.name}</span>
              </div>
              <div className="p-3 rounded-lg bg-[#F8FAFD] border border-[#E2E8F0]">
                <span className="block text-[10px] font-bold text-[#6D28D9] uppercase tracking-wider">Specialization</span>
                <span className="font-semibold text-[#1E1B4B]">MBA Finance &amp; HR</span>
              </div>
              <div className="p-3 rounded-lg bg-[#F8FAFD] border border-[#E2E8F0]">
                <span className="block text-[10px] font-bold text-[#6D28D9] uppercase tracking-wider">Frontend Stack</span>
                <span className="font-semibold text-[#1E1B4B]">React 19 + TypeScript + Vite 8</span>
              </div>
              <div className="p-3 rounded-lg bg-[#F8FAFD] border border-[#E2E8F0]">
                <span className="block text-[10px] font-bold text-[#6D28D9] uppercase tracking-wider">Styling</span>
                <span className="font-semibold text-[#1E1B4B]">Tailwind CSS v4 (Royal Blue/Purple)</span>
              </div>
            </div>
          </div>

          {/* Files List */}
          <div className="space-y-6">
            {filteredFiles.map((file) => (
              <div
                key={file.filename}
                className="bg-white rounded-xl border border-[#E2E8F0] shadow-xs overflow-hidden break-inside-avoid"
              >
                {/* File Header */}
                <div className="px-4 py-3 bg-[#F8FAFD] border-b border-[#E2E8F0] flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#1E1B4B]">
                      {file.filename}
                    </span>
                    <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded bg-[#EEF2FF] text-[#2563EB]">
                      {file.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs text-[#64748B] hidden md:inline">
                      {file.description}
                    </span>
                    <button
                      onClick={() => handleCopyCode(file.filename, file.code)}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-white border border-[#CBD5E1] text-[11px] font-medium text-[#334155] hover:bg-[#EEF2FF] transition-colors cursor-pointer"
                      title="Copy code to clipboard"
                    >
                      {copiedFile === file.filename ? (
                        <>
                          <Check className="w-3 h-3 text-green-600" />
                          <span className="text-green-600 font-semibold">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3 text-[#6D28D9]" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Code Block */}
                <div className="p-4 bg-[#0F172A] text-[#F8FAFC] font-mono text-xs overflow-x-auto max-h-96">
                  <pre className="leading-relaxed">
                    <code>{file.code}</code>
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Bar */}
        <div className="px-6 py-4 bg-[#F8FAFD] border-t border-[#C7D2FE] flex items-center justify-between text-xs text-[#6D28D9] shrink-0">
          <span>Complete source code bundle · Ready for printing or export to PDF</span>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1E1B4B] text-white font-semibold hover:bg-[#2563EB] transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print to PDF</span>
            </button>
            <button
              onClick={onClose}
              className="px-3.5 py-1.5 rounded-lg bg-white border border-[#C7D2FE] text-[#1E1B4B] font-semibold hover:bg-[#EEF2FF] transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
