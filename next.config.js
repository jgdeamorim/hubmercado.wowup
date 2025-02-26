const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://hm.wowup.com.br/:path*"
      }
    ];
  }
};

module.exports = nextConfig;
