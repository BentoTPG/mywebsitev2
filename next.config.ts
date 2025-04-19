import type { NextConfig } from "next";

module.exports = {
  allowedDevOrigins: ['http://192.168.1.25:3000'],
}

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true,
  }
  
};

export default nextConfig;
