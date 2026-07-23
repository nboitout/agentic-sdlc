# /admin dashboard + visitor analytics — setup

A password-gated `/admin` dashboard with a self-hosted visitor-analytics
pipeline, adapted from the same pattern used on the ROP site. Two independent
connections to Google:

- **Write path:** browser → `/api/visit` / `/api/track` → Google Apps Script
  web app → Google Sheet (`Visits` / `Events` tabs).
- **Read path:** `/admin` server pages → Sheets API v4, authenticated with a
  service-account JWT → same Google Sheet.

This requires a Node server runtime (API routes, cookies, `after()`), so the
site must be deployed somewhere that runs Next.js server-side — **Vercel**,
not GitHub Pages. `next.config.mjs`'s `output: 'export'` has been removed and
the GitHub Pages workflow deleted; connect the repo to a Vercel project to
deploy it going forward.

## 1. One-time Google setup

1. **Create a Google Sheet** for analytics — note its id from the URL
   (`/d/<ID>/edit`). Tabs (`Visits`, `Events`) are auto-created on first write.
2. **Apps Script** — in that sheet, Extensions → Apps Script, paste in
   `scripts/apps-script/Code.gs`. Deploy → New deployment → Web app:
   - Execute as: **Me**
   - Who has access: **Anyone**
   Copy the `/exec` URL into `APPS_SCRIPT_URL`. To change the script later
   without breaking the URL, edit the existing deployment → New version
   (a fresh "New deployment" mints a new URL).
3. **Service account** (read path) — in a Google Cloud project, enable the
   **Google Sheets API**, create a service account, download its JSON key.
   - `client_email` → `GOOGLE_SERVICE_ACCOUNT_EMAIL`
   - base64 the `private_key` → `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY_BASE64`
     (`node -e "console.log(Buffer.from(require('./key.json').private_key).toString('base64'))"`)
4. **Share the analytics Sheet** with the service account's `client_email` as
   **Viewer** — otherwise the read path 403s.
5. **Optional — Leads page:** `/admin/leads` reads the *existing* brochure
   signup spreadsheet (the one behind `BROCHURE_SHEET_URL`) read-only. Share
   that spreadsheet with the same service account as Viewer, and set
   `GOOGLE_BROCHURE_SHEET_ID` to its id/URL. Its tab must be named `Sheet1`
   with columns `timestamp | first_name | family_name | name | email | consent
   | source | page_url | user_agent` (already the case per
   `docs/google-sheets-brochure-webhook.md`).

## 2. Environment variables

See `.env.example`. Set `ADMIN_PASSWORD` to whatever password should gate
`/admin`. Set all vars on every Vercel environment you'll actually test
(Production *and* Preview), then redeploy — env var changes don't apply to a
build that's already running.

## 3. Verification checklist

- `npm run build` compiles.
- Browse a public page in incognito → a row appears in the `Visits` tab
  within a couple seconds; server logs show `[visit] forward result: 200
  {"ok":true,"tab":"Visits"}`.
- Visit `/admin` signed out → redirected to `/admin/login`. Wrong password →
  error shown. Correct password → dashboard renders.
- Health-check the Apps Script `/exec` URL directly in a browser →
  `{"ok":true,...}`.

## Gotchas

- **Private key newline mangling** in env vars → `asn1 … header too long`.
  Use the base64 env var; `lib/sheets.ts` also normalizes the raw-PEM
  fallback aggressively.
- **`GOOGLE_SHEETS_ID` as a full URL** works — the code extracts the id — but
  a bare id is cleaner.
- **Missing tab** (`Visits`/`Events` not created yet) returns 400 "Unable to
  parse range" from the Sheets API; `lib/sheets.ts` treats that as empty data,
  not an error.
- **Env var changes need a redeploy**, and Vercel env vars are scoped per
  environment (Production/Preview/Development) — set them where you're
  actually testing.
- The admin's own browsing is excluded from analytics automatically: signing
  into `/admin` stamps a long-lived `internal_traffic` cookie that
  `/api/visit` and `/api/track` check before forwarding anything. Test public
  pages in an incognito window to see real tracking.
