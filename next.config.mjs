/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/Auth/:path*', // Match all paths under /Api
                destination: 'http://localhost:8000/:path*', // Proxy to Laravel API
            },
            {
                source: '/Api/:path*', // Match all paths under /Api
                destination: 'http://localhost:8000/api/:path*', // Proxy to Laravel API
            },
            {
                source: '/Image/:path*', // Match all paths under /Image
                destination: 'http://localhost:8000/storage/:path*', // Proxy to Laravel storage
            },
        ];
    },
};

export default nextConfig;
