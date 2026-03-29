import { ClientEnhancements } from '@/components/ClientEnhancements';

/* ─── Data ──────────────────────────────────────────────────── */

const audienceCards = [
  {
    title: 'For IT Services Firms',
    text: 'Strengthen delivery positioning, modernize operating assumptions, and respond to AI-driven margin and pricing pressure with a credible leadership agenda.',
  },
  {
    title: 'For Enterprise Software Teams',
    text: 'Turn uneven AI experimentation into a workable delivery model that engineering leaders can support and governance leaders can trust.',
  },
  {
    title: 'For Executive and Delivery Leadership',
    text: 'Align strategic ambition, delivery realities, and competitive response before fragmented adoption turns into structural drag.',
  },
] as const;

const clientNeeds = [
  'Bring structure to AI-enabled software delivery',
  'Move beyond scattered experimentation',
  'Create measurable productivity gains',
  'Reduce delivery risk as AI usage scales',
  'Equip teams and leadership with a credible transformation path',
] as const;

const painPoints = [
  {
    title: 'Adoption is happening, but not coherently',
    text: 'Teams are trying tools, leaders are setting ambition, and delivery keeps moving — but the organization lacks a shared model for what good looks like.',
  },
  {
    title: 'Productivity gains are unclear',
    text: 'Signals are inconsistent, narratives are inflated, and few organizations can translate isolated wins into a disciplined view of value.',
  },
  {
    title: 'Risk grows as velocity increases',
    text: 'As AI enters engineering workflows, governance, quality, and accountability questions become more urgent, not less.',
  },
] as const;

const bridgeTopics = [
  'AI-enabled delivery',
  'Operating model redesign',
  'Software engineering workflows',
  'Governance',
  'Competitive positioning',
] as const;

const outcomes = [
  'Clarify the transformation agenda',
  'Prioritize the right opportunities',
  'Reduce execution risk',
  'Structure internal traction',
  'Strengthen competitive positioning',
] as const;

