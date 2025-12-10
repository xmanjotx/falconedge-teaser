/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "randomuser.me"
            }
        ],
        unoptimized: true
    },
    output: 'export',
    trailingSlash: true,
    distDir: 'out'
};

export default nextConfig;
