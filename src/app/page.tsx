'use client';

import { useEffect, useMemo, useState, type CSSProperties } from 'react';
import { ClientEnhancements, LanguageSelector } from '@/components/ClientEnhancements';
import { HeroDashboard } from '@/components/HeroDashboard';
import { MaturityIndex } from '@/components/MaturityIndex';
import { MobileCtaBar } from '@/components/MobileCtaBar';
import { copy, defaultLanguage, languages, type LanguageCode } from '@/lib/i18n';

const storageKey = 'agentic-sdlc-language';

function getInitialLanguage(): LanguageCode {
  if (typeof window === 'undefined') return defaultLanguage;
  const stored = window.localStorage.getItem(storageKey);
  return languages.some((l) => l.code === stored) ? (stored as LanguageCode) : defaultLanguage;
}

const defaultProblemContrast = [
  { left: 'Individual usage', right: 'Team workflows' },
  { left: 'Prompting', right: 'Delegation patterns' },
  { left: 'Output generation', right: 'Review and validation' },
  { left: 'Anecdotal productivity', right: 'Measured delivery impact' },
  { left: 'Informal experimentation', right: 'Governed execution' },
];

const defaultSprintDeliverables = [
  {
    num: '01',
    title: 'Current-state assessment',
    text: 'Understand how AI coding tools are already used across teams, where value is emerging, and where risks appear.',
  },
  {
    num: '02',
    title: 'AI Engineering Maturity diagnosis',
    text: 'Position teams on a practical maturity scale, from ad-hoc usage to orchestrated agentic workflows.',
  },
  {
    num: '03',
    title: 'Operating model blueprint',
    text: 'Define how AI-assisted delivery should work across roles, workflows, supervision, review, quality, and governance.',
  },
  {
    num: '04',
    title: 'Training for key roles',
    text: 'Align engineers, tech leads, product managers, QA, platform teams, and delivery managers on how work changes.',
  },
  {
    num: '05',
    title: 'Metrics and control tower design',
    text: 'Define the signals needed to measure adoption, AI contribution, quality, rework, velocity, cost, and team confidence.',
  },
  {
    num: '06',
    title: '30/60/90-day roadmap',
    text: 'Leave with a pragmatic implementation plan and the first pilots to launch.',
  },
];

const defaultFrameworkLayers = [
  {
    title: 'Agentic SDLC',
    subtitle: 'How software delivery changes.',
    text: 'The operating model: roles, workflows, governance, metrics, supervision, and accountability.',
    question: 'How should teams deliver software when AI agents participate in the work?',
    owner: 'Engineering leadership',
  },
  {
    title: 'Agentic Engineering',
    subtitle: 'How engineers work inside that model.',
    text: 'The practice layer: specification, delegation, review, testing, refactoring, and validation.',
    question: 'How do engineers move from writing every line of code to supervising AI-assisted workflows?',
    owner: 'Engineers and tech leads',
  },
  {
    title: 'Harness Engineering',
    subtitle: 'How agents are made reliable enough to participate.',
    text: 'The reliability layer: context, tools, tests, policies, evaluations, CI/CD integration, and guardrails.',
    question: 'What infrastructure and controls make AI-generated work safe enough for production delivery?',
    owner: 'Platform and tooling teams',
  },
];

const defaultTransformations = [
  { from: 'Coding everything manually', to: 'Delegating well-scoped work' },
  { from: 'Prompting casually', to: 'Writing executable specifications' },
  { from: 'Reviewing only human code', to: 'Reviewing AI-generated changes' },
  { from: 'Trusting output', to: 'Validating behavior through tests and evaluations' },
  { from: 'Local productivity', to: 'Measurable delivery improvement' },
];

const defaultAdoptionPrograms = [
  {
    title: 'Pilot team enablement',
    text: 'Select one or two engineering teams and redesign their delivery workflow around AI-assisted execution.',
  },
  {
    title: 'Role-based training',
    text: 'Train developers, tech leads, product managers, QA, platform teams, and delivery managers on how their work changes.',
  },
  {
    title: 'Workflow redesign',
    text: 'Define repeatable patterns for specification, coding, testing, review, documentation, migration, refactoring, and maintenance.',
  },
  {
    title: 'Platform and tooling alignment',
    text: 'Connect AI coding tools with repositories, documentation, CI/CD, policy checks, and internal engineering standards.',
  },
  {
    title: 'Metrics instrumentation',
    text: 'Track adoption, quality, velocity, AI contribution, rework, cost, and human confidence.',
  },
  {
    title: 'Governance and supervision',
    text: 'Create practical rules for what AI can do, what humans must review, and how accountability is preserved.',
  },
];

const audienceCards = [
  {
    icon: 'apartment',
    title: 'Engineering leaders',
    text: 'You need to understand whether AI coding tools are creating real productivity, where risks are emerging, and how to scale adoption safely.',
  },
  {
    icon: 'terminal',
    title: 'Platform and tooling teams',
    text: 'You need to integrate AI tools into the engineering environment: repositories, CI/CD, documentation, identity, policies, and internal standards.',
  },
  {
    icon: 'schedule',
    title: 'Product and delivery leaders',
    text: 'You need to understand how AI changes planning, estimation, review, quality, and stakeholder predictability.',
  },
  {
    icon: 'handshake',
    title: 'Software delivery organizations',
    text: 'You need to prepare for a shift from staffing-based delivery to measurable AI-enabled execution.',
  },
];

