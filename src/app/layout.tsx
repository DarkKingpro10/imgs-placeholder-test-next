import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavLink from "@/shared/components/nav-link";

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
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
			data-scroll-behavior="smooth"
		>
			<body className="min-h-full flex flex-col">
				<header className="border-b border-zinc-200 dark:border-zinc-800">
					<nav className="max-w-5xl mx-auto flex flex-wrap gap-2 py-4 px-6">
						<NavLink href="/">Home</NavLink>
						<NavLink href="/no-placeholder">No placeholder</NavLink>
						<NavLink href="/static">Static</NavLink>
						<NavLink href="/skeleton">Skeleton</NavLink>
						<NavLink href="/blur">Blur</NavLink>
						<NavLink href="/color">Color</NavLink>
					</nav>
				</header>
				<main className="my-4 max-w-5xl mx-auto space-y-2 p-4">{children}</main>
			</body>
		</html>
	);
}
