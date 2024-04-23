import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Favicon from "@/images/favicon.png";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useState } from "react";
import { LanguageContext } from "@/lib/language";

export default function App({ Component, pageProps }: AppProps) {
  const [language, setLanguage] = useState("en");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <div className="min-h-full">
        <Head>
          <link rel="icon" href={Favicon.src} />
        </Head>
        <Header />
        <div className="relative z-20">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </LanguageContext.Provider>
  );
}
