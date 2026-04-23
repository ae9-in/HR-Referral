/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@refhire/ui'],
  images: {
    remotePatterns: [],
  },
};

module.exports = nextConfig;
