import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head"
import Favicon from "@/images/favicon.png";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-full">
      <Head>
        <link
          rel="icon"
          href={Favicon.src}
          type="image/<generated>"
          sizes="<generated>"
        />
      </Head>
      <Header />
      <div className="relative z-20">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}
