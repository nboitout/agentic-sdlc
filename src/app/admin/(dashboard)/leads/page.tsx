import { fetchAllSheets } from '@/lib/sheets';
import Scorecard from '@/components/admin/Scorecard';
import { fmtParis, parisDate } from '@/lib/adminFormat';

export const dynamic = 'force-dynamic';

const FREE_EMAIL_DOMAINS = new Set([
  'gmail.com', 'googlemail.com', 'yahoo.com', 'yahoo.fr',
  'outlook.com', 'hotmail.com', 'live.com', 'msn.com',
  'icloud.com', 'me.com', 'aol.com', 'proton.me',
  'protonmail.com', 'gmx.com', 'mail.com', 'yandex.com', 'qq.com',
]);

function domainOf(email: string): string {
  return email.trim().toLowerCase().split('@')[1] ?? '';
}

function isProfessionalEmail(email: string): boolean {
  const domain = domainOf(email);
  return !!domain && !FREE_EMAIL_DOMAINS.has(domain);
}

export default async function AdminLeadsPage() {
  let leads, errors;
  try {
    ({ leads, errors } = await fetchAllSheets());
  } catch (err) {
    return (
      <main className="adm-page">
        <div className="adm-error-box">
          <p>Leads error</p>
          <pre>{String(err)}</pre>
        </div>
      </main>
    );
  }

  const errorEntries = Object.entries(errors ?? {}).filter(([sheet]) => sheet === 'Leads');
  const todayParis = parisDate(new Date());

  // "complete" leads finished the form; "partial" only entered an email
  // before closing the modal. Both are useful, but scorecards focus on
  // completed submissions — the real, actionable leads.
  const completed = leads.filter((l) => l.status === 'complete');
  const totalLeads = completed.length;
  const uniquePeople = new Set(completed.map((l) => l.email.toLowerCase()).filter(Boolean)).size;
  const todayLeads = completed.filter((l) => parisDate(l.timestamp) === todayParis).length;
  const professionalLeads = completed.filter((l) => isProfessionalEmail(l.email)).length;

  const sorted = [...leads].sort((a, b) => (a.timestamp < b.timestamp ? 1 : -1));

  return (
    <main className="adm-page">
      <div className="adm-page-header">
        <div>
          <p className="adm-page-eyebrow">Dashboard</p>
          <h1 className="adm-page-title">Leads</h1>
          <p className="adm-page-sub">Brochure signups · Updated {fmtParis(new Date(), { withSeconds: true })} (Paris)</p>
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
        <Scorecard label="Completed Signups" value={totalLeads.toLocaleString()} />
        <Scorecard label="Unique People" value={uniquePeople.toLocaleString()} />
        <Scorecard label="Today" value={todayLeads.toLocaleString()} />
        <Scorecard label="Professional Emails" value={professionalLeads.toLocaleString()} subtitle="non-personal domain" />
      </div>

      <p className="adm-section-title">All signups</p>
      <p className="adm-page-sub" style={{ marginTop: -8, marginBottom: 12 }}>
        Includes partial rows — a visitor typed their email but closed the form before submitting.
      </p>
      <div className="adm-leads-table-wrap">
        <table className="adm-table">
          <thead>
            <tr>
              <th>Time</th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Source</th>
              <th>Consent</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((l, i) => (
              <tr key={`${l.email}-${l.timestamp}-${i}`}>
                <td>{fmtParis(l.timestamp)}</td>
                <td>{`${l.firstName} ${l.familyName}`.trim() || '—'}</td>
                <td>{l.email || '—'}</td>
                <td className="muted">{l.status || '—'}</td>
                <td className="muted">{l.source || '—'}</td>
                <td className="muted">{l.consent === 'TRUE' ? 'Yes' : 'No'}</td>
              </tr>
            ))}
            {sorted.length === 0 && (
              <tr>
                <td colSpan={6} className="muted">No signups yet</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}
