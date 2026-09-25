import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, FileCode } from 'lucide-react';
import { NAV_LINKS, PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenCodePdf?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenCodePdf }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (href === '#resume') {
      const el = document.getElementById('resume');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        onOpenResume();
      }
      return;
    }

    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F8FAFD]/95 backdrop-blur-md shadow-sm border-b border-[#C7D2FE]/60 py-3.5'
          : 'bg-[#F8FAFD]/80 backdrop-blur-sm border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="group flex items-center gap-3 focus-visible:ring-2 focus-visible:ring-[#6366F1] rounded-sm transition-opacity"
            aria-label="Pallavi Rathod - Home"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#1E1B4B] to-[#581C87] text-white flex items-center justify-center font-serif text-lg font-bold tracking-wider shadow-sm group-hover:from-[#2563EB] group-hover:to-[#7C3AED] transition-all">
              PR
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg sm:text-xl tracking-wider text-[#1E1B4B] leading-tight">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-[#6D28D9]">
                MBA · Finance &amp; HR
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-3 py-1.5 text-xs xl:text-sm font-medium tracking-wide transition-all relative ${
                    isActive
                      ? 'text-[#1E1B4B] font-semibold'
                      : 'text-[#475569] hover:text-[#1E1B4B]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-[#2563EB] to-[#7C3AED] rounded-full"
                    />
                  )}
                </a>
              );
            })}

            {/* Quick Resume Button */}
            <button
              onClick={onOpenResume}
              className="ml-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#312E81] text-xs font-semibold text-[#1E1B4B] hover:bg-[#1E1B4B] hover:text-white transition-all cursor-pointer shadow-2xs"
              aria-label="Open Resume Preview"
            >
              <FileText className="w-3.5 h-3.5 text-[#6D28D9]" />
              <span>Resume</span>
            </button>

            {/* Code PDF Export Button */}
            {onOpenCodePdf && (
              <button
                onClick={onOpenCodePdf}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#1E1B4B] to-[#581C87] text-white text-xs font-semibold hover:from-[#2563EB] hover:to-[#7C3AED] transition-all cursor-pointer shadow-2xs"
                title="Download Overall PDF of Code"
                aria-label="Open Code PDF"
              >
                <FileCode className="w-3.5 h-3.5 text-[#DDD6FE]" />
                <span>Code PDF</span>
              </button>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            {onOpenCodePdf && (
              <button
                onClick={onOpenCodePdf}
                className="p-1.5 text-[#1E1B4B] hover:bg-[#EEF2FF] rounded transition-colors"
                title="Code PDF"
                aria-label="View Code PDF"
              >
                <FileCode className="w-5 h-5 text-[#2563EB]" />
              </button>
            )}
            <button
              onClick={onOpenResume}
              className="p-1.5 text-[#1E1B4B] hover:bg-[#EEF2FF] rounded transition-colors"
              title="Resume Preview"
              aria-label="View Resume"
            >
              <FileText className="w-5 h-5 text-[#6D28D9]" />
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded text-[#1E1B4B] hover:bg-[#EEF2FF] focus-visible:ring-2 focus-visible:ring-[#6366F1] transition-colors"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden bg-[#F8FAFD] border-b border-[#C7D2FE] px-4 pt-3 pb-6 shadow-xl"
        >
          <div className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#EEF2FF] text-[#1E1B4B] font-semibold border-l-2 border-[#6D28D9]'
                      : 'text-[#334155] hover:bg-[#EEF2FF]/60'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <div className="pt-2 border-t border-[#C7D2FE]/50 mt-2">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#1E1B4B] to-[#581C87] text-white text-sm font-semibold hover:from-[#2563EB] hover:to-[#7C3AED] transition-all"
              >
                <FileText className="w-4 h-4" />
                <span>View Full Resume</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
