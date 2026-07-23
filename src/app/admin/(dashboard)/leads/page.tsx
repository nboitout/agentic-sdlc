import { fetchBrochureLeads } from '@/lib/sheets';
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
  let leads, error;
  try {
    ({ leads, error } = await fetchBrochureLeads());
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

  const notConfigured = !process.env.GOOGLE_BROCHURE_SHEET_ID;
  const todayParis = parisDate(new Date());

  const totalLeads = leads.length;
  const uniquePeople = new Set(leads.map((l) => l.email.toLowerCase()).filter(Boolean)).size;
  const todayLeads = leads.filter((l) => parisDate(l.timestamp) === todayParis).length;
  const professionalLeads = leads.filter((l) => isProfessionalEmail(l.email)).length;

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

      {notConfigured && (
        <div className="adm-error-box">
          <p>GOOGLE_BROCHURE_SHEET_ID not set</p>
          <pre>Point it at the spreadsheet backing BROCHURE_SHEET_URL (see docs/google-sheets-brochure-webhook.md) and share it with the service account as Viewer.</pre>
        </div>
      )}

      {error && (
        <div className="adm-error-box">
          <p>Sheet loading error</p>
          <pre>{error}</pre>
        </div>
      )}

      <div className="adm-scorecards">
        <Scorecard label="Total Signups" value={totalLeads.toLocaleString()} />
        <Scorecard label="Unique People" value={uniquePeople.toLocaleString()} />
        <Scorecard label="Today" value={todayLeads.toLocaleString()} />
        <Scorecard label="Professional Emails" value={professionalLeads.toLocaleString()} subtitle="non-personal domain" />
      </div>

      <p className="adm-section-title">All signups</p>
      <div className="adm-leads-table-wrap">
        <table className="adm-table">
          <thead>
            <tr>
              <th>Time</th>
              <th>Name</th>
              <th>Email</th>
              <th>Source</th>
              <th>Consent</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((l, i) => (
              <tr key={`${l.email}-${l.timestamp}-${i}`}>
                <td>{fmtParis(l.timestamp)}</td>
                <td>{l.name || `${l.firstName} ${l.familyName}`.trim() || '—'}</td>
                <td>{l.email || '—'}</td>
                <td className="muted">{l.source || '—'}</td>
                <td className="muted">{l.consent === 'true' ? 'Yes' : 'No'}</td>
              </tr>
            ))}
            {sorted.length === 0 && (
              <tr>
                <td colSpan={5} className="muted">No signups yet</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}
