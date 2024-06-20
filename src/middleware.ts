import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'ar'],

  // Used when no locale matches
  defaultLocale: 'en',
})

// export const config = {
//   // Match only internationalized pathnames
//   matcher: ['/', '/(ar|en)/:path*'],
// }
export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    '/(ar|en)/:path*',

    '/((?!api|_next|_vercel|.*\\..*).*)',
  ],
}
