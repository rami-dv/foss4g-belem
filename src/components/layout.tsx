import Header from "./header";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  // @ts-ignore
  const isMdx = children?.type?.name == "MDXContent";

  return (
    <>
      <Header />
      {isMdx ? <MDXLayout>{children}</MDXLayout> : <main>{children}</main>}
    </>
  );
}

const MDXLayout = ({ children }: PropsWithChildren) => {
  return <main className="mx-auto max-w-6xl">{children}</main>;
};
