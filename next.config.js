/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  output: 'export',

  images: {
    unoptimized: false,
    domains: [
      'images.unsplash.com',
      'res.cloudinary.com',
      'img.etimg.com',
      'assets.vogue.com',
      'm.media-amazon.com',
      'upload.wikimedia.org',
    ],

    deviceSizes: [320, 480, 768, 1080, 1200, 1440, 1920, 2048, 3840],

    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'belka-s.github.io/',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },

  reactStrictMode: false,

  webpack(config) {
    config.resolve.fallback = {
      fs: false,
      net: false,
      dns: false,
      child_process: false,
      tls: false,
    };
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },

  experimental: {
    // appDir: true,
    turbo: {
      loaders: {
        '.svg': ['@svgr/webpack'],
      },
    },
  },
};

module.exports = nextConfig;
