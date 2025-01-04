import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'nl', 'it'],

  // Default locale if none matches
  defaultLocale: 'nl',
});

export const config = {
  // Match paths starting with a locale or the root path
  matcher: [
    '/((?!_next|_vercel|.*\\..*).*)', // Exclude Next.js internals and static files
  ],
};