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
      <body className='h-full layout-pattern' suppressHydrationWarning={true}>
        <Providers>{children}</Providers>
      </body>

      {/* <Script
        src='http://localhost:3000/scripts/aichatbotso-widget.js'
        type='text/javascript'
        data-name='aichatbotso'
        data-address='http://localhost:3000'
        data-id='48d56459-aba3-4581-b465-dfe0cf6a7c71'
      ></Script> */}

      {/* <Script id='bot'>
        {`window.embeddedChatbotConfig = {
chatbotId: "hRc6PoKxXKZyAEjS8aW0V",
domain: "www.chatbase.co"
}`}
      </Script>
      <Script
        src='https://www.chatbase.co/embed.min.js'
        chatbotId='hRc6PoKxXKZyAEjS8aW0V'
        domain='www.chatbase.co'
        defer
      ></Script> */}

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
