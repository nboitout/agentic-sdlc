'use client';

import { useEffect, useRef, useState } from 'react';
import type { SiteCopy } from '@/lib/i18n';

type HeroCopy = SiteCopy['hero'];

type Agent = {
  id: string;
  stage: number;
  target: number;
  status: 'active' | 'review';
  task: string;
};

type MetricKey = 'coverage' | 'ai' | 'rework' | 'quality';

type MetricState = Record<MetricKey, number[]>;

const AGENT_TICK_MS = 1700;
const EVENT_TICK_MS = 4200;
const KPI_TICK_MS = 2800;
const REVIEW_BAND: [number, number] = [0.4, 0.6];
const MAX_EVENTS = 4;

const TASK_BANK = [
  'OAuth refactor',
  'API scaffold',
  'Schema migration',
  'Telemetry hooks',
  'Index rebuild',
  'Webhook retry',
  'Cache layer',
  'Auth middleware',
  'Type cleanup',
  'Query planner',
  'Rate limiter',
  'Audit log',
];

const INITIAL_AGENTS: Agent[] = [
  { id: 'agent-01', stage: 0.16, target: 0.92, status: 'active', task: 'OAuth refactor' },
  { id: 'agent-02', stage: 0.32, target: 0.78, status: 'active', task: 'API scaffold' },
  { id: 'agent-03', stage: 0.48, target: 0.55, status: 'review', task: 'Schema migration' },
  { id: 'agent-04', stage: 0.72, target: 0.96, status: 'active', task: 'Telemetry hooks' },
];

// Deterministic seed used for SSR and first hydration render — a flat series
// keyed off the displayed base value. This avoids server/client mismatch on
// the kpi numbers and sparklines. Replaced with a randomized series on mount.
const KPI_BASELINES: Record<MetricKey, number> = {
  coverage: 91,
  ai: 67,
  rework: 15,
  quality: 90,
};
const KPI_RANGES: Record<MetricKey, number> = {
  coverage: 1.4,
  ai: 2.0,
  rework: 1.6,
  quality: 1.2,
};
const KPI_SERIES_LENGTH = 24;
const FLAT_KPIS: MetricState = {
  coverage: Array(KPI_SERIES_LENGTH).fill(KPI_BASELINES.coverage),
  ai: Array(KPI_SERIES_LENGTH).fill(KPI_BASELINES.ai),
  rework: Array(KPI_SERIES_LENGTH).fill(KPI_BASELINES.rework),
  quality: Array(KPI_SERIES_LENGTH).fill(KPI_BASELINES.quality),
};

function genSeries(base: number, range: number, count: number) {
  const arr: number[] = [];
  let value = base;
  for (let index = 0; index < count; index += 1) {
    value += (Math.random() - 0.5) * range;
    arr.push(value);
  }
  return arr;
}

function formatUtcClock() {
  const date = new Date();
  const h = String(date.getUTCHours()).padStart(2, '0');
  const m = String(date.getUTCMinutes()).padStart(2, '0');
  const s = String(date.getUTCSeconds()).padStart(2, '0');
  return `${h}:${m}:${s} UTC`;
}

function formatUtcHourMinute(ageSeconds: number) {
  const date = new Date(Date.now() - ageSeconds * 1000);
  const h = String(date.getUTCHours()).padStart(2, '0');
  const m = String(date.getUTCMinutes()).padStart(2, '0');
  return `${h}:${m}`;
}

function inReviewBand(position: number) {
  return position >= REVIEW_BAND[0] && position < REVIEW_BAND[1];
}

