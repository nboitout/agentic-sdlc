'use client';

import { useState } from 'react';
import { copy, type LanguageCode } from '@/lib/i18n';

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

const LEVELS_FR: Level[] = [
  {
    id: 'L1', name: 'Ad Hoc', status: 'Baseline',
    mult: '1×', multDesc: 'base développeur', timeframe: 'Point de départ',
    accentColor: '#6B7280', lightBg: '#F9FAFB', badgeBg: '#E5E7EB', badgeText: '#374151',
    desc: "Individus copiant-collant depuis ChatGPT. Pas de workflows partagés, pas de gouvernance, usage purement réactif de l'IA. L'IA est une curiosité, pas un workflow.",
    focus: ['Chat + Copier-Coller', 'Revue manuelle', 'Usage individuel', 'Pas de gouvernance'],
    whatChanges: "Rien encore — c'est l'état par défaut de la plupart des équipes. L'IA est une curiosité, pas un workflow.",
    toAdvance: [
      "Standardiser sur un éditeur assisté par IA (Copilot, Cursor)",
      "Établir des patterns de prompts partagés dans l'équipe",
      "Suivre des métriques de contribution IA basiques dès le premier sprint",
    ],
  },
  {
    id: 'L2', name: 'Augmented', status: 'Moyenne du marché',
    mult: '1,1×', multDesc: 'output développeur', timeframe: "Environ 1 mois pour l'établir",
    accentColor: '#D97706', lightBg: '#FFFBEB', badgeBg: '#FDE68A', badgeText: '#92400E',
    desc: "Les équipes utilisent Copilot ou Cursor. Les développeurs écrivent et modifient encore le code de manière synchrone. L'IA agit surtout comme un autocomplete accéléré, pas comme un agent autonome. Le goulet d'étranglement reste le débit humain.",
    focus: ['Édition assistée par IA', 'Suggestions inline', 'Snippets pilotés par prompt', 'Revue synchrone'],
    whatChanges: "La vitesse augmente, mais à la marge. Les humains restent dans le chemin critique de chaque changement. Les gains sont réels, mais restent limités par des boucles de travail synchrones.",
    toAdvance: [
      "Développer une intuition des modes de défaillance : savoir quand faire confiance aux agents et quand reprendre la main.",
      "Commencer à déléguer des tâches complètes aux agents de codage, et non plus seulement des lignes de code.",
      "Instrumenter les revues de PR pour mesurer le pourcentage de contribution IA.",
    ],
  },
  {
    id: 'L3', name: 'Harnessed', status: 'Prochaine étape',
    mult: '2×', multDesc: 'output développeur', timeframe: '4–6 mois pour maîtriser',
    accentColor: '#4648D4', lightBg: '#EEF2FF', badgeBg: '#C7D2FE', badgeText: '#3730A3',
    desc: "Les agents écrivent du code de manière autonome ; les humains revuent les PR. Le modèle de supervision est explicite : les agents proposent, les humains valident. L'intuition des modes de défaillance est la compétence critique à ce stade.",
    focus: ['Agents de codage', 'Supervision au niveau PR', 'Intuition des modes de défaillance', 'Gates de revue explicites'],
    whatChanges: "Le rôle humain passe de rédacteur à réviseur. La production double mais nécessite des workflows de supervision disciplinés. La qualité se dégrade sans discipline de revue.",
    toAdvance: [
      "Intégrer des gates de qualité automatisés dans les pipelines CI/CD",
      "Passer à la validation découplée des agents (pas de revue ligne par ligne)",
      "Établir un maillage de garde-fous avant d'étendre davantage l'autonomie des agents",
    ],
  },
  {
    id: 'L4', name: 'Autonomous', extra: '(Symphony)', status: 'État cible',
    mult: '5×', multDesc: 'output développeur', timeframe: '3+ mois pour stabiliser',
    accentColor: '#059669', lightBg: '#ECFDF5', badgeBg: '#A7F3D0', badgeText: '#065F46',
    desc: "Les agents écrivent, testent et fusionnent. Les humains conçoivent les specs et l'architecture. Le pipeline CI/CD s'exécute de manière autonome avec une gouvernance humaine uniquement aux bords.",
    focus: ['Pipelines autonomes', 'Conception de specs & architecture', 'Maillage de garde-fous', 'Gouvernance aux bords'],
    whatChanges: "Les humains deviennent des concepteurs de systèmes, pas des rédacteurs de code. La supervision se déplace entièrement vers les décisions d'architecture et les protocoles d'escalade.",
    toAdvance: [
      "Coordonner des équipes d'agents spécialisés en flux parallèles",
      "Améliorer l'infrastructure système plutôt que surveiller les outputs individuels des agents",
      "Établir des protocoles de communication inter-agents et de routage des tâches",
    ],
  },
  {
    id: 'L5', name: 'Orchestrated', extra: '(Fleet)', status: 'Frontière',
    mult: '10×', multDesc: 'output développeur', timeframe: 'Évolution systémique continue',
    accentColor: '#7C3AED', lightBg: '#F5F3FF', badgeBg: '#DDD6FE', badgeText: '#4C1D95',
    desc: "Des systèmes multi-agents coordonnent des équipes spécialisées en parallèle. Les humains gouvernent uniquement l'architecture et les garde-fous. La mise à l'échelle se fait par la conception de systèmes, pas par les effectifs. L'organisation devient elle-même un système d'exécution programmable.",
    focus: ["Orchestration multi-agents", "Mise à l'échelle systémique", "Gouvernance de flotte", "Humains uniquement pour l'architecture"],
    whatChanges: "La stratégie est humaine ; l'exécution est à l'échelle de la flotte. L'effet de levier est architectural : améliorer le système multiplie simultanément tous les agents.",
    toAdvance: [
      "C'est la frontière — le domaine définit encore ce qui vient ensuite.",
      "Contribuer aux standards émergents pour la gouvernance multi-agents et les protocoles inter-agents.",
    ],
  },
];

