import Image from "next/image";
import Link from "next/link";
import { Fragment, useState, useContext } from "react";
import { useRouter } from "next/router";
import { Menu, Transition } from "@headlessui/react";
import FOSS4GLogo from "@/images/logo/foss4g-belem-logo-vertical.svg";
import PatternBg2 from "@/images/pattern-background2.png";
import PageBackground from "@/images/page-background.jpg";
import { IntlLink, LanguageContext, LanguageSwitcher } from "@/lib/language";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import {
  IoChevronForwardCircleSharp,
  IoChevronForwardCircleOutline,
} from "react-icons/io5";

const menuItems = [
  // {
  //   "label:en": "Home",
  //   "label:es": "Home",
  //   "label:pt": "Home",
  //   href: "/",
  // },
  {
    "label:en": "About",
    "label:es": "Acerca de",
    "label:pt": "Sobre",
    links: [
      {
        "label:en": "About FOSS4G",
        "label:es": "Acerca de FOSS4G",
        "label:pt": "Sobre FOSS4G",
        href: "/about",
      },
      {
        "label:en": "Conference Committees",
        "label:es": "Comité Organizador Local",
        "label:pt": "Comitê Organizador Local",
        href: "/conference-committees",
      },
      {
        "label:en": "Frequently Asked Questions (FAQ)",
        "label:es": "Preguntas Frecuentes (FAQ)",
        "label:pt": "Perguntas Frequentes (FAQ)",
        href: "/faq-frequently-asked-questions",
      },
      {
        "label:en": "Branding",
        "label:es": "Marca",
        "label:pt": "Marca",
        href: "/branding",
      },
      {
        "label:en": "Code of Conduct",
        "label:es": "Código de Conducta",
        "label:pt": "Código de Conduta",
        href: "/code-of-conduct",
      },
      {
        "label:en": "Privacy Policy",
        "label:es": "Política de Privacidad",
        "label:pt": "Política de Privacidade",
        href: "/privacy-policy",
      },
    ],
  },
  {
    "label:en": "Map",
    "label:es": "Mapa",
    "label:pt": "Mapa",
    href: "/map",
  },
  {
    "label:en": "Registration",
    "label:es": "Inscripción",
    "label:pt": "Inscrição",
    links: [
      {
        "label:en": "Visa Info",
        "label:es": "Info Sobre Visa",
        "label:pt": "Info Sobre Visto",
        href: "/visa-info",
      },
      {
        "label:en": "Travel Grant Program",
        "label:es": "Programa de Becas",
        "label:pt": "Programa de Bolsas",
        href: "/travel-grant-program",
      },
    ],
  },
  {
    "label:en": "Schedule",
    "label:es": "Programa",
    "label:pt": "Programa",
    links: [
      {
        "label:en": "Conference Schedule",
        "label:es": "Programa",
        "label:pt": "Programa",
        href: "/schedule",
      },
      {
        "label:en": "Business to Business (B2B)",
        "label:es": "Empresa a Empresa (B2B)",
        "label:pt": "Empresa a Empresa (B2B)",
        href: "/b2b-dynamics",
      },
      {
        "label:en": "GeoChicas & Meninas da Geo",
        "label:es": "GeoChicas & Meninas da Geo",
        "label:pt": "GeoChicas & Meninas da Geo",
        href: "/geochicas-meninas-da-geo",
      },
      {
        "label:en": "Community Code Sprint",
        "label:es": "Community Code Sprint",
        "label:pt": "Community Code Sprint",
        href: "/community-code-sprint",
      },
      {
        "label:en": "Social Events",
        "label:es": "Eventos Sociales",
        "label:pt": "Eventos Sociais",
        href: "/social-events",
      },
    ],
  },
  {
    "label:en": "Sponsors",
    "label:es": "Patrocinadores",
    "label:pt": "Patrocinadores",
    href: "/sponsors",
  },
  {
    "label:en": "Attending",
    "label:es": "Asistiendo",
    "label:pt": "Participando",
    links: [
      {
        "label:en": "Venue",
        "label:es": "Lugar",
        "label:pt": "Lugar",
        href: "/venue",
      },
      {
        "label:en": "Getting to Belém",
        "label:es": "Llegando a Belém",
        "label:pt": "Chegando a Belém",
        href: "/getting-to-belem",
      },
      {
        "label:en": "Accommodation",
        "label:es": "Accommodación",
        "label:pt": "Acomodações",
        href: "/accommodation",
      },
      {
        "label:en": "Guided Tours",
        "label:es": "Visitas Guiadas",
        "label:pt": "Visitas Guiadas",
        href: "/guided-tours",
      },
      {
        "label:en": "What to do in Belém",
        "label:es": "¿Qué hacer en Belém?",
        "label:pt": "O que fazer em Belém?",
        href: "/what-to-do-in-belem",
      },
    ],
  },
];

