import { NextRequest, NextResponse, after } from 'next/server';
import { randomUUID } from 'crypto';
import { hasInternalTrafficMarker, markInternalTraffic } from '@/lib/internalTraffic';

export const maxDuration = 30;

async function forwardToAppsScript(payload: Record<string, unknown>) {
  const url = process.env.APPS_SCRIPT_URL;
  if (!url) {
    console.warn('[lead] APPS_SCRIPT_URL is not set — skipping forward');
    return;
  }
  try {
    const r = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      redirect: 'follow',
    });
    const text = await r.text().catch(() => '');
    console.log('[lead] forward result:', r.status, text.slice(0, 200));
  } catch (err) {
    console.error('[lead] apps script forward failed:', err);
  }
}

export async function POST(req: NextRequest) {
  if (hasInternalTrafficMarker(req)) {
    const response = NextResponse.json({ ok: true, skipped: 'internal' });
    markInternalTraffic(response);
    return response;
  }

  const body = await req.json().catch(() => null);
  if (!body || typeof body.email !== 'string' || typeof body.status !== 'string') {
    return NextResponse.json({ error: 'Bad payload' }, { status: 400 });
  }

  const existing = req.cookies.get('reader_id')?.value;
  const readerId = existing && /^[0-9a-f-]{36}$/i.test(existing) ? existing : randomUUID();

  after(() => forwardToAppsScript({
    type: 'lead',
    timestamp: new Date().toISOString(),
    readerId,
    sessionId: typeof body.sessionId === 'string' ? body.sessionId : '',
    status: body.status,
    firstName: typeof body.firstName === 'string' ? body.firstName : '',
    familyName: typeof body.familyName === 'string' ? body.familyName : '',
    email: body.email.trim().toLowerCase(),
    consent: !!body.consent,
    source: typeof body.source === 'string' ? body.source : '',
    country: req.headers.get('x-vercel-ip-country') ?? '',
    pageUrl: typeof body.pageUrl === 'string' ? body.pageUrl : '',
    userAgent: req.headers.get('user-agent') ?? '',
    referer: req.headers.get('referer') ?? '',
  }));

  const res = NextResponse.json({ ok: true });

  if (!existing) {
    res.cookies.set('reader_id', readerId, {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
    });
  }

  return res;
}

