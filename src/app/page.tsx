import { ClientEnhancements } from '@/components/ClientEnhancements';

import { MetricsCharts } from '@/components/MetricsCharts';

const comparisonCards = [
  {
    title: 'Today: the sandbox',
    text: 'Scattered copilots. Local experiments. Unclear value. No shared rules. No real metrics.',
  },
  {
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

const supervisionCards = [
  {
    title: 'What to delegate',
    text: 'Decide where coding agents can move fast without creating hidden operational debt.',
  },
  {
    title: 'What to review',
    text: 'Make supervision explicit so validation, approval, and escalation are built into the workflow.',
  },
  {
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
      <section className="s-hero">
        <header className="site-header">
          <a href="#top" className="logo" aria-label="Agentic SDLC home">
            <span className="logo-name">Agentic SDLC | Consulting boutique for a new software delivery</span>
          </a>
          <nav className="header-nav" aria-label="Primary">
            <a href="#sandbox-factory">Sandbox / Factory</a>
            <a href="#blueprint">Blueprint</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <div className="hero-body">
          <div className="hero-left">
            <h1 className="hero-h1">Become a true software factory.</h1>
          </div>
          <div className="hero-right">
            <p className="hero-sub">
              Most software organizations are still in sandbox mode: fragmented usage, unclear supervision, weak metrics, no real operating model.
              Agentic SDLC helps move delivery toward factory mode: structured, measurable, and scalable.
            </p>
            <p className="hero-support">
              The point is not more experimentation. It is building a delivery system that leadership can trust and engineering can actually run.
            </p>
            <div className="hero-actions">
              <a href="https://calendly.com/nicolasboitout/30min" className="btn btn-primary" data-calendly-link="true">
                Book an intro call
              </a>
              <a href="#sandbox-factory" className="btn btn-ghost">
                See the shift
              </a>
            </div>
          </div>
        </div>

        <div className="hero-connector" aria-hidden="true">
          <div className="connector-side">
            <span className="connector-label">Sandbox mode</span>
            <p className="connector-desc">Fragmented usage, unclear supervision, anecdotal value.</p>
          </div>
          <div className="connector-center connector-center-long">Agentic SDLC moves delivery from experimentation to control</div>
          <div className="connector-side connector-side-right">
            <span className="connector-label">Factory mode</span>
            <p className="connector-desc">Structured workflows, explicit supervision, measurable execution.</p>
          </div>
        </div>
      </section>

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
                Tool usage is appearing everywhere, but a real delivery model is still missing. The shift is from scattered experimentation to a
                controlled system that can be supervised, measured, and scaled.
              </p>
            </div>
          </div>

          <div className="card-grid" data-reveal-stagger="">
            {comparisonCards.map((card) => (
              <article key={card.title} className="card card-accent">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section s-dark" id="blueprint" aria-labelledby="problem-heading">
        <div className="section-inner">
          <div className="why-now-grid">
            <div data-reveal="">
              <span className="eyebrow eyebrow-dark">Problem</span>
              <h2 id="problem-heading" className="why-now-heading">
                AI Tool adoption is not a delivery model.
              </h2>
              <div className="why-now-prose">
                <p>
                  The problem is not access to AI tools. The problem is turning isolated usage into a system that leadership can trust and
                  engineering can run.
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
        </div>
      </section>

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
              As coding agents take on more work, developers do not disappear. Their role changes. The new challenge is supervision: what to
              delegate, what to review, what to validate, and what not to automate blindly.
            </p>
          </div>

          <div className="card-grid" data-reveal-stagger="">
            {supervisionCards.map((item) => (
              <article key={item.title} className="card card-accent">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section s-white" id="how-we-help" aria-labelledby="metrics-heading">
        <div className="section-inner">
          <div className="bring-grid">
            <div data-reveal="">
              <span className="eyebrow">Metrics</span>
              <h2 id="metrics-heading" className="bring-heading">
                Without metrics, there is no transformation.
              </h2>
              <p className="engage-body">
                If AI contribution, rework, quality, and supervision are not measured, adoption stays anecdotal and cannot scale.
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
          <MetricsCharts />
        </div>
      </section>

      <section className="section s-canvas" id="engagement" aria-labelledby="engagement-heading">
        <div className="section-inner">
          <div className="engage-grid">
            <div data-reveal="">
              <span className="eyebrow">Engagement</span>
              <h2 id="engagement-heading" className="engage-heading">
                One sprint. Ground truth, priorities, operating rules, metrics.
              </h2>
              <p className="engage-body">
                The objective is simple: move from scattered experimentation to a controlled next step.
              </p>
            </div>

            <blockquote className="pull-quote" data-reveal="">
              One focused engagement to define the ground truth, the priorities, and the operating rules that make AI supervision real.
            </blockquote>
          </div>
        </div>
      </section>

      <section className="section s-white" aria-labelledby="about-heading">
        <div className="section-inner">
          <div className="engage-grid founder-grid">
            <div data-reveal="">
              <span className="eyebrow">About</span>
              <h2 id="about-heading" className="engage-heading">
                Led by Nicolas Boitout.
              </h2>
              <p className="engage-body">
                Built by Nicolas Boitout.
              </p>
            </div>

            <div className="founder-card" data-reveal="">
              <p className="founder-copy">
                Operator, advisor, and builder working on the shift from software teams to AI-supervised delivery systems.
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

      <section className="section s-dark" id="contact" aria-labelledby="contact-heading">
        <div className="section-inner">
          <div className="cta-inner" data-reveal="">
            <span className="eyebrow eyebrow-brass">Start the conversation</span>
            <h2 id="contact-heading" className="cta-heading">
              Still in sandbox mode?
            </h2>
            <p className="cta-sub">
              If AI is already entering your delivery workflows, the next step is not more experimentation. It is control, supervision, and
              measurable execution.
            </p>
            <div className="cta-actions">
              <a href="https://calendly.com/nicolasboitout/30min" className="btn btn-dark" data-calendly-link="true">
                Book an intro call
              </a>
              <a href="mailto:hello@agenticsdlc.com?subject=Agentic%20SDLC%20conversation" className="btn btn-outline-dark">
                hello@agenticsdlc.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <a href="#top" className="footer-name">Agentic SDLC</a>
            <p className="footer-tagline">AI-enabled software delivery transformation</p>
          </div>
          <nav className="footer-links" aria-label="Footer">
            <a href="#sandbox-factory">Sandbox / Factory</a>
            <a href="#blueprint">Blueprint</a>
            <a href="#contact">Contact</a>
            <a href="mailto:hello@agenticsdlc.com">hello@agenticsdlc.com</a>
          </nav>
          <p className="footer-copy">&copy; {new Date().getFullYear()} Agentic SDLC</p>
        </div>
      </footer>

      <ClientEnhancements />
    </main>
  );
}
