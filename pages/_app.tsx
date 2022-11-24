import type { AppProps } from "next/app";
import { Inter } from "@next/font/google";
import "../styles/globals.css";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  weight: ["400", "700"],
  // style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
