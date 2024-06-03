/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ydirection.com"
      },
    ],
  },
};

export default nextConfig;
