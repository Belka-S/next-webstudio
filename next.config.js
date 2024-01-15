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
      path.join(__dirname, 'src/styles/variables'),
    ],
  },
};

module.exports = nextConfig;
