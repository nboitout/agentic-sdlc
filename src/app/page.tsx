'use client';

import { useEffect, useMemo, useState, type CSSProperties } from 'react';
import { ClientEnhancements } from '@/components/ClientEnhancements';
import { HeroDashboard } from '@/components/HeroDashboard';
import { MaturityIndex } from '@/components/MaturityIndex';
import { copy, defaultLanguage, languages, type LanguageCode } from '@/lib/i18n';

const storageKey = 'agentic-sdlc-language';

function getInitialLanguage(): LanguageCode {
  if (typeof window === 'undefined') return defaultLanguage;
  const stored = window.localStorage.getItem(storageKey);
  return languages.some((language) => language.code === stored) ? stored as LanguageCode : defaultLanguage;
}

export default function HomePage() {
  const [language, setLanguage] = useState<LanguageCode>(getInitialLanguage);
  const t = useMemo(() => copy[language], [language]);

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = t.meta.title;
    window.localStorage.setItem(storageKey, language);
  }, [language, t.meta.title]);

  return (
    <main id="top">
      <section className="s-hero">
        <header className="site-header">
          <a href="#top" className="logo" aria-label="Agentic SDLC home">
            <img src="/agentic-sdlc-mark.svg" alt="" className="logo-mark" aria-hidden="true" />
            <span className="logo-name">Agentic SDLC</span>
          </a>
          <nav className="header-nav" aria-label={t.nav.primaryLabel}>
            <a href="#sandbox-factory">{t.nav.beyond}</a>
            <a href="#blueprint">{t.nav.blueprint}</a>
            <a href="#how-we-help">{t.nav.metrics}</a>
            <a href="#contact">{t.nav.contact}</a>
            <a
              href="https://nboitout.github.io/Blog-Agentic-SDLC/en/"
              className="btn btn-blog header-blog-btn"
              target="_blank"
              rel="noreferrer"
            >
              {t.nav.blog}
            </a>
          </nav>
        </header>

        <div className="hero-body">
          <div className="hero-left" style={{ '--hero-eyebrow': `"${t.hero.eyebrow}"` } as CSSProperties}>
            <h1 className="hero-h1">
              <span className="hero-h1-accent">{t.hero.h1Prefix}</span>
              <br />
              {t.hero.h1Rest}
            </h1>
            <p className="hero-support">{t.hero.subtitle}</p>
            <div className="hero-actions">
              <a
                href="https://calendly.com/nicolasboitout/new-meeting"
                className="btn btn-primary"
                data-calendly-link="true"
              >
                {t.hero.primaryCta}
              </a>
              <a
                href="https://nboitout.github.io/Blog-Agentic-SDLC/en/executive-self-assessment/"
                className="btn btn-ghost"
                target="_blank"
                rel="noreferrer"
              >
                {t.hero.secondaryCta}
              </a>
            </div>
          </div>

          <div className="hero-right">
            <HeroDashboard hero={t.hero} />
          </div>
        </div>

      </section>

      <MaturityIndex />

      <section className="section s-white btm-shell" id="sandbox-factory" aria-labelledby="comparison-heading">
        <div className="section-inner btm-inner">
          <div className="btm-head" data-reveal="">
            <span className="eyebrow">{t.beyond.eyebrow}</span>
            <h2 id="comparison-heading" className="btm-heading">{t.beyond.heading}</h2>
            <p className="btm-subtitle">{t.beyond.lead}</p>
          </div>

          <div className="btm-prose" data-reveal="">
            {t.beyond.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <ul className="btm-triplet" data-reveal-stagger="">
            {t.beyond.triplet.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>

          <p className="btm-bridge" data-reveal="">{t.beyond.bridge}</p>

          <div className="legacy-equation" data-reveal="" aria-labelledby="legacy-equation-heading">
            <header className="legacy-equation-head">
              <span className="eyebrow">{t.beyond.equation.eyebrow}</span>
              <h3 id="legacy-equation-heading" className="legacy-equation-heading">{t.beyond.equation.heading}</h3>
            </header>

            <div className="legacy-equation-row" role="img" aria-label={`${t.beyond.equation.termOne} times ${t.beyond.equation.termTwo} equals ${t.beyond.equation.result}`}>
              <div className="legacy-term legacy-term-input" data-anchor="term-1">
                <span className="legacy-bracket legacy-bracket-left" aria-hidden="true" />
                <div className="legacy-term-body">
                  <span className="legacy-term-label">{t.beyond.equation.termOneLabel}</span>
                  <span className="legacy-term-word">{t.beyond.equation.termOne}</span>
                </div>
                <span className="legacy-bracket legacy-bracket-right" aria-hidden="true" />
              </div>

              <span className="legacy-op" aria-hidden="true" data-anchor="op">×</span>

              <div className="legacy-term legacy-term-input" data-anchor="term-2">
                <span className="legacy-bracket legacy-bracket-left" aria-hidden="true" />
                <div className="legacy-term-body">
                  <span className="legacy-term-label">{t.beyond.equation.termTwoLabel}</span>
                  <span className="legacy-term-word">{t.beyond.equation.termTwo}</span>
                </div>
                <span className="legacy-bracket legacy-bracket-right" aria-hidden="true" />
              </div>

              <span className="legacy-op" aria-hidden="true">=</span>

              <div className="legacy-term legacy-term-result">
                <div className="legacy-term-body">
                  <span className="legacy-term-label">Result</span>
                  <span className="legacy-term-word">{t.beyond.equation.result}</span>
                </div>
              </div>
            </div>

            <div className="legacy-callouts" data-reveal-stagger="">
              {t.beyond.equation.annotations.map((annotation, idx) => (
                <div key={annotation} className="legacy-callout" data-callout={idx}>
                  <span className="legacy-callout-connector" aria-hidden="true" />
                  <p>{annotation}</p>
                </div>
              ))}

              <div className="legacy-chart-card" data-reveal="">
                <svg className="legacy-chart-svg" viewBox="0 0 220 140" role="img" aria-label={t.beyond.equation.chartLabel}>
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
                <span className="legacy-chart-caption">{t.beyond.equation.chartLabel}</span>
              </div>

              <p className="legacy-chart-note">{t.beyond.equation.note}</p>
            </div>
          </div>

          <div className="btm-prose" data-reveal="">
            <p>{t.beyond.postEquationLead}</p>
            <p className="btm-emphasis">{t.beyond.disclaimer}</p>
            <p>{t.beyond.implication}</p>
            <p className="btm-prose-lede">{t.beyond.challengeIntro}</p>
          </div>

          <p className="btm-strategic-callout" data-reveal="">{t.beyond.strategicCallout}</p>

          <div className="btm-prose" data-reveal="">
            <p>{t.beyond.challengeBody}</p>
            <p className="btm-emphasis">{t.beyond.answerLead}</p>
            <p>{t.beyond.answerBody}</p>
          </div>

          <p className="btm-close" data-reveal="">{t.beyond.closing}</p>
        </div>
      </section>

      <section className="section s-canvas" aria-labelledby="friction-heading">
        <div className="section-inner">
          <div className="problem-lead" data-reveal="">
            <div>
              <span className="eyebrow">{t.core.eyebrow}</span>
              <h2 id="friction-heading" className="problem-statement">{t.core.heading}</h2>
            </div>
            <p className="problem-sub">{t.core.body}</p>
          </div>

          <div className="card-grid" data-reveal-stagger="">
            {t.core.cards.map((item) => (
              <article key={item.title} className="card card-accent">
                <div className="icon-tile" aria-hidden="true">
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section s-white" id="how-we-help" aria-labelledby="metrics-heading">
        <div className="section-inner">
          <div className="metrics-intro" data-reveal="">
            <span className="eyebrow">{t.metrics.eyebrow}</span>
            <h2 id="metrics-heading" className="bring-heading">{t.metrics.heading}</h2>
            <p className="engage-body">{t.metrics.body}</p>
          </div>

          <div className="planes-grid" data-reveal-stagger="">
            <article className="plane plane-quant">
              <header className="plane-header">
                <span className="plane-tag">{t.metrics.planes.quant.tag}</span>
                <h3 className="plane-title">{t.metrics.planes.quant.title}</h3>
                <p className="plane-body">{t.metrics.planes.quant.body}</p>
              </header>
              <span className="plane-section-label">{t.metrics.planes.quant.familiesLabel}</span>
              <ol className="family-list">
                {t.metrics.planes.quant.families.map((f) => (
                  <li key={f.num} className="family-item">
                    <span className="family-num" aria-hidden="true">{f.num}</span>
                    <div className="family-body">
                      <strong className="family-title">{f.title}</strong>
                      <p className="family-summary">{f.summary}</p>
                      <ul className="family-signals">
                        {f.signals.map((s) => (
                          <li key={s} className="signal-chip">{s}</li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ol>
            </article>

            <article className="plane plane-perception">
              <header className="plane-header">
                <span className="plane-tag">{t.metrics.planes.perception.tag}</span>
                <h3 className="plane-title">{t.metrics.planes.perception.title}</h3>
                <p className="plane-body">{t.metrics.planes.perception.body}</p>
              </header>

              <div className="baseline-card">
                <div className="baseline-head">
                  <span className="baseline-label">{t.metrics.planes.perception.baselineLabel}</span>
                  <span className="baseline-count">{t.metrics.planes.perception.baselineCount}</span>
                </div>
                <p className="baseline-summary">{t.metrics.planes.perception.baselineSummary}</p>
              </div>

              <span className="plane-section-label">{t.metrics.planes.perception.branchesLabel}</span>
              <ul className="branch-list">
                {t.metrics.planes.perception.branches.map((b) => (
                  <li key={b.title} className="branch-item">
                    <span className="branch-icon material-symbols-outlined" aria-hidden="true">{b.icon}</span>
                    <div className="branch-body">
                      <div className="branch-head">
                        <strong className="branch-title">{b.title}</strong>
                        <span className="branch-count">{b.count}</span>
                      </div>
                      <p className="branch-summary">{b.summary}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <p className="plane-note">{t.metrics.planes.perception.note}</p>
            </article>
          </div>

        </div>
      </section>

      <section className="section s-canvas" id="who-its-for" aria-labelledby="audience-heading">
        <div className="section-inner">
          <div className="section-intro" data-reveal="">
            <div className="intro-heading-col">
              <span className="eyebrow">{t.audience.eyebrow}</span>
              <h2 id="audience-heading" className="section-heading">{t.audience.heading}</h2>
            </div>
            <div className="intro-text-col">
              <p>{t.audience.body}</p>
            </div>
          </div>
          <div className="card-grid card-grid-3" data-reveal-stagger="">
            {t.audience.cards.map((card) => (
              <article key={card.title} className="card card-accent">
                <div className="icon-tile" aria-hidden="true">
                  <span className="material-symbols-outlined">{card.icon}</span>
                </div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section s-dark" id="blueprint" aria-labelledby="problem-heading">
        <div className="section-inner">
          <div className="why-now-grid why-now-grid-wide">
            <div data-reveal="">
              <span className="eyebrow eyebrow-dark">{t.blueprint.eyebrow}</span>
              <h2 id="problem-heading" className="why-now-heading why-now-heading-wide">{t.blueprint.heading}</h2>
              <div className="why-now-prose">
                {t.blueprint.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </div>

            <div className="levels-panel" data-reveal="">
              <span className="levels-label">{t.blueprint.levelsLabel}</span>
              <div className="levels-list">
                {t.blueprint.levels.map((item) => (
                  <article key={item.title} className="levels-item">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="blueprint-grid" data-reveal-stagger="">
            {t.blueprint.cards.map((item) => (
              <article key={item.title} className="blueprint-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section s-canvas" id="engagement" aria-labelledby="engagement-heading">
        <div className="section-inner">
          <div className="engage-grid">
            <div data-reveal="">
              <span className="eyebrow">{t.engagement.eyebrow}</span>
              <h2 id="engagement-heading" className="engage-heading">{t.engagement.heading}</h2>
              <p className="engage-body">{t.engagement.body}</p>
            </div>

            <blockquote className="pull-quote" data-reveal="">{t.engagement.quote}</blockquote>
          </div>
        </div>
      </section>

      <section className="section s-dark" id="contact" aria-labelledby="contact-heading">
        <div className="section-inner">
          <div className="cta-inner" data-reveal="">
            <span className="eyebrow eyebrow-brass">{t.contact.eyebrow}</span>
            <h2 id="contact-heading" className="cta-heading">{t.contact.heading}</h2>
            <p className="cta-sub">{t.contact.body}</p>
            <div className="cta-actions">
              <a
                href="https://calendly.com/nicolasboitout/new-meeting"
                className="btn btn-dark"
                data-calendly-link="true"
              >
                {t.contact.cta}
              </a>
              <a
                href="mailto:nicolas@agentic-sdlc.com?subject=Agentic%20SDLC%20conversation"
                className="btn btn-outline-dark"
              >
                {t.contact.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <a href="#top" className="footer-name">{t.footer.brand}</a>
            <p className="footer-tagline">{t.footer.tagline}</p>
          </div>
          <nav className="footer-links" aria-label="Footer">
            <a href="#sandbox-factory">{t.nav.beyond}</a>
            <a href="#blueprint">{t.nav.blueprint}</a>
            <a href="#how-we-help">{t.nav.metrics}</a>
            <a href="#contact">{t.nav.contact}</a>
            <a href="mailto:nicolas@agentic-sdlc.com">{t.contact.email}</a>
          </nav>
          <p className="footer-copy">&copy; {new Date().getFullYear()} Agentic SDLC</p>
        </div>
      </footer>

      <ClientEnhancements
        currentLanguage={language}
        onLanguageChange={setLanguage}
      />
    </main>
  );
}
