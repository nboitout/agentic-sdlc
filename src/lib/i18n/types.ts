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
  maturity: {
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
  problem: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    questionsIntro: string;
    questions: string[];
    closing: string;
    contrastHeader: [string, string];
    contrast: { left: string; right: string }[];
  };
  sprint: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    body: string;
    deliverables: { num: string; title: string; text: string }[];
    primaryCta: string;
    secondaryCta: string;
    outcomeLabel: string;
  };
  framework: {
    eyebrow: string;
    heading: string;
    intro: string;
    answersLabel: string;
    layers: { title: string; subtitle: string; text: string; question: string; owner: string }[];
  };
  engineering: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    fromLabel: string;
    toLabel: string;
    transformations: { from: string; to: string }[];
  };
  programs: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    items: { title: string; text: string }[];
  };
  contactReassurance: string;
  audience2: {
    eyebrow: string;
    heading: string;
    sub: string;
    cards: { icon: string; title: string; text: string }[];
  };
  beyondPage: {
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
  nav2: {
    problem: string;
    offer: string;
    maturity: string;
    metrics: string;
    programs: string;
    itServices: string;
  };
  heroTrustStrip: string;
};

export type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends Array<infer U>
    ? T[K]
    : T[K] extends object
      ? DeepPartial<T[K]>
      : T[K];
};

export function mergeCopy(base: SiteCopy, overrides: DeepPartial<SiteCopy>): SiteCopy {
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
