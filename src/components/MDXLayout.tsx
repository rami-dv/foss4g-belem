import { PropsWithChildren } from "react";

export default function MDXLayout({
  children,
}: PropsWithChildren<{ metadata: null | { [key: string]: string } }>) {
  return (
    <>
      <main className="6xl:mx-auto max-w-6xl px-2 my-2 6xl:px-2 6xl:my-4">
        {children}
      </main>
    </>
  );
}
