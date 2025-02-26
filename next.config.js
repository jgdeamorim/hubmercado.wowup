/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true, // 🚀 Ativa otimizações de compilação
  compiler: {
    styledComponents: true // 💡 Melhor compatibilidade com Material-UI
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.NEXT_PUBLIC_API_URL}/:path*`
      }
    ];
  }
};

module.exports = nextConfig;
