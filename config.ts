import {Pathnames} from 'next-intl/navigation';

export const port = process.env.PORT || 3000;
export const host = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${port}`;

export const defaultLocale = 'en' as const;
export const locales = ['en', 'ge'] as const;

export const pathnames = {
  '/': '/',
  '/pathnames': {
    en: '/pathnames',
    ge: '/pathnames'
  },
  '/about': {
    en: '/about',
    ge: '/about'
  },
  '/contact': {
    en: '/contact',
    ge: '/contact'
  },
  '/projects': {
    en: '/projects',
    ge: '/projects'
  },
  '/404': '/404'
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;