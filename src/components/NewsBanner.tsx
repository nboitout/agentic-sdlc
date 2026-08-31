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
            <span className="news-banner-pill">Status</span>
            <span className="news-banner-date">Current as of August 31, 2026</span>
          </div>
          <div className="news-banner-title">
            Anthropic paused the planned June 15 separation of subscription-authenticated
            programmatic usage
          </div>
          <div className="news-banner-desc">
            For now, Agent SDK, claude -p, third-party Agent SDK apps, and GitHub Actions authenticated
            through a Claude subscription continue to draw from subscription usage limits. API-key and
            cloud-provider usage remains separately metered.
          </div>
        </div>
        <span className="news-banner-cta">See the diagram -&gt;</span>
      </a>
    </div>
  );
}
