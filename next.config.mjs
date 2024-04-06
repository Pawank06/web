/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.hashnode.com'],
        remotePatterns: [
            {
              protocol: "https",
              hostname: "**",
            },
        ]
    }
};

export default nextConfig;
