import type { Metadata, Viewport } from "next";

const baseUrl =
	process.env.SITE_URL ?? process.env.NEXT_PUBLIC_SITE_URL ?? "https://your-site.com";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Image Placeholder Test",
	description:
		"See how you can improve UX with image placeholders, in this website we use different techniques to generate image placeholders, so you can compare them and choose the one that best suits your needs",
	metadataBase: new URL(baseUrl),
	alternates: {
		canonical: '/',
	},
	robots: {
		index: true,
		follow: true,
	},
};

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	maximumScale: 5,
	userScalable: true,
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const headersList = await headers();
	const locale = headersList.get("x-locale") ?? "en";

	return (
		<html
			lang={locale}
			className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
			data-scroll-behavior="smooth"
		>
			<body className="min-h-full flex flex-col">
				{children}
			</body>
		</html>
	);
}
