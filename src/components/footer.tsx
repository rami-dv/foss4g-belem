import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import FOSS4GLogoWhite from "@/images/logo/foss4g-belem-logo-vertical-white.svg";

import { SocialIcon } from "react-social-icons";

export default function Footer() {
  const socialIconHeight = 30;
  const outerStyle = useRouter().asPath == "/map" ? "hidden" : "";

  return (
    <footer
      className={`${outerStyle} relative z-10 flex shadow-lg items-center justify-between flex-wrap bg-f4g_red px-2 py-1 sm:px-3 sm:py-3 max-w-6xl mx-auto border-white border-t border-l border-r rounded-t-xl`}
    >
      <div className="space-x-1 sm:space-x-2 scale-100 sm:scale-[130%] origin-left">
        <SocialIcon
          url="https://instagram.com/foss4g"
          style={{ width: socialIconHeight, height: socialIconHeight }}
          bgColor="#ffffff"
          fgColor="transparent"
        />
        <SocialIcon
          url="https://facebook.com/foss4g2024"
          style={{ width: socialIconHeight, height: socialIconHeight }}
          bgColor="#ffffff"
          fgColor="transparent"
        />
        <SocialIcon
          url="https://twitter.com/foss4g"
          style={{ width: socialIconHeight, height: socialIconHeight }}
          bgColor="#ffffff"
          fgColor="transparent"
        />
        <SocialIcon
          url="https://mastodon.org/@foss4g"
          href="https://fosstodon.org/@foss4g"
          style={{ width: socialIconHeight, height: socialIconHeight }}
          bgColor="#ffffff"
          fgColor="transparent"
        />
        <SocialIcon
          url="https://linkedin.com/company/foss4g2024"
          style={{ width: socialIconHeight, height: socialIconHeight }}
          bgColor="#ffffff"
          fgColor="transparent"
        />
      </div>

      <div className="flex flex-shrink-0 text-white">
        <Image className="w-40" alt="FOSS4G Logo" src={FOSS4GLogoWhite} />
      </div>
    </footer>
  );
}
