import { createContext } from "react";
import { useContext, Dispatch, SetStateAction } from "react";
import { Menu, Transition } from "@headlessui/react";

export const languages = {
  en: {
    name: "English",
    code: "en",
  },
  es: {
    name: "Español",
    code: "es",
  },
  pt: {
    name: "Português",
    code: "pt",
  },
};

export const LanguageSwitcher = (props: any) => {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="inline-flex justify-center items-center">
        {languages[language].code}
      </Menu.Button>
      <Menu.Items className="absolute z-30 bg-white/90 right-0 w-60 origin-right divide-y">
        {Object.values(languages).map((lang) => (
          // @ts-ignore
          <div key={lang["code"]} onClick={() => setLanguage(lang["code"])}>
            {lang["name"]}
          </div>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export const LanguageContext = createContext<{
  language: "en" | "es" | "pt";
  setLanguage: Dispatch<SetStateAction<"en" | "es" | "pt">>;
}>({
  language: "en",
  setLanguage: () => {},
});
