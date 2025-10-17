/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  // Disable webpack file watching to avoid EMFILE errors
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.watchOptions = {
        poll: 2000, // Poll every 2 seconds instead of using file system events
        aggregateTimeout: 300,
        ignored: [
          '**/node_modules/**',
          '**/.next/**',
          '**/dist/**',
          '**/.git/**'
        ]
      }
    }
    return config
  },
  // Reduce memory usage and file watching
  onDemandEntries: {
    maxInactiveAge: 10 * 1000,
    pagesBufferLength: 1,
  }
}

module.exports = nextConfig