/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.nicepage.com"
      },
    ],
  },
};

export default nextConfig;
