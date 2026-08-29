/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'strvid.nyc3.cdn.digitaloceanspaces.com',
      },
    ],
  },
};

module.exports = nextConfig;