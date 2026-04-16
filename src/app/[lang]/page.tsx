import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "./dictionaries";

export default async function Page({
	params,
}: Readonly<{
	params: Promise<{ lang: string }>;
}>) {
	const { lang } = await params;

	if (!hasLocale(lang)) {
		notFound();
	}

	const dictionary = await getDictionary(lang);

	return (
		<section className="grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
			<div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
				<p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
					{dictionary.home.eyebrow}
				</p>
				<h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-5xl">
					{dictionary.home.title}
				</h1>
				<p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400 sm:text-lg">
					{dictionary.home.description}
				</p>
				<div className="mt-6 flex flex-wrap gap-3 text-sm font-medium">
					<Link
						href={`/${lang}/no-placeholder`}
						className="rounded-full bg-zinc-950 px-5 py-3 text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-white"
					>
						{dictionary.home.primaryCta}
					</Link>
					<Link
						href={`/${lang}/static`}
						className="rounded-full border border-zinc-300 px-5 py-3 text-zinc-700 transition-colors hover:border-zinc-950 hover:text-zinc-950 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-50 dark:hover:text-zinc-50"
					>
						{dictionary.home.secondaryCta}
					</Link>
				</div>
			</div>

			<aside className="rounded-3xl border border-dashed border-zinc-300 bg-zinc-50 p-8 dark:border-zinc-700 dark:bg-zinc-900/40">
				<h2 className="text-xl font-semibold text-zinc-950 dark:text-zinc-50">
					{dictionary.home.featureTitle}
				</h2>
				<ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
					{dictionary.home.features.map((feature) => (
						<li key={feature} className="flex gap-3">
							<span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-zinc-950 dark:bg-zinc-50" />
							<span>{feature}</span>
						</li>
					))}
				</ul>
			</aside>
		</section>
	);
}
