/** @type {import('next').NextConfig} */

const nextConfig = {
  transpilePackages: ['mui-one-time-password-input', 'mui-tel-input'],
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flagcdn.com",
        port: '',
      },
    ],
  },
  productionBrowserSourceMaps: false,

  webpack(config, { dev }) {
    if (dev) {
      config.devtool = 'cheap-module-source-map';
    }
    return config;
  },
};

export default nextConfig;
