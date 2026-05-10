export const languages = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'fr', label: 'FR', name: 'Français' },
  { code: 'ro', label: 'RO', name: 'Română' },
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
    leadPrimary: string;
    leadSecondary: string;
    pressure: string;
    bridge: string;
    combinesLabel: string;
    steps: { num: string; title: string; text: string }[];
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
  maturity?: {
    eyebrow: string;
    heading: string;
    sub: string;
    ctaLabel: string;
    selectedLevel: string;
    focusAreas: string;
    whatChanges: string;
    toAdvanceTo: string;
    atFrontier: string;
    youAreHere: string;
    shortcutTrapTitle: string;
    shortcutTrapBody: string;
    keyTakeaway: string;
    keyTakeawayText: string;
  };
  problem?: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    questionsIntro: string;
    questions: string[];
    closing: string;
    contrastHeader: [string, string];
    contrast: { left: string; right: string }[];
  };
  sprint?: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    body: string;
    deliverables: { num: string; title: string; text: string }[];
    primaryCta: string;
    secondaryCta: string;
    outcomeLabel: string;
  };
  framework?: {
    eyebrow: string;
    heading: string;
    intro: string;
    answersLabel: string;
    layers: { title: string; subtitle: string; text: string; question: string; owner: string }[];
  };
  engineering?: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    fromLabel: string;
    toLabel: string;
    transformations: { from: string; to: string }[];
  };
  programs?: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    items: { title: string; text: string }[];
  };
  contactReassurance?: string;
  audience2?: {
    eyebrow: string;
    heading: string;
    sub: string;
    cards: { icon: string; title: string; text: string }[];
  };
  beyondPage?: {
    heroEyebrow: string;
    heroHeading: string;
    heroLead: string;
    shiftEyebrow: string;
    shiftHeading: string;
    paragraphs: string[];
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
    equationEyebrow: string;
    equationHeading: string;
    termOneLabel: string;
    termOne: string;
    termTwoLabel: string;
    termTwo: string;
    equationResult: string;
    annotations: string[];
    chartCaption: string;
    chartNote: string;
    postParagraph1: string;
    postParagraph2: string;
    constraintIntro: string;
    strategicCallout: string;
    closing: string;
    clientsEyebrow: string;
    clientsHeading: string;
    clientsIntro: string;
    bullets: string[];
    cards: { num: string; title: string; text: string }[];
    ctaEyebrow: string;
    ctaHeading: string;
    ctaBody: string;
    ctaPrimary: string;
    ctaSecondary: string;
    navBookCall: string;
    footerTagline: string;
    mobileSecondary: string;
  };
  nav2?: {
    problem: string;
    offer: string;
    maturity: string;
    metrics: string;
    programs: string;
    itServices: string;
  };
  heroTrustStrip?: string;
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
      eyebrow: 'THE NEW SOFTWARE ENGINEERING',
      h1Prefix: 'The operating model for',
      h1Rest: 'AI-enabled software delivery.',
      subtitle: 'AI coding tools are spreading fast across engineering teams. But adoption alone does not create reliable delivery. We help engineering organizations turn AI coding usage into governed workflows, measurable productivity, and delivery systems that teams and stakeholders can trust.',
      primaryCta: 'Book an intro call',
      secondaryCta: 'Run the executive self-assessment',
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
      lead: 'Staffing sold time. The next model sells outcomes.',
      paragraphs: [
        'Classical team augmentation scaled through headcount and billable months.',
      ],
      triplet: [
        'You sold profiles.',
        'You billed time.',
        'You grew by adding headcount.',
      ],
      bridge: 'Agentic software delivery changes that equation.',
      postEquationLead: 'Coding agents compress delivery cycles. The same scope can increasingly be delivered faster, by smaller teams, with stronger automation.',
      disclaimer: 'Clients will not stop using external teams — but they will increasingly expect them to deliver measurable outcomes, not simply provide capacity.',
      implication: '',
      challengeIntro: 'This creates a new constraint for IT services firms:',
      strategicCallout: 'Faster delivery means faster rotation.',
      challengeBody: '',
      answerLead: '',
      answerBody: '',
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
      heading: 'Without Metrics, There Is No Transformation',
      body: 'Agentic delivery cannot be managed by anecdotes. Adoption only scales when two planes are measured: what coding agents produce in the delivery system, and how engineers experience the change while working with them. We set up and operate this monitoring layer for you — a continuous feed of agent-related production metrics, paired with a recurring employee survey. The goal is simple: steer the operating model with data, not impressions.',
      measuredLabel: 'What must be measured',
      items: [
        { name: 'AI contribution', desc: 'Share of work authored by coding agents per sprint' },
        { name: 'Rework', desc: 'PRs that revisit already-reviewed code paths' },
        { name: 'Quality', desc: 'Coverage score, lint pass rate, and test health' },
        { name: 'Supervision', desc: 'Human review coverage across all agent-merged PRs' },
      ],
      planes: {
        quant: {
          tag: 'Plane 01 · Quantitative · Continuous',
          title: 'What the System Produces',
          body: 'Production telemetry from the agentic delivery workflow. Five signal families are instrumented in the pipeline and refreshed on every run.',
          familiesLabel: 'Signal Families',
          families: [
            {
              num: '01',
              title: 'Adoption Surface',
              summary: 'Who is using AI, where, and how often.',
              signals: ['Active users', 'Tool Adoption Rate'],
            },
            {
              num: '02',
              title: 'Acceptance & Quality',
              summary: 'Whether the output is trusted enough to ship.',
              signals: ['Acceptance rate', 'Defect rate', 'Coverage delta'],
            },
            {
              num: '03',
              title: 'Velocity',
              summary: 'DORA metrics, segmented by agent involvement.',
              signals: ['Lead time', 'Deployment frequency', 'Change failure rate'],
            },
            {
              num: '04',
              title: 'Agent Behavior',
              summary: 'How well agents operate within their guardrails.',
              signals: ['Escalation quality', 'Supervision burden', 'Goal completion'],
            },
            {
              num: '05',
              title: 'Cost & Return',
              summary: 'Whether the economics are improving.',
              signals: ['Token spend', 'Cost per accepted change'],
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
      heading: 'One sprint to launch the AI–Software Engineering Practice.',
      body: 'In a focused working sprint, we align leadership and engineering around a practical next step with clear priorities, governance, and measurement.',
      quote: 'One focused engagement to define the ground truth, the priorities, and the operating rules that make AI supervision real.',
      leadPrimary: 'AI is not only changing software engineering productivity.',
      leadSecondary: 'It is changing the economics of IT services.',
      pressure: 'For firms built on team augmentation, T&M, and long staffing cycles, coding agents bring a new challenge: shorter cycles, higher rotation, more pressure on bench management, and growing client demand for measurable outcomes.',
      bridge: 'This focused sprint helps leadership, commercial, and engineering teams move from scattered AI experimentation to a structured AI–Software Engineering Practice.',
      combinesLabel: 'The sprint combines',
      steps: [
        { num: '01', title: 'Maturity assessment', text: 'Survey and interviews to map current AI usage, engineering practices, tooling, blockers, and readiness by role and team.' },
        { num: '02', title: 'Leadership alignment', text: 'Clarify the strategic ambition: productivity, delivery differentiation, new offers, bench optimization, or client-facing AI transformation.' },
        { num: '03', title: 'Training & awareness', text: 'Practical sessions for engineers, tech leads, QA, PMs, and delivery managers on agentic SDLC, harness engineering, and validation loops.' },
        { num: '04', title: 'Practice design', text: 'Scope, roles, standards, governance, expert community, reusable assets, and delivery patterns of the target operating model.' },
        { num: '05', title: 'Offer & pilot design', text: 'First outcome-based offers, priority client segments, pod models, success metrics, and pilot missions.' },
        { num: '06', title: '30 / 60 / 90-day roadmap', text: 'A clear path from experimentation to repeatable delivery capability.' },
      ],
    },
    contact: {
      eyebrow: 'Start the conversation',
      heading: 'Ready to move beyond AI tool adoption?',
      body: 'Start with a focused sprint to assess your current maturity, define your operating model, and design the first measurable AI-enabled delivery pilots.',
      cta: 'Book an intro call',
      email: 'nicolas@agentic-sdlc.com',
    },
    footer: {
      brand: 'Agentic SDLC',
      tagline: 'AI-enabled software delivery transformation',
    },
    maturity: {
      eyebrow: 'AI Engineering Maturity Scale',
      heading: 'Where does your team stand?',
      sub: '5 stages from ad-hoc AI usage to full fleet orchestration. Click any level to explore what it means and how to advance.',
      ctaLabel: 'Self-Assessment for Executives',
      selectedLevel: 'selected level',
      focusAreas: 'Focus areas',
      whatChanges: 'What changes',
      toAdvanceTo: 'To advance to',
      atFrontier: 'At the frontier',
      youAreHere: 'you are here',
      shortcutTrapTitle: 'The Shortcut Trap',
      shortcutTrapBody: "Jumping from L2 → L4 without mastering L3 leads to brittle systems and supervision failures. L3 failure-mode intuition is non-negotiable infrastructure — not a nice-to-have. Don't go too fast.",
      keyTakeaway: 'Key takeaway:',
      keyTakeawayText: 'AI maturity is not defined by the tools you buy, but by the autonomy of your CI/CD pipelines and the discipline of your supervision model.',
    },
    problem: {
      eyebrow: 'The core gap',
      heading: 'AI tool adoption is not a delivery model.',
      paragraphs: [
        'Most organizations start with licenses: GitHub Copilot, Cursor, Claude Code, Gemini, Codex/ChatGPT Enterprise, or internal assistants.',
        'That creates local productivity gains. But it does not answer the questions that matter at scale:',
      ],
      questionsIntro: 'But it does not answer the questions that matter at scale:',
      questions: [
        'What should engineers delegate to AI?',
        'What must humans review?',
        'How do teams measure AI contribution?',
        'How is quality protected?',
        'How do managers know whether delivery is improving?',
        'How do organizations avoid uncontrolled experimentation?',
      ],
      closing: 'Agentic SDLC closes the gap between individual AI usage and reliable software delivery.',
      contrastHeader: ['AI tool adoption', 'Agentic SDLC'],
      contrast: [
        { left: 'Individual usage', right: 'Team workflows' },
        { left: 'Prompting', right: 'Delegation patterns' },
        { left: 'Output generation', right: 'Review and validation' },
        { left: 'Anecdotal productivity', right: 'Measured delivery impact' },
        { left: 'Informal experimentation', right: 'Governed execution' },
      ],
    },
    sprint: {
      eyebrow: 'The offer',
      heading: 'One sprint to design your AI-enabled delivery model.',
      subtitle: 'A focused engagement to help your organization move from scattered AI coding experiments to a governed Agentic SDLC operating model.',
      body: 'In one sprint, we work with your leadership, engineering, product, and platform teams to assess where AI is already being used, define the right operating model, train key roles, and design the first measurable delivery pilots.',
      deliverables: [
        {
          num: '01',
          title: 'Current-state assessment',
          text: 'Understand how AI coding tools are already used across teams, where value is emerging, and where risks appear.',
        },
        {
          num: '02',
          title: 'AI Engineering Maturity diagnosis',
          text: 'Position teams on a practical maturity scale, from ad-hoc usage to orchestrated agentic workflows.',
        },
        {
          num: '03',
          title: 'Operating model blueprint',
          text: 'Define how AI-assisted delivery should work across roles, workflows, supervision, review, quality, and governance.',
        },
        {
          num: '04',
          title: 'Training for key roles',
          text: 'Align engineers, tech leads, product managers, QA, platform teams, and delivery managers on how work changes.',
        },
        {
          num: '05',
          title: 'Metrics and control tower design',
          text: 'Define the signals needed to measure adoption, AI contribution, quality, rework, velocity, cost, and team confidence.',
        },
        {
          num: '06',
          title: '30/60/90-day roadmap',
          text: 'Leave with a pragmatic implementation plan and the first pilots to launch.',
        },
      ],
      primaryCta: 'Book an intro call',
      secondaryCta: 'See the maturity scale',
      outcomeLabel: 'Sprint outcome: your Agentic SDLC blueprint',
    },
    framework: {
      eyebrow: 'The model',
      heading: 'Three layers of AI-enabled software delivery',
      intro: 'Agentic SDLC separates the operating model, the engineering practices, and the technical harness needed to make AI reliable.',
      answersLabel: 'It answers:',
      layers: [
        {
          title: 'Agentic SDLC',
          subtitle: 'How software delivery changes.',
          text: 'The operating model: roles, workflows, governance, metrics, supervision, and accountability.',
          question: 'How should teams deliver software when AI agents participate in the work?',
          owner: 'Engineering leadership',
        },
        {
          title: 'Agentic Engineering',
          subtitle: 'How engineers work inside that model.',
          text: 'The practice layer: specification, delegation, review, testing, refactoring, and validation.',
          question: 'How do engineers move from writing every line of code to supervising AI-assisted workflows?',
          owner: 'Engineers and tech leads',
        },
        {
          title: 'Harness Engineering',
          subtitle: 'How agents are made reliable enough to participate.',
          text: 'The reliability layer: context, tools, tests, policies, evaluations, CI/CD integration, and guardrails.',
          question: 'What infrastructure and controls make AI-generated work safe enough for production delivery?',
          owner: 'Platform and tooling teams',
        },
      ],
    },
    engineering: {
      eyebrow: 'The role shift',
      heading: 'The role of the engineer changes.',
      paragraphs: [
        'AI does not remove engineering discipline. It increases the need for it.',
        'In an Agentic SDLC, engineers do not simply “write code faster.” They learn to structure work so that AI systems can contribute safely: clearer specifications, smaller tasks, stronger tests, explicit review loops, and better context. The engineer becomes less of a line-by-line producer and more of a designer, reviewer, validator, and supervisor of software work.',
      ],
      fromLabel: 'From',
      toLabel: 'To',
      transformations: [
        { from: 'Coding everything manually', to: 'Delegating well-scoped work' },
        { from: 'Prompting casually', to: 'Writing executable specifications' },
        { from: 'Reviewing only human code', to: 'Reviewing AI-generated changes' },
        { from: 'Trusting output', to: 'Validating behavior through tests and evaluations' },
        { from: 'Local productivity', to: 'Measurable delivery improvement' },
      ],
    },
    programs: {
      eyebrow: 'Next steps',
      heading: 'From first sprint to scaled adoption',
      paragraphs: [
        'The first sprint creates the blueprint. The next step is implementation through pilots, training, and operating metrics.',
        'After the initial sprint, organizations can move into targeted adoption programs: team pilots, role-based training, workflow redesign, metrics instrumentation, and governance support.',
      ],
      items: [
        {
          title: 'Pilot team enablement',
          text: 'Select one or two engineering teams and redesign their delivery workflow around AI-assisted execution.',
        },
        {
          title: 'Role-based training',
          text: 'Train developers, tech leads, product managers, QA, platform teams, and delivery managers on how their work changes.',
        },
        {
          title: 'Workflow redesign',
          text: 'Define repeatable patterns for specification, coding, testing, review, documentation, migration, refactoring, and maintenance.',
        },
        {
          title: 'Platform and tooling alignment',
          text: 'Connect AI coding tools with repositories, documentation, CI/CD, policy checks, and internal engineering standards.',
        },
        {
          title: 'Metrics instrumentation',
          text: 'Track adoption, quality, velocity, AI contribution, rework, cost, and human confidence.',
        },
        {
          title: 'Governance and supervision',
          text: 'Create practical rules for what AI can do, what humans must review, and how accountability is preserved.',
        },
      ],
    },
    contactReassurance: 'No generic AI evangelism. No tool-only training. The focus is delivery: workflows, quality, supervision, metrics, and adoption.',
    audience2: {
      eyebrow: 'Audience',
      heading: 'Who Agentic SDLC is for',
      sub: 'Built for organizations that need AI speed with delivery accountability.',
      cards: [
        { icon: 'apartment', title: 'Engineering leaders', text: 'You need to understand whether AI coding tools are creating real productivity, where risks are emerging, and how to scale adoption safely.' },
        { icon: 'terminal', title: 'Platform and tooling teams', text: 'You need to integrate AI tools into the engineering environment: repositories, CI/CD, documentation, identity, policies, and internal standards.' },
        { icon: 'schedule', title: 'Product and delivery leaders', text: 'You need to understand how AI changes planning, estimation, review, quality, and stakeholder predictability.' },
        { icon: 'handshake', title: 'Software delivery organizations', text: 'You need to prepare for a shift from staffing-based delivery to measurable AI-enabled execution.' },
      ],
    },
    beyondPage: {
      heroEyebrow: 'For IT services firms',
      heroHeading: 'Beyond Time & Materials',
      heroLead: 'Staffing sold time. The next model sells execution bursts.',
      shiftEyebrow: 'Bench management becomes critical',
      shiftHeading: 'Coding agents change the economics of delivery.',
      paragraphs: [
        'Classical team augmentation was built for a world where execution was scarce and projects consumed years. You staffed teams, sold billable days, and scaled with headcount.',
        'With coding agents, productivity rises, delivery compresses, and parallelism increases. Clients can absorb more execution internally, which means people are no longer allocated to projects in the same static way.',
        'External teams do not disappear. But they stop being long staffing commitments. They become short, targeted execution bursts.',
      ],
      before: 'Before',
      beforeValue: 'people × time',
      beforeCaption: 'billable days · stable staffing · long projects',
      now: 'Now',
      nowValue: 'execution bursts',
      nowCaption: 'parallel streams · short cycles · dynamic allocation',
      exampleLeftLabel: 'Classical T&M',
      exampleLeftValue: '5 engineers for 18 months',
      exampleRightLabel: 'Programmable execution',
      exampleRightValue: '3 execution streams for 4–6 weeks',
      equationEyebrow: 'Bench management is now critical',
      equationHeading: 'The Legacy Equation of Classical Augmentation',
      termOneLabel: 'Term 01',
      termOne: 'Headcount',
      termTwoLabel: 'Term 02',
      termTwo: 'Billable Months',
      equationResult: 'Legacy Capacity',
      annotations: [
        'Assumes execution is scarce.',
        'Requires stable, long-term staffing.',
        'Sells time, not results.',
      ],
      chartCaption: 'Linear scaling',
      chartNote: 'Scaling delivery relies entirely on adding headcount or more billable months.',
      postParagraph1: 'Coding agents compress delivery cycles. The same scope can increasingly be delivered faster, by smaller teams, with stronger automation.',
      postParagraph2: 'Clients will not stop using external teams — but they will increasingly expect them to deliver measurable outcomes, not simply provide capacity.',
      constraintIntro: 'This creates a new constraint for IT services firms:',
      strategicCallout: 'Faster delivery means faster rotation.',
      closing: 'That is where a dedicated Software Engineering Practice becomes critical.',
      clientsEyebrow: 'What changes for clients',
      clientsHeading: 'The decision is no longer how many people to staff for how many months.',
      clientsIntro: 'Clients will still need engineering partners. But they will increasingly ask different questions:',
      bullets: [
        'How much execution should we inject right now?',
        'Which initiatives deserve short bursts of acceleration?',
        'Where do we need parallel streams instead of more billable days?',
        'When should capacity ramp up, shut down, or restart?',
      ],
      cards: [
        { num: '01', title: 'Divisible', text: 'Execution splits into targeted streams: migration, testing, refactoring.' },
        { num: '02', title: 'Time-compressed', text: 'Work lands in weeks, not in multi-year staffing cycles.' },
        { num: '03', title: 'Elastic', text: 'Ramp up fast, shut down cleanly, restart when priorities change.' },
        { num: '04', title: 'Schedulable', text: 'Execution is routed across priorities, not statically assigned to teams.' },
      ],
      ctaEyebrow: 'Start the conversation',
      ctaHeading: 'Projects used to consume billable days.\nNow they consume execution bursts.',
      ctaBody: 'Agentic SDLC provides the operating model behind that shift — make AI-enabled delivery reliable inside your engineering organization first.',
      ctaPrimary: 'Book an intro call',
      ctaSecondary: 'Back to overview',
      navBookCall: 'Book a Call',
      footerTagline: 'AI-enabled software delivery transformation',
      mobileSecondary: 'Back to overview',
    },
    nav2: {
      problem: 'Problem',
      offer: 'Offer',
      maturity: 'Maturity',
      metrics: 'Metrics',
      programs: 'Programs',
      itServices: 'IT Services',
    },
    heroTrustStrip: 'For engineering leaders · platform teams · product organizations · software delivery teams',
  },
  fr: {
    meta: {
      title: "Agentic SDLC | Transformation du delivery logiciel par l'IA",
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
      eyebrow: 'LE NOUVEAU SOFTWARE ENGINEERING',
      h1Prefix: 'Le modèle opérationnel pour',
      h1Rest: "fiabiliser le delivery logiciel à l'ère des agents IA.",
      subtitle: "Les outils de codage IA se généralisent rapidement dans les équipes engineering. Mais acheter des licences ne suffit pas à créer un delivery fiable. Nous aidons les organisations engineering à transformer l'usage de l'IA en workflows gouvernés, en productivité mesurable et en systèmes de delivery auxquels les équipes comme les clients peuvent réellement faire confiance.",
      primaryCta: "Réserver un appel d'introduction",
      secondaryCta: "Lancer l'auto-évaluation pour dirigeants",
      liveLabel: 'CONTRÔLE EN DIRECT · Agentic SDLC',
      pipeline: 'Pipeline de delivery',
      steps: ['Planifier', 'Construire', 'Revoir', 'Livrer', 'Mesurer'],
      eventsLabel: "Flux d'événements en direct",
      events: [
        { time: '14:02', message: 'agent-04 · PR #182 fusionnée', status: 'ok' },
        { time: '14:01', message: 'file de revue · 2 éléments', status: 'warn' },
        { time: '13:57', message: 'contrôle de politique · validé', status: 'ok' },
        { time: '13:54', message: 'agent-02 · module scaffoldé', status: 'ok' },
      ],
      supervision: 'Supervision',
      coverage: 'de couverture',
      aiContribution: 'Contribution IA',
      rework: 'Retouches',
      quality: 'Qualité',
      agentPool: "Pool d'agents",
      agentPoolStatus: 'en ligne · 0 bloqué',
      connectorLeftLabel: 'T&M classique',
      connectorLeftDesc: 'Body shopping, jours facturables, longs cycles de staffing.',
      connectorCenter: 'Agentic SDLC transforme aussi le modèle économique du delivery logiciel',
      connectorRightLabel: 'Exécution programmable',
      connectorRightDesc: 'Bursts courts, flux parallèles, allocation dynamique.',
    },
    beyond: {
      eyebrow: "La gestion du bench devient critique",
      heading: "Au-delà du Time & Materials : du staffing au delivery orienté résultats.",
      lead: "Le staffing vendait du temps. Le prochain modèle vendra des résultats.",
      paragraphs: [
        "L'augmentation d'équipe classique s'est développée grâce aux effectifs et aux mois facturables.",
      ],
      triplet: [
        "Vous vendiez des profils.",
        "Vous facturiez du temps.",
        "Vous grandissiez en ajoutant des effectifs.",
      ],
      bridge: "L'Agentic software delivery change cette équation.",
      postEquationLead: "Les coding agents compressent les cycles de delivery. Un même périmètre peut de plus en plus être livré plus vite, par des équipes plus petites, avec une automatisation plus forte.",
      disclaimer: "Les clients ne cesseront pas de faire appel à des équipes externes. Mais ils attendront de plus en plus des résultats mesurables, et non une simple capacité additionnelle.",
      implication: "",
      challengeIntro: "Cela crée une nouvelle contrainte pour les entreprises de services IT :",
      strategicCallout: "un delivery plus rapide implique une rotation plus rapide.",
      challengeBody: "",
      answerLead: "",
      answerBody: "",
      before: "Avant",
      beforeValue: "effectifs × mois facturables",
      beforeCaption: "jours facturables · staffing stable · projets longs",
      now: "Maintenant",
      nowValue: "pods orientés résultats",
      nowCaption: "flux parallèles · cycles courts · allocation dynamique",
      exampleLeftLabel: "Time & Materials classique",
      exampleLeftValue: "5 ingénieurs pendant 18 mois",
      exampleRightLabel: "Delivery orienté résultats",
      exampleRightValue: "1 pod embarqué pour 4-6 semaines",
      clientsEyebrow: "Ce qui change pour les clients",
      clientsTitle: "La décision n'est plus : combien de personnes pour combien de mois ?",
      bullets: [
        "Quel flux métier devrions-nous transformer en premier ?",
        "Quel résultat le pod doit-il être responsable de livrer ?",
        "Quels workflows agentiques peuvent passer en production en toute sécurité ?",
        "Quels niveaux de gouvernance, supervision et métriques sont nécessaires dès le départ ?",
        "Quand la capacité doit-elle monter en charge, s'arrêter ou redémarrer ?",
      ],
      cards: [
        { title: "Embarqué", text: "La livraison se rapproche des workflows réels du client, de ses systèmes, données et contraintes opérationnelles.", num: "01" },
        { title: "Multidisciplinaire", text: "L'unité de travail n'est plus un profil isolé. C'est un pod combinant engineering, product, cloud, data, intégration et gouvernance.", num: "02" },
        { title: "Orienté production", text: "L'objectif n'est pas une démo ou une preuve de concept. C'est un système utilisable connecté aux workflows réels, avec supervision, observabilité et chemins d'escalade.", num: "03" },
        { title: "Mesuré par les résultats", text: "Le succès se mesure par l'impact métier, l'adoption, la qualité, le cycle de livraison, la réduction des risques et la fiabilité opérationnelle, pas seulement les jours facturables consommés.", num: "04" },
      ],
      closing: "C'est précisément là qu'une Software Engineering Practice dédiée devient critique.",
      equation: {
        eyebrow: "La gestion du bench est désormais critique",
        heading: "L'équation historique de l'augmentation d'équipe classique",
        termOneLabel: "Terme 01",
        termOne: "Effectifs",
        termTwoLabel: "Terme 02",
        termTwo: "Mois facturables",
        result: "Capacité historique",
        annotations: [
          "Suppose que l'exécution est rare.",
          "Exige un staffing stable et long terme.",
          "Vend du temps, pas des résultats.",
        ],
        chartLabel: "Scaling linéaire",
        chartXLabel: "effectifs",
        chartYLabel: "capacité",
        note: "La montée en capacité repose entièrement sur l'ajout d'effectifs ou sur davantage de mois facturables.",
      },
    },
    core: {
      eyebrow: "Changement fondamental",
      heading: "Le rôle du développeur se transforme.",
      body: "À mesure que les agents de codage prennent en charge davantage de travail, les développeurs ne disparaissent pas. Leur rôle évolue. Le nouveau défi devient la supervision : quoi déléguer, quoi relire, quoi valider, et quoi ne surtout pas automatiser aveuglément.",
      cards: [
        { icon: "hub", title: "Quoi déléguer", text: "Identifier les zones où les agents de codage peuvent avancer vite sans créer de dette opérationnelle cachée." },
        { icon: "fact_check", title: "Quoi revoir", text: "Rendre la supervision explicite afin que la validation, l'approbation et l'escalade soient intégrées au workflow." },
        { icon: "shield_person", title: "Ce qu'il ne faut pas automatiser aveuglément", text: "Protéger la qualité, la responsabilité et la confiance client lorsque le jugement humain reste indispensable." },
      ],
    },
    metrics: {
      eyebrow: 'Métriques',
      heading: "Sans métriques, il n'y a pas de transformation.",
      body: "Le delivery agentique ne peut pas être piloté à l'anecdote. L'adoption ne passe à l'échelle que lorsque deux dimensions sont mesurées : ce que les agents de codage produisent dans le système de delivery, et la manière dont les équipes vivent le changement en travaillant avec eux. Nous mettons en place et opérons cette couche de monitoring pour vous : un flux continu de métriques de production liées aux agents, combiné à une enquête récurrente auprès des collaborateurs. L'objectif est simple : piloter le modèle opérationnel par la donnée, et non par les impressions.",
      measuredLabel: "Ce qu'il faut mesurer",
      items: [
        { name: "Contribution IA", desc: "Part du travail rédigée par des coding agents à chaque sprint" },
        { name: "Retouches", desc: "PR qui repassent sur des portions de code déjà revues" },
        { name: "Qualité", desc: "Score de couverture, taux de passage du lint et santé des tests" },
        { name: "Supervision", desc: "Couverture de revue humaine sur toutes les PR fusionnées par des agents" },
      ],
      planes: {
        quant: {
          tag: "Plan 01 · Quantitatif · Continu",
          title: "Ce que produit le système",
          body: "Télémétrie de production issue du workflow de delivery agentique. Cinq familles de signaux sont instrumentées dans le pipeline et actualisées à chaque exécution.",
          familiesLabel: "Familles de signaux",
          families: [
            {
              num: "01",
              title: "Surface d'adoption",
              summary: "Qui utilise l'IA, dans quels workflows, et à quelle fréquence.",
              signals: ["Utilisateurs actifs", "Taux d'adoption des outils"],
            },
            {
              num: "02",
              title: "Acceptation & qualité",
              summary: "L'output est-il suffisamment fiable pour être livré ?",
              signals: ["Taux d'acceptation", "Taux de défauts", "Évolution de la couverture"],
            },
            {
              num: "03",
              title: "Vélocité",
              summary: "Métriques DORA, segmentées selon le niveau d'implication des agents.",
              signals: ["Lead time", "Fréquence de déploiement", "Taux d'échec des changements"],
            },
            {
              num: "04",
              title: "Comportement des agents",
              summary: "Les agents opèrent-ils dans le cadre prévu ?",
              signals: ["Qualité des escalades", "Charge de supervision", "Atteinte des objectifs"],
            },
            {
              num: "05",
              title: "Coût & retour",
              summary: "L'économie du delivery s'améliore-t-elle ?",
              signals: ["Dépense en tokens", "Coût par changement accepté"],
            },
          ],
        },
        perception: {
          tag: "Plan 02 · Perception · Trimestriel",
          title: "Ce que les personnes vivent",
          body: "Une enquête trimestrielle propriétaire : un socle commun pour tous les répondants, puis une branche spécifique selon le rôle, routée automatiquement.",
          baselineLabel: "Socle commun",
          baselineCount: "Pour chaque répondant",
          baselineSummary: "Permet de qualifier le rôle, le modèle d'engagement, la fréquence d'usage de l'IA, le niveau d'autonomie et la posture d'apprentissage — le contexte indispensable pour interpréter toutes les autres réponses.",
          branchesLabel: "Branches par rôle",
          branches: [
            {
              icon: "code",
              title: "Développeur",
              count: "Branche côté code",
              summary: "Couvre la manière dont l'IA intervient dans la boucle quotidienne du développeur, de l'écriture à la vérification, ainsi que l'adoption des outils agentiques.",
            },
            {
              icon: "rule",
              title: "QA · Automatisation · Qualité de release",
              count: "Branche côté qualité",
              summary: "Couvre l'usage de l'IA dans le cycle de test : génération de scénarios, maintenance, flakiness et décisions de readiness avant release.",
            },
            {
              icon: "lan",
              title: "PM · PO · BA · Ops",
              count: "Branche côté delivery",
              summary: "Couvre l'usage de l'IA dans la planification, la documentation, le reporting, la gestion des risques et les signaux opérationnels — tout le travail autour du code.",
            },
          ],
          note: "Instrument d'enquête propriétaire. Le questionnaire est partagé dans le cadre de la mission.",
        },
      },
      statement: "Mesurer plutôt que raconter.",
      statementBody: "Ce qui est mesuré peut être gouverné. L'usine tourne avec des chiffres, pas avec des récits.",
      supervisionCoverage: "Couverture de supervision",
      reworkReduction: "Réduction des retouches",
      velocityTitle: "Vitesse sous contrôle",
      velocityText: "Les boucles agentiques ne livrent plus vite que lorsque supervision, revue et escalade sont mesurées dans le même run.",
      traceability: "Traçabilité",
      unreviewedMerges: "Fusions non revues",
      charts: {
        sandboxEyebrow: "Aujourd'hui — Mode bac à sable",
        sandboxTitle: "Où va réellement le temps développeur",
        sandboxBody: "La majeure partie du temps est absorbée par le travail non planifié et les changements de contexte — pas par le delivery.",
        sandboxData: [
          { name: "Débogage non planifié", value: 30 },
          { name: "Codage manuel", value: 28 },
          { name: "Changement de contexte", value: 22 },
          { name: "Documentation", value: 12 },
          { name: "Surcharge de supervision", value: 8 },
        ],
        factoryEyebrow: "Cible — Mode factory",
        factoryTitle: "Impact métrique : sandbox vs factory",
        factoryBody: "Ce que la supervision structurée et la mesure font réellement bouger.",
        upliftData: [
          { metric: "Couverture de supervision", sandbox: 18, factory: 85 },
          { metric: "Contribution IA", sandbox: 12, factory: 68 },
          { metric: "Vitesse de delivery", sandbox: 100, factory: 155 },
          { metric: "Score qualité", sandbox: 62, factory: 88 },
          { metric: "Réduction des retouches", sandbox: 100, factory: 152 },
        ],
        sandboxLegend: "Sandbox",
        factoryLegend: "Factory",
      },
    },
    audience: {
      eyebrow: "Pour qui ?",
      heading: "Conçu pour les équipes qui veulent la vitesse de l'IA avec la responsabilité du delivery.",
      body: "Cette mission s'adresse aux organisations qui expérimentent déjà les outils de codage IA et cherchent maintenant un modèle opérationnel durable.",
      cards: [
        { icon: "apartment", title: "Leaders engineering", text: "Équipes qui passent d'un usage ad hoc de l'IA à un delivery gouverné, avec des résultats mesurables." },
        { icon: "terminal", title: "Équipes produit & plateforme", text: "Organisations qui standardisent les workflows assistés par IA sur tout le cycle : planification, build, revue et release." },
        { icon: "handshake", title: "Cabinets de conseil & ESN", text: "Équipes de delivery qui veulent des gains de vitesse sans sacrifier la supervision, la qualité ou la responsabilité." },
      ],
    },
    blueprint: {
      eyebrow: "Blueprint",
      heading: "Adopter des outils IA ne suffit pas à transformer le modèle de delivery.",
      paragraphs: [
        "Acheter des licences et déployer des assistants de codage ne dit pas à une entreprise comment livrer différemment. Le véritable enjeu consiste à transformer les gains de productivité et la compression des cycles en un nouveau modèle opérationnel.",
        "À mesure que les cycles de delivery se raccourcissent, l'allocation des équipes devient plus dynamique. La question n'est plus : « qui reste affecté à un projet pendant 18 mois ? » Elle devient : quel système d'exécution sommes-nous réellement en train de construire ?",
      ],
      levelsLabel: "Trois niveaux",
      levels: [
        { title: "Agentic SDLC", text: "Comment le delivery logiciel se transforme." },
        { title: "Agentic engineering", text: "Comment les ingénieurs travaillent à l'intérieur de ce nouveau modèle." },
        { title: "Harness engineering", text: "Comment rendre les agents suffisamment fiables pour participer au delivery." },
      ],
      cards: [
        { title: "Réalité d'abord", text: "Distinguer l'adoption réelle de la culture de démo, du prompting isolé et du théâtre IA." },
        { title: "Prioriser les blocages", text: "Se concentrer là où les workflows agentiques éliminent l'attente, les transmissions et les reprises." },
        { title: "Redéfinir la supervision", text: "Clarifier ce que les agents font seuls, ce qui doit être revu, et où commence l'escalade." },
        { title: "Instrumenter le système", text: "Mesurer : contribution IA, throughput, reprises, qualité, couverture de supervision." },
        { title: "Lancer le nouveau modèle opérationnel", text: "Transformer le blueprint en sprint concret, pilote ou trajectoire de transformation." },
      ],
    },
    engagement: {
      eyebrow: "Engagement",
      heading: "Un sprint pour lancer l'AI–Software Engineering Practice.",
      body: "Dans un sprint de travail focalisé, nous alignons leadership et engineering autour d'une étape pratique avec priorités claires, gouvernance définie et métriques mesurables.",
      quote: "Une mission focalisée pour établir la réalité opérationnelle, les priorités et les règles de fonctionnement qui rendent la supervision IA concrètement opérationnelle.",
      leadPrimary: "L'IA ne transforme pas seulement la productivité du software engineering.",
      leadSecondary: "Elle transforme aussi l'économie des services IT.",
      pressure: "Pour les entreprises construites sur l'augmentation d'équipe, le Time & Materials et les cycles longs de staffing, les agents de codage créent un nouveau défi : cycles plus courts, rotation plus rapide, pression accrue sur la gestion du bench, et demande croissante des clients pour des résultats mesurables.",
      bridge: "Ce sprint ciblé aide les équipes dirigeantes, commerciales et engineering à passer d'une expérimentation IA dispersée à une AI–Software Engineering Practice structurée.",
      combinesLabel: "Le sprint combine",
      steps: [
        { num: "01", title: "Évaluation de maturité", text: "Enquête et entretiens pour cartographier l'usage actuel de l'IA, les pratiques engineering, l'outillage, les blocages et le niveau de readiness par rôle et par équipe." },
        { num: "02", title: "Alignement leadership", text: "Clarifier l'ambition stratégique : productivité, différenciation du delivery, nouvelles offres, optimisation du bench ou transformation IA orientée client." },
        { num: "03", title: "Formation & acculturation", text: "Sessions pratiques pour ingénieurs, tech leads, QA, PM et delivery managers sur l'Agentic SDLC, le harness engineering et les boucles de validation." },
        { num: "04", title: "Design de la practice", text: "Périmètre, rôles, standards, gouvernance, communauté d'experts, assets réutilisables et patterns de delivery du modèle opérationnel cible." },
        { num: "05", title: "Design des offres & pilotes", text: "Premières offres orientées résultats, segments clients prioritaires, modèles de pods, métriques de succès et missions pilotes." },
        { num: "06", title: "Roadmap 30 / 60 / 90 jours", text: "Une trajectoire claire pour passer de l'expérimentation à une capacité de delivery répétable." },
      ],
    },
    contact: {
      eyebrow: 'Démarrer la conversation',
      heading: "Prêt à dépasser la simple adoption d'outils IA ?",
      body: "Commencez par un sprint focalisé pour évaluer votre maturité actuelle, définir votre modèle opérationnel et concevoir vos premiers pilotes de delivery augmenté par l'IA.",
      cta: "Réserver un appel d'introduction",
      email: 'nicolas@agentic-sdlc.com',
    },
    footer: {
      brand: 'Agentic SDLC',
      tagline: "Transformation du delivery logiciel activée par l'IA",
    },
    maturity: {
      eyebrow: "Échelle de maturité AI Engineering",
      heading: "Où se situent vos équipes ?",
      sub: "Cinq niveaux, de l'usage ad hoc de l'IA jusqu'à l'orchestration complète d'une flotte d'agents. Cliquez sur chaque niveau pour comprendre ce qu'il implique et comment passer au niveau suivant.",
      ctaLabel: "Auto-évaluation pour dirigeants",
      selectedLevel: "niveau sélectionné",
      focusAreas: "Zones de focus",
      whatChanges: "Ce qui change",
      toAdvanceTo: "Pour passer au",
      atFrontier: "À la frontière",
      youAreHere: "vous êtes ici",
      shortcutTrapTitle: "Le piège du raccourci",
      shortcutTrapBody: "Passer de L2 → L4 sans maîtriser L3 mène à des systèmes fragiles et des échecs de supervision. L'intuition des modes de défaillance du L3 est une infrastructure incontournable — pas un nice-to-have. N'allez pas trop vite.",
      keyTakeaway: "À retenir :",
      keyTakeawayText: "la maturité IA ne se mesure pas aux outils achetés, mais au degré d'autonomie des workflows de delivery et à la discipline du modèle de supervision.",
    },
    problem: {
      eyebrow: "L'écart fondamental",
      heading: "Adopter des outils IA ne suffit pas à transformer le modèle de delivery.",
      paragraphs: [
        "La plupart des organisations commencent par des licences : GitHub Copilot, Cursor, Claude Code, Gemini, Codex/ChatGPT Enterprise, ou des assistants internes.",
        "Cela produit des gains locaux, parfois spectaculaires. Mais à l'échelle d'une organisation, les vraies questions restent ouvertes :",
      ],
      questionsIntro: "Mais cela ne répond pas aux questions qui comptent à l'échelle :",
      questions: [
        "Que doivent déléguer les ingénieurs à l'IA ?",
        "Que les humains doivent-ils impérativement revoir ?",
        "Comment les équipes mesurent-elles la contribution de l'IA ?",
        "Comment la qualité est-elle protégée ?",
        "Comment les managers savent-ils si le delivery s'améliore ?",
        "Comment les organisations évitent-elles l'expérimentation non contrôlée ?",
      ],
      closing: "Agentic SDLC comble l'écart entre l'usage individuel des outils IA et un modèle de delivery logiciel fiable, gouverné et mesurable.",
      contrastHeader: ["Adoption d'outils IA", "Agentic SDLC"],
      contrast: [
        { left: "Usage individuel", right: "Workflows d'équipe" },
        { left: "Prompting", right: "Patterns de délégation" },
        { left: "Génération d'output", right: "Revue et validation" },
        { left: "Gains de productivité anecdotiques", right: "Impact mesurable sur le delivery" },
        { left: "Expérimentation informelle", right: "Exécution gouvernée" },
      ],
    },
    sprint: {
      eyebrow: "L'offre",
      heading: "Un sprint pour concevoir votre modèle de delivery augmenté par l'IA.",
      subtitle: "Une mission courte et structurée pour passer d'expérimentations IA dispersées à un modèle opérationnel Agentic SDLC gouverné.",
      body: "En un sprint, nous travaillons avec vos dirigeants, vos équipes engineering, produit et plateforme pour cartographier les usages IA existants, définir le bon modèle opérationnel, aligner les rôles clés et concevoir les premiers pilotes de delivery mesurables.",
      deliverables: [
        {
          num: "01",
          title: "Évaluation de l'état actuel",
          text: "Comprendre comment les outils de codage IA sont déjà utilisés, où la valeur se crée réellement et où les risques commencent à apparaître.",
        },
        {
          num: "02",
          title: "Diagnostic de maturité AI Engineering",
          text: "Positionner les équipes sur une échelle de maturité opérationnelle, depuis l'usage ad hoc jusqu'aux workflows agentiques orchestrés.",
        },
        {
          num: "03",
          title: "Blueprint du modèle opérationnel",
          text: "Définir comment le delivery assisté par IA doit fonctionner concrètement : rôles, workflows, supervision, revue, qualité, gouvernance et responsabilité.",
        },
        {
          num: "04",
          title: "Alignement et formation des rôles clés",
          text: "Aligner ingénieurs, tech leads, product managers, QA, équipes plateforme et delivery managers sur ce qui change réellement dans leur travail quotidien.",
        },
        {
          num: "05",
          title: "Métriques et conception de la tour de contrôle",
          text: "Définir les signaux nécessaires pour mesurer l'adoption, la contribution IA, la qualité, le rework, la vélocité, le coût et la confiance des équipes.",
        },
        {
          num: "06",
          title: "Roadmap 30 / 60 / 90 jours",
          text: "Repartir avec un plan d'implémentation pragmatique et une première vague de pilotes à lancer.",
        },
      ],
      primaryCta: "Réserver un appel d'introduction",
      secondaryCta: "Voir l'échelle de maturité",
      outcomeLabel: "Livrable du sprint : votre blueprint Agentic SDLC",
    },
    framework: {
      eyebrow: "Le modèle",
      heading: "Trois couches pour un delivery logiciel augmenté par l'IA",
      intro: "Agentic SDLC distingue trois niveaux : le modèle opérationnel, les pratiques engineering et le harness technique nécessaire pour rendre les agents IA fiables.",
      answersLabel: "Il répond à :",
      layers: [
        {
          title: "Agentic SDLC",
          subtitle: "Comment le delivery logiciel doit évoluer.",
          text: "Le modèle opérationnel : rôles, workflows, gouvernance, métriques, supervision et responsabilité.",
          question: "comment organiser le delivery logiciel lorsque des agents IA participent directement au travail ?",
          owner: "Leadership engineering",
        },
        {
          title: "Agentic Engineering",
          subtitle: "Comment les ingénieurs travaillent dans ce nouveau modèle.",
          text: "La couche pratique : spécification, délégation, revue, tests, refactoring et validation.",
          question: "comment les ingénieurs passent-ils de l'écriture ligne par ligne à la supervision de workflows assistés par IA ?",
          owner: "Ingénieurs et tech leads",
        },
        {
          title: "Harness Engineering",
          subtitle: "Comment rendre les agents suffisamment fiables pour contribuer au delivery.",
          text: "La couche de fiabilité : contexte, outils, tests, politiques, évaluations, intégration CI/CD et garde-fous.",
          question: "quelle infrastructure, quels contrôles et quels garde-fous rendent le travail généré par IA suffisamment sûr pour un delivery en production ?",
          owner: "Équipes plateforme et outillage",
        },
      ],
    },
    engineering: {
      eyebrow: "L'évolution du rôle",
      heading: "Le rôle de l'ingénieur change de nature.",
      paragraphs: [
        "L'IA ne réduit pas le besoin de discipline engineering. Elle l'augmente.",
        "Dans un Agentic SDLC, les ingénieurs ne se contentent pas d'« écrire du code plus vite ». Ils apprennent à structurer le travail pour que les agents IA puissent y contribuer en sécurité : spécifications plus claires, tâches mieux découpées, tests plus solides, boucles de revue explicites et contexte mieux maîtrisé. L'ingénieur devient moins un producteur ligne par ligne qu'un concepteur, relecteur, validateur et superviseur du travail logiciel.",
      ],
      fromLabel: "Depuis",
      toLabel: "Vers",
      transformations: [
        { from: "Tout coder manuellement", to: "Déléguer des tâches bien délimitées" },
        { from: "Prompter de manière informelle", to: "Rédiger des spécifications actionnables" },
        { from: "Revoir uniquement le code humain", to: "Revoir les changements produits avec l'IA" },
        { from: "Faire confiance à l'output", to: "Valider le comportement par des tests et des évaluations" },
        { from: "Productivité locale", to: "Amélioration mesurable du delivery" },
      ],
    },
    programs: {
      eyebrow: "Prochaines étapes",
      heading: "Du premier sprint au passage à l'échelle",
      paragraphs: [
        "Le premier sprint produit le blueprint. L'étape suivante consiste à l'implémenter à travers des pilotes, de la formation et des métriques opérationnelles.",
        "Après le sprint initial, les organisations peuvent engager des programmes d'adoption ciblés : pilotes d'équipe, formation par rôle, refonte des workflows, instrumentation des métriques et support à la gouvernance.",
      ],
      items: [
        {
          title: "Activation d'une équipe pilote",
          text: "Sélectionner une ou deux équipes engineering et repenser leur workflow de delivery autour d'une exécution augmentée par l'IA.",
        },
        {
          title: "Formation par rôle",
          text: "Former les développeurs, tech leads, product managers, QA, équipes plateforme et delivery managers sur l'évolution de leur travail.",
        },
        {
          title: "Refonte des workflows",
          text: "Définir des patterns réutilisables pour la spécification, le codage, les tests, la revue, la documentation, la migration, le refactoring et la maintenance.",
        },
        {
          title: "Alignement plateforme et outillage",
          text: "Connecter les outils de codage IA aux dépôts, à la documentation, au CI/CD, aux contrôles de politique et aux standards engineering internes.",
        },
        {
          title: "Instrumentation des métriques",
          text: "Suivre l'adoption, la qualité, la vélocité, la contribution IA, le rework, le coût et la confiance des équipes.",
        },
        {
          title: "Gouvernance et supervision",
          text: "Créer des règles pratiques sur ce que l'IA peut faire, ce que les humains doivent revoir et la manière dont la responsabilité reste clairement attribuée.",
        },
      ],
    },
    contactReassurance: "Pas d'évangélisme IA générique. Pas de formation limitée aux outils. Le sujet est le delivery : workflows, qualité, supervision, métriques et adoption.",
    audience2: {
      eyebrow: 'Public cible',
      heading: "À qui s'adresse Agentic SDLC",
      sub: "Conçu pour les organisations qui veulent la vitesse de l'IA sans perdre la maîtrise du delivery.",
      cards: [
        { icon: 'apartment', title: 'Directions engineering', text: "Vous devez comprendre si les outils de codage IA créent une productivité réelle, où les risques émergent et comment passer à l'échelle sans perdre le contrôle." },
        { icon: 'terminal', title: 'Équipes plateforme et outillage', text: "Vous devez intégrer les outils IA dans l'environnement engineering : dépôts, CI/CD, documentation, identité, politiques et standards internes." },
        { icon: 'schedule', title: 'Directions produit et delivery', text: "Vous devez comprendre comment l'IA transforme la planification, l'estimation, la revue, la qualité et la prévisibilité du delivery." },
        { icon: 'handshake', title: 'ESN et organisations de delivery logiciel', text: "Vous devez préparer le passage d'un delivery fondé sur la Régie à une exécution mesurable augmentée par l'IA, sans renoncer au Forfait lorsque le contexte s'y prête." },
      ],
    },
    beyondPage: {
      heroEyebrow: 'Pour les ESN et cabinets de conseil IT',
      heroHeading: 'Au-delà du Time & Materials',
      heroLead: "Le staffing vendait du temps. Le prochain modèle vend des bursts d'exécution.",
      shiftEyebrow: 'La gestion du bench devient critique',
      shiftHeading: "Les coding agents changent l'économie du delivery.",
      paragraphs: [
        "L'augmentation d'équipe classique était conçue pour un monde où l'exécution était rare et les projets consommaient des années. On staffait des équipes, on vendait des jours facturables, on scalait avec les effectifs.",
        "Avec les coding agents, la productivité augmente, le delivery se comprime et le parallélisme s'intensifie. Les clients peuvent absorber davantage d'exécution en interne, ce qui signifie que les personnes ne sont plus allouées aux projets de la même manière statique.",
        "Les équipes externes ne disparaissent pas. Mais elles cessent d'être de longs engagements de staffing. Elles deviennent de courts bursts d'exécution ciblés.",
      ],
      before: 'Avant',
      beforeValue: 'personnes × temps',
      beforeCaption: 'jours facturables · staffing stable · projets longs',
      now: 'Maintenant',
      nowValue: "bursts d'exécution",
      nowCaption: 'flux parallèles · cycles courts · allocation dynamique',
      exampleLeftLabel: 'T&M classique',
      exampleLeftValue: '5 ingénieurs pendant 18 mois',
      exampleRightLabel: 'Exécution programmable',
      exampleRightValue: "3 flux d'exécution pendant 4–6 semaines",
      equationEyebrow: 'La gestion du bench est désormais critique',
      equationHeading: "L'équation historique de l'augmentation d'équipe classique",
      termOneLabel: 'Terme 01',
      termOne: 'Effectifs',
      termTwoLabel: 'Terme 02',
      termTwo: 'Mois facturables',
      equationResult: 'Capacité historique',
      annotations: [
        "Suppose que l'exécution est rare.",
        'Exige un staffing stable et long terme.',
        'Vend du temps, pas des résultats.',
      ],
      chartCaption: 'Scaling linéaire',
      chartNote: "La montée en capacité repose entièrement sur l'ajout d'effectifs ou sur davantage de mois facturables.",
      postParagraph1: 'Les coding agents compressent les cycles de delivery. Un même périmètre peut de plus en plus être livré plus vite, par des équipes plus petites, avec une automatisation plus forte.',
      postParagraph2: "Les clients ne cesseront pas de faire appel à des équipes externes — mais ils attendront de plus en plus des résultats mesurables, et non une simple capacité additionnelle.",
      constraintIntro: 'Cela crée une nouvelle contrainte pour les entreprises de services IT :',
      strategicCallout: 'Un delivery plus rapide implique une rotation plus rapide.',
      closing: "C'est précisément là qu'une Software Engineering Practice dédiée devient critique.",
      clientsEyebrow: 'Ce qui change pour les clients',
      clientsHeading: "La décision n'est plus de savoir combien de personnes staffer pour combien de mois.",
      clientsIntro: 'Les clients continueront à avoir besoin de partenaires engineering. Mais ils poseront de plus en plus des questions différentes :',
      bullets: [
        "Quelle quantité d'exécution devons-nous injecter maintenant ?",
        "Quelles initiatives méritent de courts bursts d'accélération ?",
        "Où avons-nous besoin de flux parallèles plutôt que de plus de jours facturables ?",
        'Quand la capacité doit-elle augmenter, s\'arrêter ou redémarrer ?',
      ],
      cards: [
        { num: '01', title: 'Divisible', text: "L'exécution se divise en flux ciblés : migration, tests, refactoring." },
        { num: '02', title: 'Comprimé dans le temps', text: 'Le travail se livre en semaines, pas en cycles de staffing pluriannuels.' },
        { num: '03', title: 'Élastique', text: "Montée en charge rapide, arrêt propre, redémarrage quand les priorités changent." },
        { num: '04', title: 'Planifiable', text: "L'exécution est routée selon les priorités, pas assignée statiquement aux équipes." },
      ],
      ctaEyebrow: 'Démarrer la conversation',
      ctaHeading: "Les projets consommaient des jours facturables.\nMaintenant, ils consomment des bursts d'exécution.",
      ctaBody: "Agentic SDLC fournit le modèle opérationnel derrière ce changement — rendez le delivery augmenté par l'IA fiable au sein de votre organisation engineering d'abord.",
      ctaPrimary: "Réserver un appel d'introduction",
      ctaSecondary: "Retour à l'aperçu",
      navBookCall: 'Réserver un appel',
      footerTagline: "Transformation du delivery logiciel activée par l'IA",
      mobileSecondary: "Retour à l'aperçu",
    },
    nav2: {
      problem: "Problème",
      offer: "Offre",
      maturity: "Maturité",
      metrics: "Métriques",
      programs: "Programmes",
      itServices: "Services IT",
    },
    heroTrustStrip: "Pour les directions engineering · équipes plateforme · organisations produit · ESN · équipes de delivery logiciel",
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
      eyebrow: 'NOUL SOFTWARE ENGINEERING',
      h1Prefix: 'Modelul operațional pentru',
      h1Rest: 'livrare software fiabilă.',
      subtitle: 'Instrumentele AI pentru dezvoltare software se răspândesc rapid în echipele de engineering. Dar simpla adoptare nu creează un model de livrare fiabil. Ajutăm organizațiile de engineering să transforme utilizarea AI în workflow-uri guvernate, productivitate măsurabilă și sisteme de livrare în care echipele și clienții pot avea încredere.',
      primaryCta: 'Programează un apel introductiv',
      secondaryCta: 'Lansează autoevaluarea pentru executivi',
      liveLabel: 'Control LIVE · Agentic SDLC',
      pipeline: 'Pipeline de delivery',
      steps: ['Planifică', 'Construiește', 'Revizuiește', 'Livrează', 'Măsoară'],
      eventsLabel: 'Evenimente în timp real',
      events: [
        { time: '14:02', message: 'agent-04 · PR #182 integrat', status: 'ok' },
        { time: '14:01', message: 'coadă de review · 2 elemente în așteptare', status: 'warn' },
        { time: '13:57', message: 'verificare politici · validată', status: 'ok' },
        { time: '13:54', message: 'agent-02 · modul generat', status: 'ok' },
      ],
      supervision: 'Supervizare',
      coverage: 'coverage',
      aiContribution: 'Contribuție AI',
      rework: 'Rework',
      quality: 'Calitate',
      agentPool: 'Agent pool',
      agentPoolStatus: 'online · 0 blocați',
      connectorLeftLabel: 'T&M clasic',
      connectorLeftDesc: 'Body shopping, zile facturabile, cicluri lungi de staffing.',
      connectorCenter: 'Agentic SDLC schimbă și modelul economic al livrării software',
      connectorRightLabel: 'Execuție programabilă',
      connectorRightDesc: 'Burst-uri scurte, fluxuri paralele, alocare dinamică.',
    },
    beyond: {
      eyebrow: 'Managementul bench-ului devine critic',
      heading: 'Dincolo de Time & Materials',
      lead: 'Modelul clasic vindea timp. Următorul model vinde burst-uri de execuție.',
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
        { name: 'Rework', desc: 'PR-uri care revin asupra unor porțiuni de cod deja revizuite' },
        { name: 'Calitate', desc: 'Scor de coverage, rată de trecere lint și sănătatea testelor' },
        { name: 'Supervizare', desc: 'Acoperirea review-ului uman pentru toate PR-urile fuzionate de agenți' },
      ],
      statement: 'Măsoară, nu anecdote.',
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
        { title: 'Instrumentează sistemul', text: 'Măsoară contribuția AI, throughput-ul, refacerile, calitatea și coveragea supravegherii.' },
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
      heading: 'Ești pregătit să treci dincolo de simpla adoptare a instrumentelor AI?',
      body: 'Începe cu un sprint focalizat pentru a evalua maturitatea actuală, a defini modelul operațional și a concepe primele piloturi de delivery măsurabile.',
      cta: 'Programează un apel introductiv',
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
} as unknown as Record<string, SiteCopy>;

Object.assign(copy, {
  ro: mergeCopy(copy.en, {
    meta: { title: 'Agentic SDLC | De la instrumente AI la sisteme de livrare software fiabile' },
    nav: {
      primaryLabel: 'Navigare principală',
      beyond: 'Dincolo de T&M',
      blueprint: 'Blueprint',
      metrics: 'Metrici',
      contact: 'Contact',
      blog: 'Blogul nostru: Învață & Proiectează',
      language: 'Limbă',
    },
    hero: {
      eyebrow: 'NOUL SOFTWARE ENGINEERING',
      h1Prefix: 'Modelul operațional pentru',
      h1Rest: 'livrare software fiabilă.',
      subtitle: 'Instrumentele AI pentru dezvoltare software se răspândesc rapid în echipele de engineering. Dar simpla adoptare nu creează un model de livrare fiabil. Ajutăm organizațiile de engineering să transforme utilizarea AI în workflow-uri guvernate, productivitate măsurabilă și sisteme de livrare în care echipele și clienții pot avea încredere.',
      primaryCta: 'Programează un apel introductiv',
      secondaryCta: 'Lansează autoevaluarea pentru executivi',
      liveLabel: 'Control LIVE · Agentic SDLC',
      pipeline: 'Pipeline de delivery',
      steps: ['Planifică', 'Construiește', 'Revizuiește', 'Livrează', 'Măsoară'],
      eventsLabel: 'Evenimente în timp real',
      events: [
        { time: '14:02', message: 'agent-04 · PR #182 integrat', status: 'ok' },
        { time: '14:01', message: 'coadă de review · 2 elemente în așteptare', status: 'warn' },
        { time: '13:57', message: 'verificare politici · validată', status: 'ok' },
        { time: '13:54', message: 'agent-02 · modul generat', status: 'ok' },
      ],
      supervision: 'Supervizare',
      coverage: 'coverage',
      aiContribution: 'Contribuție AI',
      rework: 'Rework',
      quality: 'Calitate',
      agentPool: 'Agent pool',
      agentPoolStatus: 'online · 0 blocați',
      connectorLeftLabel: 'T&M clasic',
      connectorLeftDesc: 'Body shopping, zile facturabile, cicluri lungi de staffing.',
      connectorCenter: 'Agentic SDLC schimbă și modelul economic al livrării software',
      connectorRightLabel: 'Execuție programabilă',
      connectorRightDesc: 'Burst-uri scurte, fluxuri paralele, alocare dinamică.',
    },
    beyond: {
      eyebrow: 'Bench Management devine critic',
      heading: 'Dincolo de Time & Materials: de la staffing la outcome delivery',
      lead: 'Staffing-ul vindea timp. Următorul model vinde rezultate.',
      paragraphs: [
        'Modelul clasic de team augmentation scala prin headcount și luni facturabile.',
      ],
      triplet: [
        'Vindeați profiluri.',
        'Facturați timp.',
        'Creșteați prin adăugare de headcount.',
      ],
      bridge: 'Livrarea software agentică schimbă această ecuație.',
      postEquationLead: 'Coding agents comprimă ciclurile de livrare. Același scope poate fi livrat tot mai rapid, de echipe mai mici, cu automatizare mai puternică.',
      disclaimer: 'Clienții nu vor înceta să folosească echipe externe — dar vor aștepta tot mai mult ca acestea să livreze rezultate măsurabile, nu doar capacitate.',
      implication: '',
      challengeIntro: 'Aceasta creează o nouă constrângere pentru firmele de servicii IT:',
      strategicCallout: 'Livrarea mai rapidă înseamnă rotație mai rapidă.',
      closing: 'Aici devine critică o Software Engineering Practice dedicată.',
      before: 'Înainte',
      beforeValue: 'oameni × timp',
      beforeCaption: 'zile facturabile · staffing stabil · proiecte lungi',
      now: 'Acum',
      nowValue: 'outcome pods',
      nowCaption: 'fluxuri paralele · cicluri scurte · alocare dinamică',
      exampleLeftLabel: 'T&M clasic',
      exampleLeftValue: '5 ingineri timp de 18 luni',
      exampleRightLabel: 'Outcome delivery',
      exampleRightValue: '1 pod embedded pentru 4-6 săptămâni',
      clientsEyebrow: 'Ce se schimbă pentru clienți',
      clientsTitle: 'Decizia nu mai este câți oameni să fie staffați pentru câte luni.',
      bullets: [
        'Ce workflow de business să transformăm primul?',
        'Ce rezultat trebuie să fie responsabilitatea pod-ului?',
        'Ce workflow-uri agentice pot trece în producție în siguranță?',
        'Ce guvernanță, supervizare și metrici sunt necesare din prima zi?',
        'Când trebuie să creștem, să reducem sau să repornim capacitatea?',
      ],
      cards: [
        { title: 'Embedded', text: 'Livrarea se apropie de workflow-urile reale ale clientului, de sistemele, datele și constrângerile operaționale ale acestuia.', num: '01' },
        { title: 'Cross-functional', text: 'Unitatea de lucru nu mai este un profil izolat. Este un pod care combină engineering, product, cloud, date, integrare și guvernanță.', num: '02' },
        { title: 'Production-oriented', text: 'Obiectivul nu este un demo sau un proof of concept. Obiectivul este un sistem utilizabil conectat la workflow-uri reale, cu supervizare, observabilitate și căi de escaladare.', num: '03' },
        { title: 'Outcome-measured', text: 'Succesul este măsurat prin impact de business, adoptare, calitate, cycle time, reducerea riscului și fiabilitate operațională, nu doar zile facturabile consumate.', num: '04' },
      ],
      equation: {
        eyebrow: 'Bench Management este acum critic',
        heading: 'Ecuația moștenită a augmentării clasice',
        termOneLabel: 'Termen 01',
        termOne: 'Headcount',
        termTwoLabel: 'Termen 02',
        termTwo: 'Luni facturabile',
        result: 'Capacitate legacy',
        annotations: [
          'Presupune că execuția este o resursă rară.',
          'Necesită staffing stabil, pe termen lung.',
          'Vinde timp, nu rezultate.',
        ],
        chartLabel: 'Scalare liniară',
        chartXLabel: 'headcount',
        chartYLabel: 'capacitate',
        note: 'Scalarea livrării depinde complet de adăugarea de headcount sau de creșterea numărului de luni facturabile.',
      },
    },
    core: {
      eyebrow: 'Schimbarea fundamentală',
      heading: 'Schimbarea fundamentală a rolului developerului.',
      body: 'Pe măsură ce coding agents preiau mai multă muncă, developerii nu dispar. Rolul lor se schimbă. Noua provocare este supervizarea: ce delegăm, ce revizuim, ce validăm și ce nu automatizăm orbește.',
      cards: [
        { icon: 'hub', title: 'Ce delegăm', text: 'Decidem unde coding agents pot avansa rapid fără să creeze datorie operațională ascunsă.' },
        { icon: 'fact_check', title: 'Ce revizuim', text: 'Facem supervizarea explicită, astfel încât validarea, aprobarea și escaladarea să fie integrate direct în workflow.' },
        { icon: 'shield_person', title: 'Ce nu automatizăm orbește', text: 'Protejăm calitatea, responsabilitatea și încrederea clientului acolo unde judecata umană rămâne esențială.' },
      ],
    },
    metrics: {
      eyebrow: 'Metrici',
      heading: 'Fără metrici, nu există transformare.',
      body: 'Livrarea agentică nu poate fi gestionată prin anecdote. Adoptarea scalează doar atunci când măsurăm două planuri: ce produc coding agents în sistemul de livrare și cum experimentează inginerii schimbarea în timp ce lucrează cu acești agenți.\n\nNoi configurăm și operăm acest strat de monitorizare pentru voi: un flux continuu de metrici de producție legate de agenți, combinat cu un survey recurent al angajaților.\n\nScopul este simplu: modelul operațional trebuie ghidat prin date, nu prin impresii.',
      measuredLabel: 'Ce trebuie măsurat',
      statement: 'Măsoară, nu anecdote.',
      statementBody: 'Ce se măsoară poate fi guvernat. Fabrica funcționează pe cifre, nu pe povești.',
      supervisionCoverage: 'Acoperire supervizare',
      reworkReduction: 'Reducere rework',
      velocityTitle: 'Viteză cu control',
      velocityText: 'Buclele de agenți livrează mai rapid doar când supervizarea, review-ul și escaladarea sunt măsurate în aceeași rulare.',
      traceability: 'Trasabilitate',
      unreviewedMerges: 'Merge-uri neverificate',
      planes: {
        quant: {
          tag: 'Planul 01 · Cantitativ · Continuu',
          title: 'Ce produce sistemul',
          body: 'Telemetrie de producție din workflow-ul de livrare agentică. Cinci familii de semnale sunt instrumentate în pipeline și actualizate la fiecare rulare.',
          familiesLabel: 'Familii de semnale',
          families: [
            {
              num: '01',
              title: 'Adoption Surface',
              summary: 'Cine folosește AI, unde și cât de des.',
              signals: ['Utilizatori activi', 'Rata de adopție a instrumentelor'],
            },
            {
              num: '02',
              title: 'Acceptance & Quality',
              summary: 'Dacă output-ul este suficient de fiabil pentru a fi livrat.',
              signals: ['Rata de acceptare', 'Rata defectelor', 'Variația coverage-ului'],
            },
            {
              num: '03',
              title: 'Velocity',
              summary: 'Metrici DORA, segmentate după implicarea agenților.',
              signals: ['Lead time', 'Frecvența deployment-urilor', 'Change failure rate'],
            },
            {
              num: '04',
              title: 'Agent Behavior',
              summary: 'Cât de bine operează agenții în interiorul guardrail-urilor.',
              signals: ['Calitatea escaladării', 'Efortul de supervizare', 'Finalizarea obiectivelor'],
            },
            {
              num: '05',
              title: 'Cost & Return',
              summary: 'Dacă economia sistemului se îmbunătățește.',
              signals: ['Costul tokenilor', 'Cost per schimbare acceptată'],
            },
          ],
        },
        perception: {
          tag: 'Planul 02 · Percepție · Trimestrial',
          title: 'Ce experimentează oamenii',
          body: 'Un survey trimestrial proprietar. Un baseline comun pentru toți respondenții, apoi o ramură specifică rolului, rutată automat.',
          baselineLabel: 'Baseline comun',
          baselineCount: 'Pentru fiecare respondent',
          baselineSummary: 'Calibrează rolul, modelul de engagement, frecvența utilizării AI, nivelul de autonomie și postura de învățare — contextul prin care toate celelalte răspunsuri sunt interpretate.',
          branchesLabel: 'Ramuri pe rol',
          branches: [
            {
              icon: 'code',
              title: 'Developer',
              count: 'Ramura coding',
              summary: 'Acoperă modul în care AI apare în bucla zilnică a developerului, de la authoring la verificare, și modul în care tooling-ul agentic este adoptat.',
            },
            {
              icon: 'rule',
              title: 'QA · Automation · Release Quality',
              count: 'Ramura calitate',
              summary: 'Acoperă utilizarea AI în ciclul de testare: de la generarea scenariilor până la mentenanță, flaky tests și deciziile de release-readiness.',
            },
            {
              icon: 'lan',
              title: 'PM · PO · BA · Ops',
              count: 'Ramura livrare',
              summary: 'Acoperă utilizarea AI în planning, documentație, reporting, risk management și semnale operaționale — munca din jurul codului.',
            },
          ],
          note: 'Instrumentul de survey este proprietar. Setul de întrebări este partajat în cadrul engagement-ului.',
        },
      },
    },
    audience: {
      eyebrow: 'Pentru cine este construit',
      heading: 'Pentru echipe care au nevoie de viteza AI, dar și de responsabilitate în livrare.',
      body: 'Acest engagement este destinat organizațiilor care experimentează deja cu instrumente de AI coding și caută acum un model operațional durabil.',
      cards: [
        { icon: 'apartment', title: 'Lideri de engineering', text: 'Echipe care trec de la utilizarea ad-hoc a AI la livrare guvernată, cu rezultate măsurabile.' },
        { icon: 'terminal', title: 'Echipe de produs și platformă', text: 'Organizații care standardizează workflow-uri asistate de AI de-a lungul etapelor de planning, build, review și release.' },
        { icon: 'handshake', title: 'Consultanțe și firme de servicii', text: 'Grupuri de delivery care au nevoie de câștiguri de viteză fără a sacrifica supervizarea, calitatea sau responsabilitatea.' },
      ],
    },
    blueprint: {
      eyebrow: 'Blueprint',
      heading: 'Adoptarea instrumentelor AI nu este un model de livrare.',
      paragraphs: [
        'Cumpărarea de licențe și lansarea unor coding assistants nu îi spune unei companii cum să livreze software diferit. Adevărata provocare este transformarea creșterii de productivitate și a comprimării timpului într-un nou model operațional.',
        'Pe măsură ce ciclurile de livrare devin mai scurte, alocarea oamenilor devine mai dinamică. Întrebarea nu mai este cine rămâne pe un proiect timp de 18 luni. Întrebarea devine: ce tip de sistem de execuție construim, de fapt?',
      ],
      levelsLabel: 'Trei niveluri',
      levels: [
        { title: 'Agentic SDLC', text: 'Cum se schimbă livrarea software.' },
        { title: 'Agentic Engineering', text: 'Cum lucrează inginerii în interiorul acestui model.' },
        { title: 'Harness Engineering', text: 'Cum sunt făcuți agenții suficient de fiabili pentru a participa la livrare.' },
      ],
    },
    engagement: {
      eyebrow: 'Engagement',
      heading: 'Un sprint pentru lansarea AI–Software Engineering Practice.',
      body: 'Într-un sprint concentrat de lucru, aliniem leadership-ul și engineering-ul în jurul unui pas următor concret, cu priorități clare, guvernanță și măsurare.',
      quote: 'Un engagement concentrat pentru a defini realitatea, prioritățile și regulile operative care fac reală supervizarea AI.',
      leadPrimary: 'AI nu schimbă doar productivitatea în software engineering.',
      leadSecondary: 'Schimbă economia serviciilor IT.',
      pressure: 'Pentru firmele construite pe team augmentation, Time & Materials și cicluri lungi de staffing, coding agents aduc o nouă provocare: cicluri mai scurte, rotație mai mare, presiune crescută pe bench management și cerere tot mai puternică din partea clienților pentru rezultate măsurabile.',
      bridge: 'Acest sprint concentrat ajută echipele de leadership, commercial și engineering să treacă de la experimentare AI dispersată la o AI–Software Engineering Practice structurată.',
      combinesLabel: 'Sprintul combină',
      steps: [
        { num: '01', title: 'Maturity assessment', text: 'Survey și interviuri pentru a cartografia utilizarea curentă a AI, practicile de engineering, tooling-ul, blocajele și nivelul de readiness pe roluri și echipe.' },
        { num: '02', title: 'Leadership alignment', text: 'Clarificarea ambiției strategice: productivitate, diferențiere în delivery, oferte noi, optimizarea bench-ului sau transformare AI orientată către clienți.' },
        { num: '03', title: 'Training & awareness', text: 'Sesiuni practice pentru ingineri, tech leads, QA, PMs și delivery managers despre Agentic SDLC, harness engineering și bucle de validare.' },
        { num: '04', title: 'Practice design', text: 'Scope, roluri, standarde, guvernanță, comunitate de experți, asset-uri reutilizabile și pattern-uri de delivery pentru target operating model.' },
        { num: '05', title: 'Offer & pilot design', text: 'Primele oferte outcome-based, segmente prioritare de clienți, modele de pod-uri, metrici de succes și misiuni pilot.' },
        { num: '06', title: 'Roadmap 30 / 60 / 90 zile', text: 'O cale clară de la experimentare la o capabilitate de livrare repetabilă.' },
      ],
    },
    contact: {
      eyebrow: 'Începe conversația',
      heading: 'Ești pregătit să treci dincolo de simpla adoptare a instrumentelor AI?',
      body: 'Începe cu un sprint focalizat pentru a evalua maturitatea actuală, a defini modelul operațional și a concepe primele piloturi de delivery măsurabile.',
      cta: 'Programează un apel introductiv',
      email: 'nicolas@agentic-sdlc.com',
    },
    footer: {
      brand: 'Agentic SDLC',
      tagline: 'Transformarea livrării software cu AI',
    },
    maturity: {
      eyebrow: 'Scala de maturitate AI Engineering',
      heading: 'Unde se află echipa ta acum?',
      sub: '5 etape de la utilizarea ad-hoc a AI până la orchestrarea completă a unei flote de agenți. Click pe orice nivel pentru a explora ce înseamnă și cum se poate avansa.',
      ctaLabel: 'Autoevaluare pentru executivi',
      selectedLevel: 'nivel selectat',
      focusAreas: 'Arii de focus',
      whatChanges: 'Ce se schimbă',
      toAdvanceTo: 'Pentru a avansa la',
      atFrontier: 'La frontieră',
      youAreHere: 'ești aici',
      shortcutTrapTitle: 'Capcana scurtăturii',
      shortcutTrapBody: 'Saltul de la L2 la L4 fără a stăpâni L3 duce la sisteme fragile și eșecuri de supervizare. Intuiția privind modurile de eșec de la L3 este infrastructură non-negociabilă — nu un nice-to-have. Nu merge prea repede.',
      keyTakeaway: 'Ideea-cheie:',
      keyTakeawayText: 'Maturitatea AI nu este definită de instrumentele cumpărate, ci de autonomia pipeline-urilor CI/CD și de disciplina modelului de supervizare.',
    },
    nav2: {
      problem: 'Problema centrală',
      offer: 'Oferta',
      maturity: 'Maturitate',
      metrics: 'Metrici',
      programs: 'Pașii următori',
      itServices: 'Servicii IT',
    },
    heroTrustStrip: 'Pentru lideri engineering · echipe platformă · organizații de produs · echipe de livrare software',
    problem: {
      eyebrow: 'Problema centrală',
      heading: 'Adoptarea instrumentelor AI nu este un model de delivery.',
      paragraphs: [
        'Majoritatea organizațiilor încep cu licențe: GitHub Copilot, Cursor, Claude Code, Gemini, Codex/ChatGPT Enterprise sau asistenți interni.',
        'Acest lucru creează câștiguri locale de productivitate. Dar nu răspunde la întrebările care contează la scară:',
      ],
      questionsIntro: '',
      questions: [
        'Ce ar trebui să delege inginerii către AI?',
        'Ce trebuie revizuit obligatoriu de oameni?',
        'Cum măsoară echipele contribuția AI?',
        'Cum este protejată calitatea?',
        'Cum știu managerii dacă delivery-ul se îmbunătățește?',
        'Cum evită organizațiile experimentarea necontrolată?',
      ],
      closing: 'Agentic SDLC acoperă distanța dintre utilizarea individuală a AI și un delivery software fiabil.',
      contrastHeader: ['Adoptarea instrumentelor AI', 'Agentic SDLC'],
      contrast: [
        { left: 'Utilizare individuală', right: 'Workflow-uri de echipă' },
        { left: 'Prompting', right: 'Modele de delegare' },
        { left: 'Generare de output', right: 'Review și validare' },
        { left: 'Productivitate anecdotică', right: 'Impact măsurabil asupra delivery-ului' },
        { left: 'Experimentare informală', right: 'Execuție guvernată' },
      ],
    },
    sprint: {
      eyebrow: 'Oferta',
      heading: 'Un sprint pentru a proiecta modelul tău de delivery asistat de AI.',
      subtitle: 'Un engagement focalizat pentru a ajuta organizația să treacă de la experimente izolate cu AI coding la un model operațional Agentic SDLC guvernat.',
      body: 'Într-un singur sprint, lucrăm cu echipele de leadership, engineering, product și platformă pentru a evalua unde este deja folosit AI, a defini modelul operațional potrivit, a pregăti rolurile-cheie și a proiecta primele piloturi de delivery măsurabile.',
      deliverables: [
        { num: '01', title: 'Evaluarea stării curente', text: 'Înțelegem cum sunt deja folosite instrumentele AI coding în echipe, unde apare valoarea și unde apar riscurile.' },
        { num: '02', title: 'Diagnoza maturității AI Engineering', text: 'Poziționăm echipele pe o scară practică de maturitate, de la utilizare ad-hoc la workflow-uri agentice orchestrate.' },
        { num: '03', title: 'Blueprint-ul modelului operațional', text: 'Definim cum ar trebui să funcționeze delivery-ul asistat de AI la nivel de roluri, workflow-uri, supervizare, review, calitate și guvernanță.' },
        { num: '04', title: 'Training pentru rolurile-cheie', text: 'Aliniem inginerii, tech leads, product managers, QA, echipele platformă și delivery managers asupra modului în care se schimbă munca.' },
        { num: '05', title: 'Designul metricilor și al turnului de control', text: 'Definim semnalele necesare pentru a măsura adopția, contribuția AI, calitatea, rework-ul, viteza, costul și încrederea echipei.' },
        { num: '06', title: 'Roadmap pe 30/60/90 de zile', text: 'La final, rămâneți cu un plan pragmatic de implementare și cu primele piloturi gata de lansare.' },
      ],
      primaryCta: 'Programează un apel introductiv',
      secondaryCta: 'Vezi scala de maturitate',
      outcomeLabel: 'Rezultatul sprintului: blueprint-ul tău Agentic SDLC',
    },
    framework: {
      eyebrow: 'Modelul',
      heading: 'Trei straturi ale delivery-ului software asistat de AI',
      intro: 'Agentic SDLC separă modelul operațional, practicile de engineering și harness-ul tehnic necesar pentru ca AI să devină fiabilă.',
      answersLabel: 'Răspunde la întrebarea:',
      layers: [
        { title: 'Agentic SDLC', subtitle: 'Cum se schimbă delivery-ul software.', text: 'Modelul operațional: roluri, workflow-uri, guvernanță, metrici, supervizare și responsabilitate.', question: 'cum ar trebui echipele să livreze software atunci când agenții AI participă la muncă?', owner: 'Leadership engineering' },
        { title: 'Agentic Engineering', subtitle: 'Cum lucrează inginerii în interiorul acestui model.', text: 'Stratul practicilor: specificații, delegare, review, testare, refactorizare și validare.', question: 'cum trec inginerii de la a scrie fiecare linie de cod la a superviza workflow-uri asistate de AI?', owner: 'Ingineri și tech leads' },
        { title: 'Harness Engineering', subtitle: 'Cum devin agenții suficient de fiabili pentru a participa.', text: 'Stratul de fiabilitate: context, instrumente, teste, politici, evaluări, integrare CI/CD și guardrails.', question: 'ce infrastructură și ce controale fac ca munca generată de AI să fie suficient de sigură pentru delivery în producție?', owner: 'Echipe platformă și tooling' },
      ],
    },
    engineering: {
      eyebrow: 'Schimbarea rolurilor',
      heading: 'Rolul inginerului se schimbă.',
      paragraphs: [
        'AI nu elimină disciplina de engineering. Dimpotrivă, crește nevoia de disciplină.',
        'Într-un Agentic SDLC, inginerii nu doar „scriu cod mai repede". Ei învață să structureze munca astfel încât sistemele AI să poată contribui în siguranță: specificații mai clare, task-uri mai mici, teste mai solide, bucle explicite de review și context mai bun. Inginerul devine mai puțin un producător linie cu linie și mai mult un designer, reviewer, validator și supervizor al muncii software.',
      ],
      fromLabel: 'De la',
      toLabel: 'La',
      transformations: [
        { from: 'Scrierea manuală a întregului cod', to: 'Delegarea unor task-uri bine delimitate' },
        { from: 'Prompting informal', to: 'Scrierea de specificații executabile' },
        { from: 'Review doar pentru cod scris de oameni', to: 'Review pentru modificări generate de AI' },
        { from: 'Încredere directă în output', to: 'Validarea comportamentului prin teste și evaluări' },
        { from: 'Productivitate locală', to: 'Îmbunătățire măsurabilă a delivery-ului' },
      ],
    },
    programs: {
      eyebrow: 'Pașii următori',
      heading: 'De la primul sprint la adopție scalată',
      paragraphs: [
        'Primul sprint creează blueprint-ul. Pasul următor este implementarea prin piloturi, training și metrici operaționale.',
        'După sprintul inițial, organizațiile pot trece la programe țintite de adopție: piloturi de echipă, training pe roluri, redesign de workflow-uri, instrumentarea metricilor și suport pentru guvernanță.',
      ],
      items: [
        { title: 'Enablement pentru echipe pilot', text: 'Selectăm una sau două echipe de engineering și le redesenăm workflow-ul de delivery în jurul execuției asistate de AI.' },
        { title: 'Training pe roluri', text: 'Pregătim developerii, tech leads, product managers, QA, echipele platformă și delivery managers pentru modul în care li se schimbă munca.' },
        { title: 'Redesign de workflow-uri', text: 'Definim pattern-uri repetabile pentru specificații, coding, testare, review, documentație, migrare, refactorizare și mentenanță.' },
        { title: 'Alinierea platformei și a tooling-ului', text: 'Conectăm instrumentele AI coding cu repository-urile, documentația, CI/CD, verificările de politici și standardele interne de engineering.' },
        { title: 'Instrumentarea metricilor', text: 'Monitorizăm adopția, calitatea, viteza, contribuția AI, rework-ul, costul și încrederea oamenilor.' },
        { title: 'Guvernanță și supervizare', text: 'Definim reguli practice pentru ce poate face AI, ce trebuie revizuit de oameni și cum este păstrată responsabilitatea.' },
      ],
    },
    audience2: {
      eyebrow: 'Public-țintă',
      heading: 'Pentru cine este Agentic SDLC',
      sub: 'Construit pentru organizațiile care au nevoie de viteza AI, dar și de responsabilitate în delivery.',
      cards: [
        { icon: 'apartment', title: 'Lideri engineering', text: 'Trebuie să înțelegeți dacă instrumentele AI coding generează productivitate reală, unde apar riscurile și cum puteți scala adopția în siguranță.' },
        { icon: 'terminal', title: 'Echipe platformă și tooling', text: 'Trebuie să integrați instrumentele AI în mediul de engineering: repository-uri, CI/CD, documentație, identitate, politici și standarde interne.' },
        { icon: 'schedule', title: 'Lideri product și delivery', text: 'Trebuie să înțelegeți cum schimbă AI planning-ul, estimarea, review-ul, calitatea și predictibilitatea pentru stakeholderi.' },
        { icon: 'handshake', title: 'Organizații de delivery software', text: 'Trebuie să vă pregătiți pentru trecerea de la delivery bazat pe staffing la execuție măsurabilă asistată de AI.' },
      ],
    },
    contactReassurance: 'Fără evanghelizare AI generică. Fără training centrat doar pe instrumente. Focusul este delivery-ul: workflow-uri, calitate, supervizare, metrici și adopție.',
    beyondPage: {
      heroEyebrow: 'Pentru ESN și cabinete de consultanță IT',
      heroHeading: 'Dincolo de Time & Materials',
      heroLead: 'Modelul clasic vindea timp. Următorul model vinde burst-uri de execuție.',
      shiftEyebrow: 'Managementul bench-ului devine critic',
      shiftHeading: 'Coding agents schimbă economia delivery-ului.',
      paragraphs: [
        'Staff augmentation clasic a fost conceput pentru o lume în care execuția era rară și proiectele durau ani. Echipele erau alocate, zilele facturabile vândute, iar creșterea însemna mai mulți oameni.',
        'Cu coding agents, productivitatea crește, delivery-ul se comprimă, iar paralelismul se intensifică. Clienții pot absorbi mai multă execuție intern, ceea ce înseamnă că oamenii nu mai sunt alocați proiectelor în același mod static.',
        'Echipele externe nu dispar. Dar încetează să fie angajamente lungi de staffing. Devin burst-uri scurte și țintite de execuție.',
      ],
      before: 'Înainte',
      beforeValue: 'oameni × timp',
      beforeCaption: 'zile facturabile · staffing stabil · proiecte lungi',
      now: 'Acum',
      nowValue: 'burst-uri de execuție',
      nowCaption: 'fluxuri paralele · cicluri scurte · alocare dinamică',
      exampleLeftLabel: 'T&M clasic',
      exampleLeftValue: '5 ingineri timp de 18 luni',
      exampleRightLabel: 'Execuție programabilă',
      exampleRightValue: '3 fluxuri de execuție timp de 4–6 săptămâni',
      equationEyebrow: 'Managementul bench-ului este acum critic',
      equationHeading: 'Ecuația istorică a augmentării clasice de echipă',
      termOneLabel: 'Termenul 01',
      termOne: 'Headcount',
      termTwoLabel: 'Termenul 02',
      termTwo: 'Luni facturabile',
      equationResult: 'Capacitate legacy',
      annotations: [
        'Presupune că execuția este rară.',
        'Necesită staffing stabil și pe termen lung.',
        'Vinde timp, nu rezultate.',
      ],
      chartCaption: 'Scalare liniară',
      chartNote: 'Creșterea capacității se bazează complet pe adăugarea de headcount sau pe mai multe luni facturabile.',
      postParagraph1: 'Coding agents comprimă ciclurile de delivery. Același scope poate fi livrat tot mai rapid, de echipe mai mici, cu automatizare mai puternică.',
      postParagraph2: 'Clienții nu vor înceta să apeleze la echipe externe — dar vor aștepta tot mai mult rezultate măsurabile, nu doar capacitate adițională.',
      constraintIntro: 'Aceasta creează o nouă constrângere pentru firmele de servicii IT:',
      strategicCallout: 'Livrarea mai rapidă înseamnă rotație mai rapidă.',
      closing: 'Exact aici devine critică o Software Engineering Practice dedicată.',
      clientsEyebrow: 'Ce se schimbă pentru clienți',
      clientsHeading: 'Decizia nu mai este câți oameni să fie staffați pentru câte luni.',
      clientsIntro: 'Clienții vor continua să aibă nevoie de parteneri de engineering. Dar vor pune tot mai mult întrebări diferite:',
      bullets: [
        'Câtă execuție trebuie injectată acum?',
        'Ce inițiative merită burst-uri scurte de accelerare?',
        'Unde avem nevoie de fluxuri paralele, nu de mai multe zile facturabile?',
        'Când capacitatea trebuie să crească, să se oprească sau să repornească?',
      ],
      cards: [
        { num: '01', title: 'Divizibil', text: 'Execuția se împarte în fluxuri țintite: migrare, testare, refactoring.' },
        { num: '02', title: 'Comprimat în timp', text: 'Munca se livrează în săptămâni, nu în cicluri multianuale de staffing.' },
        { num: '03', title: 'Elastic', text: 'Scalare rapidă, oprire curată, repornire când prioritățile se schimbă.' },
        { num: '04', title: 'Planificabil', text: 'Execuția este rutată după priorități, nu alocată static echipelor.' },
      ],
      ctaEyebrow: 'Începe conversația',
      ctaHeading: 'Proiectele consumau zile facturabile.\nAcum consumă burst-uri de execuție.',
      ctaBody: 'Agentic SDLC oferă modelul operațional din spatele acestei schimbări — faceți delivery-ul augmentat cu AI fiabil în organizația voastră de engineering.',
      ctaPrimary: 'Programează un apel introductiv',
      ctaSecondary: 'Înapoi la prezentare generală',
      navBookCall: 'Programează un apel',
      footerTagline: 'Transformarea livrării software cu AI',
      mobileSecondary: 'Înapoi la prezentare generală',
    },
  }),
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
    metrics: { eyebrow: 'Metriche', heading: "Senza metriche non c'è trasformazione.", body: "Se contributo AI, rilavorazione, qualità e supervisione non sono misurati, l'adozione resta aneddotica e non scala.", measuredLabel: 'Cosa misurare', statement: 'Misurare, non raccontare.', statementBody: 'Ciò che viene misurato può essere governato.', supervisionCoverage: 'Copertura di supervisione', reworkReduction: 'Riduzione rilavorazione', velocityTitle: 'Velocità sotto controllo', traceability: 'Tracciabilità', unreviewedMerges: 'Merge non revisionati' },
    audience: { eyebrow: 'Per chi', heading: "Per team che hanno bisogno della velocità dell'AI con responsabilità di delivery.", body: 'Per organizzazioni che stanno già sperimentando strumenti di coding AI e cercano un modello operativo duraturo.' },
    blueprint: { eyebrow: 'Blueprint', heading: 'Adottare strumenti AI non è un modello di delivery.', levelsLabel: 'Tre livelli' },
    engagement: { eyebrow: 'Engagement', heading: 'Uno sprint per definire il modello operativo.', body: 'In uno sprint focalizzato allineiamo leadership e engineering su priorità, governance e misurazione.', quote: 'Un engagement focalizzato per definire realtà, priorità e regole operative che rendono reale la supervisione AI.' },
    contact: { eyebrow: 'Inizia la conversazione', heading: 'Ancora in modalità sandbox?', body: "Se l'AI è già nei workflow di delivery, il passo successivo è controllo, supervisione ed esecuzione misurabile.", cta: 'Prenota una call introduttiva' },
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
    hero: { eyebrow: "SOFTWARE ENGINEERING'İN GELECEĞİ", h1Rest: 'AI geliştirme araçlarından güvenilir yazılım teslimat sistemlerine.', subtitle: 'AI denemelerinden müşterilerinizin güvenebileceği bir teslimat modeline geçin.', primaryCta: 'Tanışma görüşmesi ayır', secondaryCta: 'Yöneticiler için öz değerlendirme', liveLabel: 'LIVE kontrol · Agentic SDLC', pipeline: "Teslimat pipeline'ı", steps: ['Planla', 'Geliştir', 'Review', 'Yayınla', 'Ölç'], eventsLabel: 'Canlı olaylar', supervision: 'Gözetim', coverage: 'kapsam', aiContribution: 'AI katkısı', rework: 'Yeniden iş', quality: 'Kalite', agentPool: 'Agent havuzu', agentPoolStatus: 'online · 0 takıldı', connectorLeftLabel: 'Klasik T&M', connectorLeftDesc: 'Body shopping, faturalandırılabilir günler, uzun staffing döngüleri.', connectorCenter: 'Agentic SDLC yazılım teslimatının iş modelini de değiştirir', connectorRightLabel: 'Programlanabilir yürütme', connectorRightDesc: 'Kısa burstler, paralel akışlar, dinamik tahsis.' },
    beyond: { eyebrow: 'Bench Management becomed critical', heading: 'Time & Materials ötesi', lead: 'Staffing zaman satıyordu. Yeni model yürütme burstleri satar.', before: 'Önce', beforeValue: 'insan × zaman', beforeCaption: 'faturalandırılabilir günler · stabil staffing · uzun projeler', now: 'Şimdi', nowValue: 'yürütme burstleri', nowCaption: 'paralel akışlar · kısa döngüler · dinamik tahsis', clientsEyebrow: 'Müşteriler için ne değişiyor', clientsTitle: 'Karar artık kaç kişiyi kaç ay görevlendirmek değil.', closing: 'Projeler eskiden faturalandırılabilir günler tüketirdi. Şimdi yürütme burstleri tüketiyor.' },
    core: { eyebrow: 'Temel değişim', heading: 'Geliştirici rolündeki temel değişim.', body: "Coding agent'lar daha fazla işi üstlendikçe geliştiriciler ortadan kaybolmaz. Rol; gözetim, review, doğrulama ve neyin körlemesine otomatikleştirilmeyeceğine karar verme yönüne kayar." },
    metrics: { eyebrow: 'Metrikler', heading: 'Metrik yoksa dönüşüm yoktur.', body: 'AI katkısı, yeniden iş, kalite ve gözetim ölçülmezse benimseme anekdot düzeyinde kalır ve ölçeklenemez.', measuredLabel: 'Ne ölçülmeli', statement: 'Anekdot yerine ölçüm.', statementBody: 'Ölçülen şey yönetilebilir.', supervisionCoverage: 'Gözetim kapsamı', reworkReduction: 'Yeniden iş azaltımı', velocityTitle: 'Kontrollü hız', traceability: 'İzlenebilirlik', unreviewedMerges: "Review edilmemiş merge'ler" },
    audience: { eyebrow: 'Kimler için', heading: 'AI hızına delivery sorumluluğuyla ihtiyaç duyan ekipler için.', body: 'AI coding araçlarını zaten deneyen ve kalıcı bir işletim modeli arayan organizasyonlar için.' },
    blueprint: { eyebrow: 'Blueprint', heading: 'AI araçlarını benimsemek bir delivery modeli değildir.', levelsLabel: 'Üç seviye' },
    engagement: { eyebrow: 'Engagement', heading: 'İşletim modelini tanımlamak için bir sprint.', body: "Odaklı bir çalışma sprintinde leadership ve engineering'i öncelikler, governance ve ölçüm etrafında hizalarız.", quote: 'AI gözetimini gerçek kılan gerçekliği, öncelikleri ve işletim kurallarını tanımlamak için odaklı bir engagement.' },
    contact: { eyebrow: 'Sohbeti başlatın', heading: 'Hâlâ sandbox modunda mısınız?', body: "AI teslimat workflow'larınıza zaten giriyorsa sonraki adım kontrol, gözetim ve ölçülebilir yürütmedir.", cta: 'Tanışma görüşmesi ayır' },
    footer: { tagline: 'AI destekli yazılım teslimatı dönüşümü' },
  }),
} satisfies Partial<Record<string, SiteCopy>>);
