import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    loader: "custom",
    loaderFile: "./lib/imagekit-loader.ts",
  },
};

export default nextConfig;
