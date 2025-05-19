/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // static export mode
  images: {
    unoptimized: true,  // disable Next.js Image Optimization API
  },
}

module.exports = nextConfig
