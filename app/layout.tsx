import { Inter } from 'next/font/google';
import './globals.css';
import type { ReactNode } from 'react';
import Providers from '../utils/provider';
import Script from 'next/script';

// const queryClient = new QueryClient();

const inter = Inter({
  weight: ['400', '700'],
  // style: ["normal", "italic"],
  subsets: ['latin'],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en' className={inter.className}>
      <body className='h-full' suppressHydrationWarning={true}>
        <Providers>{children}</Providers>
      </body>

      <Script src='https://www.googletagmanager.com/gtag/js?id=G-55PVDQTVMW' />
      <Script>
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
