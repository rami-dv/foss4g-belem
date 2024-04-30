import withMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  env: {
    baseUrl: "https://rami-dv.github.io/foss4g-belem"
  },
  basePath: process.env.NODE_ENV == "production" ? "/foss4g-belem" : undefined,
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

export default withMDX()(nextConfig);
