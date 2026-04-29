'use client';

import { useState } from 'react';

type Level = {
  id: string;
  name: string;
  extra?: string;
  status: string;
  mult: string;
  multDesc: string;
  timeframe: string;
  accentColor: string;
  lightBg: string;
  badgeBg: string;
  badgeText: string;
  desc: string;
  focus: string[];
  whatChanges: string;
  toAdvance: string[];
};

const LEVELS: Level[] = [
  {
    id: 'L1', name: 'Ad-Hoc', status: 'Baseline',
    mult: '1×', multDesc: 'developer baseline', timeframe: 'Starting point',
    accentColor: '#6B7280', lightBg: '#F9FAFB', badgeBg: '#E5E7EB', badgeText: '#374151',
    desc: 'Individuals copy-pasting from ChatGPT. No shared workflows, no governance, purely reactive AI usage across isolated developers. AI is a curiosity, not a workflow.',
    focus: ['Chat + Copy-Paste', 'Manual review', 'Individual usage', 'No governance'],
    whatChanges: 'Nothing yet — this is the default state for most teams. AI is a curiosity, not a workflow.',
    toAdvance: [
      'Standardize on an AI-assisted editor (Copilot, Cursor)',
      'Establish shared prompt patterns across the team',
      'Track basic AI contribution metrics from the first sprint',
    ],
  },
  {
    id: 'L2', name: 'Augmented', status: 'Industry Avg',
    mult: '1.1×', multDesc: 'developer output', timeframe: '~1 month to establish',
    accentColor: '#D97706', lightBg: '#FFFBEB', badgeBg: '#FDE68A', badgeText: '#92400E',
    desc: 'Teams using Copilots or Cursor. Humans write and edit code synchronously. AI is a fast autocomplete, not an autonomous agent. The bottleneck is still human throughput.',
    focus: ['AI-assisted editing', 'Inline suggestions', 'Prompt-driven snippets', 'Synchronous review'],
    whatChanges: 'Speed increases marginally. Humans remain in the critical path for every line. Gains are real but limited by synchronous handoffs.',
    toAdvance: [
      'Develop failure-mode intuition — learn when to trust and when to override agents',
      'Begin delegating full tasks (not just lines) to coding agents',
      'Instrument PR reviews to measure AI contribution percentage',
    ],
  },
  {
    id: 'L3', name: 'Harnessed', status: 'The Next Step',
    mult: '2×', multDesc: 'developer output', timeframe: '4–6 months to master',
    accentColor: '#4648D4', lightBg: '#EEF2FF', badgeBg: '#C7D2FE', badgeText: '#3730A3',
    desc: 'Agents write code autonomously; humans review PRs. The supervision model is explicit: agents propose, humans validate. Failure-mode intuition is the critical skill at this stage.',
    focus: ['Coding agents', 'PR-level supervision', 'Failure-mode intuition', 'Explicit review gates'],
    whatChanges: 'Human role shifts from writer to reviewer. Output doubles but requires disciplined supervision workflows. Quality degrades without review discipline.',
    toAdvance: [
      'Build automated quality gates into CI/CD pipelines',
      'Shift to decoupled agent validation (not line-by-line review)',
      'Establish a guardrail mesh before expanding agent autonomy further',
    ],
  },
  {
    id: 'L4', name: 'Autonomous', extra: '(Symphony)', status: 'Target State',
    mult: '5×', multDesc: 'developer output', timeframe: '3+ months to stabilize',
    accentColor: '#059669', lightBg: '#ECFDF5', badgeBg: '#A7F3D0', badgeText: '#065F46',
    desc: 'Agents write, test, and merge. Humans design specs and architecture. The CI/CD pipeline runs autonomously with human governance at the edges only.',
    focus: ['Autonomous pipelines', 'Spec & architecture design', 'Guardrail mesh', 'Edge governance'],
    whatChanges: 'Humans become system designers, not code writers. Supervision shifts entirely to architecture decisions and escalation protocols.',
    toAdvance: [
      'Coordinate specialized agent teams running in parallel streams',
      'Upgrade system infrastructure rather than watching individual agent output',
      'Establish inter-agent communication and task routing protocols',
    ],
  },
  {
    id: 'L5', name: 'Orchestrated', extra: '(Fleet)', status: 'Frontier',
    mult: '10×', multDesc: 'developer output', timeframe: 'Continuous systemic evolution',
    accentColor: '#7C3AED', lightBg: '#F5F3FF', badgeBg: '#DDD6FE', badgeText: '#4C1D95',
    desc: 'Multi-agent systems coordinate specialized teams in parallel. Humans govern architecture and guardrails only. Scaling happens through system design, not headcount. The organization itself becomes a programmable execution system.',
    focus: ['Multi-agent orchestration', 'Systemic scaling', 'Fleet governance', 'Architecture-only humans'],
    whatChanges: 'Strategy is human; execution is fleet-scale autonomous. The leverage is architectural: upgrading the system multiplies every agent simultaneously.',
    toAdvance: [
      'This is the frontier — the field is still defining what comes next.',
      'Contribute to emerging standards for multi-agent governance and inter-agent protocols.',
    ],
  },
];

const CURRENT_IDX = 1;

