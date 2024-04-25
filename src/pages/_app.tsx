import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Favicon from "@/images/favicon.png";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { LanguageContext } from "@/lib/language";

export default function App({ Component, pageProps }: AppProps) {
  const [language, setLanguage] = useState<"en" | "es" | "pt">("en");
  const router = useRouter();

  useEffect(() => {
    if (router.asPath == "/") {
      const lang = navigator.language.split("-")[0].toLowerCase();

      if (["es", "pt"].includes(lang)) {
        router.push(`/${lang}`);
        // @ts-ignore
        setLanguage(lang);
      } else {
        router.push(`/en`);

        setLanguage("en");
      }
    } else {
      const [lang, pageSlug] = router.asPath
        .split("/")
        .filter((part) => part != "");

      if (["en", "es", "pt"].includes(lang)) {
        // @ts-ignore
        setLanguage(lang);
      }
    }
  }, []);

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
