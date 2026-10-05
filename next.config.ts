import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/utstat-math-finance-preview",
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
