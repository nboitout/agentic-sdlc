import { ClientEnhancements } from '@/components/ClientEnhancements';

const audienceCards = [
  {
    title: 'For IT Services Firms',
    text: 'Respond to AI-driven pressure on delivery economics, client expectations, differentiation, and margin structure.',
  },
  {
    title: 'For Enterprise Technology Organizations',
    text: 'Adopt AI-enabled delivery without losing control over quality, accountability, governance, or engineering discipline.',
  },
  {
    title: 'For Executive and Engineering Leadership',
    text: 'Create alignment between top-level ambition and delivery-level reality before fragmented AI adoption becomes structural drag.',
  },
] as const;

const marketQuestions = [
  'How should software delivery evolve as coding agents become part of the production system?',
  'Where can AI create real delivery advantage, and where does it create noise or risk?',
  'How should leadership, engineering, and governance align around a shared model?',
  'What must change in workflows, supervision, and operating assumptions to scale credibly?',
] as const;

const painPoints = [
  {
    title: 'Adoption is accelerating, but unevenly',
    text: 'Teams experiment, leaders push, and delivery evolves, but without a shared model for how AI should actually change the work.',
  },
  {
    title: 'Value is discussed more than it is measured',
    text: 'Organizations see local wins, but often lack a disciplined view of where AI is truly improving delivery.',
  },
  {
    title: 'Risk rises when velocity outruns supervision',
    text: 'As coding agents enter production workflows, quality, accountability, governance, and client trust become more, not less, important.',
  },
] as const;

const helpCards = [
  {
    title: 'Diagnose the real challenge',
    text: 'Clarify where leadership ambition, engineering reality, and delivery constraints are misaligned.',
  },
  {
    title: 'Prioritize where the shift matters',
    text: 'Identify the highest-value transformation questions across delivery model, workflows, governance, and positioning.',
  },
  {
    title: 'Build a credible execution path',
    text: 'Define a practical path forward that leadership can support and engineering teams can actually use.',
  },
] as const;

const outcomes = [
  'Clarify the transformation agenda',
  'Focus on the right opportunities',
  'Reduce execution risk',
  'Build internal traction',
  'Strengthen strategic positioning',
] as const;

