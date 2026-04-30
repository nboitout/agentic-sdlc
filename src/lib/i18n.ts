export const languages = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'fr', label: 'FR', name: 'Français' },
  { code: 'de', label: 'DE', name: 'Deutsch' },
  { code: 'es', label: 'ES', name: 'Español' },
  { code: 'it', label: 'IT', name: 'Italiano' },
  { code: 'pt', label: 'PT', name: 'Português' },
  { code: 'nl', label: 'NL', name: 'Nederlands' },
  { code: 'pl', label: 'PL', name: 'Polski' },
  { code: 'sv', label: 'SV', name: 'Svenska' },
  { code: 'da', label: 'DA', name: 'Dansk' },
  { code: 'fi', label: 'FI', name: 'Suomi' },
  { code: 'ro', label: 'RO', name: 'Română' },
  { code: 'cs', label: 'CS', name: 'Čeština' },
  { code: 'hu', label: 'HU', name: 'Magyar' },
  { code: 'hr', label: 'HR', name: 'Hrvatski' },
  { code: 'ru', label: 'RU', name: 'Русский' },
  { code: 'uk', label: 'UA', name: 'Українська' },
  { code: 'bg', label: 'BG', name: 'Български' },
  { code: 'sr', label: 'SR', name: 'Српски' },
  { code: 'el', label: 'EL', name: 'Ελληνικά' },
  { code: 'tr', label: 'TR', name: 'Türkçe' },
] as const;

export type LanguageCode = (typeof languages)[number]['code'];

export const defaultLanguage: LanguageCode = 'en';

export type SiteCopy = {
  meta: {
    title: string;
  };
  nav: {
    primaryLabel: string;
    beyond: string;
    blueprint: string;
    metrics: string;
    contact: string;
    blog: string;
    language: string;
  };
  hero: {
    eyebrow: string;
    h1Prefix: string;
    h1Rest: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    liveLabel: string;
    pipeline: string;
    steps: string[];
    eventsLabel: string;
    events: { time: string; message: string; status: 'ok' | 'warn' }[];
    supervision: string;
    coverage: string;
    aiContribution: string;
    rework: string;
    quality: string;
    agentPool: string;
    agentPoolStatus: string;
    connectorLeftLabel: string;
    connectorLeftDesc: string;
    connectorCenter: string;
    connectorRightLabel: string;
    connectorRightDesc: string;
  };
  beyond: {
    eyebrow: string;
    heading: string;
    lead: string;
    paragraphs: string[];
    triplet: string[];
    bridge: string;
    postEquationLead: string;
    disclaimer: string;
    implication: string;
    challengeIntro: string;
    strategicCallout: string;
    challengeBody: string;
    answerLead: string;
    answerBody: string;
    before: string;
    beforeValue: string;
    beforeCaption: string;
    now: string;
    nowValue: string;
    nowCaption: string;
    exampleLeftLabel: string;
    exampleLeftValue: string;
    exampleRightLabel: string;
    exampleRightValue: string;
    clientsEyebrow: string;
    clientsTitle: string;
    bullets: string[];
    cards: { title: string; text: string; num: string }[];
    closing: string;
    equation: {
      eyebrow: string;
      heading: string;
      termOneLabel: string;
      termOne: string;
      termTwoLabel: string;
      termTwo: string;
      result: string;
      annotations: string[];
      chartLabel: string;
      chartXLabel: string;
      chartYLabel: string;
      note: string;
    };
  };
  core: {
    eyebrow: string;
    heading: string;
    body: string;
    cards: { icon: string; title: string; text: string }[];
  };
  metrics: {
    eyebrow: string;
    heading: string;
    body: string;
    measuredLabel: string;
    items: { name: string; desc: string }[];
    planes: {
      quant: {
        tag: string;
        title: string;
        body: string;
        familiesLabel: string;
        families: { num: string; title: string; summary: string; signals: string[] }[];
      };
      perception: {
        tag: string;
        title: string;
        body: string;
        baselineLabel: string;
        baselineCount: string;
        baselineSummary: string;
        branchesLabel: string;
        branches: { icon: string; title: string; count: string; summary: string }[];
        note: string;
      };
    };
    statement: string;
    statementBody: string;
    supervisionCoverage: string;
    reworkReduction: string;
    velocityTitle: string;
    velocityText: string;
    traceability: string;
    unreviewedMerges: string;
    charts: {
      sandboxEyebrow: string;
      sandboxTitle: string;
      sandboxBody: string;
      sandboxData: { name: string; value: number }[];
      factoryEyebrow: string;
      factoryTitle: string;
      factoryBody: string;
      upliftData: { metric: string; sandbox: number; factory: number }[];
      sandboxLegend: string;
      factoryLegend: string;
    };
  };
  audience: {
    eyebrow: string;
    heading: string;
    body: string;
    cards: { icon: string; title: string; text: string }[];
  };
  blueprint: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    levelsLabel: string;
    levels: { title: string; text: string }[];
    cards: { title: string; text: string }[];
  };
  engagement: {
    eyebrow: string;
    heading: string;
    body: string;
    quote: string;
  };
  contact: {
    eyebrow: string;
    heading: string;
    body: string;
    cta: string;
    email: string;
  };
  footer: {
    brand: string;
    tagline: string;
  };
};

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends Array<infer U>
    ? T[K]
    : T[K] extends object
      ? DeepPartial<T[K]>
      : T[K];
};

function mergeCopy(base: SiteCopy, overrides: DeepPartial<SiteCopy>): SiteCopy {
  const merge = <T,>(source: T, patch: DeepPartial<T>): T => {
    if (Array.isArray(source) || Array.isArray(patch) || typeof source !== 'object' || source === null) {
      return (patch ?? source) as T;
    }

    return Object.fromEntries(
      Object.entries(source).map(([key, value]) => [
        key,
        key in patch
          ? merge(value, (patch as Record<string, unknown>)[key] as DeepPartial<typeof value>)
          : value,
      ]),
    ) as T;
  };

  return merge(base, overrides);
}

