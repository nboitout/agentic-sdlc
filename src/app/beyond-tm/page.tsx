'use client';

import { MobileCtaBar } from '@/components/MobileCtaBar';
import { ClientEnhancements } from '@/components/ClientEnhancements';

const cards = [
  { num: '01', title: 'Divisible', text: 'Execution splits into targeted streams: migration, testing, refactoring.' },
  { num: '02', title: 'Time-compressed', text: 'Work lands in weeks, not in multi-year staffing cycles.' },
  { num: '03', title: 'Elastic', text: 'Ramp up fast, shut down cleanly, restart when priorities change.' },
  { num: '04', title: 'Schedulable', text: 'Execution is routed across priorities, not statically assigned to teams.' },
];

const bullets = [
  'How much execution should we inject right now?',
  'Which initiatives deserve short bursts of acceleration?',
  'Where do we need parallel streams instead of more billable days?',
  'When should capacity ramp up, shut down, or restart?',
];

const paragraphs = [
  'Classical team augmentation was built for a world where execution was scarce and projects consumed years. You staffed teams, sold billable days, and scaled with headcount.',
  'With coding agents, productivity rises, delivery compresses, and parallelism increases. Clients can absorb more execution internally, which means people are no longer allocated to projects in the same static way.',
  'External teams do not disappear. But they stop being long staffing commitments. They become short, targeted execution bursts.',
];

const annotations = [
  'Assumes execution is scarce.',
  'Requires stable, long-term staffing.',
  'Sells time, not results.',
];

