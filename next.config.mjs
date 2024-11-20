const nextConfig = {
  transpilePackages: ["mui-one-time-password-input", "mui-tel-input"],
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flagcdn.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "s2.coinmarketcap.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "web3insights.s3.amazonaws.com",
        port: "",
      }
    ],
  },
  productionBrowserSourceMaps: false,

  webpack(config, { dev }) {
    if (dev) {
      config.devtool = "cheap-module-source-map";
    }

    config.module.rules.forEach(rule => {
      if (rule.test && rule.test.toString().includes("css")) {
        if (Array.isArray(rule.use)) {
          rule.use.forEach(use => {
            if (use.loader && use.loader.includes("css-loader")) {
              use.options.sourceMap = false;
            }
          });
        }
      }
    });

    return config;
  },
};

export default nextConfig;