export default function Header() {
  const [isDropdown, setIsDropdown] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { language } = useContext(LanguageContext);

  const labelLang: "label:en" | "label:es" | "label:pt" = `label:${language}`;

  return (
    <>
      <div
        className={`min-h-20 sm:min-h-44 items-start justify-center bg-cover bg-no-repeat -z-50 sm:[clip-path:polygon(0_0,100%_0,100%_100%,0_37%)] hidden sm:flex sm:-mb-24`}
        style={{
          backgroundImage: `url(${PageBackground.src})`,
        }}
      ></div>
      <header className="z-30 sm:fixed top-0 left-0 w-full flex items-center justify-center flex-col">
        <nav className="sm:static relative top-0 left-0 flex w-full mx-auto max-w-6xl flex-col">
          <div
            className="w-full flex shadow-lg items-center justify-between flex-wrap bg-white py-1 px-2 sm:py-3 sm:px-3   border-f4g_red border-l border-b border-r sm:rounded-bl-xl sm:rounded-br-xl z-30"
            style={{
              background: `linear-gradient(to right, rgba(255,255,255, 1), rgba(255,255,255, 0.6)), url(${PatternBg2.src})`,
            }}
          >
            <div className="flex items-center flex-shrink-0 text-white mr-6">
              <div className="">
                <Link href={`/${language}/`}>
                  <Image className="w-40" alt="FOSS4G Logo" src={FOSS4GLogo} />
                </Link>
              </div>
              <div className="space-x-2 ml-6 hidden md:flex">
                {menuItems.map((menuItem) => (
                  <Menu
                    key={menuItem[labelLang]}
                    onMouseEnter={() => setIsDropdown(menuItem[labelLang])}
                    onMouseLeave={() => setIsDropdown(null)}
                    as="div"
                    className="sm:z-40 relative inline-block text-left"
                  >
                    <Menu.Button className="inline-flex w-full justify-center rounded-md bg-white/90 border-f4g_red/50 border px-2 py-1 font-medium text-f4g_red/80 hover:text-white hover:bg-f4g_orange">
                      {menuItem.href ? (
                        <IntlLink href={menuItem.href}>
                          {menuItem[labelLang]}
                        </IntlLink>
                      ) : (
                        menuItem[labelLang]
                      )}
                    </Menu.Button>

                    <Transition
                      show={isDropdown === menuItem[labelLang]}
                      onMouseEnter={() => setIsDropdown(menuItem[labelLang])}
                      onMouseLeave={() => setIsDropdown(null)}
                      enter="transition duration-800 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-800 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      {menuItem.links && (
                        <Menu.Items className="absolute z-30 left-0 w-60 origin-top-right divide-y divide-gray-100  ring-1 ring-black/5 focus:outline-none">
                          <div className="mt-2 bg-white rounded-md  shadow-lg">
                            {menuItem.links?.map((link) => (
                              <Menu.Item
                                key={link[labelLang] ?? link["label:en"]}
                              >
                                <IntlLink
                                  href={link.href}
                                  // @ts-ignore
                                  onClick={
                                    // @ts-ignore
                                    () => setIsDropdown(null)
                                  }
                                >
                                  <button className="group flex w-full items-center rounded-md px-2 py-2 text-sm text-f4g_red hover:text-white hover:bg-f4g_orange">
                                    {link[labelLang] ?? link["label:en"]}
                                  </button>
                                </IntlLink>
                              </Menu.Item>
                            ))}
                          </div>
                        </Menu.Items>
                      )}
                    </Transition>
                  </Menu>
                ))}
              </div>
            </div>

            <div className="lg:flex items-center justify-center hidden">
              <LanguageSwitcher />
              {/* <IntlLink
                className="px-4 py-2 leading-none bg-f4g_orange hover:ring-1 ring-f4g_red hover:m-0 border rounded text-white border-f4g_red"
                href="/call-for-papers"
              >
                Call For Papers
              </IntlLink> */}
            </div>

            <div className="flex sm:hidden items-center justify-center">
              <Transition
                show={isMenuOpen}
                enter="transition duration-800 ease-out"
                enterFrom="transform scale-100 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-800 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-100 opacity-0"
              >
                <div className="mr-3"></div>
              </Transition>
              <div
                className="button border flex items-center justify-center border-f4g_red bg-f4g_red/90 h-10 w-10 p-1 rounded-md"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <IoMdClose color="white" className="h-full w-full" />
                ) : (
                  <IoMdMenu color="white" className="h-full w-full" />
                )}
              </div>
            </div>
          </div>

          <Transition
            show={isMenuOpen}
            enter="transform transition ease-in-out duration-500 sm:duration-700"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transform transition ease-in-out duration-500 sm:duration-700"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            className="absolute z-30 top-full items-start justify-start w-full [max-height:calc(100vh_-_5rem)]"
          >
            <div className="bg-white relative font-ubuntu sm:hidden w-full rounded-b-lg shadow-md">
              <div className="absolute origin-top-right right-[4px] top-[2px]">
                <LanguageSwitcher onClick={() => setIsMenuOpen(false)} />
              </div>
              {menuItems.map((menuItem) => (
                <>
                  <div
                    key={menuItem.href}
                    className="flex flex-col border-b border-white/50 bg-f4g_red"
                  >
                    <IntlLink
                      className="non-standard"
                      // @ts-ignore
                      href={menuItem.href}
                      onClick={
                        // @ts-ignore
                        () => setIsMenuOpen(false)
                      }
                    >
                      <div
                        key={menuItem[labelLang]}
                        className="px-4 py-2 bg-f4g_red text-white flex items-center"
                      >
                        <IoChevronForwardCircleSharp className="inline-block mr-2" />

                        {menuItem[labelLang]}
                      </div>
                    </IntlLink>
                  </div>

                  {menuItem.links && (
                    <div className="flex flex-col bg-f4g_orange ">
                      {menuItem.links.map((link) => (
                        <IntlLink
                          className="non-standard"
                          key={link.href}
                          href={link.href}
                          // @ts-ignore
                          onClick={
                            // @ts-ignore
                            () => setIsMenuOpen(false)
                          }
                        >
                          <div className="flex items-center pl-8  border-b border-white/50 text-white py-2 bg-f4g_orange">
                            <IoChevronForwardCircleOutline className="inline-block mr-2" />
                            {link[labelLang]}
                          </div>
                        </IntlLink>
                      ))}
                    </div>
                  )}
                </>
              ))}
            </div>
          </Transition>
        </nav>
      </header>
    </>
  );
}
