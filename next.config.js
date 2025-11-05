/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    unoptimized: false, // We'll use unoptimized prop on specific images
  },
}

module.exports = nextConfig

