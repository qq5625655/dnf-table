/** @type {import('next').NextConfig} */
const nextConfig = {
    rewrites: async () => [
        {
          source: '/',
          destination: '/app/page',
        },
        {
            source: '/main',
            destination: '/app/loggingData/page'
        },
      ],
}

module.exports = nextConfig
