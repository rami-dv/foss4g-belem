import { useContext } from "react";
import Link from "next/link";
import { intlHrefs, LanguageContext } from "@/lib/language";

export default function IntlLink({
  href,
  className = "",
  children,
  ...otherProps
}: {
  className?: string;
  href: string;
  children: React.ReactNode;
}) {
  const { language } = useContext(LanguageContext);

  // @ts-ignore
  const intlHref =
    href in intlHrefs && language != "en"
      ? // @ts-ignore
        intlHrefs[href][language]
      : href;

  return href.startsWith("http") ? (
    <a href={href} className={className} {...otherProps}>
      {children}
    </a>
  ) : (
    <Link
      href={`/${language}${intlHref}`}
      className={className}
      {...otherProps}
    >
      {children}
    </Link>
  );
}
