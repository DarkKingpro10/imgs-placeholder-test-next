import type { Metadata, Viewport } from "next";

let baseUrl =
	process.env.SITE_URL ??
	process.env.NEXT_PUBLIC_SITE_URL ??
	"https://your-site.com";

// Ensure baseUrl includes protocol; new URL() throws if protocol is missing.
if (baseUrl && !/^https?:\/\//i.test(baseUrl)) {
	baseUrl = `https://${baseUrl}`;
}
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
		canonical: "/",
	},
	robots: {
		index: true,
		follow: true,
	},
};

export const viewport: Viewport = {
	width: "device-width",
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
				<footer className="mt-auto border-t border-zinc-200 bg-white/5 py-6 text-center dark:border-zinc-800">
					<div className="mx-auto flex max-w-4xl items-center justify-center gap-4">
						<a
							href="https://github.com/DarkKingpro10/imgs-placeholder-test-next"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="GitHub"
							className="text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100 px-2 py-1 rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500"
						>
							<span className="sr-only">GitHub</span>
							<span aria-hidden className="font-medium">
								GitHub
							</span>
						</a>
						<a
							href="https://www.linkedin.com/in/jesus-esquivel-ramirez/"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="LinkedIn"
							className="text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100 px-2 py-1 rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500"
						>
							<svg
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="currentColor"
								xmlns="http://www.w3.org/2000/svg"
								className="inline-block align-middle"
							>
								<path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zM8.5 8h3.84v2.2h.05c.54-1 1.86-2.06 3.83-2.06C20.5 8.14 22 10.6 22 14.17V24h-4v-8.05c0-1.92-.04-4.39-2.68-4.39-2.69 0-3.1 2.1-3.1 4.26V24h-4V8z" />
							</svg>
						</a>
					</div>
				</footer>
			</body>
		</html>
	);
}
