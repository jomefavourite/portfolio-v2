import { Inter } from "next/font/google";
import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";
// import type { NextPage } from "next";

const queryClient = new QueryClient();

const inter = Inter({
  weight: ["400", "700"],
  // style: ["normal", "italic"],
  // subsets: ["latin"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }

        html,
        body {
          height: 100%;
        }

        // body > div {
        //   min-height: 200%;
        // }
      `}</style>
      <body>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
