/**
 * app/api/brochure-sheet/route.ts
 *
 * Server-side proxy that forwards BrochureSignup payloads to the
 * Google Apps Script web app.
 *
 * Keeping the GAS URL server-side (no NEXT_PUBLIC_ prefix) means:
 *  • The URL is never exposed in the client bundle.
 *  • The request goes server → GAS, bypassing any browser CORS restrictions.
 *  • GAS redirect handling (script.google.com → googleusercontent.com) is
 *    handled by Node's fetch, not the browser.
 *
 * Required env var (set in Vercel dashboard and in .env.local):
 *   BROCHURE_SHEET_URL=https://script.google.com/macros/s/<DEPLOYMENT_ID>/exec
 */

import { NextRequest, NextResponse } from 'next/server';

const SHEET_URL = process.env.BROCHURE_SHEET_URL ?? '';

export async function POST(req: NextRequest) {
  /* ── Guard: sheet URL must be configured ─────────────────────── */
  if (!SHEET_URL) {
    console.warn('[brochure-sheet] BROCHURE_SHEET_URL is not set — skipping sheet write.');
    // Return 200 so the client never sees an error for a missing config.
    return NextResponse.json({ ok: true, skipped: true });
  }

  /* ── Parse incoming payload ──────────────────────────────────── */
  let payload: unknown;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON body' }, { status: 400 });
  }

  /* ── Forward to Google Apps Script ──────────────────────────── */
  try {
    const gasResponse = await fetch(SHEET_URL, {
      method:   'POST',
      redirect: 'follow',           // GAS always redirects; follow transparently
      headers:  { 'Content-Type': 'application/json' },
      body:     JSON.stringify(payload),
    });

    /* GAS returns plain text JSON — parse defensively */
    const text = await gasResponse.text();
    let gasData: unknown;
    try { gasData = JSON.parse(text); }
    catch { gasData = { raw: text };   }

    return NextResponse.json({ ok: true, gas: gasData });
  } catch (err) {
    console.error('[brochure-sheet] Error forwarding to GAS:', err);
    // Return 200 so a GAS outage never breaks the modal submit flow.
    return NextResponse.json({ ok: false, error: 'Sheet write failed — see server logs' });
  }
}
