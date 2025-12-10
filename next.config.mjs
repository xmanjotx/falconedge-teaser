/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'out',
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "randomuser.me"
            }
        ],
        unoptimized: true
    },
    trailingSlash: true
};

export default nextConfig;
