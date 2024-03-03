/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      "firebasestorage.googleapis.com",
      "lh3.googleusercontent.com",
    ].map((hostname) => ({
      protocol: "https",
      hostname,
      port: "",
      pathname: "/**",
    })),
  },
};

module.exports = nextConfig;
