import { NextRequest, NextResponse } from 'next/server';
import { isProductionEnv } from './functions/isProductionEnv';

export const config = {
  matcher: '/',
};

export function middleware(req: NextRequest) {
  if (isProductionEnv()) return;

  const basicAuth = req.headers.get('authorization');
  const url = req.nextUrl;

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1];
    const [user, pwd] = atob(authValue).split(':');

    if (
      user === process.env.BASIC_AUTH_USER &&
      pwd === process.env.BASIC_AUTH_PASSWORD
    ) {
      return NextResponse.next();
    }
  }
  url.pathname = '/api/auth';

  return NextResponse.rewrite(url);
}
