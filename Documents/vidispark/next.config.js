/** @type {import('next').NextConfig} */
const dotenv = require("dotenv");
dotenv.config();
const nextConfig = {
  reactStrictMode: true,
  env: {
    OPEN_AI_KEY: "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",
    GREETING: "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",
    TEST: "test",
  },
};

module.exports = nextConfig;
