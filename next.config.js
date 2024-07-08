/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["three"],
  images: {
    domains: ["cdn.sanity.io", "via.placeholder.com"],
  },
};

module.exports = nextConfig;
