import { ClientEnhancements } from '@/components/ClientEnhancements';

import { BrochureSignup } from '@/components/BrochureSignup';

import { MetricsCharts } from '@/components/MetricsCharts';

/* ── Content data ─────────────────────────────────────────────────── */

const comparisonCards = [
  {
    icon: 'science',
    title: 'Today: the sandbox',
    text: 'Scattered copilots. Local experiments. Unclear value. No shared rules. No real metrics.',
  },
  {
    icon: 'precision_manufacturing',
    title: 'Tomorrow: the factory',
    text: 'Structured workflows. Explicit supervision. Measurable outcomes. Governed delivery. Scalable execution.',
  },
] as const;

const blueprintSteps = [
  'Establish ground truth',
  'Pinpoint the highest ROI actions',
  'Shift from creator to supervisor',
  'Put metrics in place',
  'Move to immediate action',
] as const;

const roleCards = [
  { icon: 'rule', label: 'Policy Design' },
  { icon: 'model_training', label: 'Intent Mapping' },
  { icon: 'reviews', label: 'Formal Review' },
  { icon: 'rocket_launch', label: 'Delivery Launch' },
] as const;

const supervisionCards = [
  {
    icon: 'hub',
    title: 'What to delegate',
    text: 'Decide where coding agents can move fast without creating hidden operational debt.',
  },
  {
    icon: 'fact_check',
    title: 'What to review',
    text: 'Make supervision explicit so validation, approval, and escalation are built into the workflow.',
  },
  {
    icon: 'shield_person',
    title: 'What not to automate blindly',
    text: 'Protect quality, accountability, and client trust where human judgment still matters most.',
  },
] as const;

const metricsItems = [
  'AI contribution',
  'Rework',
  'Quality',
  'Supervision',
] as const;

