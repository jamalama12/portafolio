// src/components/LanguageSelector.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'en', label: '🇬🇧 EN' },
    { code: 'es', label: '🇪🇸 ES' },
    { code: 'fr', label: '🇫🇷 FR' },
  ];

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('i18nextLng', lang);
  };

  return (
    <div className="relative inline-block">
      <select
        value={i18n.language}
        onChange={(e) => changeLanguage(e.target.value)}
        className="font-body text-gray-700 hover:text-[#3D348B] px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 bg-transparent border border-[#E8F5E9] hover:border-[#3D348B] focus:outline-none cursor-pointer"
        style={{ fontFamily: "'Quicksand', sans-serif" }}
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;