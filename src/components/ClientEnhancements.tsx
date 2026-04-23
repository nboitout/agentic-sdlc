'use client';

import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';
import type { LanguageCode, SiteCopy } from '@/lib/i18n';
import { languages } from '@/lib/i18n';

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

type LanguageSelectorProps = {
  currentLanguage: LanguageCode;
  onLanguageChange: (language: LanguageCode) => void;
  label: string;
  variant?: 'header' | 'sticky';
};

export function LanguageSelector({
  currentLanguage,
  onLanguageChange,
  label,
  variant = 'header',
}: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const switcherRef = useRef<HTMLDivElement | null>(null);
  const activeLanguage = languages.find((language) => language.code === currentLanguage) ?? languages[0];

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!switcherRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div ref={switcherRef} className={`language-switcher language-switcher-${variant}`} aria-label={label}>
      <button
        type="button"
        className="language-trigger"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span>{activeLanguage.label}</span>
        <span aria-hidden="true" className="language-trigger-name">{activeLanguage.name}</span>
        <span aria-hidden="true" className="language-caret">⌃</span>
      </button>

      {isOpen ? (
        <div className="language-menu" role="menu">
          {languages.map((language) => {
            const isActive = currentLanguage === language.code;
            return (
              <button
                key={language.code}
                type="button"
                className="language-menu-option"
                role="menuitemradio"
                aria-checked={isActive}
                onClick={() => {
                  onLanguageChange(language.code);
                  setIsOpen(false);
                }}
              >
                <span className="language-menu-code">{language.label}</span>
                <span className="language-menu-name">{language.name}</span>
                <span className="language-menu-check" aria-hidden="true">{isActive ? '✓' : ''}</span>
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

type ClientEnhancementsProps = {
  nav: SiteCopy['nav'];
  cta: string;
  currentLanguage: LanguageCode;
  onLanguageChange: (language: LanguageCode) => void;
};

export function ClientEnhancements({
  nav,
  cta,
  currentLanguage,
  onLanguageChange,
}: ClientEnhancementsProps) {
  useEffect(() => {
    const hero = document.querySelector('.s-hero') as HTMLElement | null;
    const stickyNav = document.getElementById('sticky-nav') as HTMLElement | null;
    if (!hero || !stickyNav) return;

    const obs = new IntersectionObserver(
      ([entry]) => stickyNav.setAttribute('data-visible', entry.isIntersecting ? 'false' : 'true'),
      { threshold: 0, rootMargin: '-56px 0px 0px 0px' }
    );
    obs.observe(hero);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal], [data-reveal-stagger]');

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.07, rootMargin: '0px 0px -40px 0px' }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [currentLanguage]);

  useEffect(() => {
    const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('[data-calendly-link="true"]'));
    const handleClick = (event: Event) => {
      const link = event.currentTarget as HTMLAnchorElement;
      if (!window.Calendly) return;
      event.preventDefault();
      window.Calendly.initPopupWidget({ url: link.href });
    };

    links.forEach((link) => link.addEventListener('click', handleClick));
    return () => links.forEach((link) => link.removeEventListener('click', handleClick));
  }, [currentLanguage]);

  return (
    <>
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />
      <nav id="sticky-nav" className="sticky-nav" aria-label="Site navigation">
        <div className="sticky-inner">
          <a href="#top" className="sticky-logo">
            <img src="/agentic-sdlc-mark.svg" alt="" className="sticky-logo-mark" aria-hidden="true" />
            Agentic SDLC
          </a>
          <div className="sticky-menu">
            <a href="#sandbox-factory">{nav.beyond}</a>
            <a href="#blueprint">{nav.blueprint}</a>
            <a href="#how-we-help">{nav.metrics}</a>
            <a
              href="https://calendly.com/nicolasboitout/30min"
              className="sticky-btn"
              data-calendly-link="true"
            >
              {cta}
            </a>
            <LanguageSelector
              currentLanguage={currentLanguage}
              onLanguageChange={onLanguageChange}
              label={nav.language}
              variant="sticky"
            />
          </div>
        </div>
      </nav>
    </>
  );
}