const LEVELS_RO: Level[] = [
  {
    id: 'L1', name: 'Ad Hoc', status: 'Nivel de referință',
    mult: '1×', multDesc: 'productivitate developer', timeframe: 'Punct de start',
    accentColor: '#6B7280', lightBg: '#F9FAFB', badgeBg: '#E5E7EB', badgeText: '#374151',
    desc: 'Persoane care copiază-lipesc din ChatGPT. Niciun workflow comun, nicio guvernanță, utilizare pur reactivă a AI. AI este o curiozitate, nu un workflow.',
    focus: ['Chat + Copy-Paste', 'Review manual', 'Utilizare individuală', 'Fără guvernanță'],
    whatChanges: 'Încă nimic — acesta este stadiul implicit al majorității echipelor. AI este o curiozitate, nu un workflow.',
    toAdvance: [
      'Standardizați pe un editor asistat de AI (Copilot, Cursor)',
      'Stabiliți pattern-uri de prompt partajate în echipă',
      'Urmăriți metrici de bază ale contribuției AI încă din primul sprint',
    ],
  },
  {
    id: 'L2', name: 'Augmented', status: 'Media industriei',
    mult: '1.1×', multDesc: 'productivitate developer', timeframe: '~1 lună pentru stabilizare',
    accentColor: '#D97706', lightBg: '#FFFBEB', badgeBg: '#FDE68A', badgeText: '#92400E',
    desc: 'Echipe care folosesc Copilot sau Cursor. Oamenii scriu și editează cod sincron. AI funcționează ca un autocomplete rapid, nu ca un agent autonom. Bottleneck-ul rămâne capacitatea umană de execuție.',
    focus: ['AI-assisted editing', 'Inline suggestions', 'Prompt-driven snippets', 'Synchronous review'],
    whatChanges: 'Viteza crește marginal. Oamenii rămân pe calea critică pentru fiecare linie de cod. Câștigurile sunt reale, dar rămân limitate de handoff-urile sincrone.',
    toAdvance: [
      'Dezvoltați intuiție privind modurile de eșec: când trebuie să aveți încredere în agenți și când trebuie să interveniți.',
      'Începeți să delegați task-uri complete către coding agents, nu doar linii de cod.',
      'Instrumentați review-urile de PR pentru a măsura procentul contribuției AI.',
    ],
  },
  {
    id: 'L3', name: 'Harnessed', status: 'Următorul pas',
    mult: '2×', multDesc: 'productivitate developer', timeframe: '4–6 luni pentru a stăpâni',
    accentColor: '#4648D4', lightBg: '#EEF2FF', badgeBg: '#C7D2FE', badgeText: '#3730A3',
    desc: 'Agenții scriu cod autonom; oamenii revizuiesc PR-urile. Modelul de supervizare este explicit: agenții propun, oamenii validează. Intuiția privind modurile de eșec este abilitatea critică la acest stadiu.',
    focus: ['Coding agents', 'Supervizare la nivel PR', 'Intuiție moduri de eșec', 'Gates de review explicite'],
    whatChanges: 'Rolul uman trece de la scriitor la reviewer. Producția se dublează, dar necesită workflow-uri disciplinate de supervizare. Calitatea se degradează fără disciplina de review.',
    toAdvance: [
      'Integrați gates de calitate automatizate în pipeline-urile CI/CD',
      'Treceți la validarea decuplată a agenților (nu review linie cu linie)',
      'Stabiliți un guardrail mesh înainte de a extinde autonomia agenților',
    ],
  },
  {
    id: 'L4', name: 'Autonomous', extra: '(Symphony)', status: 'Starea-țintă',
    mult: '5×', multDesc: 'productivitate developer', timeframe: '3+ luni pentru stabilizare',
    accentColor: '#059669', lightBg: '#ECFDF5', badgeBg: '#A7F3D0', badgeText: '#065F46',
    desc: 'Agenții scriu, testează și fac merge. Oamenii proiectează specs și arhitectura. Pipeline-ul CI/CD rulează autonom cu guvernanță umană doar la margini.',
    focus: ['Pipeline-uri autonome', 'Design specs & arhitectură', 'Guardrail mesh', 'Guvernanță la margini'],
    whatChanges: 'Oamenii devin proiectanți de sisteme, nu scriitori de cod. Supervizarea se mută complet către decizii de arhitectură și protocoale de escaladare.',
    toAdvance: [
      'Coordonați echipe de agenți specializați care rulează în fluxuri paralele',
      'Îmbunătățiți infrastructura sistemului în loc să monitorizați output-ul individual al agenților',
      'Stabiliți protocoale de comunicare inter-agenți și rutare de task-uri',
    ],
  },
  {
    id: 'L5', name: 'Orchestrated', extra: '(Fleet)', status: 'Frontieră',
    mult: '10×', multDesc: 'productivitate developer', timeframe: 'Evoluție sistemică continuă',
    accentColor: '#7C3AED', lightBg: '#F5F3FF', badgeBg: '#DDD6FE', badgeText: '#4C1D95',
    desc: 'Sisteme multi-agent coordonează echipe specializate în paralel. Oamenii guvernează doar arhitectura și guardrail-urile. Scalarea se face prin design de sisteme, nu prin headcount. Organizația devine ea însăși un sistem de execuție programabil.',
    focus: ['Orchestrare multi-agent', 'Scalare sistemică', 'Guvernanță flotei', 'Oameni doar pentru arhitectură'],
    whatChanges: 'Strategia este umană; execuția este la scara flotei. Efectul de pârghie este arhitectural: îmbunătățirea sistemului multiplică simultan toți agenții.',
    toAdvance: [
      'Aceasta este frontiera — domeniul încă definește ce urmează.',
      'Contribuiți la standardele emergente pentru guvernanța multi-agent și protocoalele inter-agenți.',
    ],
  },
];

