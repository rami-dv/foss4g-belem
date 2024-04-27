import { createContext } from "react";
import { useContext, Dispatch, SetStateAction } from "react";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { US, BR, ES } from "country-flag-icons/react/3x2";

export const languages = {
  en: {
    name: "English",
    code: "en",
    icon: <US className="w-6 mr-2" />,
  },
  es: {
    name: "Español",
    code: "es",
    icon: <ES className="w-6 mr-2" />,
  },
  pt: {
    name: "Português",
    code: "pt",
    icon: <BR className="w-6 mr-2" />,
  },
};

export const intlHrefs = {
  "/": {
    en: "/",
    es: "/",
    pt: "/",
  },
  "/about": {
    en: "/about",
    es: "/acerca-de",
    pt: "/sobre",
  },
  "/conference-committees": {
    en: "/conference-committees",
    es: "/comite-organizador-local",
    pt: "/comite-organizador-local",
  },
  "/faq-frequently-asked-questions": {
    en: "/faq-frequently-asked-questions",
    es: "/preguntas-frecuentes-faq",
    pt: "/perguntas-frequentes-faq",
  },
  "/branding": {
    en: "/branding",
    es: "/marca",
    pt: "/marca",
  },
  "/code-of-conduct": {
    en: "/code-of-conduct",
    es: "/codigo-de-conducta",
    pt: "/codigo-de-conduta",
  },
  "/privacy-policy": {
    en: "/privacy-policy",
    es: "/politica-de-privacidad",
    pt: "/politica-de-privacidade",
  },
  "/map": {
    en: "/map",
    es: "/mapa",
    pt: "/mapa",
  },
  "/registration": {
    en: "/registration",
    es: "/inscripcion",
    pt: "/inscricao",
  },
  "/visa-info": {
    en: "/visa-info",
    es: "/info-sobre-visa",
    pt: "/info-sobre-visto",
  },
  "/travel-grant-program": {
    en: "/travel-grant-program",
    es: "/programa-de-becas",
    pt: "/programa-de-bolsas",
  },
  "/schedule": {
    en: "/schedule",
    es: "/programa",
    pt: "/programa",
  },
  "/additional-events": {
    en: "/additional-events",
    es: "/eventos-adicionales",
    pt: "/eventos-adicionais",
  },
  "/social-events": {
    en: "/social-events",
    es: "/eventos-sociales",
    pt: "/eventos-sociais",
  },
  "/sponsors": {
    en: "/sponsors",
    es: "/patrocinadores",
    pt: "/patrocinadores",
  },
  "/attending": {
    en: "/attending",
    es: "/asistiendo",
    pt: "/participando",
  },
  "/venue": {
    en: "/venue",
    es: "/lugar",
    pt: "/lugar",
  },
  "/visiting-belem": {
    en: "/visiting-belem",
    es: "/visitando-belem",
    pt: "/visitando-belem",
  }
};

export const IntlLink = ({
  href,
  className = "",
  children,
  ...otherProps
}: {
  className?: string;
  href: string;
  children: React.ReactNode;
}) => {
  const { language } = useContext(LanguageContext);

  // @ts-ignore
  const intlHref =
    href in intlHrefs && language != "en"
      ? // @ts-ignore
        intlHrefs[href][language]
      : href;

  return (
    <Link
      href={`/${language}${intlHref}`}
      className={className}
      {...otherProps}
    >
      {children}
    </Link>
  );
};

export const LanguageSwitcher = ({ onClick = () => {} }: any) => {
  const { language, setLanguage } = useContext(LanguageContext);
  const router = useRouter();

  const [currentPageLang, currentPageSlug] = router.asPath
    .split("/")
    .filter((part) => part !== "");

  const currentPage = Object.values(intlHrefs).find(
    // @ts-ignore
    (href) => href[currentPageLang] == `/${currentPageSlug ?? ""}`
  );

  return (
    <Menu as="div" className="relative z-50">
      <Menu.Button className="inline-flex w-full justify-center items-center z-50 rounded-md bg-white/90 border-f4g_red/50 border px-2 py-1 font-medium text-f4g_red/80 hover:text-white hover:bg-f4g_orange">
        {
          // @ts-ignore
          languages[language].icon
        }
        {
          // @ts-ignore
          languages[language].name
        }
      </Menu.Button>
      <Menu.Items className="absolute z-50 right-0 w-32 origin-top-right divide-y divide-gray-100 ring-1 ring-black/5 focus:outline-none">
        <div className="mt-2 bg-white rounded-md shadow-lg">
          {Object.values(languages).map((lang) => (
            // @ts-ignore
            <Link
              key={lang["code"]}
              href={
                // @ts-ignore
                `/${lang["code"]}${currentPage?.[lang.code] ?? "en"}`
              }
              onClick={() => {
                onClick();
                // @ts-ignore
                setLanguage(lang["code"]);
              }}
            >
              <button className="group flex w-full items-center rounded-md px-2 py-2 text-sm text-f4g_red hover:text-white hover:bg-f4g_orange">
                {lang.icon} {lang["name"]}
              </button>
            </Link>
          ))}
        </div>
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
