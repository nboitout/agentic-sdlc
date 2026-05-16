'use client';

import { useEffect, useState } from 'react';
import { MobileCtaBar } from '@/components/MobileCtaBar';
import { ClientEnhancements, LanguageSelector } from '@/components/ClientEnhancements';
import { defaultLanguage, en, languages, loadTranslation, type LanguageCode, type SiteCopy } from '@/lib/i18n';

const storageKey = 'agentic-sdlc-language';

function getInitialLanguage(): LanguageCode {
  if (typeof window === 'undefined') return defaultLanguage;
  const stored = window.localStorage.getItem(storageKey);
  return languages.some((l) => l.code === stored) ? (stored as LanguageCode) : defaultLanguage;
}

export default function BeyondTMPage() {
  const [language, setLanguage] = useState<LanguageCode>(getInitialLanguage);
  const [t, setT] = useState<SiteCopy>(en);

  useEffect(() => {
    let active = true;
    loadTranslation(language).then((copy) => { if (active) setT(copy); });
    return () => { active = false; };
  }, [language]);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem(storageKey, language);
  }, [language]);

  const bp = t.beyondPage;

  return (
    <main id="top">

      {/* ── Header ─────────────────────────────────────────────────── */}
      <section className="s-hero" style={{ minHeight: 'auto', paddingBottom: 0 }}>
        <header className="site-header">
          <a href="/" className="logo" aria-label="Agentic SDLC home">
            <img src="/agentic-sdlc-mark.svg" alt="" className="logo-mark" aria-hidden="true" />
            <span className="logo-name">Agentic SDLC</span>
          </a>
          <nav className="header-nav" aria-label="Primary navigation">
            <a href="/#problem">{t.nav2.problem}</a>
            <a href="/#sprint">{t.nav2.offer}</a>
            <a href="/#maturity">{t.nav2.maturity}</a>
            <a href="/#metrics">{t.nav2.metrics}</a>
            <a href="/#programs">{t.nav2.programs}</a>
            <a href="/beyond-tm" className="header-nav-active">{t.nav2.itServices}</a>
            <a
              href="https://calendly.com/nicolasboitout/new-meeting"
              className="btn btn-blog header-blog-btn"
              data-calendly-link="true"
            >
              {bp.navBookCall}
            </a>
          </nav>
          <LanguageSelector
            currentLanguage={language}
            onLanguageChange={setLanguage}
            label={t.nav.language}
          />
        </header>
      </section>

      {/* ── Hero ───────────────────────────────────────────────────── */}
      <section className="section s-dark" aria-labelledby="btm-hero-heading">
        <div className="section-inner">
          <div data-reveal="">
            <span className="eyebrow eyebrow-dark">{bp.heroEyebrow}</span>
            <h1 id="btm-hero-heading" className="btm-page-hero-heading">
              {bp.heroHeading}
            </h1>
            <p className="btm-page-lead">{bp.heroLead}</p>
          </div>
        </div>
      </section>

      {/* ── The shift ──────────────────────────────────────────────── */}
      <section className="section s-white" aria-labelledby="shift-heading">
        <div className="section-inner">
          <div className="section-intro" data-reveal="">
            <div className="intro-heading-col">
              <span className="eyebrow">{bp.shiftEyebrow}</span>
              <h2 id="shift-heading" className="section-heading">{bp.shiftHeading}</h2>
            </div>
            <div className="intro-text-col">
              {bp.paragraphs.map((p: string, i: number) => (
                <p key={i} style={{ marginTop: '12px' }}>{p}</p>
              ))}
            </div>
          </div>

          {/* Before / Now comparison */}
          <div className="btm-shift" data-reveal="">
            <div className="btm-shift-card btm-shift-card-before">
              <span className="btm-shift-label">{bp.before}</span>
              <strong className="btm-shift-value">{bp.beforeValue}</strong>
              <div className="btm-bars" aria-hidden="true">
                <span className="btm-bar btm-bar-mono" />
              </div>
              <ul className="btm-shift-traits">
                {bp.beforeCaption.split(' · ').map((trait: string, i: number) => (
                  <li key={i}>{trait}</li>
                ))}
              </ul>
            </div>
            <span className="btm-shift-arrow" aria-hidden="true">→</span>
            <div className="btm-shift-card btm-shift-card-accent">
              <span className="btm-shift-label">{bp.now}</span>
              <strong className="btm-shift-value">{bp.nowValue}</strong>
              <div className="btm-bars" aria-hidden="true">
                <span className="btm-bar btm-bar-s1" />
                <span className="btm-bar btm-bar-s2" />
                <span className="btm-bar btm-bar-s3" />
              </div>
              <ul className="btm-shift-traits">
                {bp.nowCaption.split(' · ').map((trait: string, i: number) => (
                  <li key={i}>{trait}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Concrete example comparison */}
          <div className="btm-example" data-reveal="">
            <div className="btm-example-cell">
              <span className="btm-example-label">{bp.exampleLeftLabel}</span>
              <strong>{bp.exampleLeftValue}</strong>
            </div>
            <div className="btm-example-arrow" aria-hidden="true">→</div>
            <div className="btm-example-cell btm-example-cell-now">
              <span className="btm-example-label">{bp.exampleRightLabel}</span>
              <strong>{bp.exampleRightValue}</strong>
            </div>
          </div>
        </div>
      </section>

      {/* ── Legacy Equation ────────────────────────────────────────── */}
      <section className="section s-white btm-shell" aria-labelledby="equation-heading">
        <div className="section-inner btm-inner">
          <div className="legacy-equation" data-reveal="" aria-labelledby="equation-heading">
            <header className="legacy-equation-head">
              <span className="eyebrow">{bp.equationEyebrow}</span>
              <h2 id="equation-heading" className="legacy-equation-heading">{bp.equationHeading}</h2>
            </header>

            <div
              className="legacy-equation-row"
              role="img"
              aria-label={`${bp.termOne} times ${bp.termTwo} equals ${bp.equationResult}`}
            >
              <div className="legacy-term legacy-term-input">
                <span className="legacy-bracket legacy-bracket-left" aria-hidden="true" />
                <div className="legacy-term-body">
                  <span className="legacy-term-label">{bp.termOneLabel}</span>
                  <span className="legacy-term-word">{bp.termOne}</span>
                </div>
                <span className="legacy-bracket legacy-bracket-right" aria-hidden="true" />
              </div>

              <span className="legacy-op" aria-hidden="true">×</span>

              <div className="legacy-term legacy-term-input">
                <span className="legacy-bracket legacy-bracket-left" aria-hidden="true" />
                <div className="legacy-term-body">
                  <span className="legacy-term-label">{bp.termTwoLabel}</span>
                  <span className="legacy-term-word">{bp.termTwo}</span>
                </div>
                <span className="legacy-bracket legacy-bracket-right" aria-hidden="true" />
              </div>

              <span className="legacy-op" aria-hidden="true">=</span>

              <div className="legacy-term legacy-term-result">
                <div className="legacy-term-body">
                  <span className="legacy-term-label">Result</span>
                  <span className="legacy-term-word">{bp.equationResult}</span>
                </div>
              </div>
            </div>

            <div className="legacy-callouts" data-reveal-stagger="">
              {bp.annotations.map((annotation: string, idx: number) => (
                <div key={idx} className="legacy-callout" data-callout={idx}>
                  <span className="legacy-callout-connector" aria-hidden="true" />
                  <p>{annotation}</p>
                </div>
              ))}

              <div className="legacy-chart-card">
                <svg
                  className="legacy-chart-svg"
                  viewBox="0 0 220 140"
                  role="img"
                  aria-label={bp.chartCaption}
                >
                  <defs>
                    <pattern id="legacyGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeOpacity="0.08" strokeWidth="1" />
                    </pattern>
                    <marker id="legacyArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
                    </marker>
                  </defs>
                  <rect x="24" y="10" width="186" height="106" fill="url(#legacyGrid)" />
                  <line x1="24" y1="116" x2="214" y2="116" stroke="currentColor" strokeOpacity="0.45" strokeWidth="1.25" markerEnd="url(#legacyArrow)" />
                  <line x1="24" y1="116" x2="24" y2="6" stroke="currentColor" strokeOpacity="0.45" strokeWidth="1.25" markerEnd="url(#legacyArrow)" />
                  <line x1="32" y1="106" x2="200" y2="60" stroke="var(--legacy-accent)" strokeWidth="3.5" strokeLinecap="round" />
                  <text x="206" y="132" textAnchor="end" fontSize="9" fill="currentColor" opacity="0.55">{t.beyond.equation.chartXLabel}</text>
                  <text x="14" y="14" fontSize="9" fill="currentColor" opacity="0.55">{t.beyond.equation.chartYLabel}</text>
                </svg>
                <span className="legacy-chart-caption">{bp.chartCaption}</span>
              </div>

              <p className="legacy-chart-note">{bp.chartNote}</p>
            </div>
          </div>

          {/* Post-equation */}
          <div className="btm-prose" data-reveal="" style={{ marginTop: '40px' }}>
            <p>{bp.postParagraph1}</p>
            <p className="btm-emphasis">{bp.postParagraph2}</p>
            <p className="btm-prose-lede">{bp.constraintIntro}</p>
          </div>

          <p className="btm-strategic-callout" data-reveal="">{bp.strategicCallout}</p>
          <p className="btm-close" data-reveal="">{bp.closing}</p>
        </div>
      </section>

      {/* ── What changes for clients ───────────────────────────────── */}
      <section className="section s-canvas" aria-labelledby="clients-heading">
        <div className="section-inner">
          <div className="section-intro" data-reveal="">
            <div className="intro-heading-col">
              <span className="eyebrow">{bp.clientsEyebrow}</span>
              <h2 id="clients-heading" className="section-heading">{bp.clientsHeading}</h2>
            </div>
            <div className="intro-text-col">
              <p>{bp.clientsIntro}</p>
              <ul className="problem-questions" style={{ marginTop: '16px' }}>
                {bp.bullets.map((b: string, i: number) => (
                  <li key={i} style={{ color: 'var(--body)' }}>{b}</li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className="card-grid"
            data-reveal-stagger=""
            style={{ gridTemplateColumns: 'repeat(2, minmax(0,1fr))' }}
          >
            {bp.cards.map((card) => (
              <article key={card.num} className="card deliverable-card">
                <span className="deliverable-num" aria-hidden="true">{card.num}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────── */}
      <section className="section s-dark" id="contact" aria-labelledby="btm-cta-heading">
        <div className="section-inner">
          <div className="cta-inner" data-reveal="">
            <span className="eyebrow eyebrow-brass">{bp.ctaEyebrow}</span>
            <h2 id="btm-cta-heading" className="cta-heading">
              {bp.ctaHeading.split('\n').map((line: string, i: number, arr: string[]) => (
                <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
              ))}
            </h2>
            <p className="cta-sub">{bp.ctaBody}</p>
            <div className="cta-actions">
              <a
                href="https://calendly.com/nicolasboitout/new-meeting"
                className="btn btn-dark"
                data-calendly-link="true"
              >
                {bp.ctaPrimary}
              </a>
              <a href="/" className="btn btn-outline-dark">{bp.ctaSecondary}</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <a href="/" className="footer-name">Agentic SDLC</a>
            <p className="footer-tagline">{bp.footerTagline}</p>
          </div>
          <nav className="footer-links" aria-label="Footer">
            <a href="/#problem">{t.nav2.problem}</a>
            <a href="/#sprint">{t.nav2.offer}</a>
            <a href="/#maturity">{t.nav2.maturity}</a>
            <a href="/#metrics">{t.nav2.metrics}</a>
            <a href="/#programs">{t.nav2.programs}</a>
            <a href="mailto:nicolas@agentic-sdlc.com">nicolas@agentic-sdlc.com</a>
          </nav>
          <p className="footer-copy">&copy; {new Date().getFullYear()} Agentic SDLC</p>
        </div>
      </footer>

      <MobileCtaBar
        primaryLabel={bp.ctaPrimary}
        primaryHref="https://calendly.com/nicolasboitout/new-meeting"
        secondaryLabel={bp.mobileSecondary}
        secondaryHref="/"
      />

      <ClientEnhancements
        currentLanguage={language}
        onLanguageChange={setLanguage}
      />
    </main>
  );
}