/* ─── Page ──────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <main id="top">

      {/* ═══ HERO ═══════════════════════════════════════════════ */}
      <section className="s-hero">

        {/* Nav */}
        <header className="site-header">
          <a href="#top" className="logo" aria-label="Agentic SDLC home">
            <span className="logo-tag">Consulting boutique</span>
            <span className="logo-name">Agentic SDLC</span>
          </a>
          <nav className="header-nav" aria-label="Primary">
            <a href="#why-now">Why now</a>
            <a href="#bridge">What we bring</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        {/* Body */}
        <div className="hero-body">
          <div className="hero-left">
            <span className="hero-kicker">AI-enabled software delivery transformation</span>
            <h1 className="hero-h1">
              Bridging executive<br />
              strategy and<br />
              engineering delivery.
            </h1>
          </div>
          <div className="hero-right">
            <p className="hero-sub">
              Agentic SDLC helps IT services firms and software organizations
              align <strong>leadership ambition</strong>, <strong>engineering reality</strong>,
              and delivery execution as AI reshapes how software is built,
              governed, priced, and scaled.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">Book an intro call</a>
              <a href="#why-now" className="btn btn-ghost">Why this matters now</a>
            </div>
          </div>
        </div>

        {/* Bridge connector */}
        <div className="hero-connector" aria-hidden="true">
          <div className="connector-side">
            <span className="connector-label">Executive ambition</span>
            <p className="connector-desc">
              Strategy, investment logic, competitive response, and governance expectations.
            </p>
          </div>
          <div className="connector-center">Agentic SDLC — the bridge</div>
          <div className="connector-side connector-side-right">
            <span className="connector-label">Engineering reality</span>
            <p className="connector-desc">
              Delivery systems, workflow change, execution risk, and operating model design.
            </p>
          </div>
        </div>

      </section>

      {/* ═══ AUDIENCE ═══════════════════════════════════════════ */}
      <section className="section s-white" aria-labelledby="audience-heading">
        <div className="section-inner">

          <div className="section-intro" data-reveal="">
            <div className="intro-heading-col">
              <span className="eyebrow">Where the work matters</span>
              <h2 id="audience-heading" className="section-heading">
                Relevant at the leadership table. Credible inside delivery.
              </h2>
            </div>
            <div className="intro-text-col">
              <p>
                Agentic SDLC sits at the intersection of executive strategy and engineering leadership —
                sharp enough for C-suite conversations, grounded enough for delivery teams.
              </p>
            </div>
          </div>

          <div className="card-grid" data-reveal-stagger="">
            {audienceCards.map((card) => (
              <article key={card.title} className="card card-accent">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* ═══ WHY NOW ════════════════════════════════════════════ */}
      <section className="section s-dark" id="why-now" aria-labelledby="why-now-heading">
        <div className="section-inner">
          <div className="why-now-grid">

            <div data-reveal="">
              <span className="eyebrow eyebrow-dark">Why now</span>
              <h2 id="why-now-heading" className="why-now-heading">
                Software delivery is entering a new operating era.
              </h2>
              <div className="why-now-prose">
                <p>
                  AI is not just changing the tooling layer. It is reshaping engineering productivity,
                  governance expectations, pricing logic, and the competitive dynamics around
                  software delivery.
                </p>
                <p>
                  The organizations that win will not simply be the ones using more AI tools.
                  They will be the ones aligning executive priorities, engineering leadership,
                  and delivery execution faster and more credibly than the market.
                </p>
              </div>
            </div>

            <aside className="aside-card" data-reveal="">
              <span className="aside-label">What clients typically need</span>
              <ul className="dot-list">
                {clientNeeds.map((need) => (
                  <li key={need}>{need}</li>
                ))}
              </ul>
            </aside>

          </div>
        </div>
      </section>

      {/* ═══ PROBLEM ════════════════════════════════════════════ */}
      <section className="section s-canvas" aria-labelledby="friction-heading">
        <div className="section-inner">

          <div className="problem-lead" data-reveal="">
            <div>
              <span className="eyebrow">The real issue</span>
              <h2 id="friction-heading" className="problem-statement">
                Most organizations do not have a tooling problem.
                They have an alignment problem.
              </h2>
            </div>
            <p className="problem-sub">
              AI adoption is often fragmented, uneven, and difficult to scale. The challenge is not
              access to tools. It is redesigning the delivery model so leadership ambition and
              engineering execution can move together — credibly and at pace.
            </p>
          </div>

          <div className="card-grid" data-reveal-stagger="">
            {painPoints.map((item) => (
              <article key={item.title} className="card card-accent">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* ═══ WHAT WE BRING ══════════════════════════════════════ */}
      <section className="section s-white" id="bridge" aria-labelledby="bring-heading">
        <div className="section-inner">
          <div className="bring-grid">

            <div data-reveal="">
              <span className="eyebrow">What Agentic SDLC brings</span>
              <h2 id="bring-heading" className="bring-heading">
                Strategic clarity, engineering credibility, and an execution path.
              </h2>
              <div className="bring-prose">
                <p>
                  Agentic SDLC helps software organizations make sense of the shift, identify
                  where value is real, and define a path that works for both leadership teams
                  and engineering leaders.
                </p>
                <p>
                  The work is high-value advisory with practical transformation support:
                  disciplined enough for governance, grounded enough for delivery, and focused
                  on outcomes rather than theatrical AI narratives.
                </p>
              </div>
            </div>

            <div className="bring-lists" data-reveal-stagger="">
              <div className="list-card">
                <span className="list-label">Where we engage</span>
                <ul className="plain-list">
                  {bridgeTopics.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>
              </div>
              <div className="list-card">
                <span className="list-label">What the work enables</span>
                <ul className="plain-list">
                  {outcomes.map((outcome) => (
                    <li key={outcome}>{outcome}</li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ WHY CLIENTS ENGAGE ═════════════════════════════════ */}
      <section className="section s-canvas" aria-labelledby="engage-heading">
        <div className="section-inner">
          <div className="engage-grid">

            <div data-reveal="">
              <span className="eyebrow">Why clients engage us</span>
              <h2 id="engage-heading" className="engage-heading">
                A bridge between strategic intent and engineering execution.
              </h2>
              <p className="engage-body">
                Agentic SDLC works at the intersection where executive leadership and engineering
                leadership need to align on consequential questions — how AI-enabled delivery
                should evolve, how operating models should adapt, and how credibility is maintained
                while the organization changes.
              </p>
            </div>

            <blockquote className="pull-quote" data-reveal="">
              From experimentation to a credible operating model.
            </blockquote>

          </div>
        </div>
      </section>

      {/* ═══ CTA ════════════════════════════════════════════════ */}
      <section className="section s-dark" id="contact" aria-labelledby="contact-heading">
        <div className="section-inner">
          <div className="cta-inner" data-reveal="">
            <span className="eyebrow eyebrow-brass">Start the conversation</span>
            <h2 id="contact-heading" className="cta-heading">
              Need a credible bridge between AI strategy and engineering execution?
            </h2>
            <p className="cta-sub">
              Let&apos;s discuss the pressure points you are seeing, where executive ambition and
              engineering realities are diverging, and what a credible path forward could look like.
            </p>
            <div className="cta-actions">
              <a href="mailto:hello@agenticsdlc.com" className="btn btn-dark">
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

      {/* ═══ FOOTER ═════════════════════════════════════════════ */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <a href="#top" className="footer-name">Agentic SDLC</a>
            <p className="footer-tagline">AI-enabled software delivery transformation</p>
          </div>
          <nav className="footer-links" aria-label="Footer">
            <a href="#why-now">Why now</a>
            <a href="#bridge">What we bring</a>
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
