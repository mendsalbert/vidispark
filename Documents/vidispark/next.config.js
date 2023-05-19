/** @type {import('next').NextConfig} */
const dotenv = require("dotenv");
dotenv.config();
const nextConfig = {
  reactStrictMode: true,
  env: {
    GREETING: "Hello World",
  },
};

module.exports = nextConfig;
