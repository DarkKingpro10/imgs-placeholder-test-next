import HeaderPage from "@/shared/ui/header-page";
import { generateBlurPlaceholderSVG } from "@/shared/utils/utils";
import type { Metadata } from "next";
import Image from "next/image";
import { getDictionary, hasLocale, Locale } from "../dictionaries";
import ImageWithSkeleton from "@/shared/components/image-with-skeleton";

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
				title={dictionary.skeleton.title}
				description={dictionary.skeleton.description}
				linkLabel={dictionary.skeleton.linkLabel}
				reloadLabel={dictionary.skeleton.reloadLabel}
			/>
			<section className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-4">
				{Array.from({ length: 12 }).map((_, index) => (
					<ImageWithSkeleton key={index} seed={index} />
				))}
			</section>
			<section id="explanation" className="space-y-4">
				<section className="space-y-8 max-w-4xl">
					{/* Intro */}
					<div className="space-y-4">
						<h2 className="text-2xl font-semibold">{dictionary.skeleton.introTitle}</h2>
						{dictionary.skeleton.introParagraphs.map((p, i) => (
							<p key={i} className="leading-7 text-zinc-700 dark:text-zinc-300">
								{p}
							</p>
						))}
					</div>

					{/* How it works */}
					<div className="space-y-4">
						<h2 className="text-2xl font-semibold">{dictionary.skeleton.howItWorksTitle}</h2>
						<ul className="space-y-3 text-zinc-700 dark:text-zinc-300">
							{dictionary.skeleton.howItWorksList.map((l: string, i: number) => (
								<li key={i}>• {l}</li>
							))}
						</ul>
					</div>

					{/* Visual highlight */}
					<div className="rounded-xl border bg-zinc-50 p-6 dark:bg-zinc-900">
						<p className="text-sm text-zinc-600 dark:text-zinc-400">
							💡 {dictionary.skeleton.visualHint}
						</p>
					</div>

					{/* Pros & Cons */}
					<div className="grid gap-6 md:grid-cols-2">
						<div className="rounded-xl border p-6">
							<h3 className="mb-4 text-lg font-semibold text-green-600">
								{dictionary.skeleton.prosTitle}
							</h3>
							<ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
								{dictionary.skeleton.prosList.map((p: string, i: number) => (
									<li key={i}>✔ {p}</li>
								))}
							</ul>
						</div>

						<div className="rounded-xl border p-6">
							<h3 className="mb-4 text-lg font-semibold text-red-500">
								{dictionary.skeleton.tradeoffsTitle}
							</h3>
							<ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
								{dictionary.skeleton.tradeoffsList.map((t: string, i: number) => (
									<li key={i}>✖ {t}</li>
								))}
							</ul>
						</div>
					</div>

					{/* SEO Section */}
					<div className="space-y-4">
						<h2 className="text-2xl font-semibold">{dictionary.skeleton.seoTitle}</h2>
						{dictionary.skeleton.seoParagraphs.map((p: string, i: number) => (
							<p key={i} className="leading-7 text-zinc-700 dark:text-zinc-300">{p}</p>
						))}
					</div>

					{/* Comparison */}
					<div className="space-y-4">
						<h2 className="text-2xl font-semibold">{dictionary.skeleton.comparisonTitle}</h2>
						{dictionary.skeleton.comparisonParagraphs.map((p: string, i: number) => (
							<p key={i} className="leading-7 text-zinc-700 dark:text-zinc-300">{p}</p>
						))}
					</div>
				</section>
			</section>
		</>
	);
}
