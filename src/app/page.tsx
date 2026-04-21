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

const bibliographyItems = [
  {
    label: 'Anthropic Engineering — Harness design for long-running apps',
    href: 'https://www.anthropic.com/engineering/harness-design-long-running-apps',
  },
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
            <span className="logo-name">Agentic SDLC</span>
          </a>
          <nav className="header-nav" aria-label="Primary">
            <a href="#sandbox-factory">Sandbox / Factory</a>
            <a href="#blueprint">Blueprint</a>
            <a href="#how-we-help">Metrics</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <div className="blog-cta-banner">
          <p className="blog-cta-copy">
            Get the full playbook and practical examples on the Agentic SDLC blog.
          </p>
          <a
            href="https://nboitout.github.io/Blog-Agentic-SDLC/en/"
            className="btn btn-blog"
            target="_blank"
            rel="noreferrer"
          >
            Read the related blog
          </a>
        </div>

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
              Move from AI coding experimentation to operationally reliable delivery.
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

          {/* Right column: dashboard panel + floating stat card */}
          <div className="hero-right">
            <div className="hero-visual" aria-hidden="true">
              <div className="hero-visual-frame">
                <span className="hero-visual-chip">Factory mode · operational</span>
                <div className="hero-visual-stack">
                  <div className="hero-visual-bar">
                    <span className="label">AI contribution</span>
                    <div className="track"><div className="fill" style={{ width: '68%' }} /></div>
                    <span className="val">68%</span>
                  </div>
                  <div className="hero-visual-bar">
                    <span className="label">Rework</span>
                    <div className="track"><div className="fill" style={{ width: '14%' }} /></div>
                    <span className="val">14%</span>
                  </div>
                  <div className="hero-visual-bar">
                    <span className="label">Quality</span>
                    <div className="track"><div className="fill" style={{ width: '91%' }} /></div>
                    <span className="val">91%</span>
                  </div>
                  <div className="hero-visual-bar">
                    <span className="label">Supervision</span>
                    <div className="track"><div className="fill" style={{ width: '82%' }} /></div>
                    <span className="val">82%</span>
                  </div>
                </div>
              </div>

              <div className="hero-visual-card">
                <div className="hero-visual-card-head">
                  <span className="material-symbols-outlined">insights</span>
                  <span className="hero-visual-card-title">Delivery health</span>
                </div>
                <div className="hero-visual-card-bar"><span /></div>
                <p className="hero-visual-card-sub">
                  Supervision coverage: 92% of agent actions measured and reviewed.
                </p>
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
          ABOUT
          ══════════════════════════════════════════════════════════════ */}
      <section className="section s-white" aria-labelledby="about-heading">
        <div className="section-inner">
          <div className="engage-grid founder-grid">
            <div data-reveal="">
              <span className="eyebrow">About</span>
              <h2 id="about-heading" className="engage-heading">
                Led by Nicolas Boitout.
              </h2>
              <p className="engage-body">Built by Nicolas Boitout.</p>
            </div>

            <div className="founder-card" data-reveal="">
              <p className="founder-copy">
                Operator, advisor, and builder working on the shift from software teams to
                AI-supervised delivery systems.
              </p>
              <a
                href="https://www.linkedin.com/in/nicolas-boitout-phd-8677842/"
                target="_blank"
                rel="noreferrer"
                className="profile-link"
              >
                View LinkedIn profile
              </a>
            </div>
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
                href="mailto:hello@agenticsdlc.com?subject=Agentic%20SDLC%20conversation"
                className="btn btn-outline-dark"
              >
                hello@agenticsdlc.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          BIBLIOGRAPHY
          ══════════════════════════════════════════════════════════════ */}
      <section className="section s-white" id="biblio" aria-labelledby="biblio-heading">
        <div className="section-inner">
          <div className="section-intro section-intro-stacked" data-reveal="">
            <div className="intro-heading-col">
              <span className="eyebrow">Bibliography</span>
              <h2 id="biblio-heading" className="section-heading">
                Selected references
              </h2>
            </div>
          </div>
          <ul className="biblio-list" data-reveal-stagger="">
            {bibliographyItems.map((item) => (
              <li key={item.href} className="biblio-item">
                <a href={item.href} target="_blank" rel="noreferrer" className="biblio-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
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
            <a href="#biblio">Bibliography</a>
            <a href="mailto:hello@agenticsdlc.com">hello@agenticsdlc.com</a>
          </nav>
          <p className="footer-copy">&copy; {new Date().getFullYear()} Agentic SDLC</p>
        </div>
      </footer>

      <ClientEnhancements />
    </main>
  );
}
