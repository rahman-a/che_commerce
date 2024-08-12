import createMiddleware from 'next-intl/middleware'
import { localePrefix, defaultLocale, locales, pathnames, host } from './config'
import { NextRequest, NextResponse } from 'next/server'
import { withAuth } from 'next-auth/middleware'
const publicPages = [
  '/',
  '/categories',
  '/categories(.*)',
  '/products(.*)',
  '/offers(.*)',
  '/checkout(.*)',
  '/register',
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

const authMiddleware = withAuth(
  // Note that this callback is only invoked if
  // the `authorized` callback has returned `true`
  // and not for pages listed in `pages`.
  function onSuccess(req) {
    return intlMiddleware(req)
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        console.log('authorized', { token })
        // If no token is found, the user is not signed in
        if (!token) {
          return false
        }
        return true
      },
    },
    secret: process.env.AUTH_SECRET,
  }
)
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
