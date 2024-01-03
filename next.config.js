/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: "/blog",
        destination: "https://blog-woad-six-17.vercel.app/blog"
      },
      {
        source: "/blog/:path*",
        destination: "https://blog-woad-six-17.vercel.app/blog/:path*"
      },
    ];
  },
};

module.exports = nextConfig;
