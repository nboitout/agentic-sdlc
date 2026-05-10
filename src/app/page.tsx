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

const problemContrast = [
  { left: 'Individual usage', right: 'Team workflows' },
  { left: 'Prompting', right: 'Delegation patterns' },
  { left: 'Output generation', right: 'Review and validation' },
  { left: 'Anecdotal productivity', right: 'Measured delivery impact' },
  { left: 'Informal experimentation', right: 'Governed execution' },
];

const sprintDeliverables = [
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

const frameworkLayers = [
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

const transformations = [
  { from: 'Coding everything manually', to: 'Delegating well-scoped work' },
  { from: 'Prompting casually', to: 'Writing executable specifications' },
  { from: 'Reviewing only human code', to: 'Reviewing AI-generated changes' },
  { from: 'Trusting output', to: 'Validating behavior through tests and evaluations' },
  { from: 'Local productivity', to: 'Measurable delivery improvement' },
];

const adoptionPrograms = [
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
            <a href="#problem">Problem</a>
            <a href="#sprint">Sprint</a>
            <a href="#maturity">Maturity</a>
            <a href="#metrics">Metrics</a>
            <a href="#programs">Programs</a>
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
            style={{ '--hero-eyebrow': '"AGENTIC SDLC"' } as CSSProperties}
          >
            <h1 className="hero-h1">
              The operating model for
              <br />
              <span className="hero-h1-accent">AI-enabled software delivery.</span>
            </h1>
            <p className="hero-support">
              AI coding tools are spreading fast across engineering teams. But adoption alone does not
              create reliable delivery. We help engineering organizations turn AI coding usage into
              governed workflows, measurable productivity, and delivery systems that teams and
              stakeholders can trust.
            </p>
            <div className="hero-actions">
              <a
                href="https://calendly.com/nicolasboitout/new-meeting"
                className="btn btn-primary"
                data-calendly-link="true"
              >
                Book an intro call
              </a>
              <a
                href="https://nboitout.github.io/Blog-Agentic-SDLC/en/executive-self-assessment/"
                className="btn btn-ghost"
                target="_blank"
                rel="noreferrer"
              >
                Run the executive self-assessment
              </a>
            </div>
            <p className="hero-trust-strip">
              For engineering leaders · platform teams · product organizations · software delivery teams
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
              <span className="eyebrow eyebrow-dark">The core gap</span>
              <h2 id="problem-heading" className="why-now-heading why-now-heading-wide">
                AI tool adoption is not a delivery model.
              </h2>
              <div className="why-now-prose">
                <p>
                  Most organizations start with licenses: GitHub Copilot, Cursor, Claude Code,
                  Gemini, ChatGPT, or internal assistants.
                </p>
                <p>That creates local productivity gains. But it does not answer the questions that matter at scale:</p>
                <ul className="problem-questions">
                  <li>What should engineers delegate to AI?</li>
                  <li>What must humans review?</li>
                  <li>How do teams measure AI contribution?</li>
                  <li>How is quality protected?</li>
                  <li>How do managers know whether delivery is improving?</li>
                  <li>How do organizations avoid uncontrolled experimentation?</li>
                </ul>
                <p className="problem-closing">
                  Agentic SDLC closes the gap between individual AI usage and reliable software delivery.
                </p>
              </div>
            </div>

            <div className="problem-contrast-table" data-reveal="">
              <div className="contrast-header">
                <span>AI tool adoption</span>
                <span>Agentic SDLC</span>
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
            <span className="eyebrow">The offer</span>
            <h2 id="sprint-offer-heading" className="sprint-heading">
              One sprint to design your AI-enabled delivery model.
            </h2>
            <p className="sprint-subtitle">
              A focused engagement to help your organization move from scattered AI coding
              experiments to a governed Agentic SDLC operating model.
            </p>
          </div>

          <p className="sprint-body" data-reveal="">
            In one sprint, we work with your leadership, engineering, product, and platform teams
            to assess where AI is already being used, define the right operating model, train key
            roles, and design the first measurable delivery pilots.
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
              Book an intro call
            </a>
            <a href="#maturity" className="btn btn-ghost">
              See the maturity scale
            </a>
          </div>
          <p className="sprint-outcome-label" data-reveal="">
            Sprint outcome: your Agentic SDLC blueprint
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
              <span className="eyebrow">The model</span>
              <h2 id="framework-heading" className="section-heading">
                Three layers of AI-enabled software delivery
              </h2>
            </div>
            <div className="intro-text-col">
              <p>
                Agentic SDLC separates the operating model, the engineering practices, and the
                technical harness needed to make AI reliable.
              </p>
            </div>
          </div>

          <div className="card-grid card-grid-3" data-reveal-stagger="">
            {frameworkLayers.map((layer) => (
              <article key={layer.title} className="card card-accent framework-card">
                <h3>{layer.title}</h3>
                <p className="framework-subtitle">{layer.subtitle}</p>
                <p>{layer.text}</p>
                <p className="framework-question">It answers: {layer.question}</p>
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
              <span className="eyebrow">The role shift</span>
              <h2 id="engineering-heading" className="section-heading">
                The role of the engineer changes.
              </h2>
            </div>
            <div className="intro-text-col">
              <p>AI does not remove engineering discipline. It increases the need for it.</p>
              <p style={{ marginTop: '12px' }}>
                In an Agentic SDLC, engineers do not simply &ldquo;write code faster.&rdquo; They
                learn to structure work so that AI systems can contribute safely: clearer
                specifications, smaller tasks, stronger tests, explicit review loops, and better
                context. The engineer becomes less of a line-by-line producer and more of a
                designer, reviewer, validator, and supervisor of software work.
              </p>
            </div>
          </div>

          <div className="from-to-grid" data-reveal-stagger="">
            {transformations.map((item) => (
              <div key={item.from} className="from-to-card">
                <span className="from-label">From</span>
                <span className="from-text">{item.from}</span>
                <span className="from-to-arrow" aria-hidden="true">→</span>
                <span className="to-label">To</span>
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
              <span className="eyebrow">Next steps</span>
              <h2 id="programs-heading" className="section-heading">
                From first sprint to scaled adoption
              </h2>
            </div>
            <div className="intro-text-col">
              <p>
                The first sprint creates the blueprint. The next step is implementation through
                pilots, training, and operating metrics.
              </p>
              <p style={{ marginTop: '12px' }}>
                After the initial sprint, organizations can move into targeted adoption programs:
                team pilots, role-based training, workflow redesign, metrics instrumentation, and
                governance support.
              </p>
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

      {/* ── Section 9: Beyond T&M — Strategic implication ─────────── */}
      <section className="section s-white btm-shell" id="beyond-tm" aria-labelledby="beyond-heading">
        <div className="section-inner btm-inner">
          <div className="btm-head" data-reveal="">
            <span className="strategic-implication-label">Strategic implication</span>
            <span className="eyebrow">{t.beyond.eyebrow}</span>
            <h2 id="beyond-heading" className="btm-heading">
              For software delivery organizations, the commercial model will also change.
            </h2>
            <p className="btm-subtitle">
              AI-enabled delivery does not only affect engineering work. It also changes how
              delivery capacity is packaged, measured, and sold.
            </p>
          </div>

          <div className="btm-prose" data-reveal="">
            <p>
              As AI coding workflows mature, the classic Time &amp; Materials model will come under
              pressure. Clients will still need engineering partners. But they will increasingly
              expect shorter cycles, clearer outcomes, more measurable productivity, and flexible
              delivery capacity.
            </p>
            <p>
              For IT services firms, this creates a strategic question: How do you move from
              selling time to selling reliable execution bandwidth?
            </p>
          </div>

          <ul className="btm-triplet" data-reveal-stagger="">
            <li>Long static staffing commitments become harder to defend.</li>
            <li>Delivery teams need to demonstrate measurable AI-enabled productivity.</li>
            <li>Reusable delivery patterns become strategic assets.</li>
          </ul>

          <p className="btm-close" data-reveal="">
            Agentic SDLC provides the operating model behind that shift — but the first step is
            the same: make AI-enabled delivery reliable inside the engineering organization.
          </p>
        </div>
      </section>

      {/* ── Section 10: Who this is for ────────────────────────────── */}
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
            <span className="eyebrow eyebrow-brass">Start the conversation</span>
            <h2 id="contact-heading" className="cta-heading">
              Ready to move beyond AI tool adoption?
            </h2>
            <p className="cta-sub">
              Start with a focused sprint to assess your current maturity, define your operating
              model, and design the first measurable AI-enabled delivery pilots.
            </p>
            <div className="cta-actions">
              <a
                href="https://calendly.com/nicolasboitout/new-meeting"
                className="btn btn-dark"
                data-calendly-link="true"
              >
                Book an intro call
              </a>
              <a
                href="https://nboitout.github.io/Blog-Agentic-SDLC/en/executive-self-assessment/"
                className="btn btn-outline-dark"
                target="_blank"
                rel="noreferrer"
              >
                Run the executive self-assessment
              </a>
            </div>
            <p className="cta-reassurance">
              No generic AI evangelism. No tool-only training. The focus is delivery: workflows,
              quality, supervision, metrics, and adoption.
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
            <a href="#problem">Problem</a>
            <a href="#sprint">Sprint</a>
            <a href="#maturity">Maturity</a>
            <a href="#metrics">Metrics</a>
            <a href="#programs">Programs</a>
            <a href="mailto:nicolas@agentic-sdlc.com">{t.contact.email}</a>
          </nav>
          <p className="footer-copy">&copy; {new Date().getFullYear()} Agentic SDLC</p>
        </div>
      </footer>

      <MobileCtaBar
        primaryLabel="Book an intro call"
        primaryHref="https://calendly.com/nicolasboitout/new-meeting"
        secondaryLabel="Run the executive self-assessment"
        secondaryHref="https://nboitout.github.io/Blog-Agentic-SDLC/en/executive-self-assessment/"
      />

      <ClientEnhancements
        currentLanguage={language}
        onLanguageChange={setLanguage}
      />
    </main>
  );
}
