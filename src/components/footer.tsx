import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import FOSS4GLogoWhite from "@/images/logo/foss4g-belem-logo-vertical-white.svg";

import PageBackground from "@/images/page-background.jpg";
import FooterBackground from "@/images/footer-background.jpg";

import { SocialIcon } from "react-social-icons";

export default function Footer() {
  const socialIconHeight = 30;
  const outerStyle = useRouter().asPath == "/map" ? "hidden" : "";

  return (
    <footer
      className={`${outerStyle} relative my-2 sm:min-h-44 flex items-end justify-center -z-10 bg-white bg-cover`}
    >
      <div
        className={`hidden sm:block w-full h-full absolute top-0 left-0 bg-no-repeat bg-cover sm:[clip-path:polygon(0_0,100%_37%,100%_100%,0%_100%)]`}
        style={{ backgroundImage: `url(${FooterBackground.src})` }}
      ></div>
      <div
        className={`relative z-10 flex w-full max-w-6xl h-full shadow-lg items-center justify-between flex-wrap bg-f4g_red px-2 py-1 sm:px-3 sm:py-3  border-f4g_red border-t border-l border-r rounded-t-xl`}
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
      </div>
    </footer>
  );
}
