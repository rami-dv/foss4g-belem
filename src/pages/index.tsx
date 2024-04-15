import Head from "next/head";
import HomepageBanner from "@/images/homepage-one-banner.jpg";
import AboutFoss4g from "@/images/about-foss4g.png";
import Objects from "@/images/objects.png";
import ArrowBrown from "@/images/arrow-brown.png";
import RegisterImg from "@/images/register-img.jpg";
import GreenBg from "@/images/green-bg.png";
import OrangeBg from "@/images/orange-bg.png";
import SocialEvents from "@/images/social-events.jpg";
import WhiteArrows from "@/images/white-arrows.png";
import BrazilPatternBg from "@/images/brazil-pattern-background.png";
import Foss4gAnnounced from "@/images/foss4g-2024-announced.jpg";
import SotmGeneric from "@/images/sotm-generic.png";
import Hangar from "@/images/hangar.jpg";
import Countdown from "react-countdown";
import Image from "next/image";
import Link from "next/link";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      {/* Banner section */}

      <section
        className="relative flex items-center justify-center sm:-mt-48 bg-center bg-cover bg-no-repeat py-[100px] sm:py-[250px] [clip-path:polygon(0_0,100%_1%,100%_100%,0_91%)]"
        style={{
          backgroundImage: `url(${HomepageBanner.src})`,
        }}
      >
        <div className="font-ubuntu text-white grid grid-cols-1 min-h-48 max-w-6xl w-full p-4 sm:p-4">
          <Countdown
            date="2024-12-02"
            renderer={({ days, hours, minutes, seconds }) => (
              <div className="grid grid-cols-4 max-w-72 sm:max-w-96 -ml-2 sm:ml-0">
                <div className="p-1 sm:p-2">
                  <div className="flex items-center justify-center font-bold aspect-square text-2xl sm:text-4xl sm:p-3 shadow-xl rounded-full border-2 border-[#7c7491]">
                    {days}
                  </div>
                  <div className="text-center">days</div>
                </div>
                <div className="p-1 sm:p-2">
                  <div className="flex items-center justify-center font-bold aspect-square text-2xl sm:text-4xl sm:p-3 shadow-xl rounded-full border-2 border-[#7c7491]">
                    {hours}
                  </div>
                  <div className="text-center">hours</div>
                </div>
                <div className="p-1 sm:p-2">
                  <div className="flex items-center justify-center font-bold aspect-square text-2xl sm:text-4xl sm:p-3 shadow-xl rounded-full border-2 border-[#7c7491]">
                    {minutes}
                  </div>
                  <div className="text-center">minutes</div>
                </div>
                <div className="p-1 sm:p-2">
                  <div className="flex items-center justify-center font-bold aspect-square text-2xl sm:text-4xl sm:p-3 shadow-xl rounded-full border-2 border-[#7c7491]">
                    {seconds}
                  </div>
                  <div className="text-center">seconds</div>
                </div>
              </div>
            )}
          />
          <div className="font-ubuntu">
            <div
              className="text-[#ff6600] text-[3rem] sm:text-[5.5rem] [font-weight:500] -mb-2 sm:-mb-4"
              style={{ textShadow: "3.5px 6.062px 0px rgba(0, 0, 0, 0.1)" }}
            >
              FOSS4G 2024
            </div>
            <div
              className="text-white italic text-[2.3rem] sm:text-[4.625rem] [font-weight:400]"
              style={{ textShadow: "3.5px 6.062px 0px rgba(0, 0, 0, 0.1)" }}
            >
              BELÉM, BRASIL
            </div>

            <div
              className="text-white text-xl my-4"
              style={{ textShadow: "3.5px 6.062px 0px rgba(0, 0, 0, 0.1)" }}
            >
              02-08 December 2024
            </div>

            <div className="text-white [font-size:1.3rem] leading-7 italic [max-width:600px]">
              &quot;In the heart of the Amazon, Belém, geospatial technology
              transcends borders, revealing a map of unlimited
              possibilities...&quot;
            </div>
          </div>
        </div>
        <div
          className="absolute bg-no-repeat opacity-50 top-0 left-0 right-0 bottom-0 -z-10"
          style={{
            backgroundImage: `url(${Objects.src})`,
          }}
        ></div>
        <div
          className="absolute opacity-60 top-0 left-0 right-0 bottom-0 -z-10"
          style={{
            background: `linear-gradient(-45deg, #1e5799 0%, #1d1546 0%, #1a0b25 100%, #207cca 100%), url(${Objects.src})`,
          }}
        ></div>
      </section>

      {/* About FOSS4G */}

      <section className="relative flex items-center justify-center my-4">
        <div className="flex flex-col sm:flex-row space-y-10 sm:space-y-0 sm:space-x-20 max-w-6xl w-full p-4">
          <div className="hidden sm:block">
            <Image
              className="w-auto h-[240px]"
              src={AboutFoss4g}
              alt="About FOSS4G"
            />
          </div>
          <div className="sm:max-w-md">
            <div className="font-ubuntu text-[2.5rem] [font-weight:500]">
              About FOSS4G
            </div>
            <div className="w-[60px] h-[3px] bg-[#ff6600] mt-1"></div>
            <div className="mt-8">
              Join the fascinating world of the FOSS4G international conference,
              where innovation and collaboration converge to drive the future of
              geoinformation. At this unmissable event, leaders and enthusiasts
              of geospatial technology come together to explore the latest
              trends in open source software.
            </div>
            <div className="mt-8">
              Discover how the powerful combination of open source freedom and
              geoinformatics is transforming the way we visualize, analyze, and
              understand our world. Don&apos;t miss the opportunity to be part
              of this cartographic revolution!
            </div>
            <Link href="/about">
              <div className="inline-block text-white px-10 py-3 mt-8 rounded button bg-[#ff6600]">
                LEARN MORE
              </div>
            </Link>
          </div>
          <div>
            <Image
              className="h-[45px] w-auto"
              src={ArrowBrown}
              alt="Brown Arrow"
            />
            <iframe
              className="aspect-video mt-8 max-w-[480px]"
              width="100%"
              height="255"
              src="https://www.youtube.com/embed/VTou906-Kj8?si=0bJSKN8ZlqAXg_1i"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </section>
      <section className="relative flex items-center justify-center my-4">
        <div className="grid grid-cols-1 sm:grid-cols-4 w-full py-4">
          <div
            className="flex sm:aspect-square sm:col-span-2 sm:row-span-2 bg-cover bg-no-repeat min-h-96"
            style={{ backgroundImage: `url(${RegisterImg.src})` }}
          >
            <div className="mt-10 sm:mt-20">
              <div className="bg-[#ee6f2e] font-ubuntu [font-weight:500] p-[20px] inline text-3xl sm:text-[4rem] text-white">
                Register for the event
              </div>
              <div className="sm:ml-72 mt-10">
                <Image
                  alt="White Arrows"
                  className="inline-block -rotate-90"
                  src={WhiteArrows}
                />
                <div className="inline-block ml-10">
                  <div className="button text-2xl uppercase [font-weight:500] font-ubuntu text-[#ee6f2e] bg-white rounded px-10 py-4">
                    Coming Soon!
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex items-end sm:aspect-square bg-cover bg-no-repeat min-h-40"
            style={{ backgroundImage: `url(${OrangeBg.src})` }}
          >
            <div className="button font-ubuntu [font-weight:500] text-white text-3xl sm:text-5xl m-6">
              <Link href="/code-of-conduct">Code of Conduct</Link>
            </div>
          </div>
          <div className="flex items-end sm:aspect-square bg-black min-h-40">
            <div className="grid">
              <div className="mx-6 hidden sm:block">
                <Image alt="White Arrows" className="block" src={WhiteArrows} />
              </div>
              <div className="button font-ubuntu [font-weight:500] text-white text-3xl sm:text-5xl m-6">
                <Link href="/where-to-stay">Where To Stay</Link>
              </div>
            </div>
          </div>
          <div
            className="flex items-end sm:aspect-square bg-cover bg-no-repeat min-h-40"
            style={{ backgroundImage: `url(${GreenBg.src})` }}
          >
            <div className="button font-ubuntu [font-weight:500] text-white text-3xl sm:text-5xl m-6">
              <Link href="/schedule">Schedule</Link>
            </div>
          </div>
          <div
            className="flex items-end sm:aspect-square bg-cover bg-no-repeat min-h-40"
            style={{ backgroundImage: `url(${SocialEvents.src})` }}
          >
            <div className="button font-ubuntu [font-weight:500] text-white text-3xl sm:text-5xl m-6">
              <Link href="/social-events">Social Events</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center my-4">
        <div className="relative w-full max-w-6xl">
          <Image
            className="hidden sm:block w-full mx-auto max-w-4xl"
            src={BrazilPatternBg}
            alt="Brazil Pattern Background"
          />
          <div className="sm:absolute top-0 left-0 right-0 bottom-0 grid grid-cols-1 sm:grid-cols-2">
            <div className="flex justify-center sm:justify-end">
              <div className="text-4xl font-ubuntu [font-weight:500] sm:mr-8">Latest News</div>
            </div>
            <div className="flex items-center justify-center sm:items-start sm:justify-start m-4">
              <div className="bg-white max-w-xs border border-gray-200 p-4 shadow-lg">
                <Image src={Foss4gAnnounced} alt="FOSS4G 2024 Announced" />
                <div className="p-2">
                  <div className="font-ubuntu text-3xl [font-weight:500] my-3">
                    FOSS4G in Belém!
                  </div>
                  <div className="font-ubuntu my-3">
                    OSGeo announces that the FOSS4G international conference
                    will be held in Belém
                  </div>
                  <div>
                    <a
                      href="https://www.osgeo.org/foundation-news/foss4g-2024-has-been-awarded-to-belem-brazil/"
                      target="_blank"
                      className="button"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center sm:items-start sm:justify-end m-4">
              <div className="bg-white max-w-xs border border-gray-200 p-4 shadow-lg">
                <Image src={SotmGeneric} alt="FOSS4G 2024 Announced" />
                <div className="p-2">
                  <div className="font-ubuntu text-3xl [font-weight:500] my-3">
                    SOTM LATAM 2024
                  </div>
                  <div className="font-ubuntu my-3">
                    State of the Map LATAM will be held in Belém 07-08 December,
                    after the main conference!
                  </div>
                  <div>
                    <a
                      href="https://wiki.openstreetmap.org/wiki/ES:LatAm/Eventos/State_of_the_Map_Latam_2024"
                      target="_blank"
                      className="button"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center sm:items-start sm:justify-start m-4">
              <div className="bg-white max-w-xs border border-gray-200 p-4 shadow-lg">
                <Image src={Hangar} alt="FOSS4G 2024 Announced" />
                <div className="p-2">
                  <div className="font-ubuntu text-3xl [font-weight:500] my-3">
                    FOSS4G Venue Chosen
                  </div>
                  <div className="font-ubuntu my-3">
                    FOSS4G 2024 Belém will be held at HANGAR Convention Center!
                  </div>
                  <div>
                    <a
                      href="https://hangarpa.com.br/"
                      target="_blank"
                      className="button"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
