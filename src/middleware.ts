import createMiddleware from 'next-intl/middleware'
import { localePrefix, defaultLocale, locales, pathnames, host } from './config'
import { NextRequest, NextResponse } from 'next/server'
import { auth } from './auth'

const publicPages = [
  '/',
  '/categories',
  '/categories(.*)',
  '/cart',
  '/login',
  '/forgot-password',
  '/reset-password(.*)',
]

const intlMiddleware = createMiddleware({
  defaultLocale,
  locales,
  localePrefix,
  pathnames,
})

const authMiddleware = auth((req) => {
  console.log('authMiddleware', req.auth)
  if (req.auth) return intlMiddleware(req)
  const reqUrl = new URL(req.url)
  if (!req.auth && reqUrl?.pathname !== '/') {
    return NextResponse.redirect(new URL(`${host}/login`, req.url))
  }
})

export default function middleware(req: NextRequest) {
  const publicRoutes = publicPages
    .flatMap((p) => (p === '/' ? ['', '/'] : p))
    .join('|')
  const publicPathnameRegex = RegExp(
    `^(/(${locales.join('|')}))?(${publicRoutes})/?$`,
    'i'
  )

  const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname)

  if (isPublicPage) {
    return intlMiddleware(req)
  } else {
    return (authMiddleware as any)(req)
  }
}

export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    '/(ar|en)/:path*',

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ],
}
