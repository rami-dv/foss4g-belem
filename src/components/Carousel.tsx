
import { useState } from "react";
import Image, { ImageProps, StaticImageData } from "next/image";
import { CarouselProps, Carousel as Carousel_ } from "@material-tailwind/react";


export default function Carousel({
  images,
  captions = false,
  aspectRatio = "4/3",
  ...otherProps
}: {
  images: Array<{
    image: StaticImageData;
    caption?: string;
    attribution?: string;
  }>;
  aspectRatio?: "16/9" | "4/3" | "square";
  captions?: boolean;
} & CarouselProps) {
  const [isAttrOpen, setIsAttrOpen] = useState(false);

  const aspectClasses = {
    "16/9": "aspect-video",
    "4/3": "aspect-4/3",
    square: "aspect-square",
  };

  const captionClasses = captions ? "top-6" : "bottom-4";

  return (
    // @ts-ignore
    <Carousel_
      className=""
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div
          className={`absolute ${captionClasses} sm:top-auto sm:bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2`}
        >
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
      {images.map((image, idx) => (
        <div
          className="relative h-full w-full rounded-xl shadow-lg overflow-hidden"
          key={idx}
        >
          <Image
            placeholder="blur"
            src={image.image}
            alt={image.caption ?? "Image"}
            className={`w-full sm:h-full  object-cover ${aspectClasses[aspectRatio]}`}
          />

          {image.caption && (
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
          )}
        </div>
      ))}
    </Carousel_>
  );
}