function buildSparklinePoints(values: number[]) {
  const width = 80;
  const height = 16;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;

  return values
    .map((value, index) => {
      const x = (index / (values.length - 1)) * width;
      const y = height - ((value - min) / range) * (height - 2) - 1;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(' ');
}

export function HeroDashboard({ hero }: { hero: HeroCopy }) {
  // `mounted` gates anything that reads Date.now() / Math.random() so that
  // SSR + first hydration render are fully deterministic. After mount the
  // dashboard is hydrated and we can safely show live values.
  const [mounted, setMounted] = useState(false);
  const [clock, setClock] = useState('--:--:-- UTC');
  const [agents, setAgents] = useState(INITIAL_AGENTS);
  const [eventIndex, setEventIndex] = useState(4);
  const eventUidRef = useRef(0);
  const [events, setEvents] = useState(() => {
    const seeded = hero.events.slice(0, MAX_EVENTS);
    const ages = [0, 60, 240, 540];
    return seeded.map((event, index) => ({
      ...event,
      ageSeconds: ages[index] ?? 0,
      uid: eventUidRef.current++,
    }));
  });
  const [kpis, setKpis] = useState<MetricState>(FLAT_KPIS);

  // Once on mount: flip the gate, seed live time + randomized kpi series.
  useEffect(() => {
    setMounted(true);
    setClock(formatUtcClock());
    setKpis({
      coverage: genSeries(KPI_BASELINES.coverage, KPI_RANGES.coverage, KPI_SERIES_LENGTH),
      ai: genSeries(KPI_BASELINES.ai, KPI_RANGES.ai, KPI_SERIES_LENGTH),
      rework: genSeries(KPI_BASELINES.rework, KPI_RANGES.rework, KPI_SERIES_LENGTH),
      quality: genSeries(KPI_BASELINES.quality, KPI_RANGES.quality, KPI_SERIES_LENGTH),
    });
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => setClock(formatUtcClock()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    setAgents(INITIAL_AGENTS);
    const seeded = hero.events.slice(0, MAX_EVENTS);
    const ages = [0, 60, 240, 540];
    setEvents(
      seeded.map((event, index) => ({
        ...event,
        ageSeconds: ages[index] ?? 0,
        uid: eventUidRef.current++,
      })),
    );
    setEventIndex(4);
  }, [hero.events]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setAgents((current) =>
        current.map((agent, index) => {
          const stuckInReview = agent.status === 'review' && inReviewBand(agent.stage);
          const speed = stuckInReview ? 0.005 : 0.025 + Math.random() * 0.025;
          const nextStage = agent.stage + speed;

          if (nextStage >= agent.target) {
            return {
              id: `agent-0${index + 1}`,
              stage: 0.04 + Math.random() * 0.08,
              target: 0.55 + Math.random() * 0.42,
              status: Math.random() < 0.28 ? 'review' : 'active',
              task: TASK_BANK[Math.floor(Math.random() * TASK_BANK.length)],
            };
          }

          return { ...agent, stage: nextStage };
        }),
      );
    }, AGENT_TICK_MS);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (hero.events.length === 0) return undefined;

    const timer = window.setInterval(() => {
      setEvents((current) => {
        const nextEvent = hero.events[eventIndex % hero.events.length];
        setEventIndex((value) => value + 1);
        return [
          { ...nextEvent, ageSeconds: 0, uid: eventUidRef.current++ },
          ...current,
        ].slice(0, MAX_EVENTS);
      });
    }, EVENT_TICK_MS);

    return () => window.clearInterval(timer);
  }, [eventIndex, hero.events]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setKpis((current) => {
        const next = { ...current };
        (Object.keys(next) as MetricKey[]).forEach((key) => {
          const series = [...next[key]];
          const last = series[series.length - 1];
          series.shift();
          series.push(last + (Math.random() - 0.5) * 1.1);
          next[key] = series;
        });
        return next;
      });
    }, KPI_TICK_MS);

    return () => window.clearInterval(timer);
  }, []);

  const reviewCount = agents.filter((agent) => agent.status === 'review' && inReviewBand(agent.stage)).length;
  const inFlightCount = agents.length;

  const metrics = [
    { key: 'coverage' as const, label: hero.coverage, value: Math.round(kpis.coverage.at(-1) ?? 92) },
    { key: 'ai' as const, label: hero.aiContribution, value: Math.round(kpis.ai.at(-1) ?? 68) },
    { key: 'rework' as const, label: hero.rework, value: Math.round(kpis.rework.at(-1) ?? 14) },
    { key: 'quality' as const, label: hero.quality, value: Math.round(kpis.quality.at(-1) ?? 91) },
  ];

  return (
    <div className="hero-visual">
      <div className="as-dashboard" aria-hidden="true">
        <div className="as-card as-header">
          <div className="as-header-left">
            <span className="as-pulse-dot" />
            <span className="as-label-live">CONTROL · LIVE</span>
            <span className="as-divider-v" />
            <span className="as-text-muted">Agentic SDLC</span>
          </div>
          <div className="as-header-right">
            <div className="as-pool">
              <span className="as-pool-label">{hero.agentPool}</span>
              <span className="as-pool-dots">
                {agents.map((agent) => (
                  <span key={agent.id} className="as-pool-dot" />
                ))}
              </span>
              <span className="as-pool-count">{agents.length}/{agents.length}</span>
            </div>
            <span className="as-clock">{clock}</span>
          </div>
        </div>

        <div className="as-card as-pipeline">
          <div className="as-pipeline-head">
            <span className="as-pipeline-title">{hero.pipeline}</span>
            <span className="as-pipeline-meta">
              <span className="as-pipeline-count">{inFlightCount}</span> in flight ·{' '}
              <span className="as-pipeline-count as-pipeline-count-warn">{reviewCount}</span> awaiting review
            </span>
          </div>

          <div className="as-stages">
            {hero.steps.map((step, index) => (
              <span
                key={step}
                className={`as-stage${index === 2 && reviewCount > 0 ? ' is-active-review' : ''}`}
              >
                {step}
              </span>
            ))}
          </div>

          <div className="as-track">
            <div className="as-track-tick" style={{ left: '20%' }} />
            <div className="as-track-tick" style={{ left: '40%' }} />
            <div className="as-track-tick" style={{ left: '60%' }} />
            <div className="as-track-tick" style={{ left: '80%' }} />
          </div>

          <div className="as-lanes">
            {agents.map((agent) => {
              const showReview = agent.status === 'review' && inReviewBand(agent.stage);
              const width = `${agent.stage * 100 + 2}%`;
              const left = `${agent.stage * 100}%`;

              return (
                <div key={agent.id} className="as-lane">
                  <div className="as-lane-line" />
                  <div className={`as-trail${showReview ? ' is-review' : ''}`} style={{ width }} />
                  <div className="as-pill" style={{ left }}>
                    <span className={`as-pill-dot${showReview ? ' is-review' : ''}`} />
                    <span>{agent.id}</span>
                    <span className="as-pill-task">· {agent.task}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="as-bottom">
          <div className="as-card as-events">
            <div className="as-section-head">
              <span className="as-section-title">{hero.eventsLabel}</span>
              <span className="as-section-meta">streaming</span>
            </div>
            <div>
              {events.map((event) => (
                <div key={event.uid} className="as-event">
                  <span className="as-event-time">{mounted ? formatUtcHourMinute(event.ageSeconds) : '--:--'}</span>
                  <span className="as-event-text">{event.message}</span>
                  <span className={`as-event-icon as-event-icon-${event.status}`}>
                    {event.status === 'ok' ? '✓' : '!'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="as-card as-metrics">
            <div className="as-section-head">
              <span className="as-section-title">{hero.supervision}</span>
              <span className="as-section-meta">last 24h</span>
            </div>
            <div className="as-kpi-grid">
              {metrics.map((metric) => (
                <div key={metric.key} className="as-kpi">
                  <div className="as-kpi-label">{metric.label}</div>
                  <div className="as-kpi-value">{metric.value}%</div>
                  <svg className="as-spark" viewBox="0 0 80 16" preserveAspectRatio="none">
                    <polyline
                      points={buildSparklinePoints(kpis[metric.key])}
                      fill="none"
                      stroke={`var(--as-${metric.key === 'rework' ? 'warning' : metric.key === 'ai' ? 'info' : 'accent'})`}
                      strokeWidth="1"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