export default function HomePage() {
  return (
    <main id="top">
      {/* ══════════════════════════════════════════════════════════════
          HERO
          ══════════════════════════════════════════════════════════════ */}
      <section className="s-hero">
        <header className="site-header">
          <a href="#top" className="logo" aria-label="Agentic SDLC home">
            <img src="/agentic-sdlc-mark.svg" alt="" className="logo-mark" aria-hidden="true" />
            <span className="logo-name">Agentic SDLC</span>
          </a>
          <nav className="header-nav" aria-label="Primary">
            <a href="#sandbox-factory">Sandbox / Factory</a>
            <a href="#blueprint">Blueprint</a>
            <a href="#how-we-help">Metrics</a>
            <a href="#contact">Contact</a>
            <a
              href="https://nboitout.github.io/Blog-Agentic-SDLC/en/"
              className="btn btn-blog header-blog-btn"
              target="_blank"
              rel="noreferrer"
            >
              Our Blog: Learn &amp; Project
            </a>
          </nav>
        </header>

        <div className="hero-body">
          <div className="hero-left">
            <h1 className="hero-h1">
              <span className="hero-h1-accent">Agentic SDLC:</span>
              <br />
              From AI coding tools to reliable delivery systems.
            </h1>
            <p className="hero-sub">
              A practical course on coding agents, loops, harnesses, and governance patterns that
              make a software factory possible.
            </p>
            <p className="hero-support">
              Move from AI experimentation to a delivery model your clients can trust.
            </p>
            <div className="hero-actions">
              <a
                href="https://calendly.com/nicolasboitout/30min"
                className="btn btn-primary"
                data-calendly-link="true"
              >
                Book an intro call
              </a>
              <BrochureSignup />
            </div>
          </div>

          {/* Right column: software-factory control tower */}
          <div className="hero-right">
            <div className="hero-visual" aria-hidden="true">
              <div className="hero-console">
                {/* Dark chrome strip */}
                <div className="console-top">
                  <span className="dot" />
                  <span className="live">LIVE</span>
                  <span className="title">Control · Agentic SDLC</span>
                  <span className="time">14:02 UTC</span>
                </div>

                <div className="console-body">
                  {/* Pipeline stages */}
                  <div>
                    <span className="console-label">Delivery pipeline</span>
                    <div className="pipeline">
                      <div className="stage done"><span className="pip" />Plan</div>
                      <div className="stage done"><span className="pip" />Build</div>
                      <div className="stage active"><span className="pip" />Review</div>
                      <div className="stage"><span className="pip" />Ship</div>
                      <div className="stage"><span className="pip" />Measure</div>
                    </div>
                  </div>

                  {/* Split row: events + gauge */}
                  <div className="console-split">
                    <div className="console-card">
                      <span className="console-label">Live events</span>
                      <ul className="events">
                        <li>
                          <span className="ts">14:02</span>
                          <span className="msg">agent-04 · merged PR #182</span>
                          <span className="ok">✓</span>
                        </li>
                        <li>
                          <span className="ts">14:01</span>
                          <span className="msg">review queue · 2 items</span>
                          <span className="warn">!</span>
                        </li>
                        <li>
                          <span className="ts">13:57</span>
                          <span className="msg">policy check · passed</span>
                          <span className="ok">✓</span>
                        </li>
                        <li>
                          <span className="ts">13:54</span>
                          <span className="msg">agent-02 · scaffolded module</span>
                          <span className="ok">✓</span>
                        </li>
                      </ul>
                    </div>

                    <div className="console-card">
                      <span className="console-label">Supervision</span>
                      <div className="gauge-wrap">
                        <svg
                          className="gauge-svg"
                          viewBox="0 0 120 70"
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <defs>
                            <linearGradient id="gaugeGrad" x1="0" y1="0" x2="1" y2="0">
                              <stop offset="0" stopColor="#4648D4" />
                              <stop offset="1" stopColor="#6063EE" />
                            </linearGradient>
                          </defs>
                          {/* track */}
                          <path
                            d="M 10 60 A 50 50 0 0 1 110 60"
                            stroke="#E3E1D8"
                            strokeWidth="8"
                            fill="none"
                            strokeLinecap="round"
                          />
                          {/* fill (92% of ~157 arc length) */}
                          <path
                            d="M 10 60 A 50 50 0 0 1 110 60"
                            stroke="url(#gaugeGrad)"
                            strokeWidth="8"
                            fill="none"
                            strokeLinecap="round"
                            strokeDasharray="157"
                            strokeDashoffset="13"
                          />
                        </svg>
                        <span className="gauge-val">92%</span>
                        <span className="gauge-sub">coverage</span>
                      </div>
                    </div>
                  </div>

                  {/* Mini metric trio */}
                  <div className="console-metrics">
                    <div className="mini">
                      <div className="mini-top">
                        <span className="mini-k">AI contrib.</span>
                        <span className="mini-v">68%</span>
                      </div>
                      <div className="mini-bar"><span style={{ width: '68%' }} /></div>
                    </div>
                    <div className="mini">
                      <div className="mini-top">
                        <span className="mini-k">Rework</span>
                        <span className="mini-v">14%</span>
                      </div>
                      <div className="mini-bar"><span className="warn" style={{ width: '14%' }} /></div>
                    </div>
                    <div className="mini">
                      <div className="mini-top">
                        <span className="mini-k">Quality</span>
                        <span className="mini-v">91%</span>
                      </div>
                      <div className="mini-bar"><span style={{ width: '91%' }} /></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating "Agent pool" peek card */}
              <div className="hero-visual-card">
                <div className="hero-visual-card-head">
                  <span className="dot" />
                  <span className="hero-visual-card-title">Agent pool</span>
                </div>
                <div className="hero-visual-card-row">
                  <span className="hero-visual-card-num">4 / 4</span>
                  <span className="hero-visual-card-sub">online · 0 stalled</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-connector" aria-hidden="true">
          <div className="connector-side">
            <span className="connector-label">Sandbox mode</span>
            <p className="connector-desc">Fragmented usage, unclear supervision, anecdotal value.</p>
          </div>
          <div className="connector-center connector-center-long">
            Agentic SDLC moves delivery from experimentation to control
          </div>
          <div className="connector-side connector-side-right">
            <span className="connector-label">Factory mode</span>
            <p className="connector-desc">Structured workflows, explicit supervision, measurable execution.</p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SANDBOX / FACTORY
          ══════════════════════════════════════════════════════════════ */}
      <section className="section s-white" id="sandbox-factory" aria-labelledby="comparison-heading">
        <div className="section-inner">
          <div className="section-intro" data-reveal="">
            <div className="intro-heading-col">
              <span className="eyebrow">Sandbox / Factory</span>
              <h2 id="comparison-heading" className="section-heading">
                Most software organizations are still in sandbox mode.
              </h2>
            </div>
            <div className="intro-text-col">
              <p>
                Tool usage is appearing everywhere, but a real delivery model is still missing. The
                shift is from scattered experimentation to a controlled system that can be
                supervised, measured, and scaled.
              </p>
            </div>
          </div>

          <div className="card-grid card-grid-2" data-reveal-stagger="">
            {comparisonCards.map((card) => (
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

      {/* ══════════════════════════════════════════════════════════════
          BLUEPRINT (dark)
          ══════════════════════════════════════════════════════════════ */}
      <section className="section s-dark" id="blueprint" aria-labelledby="problem-heading">
        <div className="section-inner">
          <div className="why-now-grid">
            <div data-reveal="">
              <span className="eyebrow eyebrow-dark">Problem</span>
              <h2 id="problem-heading" className="why-now-heading">
                AI tool adoption is not a delivery model.
              </h2>
              <div className="why-now-prose">
                <p>
                  The problem is not access to AI tools. The problem is turning isolated usage into
                  a system that leadership can trust and engineering can run.
                </p>
              </div>
            </div>

            <aside className="aside-card" data-reveal="">
              <span className="aside-label">Blueprint</span>
              <p className="aside-copy">A practical blueprint for AI supervision in software delivery.</p>
              <ul className="dot-list">
                {blueprintSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
            </aside>
          </div>

          {/* 4-col role-row (from inspiration "Elevating the Architect") */}
          <div className="role-grid" data-reveal-stagger="">
            {roleCards.map((role) => (
              <div key={role.label} className="role-card">
                <div className="icon-tile icon-tile-dark" aria-hidden="true">
                  <span className="material-symbols-outlined">{role.icon}</span>
                </div>
                <h4>{role.label}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          CORE SHIFT / SUPERVISION
          ══════════════════════════════════════════════════════════════ */}
      <section className="section s-canvas" aria-labelledby="friction-heading">
        <div className="section-inner">
          <div className="problem-lead" data-reveal="">
            <div>
              <span className="eyebrow">Core shift</span>
              <h2 id="friction-heading" className="problem-statement">
                Core shift of the developer&apos;s role.
              </h2>
            </div>
            <p className="problem-sub">
              As coding agents take on more work, developers do not disappear. Their role changes.
              The new challenge is supervision: what to delegate, what to review, what to validate,
              and what not to automate blindly.
            </p>
          </div>

          <div className="card-grid" data-reveal-stagger="">
            {supervisionCards.map((item) => (
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

      {/* ══════════════════════════════════════════════════════════════
          METRICS — bento + existing charts
          ══════════════════════════════════════════════════════════════ */}
      <section className="section s-white" id="how-we-help" aria-labelledby="metrics-heading">
        <div className="section-inner">
          <div className="bring-grid">
            <div data-reveal="">
              <span className="eyebrow">Metrics</span>
              <h2 id="metrics-heading" className="bring-heading">
                Without metrics, there is no transformation.
              </h2>
              <p className="engage-body">
                If AI contribution, rework, quality, and supervision are not measured, adoption
                stays anecdotal and cannot scale.
              </p>
            </div>

            <div className="bring-lists" data-reveal="">
              <div className="list-card">
                <span className="list-label">What must be measured</span>
                <ul className="plain-list">
                  {metricsItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bento grid summary — headline metrics, then the detailed charts */}
          <div className="bento" data-reveal-stagger="">
            <article className="bento-hero">
              <div>
                <h3>Measurement over anecdote.</h3>
                <p>
                  What gets measured gets governed. The factory runs on numbers, not narrative.
                </p>
              </div>
              <div className="bento-hero-stats">
                <div className="bento-hero-row">
                  <span className="bento-hero-row-label">Supervision coverage</span>
                  <span className="bento-hero-row-value">92%</span>
                </div>
                <div className="bento-hero-row">
                  <span className="bento-hero-row-label">Rework reduction</span>
                  <span className="bento-hero-row-value">4×</span>
                </div>
              </div>
            </article>

            <article className="bento-wide">
              <div className="icon-tile" aria-hidden="true">
                <span className="material-symbols-outlined">speed</span>
              </div>
              <h4>Velocity with control</h4>
              <p>Agent loops ship faster only when supervision, review, and escalation are measured in the same run.</p>
            </article>

            <article className="bento-tile">
              <span className="num">100%</span>
              <span className="label">Traceability</span>
            </article>

            <article className="bento-tile bento-tile-variant">
              <span className="num">0</span>
              <span className="label">Unreviewed merges</span>
            </article>
          </div>

          <MetricsCharts />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          ENGAGEMENT
          ══════════════════════════════════════════════════════════════ */}
      <section className="section s-canvas" id="engagement" aria-labelledby="engagement-heading">
        <div className="section-inner">
          <div className="engage-grid">
            <div data-reveal="">
              <span className="eyebrow">Engagement</span>
              <h2 id="engagement-heading" className="engage-heading">
                One sprint. Ground truth, priorities, operating rules, metrics.
              </h2>
              <p className="engage-body">
                The objective is simple: move from scattered experimentation to a controlled next
                step.
              </p>
            </div>

            <blockquote className="pull-quote" data-reveal="">
              One focused engagement to define the ground truth, the priorities, and the operating
              rules that make AI supervision real.
            </blockquote>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          CONTACT (dark)
          ══════════════════════════════════════════════════════════════ */}
      <section className="section s-dark" id="contact" aria-labelledby="contact-heading">
        <div className="section-inner">
          <div className="cta-inner" data-reveal="">
            <span className="eyebrow eyebrow-brass">Start the conversation</span>
            <h2 id="contact-heading" className="cta-heading">
              Still in sandbox mode?
            </h2>
            <p className="cta-sub">
              If AI is already entering your delivery workflows, the next step is not more
              experimentation. It is control, supervision, and measurable execution.
            </p>
            <div className="cta-actions">
              <a
                href="https://calendly.com/nicolasboitout/30min"
                className="btn btn-dark"
                data-calendly-link="true"
              >
                Book an intro call
              </a>
              <a
                href="mailto:nicolas@agentic-sdlc.com?subject=Agentic%20SDLC%20conversation"
                className="btn btn-outline-dark"
              >
                nicolas@agentic-sdlc.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          FOOTER
          ══════════════════════════════════════════════════════════════ */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <a href="#top" className="footer-name">
              Agentic SDLC
            </a>
            <p className="footer-tagline">AI-enabled software delivery transformation</p>
          </div>
          <nav className="footer-links" aria-label="Footer">
            <a href="#sandbox-factory">Sandbox / Factory</a>
            <a href="#blueprint">Blueprint</a>
            <a href="#how-we-help">Metrics</a>
            <a href="#contact">Contact</a>
            <a href="mailto:nicolas@agentic-sdlc.com">nicolas@agentic-sdlc.com</a>
          </nav>
          <p className="footer-copy">&copy; {new Date().getFullYear()} Agentic SDLC</p>
        </div>
      </footer>

      <ClientEnhancements />
    </main>
  );
}
