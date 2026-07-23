import { NextRequest, NextResponse } from 'next/server';
import { ADMIN_SESSION_COOKIE, markInternalTraffic } from '@/lib/internalTraffic';

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname === '/admin/login') return NextResponse.next();

  if (pathname.startsWith('/admin')) {
    const session = req.cookies.get(ADMIN_SESSION_COOKIE);
    if (!session || session.value !== 'authenticated') {
      const url = new URL('/admin/login', req.url);
      url.searchParams.set('callbackUrl', pathname);
      return NextResponse.redirect(url);
    }
    // Mark the admin's own browser so their later public browsing is
    // excluded from the visitor-analytics sheet.
    const res = NextResponse.next();
    markInternalTraffic(res);
    return res;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
