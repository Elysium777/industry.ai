/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  webpack: (config, { isServer }) => {
    // 启用 Source Map 支持
    // if (!isServer) {
    //     config.devtool = 'source-map';
    // }

    // 确保 Webpack 不解析 `.d.ts` 文件
    config.module.rules.push({
      test: /\.d\.ts$/,
      use: 'null-loader',
    });
    // // 忽略 .map 文件的解析错误
    // config.module.rules.push({
    //     test: /\.map$/,
    //     use: ['source-map-loader'],
    //     enforce: 'pre',
    // });
    // 忽略 `.map` 文件
    config.module.rules.push({
      test: /\.map$/,
      use: 'null-loader',
    });

    return config;
  }
};

export default nextConfig;
