/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
}

module.exports = {
  images: {
    domains: ["i.scdn.co"], // Add other domains here as needed
  },
  // ... other Next.js config
};