export default function HomePage() {
  return (
    <main id="top">
      <section className="s-hero">
        <header className="site-header">
          <a href="#top" className="logo" aria-label="Agentic SDLC home">
            <span className="logo-tag">Consulting boutique</span>
            <span className="logo-name">Agentic SDLC</span>
          </a>
          <nav className="header-nav" aria-label="Primary">
            <a href="#why-now">Why now</a>
            <a href="#how-we-help">How we help</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <div className="hero-body">
          <div className="hero-left">
            <span className="hero-kicker">Agentic SDLC · Consulting boutique for AI-enabled software delivery</span>
            <h1 className="hero-h1">Align executive ambition and engineering reality as AI reshapes software delivery.</h1>
          </div>
          <div className="hero-right">
            <p className="hero-sub">
              Agentic SDLC helps IT services firms and software organizations redesign software delivery as AI changes how software is built,
              supervised, governed, and scaled.
            </p>
            <p className="hero-support">
              We work where leadership priorities, engineering constraints, and competitive pressure collide, turning fragmented experimentation into
              a credible delivery model.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">
                Book an intro call
              </a>
              <a href="#how-we-help" className="btn btn-ghost">
                See where we help
              </a>
            </div>
          </div>
        </div>

        <div className="hero-connector" aria-hidden="true">
          <div className="connector-side">
            <span className="connector-label">Executive ambition</span>
            <p className="connector-desc">Strategy, competitiveness, pricing logic, governance expectations.</p>
          </div>
          <div className="connector-center connector-center-long">Translate ambition into an executable delivery model</div>
          <div className="connector-side connector-side-right">
            <span className="connector-label">Engineering reality</span>
            <p className="connector-desc">Workflows, supervision, execution risk, operating model change.</p>
          </div>
        </div>
      </section>

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
                Agentic SDLC sits between executive strategy and engineering delivery, credible for leadership teams, grounded for software and
                delivery leaders, and focused on operating model transformation rather than generic AI commentary.
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

      <section className="section s-dark" id="why-now" aria-labelledby="why-now-heading">
        <div className="section-inner">
          <div className="why-now-grid">
            <div data-reveal="">
              <span className="eyebrow eyebrow-dark">Why now</span>
              <h2 id="why-now-heading" className="why-now-heading">
                Software delivery is entering a new economic and operating era.
              </h2>
              <div className="why-now-prose">
                <p>
                  AI is not only changing the tooling layer. It is reshaping software production, productivity expectations, governance requirements,
                  pricing logic, and competitive dynamics across the software and IT services market.
                </p>
                <p>
                  The winners will not simply be the organizations using more AI tools. They will be the ones redesigning their delivery model
                  faster and aligning leadership and engineering more credibly than the market.
                </p>
              </div>
            </div>

            <aside className="aside-card" data-reveal="">
              <span className="aside-label">What this shift forces organizations to confront</span>
              <ul className="dot-list">
                {marketQuestions.map((question) => (
                  <li key={question}>{question}</li>
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
              <span className="eyebrow">The real issue</span>
              <h2 id="friction-heading" className="problem-statement">
                Most organizations do not have a tooling problem. They have an alignment problem.
              </h2>
            </div>
            <p className="problem-sub">
              AI adoption is often fragmented, uneven, and difficult to scale. The challenge is not access to tools. It is redesigning the delivery
              model so leadership ambition and engineering execution can move together, credibly and at pace.
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

      <section className="section s-white" id="how-we-help" aria-labelledby="help-heading">
        <div className="section-inner">
          <div className="section-intro" data-reveal="">
            <div className="intro-heading-col">
              <span className="eyebrow">How we help</span>
              <h2 id="help-heading" className="section-heading">
                Focused advisory and transformation support for AI-enabled software delivery.
              </h2>
            </div>
            <div className="intro-text-col">
              <p>
                We help clients move from fragmented experimentation to a more coherent delivery model, one that leadership can support,
                engineering can work with, and governance can trust.
              </p>
            </div>
          </div>

          <div className="card-grid" data-reveal-stagger="">
            {helpCards.map((card) => (
              <article key={card.title} className="card card-accent">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section s-canvas" id="bridge" aria-labelledby="engagement-heading">
        <div className="section-inner">
          <div className="engage-grid">
            <div data-reveal="">
              <span className="eyebrow">Typical engagement</span>
              <h2 id="engagement-heading" className="engage-heading">
                One focused sprint. Clear thinking. Practical outputs.
              </h2>
              <p className="engage-body">
                Agentic SDLC typically works through focused engagements designed to help clients clarify the transformation agenda, align leadership
                and engineering, and define a credible next step.
              </p>
              <div className="chip-row">
                <span className="chip">Executive alignment</span>
                <span className="chip">Delivery model transformation</span>
                <span className="chip">Practical next-step roadmap</span>
              </div>
            </div>

            <blockquote className="pull-quote" data-reveal="">
              Limited number of clients. High-value advisory. Practical transformation support.
            </blockquote>
          </div>
        </div>
      </section>

      <section className="section s-white" aria-labelledby="outcomes-heading">
        <div className="section-inner">
          <div className="bring-grid">
            <div data-reveal="">
              <span className="eyebrow">What clients are trying to achieve</span>
              <h2 id="outcomes-heading" className="bring-heading">
                Better alignment, stronger execution, and clearer strategic footing.
              </h2>
            </div>

            <div className="bring-lists" data-reveal="">
              <div className="list-card">
                <span className="list-label">Outcomes</span>
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

      <section className="section s-canvas" aria-labelledby="about-heading">
        <div className="section-inner">
          <div className="engage-grid founder-grid">
            <div data-reveal="">
              <span className="eyebrow">About</span>
              <h2 id="about-heading" className="engage-heading">
                Led by Nicolas Boitout.
              </h2>
              <p className="engage-body">
                Agentic SDLC is built around the belief that AI-enabled software delivery needs both strategic clarity and delivery-level
                credibility. The work sits between the executive agenda and engineering reality, helping leadership teams make sharper decisions
                about how software delivery should evolve.
              </p>
            </div>

            <div className="founder-card" data-reveal="">
              <p className="founder-copy">
                Nicolas works with leaders navigating the commercial, operating, and engineering consequences of AI in software delivery.
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
              Need a credible path between AI strategy and delivery execution?
            </h2>
            <p className="cta-sub">
              Let&apos;s discuss where AI is creating pressure in your delivery model, where alignment is breaking down, and what a credible path
              forward could look like.
            </p>
            <div className="cta-actions">
              <a href="mailto:hello@agenticsdlc.com" className="btn btn-dark">
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
            <a href="#why-now">Why now</a>
            <a href="#how-we-help">How we help</a>
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