export function MaturityIndex() {
  const [selected, setSelected] = useState(CURRENT_IDX);
  const lv = LEVELS[selected];
  const showTrap = selected >= 3;

  return (
    <section className="section s-canvas" id="maturity-index" aria-labelledby="mi-heading">
      <div className="section-inner">

        {/* Header */}
        <div className="mi-head" data-reveal="">
          <div className="mi-head-left">
            <span className="eyebrow">AI Engineering Maturity Scale</span>
            <h2 id="mi-heading" className="mi-heading">Where does your team stand?</h2>
            <p className="mi-sub">
              5 stages from ad-hoc AI usage to full fleet orchestration.
              Click any level to explore what it means and how to advance.
            </p>
          </div>
          <div className="mi-kpi" aria-live="polite" aria-atomic="true">
            <strong className="mi-kpi-val" style={{ color: lv.accentColor }}>{lv.id}</strong>
            <span className="mi-kpi-label">selected level</span>
          </div>
        </div>

        {/* Node row */}
        <div className="mi-nodes" data-reveal="" role="tablist" aria-label="AI Engineering Maturity Levels">
          {LEVELS.map((level, i) => (
            <div key={level.id} className="mi-node-wrap">
              <button
                role="tab"
                aria-selected={i === selected}
                aria-controls="mi-detail-panel"
                className={`mi-node${i === selected ? ' mi-node-active' : ''}`}
                style={{ '--mi-accent': level.accentColor } as React.CSSProperties}
                onClick={() => setSelected(i)}
              >
                <span className="mi-node-id">{level.id}</span>
                <span className="mi-node-name">{level.name}</span>
                {level.extra && <span className="mi-node-extra">{level.extra}</span>}
                <span className="mi-node-mult">{level.mult}</span>
                <span className="mi-badge" style={{ background: level.badgeBg, color: level.badgeText }}>
                  {level.status}
                </span>
                {i === CURRENT_IDX && (
                  <span className="mi-here">
                    <span className="mi-here-dot" />
                    you are here
                  </span>
                )}
              </button>

              {i < LEVELS.length - 1 && (
                i === 2
                  ? <div className="mi-conn mi-conn-trap" title="Shortcut trap — do not skip L3" aria-hidden="true">
                      <div className="mi-conn-line mi-conn-line-warn" />
                      <span className="mi-conn-icon">⚠</span>
                    </div>
                  : <div className="mi-conn" aria-hidden="true">
                      <div className="mi-conn-line" />
                      <span className="mi-conn-arr">→</span>
                    </div>
              )}
            </div>
          ))}
        </div>

        {/* Shortcut trap warning */}
        {showTrap && (
          <div className="mi-trap" role="alert">
            <span className="mi-trap-icon" aria-hidden="true">⚠</span>
            <div>
              <div className="mi-trap-title">The Shortcut Trap</div>
              <p className="mi-trap-body">
                Jumping from L2 → L4 without mastering L3 leads to brittle systems and supervision failures.
                L3 failure-mode intuition is non-negotiable infrastructure — not a nice-to-have. Don&apos;t go too fast.
              </p>
            </div>
          </div>
        )}

        {/* Detail panel */}
        <div
          id="mi-detail-panel"
          className="mi-detail"
          style={{ '--mi-accent': lv.accentColor } as React.CSSProperties}
          role="tabpanel"
          key={selected}
        >
          <div className="mi-detail-top">
            <div className="mi-detail-left">
              <div className="mi-detail-id" style={{ color: lv.accentColor }}>
                {lv.id} · {lv.status}
              </div>
              <div className="mi-detail-name">
                <span style={{ color: lv.accentColor }}>{lv.name}</span>
                {lv.extra && <span className="mi-detail-extra"> {lv.extra}</span>}
              </div>
              <span className="mi-badge" style={{ background: lv.badgeBg, color: lv.badgeText }}>
                {lv.status}
              </span>
            </div>
            <div className="mi-detail-right" style={{ color: lv.accentColor }}>
              <div className="mi-detail-mult">{lv.mult}</div>
              <div className="mi-detail-mult-desc">{lv.multDesc}</div>
              <div className="mi-detail-timeframe">{lv.timeframe}</div>
            </div>
          </div>

          <p className="mi-detail-desc">{lv.desc}</p>

          <div className="mi-detail-cols">
            <div>
              <span className="mi-section-label">Focus areas</span>
              <div className="mi-tags">
                {lv.focus.map(f => (
                  <span
                    key={f}
                    className="mi-tag"
                    style={{ background: lv.lightBg, borderColor: lv.accentColor + '55', color: lv.accentColor }}
                  >
                    {f}
                  </span>
                ))}
              </div>
              <span className="mi-section-label" style={{ marginTop: '16px' }}>What changes</span>
              <p className="mi-what">{lv.whatChanges}</p>
            </div>
            <div>
              <span className="mi-section-label">
                {selected < 4 ? `To advance to ${LEVELS[selected + 1].id}` : 'At the frontier'}
              </span>
              <ul className="mi-advance">
                {lv.toAdvance.map(t => <li key={t}>{t}</li>)}
              </ul>
            </div>
          </div>
        </div>

        {/* Takeaway */}
        <p className="mi-takeaway">
          <strong>Key takeaway:</strong> AI maturity is not defined by the tools you buy,
          but by the autonomy of your CI/CD pipelines and the discipline of your supervision model.
        </p>

      </div>
    </section>
  );
}
