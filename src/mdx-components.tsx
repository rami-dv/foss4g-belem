import type { MDXComponents } from "mdx/types";
import { CarouselProps, Carousel as Carousel_ } from "@material-tailwind/react";
import Image, { ImageProps, StaticImageData } from "next/image";
import { useState } from "react";

export function Carousel({
  images,
  ...otherProps
}: {
  images: Array<{
    image: StaticImageData;
    caption: string;
    attribution?: string;
  }>;
} & CarouselProps) {
  const [isAttrOpen, setIsAttrOpen] = useState(false);

  return (
    // @ts-ignore
    <Carousel_
      className="rounded-xl shadow-lg"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute top-3/4 sm:top-auto sm:bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-3 w-3 cursor-pointer rounded-full transition-colors content-[''] ${
                activeIndex === i ? "bg-white" : "bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
      {...otherProps}
    >
      {images.map((image) => (
        <div className="relative h-full w-full">
          <Image
            src={image.image}
            alt={image.caption}
            className="h-full w-full min-h-80 aspect-3/4 sm:aspect-video object-cover"
          />

          <div className="font-ubuntu flex relative sm:absolute sm:bottom-10 items-center justify-center text-center text-xs sm:text-sm 6xl:text-base w-full bg-white/90 px-2 py-2 shadow-xl">
            <div className="basis-full px-2 sm:px-4">{image.caption}</div>
            {image.attribution && (
              <div className="flex items-center justify-center h-full">
                <div
                  className="relative z-30 flex items-center justify-center text-f4g_red text-xs hover:cursor-pointer"
                  onClick={() => setIsAttrOpen(!isAttrOpen)}
                >
                  {isAttrOpen && (
                    <div className="inline-block right-0 bg-white border 6xl:text-base border-f4g_red rounded-l-full pl-2 sm:pl-4 rounded-r-full z-20 absolute w-auto whitespace-nowrap ">
                      Image (c) {image.attribution}
                      <span className="inline-flex bg-white items-center justify-center 6xl:text-base 6xl:w-6 6xl:h-6 text-xs text-f4g_red border rounded-full w-4 h-4">
                        &copy;
                      </span>
                    </div>
                  )}

                  <span className="flex items-center justify-center 6xl:text-base 6xl:w-6 6xl:h-6 text-xs border-f4g_red  text-f4g_red border rounded-full w-4 h-4">
                    &copy;
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </Carousel_>
  );
}

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
    a: ({ href, children }) => (
      <a
        href={href}
        target="_blank"
        className="underline underline-offset-4 text-f4g_blue"
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
