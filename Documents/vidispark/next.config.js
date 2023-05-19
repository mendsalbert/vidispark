/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    TEXT: process.env.TEXT,
  },
};

module.exports = nextConfig;
