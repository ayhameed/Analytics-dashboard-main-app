/** @type {import('next').NextConfig} */

const nextConfig = {
  transpilePackages: ['mui-one-time-password-input', 'mui-tel-input'],
  reactStrictMode: true,
  images: {
    // domains: ["flagcdn.com"],
    remotePatterns: [
      {
          protocol: "https",
          hostname: "flagcdn.com",
          port: '',
      },
    ],
  },
};


export default nextConfig;
