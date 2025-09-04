/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/home',
          destination: '/',
          permanent: true,
        }
      ]
    },
    images: {
      formats: ['image/avif', 'image/webp'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.credly.com'
        },
        {
          protocol: 'https',
          hostname: 'thetrainingboss.com'
        }
      ],
    }
}

module.exports = nextConfig
