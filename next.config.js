/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // 客户端构建时，将所有 Node.js 核心模块设为空模块
      config.resolve.fallback = {
        fs: false,
        net: false,
        tls: false,
        dns: false,
        path: false,
        crypto: false,
        stream: false,
        http: false,
        https: false,
        zlib: false,
        url: false,
        util: false,
        assert: false,
        buffer: false,
        events: false,
        os: false,
        child_process: false,
      };
    }
    return config;
  },
}

module.exports = nextConfig
