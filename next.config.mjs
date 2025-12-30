/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Enable React strict mode
  reactStrictMode: true,
  // Optimize production builds
  swcMinify: true,
  // Compress output
  compress: true,
};

export default nextConfig;
