import styles from './page.module.css';

const stages = [
  {
    id: '01',
    title: 'Repo spec and GitHub issues',
    tone: 'neutral',
    body:
      'Execution-ready specs live in the repository while Issues or Projects track the work graph. GitHub stays the system of record.',
    bullets: [
      'Specs are versioned close to code',
      'User stories and tasks stay visible in GitHub',
      'Planning context remains attached to delivery artifacts',
    ],
    footer: 'GitHub artifact',
  },
  {
    id: '02',
    title: 'GitHub event starts execution',
    tone: 'neutral',
    body:
      'An issue update, workflow trigger, or project transition makes the selected work item agent-ready and starts the execution path.',
    bullets: [
      'Project state changes are visible in GitHub',
      'Triggers can come from issues, projects, or workflows',
    ],
    footer: 'Workflow trigger',
  },
  {
    id: '03',
    title: 'Main Claude orchestrator reads context',
    tone: 'blue',
    body:
      'The orchestrator reads the repo spec and GitHub context, plans the user story, sequences the work, and delegates tasks.',
    bullets: [
      'Interactive Claude Code session: stays on subscription usage',
      'Agent SDK or non-interactive invocation: moves to separate Agent SDK credit',
    ],
    footer: 'Billing follows invocation mode',
  },
  {
    id: '04',
    title: 'Sub-agents execute scoped tasks',
    tone: 'blue',
    body:
      'Sub-agents generate code, run tests, open draft PRs, and update GitHub status using the task context they receive.',
    bullets: [
      'Subagents inside the same interactive session stay on subscription',
      'SDK-defined or automated subagents use separate Agent SDK credit',
    ],
    footer: 'Role label does not define billing',
  },
  {
    id: '05',
    title: 'Programmatic branch vs. clarification loop',
    tone: 'green',
    body:
      'Automated execution either produces a ready PR through CI or loops back for clarification when the attempt hits an impediment.',
    bullets: [
      'Successful automated coding and CI path is programmatic usage',
      'Clarification can return to the GitHub workflow without becoming an Anthropic billing item by itself',
    ],
    footer: 'Automation branch',
  },
  {
    id: '06',
    title: 'User story completion in GitHub',
    tone: 'neutral',
    body:
      'GitHub tracks status updates, PR reviews, merge readiness, and closure once the work is resolved.',
    bullets: [
      'Status updates stay visible to the team',
      'PR review and merge signals close the loop',
    ],
    footer: 'GitHub control plane',
  },
] as const;

const billingModes = [
  {
    label: 'Programmatic usage',
    tone: 'green',
    text:
      'Claude Agent SDK, non-interactive claude -p usage, Claude Code GitHub Actions, and third-party apps built on the Agent SDK move to separate Agent SDK credit.',
  },
  {
    label: 'Interactive usage',
    tone: 'blue',
    text:
      'Interactive Claude Code in the terminal or IDE, orchestrator logic inside a human-driven interactive session, and subagents inside that same session stay on subscription usage.',
  },
  {
    label: 'GitHub artifacts',
    tone: 'gray',
    text:
      'GitHub state, workflow artifacts, and repository metadata are control-plane artifacts. They are not Anthropic billing items by themselves.',
  },
] as const;

const matrixRows = [
  ['Interactive Claude Code in IDE or terminal', 'Subscription usage', 'Human is driving the session'],
  ['Subagent invoked inside that same interactive session', 'Subscription usage', 'Billing inherits the invocation mode'],
  ['Agent SDK workflow or claude -p automation', 'Separate Agent SDK credit', 'Programmatic invocation'],
  ['Claude Code GitHub Actions or automated CI path', 'Separate Agent SDK credit', 'Automation path is non-interactive'],
  ['GitHub issue, PR, workflow state, or artifact', 'Not an Anthropic billing item', 'Control-plane metadata'],
] as const;

function toneClass(tone: string) {
  if (tone === 'green') return styles.toneGreen;
  if (tone === 'blue') return styles.toneBlue;
  return styles.toneNeutral;
}

