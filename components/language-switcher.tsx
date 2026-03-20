"use client";

import { useTransition, useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

import { locales, localeLabels, type Locale } from "@/lib/site";

type LanguageSwitcherProps = {
  locale: Locale;
};

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname() || `/${locale}`;
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function buildLocalizedPath(nextLocale: Locale) {
    const segments = pathname.split("/").filter(Boolean);

    if (segments.length === 0) {
      return `/${nextLocale}`;
    }

    if (locales.includes(segments[0] as Locale)) {
      segments[0] = nextLocale;
      return `/${segments.join("/")}`;
    }

    return `/${nextLocale}/${segments.join("/")}`;
  }

  function handleSelect(nextLocale: Locale) {
    setIsOpen(false);
    if (nextLocale === locale) return;
    
    startTransition(() => {
      router.push(buildLocalizedPath(nextLocale));
    });
  }

  return (
    <div className="lang-switcher" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        disabled={isPending}
        className="lang-button"
        aria-label="Language"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lang-icon">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      </button>
      
      {isOpen && (
        <div className="lang-dropdown">
          {locales.map((item) => {
            const isActive = item === locale;
            return (
              <button
                key={item}
                onClick={() => handleSelect(item)}
                className={`lang-option ${isActive ? 'active' : ''}`}
              >
                <span>{localeLabels[item]}</span>
                {isActive && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="check-icon">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
