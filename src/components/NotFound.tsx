import React from 'react';
import { Home } from 'lucide-react';

interface NotFoundProps {
  onBackToHome: () => void;
}

export const NotFound: React.FC<NotFoundProps> = ({ onBackToHome }) => {
  return (
    <div className="min-h-screen bg-[#F8FAFD] flex items-center justify-center p-6 text-center">
      <div className="max-w-md w-full bg-white p-8 sm:p-10 rounded-3xl border border-[#C7D2FE] shadow-md space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#EEF2FF] to-[#F5F3FF] border border-[#C7D2FE] text-[#1E1B4B] flex items-center justify-center font-serif text-3xl font-bold mx-auto">
          404
        </div>
        <div className="space-y-2">
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E1B4B]">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
            The requested page or section could not be located. Please return to the official portfolio homepage.
          </p>
        </div>
        <button
          type="button"
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#1E1B4B] to-[#581C87] text-white text-sm font-semibold hover:from-[#2563EB] hover:to-[#7C3AED] transition-all cursor-pointer"
        >
          <Home className="w-4 h-4" />
          <span>Return to Homepage</span>
        </button>
      </div>
    </div>
  );
};
