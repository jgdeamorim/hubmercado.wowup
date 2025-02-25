/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://hm.wowup.com.br/api/v1/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
