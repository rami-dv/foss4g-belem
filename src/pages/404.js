import MdxLayout from "@/components/MDXLayout";
import Image from "next/image";
import Image404 from "../images/404.png";

export default function Custom404() {
  return (
    <MdxLayout metadata={{ title: "404 Page Not Found" }}>
      <div className="w-full h-full flex-col flex items-center justify-center 6xl:-mb-24 6xl:py-32">
        <Image placeholder="blur" src={Image404} />
        <div className="font-ubuntu text-2xl mt-4">
          Page not found
        </div>
      </div>
    </MdxLayout>
  );
}
