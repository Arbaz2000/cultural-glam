/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'googleusercontent.com', // Update this with the domain of your image source
                pathname: '/**', // This will allow all paths from the domain
            },
            {
                protocol: 'https',
                hostname: 'your-image-source.com', // Add more domains as needed
                pathname: '/**',
            },
        ],
    },
}

module.exports = nextConfig;
