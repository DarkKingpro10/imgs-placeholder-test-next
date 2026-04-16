import HeaderPage from "@/shared/ui/header-page";
import PlaiceholderImage from "@/shared/components/plaiceholder-image";
import type { Metadata } from "next";
import { getDictionary, hasLocale, Locale } from "../dictionaries";

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
		title: dictionary.dynamicPlaceholder.metaTitle,
		description: dictionary.dynamicPlaceholder.metaDescription,
	};
}

export default async function DynamicPlaceholder({
	params,
}: Readonly<{
	params: Promise<{ lang: Locale }>;
}>) {
	const { lang } = await params;

	const dictionary = await getDictionary(lang);
	const imageSeeds = Array.from({ length: 12 }, (_, index) => 9 + index);

	return (
		<>
			<HeaderPage
				title={dictionary.dynamicPlaceholder.title}
				description={dictionary.dynamicPlaceholder.description}
				linkLabel={dictionary.dynamicPlaceholder.linkLabel}
				reloadLabel={dictionary.dynamicPlaceholder.reloadLabel}
			/>
			<section className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-4">
				{imageSeeds.map((seed) => (
					<div
						key={seed}
						className="relative aspect-square overflow-hidden rounded-xl transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg/50 dark:hover:shadow-amber-50"
					>
						<PlaiceholderImage
							fill
							seed={seed}
							alt={`Random image ${seed}`}
							className="object-cover transition-transform duration-300 ease-out hover:scale-105"
							loading="lazy"
							unoptimized
						/>
					</div>
				))}
			</section>
			<section id="explanation" className="space-y-4">
				<h2 className="text-3xl font-bold">
					{dictionary.dynamicPlaceholder.explanationTitle}
				</h2>
				{dictionary.dynamicPlaceholder.paragraphs.map((paragraph) => (
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
