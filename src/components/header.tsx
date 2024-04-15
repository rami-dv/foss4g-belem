import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import { useRouter } from "next/router";
import { Menu, Transition } from "@headlessui/react";
import FOSS4GLogo from "@/images/logo/foss4g-belem-logo-vertical.svg";
import PatternBg2 from "@/images/pattern-background2.png";
import PageBackground from "@/images/page-background.jpg";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import {
  IoChevronForwardCircleSharp,
  IoChevronForwardCircleOutline,
} from "react-icons/io5";

const menuItems = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    links: [
      { label: "Conference Committees", href: "/committees" },
      { label: "Frequently Asked Questions (FAQ)", href: "/faq" },
      { label: "Branding", href: "/branding" },
      { label: "Code of Conduct", href: "/code-of-conduct" },
      { label: "Privacy Policy", href: "/privacy-policy" },
    ],
  },
  {
    label: "Map",
    href: "/map",
  },
  {
    label: "Registration",
    href: "/registration",
    links: [
      { label: "Visa Info", href: "/visa-info" },
      { label: "Travel Grant Program", href: "/travel-grant-program" },
    ],
  },
  {
    label: "Schedule",
    href: "/schedule",
    links: [
      { label: "B2B Dynamics", href: "/b2b-dynamics" },
      {
        label: "GeoChicas & Meninas da Geo",
        href: "/geochicas-meninas-da-geo",
      },
      { label: "Community Sprint", href: "/community-sprint" },
      { label: "Social Events", href: "/social-events" },
    ],
  },
  { label: "Sponsors", href: "/sponsors" },
  {
    label: "Attending",
    href: "/attending",
    links: [
      { label: "Venue", href: "/venue" },
      { label: "Getting to Belém", href: "/getting-to-belem" },
      { label: "Accommodation", href: "/accommodation" },
      { label: "Guided Tours", href: "/guided-tours" },
      { label: "What to do in Belém", href: "/what-to-do-in-belem" },
    ],
  },
];

export default function Header() {
  const [isDropdown, setIsDropdown] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const outerStyle = useRouter().asPath == "/map" ? "hidden" : "";

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
            className="w-full flex shadow-lg items-center justify-between flex-wrap bg-white py-1 px-2 sm:py-3 sm:px-3   border-f4g_red border-l border-b border-r rounded-bl-xl rounded-br-xl z-30"
            style={{
              background: `linear-gradient(to right, rgba(255,255,255, 1), rgba(255,255,255, 0.6)), url(${PatternBg2.src})`,
            }}
          >
            <div className="flex items-center flex-shrink-0 text-white mr-6">
              <div className="">
                <Image className="w-40" alt="FOSS4G Logo" src={FOSS4GLogo} />
              </div>
              <div className="space-x-2 ml-6 hidden md:flex">
                {menuItems.map((menuItem) => (
                  <Menu
                    key={menuItem.label}
                    onMouseEnter={() => setIsDropdown(menuItem.label)}
                    onMouseLeave={() => setIsDropdown(null)}
                    as="div"
                    className="z-40 relative inline-block text-left"
                  >
                    <Menu.Button className="inline-flex w-full justify-center rounded-md bg-white/90 border-f4g_red/50 border px-2 py-1 font-medium text-f4g_red/80 hover:text-white hover:bg-f4g_orange">
                      <Link
                        href={menuItem.href}
                        onClick={() => console.log("lol")}
                      >
                        {menuItem.label}
                      </Link>
                    </Menu.Button>

                    <Transition
                      show={isDropdown === menuItem.label}
                      onMouseEnter={() => setIsDropdown(menuItem.label)}
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
                              <Menu.Item key={link.label}>
                                <Link
                                  href={link.href}
                                  onClick={() => setIsDropdown(null)}
                                >
                                  <button className="group flex w-full items-center rounded-md px-2 py-2 text-sm text-f4g_red hover:text-white hover:bg-f4g_orange">
                                    {link.label}
                                  </button>
                                </Link>
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
              <Link
                className="px-4 py-2 leading-none bg-f4g_orange hover:ring-1 ring-f4g_red hover:m-0 border rounded text-white border-f4g_red"
                href="/call-for-papers"
              >
                Call For Papers
              </Link>
            </div>

            <div className="flex sm:hidden items-center justify-center">
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
            className="absolute z-40 top-full items-start justify-start w-full [max-height:calc(100vh_-_5rem)]"
          >
            <div className="bg-white border sm:hidden w-full rounded-b-lg shadow-md">
              {menuItems.map((menuItem) => (
                <div key={menuItem.href} className="flex flex-col divide-y">
                  <Link
                    href={menuItem.href}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div
                      key={menuItem.label}
                      className="px-4 py-2 bg-f4g_red text-white flex items-center"
                    >
                      <IoChevronForwardCircleSharp className="inline-block mr-2" />

                      {menuItem.label}
                    </div>
                  </Link>
                  <div className="flex flex-col divide-y">
                    {menuItem.links &&
                      menuItem.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <div className="flex items-center pl-8 text-white py-2 bg-f4g_orange">
                            <IoChevronForwardCircleOutline className="inline-block mr-2" />
                            {link.label}
                          </div>
                        </Link>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </Transition>
        </nav>
      </header>
    </>
  );
}
