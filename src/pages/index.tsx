import Head from "next/head";
import HomepageBanner from "@/images/homepage-one-banner.jpg";
import Objects from "@/images/objects.png";
import Countdown from "react-countdown";
import { DiJavascript } from "react-icons/di";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div
        className="relative flex items-center justify-center sm:-mt-48 bg-center bg-cover bg-no-repeat py-[100px] sm:py-[250px] [clip-path:polygon(0_0,100%_0%,100%_100%,0_100%)]"
        style={{
          backgroundImage: `url(${HomepageBanner.src})`,
        }}
      >
        <div className="font-ubuntu text-white grid grid-col-1 min-h-48 max-w-6xl w-full p-4 sm:p-4">
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
              "In the heart of the Amazon, Belém, geospatial technology
              transcends borders, revealing a map of unlimited possibilities..."
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
      </div>
    </>
  );
}
