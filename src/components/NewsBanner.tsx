export function NewsBanner() {
  return (
    <div className="news-banner-outer">
      <a
        className="news-banner"
        href="https://nboitout.github.io/Blog-Agentic-SDLC/github_sdlc_billing_animated.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="news-banner-icon">📄</div>
        <div className="news-banner-body">
          <div className="news-banner-eyebrow">
            <span className="news-banner-pill">New</span>
            <span className="news-banner-date">Effective June 15, 2026 - now in effect</span>
          </div>
          <div className="news-banner-title">
            Anthropic billing is changing: interactive vs. programmatic usage will be billed separately
          </div>
          <div className="news-banner-desc">
            See exactly where your AI-native SDLC spend moves - interactive Claude Code stays on
            subscription, Agent SDK runs move to a separate credit. Animated diagram, 7 steps.
          </div>
        </div>
        <span className="news-banner-cta">See the diagram -&gt;</span>
      </a>
    </div>
  );
}
