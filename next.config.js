/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath:
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_BASEPATH
      : "",
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["binodpfjvufvqpxslzhd.supabase.co"],
  },
};

module.exports = nextConfig;
