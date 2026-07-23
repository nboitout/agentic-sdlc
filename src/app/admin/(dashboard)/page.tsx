import { fetchAllSheets } from '@/lib/sheets';
import Scorecard from '@/components/admin/Scorecard';
import AdminStackedCountryChart, { StackedTimePoint } from '@/components/admin/AdminStackedCountryChart';
import AdminPieChart, { PieDataPoint } from '@/components/admin/AdminPieChart';
import DaySelect from '@/components/admin/DaySelect';
import { fmtParis, parisDate, parisHour, fmtDuration } from '@/lib/adminFormat';
import { perVisitSeconds, type LeaveLike } from '@/lib/dwell';

export const dynamic = 'force-dynamic';

function formatPct(n: number) {
  return `${n.toFixed(1)}%`;
}

function avgDuration(rows: LeaveLike[]): number {
  const visits = perVisitSeconds(rows);
  if (visits.length === 0) return 0;
  return visits.reduce((a, b) => a + b, 0) / visits.length;
}

const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });
function countryLabel(code: string): string {
  if (!/^[A-Za-z]{2}$/.test(code)) return code || 'Unknown';
  try {
    return regionNames.of(code.toUpperCase()) ?? code;
  } catch {
    return code;
  }
}

export default async function AdminOverviewPage({
  searchParams,
}: {
  searchParams: Promise<{ day?: string }>;
}) {
  const { day } = await searchParams;
  let visits, errors;
  try {
    ({ visits, errors } = await fetchAllSheets());
  } catch (err) {
    return (
      <main className="adm-page">
        <div className="adm-error-box">
          <p>Dashboard error</p>
          <pre>{String(err)}</pre>
        </div>
        <p style={{ color: 'var(--adm-i30)', fontSize: '.82rem', lineHeight: 1.6 }}>
          Check that GOOGLE_SHEETS_ID, GOOGLE_SERVICE_ACCOUNT_EMAIL and
          GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY(_BASE64) are set correctly.
        </p>
      </main>
    );
  }

  const errorEntries = Object.entries(errors ?? {});

  const pageVisits = visits.filter((v) => v.event === 'page_visit');

  // --- Unique visitors (distinct readerId in page_visit events) ---
  const uniqueVisitors = new Set(pageVisits.map((v) => v.readerId).filter(Boolean)).size;

  // --- Return visitor rate: distinct visitors seen on more than one distinct date ---
  const visitorDates = new Map<string, Set<string>>();
  pageVisits.forEach((v) => {
    if (!v.readerId) return;
    if (!visitorDates.has(v.readerId)) visitorDates.set(v.readerId, new Set());
    visitorDates.get(v.readerId)!.add(v.timestamp.slice(0, 10));
  });
  const totalVisitors = visitorDates.size;
  const returningVisitors = [...visitorDates.values()].filter((dates) => dates.size > 1).length;
  const returnRate = totalVisitors > 0 ? (returningVisitors / totalVisitors) * 100 : 0;

  // --- Avg homepage dwell time ---
  const avgHome = avgDuration(
    visits.filter((v) => {
      if (v.event !== 'page_leave') return false;
      const p = v.page.replace(/^https?:\/\/[^/]+/, '');
      return p === '/' || p === '';
    })
  );

  // --- Avg session dwell (all pages) ---
  const avgAll = avgDuration(visits.filter((v) => v.event === 'page_leave'));

  // --- Stacked bar: unique visitors per day, stacked by country (top 10 + Other) ---
  const countryVisitors = new Map<string, Set<string>>();
  pageVisits.forEach((v) => {
    const c = countryLabel(v.country || 'Unknown');
    if (!countryVisitors.has(c)) countryVisitors.set(c, new Set());
    if (v.readerId) countryVisitors.get(c)!.add(v.readerId);
  });
  const topCountries = [...countryVisitors.entries()]
    .sort((a, b) => b[1].size - a[1].size)
    .slice(0, 10)
    .map(([c]) => c);
  const topCountrySet = new Set(topCountries);
  const stackedCountries = [...topCountries, 'Other'];

  const perDate = new Map<string, Map<string, Set<string>>>();
  pageVisits.forEach((v) => {
    const date = parisDate(v.timestamp);
    const c = countryLabel(v.country || 'Unknown');
    const key = topCountrySet.has(c) ? c : 'Other';
    if (!perDate.has(date)) perDate.set(date, new Map());
    const m = perDate.get(date)!;
    if (!m.has(key)) m.set(key, new Set());
    if (v.readerId) m.get(key)!.add(v.readerId);
  });

  const earliestVisit = pageVisits.reduce<string | null>((min, v) => {
    const d = parisDate(v.timestamp);
    if (!d) return min;
    return !min || d < min ? d : min;
  }, null);
  const todayParis = parisDate(new Date());
  const rangeStart = earliestVisit ?? todayParis;
  const stackedData: StackedTimePoint[] = [];
  for (let d = new Date(rangeStart + 'T12:00:00Z'); d.toISOString().slice(0, 10) <= todayParis; d.setUTCDate(d.getUTCDate() + 1)) {
    const entry: StackedTimePoint = { date: d.toISOString().slice(0, 10) };
    stackedCountries.forEach((c) => { entry[c] = 0; });
    stackedData.push(entry);
  }
  const dateMap = new Map(stackedData.map((d) => [d.date as string, d]));
  for (const [date, m] of perDate) {
    const entry = dateMap.get(date);
    if (!entry) continue;
    for (const [key, set] of m) entry[key] = set.size;
  }

  // --- Pie chart: visits by traffic source (UTM source, else 'Direct / Referral') ---
  const sourceCount = new Map<string, number>();
  pageVisits.forEach((v) => {
    const s = v.utm_source || 'Direct / Referral';
    sourceCount.set(s, (sourceCount.get(s) ?? 0) + 1);
  });
  const sourceData: PieDataPoint[] = [...sourceCount.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([name, value]) => ({ name, value }));

  // --- All-time unique visitors by country ---
  const allTimeCountry = new Map<string, Set<string>>();
  pageVisits.forEach((v) => {
    const c = countryLabel(v.country || 'Unknown');
    if (!allTimeCountry.has(c)) allTimeCountry.set(c, new Set());
    if (v.readerId) allTimeCountry.get(c)!.add(v.readerId);
  });
  const countryRows = [...allTimeCountry.entries()]
    .map(([country, set]) => ({ country, count: set.size }))
    .sort((a, b) => b.count - a.count);
  const allTimeVisitsTotal = countryRows.reduce((sum, r) => sum + r.count, 0);

  // --- Intraday: visits per hour for a selected day (Paris time), by country ---
  const selectedDay = day && /^\d{4}-\d{2}-\d{2}$/.test(day) ? day : todayParis;
  const dayOptions = [...new Set([todayParis, ...pageVisits.map((v) => parisDate(v.timestamp))])]
    .sort((a, b) => (a < b ? 1 : -1));
  const dayVisits = pageVisits.filter((v) => parisDate(v.timestamp) === selectedDay);
  const dayVisitorCount = new Set(dayVisits.map((v) => v.readerId).filter(Boolean)).size;
  const dayCountryVisitors = new Map<string, Set<string>>();
  dayVisits.forEach((v) => {
    const c = countryLabel(v.country || 'Unknown');
    if (!dayCountryVisitors.has(c)) dayCountryVisitors.set(c, new Set());
    if (v.readerId) dayCountryVisitors.get(c)!.add(v.readerId);
  });
  const dayTopCountries = [...dayCountryVisitors.entries()]
    .sort((a, b) => b[1].size - a[1].size)
    .slice(0, 10)
    .map(([c]) => c);
  const dayTopSet = new Set(dayTopCountries);
  const intradayCountries = [...dayTopCountries, 'Other'];
  const hourSets: Map<string, Set<string>>[] = Array.from({ length: 24 }, () => new Map());
  dayVisits.forEach((v) => {
    const hour = parisHour(v.timestamp);
    if (isNaN(hour) || hour < 0 || hour > 23) return;
    const c = countryLabel(v.country || 'Unknown');
    const key = dayTopSet.has(c) ? c : 'Other';
    const m = hourSets[hour];
    if (!m.has(key)) m.set(key, new Set());
    if (v.readerId) m.get(key)!.add(v.readerId);
  });
  const intradayData: StackedTimePoint[] = [];
  for (let h = 0; h < 24; h++) {
    const entry: StackedTimePoint = { date: `${String(h).padStart(2, '0')}:00` };
    intradayCountries.forEach((c) => { entry[c] = hourSets[h].get(c)?.size ?? 0; });
    intradayData.push(entry);
  }

  const countryColors: Record<string, string> = { Other: '#9a9a9a' };
  const PALETTE = ['#4648d4', '#6063ee', '#818cf8', '#2f2ebe', '#a5abff', '#3730a3', '#4338ca', '#c0c1ff', '#312e81', '#93000a'];
  [...new Set([...stackedCountries, ...intradayCountries])]
    .filter((c) => c !== 'Other')
    .sort()
    .forEach((c, i) => { countryColors[c] = PALETTE[i % PALETTE.length]; });

  return (
    <main className="adm-page">
      <div className="adm-page-header">
        <div>
          <p className="adm-page-eyebrow">Dashboard</p>
          <h1 className="adm-page-title">Overview</h1>
          <p className="adm-page-sub">Updated {fmtParis(new Date(), { withSeconds: true })} (Paris)</p>
        </div>
      </div>

      {errorEntries.length > 0 && (
        <div className="adm-error-box">
          <p>Sheet loading errors</p>
          {errorEntries.map(([sheet, msg]) => (
            <pre key={sheet}>{sheet}: {msg}</pre>
          ))}
        </div>
      )}

      <div className="adm-scorecards">
        <Scorecard label="Unique Visitors" value={uniqueVisitors.toLocaleString()} />
        <Scorecard label="Return Visitor Rate" value={formatPct(returnRate)} subtitle="came back on a later day" />
        <Scorecard label="Avg Time — Homepage" value={fmtDuration(avgHome)} subtitle="page_leave events" />
        <Scorecard label="Avg Time — Any Page" value={fmtDuration(avgAll)} subtitle="page_leave events" />
        <Scorecard label="Countries Reached" value={countryRows.length.toLocaleString()} />
      </div>

      <p className="adm-section-title">Visitors by day and country</p>
      <div className="adm-chart-card" style={{ marginBottom: 24 }}>
        <p className="adm-chart-title">Daily unique visitors by country (top 10)</p>
        <AdminStackedCountryChart data={stackedData} countries={stackedCountries} colorMap={countryColors} />
      </div>

      <div className="adm-chart-card" style={{ marginBottom: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, marginBottom: 20, flexWrap: 'wrap' }}>
          <p className="adm-chart-title" style={{ marginBottom: 0 }}>
            By hour ({selectedDay}{selectedDay === todayParis ? ', today' : ''}, Paris time) — {dayVisitorCount.toLocaleString()} visitors
          </p>
          <DaySelect days={dayOptions} selected={selectedDay} today={todayParis} />
        </div>
        <AdminStackedCountryChart
          data={intradayData}
          countries={intradayCountries}
          labelMode="raw"
          interval={2}
          colorMap={countryColors}
        />
      </div>

      <div className="adm-charts-grid">
        <div className="adm-chart-card">
          <p className="adm-chart-title">All-time unique visitors by country</p>
          <p className="adm-page-sub" style={{ marginTop: -12, marginBottom: 16 }}>
            All dates · {allTimeVisitsTotal.toLocaleString()} visitors
          </p>
          <div className="adm-table-wrap">
            <table className="adm-table">
              <thead>
                <tr>
                  <th>Country</th>
                  <th>Visitors</th>
                  <th>Share</th>
                </tr>
              </thead>
              <tbody>
                {countryRows.map((row) => (
                  <tr key={row.country}>
                    <td>{row.country}</td>
                    <td>{row.count.toLocaleString()}</td>
                    <td className="muted">
                      {allTimeVisitsTotal > 0 ? formatPct((row.count / allTimeVisitsTotal) * 100) : '—'}
                    </td>
                  </tr>
                ))}
                {countryRows.length === 0 && (
                  <tr>
                    <td colSpan={3} className="muted">No data yet</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div className="adm-chart-card">
          <p className="adm-chart-title">Traffic Sources</p>
          <AdminPieChart data={sourceData} />
        </div>
      </div>
    </main>
  );
}
