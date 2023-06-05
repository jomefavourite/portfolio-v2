import { Inter } from "next/font/google";
import "./globals.css";
import type { ReactNode } from "react";
import Providers from "../utils/provider";

// const queryClient = new QueryClient();

const inter = Inter({
  weight: ["400", "700"],
  // style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en' className={inter.className}>
      <body className='h-full' suppressHydrationWarning={true}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
