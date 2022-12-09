import type { AppProps } from "next/app";
import { Inter } from "@next/font/google";
import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";

const queryClient = new QueryClient();

// const mulish = Mulish({
//   weight: ["400", "700"],
//   // style: ["normal", "italic"],
//   // subsets: ["latin"],
// });
const inter = Inter({
  weight: ["400", "700"],
  // style: ["normal", "italic"],
  // subsets: ["latin"],
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }

        body > div {
          min-height: 100vh;
        }
      `}</style>

      <QueryClientProvider client={queryClient}>
        {getLayout(<Component {...pageProps} />)}
      </QueryClientProvider>
    </>
  );
}