export default function BeyondTMPage() {
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
            <a href="/#problem">Problem</a>
            <a href="/#sprint">Offer</a>
            <a href="/#maturity">Maturity</a>
            <a href="/#metrics">Metrics</a>
            <a href="/#programs">Programs</a>
            <a href="/beyond-tm" className="header-nav-active">IT Services</a>
            <a
              href="https://calendly.com/nicolasboitout/new-meeting"
              className="btn btn-blog header-blog-btn"
              data-calendly-link="true"
            >
              Book a Call
            </a>
          </nav>
        </header>
      </section>

      {/* ── Hero ───────────────────────────────────────────────────── */}
      <section className="section s-dark" aria-labelledby="btm-hero-heading">
        <div className="section-inner">
          <div data-reveal="">
            <span className="eyebrow eyebrow-dark">For IT services firms</span>
            <h1 id="btm-hero-heading" className="btm-page-hero-heading">
              Beyond Time &amp; Materials
            </h1>
            <p className="btm-page-lead">
              Staffing sold time. The next model sells execution bursts.
            </p>
          </div>
        </div>
      </section>

      {/* ── The shift ──────────────────────────────────────────────── */}
      <section className="section s-white" aria-labelledby="shift-heading">
        <div className="section-inner">
          <div className="section-intro" data-reveal="">
            <div className="intro-heading-col">
              <span className="eyebrow">Bench management becomes critical</span>
              <h2 id="shift-heading" className="section-heading">
                Coding agents change the economics of delivery.
              </h2>
            </div>
            <div className="intro-text-col">
              {paragraphs.map((p) => (
                <p key={p} style={{ marginTop: '12px' }}>{p}</p>
              ))}
            </div>
          </div>

          {/* Before / Now comparison */}
          <div className="btm-shift" data-reveal="">
            <div className="btm-shift-card">
              <span>Before</span>
              <strong>people × time</strong>
              <p>billable days · stable staffing · long projects</p>
            </div>
            <span className="btm-shift-arrow" aria-hidden="true">→</span>
            <div className="btm-shift-card btm-shift-card-accent">
              <span>Now</span>
              <strong>execution bursts</strong>
              <p>parallel streams · short cycles · dynamic allocation</p>
            </div>
          </div>

          {/* Example */}
          <div className="btm-example" data-reveal="">
            <div>
              <span className="btm-example-label">Classical T&amp;M</span>
              <strong>5 engineers for 18 months</strong>
            </div>
            <span className="btm-shift-arrow" aria-hidden="true">→</span>
            <div>
              <span className="btm-example-label">Programmable execution</span>
              <strong>3 execution streams for 4–6 weeks</strong>
            </div>
          </div>
        </div>
      </section>

      {/* ── Legacy Equation ────────────────────────────────────────── */}
      <section className="section s-white btm-shell" aria-labelledby="equation-heading">
        <div className="section-inner btm-inner">
          <div className="legacy-equation" data-reveal="" aria-labelledby="equation-heading">
            <header className="legacy-equation-head">
              <span className="eyebrow">Bench management is now critical</span>
              <h2 id="equation-heading" className="legacy-equation-heading">
                The Legacy Equation of Classical Augmentation
              </h2>
            </header>

            <div
              className="legacy-equation-row"
              role="img"
              aria-label="Headcount times Billable Months equals Legacy Capacity"
            >
              <div className="legacy-term legacy-term-input">
                <span className="legacy-bracket legacy-bracket-left" aria-hidden="true" />
                <div className="legacy-term-body">
                  <span className="legacy-term-label">Term 01</span>
                  <span className="legacy-term-word">Headcount</span>
                </div>
                <span className="legacy-bracket legacy-bracket-right" aria-hidden="true" />
              </div>

              <span className="legacy-op" aria-hidden="true">×</span>

              <div className="legacy-term legacy-term-input">
                <span className="legacy-bracket legacy-bracket-left" aria-hidden="true" />
                <div className="legacy-term-body">
                  <span className="legacy-term-label">Term 02</span>
                  <span className="legacy-term-word">Billable Months</span>
                </div>
                <span className="legacy-bracket legacy-bracket-right" aria-hidden="true" />
              </div>

              <span className="legacy-op" aria-hidden="true">=</span>

              <div className="legacy-term legacy-term-result">
                <div className="legacy-term-body">
                  <span className="legacy-term-label">Result</span>
                  <span className="legacy-term-word">Legacy Capacity</span>
                </div>
              </div>
            </div>

            <div className="legacy-callouts" data-reveal-stagger="">
              {annotations.map((annotation, idx) => (
                <div key={annotation} className="legacy-callout" data-callout={idx}>
                  <span className="legacy-callout-connector" aria-hidden="true" />
                  <p>{annotation}</p>
                </div>
              ))}

              <div className="legacy-chart-card">
                <svg
                  className="legacy-chart-svg"
                  viewBox="0 0 220 140"
                  role="img"
                  aria-label="Linear scaling"
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
                  <text x="206" y="132" textAnchor="end" fontSize="9" fill="currentColor" opacity="0.55">headcount</text>
                  <text x="14" y="14" fontSize="9" fill="currentColor" opacity="0.55">capacity</text>
                </svg>
                <span className="legacy-chart-caption">Linear scaling</span>
              </div>

              <p className="legacy-chart-note">
                Scaling delivery relies entirely on adding headcount or more billable months.
              </p>
            </div>
          </div>

          {/* Post-equation */}
          <div className="btm-prose" data-reveal="" style={{ marginTop: '40px' }}>
            <p>
              Coding agents compress delivery cycles. The same scope can increasingly be delivered
              faster, by smaller teams, with stronger automation.
            </p>
            <p className="btm-emphasis">
              Clients will not stop using external teams — but they will increasingly expect them
              to deliver measurable outcomes, not simply provide capacity.
            </p>
            <p className="btm-prose-lede">This creates a new constraint for IT services firms:</p>
          </div>

          <p className="btm-strategic-callout" data-reveal="">
            Faster delivery means faster rotation.
          </p>

          <p className="btm-close" data-reveal="">
            That is where a dedicated Software Engineering Practice becomes critical.
          </p>
        </div>
      </section>

      {/* ── What changes for clients ───────────────────────────────── */}
      <section className="section s-canvas" aria-labelledby="clients-heading">
        <div className="section-inner">
          <div className="section-intro" data-reveal="">
            <div className="intro-heading-col">
              <span className="eyebrow">What changes for clients</span>
              <h2 id="clients-heading" className="section-heading">
                The decision is no longer how many people to staff for how many months.
              </h2>
            </div>
            <div className="intro-text-col">
              <p>Clients will still need engineering partners. But they will increasingly ask different questions:</p>
              <ul className="problem-questions" style={{ marginTop: '16px' }}>
                {bullets.map((b) => (
                  <li key={b} style={{ color: 'var(--body)' }}>{b}</li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className="card-grid"
            data-reveal-stagger=""
            style={{ gridTemplateColumns: 'repeat(2, minmax(0,1fr))' }}
          >
            {cards.map((card) => (
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
            <span className="eyebrow eyebrow-brass">Start the conversation</span>
            <h2 id="btm-cta-heading" className="cta-heading">
              Projects used to consume billable days.<br />Now they consume execution bursts.
            </h2>
            <p className="cta-sub">
              Agentic SDLC provides the operating model behind that shift — make AI-enabled
              delivery reliable inside your engineering organization first.
            </p>
            <div className="cta-actions">
              <a
                href="https://calendly.com/nicolasboitout/new-meeting"
                className="btn btn-dark"
                data-calendly-link="true"
              >
                Book an intro call
              </a>
              <a href="/" className="btn btn-outline-dark">
                Back to overview
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <a href="/" className="footer-name">Agentic SDLC</a>
            <p className="footer-tagline">AI-enabled software delivery transformation</p>
          </div>
          <nav className="footer-links" aria-label="Footer">
            <a href="/#problem">Problem</a>
            <a href="/#sprint">Offer</a>
            <a href="/#maturity">Maturity</a>
            <a href="/#metrics">Metrics</a>
            <a href="/#programs">Programs</a>
            <a href="mailto:nicolas@agentic-sdlc.com">nicolas@agentic-sdlc.com</a>
          </nav>
          <p className="footer-copy">&copy; {new Date().getFullYear()} Agentic SDLC</p>
        </div>
      </footer>

      <MobileCtaBar
        primaryLabel="Book an intro call"
        primaryHref="https://calendly.com/nicolasboitout/new-meeting"
        secondaryLabel="Back to overview"
        secondaryHref="/"
      />

      <ClientEnhancements
        currentLanguage="en"
        onLanguageChange={() => {}}
      />
    </main>
  );
}
