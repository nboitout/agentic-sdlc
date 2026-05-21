'use client';

import { useEffect, useState, type CSSProperties } from 'react';
import { ClientEnhancements, LanguageSelector } from '@/components/ClientEnhancements';
import { HeroDashboard } from '@/components/HeroDashboard';
import { MaturityIndex } from '@/components/MaturityIndex';
import { MobileCtaBar } from '@/components/MobileCtaBar';
import { NewsBanner } from '@/components/NewsBanner';
import { defaultLanguage, en, languages, loadTranslation, type LanguageCode, type SiteCopy } from '@/lib/i18n';

const storageKey = 'agentic-sdlc-language';

function getInitialLanguage(): LanguageCode {
  if (typeof window === 'undefined') return defaultLanguage;
  const stored = window.localStorage.getItem(storageKey);
  return languages.some((l) => l.code === stored) ? (stored as LanguageCode) : defaultLanguage;
}

export default function HomePage() {
  const [language, setLanguage] = useState<LanguageCode>(getInitialLanguage);
  const [t, setT] = useState<SiteCopy>(en);

  useEffect(() => {
    let active = true;
    loadTranslation(language).then((copy) => { if (active) setT(copy); });
    return () => { active = false; };
  }, [language]);

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = t.meta.title;
    window.localStorage.setItem(storageKey, language);
  }, [language, t.meta.title]);

  return (
    <main id="top">

      <NewsBanner />

      {/* ── Section 1: Hero ────────────────────────────────────────── */}
      <section className="s-hero">
        <header className="site-header">
          <a href="#top" className="logo" aria-label="Agentic SDLC home">
            <img src="/agentic-sdlc-mark.svg" alt="" className="logo-mark" aria-hidden="true" />
            <span className="logo-name">Agentic SDLC</span>
          </a>
          <nav className="header-nav" aria-label="Primary navigation">
            <a href="#problem">{t.nav2.problem}</a>
            <a href="#sprint">{t.nav2.offer}</a>
            <a href="#maturity">{t.nav2.maturity}</a>
            <a href="#metrics">{t.nav2.metrics}</a>
            <a href="#programs">{t.nav2.programs}</a>
            <a href="/beyond-tm">{t.nav2.itServices}</a>
            <a
              href="https://nboitout.github.io/Blog-Agentic-SDLC/en/lectures/lecture-01-why-traditional-sdlc-breaks/"
              className="btn btn-blog header-blog-btn"
              target="_blank"
              rel="noreferrer"
            >
              {t.nav.blog}
            </a>
          </nav>
          <LanguageSelector
            currentLanguage={language}
            onLanguageChange={setLanguage}
            label={t.nav.language}
          />
        </header>

        <div className="hero-body">
          <div
            className="hero-left"
            style={{ '--hero-eyebrow': `"${t.hero.eyebrow}"` } as CSSProperties}
          >
            <h1 className="hero-h1">
              {t.hero.h1Prefix} <span className="hero-h1-accent">{t.hero.h1Rest}</span>
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
            <p className="hero-trust-strip">{t.heroTrustStrip}</p>
          </div>

          <div className="hero-right">
            <HeroDashboard hero={t.hero} />
          </div>
        </div>
      </section>

      {/* ── Section 2: Problem ─────────────────────────────────────── */}
      <section className="section s-dark" id="problem" aria-labelledby="problem-heading">
        <div className="section-inner">
          <div className="why-now-grid why-now-grid-wide">
            <div data-reveal="">
              <span className="eyebrow eyebrow-dark">{t.problem.eyebrow}</span>
              <h2 id="problem-heading" className="why-now-heading why-now-heading-wide">
                {t.problem.heading}
              </h2>
              <div className="why-now-prose">
                {t.problem.paragraphs.map((p: string, i: number) => (
                  <p key={i}>{p}</p>
                ))}
                <div className="problem-questions-block">
                  <ul className="problem-questions">
                    {t.problem.questions.map((q: string) => (
                      <li key={q}>{q}</li>
                    ))}
                  </ul>
                </div>
                <p className="problem-closing">{t.problem.closing}</p>
              </div>
            </div>

            <div className="problem-contrast-table" data-reveal="">
              <div className="contrast-header">
                <span>{t.problem.contrastHeader[0]}</span>
                <span>{t.problem.contrastHeader[1]}</span>
              </div>
              {t.problem.contrast.map((row) => (
                <div key={row.left} className="contrast-row">
                  <span className="contrast-left">{row.left}</span>
                  <span className="contrast-arrow" aria-hidden="true">→</span>
                  <span className="contrast-right">{row.right}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Offer / Sprint ───────────────────────────────── */}
      <section className="section s-white" id="sprint" aria-labelledby="sprint-offer-heading">
        <div className="section-inner sprint-inner">
          <div className="sprint-head" data-reveal="">
            <span className="eyebrow">{t.sprint.eyebrow}</span>
            <h2 id="sprint-offer-heading" className="sprint-heading">
              {t.sprint.heading}
            </h2>
            <p className="sprint-subtitle">{t.sprint.subtitle}</p>
          </div>

          <p className="sprint-body" data-reveal="">{t.sprint.body}</p>

          <div className="card-grid card-grid-3 deliverables-grid" data-reveal-stagger="">
            {t.sprint.deliverables.map((d) => (
              <article key={d.num} className="card card-accent deliverable-card">
                <span className="deliverable-num" aria-hidden="true">{d.num}</span>
                <h3>{d.title}</h3>
                <p>{d.text}</p>
              </article>
            ))}
          </div>

          <div className="sprint-ctas" data-reveal="">
            <a
              href="https://calendly.com/nicolasboitout/new-meeting"
              className="btn btn-primary"
              data-calendly-link="true"
            >
              {t.sprint.primaryCta}
            </a>
            <a href="#maturity" className="btn btn-ghost">
              {t.sprint.secondaryCta}
            </a>
          </div>
          <p className="sprint-outcome-label" data-reveal="">{t.sprint.outcomeLabel}</p>
        </div>
      </section>

      {/* ── Section 4: AI Engineering Maturity Scale ───────────────── */}
      <div id="maturity">
        <MaturityIndex language={language} maturity={t.maturity} />
      </div>

      {/* ── Section 5: Three-layer framework ───────────────────────── */}
      <section className="section s-canvas" id="framework" aria-labelledby="framework-heading">
        <div className="section-inner">
          <div className="section-intro" data-reveal="">
            <div className="intro-heading-col">
              <span className="eyebrow">{t.framework.eyebrow}</span>
              <h2 id="framework-heading" className="section-heading">
                {t.framework.heading}
              </h2>
            </div>
            <div className="intro-text-col">
              <p>{t.framework.intro}</p>
            </div>
          </div>

          <div className="card-grid card-grid-3" data-reveal-stagger="">
            {t.framework.layers.map((layer) => (
              <article key={layer.title} className="card card-accent framework-card">
                <h3>{layer.title}</h3>
                <p className="framework-subtitle">{layer.subtitle}</p>
                <p>{layer.text}</p>
                <p className="framework-question">{t.framework.answersLabel} {layer.question}</p>
                <span className="framework-owner">{layer.owner}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 6: What changes in engineering work ────────────── */}
      <section className="section s-white" id="engineering" aria-labelledby="engineering-heading">
        <div className="section-inner">
          <div className="section-intro" data-reveal="">
            <div className="intro-heading-col">
              <span className="eyebrow">{t.engineering.eyebrow}</span>
              <h2 id="engineering-heading" className="section-heading">
                {t.engineering.heading}
              </h2>
            </div>
            <div className="intro-text-col">
              {t.engineering.paragraphs.map((p: string, i: number) => (
                <p key={i} style={i > 0 ? { marginTop: '12px' } : undefined}>{p}</p>
              ))}
            </div>
          </div>

          <div className="from-to-grid" data-reveal-stagger="">
            {t.engineering.transformations.map((item) => (
              <div key={item.from} className="from-to-card">
                <span className="from-label">{t.engineering.fromLabel}</span>
                <span className="from-text">{item.from}</span>
                <span className="from-to-arrow" aria-hidden="true">→</span>
                <span className="to-label">{t.engineering.toLabel}</span>
                <span className="to-text">{item.to}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 7: Metrics / Agentic Delivery Control Tower ────── */}
      <section className="section s-white" id="metrics" aria-labelledby="metrics-heading">
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

      {/* ── Section 8: Adoption programs ───────────────────────────── */}
      <section className="section s-canvas" id="programs" aria-labelledby="programs-heading">
        <div className="section-inner">
          <div className="section-intro" data-reveal="">
            <div className="intro-heading-col">
              <span className="eyebrow">{t.programs.eyebrow}</span>
              <h2 id="programs-heading" className="section-heading">
                {t.programs.heading}
              </h2>
            </div>
            <div className="intro-text-col">
              {t.programs.paragraphs.map((p: string, i: number) => (
                <p key={i} style={i > 0 ? { marginTop: '12px' } : undefined}>{p}</p>
              ))}
            </div>
          </div>

          <div className="card-grid card-grid-3" data-reveal-stagger="">
            {t.programs.items.map((program) => (
              <article key={program.title} className="card card-accent">
                <h3>{program.title}</h3>
                <p>{program.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 9: Who this is for ─────────────────────────────── */}
      <section className="section s-canvas" id="who-its-for" aria-labelledby="audience-heading">
        <div className="section-inner">
          <div className="section-intro" data-reveal="">
            <div className="intro-heading-col">
              <span className="eyebrow">{t.audience2.eyebrow}</span>
              <h2 id="audience-heading" className="section-heading">
                {t.audience2.heading}
              </h2>
            </div>
            <div className="intro-text-col">
              <p>{t.audience2.sub}</p>
            </div>
          </div>

          <div className="card-grid audience-grid-2x2" data-reveal-stagger="">
            {t.audience2.cards.map((card) => (
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

      {/* ── Section 11: Final CTA ───────────────────────────────────── */}
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
                href="https://nboitout.github.io/Blog-Agentic-SDLC/en/executive-self-assessment/"
                className="btn btn-outline-dark"
                target="_blank"
                rel="noreferrer"
              >
                {t.hero.secondaryCta}
              </a>
            </div>
            <p className="cta-reassurance">{t.contactReassurance}</p>
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
            <a href="#problem">{t.nav2.problem}</a>
            <a href="#sprint">{t.nav2.offer}</a>
            <a href="#maturity">{t.nav2.maturity}</a>
            <a href="#metrics">{t.nav2.metrics}</a>
            <a href="#programs">{t.nav2.programs}</a>
            <a href="/beyond-tm">{t.nav2.itServices}</a>
            <a href="mailto:nicolas@agentic-sdlc.com">{t.contact.email}</a>
          </nav>
          <p className="footer-copy">&copy; {new Date().getFullYear()} Agentic SDLC</p>
        </div>
      </footer>

      <MobileCtaBar
        primaryLabel={t.hero.primaryCta}
        primaryHref="https://calendly.com/nicolasboitout/new-meeting"
        secondaryLabel={t.hero.secondaryCta}
        secondaryHref="https://nboitout.github.io/Blog-Agentic-SDLC/en/executive-self-assessment/"
      />

      <ClientEnhancements
        currentLanguage={language}
        onLanguageChange={setLanguage}
      />
    </main>
  );
}
