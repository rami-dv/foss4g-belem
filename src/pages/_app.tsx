import "@/styles/globals.css";
import type { AppProps } from "next/app";
import PageBackground from "@/images/page-background.jpg";
import FooterBackground from "@/images/footer-background.jpg";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-full">
      <Header />
      <div
        className=" -mt-20 min-h-44"
        style={{
          background: `url(${PageBackground.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          clipPath: "polygon(0 0,100% 0,100% 100%,0 37%)",
        }}
      ></div>
      <Component {...pageProps} />

      <Footer />
    </div>
  );
}
