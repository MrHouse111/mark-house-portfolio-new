/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // Export a static site for deployment to Vercel/Capacitor
  output: 'export',
  images: {
    // Disable Next.js image optimization as required for Capacitor/Android builds
    unoptimized: true
  },
  // Generate trailing slashes in exported paths for better compatibility
  trailingSlash: true
};

module.exports = nextConfig;