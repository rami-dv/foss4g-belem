import { PropsWithChildren } from "react";
import PageBackground from "@/images/page-background.jpg";
import FooterBackground from "@/images/footer-background.jpg";

export default function MDXLayout({ children }: PropsWithChildren) {
  return (
    <>
      <main className="sm:mx-auto max-w-6xl mx-2 my-2 sm:my-4 min-h-96">
        {children}
      </main>
    </>
  );
}
