'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

const LOCALES = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'zh-CN', name: '简体中文', flag: '🇨🇳' },
  { code: 'zh-TW', name: '繁體中文', flag: '🇹🇼' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
];

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('nav');
  const [isOpen, setIsOpen] = useState(false);

  const currentLocale = pathname.split('/')[1] || 'en';
  const currentLanguage = LOCALES.find(l => l.code === currentLocale) || LOCALES[0];

  const handleLanguageChange = (localeCode: string) => {
    const segments = pathname.split('/');
    segments[1] = localeCode;
    const newPath = segments.join('/');
    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow"
        aria-label={t('selectLanguage')}
      >
        <span className="text-xl">{currentLanguage.flag}</span>
        <span className="font-medium hidden sm:inline">{currentLanguage.name}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-[var(--shadow-card-hover)] z-20 overflow-hidden">
            {LOCALES.map((locale) => (
              <button
                key={locale.code}
                onClick={() => handleLanguageChange(locale.code)}
                className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-card-bg transition-colors ${
                  locale.code === currentLocale ? 'bg-tap2eat-orange/10 text-tap2eat-orange' : ''
                }`}
              >
                <span className="text-xl">{locale.flag}</span>
                <span className="font-medium">{locale.name}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
