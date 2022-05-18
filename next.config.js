/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const nextConfig = withBundleAnalyzer({
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  strictMode: true,
  swcMinify: true,
  images: {
    domains: ['source.unsplash.com', 'uph-booking-image.s3.amazonaws.com'],
  },
  // i18n: {
  //   locales: ['in'],
  //   defaultLocale: 'in',
  //   domain: 'admin.local',
  // },
});

module.exports = nextConfig;
