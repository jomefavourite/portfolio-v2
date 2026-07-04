import { Inter } from 'next/font/google';
import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Providers from '../utils/provider';
import Script from 'next/script';

// const queryClient = new QueryClient();

const inter = Inter({
  weight: ['400', '700'],
  // style: ["normal", "italic"],
  subsets: ['latin'],
});

const SITE_URL = 'https://favouritejome.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Favourite Jome — Software Engineer',
    template: '%s | Favourite Jome',
  },
  description:
    'Favourite Jome is a Software Engineer building reliable, performant software — from polished frontends to scalable systems. Explore projects, writing, and The Learn With Me Series.',
  keywords: [
    'Favourite Jome',
    'Favourite Jome Software Engineer',
    'Favourite Jome portfolio',
    'Favourite Jome developer',
  ],
  authors: [{ name: 'Favourite Jome', url: SITE_URL }],
  creator: 'Favourite Jome',
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'profile',
    url: SITE_URL,
    siteName: 'Favourite Jome',
    title: 'Favourite Jome — Software Engineer',
    description:
      'Favourite Jome is a Software Engineer building reliable, performant software — from polished frontends to scalable systems.',
    images: [{ url: '/me.png', width: 853, height: 1280, alt: 'Favourite Jome' }],
  },
  twitter: {
    card: 'summary',
    title: 'Favourite Jome — Software Engineer',
    description:
      'Favourite Jome is a Software Engineer building reliable, performant software.',
    creator: '@favouritejome1',
    images: ['/me.png'],
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Favourite Jome',
  url: SITE_URL,
  image: `${SITE_URL}/me.png`,
  jobTitle: 'Software Engineer',
  description:
    'Software Engineer building reliable, performant software — from polished frontends to scalable systems.',
  worksFor: {
    '@type': 'Organization',
    name: 'Bug0',
    url: 'https://bug0.com/',
  },
  sameAs: [
    'https://github.com/jomefavourite',
    'https://www.linkedin.com/in/favourite-jome/',
    'https://twitter.com/favouritejome1',
    'https://www.youtube.com/@favouritejome',
    'https://www.instagram.com/favouritejome/',
    'https://blog.favouritejome.dev',
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en' className={inter.className}>
      <body className='h-full' suppressHydrationWarning={true}>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Providers>{children}</Providers>
      </body>

      <Script src='https://www.googletagmanager.com/gtag/js?id=G-55PVDQTVMW' />
      <Script id='google'>
        {`
          <!-- Google tag (gtag.js) -->
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-55PVDQTVMW');
          `}
      </Script>
    </html>
  );
}
