/** @type {import('next').NextConfig} */
const dotenv = require("dotenv");
dotenv.config();
const nextConfig = {
  reactStrictMode: true,

  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(myEnv));
    return config;
  },
};

module.exports = nextConfig;
