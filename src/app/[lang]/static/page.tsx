import HeaderPage from "@/shared/ui/header-page";
import { generateBlurPlaceholderSVG } from "@/shared/utils/utils";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale, Locale } from "../dictionaries";

const PRODUCT_BLUR_DATA_URL = generateBlurPlaceholderSVG();

export async function generateMetadata({
	params,
}: Readonly<{
	params: Promise<{ lang: string }>;
}>): Promise<Metadata> {
	const { lang } = await params;

	if (!hasLocale(lang)) {
		return {};
	}

	const dictionary = await getDictionary(lang);

	return {
		title: dictionary.static.metaTitle,
		description: dictionary.static.metaDescription,
	};
}

export default async function StaticPlaceholder({
	params,
}: Readonly<{
	params: Promise<{ lang: Locale }>;
}>) {
	const { lang } = await params;

	const dictionary = await getDictionary(lang);

	return (
		<>
			<HeaderPage
				title={dictionary.static.title}
				description={dictionary.static.description}
				linkLabel={dictionary.static.linkLabel}
				reloadLabel={dictionary.static.reloadLabel}
			/>
			<section className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-4">
				{Array.from({ length: 12 }).map((_, index) => (
					<div
						key={index}
						className="relative aspect-square overflow-hidden rounded-xl transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg/50 dark:hover:shadow-amber-50"
					>
						<Image
							fill
							src={`/api/slow-image?seed=${index}`}
							alt={`Random image ${index}`}
							className="object-cover transition-transform duration-300 ease-out hover:scale-105"
							placeholder="blur"
							blurDataURL={PRODUCT_BLUR_DATA_URL}
							loading="lazy"
							unoptimized
						/>
					</div>
				))}
			</section>
			<section id="explanation" className="space-y-4">
				<h2 className="text-3xl font-bold">
					{dictionary.static.explanationTitle}
				</h2>
				{dictionary.static.paragraphs.map((paragraph) => (
					<p
						key={paragraph}
						className="max-w-4xl leading-7 text-zinc-700 dark:text-zinc-300"
					>
						{paragraph}
					</p>
				))}
			</section>
		</>
	);
}
