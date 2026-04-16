import LangHeader from "./components/header";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, locales } from "./dictionaries";

export async function generateStaticParams() {
	return locales.map((lang) => ({ lang }));
}

export const metadata: Metadata = {
	title: "Image Placeholder Test",
	description:
		"See how you can improve UX with image placeholders, in this website we use different techniques to generate image placeholders, so you can compare them and choose the one that best suits your needs",
};

export default async function LangLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: Promise<{ lang: string }>;
}>) {
	const { lang } = await params;

	if (!hasLocale(lang)) {
		notFound();
	}

	return (
		<>
			{/* header fetches dictionary server-side and renders localized labels */}
			<LangHeader lang={lang} />
			<main className="mx-auto my-4 max-w-5xl space-y-6 p-4">{children}</main>
		</>
	);
}
