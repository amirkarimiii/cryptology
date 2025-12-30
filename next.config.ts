import "./env";
import type {NextConfig} from "next";

/** @type {import('next').NextConfig} */

const imageUrl = new URL(process.env.SERVER_ASSETS_URL!);

const nextConfig: NextConfig = {
    /* config options here */
    reactCompiler: true,
    cacheComponents: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: imageUrl.hostname,
                port: imageUrl.port,
                pathname: '/assets/**',
            },
        ],
    },
};

export default nextConfig;
