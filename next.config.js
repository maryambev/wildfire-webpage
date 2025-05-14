/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'out',
    basePath: '/wildfire-webpage',
    images: {
      unoptimized: true,
    },
  };
  
  module.exports = nextConfig;
  