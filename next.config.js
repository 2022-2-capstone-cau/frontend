/** @type {import('next').NextConfig} */
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  env: {
    API_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT,
  },
  reactStrictMode: true,
  assetPrefix: '.',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  fallback: false,
};
