import { intlHrefs, languages, LanguageContext } from "@/lib/language";
import { useRouter } from "next/router";
import Link from "next/link";
import { useContext } from "react";
import { Menu } from "@headlessui/react";

export default function LanguageSwitcher({ onClick = () => {} }: any) {
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
}
