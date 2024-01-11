/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: "build",

  images: {
    domains: ["loremflickr.com"],
  },
};

module.exports = nextConfig;
