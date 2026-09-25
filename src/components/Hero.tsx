import React, { useState, useEffect, useRef } from 'react';
import { FileText, Mail, ArrowUpRight, Camera, Check, Maximize2, X, Upload, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [customPhoto, setCustomPhoto] = useState<string | null>(null);
  const [photoError, setPhotoError] = useState(false);
  const [showUploadPrompt, setShowUploadPrompt] = useState(false);
  const [isPhotoLightboxOpen, setIsPhotoLightboxOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [photoName, setPhotoName] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('pr_portfolio_profile_photo');
      if (saved) {
        setCustomPhoto(saved);
        setPhotoName('image.png');
      }
    } catch {
      // Storage fallback
    }
  }, []);

  const processFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      return;
    }
    setPhotoName(file.name || 'image.png');
    const reader = new FileReader();
    reader.onload = async (event) => {
      const result = event.target?.result as string;
      if (result) {
        setCustomPhoto(result);
        setPhotoError(false);
        setShowUploadPrompt(true);
        setTimeout(() => setShowUploadPrompt(false), 4000);

        // Save in localStorage for instant persistent client rendering
        try {
          localStorage.setItem('pr_portfolio_profile_photo', result);
        } catch {
          // quota fallback
        }

        // Send to backend endpoint so it's also saved directly to /public/profile.jpg
        try {
          await fetch('/api/upload-photo', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ imageBase64: result }),
          });
        } catch {
          // ignore network failure in preview
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handleCustomPhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  // Determine current active photo source
  const photoSrc = customPhoto || (photoError ? '/profile.svg' : '/profile.jpg');

  return (
    <section
      id="home"
      className="relative min-h-[90vh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center bg-[#F8FAFD] overflow-hidden"
    >
      {/* Background Subtle Ambiance Accents */}
      <div
        aria-hidden="true"
        className="absolute top-12 right-0 -z-10 w-96 h-96 bg-[#EDE9FE]/70 rounded-full blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-10 left-10 -z-10 w-80 h-80 bg-[#EEF2FF]/80 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Information & Objective */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#6D28D9]">
                Professional Portfolio
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1E1B4B] leading-[1.15]">
                Hello, I&apos;m <span className="bg-gradient-to-r from-[#1E1B4B] via-[#4338CA] to-[#6D28D9] bg-clip-text text-transparent block sm:inline">Pallavi Rathod</span>
              </h1>
              <div className="flex items-center gap-2 pt-1 text-base sm:text-lg font-medium text-[#4338CA]">
                <span>MBA Student</span>
                <span aria-hidden="true" className="text-[#C7D2FE] font-bold">|</span>
                <span className="text-[#6D28D9]">Finance &amp; HR</span>
              </div>
            </div>

            {/* Objective Card */}
            <div className="bg-white border-l-4 border-[#6D28D9] p-5 sm:p-6 rounded-r-xl shadow-xs border-y border-r border-[#E2E8F0] transition-shadow hover:shadow-sm">
              <span className="block text-[11px] font-bold tracking-wider uppercase text-[#6D28D9] mb-2">
                Career Objective
              </span>
              <p className="text-[#334155] text-sm sm:text-base leading-relaxed italic">
                &ldquo;{PERSONAL_INFO.objective}&rdquo;
              </p>
            </div>

            {/* Status & Fresh Graduate Note */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-[#475569] pt-1">
              <span className="flex items-center gap-1.5 font-medium text-[#1E1B4B]">
                <span className="w-2 h-2 rounded-full bg-[#2563EB]"></span>
                Fresher Ready for Corporate Opportunities
              </span>
              <span aria-hidden="true" className="text-[#CBD5E1]">·</span>
              <span>Finance &amp; HR Specialization</span>
              <span aria-hidden="true" className="text-[#CBD5E1]">·</span>
              <span>Nagpur, India</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[#1E1B4B] to-[#581C87] text-white text-sm font-semibold hover:from-[#2563EB] hover:to-[#7C3AED] transition-all cursor-pointer shadow-sm hover:shadow-md transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <FileText className="w-4 h-4 text-[#DDD6FE]" />
                <span>View Resume</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#C7D2FE] bg-white text-[#1E1B4B] text-sm font-semibold hover:bg-[#EEF2FF] hover:border-[#818CF8] transition-all cursor-pointer shadow-2xs hover:shadow-xs transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Mail className="w-4 h-4 text-[#6D28D9]" />
                <span>Contact Me</span>
              </a>
            </div>
          </div>

          {/* Right Column: Profile Photo Frame */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative group w-full max-w-sm sm:max-w-md mx-auto">
              {/* Decorative Background Frame Offset */}
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-3 translate-y-3 bg-gradient-to-br from-[#EEF2FF] to-[#EDE9FE] rounded-2xl -z-10 border border-[#C7D2FE] transition-transform duration-300 group-hover:translate-x-4 group-hover:translate-y-4 shadow-sm"
              />

              {/* Main Photo Container with Drag & Drop */}
              <div
                className={`relative bg-white rounded-2xl overflow-hidden border transition-all duration-300 ${
                  isDragging
                    ? 'border-[#7C3AED] ring-4 ring-[#DDD6FE] scale-[1.01]'
                    : 'border-[#312E81] shadow-xl shadow-indigo-950/10'
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <div
                  className="aspect-[4/5] w-full overflow-hidden bg-[#F1F5F9] flex items-center justify-center relative group/img cursor-pointer"
                  onClick={() => setIsPhotoLightboxOpen(true)}
                  title="Click to view full photo"
                >
                  <img
                    src={photoSrc}
                    alt="Pallavi Rathod - Original Photograph"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    onError={() => setPhotoError(true)}
                    loading="eager"
                  />

                  {/* Drag overlay hint */}
                  {isDragging && (
                    <div className="absolute inset-0 bg-[#1E1B4B]/80 text-white flex flex-col items-center justify-center p-4 text-center z-20">
                      <Upload className="w-10 h-10 text-[#DDD6FE] mb-2 animate-bounce" />
                      <p className="text-sm font-semibold">Drop your image.png here</p>
                      <p className="text-xs text-[#CBD5E1]">100% original photo · zero modifications</p>
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#1E1B4B]/25 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/95 text-[#1E1B4B] text-xs font-semibold shadow-md">
                      <Maximize2 className="w-3.5 h-3.5 text-[#6D28D9]" />
                      <span>View Full-Size Photo</span>
                    </span>
                  </div>
                </div>

                {/* Subtitle Bar at bottom of photo card */}
                <div className="p-4 bg-white border-t border-[#E2E8F0] flex items-center justify-between">
                  <div>
                    <h2 className="font-serif font-bold text-lg text-[#1E1B4B] leading-snug">
                      {PERSONAL_INFO.displayName}
                    </h2>
                    <p className="text-xs text-[#6D28D9] font-medium tracking-wide">
                      MBA Candidate · Finance &amp; HR
                    </p>
                  </div>

                  {/* Actions: View Full & Photo Switcher Trigger */}
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => setIsPhotoLightboxOpen(true)}
                      title="View full-length photograph"
                      className="p-2 rounded-full text-[#6D28D9] hover:text-[#1E1B4B] hover:bg-[#EEF2FF] border border-[#C7D2FE] transition-colors cursor-pointer"
                      aria-label="View full photo"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>

                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      title="Click to apply image.png directly"
                      className="p-2 rounded-full text-[#6D28D9] hover:text-[#1E1B4B] hover:bg-[#EEF2FF] border border-[#C7D2FE] transition-colors cursor-pointer"
                      aria-label="Upload original photo"
                    >
                      <Camera className="w-4 h-4" />
                    </button>

                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleCustomPhotoUpload}
                      accept="image/*"
                      className="sr-only"
                      id="hero-photo-input"
                      aria-label="Upload personal photo"
                    />
                  </div>
                </div>

                {/* Direct Upload Banner below card */}
                <div className="px-4 py-2.5 bg-[#F8FAFD] border-t border-[#E2E8F0] flex items-center justify-between gap-2 text-xs">
                  <span className="text-[#475569] truncate">
                    {photoName ? (
                      <span className="font-medium text-[#1E1B4B]">Applied: {photoName}</span>
                    ) : (
                      <span>Exact photo without facial changes</span>
                    )}
                  </span>
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="shrink-0 inline-flex items-center gap-1 font-semibold text-[#2563EB] hover:text-[#7C3AED] underline underline-offset-2 transition-colors cursor-pointer"
                  >
                    <Upload className="w-3 h-3" />
                    <span>Upload image.png</span>
                  </button>
                </div>

                {/* Upload Success Toast Indicator */}
                {showUploadPrompt && (
                  <div className="absolute top-3 left-3 right-3 bg-[#1E1B4B] text-white text-xs py-2 px-3 rounded-lg shadow-lg flex items-center justify-center gap-1.5 transition-all animate-fade-in border border-[#7C3AED]/40 z-30">
                    <Check className="w-3.5 h-3.5 text-[#A78BFA]" />
                    <span>Original photo uploaded with 100% exact facial expression!</span>
                  </div>
                )}
              </div>

              {/* Verified Profile Footnote */}
              <div className="mt-3 flex items-center justify-center gap-2 text-[11px] text-[#6D28D9]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                <span>Original Personal Photograph · Verified Identity</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Full View */}
      {isPhotoLightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F172A]/85 backdrop-blur-sm animate-fade-in"
          role="dialog"
          aria-modal="true"
          onClick={() => setIsPhotoLightboxOpen(false)}
        >
          <div
            className="relative max-w-lg w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-[#C7D2FE]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 bg-[#F8FAFD] border-b border-[#E2E8F0] flex items-center justify-between">
              <div>
                <h3 className="font-serif font-bold text-lg text-[#1E1B4B]">
                  Pallavi Rathod
                </h3>
                <p className="text-xs text-[#6D28D9]">
                  Original Photograph · Exact Face &amp; Expression
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-md bg-[#EEF2FF] text-[#2563EB] hover:bg-[#DDD6FE] transition-colors"
                >
                  <Upload className="w-3 h-3" />
                  <span>Update Photo</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsPhotoLightboxOpen(false)}
                  className="p-1.5 rounded-lg text-[#64748B] hover:text-[#1E1B4B] hover:bg-[#EEF2FF] transition-colors"
                  aria-label="Close photo view"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="p-3 bg-[#F1F5F9] max-h-[75vh] flex items-center justify-center overflow-auto">
              <img
                src={photoSrc}
                alt="Pallavi Rathod"
                className="max-h-[70vh] w-auto rounded-lg object-contain shadow-sm"
              />
            </div>
            <div className="p-3 bg-[#F8FAFD] border-t border-[#E2E8F0] text-center text-xs text-[#64748B] flex items-center justify-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#7C3AED]" />
              <span>Full original photo · Zero AI modifications · Preserved natural appearance</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