export const copy = {
  en: {
    meta: {
      title: 'Agentic SDLC | AI-Enabled Software Delivery Transformation',
    },
    nav: {
      primaryLabel: 'Primary',
      beyond: 'Beyond T&M',
      blueprint: 'Blueprint',
      metrics: 'Metrics',
      contact: 'Contact',
      blog: 'Our Blog: Learn & Project',
      language: 'Language',
    },
    hero: {
      eyebrow: 'THE FUTURE OF SOFTWARE ENGINEERING',
      h1Prefix: 'Agentic SDLC:',
      h1Rest: 'From AI coding tools to reliable delivery systems.',
      subtitle: 'Move from AI experimentation to a delivery model your clients can trust.',
      primaryCta: 'Book an intro call',
      secondaryCta: 'Self-Assessment for Executives',
      liveLabel: 'Control LIVE · Agentic SDLC',
      pipeline: 'Delivery pipeline',
      steps: ['Plan', 'Build', 'Review', 'Ship', 'Measure'],
      eventsLabel: 'Live events',
      events: [
        { time: '14:02', message: 'agent-04 · merged PR #182', status: 'ok' },
        { time: '14:01', message: 'review queue · 2 items', status: 'warn' },
        { time: '13:57', message: 'policy check · passed', status: 'ok' },
        { time: '13:54', message: 'agent-02 · scaffolded module', status: 'ok' },
      ],
      supervision: 'Supervision',
      coverage: 'coverage',
      aiContribution: 'AI contrib.',
      rework: 'Rework',
      quality: 'Quality',
      agentPool: 'Agent pool',
      agentPoolStatus: 'online · 0 stalled',
      connectorLeftLabel: 'Classical T&M',
      connectorLeftDesc: 'Body shopping, billable days, long staffing cycles.',
      connectorCenter: 'Agentic SDLC also changes the business model of software delivery',
      connectorRightLabel: 'Programmable execution',
      connectorRightDesc: 'Short bursts, parallel streams, dynamic allocation.',
    },
    beyond: {
      eyebrow: 'Bench Management Becomes Critical',
      heading: 'Beyond Time & Materials: From Staffing to Outcome Delivery',
      lead: 'Staffing sold time. The next model sells reusable delivery capability.',
      paragraphs: [
        'Classical team augmentation was built for a world where execution was scarce, projects lasted years, and revenue scaled by keeping people staffed for as long as possible.',
      ],
      triplet: [
        'You sold profiles.',
        'You billed months.',
        'You grew by adding headcount.',
      ],
      bridge: 'Agentic software delivery changes that equation.',
      postEquationLead: 'With coding agents, software execution becomes more programmable, parallel, and time-compressed. The same delivery scope may require fewer people, shorter cycles, and more dynamic allocation of expertise.',
      disclaimer: 'This does not mean external teams disappear.',
      implication: 'But it does mean that long, static staffing commitments become harder to defend. Clients will increasingly ask for smaller, sharper teams that can enter a workflow, deliver a measurable outcome, and move on.',
      challengeIntro: 'For IT services firms, this creates a new operational challenge:',
      strategicCallout: 'bench management becomes strategic.',
      challengeBody: 'When missions get shorter, rotation increases. When rotation increases, unused capacity becomes more visible. And when clients buy outcomes instead of months, the provider can no longer rely only on long-duration staffing to absorb its workforce.',
      answerLead: 'The answer is not simply to reduce headcount.',
      answerBody: 'The answer is to build a delivery model where talent can be rapidly assembled, deployed, governed, measured, and redeployed across outcome-based missions.',
      before: 'Before',
      beforeValue: 'people × time',
      beforeCaption: 'billable days · stable staffing · long projects',
      now: 'Now',
      nowValue: 'outcome pods',
      nowCaption: 'parallel streams · short cycles · dynamic allocation',
      exampleLeftLabel: 'Classical T&M',
      exampleLeftValue: '5 engineers for 18 months',
      exampleRightLabel: 'Outcome delivery',
      exampleRightValue: '1 embedded pod for 4-6 weeks',
      clientsEyebrow: 'What changes for clients',
      clientsTitle: 'The decision is no longer how many people to staff for how many months.',
      bullets: [
        'Which business workflow should we transform first?',
        'What outcome should the pod be accountable for?',
        'Which agentic workflows can safely move into production?',
        'What governance, supervision, and metrics are required from day one?',
        'When should capacity ramp up, shut down, or restart?',
      ],
      cards: [
        { title: 'Embedded', text: "Delivery moves closer to the client's real workflows, systems, data, and operating constraints.", num: '01' },
        { title: 'Cross-functional', text: 'The unit of work is no longer an isolated profile. It is a pod combining engineering, product, cloud, data, integration, and governance.', num: '02' },
        { title: 'Production-oriented', text: 'The goal is not a demo or a proof of concept. The goal is a usable system connected to real workflows, with supervision, observability, and escalation paths.', num: '03' },
        { title: 'Outcome-measured', text: 'Success is measured through business impact, adoption, quality, cycle time, risk reduction, and operational reliability, not only billable days consumed.', num: '04' },
      ],
      closing: 'That is where a dedicated Software Engineering Practice becomes critical.',
      equation: {
        eyebrow: 'Bench Management is now critical',
        heading: 'The Legacy Equation of Classical Augmentation',
        termOneLabel: 'Term 01',
        termOne: 'Headcount',
        termTwoLabel: 'Term 02',
        termTwo: 'Billable Months',
        result: 'Legacy Capacity',
        annotations: [
          'Assumes execution is scarce.',
          'Requires stable, long-term staffing.',
          'Sells time, not results.',
        ],
        chartLabel: 'Linear scaling',
        chartXLabel: 'headcount',
        chartYLabel: 'capacity',
        note: 'Scaling delivery relies entirely on adding headcount or more billable months.',
      },
    },
    core: {
      eyebrow: 'Core shift',
      heading: "Core shift of the developer's role.",
      body: 'As coding agents take on more work, developers do not disappear. Their role changes. The new challenge is supervision: what to delegate, what to review, what to validate, and what not to automate blindly.',
      cards: [
        { icon: 'hub', title: 'What to delegate', text: 'Decide where coding agents can move fast without creating hidden operational debt.' },
        { icon: 'fact_check', title: 'What to review', text: 'Make supervision explicit so validation, approval, and escalation are built into the workflow.' },
        { icon: 'shield_person', title: 'What not to automate blindly', text: 'Protect quality, accountability, and client trust where human judgment still matters most.' },
      ],
    },
    metrics: {
      eyebrow: 'Metrics',
      heading: 'Without metrics, there is no transformation.',
      body: 'Adoption only scales when both planes are observed: what the system produces, and how the people inside it experience it. We instrument both — continuously and quarterly — so the operating model has ground truth instead of anecdote.',
      measuredLabel: 'What must be measured',
      items: [
        { name: 'AI contribution', desc: 'Share of work authored by coding agents per sprint' },
        { name: 'Rework', desc: 'PRs that revisit already-reviewed code paths' },
        { name: 'Quality', desc: 'Coverage score, lint pass rate, and test health' },
        { name: 'Supervision', desc: 'Human review coverage across all agent-merged PRs' },
      ],
      planes: {
        quant: {
          tag: 'Plane 01 · Quantitative · continuous',
          title: 'What the system produces',
          body: 'Telemetry from the agentic factory. Five signal families, instrumented in the pipeline, refreshed on every run.',
          familiesLabel: 'Signal families',
          families: [
            {
              num: '01',
              title: 'Adoption surface',
              summary: 'Who is using AI, where, and how often.',
              signals: ['Active users', 'Phase coverage', 'Tool penetration', 'Session depth'],
            },
            {
              num: '02',
              title: 'Acceptance & quality',
              summary: 'Whether the output is trusted enough to ship.',
              signals: ['Acceptance rate', 'Review cycles', 'Defect rate', 'Coverage delta'],
            },
            {
              num: '03',
              title: 'Velocity (DORA, segmented)',
              summary: 'DORA metrics, split by agent involvement.',
              signals: ['Lead time', 'Deploy frequency', 'Change-failure rate', 'MTTR'],
            },
            {
              num: '04',
              title: 'Agent behavior',
              summary: 'How well agents calibrate to their guardrails.',
              signals: ['Escalation quality', 'Supervision burden', 'Iteration depth', 'Goal completion'],
            },
            {
              num: '05',
              title: 'Cost & return',
              summary: 'Whether the math is moving in the right direction.',
              signals: ['Token spend', 'Cost per accepted change', 'ROI proxy', 'Wallet anomalies'],
            },
          ],
        },
        perception: {
          tag: 'Plane 02 · Perception · quarterly',
          title: 'What people experience',
          body: 'A proprietary quarterly survey. A common baseline for everyone, then a role-specific branch routed automatically.',
          baselineLabel: 'Common baseline',
          baselineCount: 'For every respondent',
          baselineSummary: 'Calibrates role, engagement model, AI usage frequency, autonomy level, and learning posture — the context every other answer is read against.',
          branchesLabel: 'Role branches',
          branches: [
            {
              icon: 'code',
              title: 'Developer',
              count: 'Coding-side branch',
              summary: 'Covers how AI shows up across the day-to-day developer loop, from authoring to verification, and how agentic tooling is adopted.',
            },
            {
              icon: 'rule',
              title: 'QA · Automation · Release Quality',
              count: 'Quality-side branch',
              summary: 'Covers AI in the test lifecycle — from scenario generation through maintenance, flakiness, and release-readiness decisions.',
            },
            {
              icon: 'lan',
              title: 'PM · PO · BA · Ops',
              count: 'Delivery-side branch',
              summary: 'Covers AI across planning, documentation, reporting, risk, and operational signals — the work around the code.',
            },
          ],
          note: 'Survey instrument is proprietary. Question set shared under engagement.',
        },
      },
      statement: 'Measurement over anecdote.',
      statementBody: 'What gets measured gets governed. The factory runs on numbers, not narrative.',
      supervisionCoverage: 'Supervision coverage',
      reworkReduction: 'Rework reduction',
      velocityTitle: 'Velocity with control',
      velocityText: 'Agent loops ship faster only when supervision, review, and escalation are measured in the same run.',
      traceability: 'Traceability',
      unreviewedMerges: 'Unreviewed merges',
      charts: {
        sandboxEyebrow: 'Today - Sandbox mode',
        sandboxTitle: 'Where developer time actually goes',
        sandboxBody: 'Most time is consumed by unplanned work and context switching - not delivery.',
        sandboxData: [
          { name: 'Unplanned debugging', value: 30 },
          { name: 'Manual coding', value: 28 },
          { name: 'Context switching', value: 22 },
          { name: 'Documentation', value: 12 },
          { name: 'Supervision overhead', value: 8 },
        ],
        factoryEyebrow: 'Target - Factory mode',
        factoryTitle: 'Metric uplift: sandbox vs factory',
        factoryBody: 'What structured supervision and measurement actually moves.',
        upliftData: [
          { metric: 'Supervision coverage', sandbox: 18, factory: 85 },
          { metric: 'AI contribution', sandbox: 12, factory: 68 },
          { metric: 'Delivery speed', sandbox: 100, factory: 155 },
          { metric: 'Quality score', sandbox: 62, factory: 88 },
          { metric: 'Rework reduction', sandbox: 100, factory: 152 },
        ],
        sandboxLegend: 'Sandbox',
        factoryLegend: 'Factory',
      },
    },
    audience: {
      eyebrow: 'Who this is for',
      heading: 'Built for teams that need AI speed with delivery accountability.',
      body: 'This engagement is for organizations already experimenting with AI coding tools and now looking for a durable operating model.',
      cards: [
        { icon: 'apartment', title: 'Engineering leaders', text: 'Teams moving from ad-hoc AI usage to governed delivery with measurable outcomes.' },
        { icon: 'terminal', title: 'Product & platform teams', text: 'Organizations standardizing AI-assisted workflows across planning, build, review, and release.' },
        { icon: 'handshake', title: 'Consultancies & service firms', text: 'Delivery groups that need speed gains without sacrificing supervision, quality, or accountability.' },
      ],
    },
    blueprint: {
      eyebrow: 'Blueprint',
      heading: 'AI tool adoption is not a delivery model.',
      paragraphs: [
        'Buying licenses and rolling out coding assistants does not tell a company how to deliver differently. The real challenge is to turn rising productivity and time compression into a new operating model.',
        'As delivery cycles shrink, the allocation of people becomes more dynamic. The question is no longer who sits on a project for 18 months. It becomes: what kind of execution system are we actually building?',
      ],
      levelsLabel: 'Three levels',
      levels: [
        { title: 'Agentic SDLC', text: 'How software delivery changes' },
        { title: 'Agentic engineering', text: 'How engineers work inside that model' },
        { title: 'Harness engineering', text: 'How agents are made reliable enough to participate' },
      ],
      cards: [
        { title: 'Ground truth first', text: 'Separate real adoption from demo culture, isolated prompting, and AI theater.' },
        { title: 'Prioritize the bottlenecks', text: 'Focus on where agentic workflows remove waiting time, handoffs, and rework.' },
        { title: 'Redesign supervision', text: 'Clarify what agents can do alone, what must be reviewed, and where escalation starts.' },
        { title: 'Instrument the system', text: 'Measure AI contribution, throughput, rework, quality, and supervision coverage.' },
        { title: 'Launch the next operating model', text: 'Turn the blueprint into a concrete sprint, pilot, or delivery transformation path.' },
      ],
    },
    engagement: {
      eyebrow: 'Engagement',
      heading: 'One sprint to define the operating model.',
      body: 'In a focused working sprint, we align leadership and engineering around a practical next step with clear priorities, governance, and measurement.',
      quote: 'One focused engagement to define the ground truth, the priorities, and the operating rules that make AI supervision real.',
    },
    contact: {
      eyebrow: 'Start the conversation',
      heading: 'Still in sandbox mode?',
      body: 'If AI is already entering your delivery workflows, the next step is not more experimentation. It is control, supervision, and measurable execution.',
      cta: 'Book an intro call',
      email: 'nicolas@agentic-sdlc.com',
    },
    footer: {
      brand: 'Agentic SDLC',
      tagline: 'AI-enabled software delivery transformation',
    },
  },
  fr: {
    meta: {
      title: 'Agentic SDLC | Transformation du delivery logiciel par l’IA',
    },
    nav: {
      primaryLabel: 'Navigation principale',
      beyond: 'Au-delà du T&M',
      blueprint: 'Blueprint',
      metrics: 'Métriques',
      contact: 'Contact',
      blog: 'Notre blog : apprendre & projet',
      language: 'Langue',
    },
    hero: {
      eyebrow: 'LE FUTUR DU SOFTWARE ENGINEERING',
      h1Prefix: 'Agentic SDLC :',
      h1Rest: 'Des outils de développement IA aux systèmes de delivery fiables.',
      subtitle: 'Passez de l’expérimentation IA à un modèle de delivery auquel vos clients peuvent faire confiance.',
      primaryCta: 'Réserver un appel découverte',
      secondaryCta: 'Auto-évaluation pour dirigeants',
      liveLabel: 'Contrôle LIVE · Agentic SDLC',
      pipeline: 'Pipeline de delivery',
      steps: ['Planifier', 'Construire', 'Revoir', 'Livrer', 'Mesurer'],
      eventsLabel: 'Événements en direct',
      events: [
        { time: '14:02', message: 'agent-04 · PR #182 fusionnée', status: 'ok' },
        { time: '14:01', message: 'file de revue · 2 éléments', status: 'warn' },
        { time: '13:57', message: 'contrôle de politique · validé', status: 'ok' },
        { time: '13:54', message: 'agent-02 · module généré', status: 'ok' },
      ],
      supervision: 'Supervision',
      coverage: 'de couverture',
      aiContribution: 'Contribution IA',
      rework: 'Retouches',
      quality: 'Qualité',
      agentPool: 'Pool d’agents',
      agentPoolStatus: 'en ligne · 0 bloqué',
      connectorLeftLabel: 'T&M classique',
      connectorLeftDesc: 'Body shopping, jours facturables, longs cycles de staffing.',
      connectorCenter: 'Agentic SDLC transforme aussi le modèle économique du delivery logiciel',
      connectorRightLabel: 'Exécution programmable',
      connectorRightDesc: 'Bursts courts, flux parallèles, allocation dynamique.',
    },
    beyond: {
      eyebrow: "La gestion de la capacite devient critique",
      heading: "Au-dela du Time & Materials : du staffing a la livraison de resultats",
      lead: "Le modele classique vendait du temps. Le prochain modele vend des capacites d’execution mesurees.",
      paragraphs: [
        "L’augmentation d’effectifs classique a ete concue pour un monde ou l’execution etait rare et les projets duraient des annees. On affectait des equipes, on vendait des jours facturables (c’est-a-dire des mois facturables), et on augmentait la capacite en ajoutant des personnes.",
        "L’Agentic software delivery change l’equation. Avec les coding agents, l’execution devient plus programmable, parallele et comprimee dans le temps. Mais le veritable changement ne porte pas seulement sur la vitesse.",
        "Les equipes externes ne disparaissent pas. Mais elles cessent d’etre des engagements de staffing longs mesures principalement en jours consommes. Elles deviennent des systemes de livraison cibles et multidisciplinaires : courts, focalises et responsables des resultats metier.",
      ],
      before: "Avant",
      beforeValue: "personnes × temps",
      beforeCaption: "jours facturables · staffing stable · projets longs",
      now: "Maintenant",
      nowValue: "pods orientes resultats",
      nowCaption: "flux paralleles · cycles courts · allocation dynamique",
      exampleLeftLabel: "Time & Materials classique",
      exampleLeftValue: "5 ingenieurs pendant 18 mois",
      exampleRightLabel: "Livraison de resultats",
      exampleRightValue: "1 pod embarque pour 4-6 semaines",
      clientsEyebrow: "Ce qui change pour les clients",
      clientsTitle: "La decision n’est plus : combien de personnes pour combien de mois ?",
      bullets: [
        "Quel flux metier devrions-nous transformer en premier ?",
        "Quel resultat le pod doit-il etre responsable de livrer ?",
        "Quels workflows agentiques peuvent passer en production en toute securite ?",
        "Quels niveaux de gouvernance, supervision et metriques sont necessaires des le depart ?",
        "Quand la capacite doit-elle monter en charge, s’arreter ou redemarrer ?",
      ],
      cards: [
        { title: "Embarque", text: "La livraison se rapproche des workflows reels du client, de ses systemes, donnees et contraintes operationnelles.", num: "01" },
        { title: "Multidisciplinaire", text: "L’unite de travail n’est plus un profil isole. C’est un pod combinant engineering, product, cloud, data, integration et gouvernance.", num: "02" },
        { title: "Oriente production", text: "L’objectif n’est pas une demo ou une preuve de concept. C’est un systeme utilisable connecte aux workflows reels, avec supervision, observabilite et chemins d’escalade.", num: "03" },
        { title: "Mesure par les resultats", text: "Le succes se mesure par l’impact metier, l’adoption, la qualite, le cycle de livraison, la reduction des risques et la fiabilite operationnelle, pas seulement les jours facturables consommes.", num: "04" },
      ],
      closing: "Les projets consommaient autrefois des personnes et du temps. La livraison agentique consomme des pods focalises, des workflows gouvernes et des resultats mesurables.",
    },
    core: {
      eyebrow: "Evolution du role central",
      heading: "La transformation centrale du role du developpeur.",
      body: "A mesure que les coding agents prennent en charge davantage de travail, les developpeurs ne disparaissent pas. Leur role se transforme. Le nouvel enjeu central est la supervision : qu’est-ce qu’on delegue, qu’est-ce qu’on revoit, qu’est-ce qu’on valide, et qu’est-ce qu’on n’automatise pas aveuglement.",
      cards: [
        { icon: "hub", title: "Ce qu’on delegue", text: "Decider ou les coding agents peuvent progresser rapidement sans creer de dette technique cachee." },
        { icon: "fact_check", title: "Ce qu’on revoit", text: "Rendre la supervision explicite : validation, approbation et escalade integrees au workflow." },
        { icon: "shield_person", title: "Ce qu’on n’automatise pas aveuglement", text: "Proteger la qualite, la responsabilite et la confiance client : le jugement humain reste determinant." },
      ],
    },
    metrics: {
      eyebrow: 'Métriques',
      heading: 'Sans métriques, il n’y a pas de transformation.',
      body: 'Si la contribution de l’IA, les retouches, la qualité et la supervision ne sont pas mesurées, l’adoption reste anecdotique et ne peut pas passer à l’échelle.',
      measuredLabel: 'Ce qu’il faut mesurer',
      items: [
        { name: 'Contribution IA', desc: 'Part du travail rédigée par des coding agents à chaque sprint' },
        { name: 'Retouches', desc: 'PR qui repassent sur des portions de code déjà revues' },
        { name: 'Qualité', desc: 'Score de couverture, taux de passage du lint et santé des tests' },
        { name: 'Supervision', desc: 'Couverture de revue humaine sur toutes les PR fusionnées par des agents' },
      ],
      planes: {
        quant: {
          tag: "Plan 01 · Quantitatif · continu",
          title: "Ce que le systeme produit",
          body: "Telemetrie de l'usine agentique. Cinq familles de signaux, instrumentees dans le pipeline, actualisees a chaque execution.",
          familiesLabel: "Familles de signaux",
          families: [
            {
              num: "01",
              title: "Surface d'adoption",
              summary: "Qui utilise l'IA, ou, et a quelle frequence.",
              signals: ["Utilisateurs actifs", "Couverture des phases", "Penetration des outils", "Profondeur de session"],
            },
            {
              num: "02",
              title: "Acceptation & qualite",
              summary: "Si la sortie est suffisamment fiable pour la production.",
              signals: ["Taux d'acceptation", "Cycles de revue", "Taux de defauts", "Delta de couverture"],
            },
            {
              num: "03",
              title: "Velocite (DORA, segmentee)",
              summary: "Metriques DORA, par implication d'agents.",
              signals: ["Temps de mise en production", "Frequence de deploiement", "Taux de defaillance des changements", "MTTR"],
            },
            {
              num: "04",
              title: "Comportement des agents",
              summary: "Comment les agents se calibrent sur leurs garde-fous.",
              signals: ["Qualite d'escalade", "Charge de supervision", "Profondeur d'iteration", "Completion d'objectifs"],
            },
            {
              num: "05",
              title: "Cout & retour",
              summary: "Si les chiffres vont dans la bonne direction.",
              signals: ["Depense en tokens", "Cout par changement accepte", "Proxy ROI", "Anomalies de budget"],
            },
          ],
        },
        perception: {
          tag: "Plan 02 · Perception · trimestriel",
          title: "Ce que les gens experientent",
          body: "Une enquete trimestrielle proprietary. Une ligne de base commune pour tous, puis une branche specifique au role acheminee automatiquement.",
          baselineLabel: "Ligne de base commune",
          baselineCount: "Pour chaque repondant",
          baselineSummary: "Calibre le role, le modele d'engagement, la frequence d'utilisation de l'IA, le niveau d'autonomie et la posture d'apprentissage — le contexte dans lequel chaque autre reponse est lue.",
          branchesLabel: "Branches par role",
          branches: [
            {
              icon: "code",
              title: "Developpeur",
              count: "Branche cote codage",
              summary: "Couvre comment l'IA apparait dans la boucle quotidienne du developpeur, de la redaction a la verification, et comment les outils agentiques sont adoptes.",
            },
            {
              icon: "rule",
              title: "QA · Automation · Qualite de production",
              count: "Branche cote qualite",
              summary: "Couvre l'IA dans le cycle de test — de la generation de scenarios a la maintenance, aux defaillances et aux decisions de disponibilite.",
            },
            {
              icon: "lan",
              title: "PM · PO · BA · Ops",
              count: "Branche cote livraison",
              summary: "Couvre l'IA dans la planification, la documentation, la reporting, le risque et les signaux operationnels — le travail autour du code.",
            },
          ],
          note: "L'instrument d'enquete est proprietary. L'ensemble de questions est partage lors de la mission.",
        },
      },
      statement: "Mesurer plutot que raconter.",
      statementBody: 'Ce qui est mesuré peut être gouverné. L’usine tourne avec des chiffres, pas avec des récits.',
      supervisionCoverage: 'Couverture de supervision',
      reworkReduction: 'Réduction des retouches',
      velocityTitle: 'Vitesse sous contrôle',
      velocityText: 'Les boucles agentiques ne livrent plus vite que lorsque supervision, revue et escalade sont mesurées dans le même run.',
      traceability: 'Traçabilité',
      unreviewedMerges: 'Fusion non revue',
      charts: {
        sandboxEyebrow: 'Aujourd’hui — Mode bac à sable',
        sandboxTitle: 'Où va réellement le temps développeur',
        sandboxBody: 'La majeure partie du temps est absorbée par le travail non planifié et les changements de contexte — pas par le delivery.',
        sandboxData: [
          { name: 'Débogage non planifié', value: 30 },
          { name: 'Codage manuel', value: 28 },
          { name: 'Changement de contexte', value: 22 },
          { name: 'Documentation', value: 12 },
          { name: 'Surcharge de supervision', value: 8 },
        ],
        factoryEyebrow: 'Cible — Mode factory',
        factoryTitle: 'Impact métrique : sandbox vs factory',
        factoryBody: 'Ce que la supervision structurée et la mesure font réellement bouger.',
        upliftData: [
          { metric: 'Couverture de supervision', sandbox: 18, factory: 85 },
          { metric: 'Contribution IA', sandbox: 12, factory: 68 },
          { metric: 'Vitesse de delivery', sandbox: 100, factory: 155 },
          { metric: 'Score qualité', sandbox: 62, factory: 88 },
          { metric: 'Réduction des retouches', sandbox: 100, factory: 152 },
        ],
        sandboxLegend: 'Sandbox',
        factoryLegend: 'Factory',
      },
    },
    audience: {
      eyebrow: "Pour qui",
      heading: "Concu pour les equipes qui ont besoin de la vitesse IA avec une veritable responsabilite de livraison.",
      body: "Cette mission s’adresse aux organisations qui experimentent deja les outils de developpement IA et cherchent maintenant un modele operationnel durable et mesurable.",
      cards: [
        { icon: "apartment", title: "Leaders engineering", text: "Equipes passant d’un usage ad hoc de l’IA a une livraison gouvernee avec resultats mesurables." },
        { icon: "terminal", title: "Equipes produit & plateforme", text: "Organisations standardisant les workflows assistes par IA : planification, developpement, revue, deploiement." },
        { icon: "handshake", title: "Cabinets de conseil & societes de services", text: "Equipes de delivery cherchant des gains de vitesse sans sacrifice sur la supervision, la qualite ou la responsabilite." },
      ],
    },
    blueprint: {
      eyebrow: "Blueprint",
      heading: "L’adoption d’outils IA n’est pas un modele de livraison.",
      paragraphs: [
        "Acheter des licences et deployer des assistants de code ne dit pas a une entreprise comment livrer differemment. Le defi reel est de convertir les gains de productivite et la compression du temps en un nouveau modele operationnel.",
        "A mesure que les cycles de livraison se raccourcissent, l’allocation des ressources devient plus dynamique. La question n’est plus : qui reste sur un projet 18 mois ? Elle devient : quel systeme d’execution construisons-nous reellement ?",
      ],
      levelsLabel: "Trois niveaux",
      levels: [
        { title: "Agentic SDLC", text: "Comment la livraison logicielle change" },
        { title: "Agentic engineering", text: "Comment les ingenieurs travaillent dans ce modele" },
        { title: "Harness engineering", text: "Comment rendre les agents suffisamment fiables pour participer" },
      ],
      cards: [
        { title: "Realite d’abord", text: "Distinguer l’adoption reelle de la culture de demo, du prompting isole et du theatre IA." },
        { title: "Prioriser les blocages", text: "Se concentrer la ou les workflows agentiques eliminent l’attente, les transmissions et les reprises." },
        { title: "Redefinir la supervision", text: "Clarifier ce que les agents font seuls, ce qui doit etre revu, et ou commence l’escalade." },
        { title: "Instrumenter le systeme", text: "Mesurer : contribution IA, throughput, reprises, qualite, couverture de supervision." },
        { title: "Lancer le nouveau modele operationnel", text: "Transformer le blueprint en sprint concret, pilote ou trajectoire de transformation." },
      ],
    },
    engagement: {
      eyebrow: "Mission d’engagement",
      heading: "Un sprint pour definir votre modele operationnel.",
      body: "Dans un sprint de travail focalise, nous alignons leadership et engineering autour d’une etape pratique avec priorites claires, gouvernance definie et metriques mesurables.",
      quote: "Une mission focalisee pour etablir la realite operationnelle, les priorites et les regles de fonctionnement qui rendent la supervision IA concretement operationnelle.",
    },
    contact: {
      eyebrow: 'Démarrer la conversation',
      heading: 'Toujours en mode sandbox ?',
      body: 'Si l’IA entre déjà dans vos workflows de delivery, l’étape suivante n’est pas plus d’expérimentation. C’est le contrôle, la supervision et une exécution mesurable.',
      cta: 'Réserver un appel découverte',
      email: 'nicolas@agentic-sdlc.com',
    },
    footer: {
      brand: 'Agentic SDLC',
      tagline: 'Transformation du delivery logiciel par l’IA',
    },
  },
  ro: {
    meta: {
      title: 'Agentic SDLC | Transformarea livrării software cu AI',
    },
    nav: {
      primaryLabel: 'Navigare principală',
      beyond: 'Dincolo de T&M',
      blueprint: 'Blueprint',
      metrics: 'Metrici',
      contact: 'Contact',
      blog: 'Blogul nostru: Learn & Project',
      language: 'Limbă',
    },
    hero: {
      eyebrow: 'VIITORUL SOFTWARE ENGINEERING',
      h1Prefix: 'Agentic SDLC:',
      h1Rest: 'De la instrumente AI pentru dezvoltare la sisteme fiabile de livrare software.',
      subtitle: 'Treci de la experimentare AI la un model de livrare în care clienții pot avea încredere.',
      primaryCta: 'Programează o discuție',
      secondaryCta: 'Auto-evaluare pentru executivi',
      liveLabel: 'Control LIVE · Agentic SDLC',
      pipeline: 'Pipeline de livrare',
      steps: ['Planificare', 'Construire', 'Revizuire', 'Livrare', 'Măsurare'],
      eventsLabel: 'Evenimente live',
      events: [
        { time: '14:02', message: 'agent-04 · PR #182 fuzionat', status: 'ok' },
        { time: '14:01', message: 'coadă de review · 2 elemente', status: 'warn' },
        { time: '13:57', message: 'verificare politici · validat', status: 'ok' },
        { time: '13:54', message: 'agent-02 · modul generat', status: 'ok' },
      ],
      supervision: 'Supraveghere',
      coverage: 'acoperire',
      aiContribution: 'Contribuție AI',
      rework: 'Refaceri',
      quality: 'Calitate',
      agentPool: 'Pool de agenți',
      agentPoolStatus: 'online · 0 blocați',
      connectorLeftLabel: 'T&M clasic',
      connectorLeftDesc: 'Body shopping, zile facturabile, cicluri lungi de staffing.',
      connectorCenter: 'Agentic SDLC schimbă și modelul economic al livrării software',
      connectorRightLabel: 'Execuție programabilă',
      connectorRightDesc: 'Burst-uri scurte, fluxuri paralele, alocare dinamică.',
    },
    beyond: {
      eyebrow: 'Bench Management becomed critical',
      heading: 'Dincolo de Time & Materials',
      lead: 'Modelul clasic vindea timp. Următorul model vinde capacitate de execuție.',
      paragraphs: [
        'Staff augmentation a fost conceput pentru o lume în care execuția era rară și proiectele durau ani. Echipele erau alocate, zilele facturabile erau vândute, iar creșterea însemna mai mulți oameni.',
        'Cu coding agents, productivitatea crește, ciclurile de livrare se comprimă, iar paralelismul crește. Clienții pot absorbi mai multă execuție intern, ceea ce înseamnă că alocarea oamenilor devine mai dinamică.',
        'Echipele externe nu dispar. Dar nu mai sunt angajamente lungi de staffing. Devin burst-uri scurte și țintite de execuție.',
      ],
      before: 'Înainte',
      beforeValue: 'oameni × timp',
      beforeCaption: 'zile facturabile · staffing stabil · proiecte lungi',
      now: 'Acum',
      nowValue: 'burst-uri de execuție',
      nowCaption: 'fluxuri paralele · cicluri scurte · alocare dinamică',
      exampleLeftLabel: 'Time & Materials clasic',
      exampleLeftValue: '5 ingineri timp de 18 luni',
      exampleRightLabel: 'Execuție programabilă',
      exampleRightValue: '3 fluxuri timp de 4-6 săptămâni',
      clientsEyebrow: 'Ce se schimbă pentru clienți',
      clientsTitle: 'Decizia nu mai este câți oameni și pentru cât timp.',
      bullets: [
        'Câtă execuție trebuie injectată acum?',
        'Ce inițiative merită accelerare rapidă?',
        'Unde avem nevoie de paralelism, nu de mai multe zile facturabile?',
        'Când creștem capacitatea, o oprim și o reluăm?',
      ],
      cards: [
        { title: 'Divizibil', text: 'Execuția se împarte în fluxuri țintite: migrare, testare, refactorizare.', num: '01' },
        { title: 'Comprimat în timp', text: 'Munca se livrează în săptămâni, nu în cicluri multianuale de staffing.', num: '02' },
        { title: 'Elastic', text: 'Scalează rapid, se oprește curat și pornește din nou când prioritățile se schimbă.', num: '03' },
        { title: 'Planificabil', text: 'Execuția este rutată după priorități, nu alocată static unor echipe.', num: '04' },
      ],
      closing: 'Proiectele consumau cândva zile facturabile. Acum consumă burst-uri de execuție.',
    },
    core: {
      eyebrow: 'Schimbare de rol central',
      heading: 'Evoluția centrală a rolului dezvoltatorului.',
      body: 'Pe măsură ce coding agents preiau mai multă muncă, dezvoltatorii nu dispar. Rolul lor se schimbă. Noua provocare este supravegherea: ce delegi, ce revizuiești, ce validezi și ce nu automatizezi orbește.',
      cards: [
        { icon: 'hub', title: 'Ce delegăm', text: 'Decide unde coding agents pot merge rapid fără să creeze datorie operațională ascunsă.' },
        { icon: 'fact_check', title: 'Ce revizuim', text: 'Fă supravegherea explicită astfel încât validarea, aprobarea și escaladarea să fie integrate în workflow.' },
        { icon: 'shield_person', title: 'Ce nu automatizăm orbește', text: 'Protejează calitatea, responsabilitatea și încrederea clientului acolo unde judecata umană contează cel mai mult.' },
      ],
    },
    metrics: {
      eyebrow: 'Metrici',
      heading: 'Fără metrici, nu există transformare.',
      body: 'Dacă contribuția AI, refacerile, calitatea și supravegherea nu sunt măsurate, adoptarea rămâne anecdotică și nu poate scala.',
      measuredLabel: 'Ce trebuie măsurat',
      items: [
        { name: 'Contribuție AI', desc: 'Procentul de muncă realizat de coding agents în fiecare sprint' },
        { name: 'Refaceri', desc: 'PR-uri care revin asupra unor porțiuni de cod deja revizuite' },
        { name: 'Calitate', desc: 'Scor de coverage, rată de trecere lint și sănătatea testelor' },
        { name: 'Supraveghere', desc: 'Acoperirea review-ului uman pentru toate PR-urile fuzionate de agenți' },
      ],
      statement: 'Măsurare înainte de anecdote.',
      statementBody: 'Ceea ce este măsurat poate fi guvernat. Fabrica rulează pe cifre, nu pe narațiune.',
      supervisionCoverage: 'Acoperire supraveghere',
      reworkReduction: 'Reducere a refacerilor',
      velocityTitle: 'Viteză cu control',
      velocityText: 'Buclele agentice livrează mai repede doar atunci când supravegherea, revizuirea și escaladarea sunt măsurate în același run.',
      traceability: 'Trasabilitate',
      unreviewedMerges: 'Fuziuni fără review',
      charts: {
        sandboxEyebrow: 'Astăzi — Mod sandbox',
        sandboxTitle: 'Unde se duce de fapt timpul dezvoltatorilor',
        sandboxBody: 'Cea mai mare parte a timpului este consumată de munca neplanificată și de schimbarea de context — nu de livrare.',
        sandboxData: [
          { name: 'Debugging neplanificat', value: 30 },
          { name: 'Codare manuală', value: 28 },
          { name: 'Schimbare de context', value: 22 },
          { name: 'Documentație', value: 12 },
          { name: 'Supracost de supraveghere', value: 8 },
        ],
        factoryEyebrow: 'Țintă — Mod factory',
        factoryTitle: 'Creștere metrică: sandbox vs factory',
        factoryBody: 'Ce schimbă efectiv supravegherea structurată și măsurarea.',
        upliftData: [
          { metric: 'Acoperire supraveghere', sandbox: 18, factory: 85 },
          { metric: 'Contribuție AI', sandbox: 12, factory: 68 },
          { metric: 'Viteză de livrare', sandbox: 100, factory: 155 },
          { metric: 'Scor calitate', sandbox: 62, factory: 88 },
          { metric: 'Reducerea refacerilor', sandbox: 100, factory: 152 },
        ],
        sandboxLegend: 'Sandbox',
        factoryLegend: 'Factory',
      },
    },
    audience: {
      eyebrow: 'Pentru cine',
      heading: 'Conceput pentru echipe care au nevoie de viteza AI împreună cu responsabilitate reală de livrare.',
      body: 'Această misiune se adresează organizațiilor care experimentează deja cu unelte AI de cod și caută acum un model operațional durabil.',
      cards: [
        { icon: 'apartment', title: 'Lideri de engineering', text: 'Echipe care trec de la utilizare AI ad-hoc la delivery guvernat cu rezultate măsurabile.' },
        { icon: 'terminal', title: 'Echipe de produs și platformă', text: 'Organizații care standardizează workflow-uri asistate de AI pentru planificare, build, review și release.' },
        { icon: 'handshake', title: 'Consultanțe și firme de servicii', text: 'Echipe de delivery care au nevoie de câștiguri de viteză fără să sacrifice supravegherea, calitatea sau responsabilitatea.' },
      ],
    },
    blueprint: {
      eyebrow: 'Blueprint',
      heading: 'Adoptarea de tool-uri AI nu este un model de delivery.',
      paragraphs: [
        'Cumpărarea de licențe și rollout-ul de coding assistants nu spun unei companii cum să livreze diferit. Provocarea reală este să transforme creșterea productivității și comprimarea timpului într-un nou model operațional.',
        'Pe măsură ce ciclurile de livrare se scurtează, alocarea oamenilor devine mai dinamică. Întrebarea nu mai este cine stă pe un proiect timp de 18 luni. Devine: ce fel de sistem de execuție construim de fapt?',
      ],
      levelsLabel: 'Trei niveluri',
      levels: [
        { title: 'Agentic SDLC', text: 'Cum se schimbă livrarea software' },
        { title: 'Agentic engineering', text: 'Cum lucrează inginerii în interiorul acestui model' },
        { title: 'Harness engineering', text: 'Cum sunt făcuți agenții suficient de fiabili pentru a participa' },
      ],
      cards: [
        { title: 'Ground truth first', text: 'Separă adoptarea reală de cultura demo, prompting-ul izolat și teatrul AI.' },
        { title: 'Prioritizează blocajele', text: 'Concentrează-te acolo unde workflow-urile agentice elimină timpul de așteptare, handoff-urile și refacerile.' },
        { title: 'Redefinește supravegherea', text: 'Clarifică ce pot face agenții singuri, ce trebuie revizuit și unde începe escaladarea.' },
        { title: 'Instrumentează sistemul', text: 'Măsoară contribuția AI, throughput-ul, refacerile, calitatea și acoperirea supravegherii.' },
        { title: 'Lansează următorul model operațional', text: 'Transformă blueprint-ul într-un sprint concret, un pilot sau o traiectorie de transformare a delivery-ului.' },
      ],
    },
    engagement: {
      eyebrow: 'Misiune',
      heading: 'Un sprint pentru a defini modelul operațional.',
      body: 'Într-un sprint de lucru focalizat, aliniem leadership-ul și engineering-ul în jurul unui pas practic următor, cu priorități, guvernanță și măsurare clare.',
      quote: 'O misiune focalizată pentru a defini realitatea din teren, prioritățile și regulile de funcționare care fac supravegherea AI reală.',
    },
    contact: {
      eyebrow: 'Începe conversația',
      heading: 'Încă în mod sandbox?',
      body: 'Dacă AI intră deja în workflow-urile tale de delivery, următorul pas nu este mai multă experimentare. Este control, supraveghere și execuție măsurabilă.',
      cta: 'Programează o discuție',
      email: 'nicolas@agentic-sdlc.com',
    },
    footer: {
      brand: 'Agentic SDLC',
      tagline: 'Transformarea livrării software cu AI',
    },
  },
  de: {
    meta: {
      title: 'Agentic SDLC | Transformation der Softwarelieferung mit KI',
    },
    nav: {
      primaryLabel: 'Hauptnavigation',
      beyond: 'Jenseits von T&M',
      blueprint: 'Blueprint',
      metrics: 'Metriken',
      contact: 'Kontakt',
      blog: 'Unser Blog: Learn & Project',
      language: 'Sprache',
    },
    hero: {
      eyebrow: 'DIE ZUKUNFT DES SOFTWARE ENGINEERING',
      h1Prefix: 'Agentic SDLC:',
      h1Rest: 'Von KI-Coding-Tools zu verlässlichen Systemen für Software-Delivery.',
      subtitle: 'Gehen Sie von KI-Experimenten zu einem Delivery-Modell über, dem Ihre Kunden vertrauen können.',
      primaryCta: 'Ein Kennenlerngespräch buchen',
      secondaryCta: 'Selbstbewertung für Führungskräfte',
      liveLabel: 'LIVE-Steuerung · Agentic SDLC',
      pipeline: 'Delivery-Pipeline',
      steps: ['Planen', 'Bauen', 'Prüfen', 'Liefern', 'Messen'],
      eventsLabel: 'Live-Ereignisse',
      events: [
        { time: '14:02', message: 'agent-04 · PR #182 zusammengeführt', status: 'ok' },
        { time: '14:01', message: 'Review-Warteschlange · 2 Elemente', status: 'warn' },
        { time: '13:57', message: 'Policy-Check · validiert', status: 'ok' },
        { time: '13:54', message: 'agent-02 · Modul generiert', status: 'ok' },
      ],
      supervision: 'Supervision',
      coverage: 'Abdeckung',
      aiContribution: 'KI-Beitrag',
      rework: 'Nacharbeit',
      quality: 'Qualität',
      agentPool: 'Agenten-Pool',
      agentPoolStatus: 'online · 0 blockiert',
      connectorLeftLabel: 'Klassisches T&M',
      connectorLeftDesc: 'Body Shopping, abrechenbare Tage, lange Staffing-Zyklen.',
      connectorCenter: 'Agentic SDLC verändert auch das Geschäftsmodell der Softwarelieferung',
      connectorRightLabel: 'Programmierbare Ausführung',
      connectorRightDesc: 'Kurze Bursts, parallele Ströme, dynamische Zuteilung.',
    },
    beyond: {
      eyebrow: 'Bench Management becomed critical',
      heading: 'Jenseits von Time & Materials',
      lead: 'Das klassische Modell verkaufte Zeit. Das nächste Modell verkauft Ausführungskapazität.',
      paragraphs: [
        'Klassisches Staff Augmentation wurde für eine Welt geschaffen, in der Ausführung knapp war und Projekte Jahre dauerten. Teams wurden besetzt, abrechenbare Tage verkauft, und Wachstum bedeutete mehr Köpfe.',
        'Mit coding agents steigt die Produktivität, Delivery-Zyklen werden komprimiert, und Parallelität nimmt zu. Kunden können mehr Ausführung intern absorbieren, was bedeutet, dass Menschen nicht mehr so statisch auf Projekte verteilt werden.',
        'Externe Teams verschwinden nicht. Aber sie sind keine langfristigen Staffing-Verpflichtungen mehr. Sie werden zu kurzen, gezielten Ausführungs-Bursts.',
      ],
      before: 'Vorher',
      beforeValue: 'Menschen × Zeit',
      beforeCaption: 'abrechenbare Tage · stabiles Staffing · lange Projekte',
      now: 'Jetzt',
      nowValue: 'Ausführungs-Bursts',
      nowCaption: 'parallele Ströme · kurze Zyklen · dynamische Zuteilung',
      exampleLeftLabel: 'Klassisches Time & Materials',
      exampleLeftValue: '5 Ingenieure für 18 Monate',
      exampleRightLabel: 'Programmierbare Ausführung',
      exampleRightValue: '3 Ausführungsströme für 4-6 Wochen',
      clientsEyebrow: 'Was sich für Kunden verändert',
      clientsTitle: 'Die Entscheidung lautet nicht mehr, wie viele Menschen für wie viele Monate besetzt werden.',
      bullets: [
        'Wie viel Ausführungskapazität müssen wir jetzt einspeisen?',
        'Welche Initiativen verdienen kurze Beschleunigungs-Bursts?',
        'Wo brauchen wir parallele Ströme statt mehr abrechenbarer Tage?',
        'Wann muss Kapazität hochfahren, stoppen und wieder anlaufen?',
      ],
      cards: [
        { title: 'Teilbar', text: 'Ausführung lässt sich in gezielte Ströme aufteilen: Migration, Tests, Refactoring.', num: '01' },
        { title: 'Zeitlich komprimiert', text: 'Arbeit wird in Wochen geliefert, nicht in mehrjährigen Staffing-Zyklen.', num: '02' },
        { title: 'Elastisch', text: 'Schnell hochfahren, sauber stoppen und erneut starten, wenn sich Prioritäten ändern.', num: '03' },
        { title: 'Planbar', text: 'Ausführung wird nach Prioritäten geroutet und nicht statisch Teams zugewiesen.', num: '04' },
      ],
      closing: 'Früher verbrauchten Projekte abrechenbare Tage. Heute verbrauchen sie Ausführungs-Bursts.',
    },
    core: {
      eyebrow: 'Zentraler Rollenwandel',
      heading: 'Die zentrale Entwicklung der Entwicklerrolle.',
      body: 'Je mehr Arbeit coding agents übernehmen, desto weniger verschwinden Entwickler - ihre Rolle verändert sich. Die neue Herausforderung ist Supervision: Was wird delegiert, was wird geprüft, was wird validiert, und was darf nicht blind automatisiert werden.',
      cards: [
        { icon: 'hub', title: 'Was wir delegieren', text: 'Entscheiden, wo coding agents schnell vorankommen können, ohne versteckte operative Schulden zu erzeugen.' },
        { icon: 'fact_check', title: 'Was wir prüfen', text: 'Supervision explizit machen, damit Validierung, Freigabe und Eskalation in den Workflow eingebaut sind.' },
        { icon: 'shield_person', title: 'Was wir nicht blind automatisieren', text: 'Qualität, Verantwortlichkeit und Kundenvertrauen dort schützen, wo menschliches Urteilsvermögen am wichtigsten bleibt.' },
      ],
    },
    metrics: {
      eyebrow: 'Metriken',
      heading: 'Ohne Metriken gibt es keine Transformation.',
      body: 'Wenn KI-Beitrag, Nacharbeit, Qualität und Supervision nicht gemessen werden, bleibt die Einführung anekdotisch und kann nicht skalieren.',
      measuredLabel: 'Was gemessen werden muss',
      items: [
        { name: 'KI-Beitrag', desc: 'Anteil der Arbeit, die in jedem Sprint von coding agents erstellt wird' },
        { name: 'Nacharbeit', desc: 'PRs, die auf bereits geprüfte Codebereiche zurückgreifen müssen' },
        { name: 'Qualität', desc: 'Coverage-Score, Lint-Erfolgsquote und Zustand der Tests' },
        { name: 'Supervision', desc: 'Abdeckung menschlicher Reviews für alle von Agenten zusammengeführten PRs' },
      ],
      statement: 'Messen statt erzählen.',
      statementBody: 'Was gemessen wird, kann gesteuert werden. Die Factory läuft auf Zahlen, nicht auf Erzählungen.',
      supervisionCoverage: 'Supervisionsabdeckung',
      reworkReduction: 'Weniger Nacharbeit',
      velocityTitle: 'Geschwindigkeit unter Kontrolle',
      velocityText: 'Agentische Schleifen liefern nur dann schneller, wenn Supervision, Review und Eskalation im selben Lauf mitgemessen werden.',
      traceability: 'Nachverfolgbarkeit',
      unreviewedMerges: 'Merges ohne Review',
      charts: {
        sandboxEyebrow: 'Heute — Sandbox-Modus',
        sandboxTitle: 'Wofür Entwicklerzeit tatsächlich verwendet wird',
        sandboxBody: 'Der größte Teil der Zeit wird von ungeplanter Arbeit und Kontextwechseln verbraucht — nicht von Delivery.',
        sandboxData: [
          { name: 'Ungeplantes Debugging', value: 30 },
          { name: 'Manuelles Coding', value: 28 },
          { name: 'Kontextwechsel', value: 22 },
          { name: 'Dokumentation', value: 12 },
          { name: 'Supervisions-Overhead', value: 8 },
        ],
        factoryEyebrow: 'Ziel — Factory-Modus',
        factoryTitle: 'Metrischer Effekt: Sandbox vs. Factory',
        factoryBody: 'Was strukturierte Supervision und Messung tatsächlich verändern.',
        upliftData: [
          { metric: 'Supervisionsabdeckung', sandbox: 18, factory: 85 },
          { metric: 'KI-Beitrag', sandbox: 12, factory: 68 },
          { metric: 'Delivery-Geschwindigkeit', sandbox: 100, factory: 155 },
          { metric: 'Qualitätswert', sandbox: 62, factory: 88 },
          { metric: 'Weniger Nacharbeit', sandbox: 100, factory: 152 },
        ],
        sandboxLegend: 'Sandbox',
        factoryLegend: 'Factory',
      },
    },
    audience: {
      eyebrow: 'Für wen',
      heading: 'Für Teams entwickelt, die KI-Geschwindigkeit mit echter Delivery-Verantwortung verbinden müssen.',
      body: 'Dieses Angebot richtet sich an Organisationen, die bereits mit KI-Coding-Tools experimentieren und nun nach einem tragfähigen Betriebsmodell suchen.',
      cards: [
        { icon: 'apartment', title: 'Engineering-Leads', text: 'Teams, die von ad hoc genutzter KI zu gesteuerter Delivery mit messbaren Ergebnissen übergehen.' },
        { icon: 'terminal', title: 'Produkt- und Plattformteams', text: 'Organisationen, die KI-unterstützte Workflows für Planung, Build, Review und Release standardisieren.' },
        { icon: 'handshake', title: 'Beratungen und IT-Dienstleister', text: 'Delivery-Teams, die Geschwindigkeit gewinnen müssen, ohne Supervision, Qualität oder Verantwortlichkeit zu opfern.' },
      ],
    },
    blueprint: {
      eyebrow: 'Blueprint',
      heading: 'Die Einführung von KI-Tools ist noch kein Delivery-Modell.',
      paragraphs: [
        'Lizenzen zu kaufen und coding assistants auszurollen, sagt einem Unternehmen noch nicht, wie es anders liefern soll. Die eigentliche Herausforderung besteht darin, Produktivitätsgewinne und Zeitkompression in ein neues Betriebsmodell zu übersetzen.',
        'Je kürzer Delivery-Zyklen werden, desto dynamischer wird die Zuteilung von Menschen. Die Frage lautet nicht mehr, wer 18 Monate auf einem Projekt bleibt. Sie lautet: Welches Ausführungssystem bauen wir eigentlich auf?',
      ],
      levelsLabel: 'Drei Ebenen',
      levels: [
        { title: 'Agentic SDLC', text: 'Wie sich Software-Delivery verändert' },
        { title: 'Agentic engineering', text: 'Wie Ingenieure innerhalb dieses Modells arbeiten' },
        { title: 'Harness engineering', text: 'Wie Agenten verlässlich genug gemacht werden, um überhaupt teilzunehmen' },
      ],
      cards: [
        { title: 'Ground truth first', text: 'Reale Einführung von Demo-Kultur, isoliertem Prompting und KI-Theater trennen.' },
        { title: 'Engpässe priorisieren', text: 'Sich auf die Stellen konzentrieren, an denen agentische Workflows Wartezeiten, Handoffs und Nacharbeit entfernen.' },
        { title: 'Supervision neu gestalten', text: 'Klar machen, was Agenten allein tun können, was geprüft werden muss und wo Eskalation beginnt.' },
        { title: 'Das System instrumentieren', text: 'KI-Beitrag, Durchsatz, Nacharbeit, Qualität und Supervisionsabdeckung messen.' },
        { title: 'Das nächste Betriebsmodell starten', text: 'Den Blueprint in einen konkreten Sprint, einen Piloten oder eine Delivery-Transformation überführen.' },
      ],
    },
    engagement: {
      eyebrow: 'Engagement',
      heading: 'Ein Sprint, um das Betriebsmodell zu definieren.',
      body: 'In einem fokussierten Arbeitssprint bringen wir Führung und Engineering auf einen praktischen nächsten Schritt zusammen - mit klaren Prioritäten, Governance und Messung.',
      quote: 'Ein fokussiertes Engagement, um die Realität vor Ort, die Prioritäten und die Regeln zu definieren, die KI-Supervision tatsächlich operationalisieren.',
    },
    contact: {
      eyebrow: 'Gespräch starten',
      heading: 'Noch im Sandbox-Modus?',
      body: 'Wenn KI bereits in Ihre Delivery-Workflows einfließt, ist der nächste Schritt nicht mehr Experimentieren. Es sind Kontrolle, Supervision und messbare Ausführung.',
      cta: 'Ein Kennenlerngespräch buchen',
      email: 'nicolas@agentic-sdlc.com',
    },
    footer: {
      brand: 'Agentic SDLC',
      tagline: 'Transformation der Softwarelieferung mit KI',
    },
  },
  bg: {
    meta: {
      title: 'Agentic SDLC | Трансформация на софтуерната доставка с ИИ',
    },
    nav: {
      primaryLabel: 'Основна навигация',
      beyond: 'Отвъд T&M',
      blueprint: 'Blueprint',
      metrics: 'Метрики',
      contact: 'Контакт',
      blog: 'Нашият блог: Learn & Project',
      language: 'Език',
    },
    hero: {
      eyebrow: 'БЪДЕЩЕТО НА SOFTWARE ENGINEERING',
      h1Prefix: 'Agentic SDLC:',
      h1Rest: 'От AI инструменти за разработка към надеждни системи за софтуерна доставка.',
      subtitle: 'Преминете от AI експерименти към модел на доставка, на който клиентите могат да се доверят.',
      primaryCta: 'Запазете среща',
      secondaryCta: 'Самооценка за ръководители',
      liveLabel: 'LIVE контрол · Agentic SDLC',
      pipeline: 'Pipeline за доставка',
      steps: ['Планиране', 'Изграждане', 'Преглед', 'Доставка', 'Измерване'],
      eventsLabel: 'Live събития',
      events: [
        { time: '14:02', message: 'agent-04 · PR #182 слят', status: 'ok' },
        { time: '14:01', message: 'опашка за review · 2 елемента', status: 'warn' },
        { time: '13:57', message: 'проверка на политики · валидирано', status: 'ok' },
        { time: '13:54', message: 'agent-02 · модул генериран', status: 'ok' },
      ],
      supervision: 'Надзор',
      coverage: 'покритие',
      aiContribution: 'AI принос',
      rework: 'Преработка',
      quality: 'Качество',
      agentPool: 'Пул от агенти',
      agentPoolStatus: 'online · 0 блокирани',
      connectorLeftLabel: 'Класически T&M',
      connectorLeftDesc: 'Body shopping, фактурируеми дни, дълги staffing цикли.',
      connectorCenter: 'Agentic SDLC променя и бизнес модела на софтуерната доставка',
      connectorRightLabel: 'Програмируема доставка',
      connectorRightDesc: 'Кратки execution burst-ове, паралелни потоци, динамично разпределение.',
    },
    beyond: {
      eyebrow: 'Bench Management becomed critical',
      heading: 'Отвъд Time & Materials',
      lead: 'Класическият модел продаваше време. Новият модел продава изпълнение.',
      paragraphs: [
        'Класическият staffing е създаден за свят с ограничено изпълнение и дълги проекти. Екипите се назначаваха, фактурируемите дни се продаваха, а растежът означаваше повече хора.',
        'С coding agents производителността расте, циклите на доставка се скъсяват и паралелизмът се увеличава. Клиентите могат да поемат повече изпълнение вътрешно, което прави разпределението на хората по-динамично.',
        'Външните екипи не изчезват. Но вече не са дълги staffing ангажименти. Те се превръщат в кратки и целеви execution burst-ове.',
      ],
      before: 'Преди',
      beforeValue: 'хора × време',
      beforeCaption: 'фактурируеми дни · стабилен staffing · дълги проекти',
      now: 'Сега',
      nowValue: 'execution burst-ове',
      nowCaption: 'паралелни потоци · кратки цикли · динамично разпределение',
      exampleLeftLabel: 'Класически Time & Materials',
      exampleLeftValue: '5 инженери за 18 месеца',
      exampleRightLabel: 'Програмируема доставка',
      exampleRightValue: '3 execution потока за 4-6 седмици',
      clientsEyebrow: 'Какво се променя за клиентите',
      clientsTitle: 'Решението вече не е колко хора да бъдат назначени и за колко месеца.',
      bullets: [
        'Колко изпълнение трябва да добавим точно сега?',
        'Кои инициативи заслужават кратки burst-ове за ускорение?',
        'Къде ни трябват паралелни потоци вместо повече фактурируеми дни?',
        'Кога капацитетът трябва да се увеличи, спре и стартира отново?',
      ],
      cards: [
        { title: 'Делимо', text: 'Изпълнението се разделя на целеви потоци: миграция, тестове, refactoring.', num: '01' },
        { title: 'Компресирано във времето', text: 'Работата се доставя за седмици, не в многогодишни staffing цикли.', num: '02' },
        { title: 'Еластично', text: 'Бързо увеличаване, чисто спиране и нов старт при промяна на приоритетите.', num: '03' },
        { title: 'Планируемо', text: 'Изпълнението се насочва според приоритетите, а не се назначава статично към екипи.', num: '04' },
      ],
      closing: 'Преди проектите консумираха фактурируеми дни. Днес консумират execution burst-ове.',
    },
    core: {
      eyebrow: 'Централна промяна на ролята',
      heading: 'Еволюция на ролята на разработчика.',
      body: 'Разработчиците не изчезват. Ролята им се измества към надзор, валидиране и дизайн на системи. Новото предизвикателство е да се реши какво се делегира, какво се преглежда, какво се валидира и какво не бива да се автоматизира сляпо.',
      cards: [
        { icon: 'hub', title: 'Какво делегираме', text: 'Решете къде coding agents могат да се движат бързо, без да създават скрит оперативен дълг.' },
        { icon: 'fact_check', title: 'Какво преглеждаме', text: 'Направете надзора експлицитен, така че валидирането, одобрението и ескалацията да са част от workflow-а.' },
        { icon: 'shield_person', title: 'Какво не автоматизираме сляпо', text: 'Защитете качеството, отговорността и доверието на клиента там, където човешката преценка остава най-важна.' },
      ],
    },
    metrics: {
      eyebrow: 'Метрики',
      heading: 'Без метрики няма трансформация.',
      body: 'Ако AI приносът, преработката, качеството и надзорът не се измерват, внедряването остава анекдотично и не може да се мащабира.',
      measuredLabel: 'Какво трябва да се измерва',
      items: [
        { name: 'AI принос', desc: 'Дял от работата, създадена от coding agents във всеки sprint' },
        { name: 'Преработка', desc: 'PR-и, които се връщат върху вече прегледани части от кода' },
        { name: 'Качество', desc: 'Coverage score, lint pass rate и стабилност на тестовете' },
        { name: 'Надзор', desc: 'Покритие на човешки review за всички PR-и, слети от агенти' },
      ],
      statement: 'Измерване вместо истории.',
      statementBody: 'Това, което се измерва, може да се управлява. Factory работи с числа, не с разкази.',
      supervisionCoverage: 'Покритие на надзора',
      reworkReduction: 'Намаляване на преработката',
      velocityTitle: 'Скорост под контрол',
      velocityText: 'Agentic циклите доставят по-бързо само когато надзорът, review-ът и ескалацията се измерват в същия run.',
      traceability: 'Проследимост',
      unreviewedMerges: 'Сливания без review',
      charts: {
        sandboxEyebrow: 'Днес — Sandbox режим',
        sandboxTitle: 'Къде всъщност отива времето на разработчиците',
        sandboxBody: 'Най-голямата част от времето се изразходва за непланирана работа и context switching — не за доставка.',
        sandboxData: [
          { name: 'Непланиран debugging', value: 30 },
          { name: 'Ръчно coding', value: 28 },
          { name: 'Context switching', value: 22 },
          { name: 'Документация', value: 12 },
          { name: 'Надзорен overhead', value: 8 },
        ],
        factoryEyebrow: 'Цел — Factory режим',
        factoryTitle: 'Метричен ефект: sandbox vs factory',
        factoryBody: 'Какво реално променят структурираният надзор и измерването.',
        upliftData: [
          { metric: 'Покритие на надзора', sandbox: 18, factory: 85 },
          { metric: 'AI принос', sandbox: 12, factory: 68 },
          { metric: 'Скорост на доставка', sandbox: 100, factory: 155 },
          { metric: 'Качествен резултат', sandbox: 62, factory: 88 },
          { metric: 'Намаляване на преработката', sandbox: 100, factory: 152 },
        ],
        sandboxLegend: 'Sandbox',
        factoryLegend: 'Factory',
      },
    },
    audience: {
      eyebrow: 'За кого е',
      heading: 'За екипи, които имат нужда от AI скорост с реална отговорност за доставката.',
      body: 'Това предложение е за организации, които вече експериментират с AI инструменти за код и търсят устойчив оперативен модел.',
      cards: [
        { icon: 'apartment', title: 'Engineering лидери', text: 'Екипи, които преминават от ad hoc използване на AI към управлявана доставка с измерими резултати.' },
        { icon: 'terminal', title: 'Продуктови и платформени екипи', text: 'Организации, които стандартизират AI-assisted workflows за планиране, build, review и release.' },
        { icon: 'handshake', title: 'Консултантски и service компании', text: 'Delivery екипи, които имат нужда от скорост, без да жертват надзора, качеството или отговорността.' },
      ],
    },
    blueprint: {
      eyebrow: 'Blueprint',
      heading: 'Внедряването на AI инструменти не е модел на доставка.',
      paragraphs: [
        'Закупуването на лицензи и rollout на coding assistants не казва на една компания как да доставя по различен начин. Истинското предизвикателство е да се превърнат по-високата производителност и компресията на времето в нов оперативен модел.',
        'Когато delivery циклите се скъсяват, разпределението на хората става по-динамично. Въпросът вече не е кой остава 18 месеца в проект. Въпросът е: каква система за изпълнение изграждаме?',
      ],
      levelsLabel: 'Три нива',
      levels: [
        { title: 'Agentic SDLC', text: 'Как се променя софтуерната доставка' },
        { title: 'Agentic engineering', text: 'Как инженерите работят в този модел' },
        { title: 'Harness engineering', text: 'Как агентите стават достатъчно надеждни, за да участват' },
      ],
      cards: [
        { title: 'Ground truth first', text: 'Разграничете реалното внедряване от demo култура, изолирано prompting и AI театър.' },
        { title: 'Приоритизирайте тесните места', text: 'Фокусирайте се там, където agentic workflows премахват чакане, handoffs и преработка.' },
        { title: 'Редизайн на надзора', text: 'Изяснете какво агентите могат да правят сами, какво трябва да се прегледа и къде започва ескалацията.' },
        { title: 'Инструментирайте системата', text: 'Измервайте AI принос, throughput, преработка, качество и покритие на надзора.' },
        { title: 'Стартирайте следващия оперативен модел', text: 'Превърнете blueprint-а в конкретен sprint, pilot или траектория за delivery трансформация.' },
      ],
    },
    engagement: {
      eyebrow: 'Ангажимент',
      heading: 'Един sprint за дефиниране на оперативния модел.',
      body: 'Във фокусиран работен sprint синхронизираме leadership и engineering около практична следваща стъпка с ясни приоритети, governance и измерване.',
      quote: 'Фокусиран ангажимент за дефиниране на реалността на терен, приоритетите и правилата, които правят AI надзора реален.',
    },
    contact: {
      eyebrow: 'Започнете разговора',
      heading: 'Все още в sandbox?',
      body: 'Ако AI вече влиза във вашите delivery workflows, следващата стъпка не е още експериментиране. Тя е контрол, надзор и измеримо изпълнение.',
      cta: 'Запазете среща',
      email: 'nicolas@agentic-sdlc.com',
    },
    footer: {
      brand: 'Agentic SDLC',
      tagline: 'Трансформация на софтуерната доставка с ИИ',
    },
  },
  pl: {
    meta: {
      title: 'Agentic SDLC | Transformacja dostarczania oprogramowania z AI',
    },
    nav: {
      primaryLabel: 'Nawigacja główna',
      beyond: 'Poza T&M',
      blueprint: 'Blueprint',
      metrics: 'Metryki',
      contact: 'Kontakt',
      blog: 'Nasz blog: Learn & Project',
      language: 'Język',
    },
    hero: {
      eyebrow: 'PRZYSZŁOŚĆ SOFTWARE ENGINEERING',
      h1Prefix: 'Agentic SDLC:',
      h1Rest: 'Od narzędzi AI dla programistów do niezawodnych systemów dostarczania oprogramowania.',
      subtitle: 'Przejdź od eksperymentów z AI do modelu delivery, któremu mogą zaufać Twoi klienci.',
      primaryCta: 'Umów rozmowę',
      secondaryCta: 'Samoocena dla kadry zarządzającej',
      liveLabel: 'LIVE kontrola · Agentic SDLC',
      pipeline: 'Pipeline delivery',
      steps: ['Planowanie', 'Budowa', 'Przegląd', 'Dostarczanie', 'Pomiar'],
      eventsLabel: 'Zdarzenia live',
      events: [
        { time: '14:02', message: 'agent-04 · PR #182 scalony', status: 'ok' },
        { time: '14:01', message: 'kolejka review · 2 elementy', status: 'warn' },
        { time: '13:57', message: 'kontrola polityk · zatwierdzono', status: 'ok' },
        { time: '13:54', message: 'agent-02 · moduł wygenerowany', status: 'ok' },
      ],
      supervision: 'Nadzór',
      coverage: 'pokrycia',
      aiContribution: 'Udział AI',
      rework: 'Poprawki',
      quality: 'Jakość',
      agentPool: 'Pula agentów',
      agentPoolStatus: 'online · 0 zablokowanych',
      connectorLeftLabel: 'Klasyczne T&M',
      connectorLeftDesc: 'Body shopping, dni rozliczeniowe, długie cykle staffingowe.',
      connectorCenter: 'Agentic SDLC zmienia także model biznesowy dostarczania oprogramowania',
      connectorRightLabel: 'Programowalne wykonanie',
      connectorRightDesc: 'Krótkie burtsy wykonania, równoległe strumienie, dynamiczna alokacja.',
    },
    beyond: {
      eyebrow: 'Bench Management becomed critical',
      heading: 'Poza Time & Materials',
      lead: 'Klasyczny model sprzedawał czas. Nowy model sprzedaje zdolność wykonania.',
      paragraphs: [
        'Klasyczny staffing powstał w świecie ograniczonego wykonania i długich projektów. Obsadzano zespoły, sprzedawano dni rozliczeniowe, a wzrost oznaczał więcej ludzi.',
        'Dzięki coding agents produktywność rośnie, cykle delivery się skracają, a równoległość wzrasta. Klienci mogą przejąć więcej wykonania wewnętrznie, więc alokacja ludzi staje się bardziej dynamiczna.',
        'Zespoły zewnętrzne nie znikają. Przestają jednak być długimi zobowiązaniami staffingowymi. Stają się krótkimi, ukierunkowanymi burstami wykonania.',
      ],
      before: 'Przed',
      beforeValue: 'ludzie × czas',
      beforeCaption: 'dni rozliczeniowe · stabilny staffing · długie projekty',
      now: 'Teraz',
      nowValue: 'bursty wykonania',
      nowCaption: 'równoległe strumienie · krótkie cykle · dynamiczna alokacja',
      exampleLeftLabel: 'Klasyczne Time & Materials',
      exampleLeftValue: '5 inżynierów przez 18 miesięcy',
      exampleRightLabel: 'Programowalne wykonanie',
      exampleRightValue: '3 strumienie wykonania przez 4-6 tygodni',
      clientsEyebrow: 'Co zmienia się dla klientów',
      clientsTitle: 'Decyzja nie polega już na tym, ilu ludzi obsadzić i na ile miesięcy.',
      bullets: [
        'Ile wykonania powinniśmy wstrzyknąć teraz?',
        'Które inicjatywy zasługują na krótkie bursty przyspieszenia?',
        'Gdzie potrzebujemy równoległych strumieni zamiast większej liczby dni rozliczeniowych?',
        'Kiedy pojemność powinna wzrosnąć, zatrzymać się i ponownie ruszyć?',
      ],
      cards: [
        { title: 'Podzielne', text: 'Wykonanie dzieli się na ukierunkowane strumienie: migrację, testy, refactoring.', num: '01' },
        { title: 'Skompresowane w czasie', text: 'Praca jest dostarczana w tygodniach, nie w wieloletnich cyklach staffingowych.', num: '02' },
        { title: 'Elastyczne', text: 'Szybko skaluj, czysto zatrzymuj i uruchamiaj ponownie, gdy zmieniają się priorytety.', num: '03' },
        { title: 'Planowalne', text: 'Wykonanie jest routowane według priorytetów, a nie statycznie przypisywane do zespołów.', num: '04' },
      ],
      closing: 'Projekty kiedyś konsumowały dni rozliczeniowe. Teraz konsumują burtsy wykonania.',
    },
    core: {
      eyebrow: 'Centralna zmiana roli',
      heading: 'Ewolucja roli developera.',
      body: 'Developerzy nie znikają. Ich rola przesuwa się w stronę nadzoru, walidacji i projektowania systemów. Nowym wyzwaniem jest decyzja, co delegować, co przeglądać, co walidować i czego nie automatyzować ślepo.',
      cards: [
        { icon: 'hub', title: 'Co delegujemy', text: 'Zdecyduj, gdzie coding agents mogą działać szybko bez tworzenia ukrytego długu operacyjnego.' },
        { icon: 'fact_check', title: 'Co przeglądamy', text: 'Uczyń nadzór jawny, aby walidacja, akceptacja i eskalacja były wbudowane w workflow.' },
        { icon: 'shield_person', title: 'Czego nie automatyzujemy ślepo', text: 'Chroń jakość, odpowiedzialność i zaufanie klienta tam, gdzie ludzki osąd pozostaje najważniejszy.' },
      ],
    },
    metrics: {
      eyebrow: 'Metryki',
      heading: 'Bez metryk nie ma transformacji.',
      body: 'Jeśli udział AI, poprawki, jakość i nadzór nie są mierzone, adopcja pozostaje anegdotyczna i nie może się skalować.',
      measuredLabel: 'Co trzeba mierzyć',
      items: [
        { name: 'Udział AI', desc: 'Część pracy wykonana przez coding agents w każdym sprincie' },
        { name: 'Poprawki', desc: 'PR-y wracające do fragmentów kodu już po review' },
        { name: 'Jakość', desc: 'Coverage score, pass rate lintu i stabilność testów' },
        { name: 'Nadzór', desc: 'Pokrycie ludzkim review dla wszystkich PR-ów scalonych przez agentów' },
      ],
      statement: 'Mierzenie zamiast opowieści.',
      statementBody: 'To, co jest mierzone, może być zarządzane. Factory działa na liczbach, nie na narracji.',
      supervisionCoverage: 'Pokrycie nadzoru',
      reworkReduction: 'Redukcja poprawek',
      velocityTitle: 'Szybkość pod kontrolą',
      velocityText: 'Pętle agentowe dostarczają szybciej tylko wtedy, gdy nadzór, review i eskalacja są mierzone w tym samym runie.',
      traceability: 'Traceability',
      unreviewedMerges: 'Scalenia bez review',
      charts: {
        sandboxEyebrow: 'Dziś — tryb sandbox',
        sandboxTitle: 'Na co naprawdę idzie czas developerów',
        sandboxBody: 'Największa część czasu jest pochłaniana przez nieplanowaną pracę i zmianę kontekstu — nie przez delivery.',
        sandboxData: [
          { name: 'Nieplanowany debugging', value: 30 },
          { name: 'Ręczne kodowanie', value: 28 },
          { name: 'Zmiana kontekstu', value: 22 },
          { name: 'Dokumentacja', value: 12 },
          { name: 'Koszt nadzoru', value: 8 },
        ],
        factoryEyebrow: 'Cel — tryb factory',
        factoryTitle: 'Efekt metryczny: sandbox vs factory',
        factoryBody: 'Co naprawdę zmieniają ustrukturyzowany nadzór i pomiar.',
        upliftData: [
          { metric: 'Pokrycie nadzoru', sandbox: 18, factory: 85 },
          { metric: 'Udział AI', sandbox: 12, factory: 68 },
          { metric: 'Szybkość delivery', sandbox: 100, factory: 155 },
          { metric: 'Wynik jakości', sandbox: 62, factory: 88 },
          { metric: 'Redukcja poprawek', sandbox: 100, factory: 152 },
        ],
        sandboxLegend: 'Sandbox',
        factoryLegend: 'Factory',
      },
    },
    audience: {
      eyebrow: 'Dla kogo',
      heading: 'Dla zespołów, które potrzebują szybkości AI z realną odpowiedzialnością za delivery.',
      body: 'To podejście jest dla organizacji, które już eksperymentują z narzędziami AI do kodowania i szukają trwałego modelu operacyjnego.',
      cards: [
        { icon: 'apartment', title: 'Liderzy engineeringu', text: 'Zespoły przechodzące od ad hoc użycia AI do zarządzanego delivery z mierzalnymi rezultatami.' },
        { icon: 'terminal', title: 'Zespoły produktowe i platformowe', text: 'Organizacje standaryzujące AI-assisted workflows dla planowania, build, review i release.' },
        { icon: 'handshake', title: 'Firmy doradcze i usługowe', text: 'Zespoły delivery, które potrzebują wzrostu szybkości bez poświęcania nadzoru, jakości lub odpowiedzialności.' },
      ],
    },
    blueprint: {
      eyebrow: 'Blueprint',
      heading: 'Wdrożenie narzędzi AI nie jest jeszcze modelem delivery.',
      paragraphs: [
        'Zakup licencji i rollout coding assistants nie mówi firmie, jak dostarczać inaczej. Prawdziwym wyzwaniem jest przełożenie wzrostu produktywności i kompresji czasu na nowy model operacyjny.',
        'Gdy cykle delivery się skracają, alokacja ludzi staje się bardziej dynamiczna. Pytanie nie brzmi już, kto zostaje w projekcie przez 18 miesięcy. Brzmi: jaki system wykonania faktycznie budujemy?',
      ],
      levelsLabel: 'Trzy poziomy',
      levels: [
        { title: 'Agentic SDLC', text: 'Jak zmienia się dostarczanie oprogramowania' },
        { title: 'Agentic engineering', text: 'Jak inżynierowie pracują w tym modelu' },
        { title: 'Harness engineering', text: 'Jak sprawić, by agenci byli wystarczająco niezawodni, aby uczestniczyć' },
      ],
      cards: [
        { title: 'Ground truth first', text: 'Oddziel realną adopcję od kultury demo, izolowanego promptingu i AI theatre.' },
        { title: 'Priorytetyzuj wąskie gardła', text: 'Skup się tam, gdzie agentic workflows usuwają oczekiwanie, handoffy i poprawki.' },
        { title: 'Przeprojektuj nadzór', text: 'Wyjaśnij, co agenci mogą robić sami, co wymaga review i gdzie zaczyna się eskalacja.' },
        { title: 'Instrumentuj system', text: 'Mierz udział AI, throughput, poprawki, jakość i pokrycie nadzoru.' },
        { title: 'Uruchom następny model operacyjny', text: 'Zamień blueprint w konkretny sprint, pilot albo ścieżkę transformacji delivery.' },
      ],
    },
    engagement: {
      eyebrow: 'Engagement',
      heading: 'Jeden sprint, aby zdefiniować model operacyjny.',
      body: 'W skoncentrowanym sprincie roboczym wyrównujemy leadership i engineering wokół praktycznego następnego kroku z jasnymi priorytetami, governance i pomiarem.',
      quote: 'Skoncentrowany engagement, aby zdefiniować rzeczywistość na miejscu, priorytety i reguły, które czynią nadzór nad AI realnym.',
    },
    contact: {
      eyebrow: 'Zacznij rozmowę',
      heading: 'Nadal w trybie sandbox?',
      body: 'Jeśli AI już wchodzi w Twoje delivery workflows, następnym krokiem nie jest więcej eksperymentów. To kontrola, nadzór i mierzalne wykonanie.',
      cta: 'Umów rozmowę',
      email: 'nicolas@agentic-sdlc.com',
    },
    footer: {
      brand: 'Agentic SDLC',
      tagline: 'Transformacja dostarczania oprogramowania z AI',
    },
  },
  uk: {
    meta: {
      title: 'Agentic SDLC | Трансформація доставки програмного забезпечення з AI',
    },
    nav: {
      primaryLabel: 'Основна навігація',
      beyond: 'Поза T&M',
      blueprint: 'Blueprint',
      metrics: 'Метрики',
      contact: 'Контакт',
      blog: 'Наш блог: Learn & Project',
      language: 'Мова',
    },
    hero: {
      eyebrow: 'МАЙБУТНЄ SOFTWARE ENGINEERING',
      h1Prefix: 'Agentic SDLC:',
      h1Rest: 'Від AI-інструментів для розробки до надійних систем доставки програмного забезпечення.',
      subtitle: 'Перейдіть від експериментів з AI до моделі delivery, якій ваші клієнти можуть довіряти.',
      primaryCta: 'Запланувати розмову',
      secondaryCta: 'Самооцінка для керівників',
      liveLabel: 'LIVE контроль · Agentic SDLC',
      pipeline: 'Pipeline delivery',
      steps: ['Планування', 'Побудова', 'Перевірка', 'Доставка', 'Вимірювання'],
      eventsLabel: 'Live події',
      events: [
        { time: '14:02', message: 'agent-04 · PR #182 змерджено', status: 'ok' },
        { time: '14:01', message: 'черга review · 2 елементи', status: 'warn' },
        { time: '13:57', message: 'перевірка політик · підтверджено', status: 'ok' },
        { time: '13:54', message: 'agent-02 · модуль згенеровано', status: 'ok' },
      ],
      supervision: 'Нагляд',
      coverage: 'покриття',
      aiContribution: 'Внесок AI',
      rework: 'Доопрацювання',
      quality: 'Якість',
      agentPool: 'Пул агентів',
      agentPoolStatus: 'online · 0 заблоковано',
      connectorLeftLabel: 'Класичний T&M',
      connectorLeftDesc: 'Body shopping, оплачувані дні, довгі staffing-цикли.',
      connectorCenter: 'Agentic SDLC також змінює бізнес-модель доставки програмного забезпечення',
      connectorRightLabel: 'Програмоване виконання',
      connectorRightDesc: 'Короткі execution burst-и, паралельні потоки, динамічний розподіл.',
    },
    beyond: {
      eyebrow: 'Bench Management becomed critical',
      heading: 'Поза Time & Materials',
      lead: 'Класична модель продавала час. Нова модель продає спроможність до виконання.',
      paragraphs: [
        'Класичний staffing був створений для світу з обмеженим виконанням і довгими проєктами. Команди укомплектовували, оплачувані дні продавали, а зростання означало більше людей.',
        'Завдяки coding agents продуктивність зростає, цикли delivery скорочуються, а паралельність збільшується. Клієнти можуть брати більше виконання всередину, тому розподіл людей стає динамічнішим.',
        'Зовнішні команди не зникають. Але вони перестають бути довгими staffing-зобовʼязаннями. Вони перетворюються на короткі, цілеспрямовані execution burst-и.',
      ],
      before: 'Раніше',
      beforeValue: 'люди × час',
      beforeCaption: 'оплачувані дні · стабільний staffing · довгі проєкти',
      now: 'Тепер',
      nowValue: 'execution burst-и',
      nowCaption: 'паралельні потоки · короткі цикли · динамічний розподіл',
      exampleLeftLabel: 'Класичний Time & Materials',
      exampleLeftValue: '5 інженерів на 18 місяців',
      exampleRightLabel: 'Програмоване виконання',
      exampleRightValue: '3 потоки виконання на 4-6 тижнів',
      clientsEyebrow: 'Що змінюється для клієнтів',
      clientsTitle: 'Рішення більше не полягає в тому, скільки людей призначити і на скільки місяців.',
      bullets: [
        'Скільки виконання потрібно додати саме зараз?',
        'Які ініціативи заслуговують коротких burst-ів прискорення?',
        'Де потрібні паралельні потоки замість більшої кількості оплачуваних днів?',
        'Коли потужність має зрости, зупинитися і запуститися знову?',
      ],
      cards: [
        { title: 'Подільне', text: 'Виконання ділиться на цільові потоки: міграцію, тести, refactoring.', num: '01' },
        { title: 'Стиснуте в часі', text: 'Робота доставляється за тижні, а не в багаторічних staffing-циклах.', num: '02' },
        { title: 'Еластичне', text: 'Швидко масштабуйте, чисто зупиняйте і запускайте знову, коли змінюються пріоритети.', num: '03' },
        { title: 'Плановане', text: 'Виконання спрямовується за пріоритетами, а не статично закріплюється за командами.', num: '04' },
      ],
      closing: 'Раніше проєкти споживали оплачувані дні. Тепер вони споживають execution burst-и.',
    },
    core: {
      eyebrow: 'Центральна зміна ролі',
      heading: 'Еволюція ролі розробника.',
      body: 'Розробники не зникають. Їхня роль зміщується у бік нагляду, валідації та проєктування систем. Новий виклик полягає в тому, що делегувати, що перевіряти, що валідувати і що не автоматизувати сліпо.',
      cards: [
        { icon: 'hub', title: 'Що делегуємо', text: 'Визначте, де coding agents можуть рухатися швидко, не створюючи прихованого операційного боргу.' },
        { icon: 'fact_check', title: 'Що перевіряємо', text: 'Зробіть нагляд явним, щоб валідація, погодження та ескалація були вбудовані у workflow.' },
        { icon: 'shield_person', title: 'Що не автоматизуємо сліпо', text: 'Захистіть якість, відповідальність і довіру клієнта там, де людське судження залишається найважливішим.' },
      ],
    },
    metrics: {
      eyebrow: 'Метрики',
      heading: 'Без метрик немає трансформації.',
      body: 'Якщо внесок AI, доопрацювання, якість і нагляд не вимірюються, впровадження залишається анекдотичним і не може масштабуватися.',
      measuredLabel: 'Що потрібно вимірювати',
      items: [
        { name: 'Внесок AI', desc: 'Частка роботи, виконаної coding agents у кожному sprint' },
        { name: 'Доопрацювання', desc: 'PR-и, що повертаються до вже переглянутих частин коду' },
        { name: 'Якість', desc: 'Coverage score, lint pass rate і стабільність тестів' },
        { name: 'Нагляд', desc: 'Покриття людським review для всіх PR-ів, змерджених агентами' },
      ],
      statement: 'Вимірювання замість історій.',
      statementBody: 'Те, що вимірюється, можна керувати. Factory працює на числах, а не на наративах.',
      supervisionCoverage: 'Покриття нагляду',
      reworkReduction: 'Зменшення доопрацювань',
      velocityTitle: 'Швидкість під контролем',
      velocityText: 'Agentic цикли доставляють швидше лише тоді, коли нагляд, review та ескалація вимірюються в тому самому run.',
      traceability: 'Простежуваність',
      unreviewedMerges: 'Мерджі без review',
      charts: {
        sandboxEyebrow: 'Сьогодні — режим sandbox',
        sandboxTitle: 'Куди насправді йде час розробників',
        sandboxBody: 'Найбільша частина часу витрачається на незаплановану роботу та context switching — не на delivery.',
        sandboxData: [
          { name: 'Незапланований debugging', value: 30 },
          { name: 'Ручне coding', value: 28 },
          { name: 'Context switching', value: 22 },
          { name: 'Документація', value: 12 },
          { name: 'Overhead нагляду', value: 8 },
        ],
        factoryEyebrow: 'Ціль — режим factory',
        factoryTitle: 'Метричний ефект: sandbox vs factory',
        factoryBody: 'Що реально змінюють структурований нагляд і вимірювання.',
        upliftData: [
          { metric: 'Покриття нагляду', sandbox: 18, factory: 85 },
          { metric: 'Внесок AI', sandbox: 12, factory: 68 },
          { metric: 'Швидкість delivery', sandbox: 100, factory: 155 },
          { metric: 'Показник якості', sandbox: 62, factory: 88 },
          { metric: 'Зменшення доопрацювань', sandbox: 100, factory: 152 },
        ],
        sandboxLegend: 'Sandbox',
        factoryLegend: 'Factory',
      },
    },
    audience: {
      eyebrow: 'Для кого',
      heading: 'Для команд, яким потрібна швидкість AI із реальною відповідальністю за delivery.',
      body: 'Ця пропозиція для організацій, які вже експериментують з AI-інструментами для коду і шукають сталу операційну модель.',
      cards: [
        { icon: 'apartment', title: 'Engineering-лідери', text: 'Команди, що переходять від ad hoc використання AI до керованого delivery з вимірюваними результатами.' },
        { icon: 'terminal', title: 'Продуктові та платформні команди', text: 'Організації, що стандартизують AI-assisted workflows для планування, build, review і release.' },
        { icon: 'handshake', title: 'Консалтингові та service-компанії', text: 'Delivery-команди, яким потрібне зростання швидкості без втрати нагляду, якості чи відповідальності.' },
      ],
    },
    blueprint: {
      eyebrow: 'Blueprint',
      heading: 'Впровадження AI-інструментів ще не є моделлю delivery.',
      paragraphs: [
        'Купівля ліцензій і rollout coding assistants не пояснюють компанії, як доставляти інакше. Справжній виклик — перетворити зростання продуктивності та компресію часу на нову операційну модель.',
        'Коли delivery-цикли скорочуються, розподіл людей стає динамічнішим. Питання вже не в тому, хто залишається в проєкті 18 місяців. Питання таке: яку систему виконання ми насправді будуємо?',
      ],
      levelsLabel: 'Три рівні',
      levels: [
        { title: 'Agentic SDLC', text: 'Як змінюється доставка програмного забезпечення' },
        { title: 'Agentic engineering', text: 'Як інженери працюють у цій моделі' },
        { title: 'Harness engineering', text: 'Як зробити агентів достатньо надійними, щоб вони могли брати участь' },
      ],
      cards: [
        { title: 'Ground truth first', text: 'Відокремте реальне впровадження від demo-культури, ізольованого prompting і AI theatre.' },
        { title: 'Пріоритизуйте вузькі місця', text: 'Зосередьтеся там, де agentic workflows прибирають очікування, handoffs і доопрацювання.' },
        { title: 'Перепроєктуйте нагляд', text: 'Уточніть, що агенти можуть робити самостійно, що потребує review і де починається ескалація.' },
        { title: 'Інструментуйте систему', text: 'Вимірюйте внесок AI, throughput, доопрацювання, якість і покриття нагляду.' },
        { title: 'Запустіть наступну операційну модель', text: 'Перетворіть blueprint на конкретний sprint, pilot або траєкторію delivery-трансформації.' },
      ],
    },
    engagement: {
      eyebrow: 'Engagement',
      heading: 'Один sprint, щоб визначити операційну модель.',
      body: 'У сфокусованому робочому sprint ми вирівнюємо leadership і engineering навколо практичного наступного кроку з чіткими пріоритетами, governance і вимірюванням.',
      quote: 'Сфокусований engagement, щоб визначити реальність на місці, пріоритети та правила, які роблять AI-нагляд реальним.',
    },
    contact: {
      eyebrow: 'Почніть розмову',
      heading: 'Все ще в режимі sandbox?',
      body: 'Якщо AI вже входить у ваші delivery workflows, наступний крок — не більше експериментів. Це контроль, нагляд і вимірюване виконання.',
      cta: 'Запланувати розмову',
      email: 'nicolas@agentic-sdlc.com',
    },
    footer: {
      brand: 'Agentic SDLC',
      tagline: 'Трансформація доставки програмного забезпечення з AI',
    },
  },
  es: {
    meta: {
      title: 'Agentic SDLC | Transformación del delivery de software con IA',
    },
    nav: {
      primaryLabel: 'Navegación principal',
      beyond: 'Más allá de T&M',
      blueprint: 'Blueprint',
      metrics: 'Métricas',
      contact: 'Contacto',
      blog: 'Nuestro blog: Learn & Project',
      language: 'Idioma',
    },
    hero: {
      eyebrow: 'EL FUTURO DEL SOFTWARE ENGINEERING',
      h1Prefix: 'Agentic SDLC:',
      h1Rest: 'De herramientas de desarrollo con IA a sistemas fiables de entrega de software.',
      subtitle: 'Pasa de la experimentación con IA a un modelo de delivery en el que tus clientes pueden confiar.',
      primaryCta: 'Reservar una llamada',
      secondaryCta: 'Autoevaluación para directivos',
      liveLabel: 'Control EN VIVO · Agentic SDLC',
      pipeline: 'Pipeline de delivery',
      steps: ['Planificar', 'Construir', 'Revisar', 'Entregar', 'Medir'],
      eventsLabel: 'Eventos en vivo',
      events: [
        { time: '14:02', message: 'agent-04 · PR #182 fusionado', status: 'ok' },
        { time: '14:01', message: 'cola de revisión · 2 elementos', status: 'warn' },
        { time: '13:57', message: 'control de políticas · validado', status: 'ok' },
        { time: '13:54', message: 'agent-02 · módulo generado', status: 'ok' },
      ],
      supervision: 'Supervisión',
      coverage: 'cobertura',
      aiContribution: 'Contribución IA',
      rework: 'Retrabajo',
      quality: 'Calidad',
      agentPool: 'Pool de agentes',
      agentPoolStatus: 'online · 0 bloqueado',
      connectorLeftLabel: 'T&M clásico',
      connectorLeftDesc: 'Body shopping, días facturables, ciclos largos de staffing.',
      connectorCenter: 'Agentic SDLC también cambia el modelo de negocio del delivery de software',
      connectorRightLabel: 'Ejecución programable',
      connectorRightDesc: 'Bursts cortos de ejecución, flujos paralelos, asignación dinámica.',
    },
    beyond: {
      eyebrow: 'Bench Management becomed critical',
      heading: 'Más allá de Time & Materials',
      lead: 'El modelo clásico vendía tiempo. El nuevo modelo vende capacidad de ejecución.',
      paragraphs: [
        'El staffing tradicional fue diseñado para un mundo con ejecución limitada y proyectos largos. Se dotaban equipos, se vendían días facturables y el crecimiento significaba más personas.',
        'Con los coding agents, la productividad aumenta, los ciclos de delivery se acortan y la paralelización crece. Los clientes pueden absorber más ejecución internamente, por lo que las personas dejan de asignarse a los proyectos de forma tan estática.',
        'Los equipos externos no desaparecen. Pero dejan de ser compromisos largos de staffing. Se convierten en bursts de ejecución cortos y enfocados.',
      ],
      before: 'Antes',
      beforeValue: 'personas × tiempo',
      beforeCaption: 'días facturables · staffing estable · proyectos largos',
      now: 'Ahora',
      nowValue: 'bursts de ejecución',
      nowCaption: 'flujos paralelos · ciclos cortos · asignación dinámica',
      exampleLeftLabel: 'Time & Materials clásico',
      exampleLeftValue: '5 ingenieros durante 18 meses',
      exampleRightLabel: 'Ejecución programable',
      exampleRightValue: '3 flujos de ejecución durante 4-6 semanas',
      clientsEyebrow: 'Qué cambia para los clientes',
      clientsTitle: 'La decisión ya no es cuántas personas asignar y durante cuántos meses.',
      bullets: [
        '¿Cuánta ejecución necesitamos inyectar ahora?',
        '¿Qué iniciativas merecen bursts cortos de aceleración?',
        '¿Dónde necesitamos flujos paralelos en lugar de más días facturables?',
        '¿Cuándo debe aumentar la capacidad, detenerse y volver a arrancar?',
      ],
      cards: [
        { title: 'Divisible', text: 'La ejecución se divide en flujos enfocados: migración, testing, refactoring.', num: '01' },
        { title: 'Comprimida en el tiempo', text: 'El trabajo se entrega en semanas, no en ciclos de staffing de varios años.', num: '02' },
        { title: 'Elástica', text: 'Escala rápido, se detiene limpiamente y vuelve a arrancar cuando cambian las prioridades.', num: '03' },
        { title: 'Planificable', text: 'La ejecución se enruta según prioridades, no se asigna de forma estática a equipos.', num: '04' },
      ],
      closing: 'Antes los proyectos consumían días facturables. Ahora consumen bursts de ejecución.',
    },
    core: {
      eyebrow: 'Cambio central de rol',
      heading: 'Evolución del rol del desarrollador.',
      body: 'Los desarrolladores no desaparecen. Su rol evoluciona hacia la supervisión, la validación y el diseño de sistemas. El nuevo reto es decidir qué delegar, qué revisar, qué validar y qué no automatizar a ciegas.',
      cards: [
        { icon: 'hub', title: 'Qué delegar', text: 'Decide dónde los coding agents pueden avanzar rápido sin crear deuda operativa oculta.' },
        { icon: 'fact_check', title: 'Qué revisar', text: 'Haz explícita la supervisión para que validación, aprobación y escalado formen parte del workflow.' },
        { icon: 'shield_person', title: 'Qué no automatizar a ciegas', text: 'Protege la calidad, la responsabilidad y la confianza del cliente donde el juicio humano sigue siendo clave.' },
      ],
    },
    metrics: {
      eyebrow: 'Métricas',
      heading: 'Sin métricas no hay transformación.',
      body: 'Si la contribución de la IA, el retrabajo, la calidad y la supervisión no se miden, la adopción sigue siendo anecdótica y no puede escalar.',
      measuredLabel: 'Qué hay que medir',
      items: [
        { name: 'Contribución IA', desc: 'Porcentaje del trabajo redactado por coding agents en cada sprint' },
        { name: 'Retrabajo', desc: 'PRs que vuelven sobre partes de código ya revisadas' },
        { name: 'Calidad', desc: 'Coverage score, tasa de lint aprobado y salud de los tests' },
        { name: 'Supervisión', desc: 'Cobertura de review humano en todos los PRs fusionados por agentes' },
      ],
      statement: 'Medir en lugar de narrar.',
      statementBody: 'Lo que se mide se puede gobernar. La factory funciona con números, no con relatos.',
      supervisionCoverage: 'Cobertura de supervisión',
      reworkReduction: 'Reducción del retrabajo',
      velocityTitle: 'Velocidad bajo control',
      velocityText: 'Los ciclos agentic entregan más rápido solo cuando supervisión, review y escalado se miden en el mismo run.',
      traceability: 'Trazabilidad',
      unreviewedMerges: 'Merges sin review',
      charts: {
        sandboxEyebrow: 'Hoy — modo sandbox',
        sandboxTitle: 'Dónde va realmente el tiempo de los desarrolladores',
        sandboxBody: 'La mayor parte del tiempo se consume en trabajo no planificado y cambios de contexto, no en delivery.',
        sandboxData: [
          { name: 'Debugging no planificado', value: 30 },
          { name: 'Coding manual', value: 28 },
          { name: 'Cambio de contexto', value: 22 },
          { name: 'Documentación', value: 12 },
          { name: 'Sobrecoste de supervisión', value: 8 },
        ],
        factoryEyebrow: 'Objetivo — modo factory',
        factoryTitle: 'Impacto métrico: sandbox vs factory',
        factoryBody: 'Lo que realmente mueven la supervisión estructurada y la medición.',
        upliftData: [
          { metric: 'Cobertura de supervisión', sandbox: 18, factory: 85 },
          { metric: 'Contribución IA', sandbox: 12, factory: 68 },
          { metric: 'Velocidad de delivery', sandbox: 100, factory: 155 },
          { metric: 'Índice de calidad', sandbox: 62, factory: 88 },
          { metric: 'Reducción del retrabajo', sandbox: 100, factory: 152 },
        ],
        sandboxLegend: 'Sandbox',
        factoryLegend: 'Factory',
      },
    },
    audience: {
      eyebrow: 'Para quién',
      heading: 'Para equipos que necesitan la velocidad de la IA con verdadera responsabilidad de delivery.',
      body: 'Esta propuesta es para organizaciones que ya experimentan con herramientas de código con IA y ahora buscan un modelo operativo sostenible.',
      cards: [
        { icon: 'apartment', title: 'Líderes de engineering', text: 'Equipos que pasan del uso ad hoc de IA a un delivery gobernado con resultados medibles.' },
        { icon: 'terminal', title: 'Equipos de producto y plataforma', text: 'Organizaciones que estandarizan AI-assisted workflows para planificar, construir, revisar y lanzar.' },
        { icon: 'handshake', title: 'Consultoras y empresas de servicios', text: 'Equipos de delivery que necesitan aumentar la velocidad sin sacrificar supervisión, calidad ni responsabilidad.' },
      ],
    },
    blueprint: {
      eyebrow: 'Blueprint',
      heading: 'Adoptar herramientas de IA no es un modelo de delivery.',
      paragraphs: [
        'Comprar licencias y desplegar coding assistants no le dice a una empresa cómo entregar de otra manera. El verdadero reto es convertir el aumento de productividad y la compresión del tiempo en un nuevo modelo operativo.',
        'A medida que los ciclos de delivery se acortan, la asignación de personas se vuelve más dinámica. La pregunta ya no es quién permanece en un proyecto durante 18 meses. La pregunta es: ¿qué sistema de ejecución estamos construyendo realmente?',
      ],
      levelsLabel: 'Tres niveles',
      levels: [
        { title: 'Agentic SDLC', text: 'Cómo cambia el delivery de software' },
        { title: 'Agentic engineering', text: 'Cómo trabajan los ingenieros en este modelo' },
        { title: 'Harness engineering', text: 'Cómo hacer que los agentes sean lo bastante fiables para participar' },
      ],
      cards: [
        { title: 'Ground truth first', text: 'Distingue la adopción real de la cultura demo, el prompting aislado y el AI theatre.' },
        { title: 'Priorizar cuellos de botella', text: 'Concéntrate donde los agentic workflows eliminan esperas, handoffs y retrabajo.' },
        { title: 'Rediseñar la supervisión', text: 'Aclara qué pueden hacer los agentes solos, qué debe revisarse y dónde empieza el escalado.' },
        { title: 'Instrumentar el sistema', text: 'Mide contribución IA, throughput, retrabajo, calidad y cobertura de supervisión.' },
        { title: 'Lanzar el siguiente modelo operativo', text: 'Convierte el blueprint en un sprint concreto, un piloto o una trayectoria de transformación del delivery.' },
      ],
    },
    engagement: {
      eyebrow: 'Engagement',
      heading: 'Un sprint para definir el modelo operativo.',
      body: 'En un sprint de trabajo enfocado, alineamos leadership y engineering alrededor de un siguiente paso práctico con prioridades, governance y métricas claras.',
      quote: 'Un engagement enfocado para establecer la realidad sobre el terreno, las prioridades y las reglas de funcionamiento que hacen que la supervisión de la IA sea realmente operativa.',
    },
    contact: {
      eyebrow: 'Iniciar la conversación',
      heading: '¿Sigues en modo sandbox?',
      body: 'Si la IA ya entra en tus delivery workflows, el siguiente paso no es experimentar más. Es control, supervisión y ejecución medible.',
      cta: 'Reservar una llamada',
      email: 'nicolas@agentic-sdlc.com',
    },
    footer: {
      brand: 'Agentic SDLC',
      tagline: 'Transformación del delivery de software con IA',
    },
  },
  ru: {
    meta: {
      title: 'Agentic SDLC | Трансформация доставки ПО с ИИ',
    },
    nav: {
      primaryLabel: 'Основная навигация',
      beyond: 'За пределами T&M',
      blueprint: 'Blueprint',
      metrics: 'Метрики',
      contact: 'Контакт',
      blog: 'Наш блог: Learn & Project',
      language: 'Язык',
    },
    hero: {
      eyebrow: 'БУДУЩЕЕ SOFTWARE ENGINEERING',
      h1Prefix: 'Agentic SDLC:',
      h1Rest: 'От AI-инструментов для разработки к надежным системам доставки ПО.',
      subtitle: 'Перейдите от экспериментов с ИИ к модели delivery, которой ваши клиенты могут доверять.',
      primaryCta: 'Записаться на звонок',
      secondaryCta: 'Самооценка для руководителей',
      liveLabel: 'LIVE контроль · Agentic SDLC',
      pipeline: 'Pipeline delivery',
      steps: ['Планирование', 'Сборка', 'Ревью', 'Доставка', 'Измерение'],
      eventsLabel: 'Live события',
      events: [
        { time: '14:02', message: 'agent-04 · PR #182 смержен', status: 'ok' },
        { time: '14:01', message: 'очередь ревью · 2 элемента', status: 'warn' },
        { time: '13:57', message: 'проверка политик · подтверждено', status: 'ok' },
        { time: '13:54', message: 'agent-02 · модуль сгенерирован', status: 'ok' },
      ],
      supervision: 'Надзор',
      coverage: 'покрытие',
      aiContribution: 'Вклад ИИ',
      rework: 'Доработка',
      quality: 'Качество',
      agentPool: 'Пул агентов',
      agentPoolStatus: 'online · 0 заблокировано',
      connectorLeftLabel: 'Классический T&M',
      connectorLeftDesc: 'Body shopping, оплачиваемые дни, длинные staffing-циклы.',
      connectorCenter: 'Agentic SDLC также меняет бизнес-модель доставки программного обеспечения',
      connectorRightLabel: 'Программируемое выполнение',
      connectorRightDesc: 'Короткие execution-бёрсты, параллельные потоки, динамическое распределение.',
    },
    beyond: {
      eyebrow: 'Bench Management becomed critical',
      heading: 'За пределами Time & Materials',
      lead: 'Классическая модель продавала время. Новая модель продает способность к выполнению.',
      paragraphs: [
        'Классический staffing был создан для мира с ограниченным исполнением и длинными проектами. Команды укомплектовывали, продавали оплачиваемые дни, а рост означал больше людей.',
        'С появлением coding agents продуктивность растет, циклы delivery сокращаются, а параллельность увеличивается. Клиенты могут забирать больше исполнения внутрь, поэтому люди больше не распределяются по проектам так статично.',
        'Внешние команды не исчезают. Но они перестают быть длинными staffing-обязательствами. Они превращаются в короткие, целевые execution-бёрсты.',
      ],
      before: 'Раньше',
      beforeValue: 'люди × время',
      beforeCaption: 'оплачиваемые дни · стабильный staffing · длинные проекты',
      now: 'Теперь',
      nowValue: 'execution-бёрсты',
      nowCaption: 'параллельные потоки · короткие циклы · динамическое распределение',
      exampleLeftLabel: 'Классический Time & Materials',
      exampleLeftValue: '5 инженеров на 18 месяцев',
      exampleRightLabel: 'Программируемое выполнение',
      exampleRightValue: '3 потока выполнения на 4-6 недель',
      clientsEyebrow: 'Что меняется для клиентов',
      clientsTitle: 'Решение больше не в том, сколько людей назначить и на сколько месяцев.',
      bullets: [
        'Сколько исполнения нужно добавить прямо сейчас?',
        'Какие инициативы заслуживают коротких бёрстов ускорения?',
        'Где нужны параллельные потоки вместо большего числа оплачиваемых дней?',
        'Когда мощность должна вырасти, остановиться и запуститься снова?',
      ],
      cards: [
        { title: 'Делимое', text: 'Исполнение делится на целевые потоки: миграция, тесты, refactoring.', num: '01' },
        { title: 'Сжатое во времени', text: 'Работа доставляется за недели, а не в многолетних staffing-циклах.', num: '02' },
        { title: 'Эластичное', text: 'Быстро масштабируйте, чисто останавливайте и запускайте снова при смене приоритетов.', num: '03' },
        { title: 'Планируемое', text: 'Исполнение направляется по приоритетам, а не статично закрепляется за командами.', num: '04' },
      ],
      closing: 'Раньше проекты потребляли оплачиваемые дни. Теперь они потребляют execution-бёрсты.',
    },
    core: {
      eyebrow: 'Центральное изменение роли',
      heading: 'Эволюция роли разработчика.',
      body: 'Разработчики не исчезают. Их роль смещается к надзору, валидации и проектированию систем. Новый вызов в том, что делегировать, что ревьюить, что валидировать и что не автоматизировать вслепую.',
      cards: [
        { icon: 'hub', title: 'Что делегировать', text: 'Определите, где coding agents могут двигаться быстро, не создавая скрытого операционного долга.' },
        { icon: 'fact_check', title: 'Что ревьюить', text: 'Сделайте надзор явным, чтобы валидация, одобрение и эскалация были встроены в workflow.' },
        { icon: 'shield_person', title: 'Что не автоматизировать вслепую', text: 'Защитите качество, ответственность и доверие клиента там, где человеческое суждение остается самым важным.' },
      ],
    },
    metrics: {
      eyebrow: 'Метрики',
      heading: 'Без метрик нет трансформации.',
      body: 'Если вклад ИИ, доработка, качество и надзор не измеряются, внедрение остается эпизодическим и не может масштабироваться.',
      measuredLabel: 'Что нужно измерять',
      items: [
        { name: 'Вклад ИИ', desc: 'Доля работы, написанной coding agents в каждом sprint' },
        { name: 'Доработка', desc: 'PR, которые возвращаются к уже отревьюенным участкам кода' },
        { name: 'Качество', desc: 'Coverage score, lint pass rate и стабильность тестов' },
        { name: 'Надзор', desc: 'Покрытие человеческим review всех PR, смерженных агентами' },
      ],
      statement: 'Измерять, а не рассказывать.',
      statementBody: 'Тем, что измеряется, можно управлять. Factory работает на цифрах, а не на нарративах.',
      supervisionCoverage: 'Покрытие надзора',
      reworkReduction: 'Снижение доработки',
      velocityTitle: 'Скорость под контролем',
      velocityText: 'Agentic-циклы доставляют быстрее только тогда, когда надзор, review и эскалация измеряются в одном run.',
      traceability: 'Трассируемость',
      unreviewedMerges: 'Мержи без review',
      charts: {
        sandboxEyebrow: 'Сегодня — режим sandbox',
        sandboxTitle: 'Куда на самом деле уходит время разработчиков',
        sandboxBody: 'Большая часть времени уходит на незапланированную работу и переключение контекста, а не на delivery.',
        sandboxData: [
          { name: 'Незапланированный debugging', value: 30 },
          { name: 'Ручное coding', value: 28 },
          { name: 'Переключение контекста', value: 22 },
          { name: 'Документация', value: 12 },
          { name: 'Накладные расходы надзора', value: 8 },
        ],
        factoryEyebrow: 'Цель — режим factory',
        factoryTitle: 'Метрический эффект: sandbox vs factory',
        factoryBody: 'Что реально меняют структурированный надзор и измерение.',
        upliftData: [
          { metric: 'Покрытие надзора', sandbox: 18, factory: 85 },
          { metric: 'Вклад ИИ', sandbox: 12, factory: 68 },
          { metric: 'Скорость delivery', sandbox: 100, factory: 155 },
          { metric: 'Показатель качества', sandbox: 62, factory: 88 },
          { metric: 'Снижение доработки', sandbox: 100, factory: 152 },
        ],
        sandboxLegend: 'Sandbox',
        factoryLegend: 'Factory',
      },
    },
    audience: {
      eyebrow: 'Для кого',
      heading: 'Для команд, которым нужна скорость ИИ с реальной ответственностью за delivery.',
      body: 'Это предложение для организаций, которые уже экспериментируют с AI-инструментами для кода и теперь ищут устойчивую операционную модель.',
      cards: [
        { icon: 'apartment', title: 'Engineering-лидеры', text: 'Команды, переходящие от ad hoc использования ИИ к управляемому delivery с измеримыми результатами.' },
        { icon: 'terminal', title: 'Продуктовые и платформенные команды', text: 'Организации, стандартизирующие AI-assisted workflows для планирования, build, review и release.' },
        { icon: 'handshake', title: 'Консалтинговые и сервисные компании', text: 'Delivery-команды, которым нужен рост скорости без потери надзора, качества или ответственности.' },
      ],
    },
    blueprint: {
      eyebrow: 'Blueprint',
      heading: 'Внедрение AI-инструментов еще не является моделью delivery.',
      paragraphs: [
        'Покупка лицензий и rollout coding assistants не объясняют компании, как доставлять иначе. Настоящий вызов — превратить рост продуктивности и сжатие времени в новую операционную модель.',
        'Когда циклы delivery сокращаются, распределение людей становится более динамичным. Вопрос уже не в том, кто остается в проекте 18 месяцев. Вопрос в том, какую систему исполнения мы на самом деле строим?',
      ],
      levelsLabel: 'Три уровня',
      levels: [
        { title: 'Agentic SDLC', text: 'Как меняется доставка программного обеспечения' },
        { title: 'Agentic engineering', text: 'Как инженеры работают в этой модели' },
        { title: 'Harness engineering', text: 'Как сделать агентов достаточно надежными, чтобы они могли участвовать' },
      ],
      cards: [
        { title: 'Ground truth first', text: 'Отделите реальное внедрение от demo-культуры, изолированного prompting и AI theatre.' },
        { title: 'Приоритизируйте узкие места', text: 'Сфокусируйтесь там, где agentic workflows убирают ожидание, handoffs и доработку.' },
        { title: 'Перепроектируйте надзор', text: 'Уточните, что агенты могут делать сами, что требует review и где начинается эскалация.' },
        { title: 'Инструментируйте систему', text: 'Измеряйте вклад ИИ, throughput, доработку, качество и покрытие надзора.' },
        { title: 'Запустите следующую операционную модель', text: 'Превратите blueprint в конкретный sprint, pilot или траекторию delivery-трансформации.' },
      ],
    },
    engagement: {
      eyebrow: 'Engagement',
      heading: 'Один sprint, чтобы определить операционную модель.',
      body: 'В сфокусированном рабочем sprint мы выравниваем leadership и engineering вокруг практического следующего шага с ясными приоритетами, governance и метриками.',
      quote: 'Сфокусированный engagement, чтобы установить реальность на местах, приоритеты и правила работы, которые делают AI-надзор действительно операционным.',
    },
    contact: {
      eyebrow: 'Начать разговор',
      heading: 'Все еще в режиме sandbox?',
      body: 'Если ИИ уже входит в ваши delivery workflows, следующий шаг — не больше экспериментов. Это контроль, надзор и измеримое выполнение.',
      cta: 'Записаться на звонок',
      email: 'nicolas@agentic-sdlc.com',
    },
    footer: {
      brand: 'Agentic SDLC',
      tagline: 'Трансформация доставки ПО с ИИ',
    },
  },
} as Record<LanguageCode, SiteCopy>;