const CURRENT_IDX = 1;

export function MaturityIndex({ language = 'en' }: { language?: LanguageCode }) {
  const [selected, setSelected] = useState(CURRENT_IDX);
  const levels = language === 'fr' ? LEVELS_FR : language === 'ro' ? LEVELS_RO : LEVELS;
  const lv = levels[selected];
  const m = copy[language]?.maturity ?? copy.en.maturity!;
  const showTrap = selected >= 3;

  return (
    <section className="section s-canvas" id="maturity-index" aria-labelledby="mi-heading">
      <div className="section-inner">

        {/* Header */}
        <div className="mi-head" data-reveal="">
          <div className="mi-head-left">
            <span className="eyebrow">{m.eyebrow}</span>
            <div className="mi-heading-row">
              <h2 id="mi-heading" className="mi-heading">{m.heading}</h2>
              <a
                href="https://nboitout.github.io/Blog-Agentic-SDLC/en/executive-self-assessment/"
                className="btn btn-ghost mi-cta"
                target="_blank"
                rel="noreferrer"
              >
                {m.ctaLabel}
              </a>
            </div>
            <p className="mi-sub">{m.sub}</p>
          </div>
          <div className="mi-kpi" aria-live="polite" aria-atomic="true">
            <strong className="mi-kpi-val" style={{ color: lv.accentColor }}>{lv.id}</strong>
            <span className="mi-kpi-label">{m.selectedLevel}</span>
          </div>
        </div>

        {/* Node row */}
        <div className="mi-nodes" data-reveal="" role="tablist" aria-label="AI Engineering Maturity Levels" data-carousel="track">
          {levels.map((level, i) => (
            <div key={level.id} className="mi-node-wrap" data-carousel-slide={i}>
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
                    {m.youAreHere}
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

        {/* Carousel dots — visible on mobile only */}
        <div
          className="carousel-dots mi-dots"
          data-carousel="dots"
          role="tablist"
          aria-label="Maturity level navigation"
        >
          {levels.map((level, i) => (
            <button
              key={level.id}
              type="button"
              className="carousel-dot"
              data-dot-index={i}
              role="tab"
              aria-label={`Go to ${level.id}: ${level.name}`}
              aria-selected={i === selected}
              tabIndex={-1}
            />
          ))}
        </div>

        {/* Shortcut trap warning */}
        {showTrap && (
          <div className="mi-trap" role="alert">
            <span className="mi-trap-icon" aria-hidden="true">⚠</span>
            <div>
              <div className="mi-trap-title">{m.shortcutTrapTitle}</div>
              <p className="mi-trap-body">{m.shortcutTrapBody}</p>
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
              <span className="mi-section-label">{m.focusAreas}</span>
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
              <span className="mi-section-label" style={{ marginTop: '16px' }}>{m.whatChanges}</span>
              <p className="mi-what">{lv.whatChanges}</p>
            </div>
            <div>
              <span className="mi-section-label">
                {selected < 4 ? `${m.toAdvanceTo} ${levels[selected + 1].id}` : m.atFrontier}
              </span>
              <ul className="mi-advance">
                {lv.toAdvance.map(t => <li key={t}>{t}</li>)}
              </ul>
            </div>
          </div>
        </div>

        {/* Takeaway */}
        <p className="mi-takeaway">
          <strong>{m.keyTakeaway}</strong> {m.keyTakeawayText}
        </p>

      </div>
    </section>
  );
}
