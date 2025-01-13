/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: 'removeViewBox',
                  active: false,
                },
              ],
            },
          },
        },
      ],
    });
    return config;
  },
  async redirects() {
    return [
      {
        source: '/login',
        destination: 'https://www.autostockmaster.com/en/authentication/login',
        permanent: false, // Temporary redirect (302)
      },
    ];
  },
};

export default nextConfig;
