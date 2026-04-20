import HeaderPage from "@/shared/ui/header-page";
import { generateBlurPlaceholderSVG } from "@/shared/utils/utils";
import type { Metadata } from "next";
import Image from "next/image";
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
						className="relative aspect-square overflow-hidden rounded-xl transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg/50 dark:hover:shadow-amber-50 scroll-animation-scaleShow"
					>
						<Image
							fill
							src={`/api/slow-image?seed=${index}`}
							alt={`Random image ${index}`}
							className="object-cover transition-transform duration-300 ease-out hover:scale-105"
							placeholder="blur"
							blurDataURL={PRODUCT_BLUR_DATA_URL}
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							loading="lazy"
							unoptimized
						/>
					</div>
				))}
			</section>
			<section id="explanation" className="space-y-8">
				<div className="max-w-4xl space-y-4">
					<h2 className="text-3xl font-bold text-zinc-950 dark:text-zinc-50">
						{dictionary.static.explanationTitle}
					</h2>
					<p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
						{dictionary.static.description}
					</p>
				</div>

				<div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
					<div className="space-y-4">
						<h3 className="text-xl font-semibold text-zinc-950 dark:text-zinc-50">
							{dictionary.static.introTitle}
						</h3>
						{dictionary.static.introParagraphs.map((paragraph) => (
							<p key={paragraph} className="max-w-4xl leading-7 text-zinc-700 dark:text-zinc-300">
								{paragraph}
							</p>
						))}
						<div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-950/60">
							<p className="text-sm leading-6 text-zinc-600 dark:text-zinc-300">
								{dictionary.static.exampleNote}
							</p>
						</div>
					</div>

					<div className="rounded-3xl border border-zinc-200 bg-zinc-950 p-5 text-zinc-50 sm:p-6">
						<h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-400 sm:text-base">
							{dictionary.static.exampleTitle}
						</h3>
						<pre className="mt-4 overflow-x-auto rounded-2xl bg-black/40 p-4 text-[11px] leading-6 text-zinc-100 sm:text-xs">
							<code>{dictionary.static.exampleCode}</code>
						</pre>
					</div>
				</div>

				<div className="max-w-4xl space-y-4">
					{dictionary.static.paragraphs.map((paragraph) => (
						<p key={paragraph} className="leading-7 text-zinc-700 dark:text-zinc-300">
							{paragraph}
						</p>
					))}
				</div>
			</section>
		</>
	);
}
