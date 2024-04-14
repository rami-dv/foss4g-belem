import withMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  assetPrefix:
    process.env.NODE_ENV == "production"
      ? "/foss4g-belem"
      : undefined,
};

export default withMDX()(nextConfig);
