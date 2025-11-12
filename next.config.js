/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    unoptimized: false, // We'll use unoptimized prop on specific images
  },
  // Make build more forgiving - treat ESLint warnings as warnings, not errors
  eslint: {
    // Set to true to ignore ESLint errors during build (use with caution!)
    // This makes builds easier but may hide real issues
    ignoreDuringBuilds: process.env.IGNORE_ESLINT === 'true',
  },
  typescript: {
    // Set to true to ignore TypeScript errors during build (use with caution!)
    // This makes builds easier but may hide real issues
    ignoreBuildErrors: process.env.IGNORE_TYPESCRIPT === 'true',
  },
}

module.exports = nextConfig

