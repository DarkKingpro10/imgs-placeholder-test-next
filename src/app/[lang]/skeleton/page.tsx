import HeaderPage from "@/shared/ui/header-page";
import ImageWithSkeleton from "@/shared/components/image-with-skeleton";
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
		title: dictionary.skeleton.metaTitle,
		description: dictionary.skeleton.metaDescription,
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
				description={dictionary.skeleton.description}
				title={dictionary.skeleton.title}
				linkLabel={dictionary.skeleton.linkLabel}
				reloadLabel={dictionary.skeleton.reloadLabel}
			/>
			<section className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-xl mx-auto px-2">
				{Array.from({ length: 12 }).map((_, index) => (
					<ImageWithSkeleton key={index} seed={index} />
				))}
			</section>
			<section id="explanation" className="space-y-8 w-full max-w-screen-xl mx-auto px-2">
				<div className="max-w-4xl space-y-4">
					<h2 className="text-3xl font-bold text-zinc-950 dark:text-zinc-50">
						{dictionary.skeleton.title}
					</h2>
					<p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
						{dictionary.skeleton.description}
					</p>
				</div>

				<div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
					<div className="space-y-4">
						<h3 className="text-xl font-semibold text-zinc-950 dark:text-zinc-50">
							{dictionary.skeleton.overviewTitle}
						</h3>
						{dictionary.skeleton.overviewParagraphs.map((paragraph) => (
							<p key={paragraph} className="leading-7 text-zinc-700 dark:text-zinc-300">
								{paragraph}
							</p>
						))}
						<div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
							<p className="text-sm text-zinc-600 dark:text-zinc-400">
								{dictionary.skeleton.visualHint}
							</p>
						</div>
					</div>

					<div className="rounded-3xl border border-zinc-200 bg-zinc-950 p-5 text-zinc-50 sm:p-6">
						<h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-400 sm:text-base">
							{dictionary.skeleton.exampleTitle}
						</h3>
						<pre className="mt-4 overflow-x-auto rounded-2xl bg-black/40 p-4 text-[11px] leading-6 text-zinc-100 sm:text-xs">
							<code>{dictionary.skeleton.exampleCode}</code>
						</pre>
						<p className="mt-3 text-sm leading-6 text-zinc-300">
							{dictionary.skeleton.exampleNote}
						</p>
					</div>
				</div>

				<div className="grid gap-6 grid-cols-1 md:grid-cols-2">
					<div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
						<h3 className="mb-4 text-lg font-semibold text-emerald-600">
							{dictionary.skeleton.prosTitle}
						</h3>
						<ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
							{dictionary.skeleton.prosList.map((item) => (
								<li key={item}>✔ {item}</li>
							))}
						</ul>
					</div>

					<div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
						<h3 className="mb-4 text-lg font-semibold text-rose-500">
							{dictionary.skeleton.tradeoffsTitle}
						</h3>
						<ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
							{dictionary.skeleton.tradeoffsList.map((item) => (
								<li key={item}>✖ {item}</li>
							))}
						</ul>
					</div>
				</div>

				<div className="space-y-4">
					<h3 className="text-xl font-semibold text-zinc-950 dark:text-zinc-50">
						{dictionary.skeleton.seoTitle}
					</h3>
					{dictionary.skeleton.seoParagraphs.map((paragraph) => (
						<p key={paragraph} className="leading-7 text-zinc-700 dark:text-zinc-300">
							{paragraph}
						</p>
					))}
				</div>

				<div className="space-y-4">
					<h3 className="text-xl font-semibold text-zinc-950 dark:text-zinc-50">
						{dictionary.skeleton.comparisonTitle}
					</h3>
					{dictionary.skeleton.comparisonParagraphs.map((paragraph) => (
						<p key={paragraph} className="leading-7 text-zinc-700 dark:text-zinc-300">
							{paragraph}
						</p>
					))}
				</div>
			</section>
		</>
	);
}
