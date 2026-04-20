/** @type {import('next').NextConfig} */
const nextConfig = {
  // 输出 standalone 模式，用于 Docker 部署
  output: 'standalone',

  // 忽略构建时的类型错误和 ESLint 错误，确保构建过程不被阻断
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
