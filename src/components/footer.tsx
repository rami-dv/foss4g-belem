import Image from "next/image";
import Link from "next/link";
import FOSS4GLogoWhite from "@/images/foss4g-belem-logo-vertical-white.svg";

import { SocialIcon } from "react-social-icons";

export default function Header() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-f4g_red px-4 py-4 max-w-6xl mx-auto border-f4g_red border-l border-b border-r rounded-t-xl">
      <div className="flex space-x-2">
        <SocialIcon
          url="https://instagram.com/foss4g"
          style={{ width: 36, height: 36 }}
          bgColor="#ffffff"
          fgColor="transparent"
        />
        <SocialIcon
          url="https://facebook.com/foss4g2024"
          style={{ width: 36, height: 36 }}
          bgColor="#ffffff"
          fgColor="transparent"
        />
        <SocialIcon
          url="https://twitter.com/foss4g"
          style={{ width: 36, height: 36 }}
          bgColor="#ffffff"
          fgColor="transparent"
        />
        <SocialIcon
          url="https://mastodon.org/@foss4g"
          href="https://fosstodon.org/@foss4g"
          style={{ width: 36, height: 36 }}
          bgColor="#ffffff"
          fgColor="transparent"
        />
        <SocialIcon
          url="https://linkedin.com/company/foss4g2024"
          style={{ width: 36, height: 36 }}
          bgColor="#ffffff"
          fgColor="transparent"
        />
      </div>
      <div className="flex  flex-shrink-0 text-white">
        <Image className="w-40" alt="FOSS4G Logo" src={FOSS4GLogoWhite} />
      </div>
    </nav>
  );
}
