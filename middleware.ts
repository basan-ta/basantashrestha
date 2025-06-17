import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Check if the request is not HTTPS and not localhost
  if (!request.url.includes('localhost') && !request.url.startsWith('https')) {
    return NextResponse.redirect(
      `https://${request.nextUrl.host}${request.nextUrl.pathname}`,
      301
    )
  }
  return NextResponse.next()
}

export const config = {
  matcher: '/:path*',
}