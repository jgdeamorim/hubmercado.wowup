/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    turbo: {},
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://hm.wowup.com.br/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
