/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  reactCompiler: true,
  experimental: {
    viewTransition: true,
  },
  images: {
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
    deviceSizes: [640, 768, 1024, 1280, 1920], // Add more breakpoints
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compress: true,
};

export default nextConfig;