export default function HomePage() {
  const [language, setLanguage] = useState<LanguageCode>(getInitialLanguage);
  const t = useMemo(() => copy[language], [language]);

  const problemContrast: { left: string; right: string }[] = t.problem?.contrast ?? defaultProblemContrast;
  const sprintDeliverables: { num: string; title: string; text: string }[] = t.sprint?.deliverables ?? defaultSprintDeliverables;
  const frameworkLayers: { title: string; subtitle: string; text: string; question: string; owner: string }[] = t.framework?.layers ?? defaultFrameworkLayers;
  const transformations: { from: string; to: string }[] = t.engineering?.transformations ?? defaultTransformations;
  const adoptionPrograms: { title: string; text: string }[] = t.programs?.items ?? defaultAdoptionPrograms;

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = t.meta.title;
    window.localStorage.setItem(storageKey, language);
  }, [language, t.meta.title]);

  return (
    <main id="top">

      {/* ── Section 1: Hero ────────────────────────────────────────── */}
      <section className="s-hero">
        <header className="site-header">
          <a href="#top" className="logo" aria-label="Agentic SDLC home">
            <img src="/agentic-sdlc-mark.svg" alt="" className="logo-mark" aria-hidden="true" />
            <span className="logo-name">Agentic SDLC</span>
          </a>
          <nav className="header-nav" aria-label="Primary navigation">
            <a href="#problem">{t.nav2?.problem ?? 'Problem'}</a>
            <a href="#sprint">{t.nav2?.offer ?? 'Offer'}</a>
            <a href="#maturity">{t.nav2?.maturity ?? 'Maturity'}</a>
            <a href="#metrics">{t.nav2?.metrics ?? 'Metrics'}</a>
            <a href="#programs">{t.nav2?.programs ?? 'Programs'}</a>
            <a href="/beyond-tm">{t.nav2?.itServices ?? 'IT Services'}</a>
            <a
              href="https://nboitout.github.io/Blog-Agentic-SDLC/en/"
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
            <p className="hero-trust-strip">
              {t.heroTrustStrip ?? 'For engineering leaders · platform teams · product organizations · software delivery teams'}
            </p>
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
              <span className="eyebrow eyebrow-dark">{t.problem?.eyebrow ?? 'The core gap'}</span>
              <h2 id="problem-heading" className="why-now-heading why-now-heading-wide">
                {t.problem?.heading ?? 'AI tool adoption is not a delivery model.'}
              </h2>
              <div className="why-now-prose">
                {(t.problem?.paragraphs ?? [
                  'Most organizations start with licenses: GitHub Copilot, Cursor, Claude Code, Gemini, Codex/ChatGPT Enterprise, or internal assistants.',
                  'That creates local productivity gains. But it does not answer the questions that matter at scale:',
                ] as string[]).map((p: string, i: number) => (
                  <p key={i}>{p}</p>
                ))}
                <div className="problem-questions-block">
                  <ul className="problem-questions">
                    {(t.problem?.questions ?? [
                      'What should engineers delegate to AI?',
                      'What must humans review?',
                      'How do teams measure AI contribution?',
                      'How is quality protected?',
                      'How do managers know whether delivery is improving?',
                      'How do organizations avoid uncontrolled experimentation?',
                    ] as string[]).map((q: string) => (
                      <li key={q}>{q}</li>
                    ))}
                  </ul>
                </div>
                <p className="problem-closing">
                  {t.problem?.closing ?? 'Agentic SDLC closes the gap between individual AI usage and reliable software delivery.'}
                </p>
              </div>
            </div>

            <div className="problem-contrast-table" data-reveal="">
              <div className="contrast-header">
                <span>{t.problem?.contrastHeader?.[0] ?? 'AI tool adoption'}</span>
                <span>{t.problem?.contrastHeader?.[1] ?? 'Agentic SDLC'}</span>
              </div>
              {problemContrast.map((row) => (
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
            <span className="eyebrow">{t.sprint?.eyebrow ?? 'The offer'}</span>
            <h2 id="sprint-offer-heading" className="sprint-heading">
              {t.sprint?.heading ?? 'One sprint to design your AI-enabled delivery model.'}
            </h2>
            <p className="sprint-subtitle">
              {t.sprint?.subtitle ?? 'A focused engagement to help your organization move from scattered AI coding experiments to a governed Agentic SDLC operating model.'}
            </p>
          </div>

          <p className="sprint-body" data-reveal="">
            {t.sprint?.body ?? 'In one sprint, we work with your leadership, engineering, product, and platform teams to assess where AI is already being used, define the right operating model, train key roles, and design the first measurable delivery pilots.'}
          </p>

          <div className="card-grid card-grid-3 deliverables-grid" data-reveal-stagger="">
            {sprintDeliverables.map((d) => (
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
              {t.sprint?.primaryCta ?? 'Book an intro call'}
            </a>
            <a href="#maturity" className="btn btn-ghost">
              {t.sprint?.secondaryCta ?? 'See the maturity scale'}
            </a>
          </div>
          <p className="sprint-outcome-label" data-reveal="">
            {t.sprint?.outcomeLabel ?? 'Sprint outcome: your Agentic SDLC blueprint'}
          </p>
        </div>
      </section>

      {/* ── Section 4: AI Engineering Maturity Scale ───────────────── */}
      <div id="maturity">
        <MaturityIndex language={language} />
      </div>

      {/* ── Section 5: Three-layer framework ───────────────────────── */}
      <section className="section s-canvas" id="framework" aria-labelledby="framework-heading">
        <div className="section-inner">
          <div className="section-intro" data-reveal="">
            <div className="intro-heading-col">
              <span className="eyebrow">{t.framework?.eyebrow ?? 'The model'}</span>
              <h2 id="framework-heading" className="section-heading">
                {t.framework?.heading ?? 'Three layers of AI-enabled software delivery'}
              </h2>
            </div>
            <div className="intro-text-col">
              <p>
                {t.framework?.intro ?? 'Agentic SDLC separates the operating model, the engineering practices, and the technical harness needed to make AI reliable.'}
              </p>
            </div>
          </div>

          <div className="card-grid card-grid-3" data-reveal-stagger="">
            {frameworkLayers.map((layer) => (
              <article key={layer.title} className="card card-accent framework-card">
                <h3>{layer.title}</h3>
                <p className="framework-subtitle">{layer.subtitle}</p>
                <p>{layer.text}</p>
                <p className="framework-question">{t.framework?.answersLabel ?? 'It answers:'} {layer.question}</p>
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
              <span className="eyebrow">{t.engineering?.eyebrow ?? 'The role shift'}</span>
              <h2 id="engineering-heading" className="section-heading">
                {t.engineering?.heading ?? 'The role of the engineer changes.'}
              </h2>
            </div>
            <div className="intro-text-col">
              {(t.engineering?.paragraphs ?? [
                'AI does not remove engineering discipline. It increases the need for it.',
                'In an Agentic SDLC, engineers do not simply “write code faster.” They learn to structure work so that AI systems can contribute safely: clearer specifications, smaller tasks, stronger tests, explicit review loops, and better context. The engineer becomes less of a line-by-line producer and more of a designer, reviewer, validator, and supervisor of software work.',
              ] as string[]).map((p: string, i: number) => (
                <p key={i} style={i > 0 ? { marginTop: '12px' } : undefined}>{p}</p>
              ))}
            </div>
          </div>

          <div className="from-to-grid" data-reveal-stagger="">
            {transformations.map((item) => (
              <div key={item.from} className="from-to-card">
                <span className="from-label">{t.engineering?.fromLabel ?? 'From'}</span>
                <span className="from-text">{item.from}</span>
                <span className="from-to-arrow" aria-hidden="true">→</span>
                <span className="to-label">{t.engineering?.toLabel ?? 'To'}</span>
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
              <span className="eyebrow">{t.programs?.eyebrow ?? 'Next steps'}</span>
              <h2 id="programs-heading" className="section-heading">
                {t.programs?.heading ?? 'From first sprint to scaled adoption'}
              </h2>
            </div>
            <div className="intro-text-col">
              {(t.programs?.paragraphs ?? [
                'The first sprint creates the blueprint. The next step is implementation through pilots, training, and operating metrics.',
                'After the initial sprint, organizations can move into targeted adoption programs: team pilots, role-based training, workflow redesign, metrics instrumentation, and governance support.',
              ] as string[]).map((p: string, i: number) => (
                <p key={i} style={i > 0 ? { marginTop: '12px' } : undefined}>{p}</p>
              ))}
            </div>
          </div>

          <div className="card-grid card-grid-3" data-reveal-stagger="">
            {adoptionPrograms.map((program) => (
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
              <span className="eyebrow">Audience</span>
              <h2 id="audience-heading" className="section-heading">
                Who Agentic SDLC is for
              </h2>
            </div>
            <div className="intro-text-col">
              <p>Built for organizations that need AI speed with delivery accountability.</p>
            </div>
          </div>

          <div className="card-grid audience-grid-2x2" data-reveal-stagger="">
            {audienceCards.map((card) => (
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
            <p className="cta-reassurance">
              {t.contactReassurance ?? 'No generic AI evangelism. No tool-only training. The focus is delivery: workflows, quality, supervision, metrics, and adoption.'}
            </p>
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
            <a href="#problem">{t.nav2?.problem ?? 'Problem'}</a>
            <a href="#sprint">{t.nav2?.offer ?? 'Offer'}</a>
            <a href="#maturity">{t.nav2?.maturity ?? 'Maturity'}</a>
            <a href="#metrics">{t.nav2?.metrics ?? 'Metrics'}</a>
            <a href="#programs">{t.nav2?.programs ?? 'Programs'}</a>
            <a href="/beyond-tm">{t.nav2?.itServices ?? 'IT Services'}</a>
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
