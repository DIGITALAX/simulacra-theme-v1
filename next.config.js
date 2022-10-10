/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    scrollRestoration: true,
  },
  // assetPrefix: "./",
  // optimizeFonts: false,
};

module.exports = nextConfig;
