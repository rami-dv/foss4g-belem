import { PropsWithChildren } from "react";

export default function MDXLayout({ children }: PropsWithChildren) {
  return (
    <main className="sm:mx-auto max-w-6xl mx-2 my-2 sm:my-4">{children}</main>
  );
}
