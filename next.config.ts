import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  basePath: "/bioT-site",  
  assetPrefix: "/bioT-site",
};

export default nextConfig;