import React, { useState, useEffect } from 'react';
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
      {/* Skip to Main Content Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#1E1B4B] focus:text-white focus:rounded-md shadow-lg"
      >
        Skip to main content
      </a>

      {/* Sticky Navigation */}
      <Navbar
        onOpenResume={() => setIsResumeModalOpen(true)}
        onOpenCodePdf={() => setIsCodePdfOpen(true)}
      />

      {/* Main Content Sections */}
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

      {/* Global Footer */}
      <Footer
        onOpenResume={() => setIsResumeModalOpen(true)}
        onOpenCodePdf={() => setIsCodePdfOpen(true)}
      />

      {/* Executive Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

      {/* Codebase PDF & Documentation Modal */}
      <CodePdfViewer
        isOpen={isCodePdfOpen}
        onClose={() => setIsCodePdfOpen(false)}
      />
    </div>
  );
}
