/** @type {import('next').NextConfig} */
const dotenv = require("dotenv");
dotenv.config();
const nextConfig = {
  reactStrictMode: true,
  env: {
    GREETING: "Hello World",
    OPEN_AI_KEY: "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",
  },
};

module.exports = nextConfig;
