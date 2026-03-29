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
    text: 'Teams are trying tools, leaders are setting ambition, and delivery keeps moving, but the organization lacks a shared model for what good looks like.',
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

export default function HomePage() {
  return (
    <main className="page-shell" id="top">
      <section className="hero-section">
        <header className="site-header">
          <a href="#top" className="brand-mark" aria-label="Agentic SDLC home">
            <span className="brand-kicker">Consulting boutique</span>
            <span className="brand-name">Agentic SDLC</span>
          </a>

          <nav className="site-nav" aria-label="Primary">
            <a href="#why-now">Why now</a>
            <a href="#bridge">What we bring</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">AI-enabled software delivery transformation</p>
            <h1>Bridging executive strategy and engineering delivery in the age of AI.</h1>
            <p className="hero-body">
              Agentic SDLC helps IT services firms and software organizations align leadership ambition, engineering reality, and delivery execution
              as AI reshapes how software is built, governed, priced, and scaled.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="button button-primary">
                Book an intro call
              </a>
              <a href="#why-now" className="button button-secondary">
                Why this matters now
              </a>
            </div>
          </div>

          <div className="hero-bridge" aria-hidden="true">
            <div className="bridge-stage">
              <div className="bridge-panel bridge-panel-top">
                <span className="panel-label">Executive ambition</span>
                <p>Strategy, pressure, investment logic, and competitive response.</p>
              </div>

              <div className="bridge-arch">
                <span className="bridge-line bridge-line-left" />
                <span className="bridge-line bridge-line-right" />
                <span className="bridge-core">Agentic SDLC</span>
              </div>

              <div className="bridge-panel bridge-panel-bottom">
                <span className="panel-label">Engineering reality</span>
                <p>Delivery systems, workflow change, governance, and execution risk.</p>
              </div>
            </div>

            <div className="hero-note">
              <span>Positioning</span>
              <p>Not generic AI strategy. Not tooling-only advisory. A bridge between leadership intent and delivery credibility.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light" aria-labelledby="audience-title">
        <div className="section-intro">
          <p className="eyebrow">Where the work matters</p>
          <h2 id="audience-title">Relevant at the leadership table and credible inside delivery.</h2>
        </div>

        <div className="audience-grid">
          {audienceCards.map((card) => (
            <article key={card.title} className="audience-item">
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-dark" id="why-now" aria-labelledby="why-now-title">
        <div className="dark-grid">
          <div className="section-intro constrained">
            <p className="eyebrow eyebrow-dark">Why now</p>
            <h2 id="why-now-title">Software delivery is entering a new operating era.</h2>
            <p>
              AI is not just changing the tooling layer. It is reshaping engineering productivity, governance expectations, pricing logic, and the
              competitive dynamics around software delivery.
            </p>
            <p>
              The winners will not simply be the organizations using more AI tools. They will be the ones aligning executive priorities,
              engineering leadership, and delivery execution faster and more credibly than the market.
            </p>
          </div>

          <aside className="need-list">
            <p className="need-list-title">What clients typically need</p>
            <ul>
              {clientNeeds.map((need) => (
                <li key={need}>{need}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="section section-light" aria-labelledby="friction-title">
        <div className="split-head">
          <div className="section-intro constrained">
            <p className="eyebrow">The real issue</p>
            <h2 id="friction-title">Most organizations do not have a tooling problem. They have an alignment problem.</h2>
          </div>
          <p className="lead-text">
            AI adoption is often fragmented, uneven, and difficult to scale. The challenge is not access. The challenge is redesigning the delivery
            model so leadership ambition and engineering execution can move together.
          </p>
        </div>

        <div className="problem-grid">
          {painPoints.map((item) => (
            <article key={item.title} className="problem-item">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-tint" id="bridge" aria-labelledby="bridge-title">
        <div className="bridge-layout">
          <div className="section-intro constrained">
            <p className="eyebrow">What Agentic SDLC brings</p>
            <h2 id="bridge-title">Strategic clarity, engineering credibility, and an execution path.</h2>
            <p>
              Agentic SDLC helps software organizations make sense of the shift, identify where value is real, and define a path that works for both
              leadership teams and engineering leaders.
            </p>
            <p>
              The work is high-value advisory with practical transformation support: disciplined enough for governance, grounded enough for delivery,
              and focused on outcomes rather than theatrical AI narratives.
            </p>
          </div>

          <div className="bridge-columns">
            <article className="bridge-column">
              <p className="column-label">Where we engage</p>
              <ul>
                {bridgeTopics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            </article>

            <article className="bridge-column">
              <p className="column-label">What the work enables</p>
              <ul>
                {outcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-light" aria-labelledby="engage-title">
        <div className="engage-grid">
          <div className="section-intro constrained">
            <p className="eyebrow">Why clients engage us</p>
            <h2 id="engage-title">A bridge between strategic intent and engineering execution.</h2>
            <p>
              Agentic SDLC works where executive leadership and engineering leadership need to align on consequential questions: how AI-enabled
              delivery should evolve, how operating models should adapt, and how credibility is maintained while the organization changes.
            </p>
          </div>

          <div className="quote-panel">
            <p>From experimentation to a credible operating model.</p>
          </div>
        </div>
      </section>

      <section className="section section-dark cta-section" id="contact" aria-labelledby="contact-title">
        <div className="cta-card">
          <p className="eyebrow eyebrow-dark">Start the conversation</p>
          <h2 id="contact-title">Need a credible bridge between AI strategy and engineering execution?</h2>
          <p>
            Let&apos;s discuss the pressure points you are seeing, where executive ambition and engineering realities are diverging, and what a credible
            path forward could look like.
          </p>
          <div className="hero-actions">
            <a href="mailto:hello@agenticsdlc.com" className="button button-primary">
              Book an intro call
            </a>
            <a href="mailto:hello@agenticsdlc.com?subject=Agentic%20SDLC%20conversation" className="button button-ghost">
              hello@agenticsdlc.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

