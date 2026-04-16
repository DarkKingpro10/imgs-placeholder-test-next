import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	reactCompiler: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "picsum.photos",
			},
			{
				protocol: "https",
				hostname: "source.unsplash.com",
			},
			{
				protocol: "https",
				hostname: "images.unsplash.com",
			},
		],
		localPatterns: [
			{
				// Patrón más explícito para la API de imágenes lentas
				pathname: "/api/slow-image/**",
			},
			{
				pathname: "/api/slow-image",
			},
		],
	},
};

export default nextConfig;
