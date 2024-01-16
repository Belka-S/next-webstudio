/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  output: 'export',

  images: {
    unoptimized: true,
    domains: ['images.unsplash.com'],
  },

  sassOptions: {
    includePaths: [
      path.join(__dirname, 'src/styles'),
      path.join(__dirname, 'src/styles/mixins'),
      path.join(__dirname, 'src/styles/reset'),
      path.join(__dirname, 'src/styles/variables'),
    ],
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
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