Object.assign(copy, {
  it: mergeCopy(copy.en, {
    meta: { title: 'Agentic SDLC | Trasformazione della delivery software con AI' },
    nav: { primaryLabel: 'Navigazione principale', beyond: 'Oltre il T&M', blueprint: 'Blueprint', metrics: 'Metriche', contact: 'Contatto', blog: 'Il nostro blog: Learn & Project', language: 'Lingua' },
    hero: {
      eyebrow: 'IL FUTURO DEL SOFTWARE ENGINEERING',
      h1Rest: 'Dagli strumenti di sviluppo AI a sistemi affidabili di delivery software.',
      subtitle: 'Passa dalla sperimentazione AI a un modello di delivery di cui i clienti possono fidarsi.',
      primaryCta: 'Prenota una call introduttiva',
      secondaryCta: 'Autovalutazione per executive',
      liveLabel: 'Controllo LIVE · Agentic SDLC',
      pipeline: 'Pipeline di delivery',
      steps: ['Pianifica', 'Costruisci', 'Rivedi', 'Rilascia', 'Misura'],
      eventsLabel: 'Eventi live',
      events: [
        { time: '14:02', message: 'agent-04 · PR #182 unita', status: 'ok' },
        { time: '14:01', message: 'coda review · 2 elementi', status: 'warn' },
        { time: '13:57', message: 'controllo policy · superato', status: 'ok' },
        { time: '13:54', message: 'agent-02 · modulo generato', status: 'ok' },
      ],
      supervision: 'Supervisione',
      coverage: 'copertura',
      aiContribution: 'Contributo AI',
      rework: 'Rilavorazione',
      quality: 'Qualità',
      agentPool: 'Pool di agenti',
      agentPoolStatus: 'online · 0 bloccati',
      connectorLeftLabel: 'T&M classico',
      connectorLeftDesc: 'Body shopping, giorni fatturabili, lunghi cicli di staffing.',
      connectorCenter: 'Agentic SDLC cambia anche il modello economico della delivery software',
      connectorRightLabel: 'Esecuzione programmabile',
      connectorRightDesc: 'Burst brevi, flussi paralleli, allocazione dinamica.',
    },
    beyond: {
      eyebrow: 'Bench Management becomed critical',
      heading: 'Oltre Time & Materials',
      lead: 'Lo staffing vendeva tempo. Il prossimo modello vende burst di esecuzione.',
      before: 'Prima',
      beforeValue: 'persone × tempo',
      beforeCaption: 'giorni fatturabili · staffing stabile · progetti lunghi',
      now: 'Ora',
      nowValue: 'burst di esecuzione',
      nowCaption: 'flussi paralleli · cicli brevi · allocazione dinamica',
      clientsEyebrow: 'Cosa cambia per i clienti',
      clientsTitle: 'La decisione non è più quante persone allocare e per quanti mesi.',
      closing: 'Prima i progetti consumavano giorni fatturabili. Ora consumano burst di esecuzione.',
    },
    core: { eyebrow: 'Cambio di ruolo', heading: 'Evoluzione del ruolo dello sviluppatore.', body: 'Quando gli agenti di coding assumono più lavoro, gli sviluppatori non scompaiono. Il loro ruolo cambia: supervisione, review, validazione e giudizio su cosa non automatizzare alla cieca.' },
    metrics: { eyebrow: 'Metriche', heading: 'Senza metriche non c’è trasformazione.', body: 'Se contributo AI, rilavorazione, qualità e supervisione non sono misurati, l’adozione resta aneddotica e non scala.', measuredLabel: 'Cosa misurare', statement: 'Misurare, non raccontare.', statementBody: 'Ciò che viene misurato può essere governato.', supervisionCoverage: 'Copertura di supervisione', reworkReduction: 'Riduzione rilavorazione', velocityTitle: 'Velocità sotto controllo', traceability: 'Tracciabilità', unreviewedMerges: 'Merge non revisionati' },
    audience: { eyebrow: 'Per chi', heading: 'Per team che hanno bisogno della velocità dell’AI con responsabilità di delivery.', body: 'Per organizzazioni che stanno già sperimentando strumenti di coding AI e cercano un modello operativo duraturo.' },
    blueprint: { eyebrow: 'Blueprint', heading: 'Adottare strumenti AI non è un modello di delivery.', levelsLabel: 'Tre livelli' },
    engagement: { eyebrow: 'Engagement', heading: 'Uno sprint per definire il modello operativo.', body: 'In uno sprint focalizzato allineiamo leadership e engineering su priorità, governance e misurazione.', quote: 'Un engagement focalizzato per definire realtà, priorità e regole operative che rendono reale la supervisione AI.' },
    contact: { eyebrow: 'Inizia la conversazione', heading: 'Ancora in modalità sandbox?', body: 'Se l’AI è già nei workflow di delivery, il passo successivo è controllo, supervisione ed esecuzione misurabile.', cta: 'Prenota una call introduttiva' },
    footer: { tagline: 'Trasformazione della delivery software con AI' },
  }),
  pt: mergeCopy(copy.en, {
    meta: { title: 'Agentic SDLC | Transformação da entrega de software com IA' },
    nav: { primaryLabel: 'Navegação principal', beyond: 'Além de T&M', blueprint: 'Blueprint', metrics: 'Métricas', contact: 'Contato', blog: 'Nosso blog: Learn & Project', language: 'Idioma' },
    hero: { eyebrow: 'O FUTURO DA ENGENHARIA DE SOFTWARE', h1Rest: 'De ferramentas de desenvolvimento com IA a sistemas confiáveis de entrega de software.', subtitle: 'Passe da experimentação com IA para um modelo de entrega em que seus clientes possam confiar.', primaryCta: 'Agendar chamada inicial', secondaryCta: 'Autoavaliação para executivos', liveLabel: 'Controle LIVE · Agentic SDLC', pipeline: 'Pipeline de entrega', steps: ['Planejar', 'Construir', 'Revisar', 'Enviar', 'Medir'], eventsLabel: 'Eventos ao vivo', supervision: 'Supervisão', coverage: 'cobertura', aiContribution: 'Contribuição IA', rework: 'Retrabalho', quality: 'Qualidade', agentPool: 'Pool de agentes', agentPoolStatus: 'online · 0 bloqueados', connectorLeftLabel: 'T&M clássico', connectorLeftDesc: 'Body shopping, dias faturáveis, longos ciclos de staffing.', connectorCenter: 'Agentic SDLC também muda o modelo de negócio da entrega de software', connectorRightLabel: 'Execução programável', connectorRightDesc: 'Bursts curtos, fluxos paralelos, alocação dinâmica.' },
    beyond: { eyebrow: 'Bench Management becomed critical', heading: 'Além de Time & Materials', lead: 'Staffing vendia tempo. O próximo modelo vende bursts de execução.', before: 'Antes', beforeValue: 'pessoas × tempo', beforeCaption: 'dias faturáveis · staffing estável · projetos longos', now: 'Agora', nowValue: 'bursts de execução', nowCaption: 'fluxos paralelos · ciclos curtos · alocação dinâmica', clientsEyebrow: 'O que muda para os clientes', clientsTitle: 'A decisão não é mais quantas pessoas alocar por quantos meses.', closing: 'Projetos antes consumiam dias faturáveis. Agora consomem bursts de execução.' },
    core: { eyebrow: 'Mudança central', heading: 'Mudança central no papel do desenvolvedor.', body: 'À medida que agentes de coding assumem mais trabalho, desenvolvedores não desaparecem. O papel muda para supervisão, revisão, validação e julgamento sobre o que não automatizar cegamente.' },
    metrics: { eyebrow: 'Métricas', heading: 'Sem métricas, não há transformação.', body: 'Se contribuição da IA, retrabalho, qualidade e supervisão não são medidos, a adoção fica anedótica e não escala.', measuredLabel: 'O que medir', statement: 'Medição acima de narrativa.', statementBody: 'O que é medido pode ser governado.', supervisionCoverage: 'Cobertura de supervisão', reworkReduction: 'Redução de retrabalho', velocityTitle: 'Velocidade com controle', traceability: 'Rastreabilidade', unreviewedMerges: 'Merges sem revisão' },
    audience: { eyebrow: 'Para quem', heading: 'Para equipes que precisam da velocidade da IA com responsabilidade de entrega.', body: 'Para organizações que já experimentam ferramentas de coding com IA e buscam um modelo operacional durável.' },
    blueprint: { eyebrow: 'Blueprint', heading: 'Adotar ferramentas de IA não é um modelo de entrega.', levelsLabel: 'Três níveis' },
    engagement: { eyebrow: 'Engagement', heading: 'Um sprint para definir o modelo operacional.', body: 'Em um sprint focado, alinhamos liderança e engenharia em prioridades, governança e medição.', quote: 'Um engagement focado para definir realidade, prioridades e regras operacionais que tornam real a supervisão da IA.' },
    contact: { eyebrow: 'Comece a conversa', heading: 'Ainda em modo sandbox?', body: 'Se a IA já está nos seus workflows de entrega, o próximo passo é controle, supervisão e execução mensurável.', cta: 'Agendar chamada inicial' },
    footer: { tagline: 'Transformação da entrega de software com IA' },
  }),
  nl: mergeCopy(copy.en, {
    meta: { title: 'Agentic SDLC | Transformatie van softwaredelivery met AI' },
    nav: { primaryLabel: 'Hoofdnavigatie', beyond: 'Voorbij T&M', blueprint: 'Blueprint', metrics: 'Metrics', contact: 'Contact', blog: 'Onze blog: Learn & Project', language: 'Taal' },
    hero: { eyebrow: 'DE TOEKOMST VAN SOFTWARE ENGINEERING', h1Rest: 'Van AI-ontwikkeltools naar betrouwbare systemen voor softwaredelivery.', subtitle: 'Ga van AI-experimenten naar een deliverymodel dat klanten kunnen vertrouwen.', primaryCta: 'Plan een kennismaking', secondaryCta: 'Zelfscan voor executives', liveLabel: 'LIVE controle · Agentic SDLC', pipeline: 'Delivery pipeline', steps: ['Plannen', 'Bouwen', 'Reviewen', 'Shippen', 'Meten'], eventsLabel: 'Live events', supervision: 'Supervisie', coverage: 'dekking', aiContribution: 'AI-bijdrage', rework: 'Herwerk', quality: 'Kwaliteit', agentPool: 'Agentpool', agentPoolStatus: 'online · 0 vastgelopen', connectorLeftLabel: 'Klassiek T&M', connectorLeftDesc: 'Body shopping, factureerbare dagen, lange staffingcycli.', connectorCenter: 'Agentic SDLC verandert ook het businessmodel van softwaredelivery', connectorRightLabel: 'Programmeerbare uitvoering', connectorRightDesc: 'Korte bursts, parallelle stromen, dynamische allocatie.' },
    beyond: { eyebrow: 'Bench Management becomed critical', heading: 'Voorbij Time & Materials', lead: 'Staffing verkocht tijd. Het volgende model verkoopt uitvoeringsbursts.', before: 'Vroeger', beforeValue: 'mensen × tijd', beforeCaption: 'factureerbare dagen · stabiele staffing · lange projecten', now: 'Nu', nowValue: 'uitvoeringsbursts', nowCaption: 'parallelle stromen · korte cycli · dynamische allocatie', clientsEyebrow: 'Wat verandert voor klanten', clientsTitle: 'De beslissing is niet langer hoeveel mensen voor hoeveel maanden.', closing: 'Projecten verbruikten factureerbare dagen. Nu verbruiken ze uitvoeringsbursts.' },
    core: { eyebrow: 'Kernverschuiving', heading: 'Kernverschuiving in de rol van de developer.', body: 'Naarmate coding agents meer werk overnemen, verdwijnen developers niet. Hun rol verschuift naar supervisie, review, validatie en oordeel over wat niet blind geautomatiseerd mag worden.' },
    metrics: { eyebrow: 'Metrics', heading: 'Zonder metrics is er geen transformatie.', body: 'Als AI-bijdrage, herwerk, kwaliteit en supervisie niet worden gemeten, blijft adoptie anekdotisch en schaalt ze niet.', measuredLabel: 'Wat gemeten moet worden', statement: 'Meten boven anekdotes.', statementBody: 'Wat gemeten wordt, kan bestuurd worden.', supervisionCoverage: 'Supervisiedekking', reworkReduction: 'Minder herwerk', velocityTitle: 'Snelheid met controle', traceability: 'Traceerbaarheid', unreviewedMerges: 'Merges zonder review' },
    audience: { eyebrow: 'Voor wie', heading: 'Voor teams die AI-snelheid nodig hebben met deliveryverantwoordelijkheid.', body: 'Voor organisaties die al experimenteren met AI-codingtools en nu een duurzaam operationeel model zoeken.' },
    blueprint: { eyebrow: 'Blueprint', heading: 'Adoptie van AI-tools is nog geen deliverymodel.', levelsLabel: 'Drie niveaus' },
    engagement: { eyebrow: 'Engagement', heading: 'Eén sprint om het operationele model te definiëren.', body: 'In een gefocuste werksprint brengen we leiderschap en engineering op één lijn rond prioriteiten, governance en meting.', quote: 'Een gefocust engagement om realiteit, prioriteiten en werkregels vast te leggen die AI-supervisie echt maken.' },
    contact: { eyebrow: 'Start het gesprek', heading: 'Nog steeds in sandboxmodus?', body: 'Als AI al in je deliveryworkflows zit, is de volgende stap controle, supervisie en meetbare uitvoering.', cta: 'Plan een kennismaking' },
    footer: { tagline: 'Transformatie van softwaredelivery met AI' },
  }),
  sv: mergeCopy(copy.en, {
    meta: { title: 'Agentic SDLC | AI-driven transformation av mjukvaruleverans' },
    nav: { primaryLabel: 'Huvudnavigering', beyond: 'Bortom T&M', blueprint: 'Blueprint', metrics: 'Mätetal', contact: 'Kontakt', blog: 'Vår blogg: Learn & Project', language: 'Språk' },
    hero: { eyebrow: 'FRAMTIDEN FÖR SOFTWARE ENGINEERING', h1Rest: 'Från AI-verktyg för utveckling till tillförlitliga system för mjukvaruleverans.', subtitle: 'Gå från AI-experiment till en leveransmodell som kunder kan lita på.', primaryCta: 'Boka ett intro-samtal', secondaryCta: 'Självutvärdering för ledare', liveLabel: 'LIVE-kontroll · Agentic SDLC', pipeline: 'Leveranspipeline', steps: ['Planera', 'Bygg', 'Granska', 'Leverera', 'Mät'], eventsLabel: 'Livehändelser', supervision: 'Övervakning', coverage: 'täckning', aiContribution: 'AI-bidrag', rework: 'Omarbete', quality: 'Kvalitet', agentPool: 'Agentpool', agentPoolStatus: 'online · 0 stoppade', connectorLeftLabel: 'Klassisk T&M', connectorLeftDesc: 'Body shopping, fakturerbara dagar, långa staffingcykler.', connectorCenter: 'Agentic SDLC förändrar också affärsmodellen för mjukvaruleverans', connectorRightLabel: 'Programmerbar exekvering', connectorRightDesc: 'Korta bursts, parallella flöden, dynamisk allokering.' },
    beyond: { eyebrow: 'Bench Management becomed critical', heading: 'Bortom Time & Materials', lead: 'Staffing sålde tid. Nästa modell säljer exekveringsbursts.', before: 'Förr', beforeValue: 'människor × tid', beforeCaption: 'fakturerbara dagar · stabil staffing · långa projekt', now: 'Nu', nowValue: 'exekveringsbursts', nowCaption: 'parallella flöden · korta cykler · dynamisk allokering', clientsEyebrow: 'Vad som förändras för kunder', clientsTitle: 'Beslutet handlar inte längre om hur många personer i hur många månader.', closing: 'Projekt brukade förbruka fakturerbara dagar. Nu förbrukar de exekveringsbursts.' },
    core: { eyebrow: 'Kärnförändring', heading: 'Utvecklarrollens kärnförändring.', body: 'När coding agents tar över mer arbete försvinner inte utvecklare. Rollen förändras mot övervakning, granskning, validering och omdöme kring vad som inte ska automatiseras blint.' },
    metrics: { eyebrow: 'Mätetal', heading: 'Utan mätetal finns ingen transformation.', body: 'Om AI-bidrag, omarbete, kvalitet och övervakning inte mäts förblir adoptionen anekdotisk och kan inte skala.', measuredLabel: 'Vad som måste mätas', statement: 'Mätning framför anekdoter.', statementBody: 'Det som mäts kan styras.', supervisionCoverage: 'Övervakningstäckning', reworkReduction: 'Minskat omarbete', velocityTitle: 'Hastighet med kontroll', traceability: 'Spårbarhet', unreviewedMerges: 'Ogranskade merges' },
    audience: { eyebrow: 'För vem', heading: 'För team som behöver AI-hastighet med leveransansvar.', body: 'För organisationer som redan experimenterar med AI-codingverktyg och söker en hållbar operativ modell.' },
    blueprint: { eyebrow: 'Blueprint', heading: 'Att införa AI-verktyg är inte en leveransmodell.', levelsLabel: 'Tre nivåer' },
    engagement: { eyebrow: 'Engagement', heading: 'En sprint för att definiera den operativa modellen.', body: 'I en fokuserad arbetssprint linjerar vi ledning och engineering kring prioriteringar, governance och mätning.', quote: 'Ett fokuserat engagement för att definiera verklighet, prioriteringar och arbetsregler som gör AI-övervakning verklig.' },
    contact: { eyebrow: 'Starta samtalet', heading: 'Fortfarande i sandboxläge?', body: 'Om AI redan finns i era leveransflöden är nästa steg kontroll, övervakning och mätbar exekvering.', cta: 'Boka ett intro-samtal' },
    footer: { tagline: 'AI-driven transformation av mjukvaruleverans' },
  }),
  da: mergeCopy(copy.en, {
    meta: { title: 'Agentic SDLC | AI-drevet transformation af softwareleverance' },
    nav: { primaryLabel: 'Primær navigation', beyond: 'Ud over T&M', blueprint: 'Blueprint', metrics: 'Målinger', contact: 'Kontakt', blog: 'Vores blog: Learn & Project', language: 'Sprog' },
    hero: { eyebrow: 'FREMTIDEN FOR SOFTWARE ENGINEERING', h1Rest: 'Fra AI-udviklingsværktøjer til pålidelige systemer for softwareleverance.', subtitle: 'Gå fra AI-eksperimenter til en leverancemodel, som kunder kan stole på.', primaryCta: 'Book et introopkald', secondaryCta: 'Selvevaluering for ledere', liveLabel: 'LIVE-kontrol · Agentic SDLC', pipeline: 'Leverancepipeline', steps: ['Planlæg', 'Byg', 'Review', 'Ship', 'Mål'], eventsLabel: 'Live events', supervision: 'Supervision', coverage: 'dækning', aiContribution: 'AI-bidrag', rework: 'Omarbejde', quality: 'Kvalitet', agentPool: 'Agentpool', agentPoolStatus: 'online · 0 stoppet', connectorLeftLabel: 'Klassisk T&M', connectorLeftDesc: 'Body shopping, fakturerbare dage, lange staffingcyklusser.', connectorCenter: 'Agentic SDLC ændrer også forretningsmodellen for softwareleverance', connectorRightLabel: 'Programmerbar eksekvering', connectorRightDesc: 'Korte bursts, parallelle strømme, dynamisk allokering.' },
    beyond: { eyebrow: 'Bench Management becomed critical', heading: 'Ud over Time & Materials', lead: 'Staffing solgte tid. Den næste model sælger eksekveringsbursts.', before: 'Før', beforeValue: 'mennesker × tid', beforeCaption: 'fakturerbare dage · stabil staffing · lange projekter', now: 'Nu', nowValue: 'eksekveringsbursts', nowCaption: 'parallelle strømme · korte cyklusser · dynamisk allokering', clientsEyebrow: 'Hvad ændrer sig for kunder', clientsTitle: 'Beslutningen handler ikke længere om hvor mange mennesker i hvor mange måneder.', closing: 'Projekter brugte før fakturerbare dage. Nu bruger de eksekveringsbursts.' },
    core: { eyebrow: 'Kerneskift', heading: 'Kerneskiftet i udviklerens rolle.', body: 'Når coding agents overtager mere arbejde, forsvinder udviklere ikke. Rollen flytter sig mod supervision, review, validering og dømmekraft om, hvad der ikke må automatiseres blindt.' },
    metrics: { eyebrow: 'Målinger', heading: 'Uden målinger er der ingen transformation.', body: 'Hvis AI-bidrag, omarbejde, kvalitet og supervision ikke måles, forbliver adoptionen anekdotisk og kan ikke skaleres.', measuredLabel: 'Hvad skal måles', statement: 'Måling over anekdoter.', statementBody: 'Det, der måles, kan styres.', supervisionCoverage: 'Supervisionsdækning', reworkReduction: 'Reduceret omarbejde', velocityTitle: 'Hastighed med kontrol', traceability: 'Sporbarhed', unreviewedMerges: 'Ureviewede merges' },
    audience: { eyebrow: 'Hvem det er for', heading: 'For teams der har brug for AI-hastighed med leveranceansvar.', body: 'For organisationer der allerede eksperimenterer med AI-codingværktøjer og nu søger en holdbar driftsmodel.' },
    blueprint: { eyebrow: 'Blueprint', heading: 'Adoption af AI-værktøjer er ikke en leverancemodel.', levelsLabel: 'Tre niveauer' },
    engagement: { eyebrow: 'Engagement', heading: 'Én sprint til at definere driftsmodellen.', body: 'I en fokuseret arbejdssprint samler vi ledelse og engineering om prioriteter, governance og måling.', quote: 'Et fokuseret engagement til at definere virkelighed, prioriteter og arbejdsregler, der gør AI-supervision reel.' },
    contact: { eyebrow: 'Start samtalen', heading: 'Stadig i sandbox-tilstand?', body: 'Hvis AI allerede er i jeres delivery workflows, er næste skridt kontrol, supervision og målbar eksekvering.', cta: 'Book et introopkald' },
    footer: { tagline: 'AI-drevet transformation af softwareleverance' },
  }),
  fi: mergeCopy(copy.en, {
    meta: { title: 'Agentic SDLC | AI-pohjainen ohjelmistotoimituksen muutos' },
    nav: { primaryLabel: 'Päänavigaatio', beyond: 'T&M:n yli', blueprint: 'Blueprint', metrics: 'Mittarit', contact: 'Yhteys', blog: 'Blogimme: Learn & Project', language: 'Kieli' },
    hero: { eyebrow: 'OHJELMISTOKEHITYKSEN TULEVAISUUS', h1Rest: 'AI-kehitystyökaluista luotettaviin ohjelmistotoimituksen järjestelmiin.', subtitle: 'Siirry AI-kokeiluista toimitusmalliin, johon asiakkaat voivat luottaa.', primaryCta: 'Varaa esittelypuhelu', secondaryCta: 'Johdon itsearviointi', liveLabel: 'LIVE-ohjaus · Agentic SDLC', pipeline: 'Toimitusputki', steps: ['Suunnittele', 'Rakenna', 'Tarkista', 'Julkaise', 'Mittaa'], eventsLabel: 'Live-tapahtumat', supervision: 'Valvonta', coverage: 'kattavuus', aiContribution: 'AI-osuus', rework: 'Uudelleentyö', quality: 'Laatu', agentPool: 'Agenttipooli', agentPoolStatus: 'online · 0 jumissa', connectorLeftLabel: 'Klassinen T&M', connectorLeftDesc: 'Body shopping, laskutettavat päivät, pitkät staffing-syklit.', connectorCenter: 'Agentic SDLC muuttaa myös ohjelmistotoimituksen liiketoimintamallia', connectorRightLabel: 'Ohjelmoitava suoritus', connectorRightDesc: 'Lyhyet burst-jaksot, rinnakkaiset virrat, dynaaminen allokointi.' },
    beyond: { eyebrow: 'Bench Management becomed critical', heading: 'Time & Materialsin yli', lead: 'Staffing myi aikaa. Seuraava malli myy suoritusbursteja.', before: 'Ennen', beforeValue: 'ihmiset × aika', beforeCaption: 'laskutettavat päivät · vakaa staffing · pitkät projektit', now: 'Nyt', nowValue: 'suoritusburstit', nowCaption: 'rinnakkaiset virrat · lyhyet syklit · dynaaminen allokointi', clientsEyebrow: 'Mikä muuttuu asiakkaille', clientsTitle: 'Päätös ei enää ole montako ihmistä ja kuinka moniksi kuukausiksi.', closing: 'Projektit kuluttivat ennen laskutettavia päiviä. Nyt ne kuluttavat suoritusbursteja.' },
    core: { eyebrow: 'Roolin muutos', heading: 'Kehittäjän roolin keskeinen muutos.', body: 'Kun coding agents ottavat enemmän työtä, kehittäjät eivät katoa. Rooli muuttuu valvonnaksi, reviewksi, validoinniksi ja harkinnaksi siitä, mitä ei saa automatisoida sokeasti.' },
    metrics: { eyebrow: 'Mittarit', heading: 'Ilman mittareita ei ole transformaatiota.', body: 'Jos AI-osuutta, uudelleentyötä, laatua ja valvontaa ei mitata, käyttöönotto jää anekdoottiseksi eikä skaalaudu.', measuredLabel: 'Mitä pitää mitata', statement: 'Mittaaminen ennen anekdootteja.', statementBody: 'Mitä mitataan, sitä voidaan hallita.', supervisionCoverage: 'Valvonnan kattavuus', reworkReduction: 'Uudelleentyön vähennys', velocityTitle: 'Nopeus hallinnassa', traceability: 'Jäljitettävyys', unreviewedMerges: 'Reviewtta mergetyt' },
    audience: { eyebrow: 'Kenelle', heading: 'Tiimeille, jotka tarvitsevat AI-nopeutta ja toimitusvastuuta.', body: 'Organisaatioille, jotka jo kokeilevat AI-codingtyökaluja ja etsivät kestävää toimintamallia.' },
    blueprint: { eyebrow: 'Blueprint', heading: 'AI-työkalujen käyttöönotto ei ole toimitusmalli.', levelsLabel: 'Kolme tasoa' },
    engagement: { eyebrow: 'Engagement', heading: 'Yksi sprintti toimintamallin määrittelyyn.', body: 'Fokusoidussa työsprintissä linjaamme johdon ja engineeringin prioriteettien, governancen ja mittaamisen ympärille.', quote: 'Fokusoitu engagement, joka määrittää todellisuuden, prioriteetit ja toimintaperiaatteet, jotka tekevät AI-valvonnasta todellista.' },
    contact: { eyebrow: 'Aloita keskustelu', heading: 'Vielä sandbox-tilassa?', body: 'Jos AI on jo toimitusworkflowsi sisällä, seuraava askel on kontrolli, valvonta ja mitattava suoritus.', cta: 'Varaa esittelypuhelu' },
    footer: { tagline: 'AI-pohjainen ohjelmistotoimituksen muutos' },
  }),
  cs: mergeCopy(copy.en, {
    meta: { title: 'Agentic SDLC | Transformace dodávky softwaru pomocí AI' },
    nav: { primaryLabel: 'Hlavní navigace', beyond: 'Za hranice T&M', blueprint: 'Blueprint', metrics: 'Metriky', contact: 'Kontakt', blog: 'Náš blog: Learn & Project', language: 'Jazyk' },
    hero: { eyebrow: 'BUDOUCNOST SOFTWARE ENGINEERINGU', h1Rest: 'Od AI nástrojů pro vývoj k spolehlivým systémům dodávky softwaru.', subtitle: 'Přejděte od AI experimentů k modelu dodávky, kterému mohou klienti věřit.', primaryCta: 'Rezervovat úvodní hovor', secondaryCta: 'Sebehodnocení pro vedení', liveLabel: 'LIVE kontrola · Agentic SDLC', pipeline: 'Delivery pipeline', steps: ['Plán', 'Build', 'Review', 'Release', 'Měření'], eventsLabel: 'Živé události', supervision: 'Dohled', coverage: 'pokrytí', aiContribution: 'AI příspěvek', rework: 'Přepracování', quality: 'Kvalita', agentPool: 'Pool agentů', agentPoolStatus: 'online · 0 zaseknuto', connectorLeftLabel: 'Klasické T&M', connectorLeftDesc: 'Body shopping, fakturovatelné dny, dlouhé staffing cykly.', connectorCenter: 'Agentic SDLC mění i obchodní model dodávky softwaru', connectorRightLabel: 'Programovatelná exekuce', connectorRightDesc: 'Krátké bursty, paralelní proudy, dynamická alokace.' },
    beyond: { eyebrow: 'Bench Management becomed critical', heading: 'Za hranice Time & Materials', lead: 'Staffing prodával čas. Další model prodává exekuční bursty.', before: 'Dříve', beforeValue: 'lidé × čas', beforeCaption: 'fakturovatelné dny · stabilní staffing · dlouhé projekty', now: 'Nyní', nowValue: 'exekuční bursty', nowCaption: 'paralelní proudy · krátké cykly · dynamická alokace', clientsEyebrow: 'Co se mění pro klienty', clientsTitle: 'Rozhodnutí už není kolik lidí obsadit na kolik měsíců.', closing: 'Projekty dříve spotřebovávaly fakturovatelné dny. Teď spotřebovávají exekuční bursty.' },
    core: { eyebrow: 'Změna role', heading: 'Zásadní změna role vývojáře.', body: 'Jak coding agents přebírají více práce, vývojáři nemizí. Role se mění směrem k dohledu, review, validaci a úsudku, co neautomatizovat naslepo.' },
    metrics: { eyebrow: 'Metriky', heading: 'Bez metrik není transformace.', body: 'Pokud se AI příspěvek, přepracování, kvalita a dohled neměří, adopce zůstává anekdotická a nelze ji škálovat.', measuredLabel: 'Co měřit', statement: 'Měření místo anekdot.', statementBody: 'Co se měří, to lze řídit.', supervisionCoverage: 'Pokrytí dohledu', reworkReduction: 'Snížení přepracování', velocityTitle: 'Rychlost pod kontrolou', traceability: 'Trasovatelnost', unreviewedMerges: 'Merge bez review' },
    audience: { eyebrow: 'Pro koho', heading: 'Pro týmy, které potřebují rychlost AI s odpovědností za delivery.', body: 'Pro organizace, které už experimentují s AI coding nástroji a hledají trvalý operační model.' },
    blueprint: { eyebrow: 'Blueprint', heading: 'Adopce AI nástrojů není model delivery.', levelsLabel: 'Tři úrovně' },
    engagement: { eyebrow: 'Engagement', heading: 'Jeden sprint pro definici operačního modelu.', body: 'Ve fokusovaném pracovním sprintu sladíme leadership a engineering kolem priorit, governance a měření.', quote: 'Fokusovaný engagement pro definici reality, priorit a pravidel, která dělají AI dohled skutečným.' },
    contact: { eyebrow: 'Začněte rozhovor', heading: 'Stále v sandbox módu?', body: 'Pokud AI už vstupuje do vašich delivery workflow, dalším krokem je kontrola, dohled a měřitelná exekuce.', cta: 'Rezervovat úvodní hovor' },
    footer: { tagline: 'Transformace dodávky softwaru pomocí AI' },
  }),
  hu: mergeCopy(copy.en, {
    meta: { title: 'Agentic SDLC | AI-alapú szoftverszállítási transzformáció' },
    nav: { primaryLabel: 'Fő navigáció', beyond: 'T&M-en túl', blueprint: 'Blueprint', metrics: 'Mérőszámok', contact: 'Kapcsolat', blog: 'Blogunk: Learn & Project', language: 'Nyelv' },
    hero: { eyebrow: 'A SOFTWARE ENGINEERING JÖVŐJE', h1Rest: 'AI fejlesztőeszközöktől megbízható szoftverszállítási rendszerekig.', subtitle: 'Lépjen túl az AI-kísérletezésen egy olyan delivery modell felé, amelyben az ügyfelek megbíznak.', primaryCta: 'Foglaljon bevezető hívást', secondaryCta: 'Önértékelés vezetőknek', liveLabel: 'LIVE kontroll · Agentic SDLC', pipeline: 'Delivery pipeline', steps: ['Tervezés', 'Építés', 'Review', 'Kiadás', 'Mérés'], eventsLabel: 'Élő események', supervision: 'Felügyelet', coverage: 'lefedettség', aiContribution: 'AI-hozzájárulás', rework: 'Újramunka', quality: 'Minőség', agentPool: 'Agent pool', agentPoolStatus: 'online · 0 elakadt', connectorLeftLabel: 'Klasszikus T&M', connectorLeftDesc: 'Body shopping, számlázható napok, hosszú staffing ciklusok.', connectorCenter: 'Az Agentic SDLC a szoftverszállítás üzleti modelljét is megváltoztatja', connectorRightLabel: 'Programozható végrehajtás', connectorRightDesc: 'Rövid burstök, párhuzamos folyamok, dinamikus allokáció.' },
    beyond: { eyebrow: 'Bench Management becomed critical', heading: 'Time & Materials után', lead: 'A staffing időt adott el. A következő modell végrehajtási burstöket ad el.', before: 'Korábban', beforeValue: 'emberek × idő', beforeCaption: 'számlázható napok · stabil staffing · hosszú projektek', now: 'Most', nowValue: 'végrehajtási burstök', nowCaption: 'párhuzamos folyamok · rövid ciklusok · dinamikus allokáció', clientsEyebrow: 'Mi változik az ügyfeleknek', clientsTitle: 'A döntés már nem az, hány embert hány hónapra állítsunk rá.', closing: 'A projektek régen számlázható napokat fogyasztottak. Most végrehajtási burstöket.' },
    core: { eyebrow: 'Szerepváltozás', heading: 'A fejlesztői szerep alapvető változása.', body: 'Ahogy a coding agentek több munkát vesznek át, a fejlesztők nem tűnnek el. A szerep a felügyelet, review, validáció és annak megítélése felé mozdul, mit nem szabad vakon automatizálni.' },
    metrics: { eyebrow: 'Mérőszámok', heading: 'Mérőszámok nélkül nincs transzformáció.', body: 'Ha az AI-hozzájárulást, újramunkát, minőséget és felügyeletet nem mérjük, az adaptáció anekdotikus marad és nem skálázódik.', measuredLabel: 'Mit kell mérni', statement: 'Mérés a történetek helyett.', statementBody: 'Ami mérhető, az irányítható.', supervisionCoverage: 'Felügyeleti lefedettség', reworkReduction: 'Újramunka csökkentése', velocityTitle: 'Sebesség kontrollal', traceability: 'Nyomon követhetőség', unreviewedMerges: 'Review nélküli merge-ek' },
    audience: { eyebrow: 'Kinek szól', heading: 'Csapatoknak, akik AI-sebességet akarnak delivery felelősséggel.', body: 'Olyan szervezeteknek, amelyek már kísérleteznek AI coding eszközökkel, és tartós működési modellt keresnek.' },
    blueprint: { eyebrow: 'Blueprint', heading: 'Az AI-eszközök bevezetése még nem delivery modell.', levelsLabel: 'Három szint' },
    engagement: { eyebrow: 'Engagement', heading: 'Egy sprint a működési modell meghatározására.', body: 'Egy fókuszált munkasprintben összehangoljuk a leadershipet és engineeringet a prioritások, governance és mérés körül.', quote: 'Fókuszált engagement a valóság, prioritások és működési szabályok meghatározására, amelyek valódivá teszik az AI-felügyeletet.' },
    contact: { eyebrow: 'Kezdjük a beszélgetést', heading: 'Még sandbox módban?', body: 'Ha az AI már belépett a delivery workflow-kba, a következő lépés a kontroll, felügyelet és mérhető végrehajtás.', cta: 'Foglaljon bevezető hívást' },
    footer: { tagline: 'AI-alapú szoftverszállítási transzformáció' },
  }),
  hr: mergeCopy(copy.en, {
    meta: { title: 'Agentic SDLC | Transformacija isporuke softvera uz AI' },
    nav: { primaryLabel: 'Glavna navigacija', beyond: 'Iza T&M-a', blueprint: 'Blueprint', metrics: 'Metrike', contact: 'Kontakt', blog: 'Naš blog: Learn & Project', language: 'Jezik' },
    hero: { eyebrow: 'BUDUĆNOST SOFTWARE ENGINEERINGA', h1Rest: 'Od AI alata za razvoj do pouzdanih sustava za isporuku softvera.', subtitle: 'Prijeđite s AI eksperimentiranja na model isporuke kojem klijenti mogu vjerovati.', primaryCta: 'Rezerviraj uvodni poziv', secondaryCta: 'Samoprocjena za voditelje', liveLabel: 'LIVE kontrola · Agentic SDLC', pipeline: 'Pipeline isporuke', steps: ['Plan', 'Build', 'Review', 'Isporuka', 'Mjerenje'], eventsLabel: 'Live događaji', supervision: 'Nadzor', coverage: 'pokrivenost', aiContribution: 'AI doprinos', rework: 'Dorade', quality: 'Kvaliteta', agentPool: 'Pool agenata', agentPoolStatus: 'online · 0 blokirano', connectorLeftLabel: 'Klasični T&M', connectorLeftDesc: 'Body shopping, naplativi dani, dugi staffing ciklusi.', connectorCenter: 'Agentic SDLC mijenja i poslovni model isporuke softvera', connectorRightLabel: 'Programabilna izvedba', connectorRightDesc: 'Kratki burstovi, paralelni tokovi, dinamička alokacija.' },
    beyond: { eyebrow: 'Bench Management becomed critical', heading: 'Iza Time & Materials', lead: 'Staffing je prodavao vrijeme. Sljedeći model prodaje burstove izvedbe.', before: 'Prije', beforeValue: 'ljudi × vrijeme', beforeCaption: 'naplativi dani · stabilan staffing · dugi projekti', now: 'Sada', nowValue: 'burstovi izvedbe', nowCaption: 'paralelni tokovi · kratki ciklusi · dinamička alokacija', clientsEyebrow: 'Što se mijenja za klijente', clientsTitle: 'Odluka više nije koliko ljudi angažirati i na koliko mjeseci.', closing: 'Projekti su nekad trošili naplative dane. Sada troše burstove izvedbe.' },
    core: { eyebrow: 'Promjena uloge', heading: 'Ključna promjena uloge developera.', body: 'Kako coding agenti preuzimaju više posla, developeri ne nestaju. Uloga se mijenja prema nadzoru, reviewu, validaciji i prosudbi što ne automatizirati naslijepo.' },
    metrics: { eyebrow: 'Metrike', heading: 'Bez metrika nema transformacije.', body: 'Ako se AI doprinos, dorade, kvaliteta i nadzor ne mjere, adopcija ostaje anegdotalna i ne može skalirati.', measuredLabel: 'Što treba mjeriti', statement: 'Mjerenje umjesto anegdota.', statementBody: 'Ono što se mjeri može se upravljati.', supervisionCoverage: 'Pokrivenost nadzorom', reworkReduction: 'Smanjenje dorada', velocityTitle: 'Brzina pod kontrolom', traceability: 'Sljedivost', unreviewedMerges: 'Mergevi bez reviewa' },
    audience: { eyebrow: 'Za koga', heading: 'Za timove kojima treba AI brzina uz odgovornost isporuke.', body: 'Za organizacije koje već eksperimentiraju s AI coding alatima i sada traže održiv operativni model.' },
    blueprint: { eyebrow: 'Blueprint', heading: 'Uvođenje AI alata nije model isporuke.', levelsLabel: 'Tri razine' },
    engagement: { eyebrow: 'Engagement', heading: 'Jedan sprint za definiranje operativnog modela.', body: 'U fokusiranom radnom sprintu usklađujemo leadership i engineering oko prioriteta, governancea i mjerenja.', quote: 'Fokusirani engagement za definiranje stvarnosti, prioriteta i radnih pravila koja AI nadzor čine stvarnim.' },
    contact: { eyebrow: 'Započnite razgovor', heading: 'Još uvijek u sandbox modu?', body: 'Ako AI već ulazi u vaše delivery workflowe, sljedeći korak je kontrola, nadzor i mjerljiva izvedba.', cta: 'Rezerviraj uvodni poziv' },
    footer: { tagline: 'Transformacija isporuke softvera uz AI' },
  }),
  sr: mergeCopy(copy.en, {
    meta: { title: 'Agentic SDLC | Трансформација испоруке софтвера уз AI' },
    nav: { primaryLabel: 'Главна навигација', beyond: 'Изван T&M', blueprint: 'Blueprint', metrics: 'Метрике', contact: 'Контакт', blog: 'Наш блог: Learn & Project', language: 'Језик' },
    hero: { eyebrow: 'БУДУЋНОСТ SOFTWARE ENGINEERING-А', h1Rest: 'Од AI алата за развој до поузданих система за испоруку софтвера.', subtitle: 'Пређите са AI експериментисања на модел испоруке коме клијенти могу да верују.', primaryCta: 'Закажите уводни позив', secondaryCta: 'Самопроцена за руководиоце', liveLabel: 'LIVE контрола · Agentic SDLC', pipeline: 'Pipeline испоруке', steps: ['План', 'Build', 'Review', 'Испорука', 'Мерење'], eventsLabel: 'Live догађаји', supervision: 'Надзор', coverage: 'покривеност', aiContribution: 'AI допринос', rework: 'Дораде', quality: 'Квалитет', agentPool: 'Пул агената', agentPoolStatus: 'online · 0 блокирано', connectorLeftLabel: 'Класични T&M', connectorLeftDesc: 'Body shopping, наплативи дани, дуги staffing циклуси.', connectorCenter: 'Agentic SDLC мења и пословни модел испоруке софтвера', connectorRightLabel: 'Програмабилна изведба', connectorRightDesc: 'Кратки burst-ови, паралелни токови, динамичка алокација.' },
    beyond: { eyebrow: 'Bench Management becomed critical', heading: 'Изван Time & Materials', lead: 'Staffing је продавао време. Следећи модел продаје burst-ове изведбе.', before: 'Раније', beforeValue: 'људи × време', beforeCaption: 'наплативи дани · стабилан staffing · дуги пројекти', now: 'Сада', nowValue: 'burst-ови изведбе', nowCaption: 'паралелни токови · кратки циклуси · динамичка алокација', clientsEyebrow: 'Шта се мења за клијенте', clientsTitle: 'Одлука више није колико људи ангажовати и на колико месеци.', closing: 'Пројекти су некад трошили наплативе дане. Сада троше burst-ове изведбе.' },
    core: { eyebrow: 'Промена улоге', heading: 'Кључна промена улоге програмера.', body: 'Како coding agents преузимају више посла, програмери не нестају. Улога се помера ка надзору, review-у, валидацији и процени шта не треба слепо аутоматизовати.' },
    metrics: { eyebrow: 'Метрике', heading: 'Без метрика нема трансформације.', body: 'Ако се AI допринос, дораде, квалитет и надзор не мере, усвајање остаје анегдотско и не може да скалира.', measuredLabel: 'Шта треба мерити', statement: 'Мерење уместо анегдота.', statementBody: 'Оним што се мери може се управљати.', supervisionCoverage: 'Покривеност надзором', reworkReduction: 'Смањење дорада', velocityTitle: 'Брзина под контролом', traceability: 'Следљивост', unreviewedMerges: 'Merge без review-а' },
    audience: { eyebrow: 'За кога', heading: 'За тимове којима треба AI брзина уз одговорност испоруке.', body: 'За организације које већ експериментишу са AI coding алатима и траже одржив оперативни модел.' },
    blueprint: { eyebrow: 'Blueprint', heading: 'Увођење AI алата није модел испоруке.', levelsLabel: 'Три нивоа' },
    engagement: { eyebrow: 'Engagement', heading: 'Један sprint за дефинисање оперативног модела.', body: 'У фокусираном радном sprint-у усклађујемо leadership и engineering око приоритета, governance-а и мерења.', quote: 'Фокусиран engagement за дефинисање реалности, приоритета и правила рада која AI надзор чине стварним.' },
    contact: { eyebrow: 'Започните разговор', heading: 'Још увек у sandbox режиму?', body: 'Ако AI већ улази у ваше delivery workflow-е, следећи корак је контрола, надзор и мерљива изведба.', cta: 'Закажите уводни позив' },
    footer: { tagline: 'Трансформација испоруке софтвера уз AI' },
  }),
  el: mergeCopy(copy.en, {
    meta: { title: 'Agentic SDLC | Μετασχηματισμός παράδοσης λογισμικού με AI' },
    nav: { primaryLabel: 'Κύρια πλοήγηση', beyond: 'Πέρα από T&M', blueprint: 'Blueprint', metrics: 'Μετρικές', contact: 'Επικοινωνία', blog: 'Το blog μας: Learn & Project', language: 'Γλώσσα' },
    hero: { eyebrow: 'ΤΟ ΜΕΛΛΟΝ ΤΟΥ SOFTWARE ENGINEERING', h1Rest: 'Από AI εργαλεία ανάπτυξης σε αξιόπιστα συστήματα παράδοσης λογισμικού.', subtitle: 'Περάστε από τον πειραματισμό με AI σε ένα μοντέλο delivery που οι πελάτες μπορούν να εμπιστευτούν.', primaryCta: 'Κλείστε εισαγωγική κλήση', secondaryCta: 'Αυτοαξιολόγηση για στελέχη', liveLabel: 'LIVE έλεγχος · Agentic SDLC', pipeline: 'Pipeline παράδοσης', steps: ['Σχέδιο', 'Build', 'Review', 'Ship', 'Μέτρηση'], eventsLabel: 'Live γεγονότα', supervision: 'Επίβλεψη', coverage: 'κάλυψη', aiContribution: 'Συνεισφορά AI', rework: 'Επανεργασία', quality: 'Ποιότητα', agentPool: 'Pool agents', agentPoolStatus: 'online · 0 κολλημένα', connectorLeftLabel: 'Κλασικό T&M', connectorLeftDesc: 'Body shopping, χρεώσιμες ημέρες, μακριοί κύκλοι staffing.', connectorCenter: 'Το Agentic SDLC αλλάζει και το επιχειρηματικό μοντέλο της παράδοσης λογισμικού', connectorRightLabel: 'Προγραμματίσιμη εκτέλεση', connectorRightDesc: 'Σύντομα bursts, παράλληλες ροές, δυναμική κατανομή.' },
    beyond: { eyebrow: 'Bench Management becomed critical', heading: 'Πέρα από Time & Materials', lead: 'Το staffing πουλούσε χρόνο. Το επόμενο μοντέλο πουλά bursts εκτέλεσης.', before: 'Πριν', beforeValue: 'άνθρωποι × χρόνος', beforeCaption: 'χρεώσιμες ημέρες · σταθερό staffing · μεγάλα έργα', now: 'Τώρα', nowValue: 'bursts εκτέλεσης', nowCaption: 'παράλληλες ροές · σύντομοι κύκλοι · δυναμική κατανομή', clientsEyebrow: 'Τι αλλάζει για τους πελάτες', clientsTitle: 'Η απόφαση δεν είναι πια πόσους ανθρώπους για πόσους μήνες.', closing: 'Τα έργα κατανάλωναν χρεώσιμες ημέρες. Τώρα καταναλώνουν bursts εκτέλεσης.' },
    core: { eyebrow: 'Κεντρική αλλαγή', heading: 'Η κεντρική αλλαγή στον ρόλο του developer.', body: 'Καθώς τα coding agents αναλαμβάνουν περισσότερη δουλειά, οι developers δεν εξαφανίζονται. Ο ρόλος μετακινείται στην επίβλεψη, το review, την επικύρωση και την κρίση για το τι δεν αυτοματοποιείται τυφλά.' },
    metrics: { eyebrow: 'Μετρικές', heading: 'Χωρίς μετρικές δεν υπάρχει μετασχηματισμός.', body: 'Αν η συνεισφορά AI, η επανεργασία, η ποιότητα και η επίβλεψη δεν μετρώνται, η υιοθέτηση μένει ανεκδοτική και δεν κλιμακώνεται.', measuredLabel: 'Τι πρέπει να μετρηθεί', statement: 'Μέτρηση αντί για ανεκδοτολογία.', statementBody: 'Ό,τι μετριέται μπορεί να διοικηθεί.', supervisionCoverage: 'Κάλυψη επίβλεψης', reworkReduction: 'Μείωση επανεργασίας', velocityTitle: 'Ταχύτητα με έλεγχο', traceability: 'Ιχνηλασιμότητα', unreviewedMerges: 'Merges χωρίς review' },
    audience: { eyebrow: 'Για ποιους', heading: 'Για ομάδες που χρειάζονται ταχύτητα AI με ευθύνη delivery.', body: 'Για οργανισμούς που ήδη πειραματίζονται με AI coding tools και αναζητούν ένα βιώσιμο λειτουργικό μοντέλο.' },
    blueprint: { eyebrow: 'Blueprint', heading: 'Η υιοθέτηση AI εργαλείων δεν είναι μοντέλο delivery.', levelsLabel: 'Τρία επίπεδα' },
    engagement: { eyebrow: 'Engagement', heading: 'Ένα sprint για να οριστεί το λειτουργικό μοντέλο.', body: 'Σε ένα εστιασμένο sprint ευθυγραμμίζουμε leadership και engineering γύρω από προτεραιότητες, governance και μέτρηση.', quote: 'Ένα εστιασμένο engagement για να οριστούν η πραγματικότητα, οι προτεραιότητες και οι κανόνες που κάνουν την AI επίβλεψη πραγματική.' },
    contact: { eyebrow: 'Ξεκινήστε τη συζήτηση', heading: 'Ακόμα σε sandbox mode;', body: 'Αν το AI έχει ήδη μπει στα delivery workflows σας, το επόμενο βήμα είναι έλεγχος, επίβλεψη και μετρήσιμη εκτέλεση.', cta: 'Κλείστε εισαγωγική κλήση' },
    footer: { tagline: 'Μετασχηματισμός παράδοσης λογισμικού με AI' },
  }),
  tr: mergeCopy(copy.en, {
    meta: { title: 'Agentic SDLC | AI destekli yazılım teslimatı dönüşümü' },
    nav: { primaryLabel: 'Birincil navigasyon', beyond: 'T&M ötesi', blueprint: 'Blueprint', metrics: 'Metrikler', contact: 'İletişim', blog: 'Blogumuz: Learn & Project', language: 'Dil' },
    hero: { eyebrow: 'SOFTWARE ENGINEERING’İN GELECEĞİ', h1Rest: 'AI geliştirme araçlarından güvenilir yazılım teslimat sistemlerine.', subtitle: 'AI denemelerinden müşterilerinizin güvenebileceği bir teslimat modeline geçin.', primaryCta: 'Tanışma görüşmesi ayır', secondaryCta: 'Yöneticiler için öz değerlendirme', liveLabel: 'LIVE kontrol · Agentic SDLC', pipeline: 'Teslimat pipeline’ı', steps: ['Planla', 'Geliştir', 'Review', 'Yayınla', 'Ölç'], eventsLabel: 'Canlı olaylar', supervision: 'Gözetim', coverage: 'kapsam', aiContribution: 'AI katkısı', rework: 'Yeniden iş', quality: 'Kalite', agentPool: 'Agent havuzu', agentPoolStatus: 'online · 0 takıldı', connectorLeftLabel: 'Klasik T&M', connectorLeftDesc: 'Body shopping, faturalandırılabilir günler, uzun staffing döngüleri.', connectorCenter: 'Agentic SDLC yazılım teslimatının iş modelini de değiştirir', connectorRightLabel: 'Programlanabilir yürütme', connectorRightDesc: 'Kısa burstler, paralel akışlar, dinamik tahsis.' },
    beyond: { eyebrow: 'Bench Management becomed critical', heading: 'Time & Materials ötesi', lead: 'Staffing zaman satıyordu. Yeni model yürütme burstleri satar.', before: 'Önce', beforeValue: 'insan × zaman', beforeCaption: 'faturalandırılabilir günler · stabil staffing · uzun projeler', now: 'Şimdi', nowValue: 'yürütme burstleri', nowCaption: 'paralel akışlar · kısa döngüler · dinamik tahsis', clientsEyebrow: 'Müşteriler için ne değişiyor', clientsTitle: 'Karar artık kaç kişiyi kaç ay görevlendirmek değil.', closing: 'Projeler eskiden faturalandırılabilir günler tüketirdi. Şimdi yürütme burstleri tüketiyor.' },
    core: { eyebrow: 'Temel değişim', heading: 'Geliştirici rolündeki temel değişim.', body: 'Coding agent’lar daha fazla işi üstlendikçe geliştiriciler ortadan kaybolmaz. Rol; gözetim, review, doğrulama ve neyin körlemesine otomatikleştirilmeyeceğine karar verme yönüne kayar.' },
    metrics: { eyebrow: 'Metrikler', heading: 'Metrik yoksa dönüşüm yoktur.', body: 'AI katkısı, yeniden iş, kalite ve gözetim ölçülmezse benimseme anekdot düzeyinde kalır ve ölçeklenemez.', measuredLabel: 'Ne ölçülmeli', statement: 'Anekdot yerine ölçüm.', statementBody: 'Ölçülen şey yönetilebilir.', supervisionCoverage: 'Gözetim kapsamı', reworkReduction: 'Yeniden iş azaltımı', velocityTitle: 'Kontrollü hız', traceability: 'İzlenebilirlik', unreviewedMerges: 'Review edilmemiş merge’ler' },
    audience: { eyebrow: 'Kimler için', heading: 'AI hızına delivery sorumluluğuyla ihtiyaç duyan ekipler için.', body: 'AI coding araçlarını zaten deneyen ve kalıcı bir işletim modeli arayan organizasyonlar için.' },
    blueprint: { eyebrow: 'Blueprint', heading: 'AI araçlarını benimsemek bir delivery modeli değildir.', levelsLabel: 'Üç seviye' },
    engagement: { eyebrow: 'Engagement', heading: 'İşletim modelini tanımlamak için bir sprint.', body: 'Odaklı bir çalışma sprintinde leadership ve engineering’i öncelikler, governance ve ölçüm etrafında hizalarız.', quote: 'AI gözetimini gerçek kılan gerçekliği, öncelikleri ve işletim kurallarını tanımlamak için odaklı bir engagement.' },
    contact: { eyebrow: 'Sohbeti başlatın', heading: 'Hâlâ sandbox modunda mısınız?', body: 'AI teslimat workflow’larınıza zaten giriyorsa sonraki adım kontrol, gözetim ve ölçülebilir yürütmedir.', cta: 'Tanışma görüşmesi ayır' },
    footer: { tagline: 'AI destekli yazılım teslimatı dönüşümü' },
  }),
} satisfies Partial<Record<LanguageCode, SiteCopy>>);
