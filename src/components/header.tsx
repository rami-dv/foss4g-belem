import Image from "next/image";
import Link from "next/link";
import FOSS4GLogo from "@/images/foss4g-belem-logo-vertical.svg";

export default function Header() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-white py-4 px-4 max-w-6xl mx-auto border-f4g_red border-l border-b border-r rounded-bl-xl rounded-br-xl">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Image className="w-40" alt="FOSS4G Logo" src={FOSS4GLogo} />
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link
            className="block mt-4 lg:inline-block lg:mt-0 text-black hover:underline mr-4"
            href="/"
          >
            Home
          </Link>
          <Link
            className="block mt-4 lg:inline-block lg:mt-0 text-black hover:underline mr-4"
            href="/about"
          >
            About
          </Link>
          <Link
            className="block mt-4 lg:inline-block lg:mt-0 text-black hover:underline mr-4"
            href="/registration"
          >
            Registration
          </Link>
          <Link
            className="block mt-4 lg:inline-block lg:mt-0 text-black hover:underline mr-4"
            href="/schedule"
          >
            Schedule
          </Link>
          <Link
            className="block mt-4 lg:inline-block lg:mt-0 text-black hover:underline mr-4"
            href="/sponsors"
          >
            Sponsors
          </Link>
          <Link
            className="block mt-4 lg:inline-block lg:mt-0 text-black hover:underline mr-4"
            href="/attending"
          >
            Attending
          </Link>
        </div>
        <div>
          <Link
            className="inline-block text-sm px-4 py-2 leading-none bg-f4g_orange border rounded text-white border-white  mt-4 lg:mt-0"
            href="/call-for-papers"
          >
            Call For Papers
          </Link>
        </div>
      </div>
    </nav>
  );
}
