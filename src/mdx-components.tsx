import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <div className="my-4 font-ubuntu text-4xl leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
        {children}
      </div>
    ),
    h2: ({ children }) => (
      <div className="my-3 font-ubuntu text-3xl leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
        {children}
      </div>
    ),
    h3: ({ children }) => (
      <div className="my-2 font-ubuntu text-2xl leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl">
        {children}
      </div>
    ),
    h4: ({ children }) => (
      <div className="my-1 font-ubuntu text-xl leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl">
        {children}
      </div>
    ),
    h5: ({ children }) => (
      <div className="text-lg font-ubuntu leading-none tracking-tight text-gray-900 md:text-xl lg:text-2xl">
        {children}
      </div>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside pl-3 my-3">{children}</ul>
    ),
    hr: () => <hr className="" />,
    p: ({ children }) => <p className="my-3">{children}</p>,
    a: ({ href, children, className = null }) => (
      <a
        href={href}
        target="_blank"
        className={
          className ? className : "underline underline-offset-4 text-f4g_blue"
        }
      >
        {children}
      </a>
    ),
    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        {...(props as ImageProps)}
      />
    ),
    ...components,
  };
}
