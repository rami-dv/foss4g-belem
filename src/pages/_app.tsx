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
      <div className="relative z-20">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}
