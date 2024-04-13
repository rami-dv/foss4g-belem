import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <div className="mb-4 font-ubuntu text-4xl leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
        {children}
      </div>
    ),
    h2: ({ children }) => (
      <div className="mb-3 font-ubuntu  text-3xl leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
        {children}
      </div>
    ),
    h3: ({ children }) => (
      <div className="mb-2 font-ubuntu  text-2xl leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl">
        {children}
      </div>
    ),
    h4: ({ children }) => (
      <div className="mb-1 font-ubuntu  text-xl leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl">
        {children}
      </div>
    ),
    h5: ({ children }) => (
      <div className="text-lg leading-none tracking-tight text-gray-900 md:text-xl lg:text-2xl">
        {children}
      </div>
    ),
    hr: () => (
      <hr className=""/>
    ),
    p: ({ children}) => (
      <div className="leading-6 my-2">{children}</div>
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
