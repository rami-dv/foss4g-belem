import Head from "next/head";
import { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { LanguageContext } from "@/lib/language";

export default function IndexPage() {
  const router = useRouter();
  const {language, setLanguage} = useContext(LanguageContext);

  useEffect(() => {
    const lang = navigator.language.split("-")[0].toLowerCase();

    if (["es", "pt"].includes(lang)) {
      router.push(`/${lang}`);
      // @ts-ignore
      setLanguage(lang)
    } else {
      router.push(`/en`);

      setLanguage("en")
    }
  }, []);

  return <></>;
}