export default function GitHubBillingMapPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>GitHub-centric AI-native SDLC</p>
          <h1>When GitHub is the control plane, billing should read like a rulebook.</h1>
          <p className={styles.lede}>
            A clearer explanation of the June 15, 2026 Anthropic billing change for GitHub-centered
            delivery flows. The point is simple: GitHub remains the work graph, while Claude billing
            depends on whether invocation is interactive or programmatic.
          </p>
        </div>

        <aside className={styles.heroAside}>
          <div className={styles.signalCard}>
            <span className={styles.signalLabel}>Billing map</span>
            <strong>Billing follows invocation mode.</strong>
            <p>
              Interactive usage stays on subscription. Programmatic usage moves to separate Agent SDK
              credit.
            </p>
          </div>

          <div className={styles.metaRow}>
            <div className={styles.metaPill}>Effective date: June 15, 2026</div>
            <div className={styles.metaPill}>GitHub remains the control plane</div>
          </div>
        </aside>
      </section>

      <section className={styles.readersSection} aria-labelledby="readers-heading">
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>Three reading modes</p>
          <h2 id="readers-heading">Different readers need different answers fast</h2>
        </div>

        <div className={styles.readersGrid}>
          <article className={styles.readerCard}>
            <span className={styles.readerLabel}>Executive</span>
            <p>What is the governing rule and where does cost move when automation increases?</p>
          </article>
          <article className={styles.readerCard}>
            <span className={styles.readerLabel}>Delivery lead</span>
            <p>Which orchestration patterns stay inside subscription and which ones become Agent SDK credit?</p>
          </article>
          <article className={styles.readerCard}>
            <span className={styles.readerLabel}>Engineering</span>
            <p>How do repo events, subagents, CI, and clarification loops behave inside the workflow?</p>
          </article>
        </div>
      </section>

      <section className={styles.legendSection} aria-labelledby="legend-heading">
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>Quick scan</p>
          <h2 id="legend-heading">Read the billing map before the workflow</h2>
        </div>

        <div className={styles.legendGrid}>
          {billingModes.map((mode) => (
            <article key={mode.label} className={`${styles.legendCard} ${toneClass(mode.tone)}`}>
              <div className={styles.legendDot} aria-hidden="true" />
              <h3>{mode.label}</h3>
              <p>{mode.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.storySection} aria-labelledby="story-heading">
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>Narrative flow</p>
          <h2 id="story-heading">The workflow now reads like a sequence, not a dense poster</h2>
        </div>

        <div className={styles.storyLayout}>
          <div className={styles.timeline} aria-hidden="true">
            <span className={styles.timelineBeam} />
          </div>

          <ol className={styles.stageGrid}>
            {stages.map((stage, index) => (
              <li
                key={stage.id}
                className={`${styles.stageCard} ${toneClass(stage.tone)}`}
                style={{ ['--delay' as string]: `${index * 120}ms` }}
              >
                <div className={styles.stageTop}>
                  <span className={styles.stageId}>{stage.id}</span>
                  <span className={styles.stageFooter}>{stage.footer}</span>
                </div>
                <h3>{stage.title}</h3>
                <p>{stage.body}</p>
                <ul>
                  {stage.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.splitSection} aria-labelledby="branch-heading">
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>Decision fork</p>
          <h2 id="branch-heading">The only branch that matters for billing</h2>
        </div>

        <div className={styles.branchGrid}>
          <article className={`${styles.branchCard} ${styles.toneGreen}`}>
            <span className={styles.branchTag}>Programmatic path</span>
            <h3>Automated PR and CI execution</h3>
            <p>
              If the work is executed through the Agent SDK, a non-interactive Claude path, or GitHub
              automation, usage goes to separate Agent SDK credit.
            </p>
          </article>

          <article className={styles.branchConnector} aria-hidden="true">
            <span />
          </article>

          <article className={`${styles.branchCard} ${styles.toneBlue}`}>
            <span className={styles.branchTag}>Interactive path</span>
            <h3>Human-driven orchestration session</h3>
            <p>
              If the same orchestration and subagent work happens inside an interactive Claude Code
              session, it stays on subscription usage.
            </p>
          </article>
        </div>
      </section>

      <section className={styles.tableSection} aria-labelledby="table-heading">
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>Decision table</p>
          <h2 id="table-heading">Answer the billing question in one glance</h2>
        </div>

        <div className={styles.tableWrap}>
          <table className={styles.matrix}>
            <thead>
              <tr>
                <th>Invocation</th>
                <th>Billed as</th>
                <th>Why</th>
              </tr>
            </thead>
            <tbody>
              {matrixRows.map((row) => (
                <tr key={row[0]}>
                  <td>{row[0]}</td>
                  <td>{row[1]}</td>
                  <td>{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className={styles.notesSection} aria-labelledby="notes-heading">
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>Design rationale</p>
          <h2 id="notes-heading">Why this version is easier to read</h2>
        </div>

        <div className={styles.notesGrid}>
          <article className={styles.noteCard}>
            <h3>Rule first</h3>
            <p>
              The original slide makes the reader decode the architecture before they can understand the
              billing principle. This version states the billing rule up front.
            </p>
          </article>
          <article className={styles.noteCard}>
            <h3>Workflow second</h3>
            <p>
              The 6-step sequence preserves the original logic but reduces competition between icons,
              borders, and side annotations.
            </p>
          </article>
          <article className={styles.noteCard}>
            <h3>Decision table last</h3>
            <p>
              Readers who do not want the whole story can jump straight to the matrix and still leave
              with the correct billing answer.
            </p>
          </article>
        </div>
      </section>

      <section className={styles.executiveSection}>
        <p className={styles.executiveLabel}>Executive reading</p>
        <p className={styles.executiveText}>
          GitHub remains the control plane. Claude usage stays on subscription when interactive, and
          moves to separate Agent SDK credit when automated or programmatic.
        </p>
      </section>
    </main>
  );
}
