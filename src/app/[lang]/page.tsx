import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "./dictionaries";

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
		title: dictionary.home.metaTitle,
		description: dictionary.home.metaDescription,
	};
}

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
		<article className="space-y-8">
			<section className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
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

			<section className="grid gap-6 lg:grid-cols-2">
				<div className="rounded-3xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
					<p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-600 dark:text-amber-400">
						{dictionary.home.introTitle}
					</p>
					<div className="mt-4 space-y-4 text-zinc-600 dark:text-zinc-400">
						{dictionary.home.introParagraphs.map((paragraph) => (
							<p key={paragraph} className="leading-7">
								{paragraph}
							</p>
						))}
					</div>
				</div>

				<div className="rounded-3xl border border-zinc-200 bg-zinc-950 p-6 text-zinc-50 shadow-lg shadow-zinc-950/10 dark:border-zinc-800">
					<h2 className="text-xl font-semibold">
						{dictionary.home.closingTitle}
					</h2>
					<p className="mt-4 text-sm leading-7 text-zinc-300">
						{dictionary.home.closingParagraph}
					</p>
					<div className="mt-6 grid gap-3 text-sm text-zinc-200 sm:grid-cols-2">
						{dictionary.home.checklistItems.map((item) => (
							<div
								key={item}
								className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
							>
								{item}
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="grid gap-6 lg:grid-cols-2">
				<div className="rounded-3xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
					<h2 className="text-2xl font-semibold text-zinc-950 dark:text-zinc-50">
						{dictionary.home.nextJsTitle}
					</h2>
					<p className="mt-3 leading-7 text-zinc-600 dark:text-zinc-400">
						{dictionary.home.nextJsParagraph}
					</p>
					<ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
						{dictionary.home.nextJsTips.map((tip) => (
							<li key={tip} className="flex gap-3">
								<span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sky-500" />
								<span>{tip}</span>
							</li>
						))}
					</ul>
				</div>

				<div className="rounded-3xl border border-zinc-200 bg-zinc-950 p-6 text-zinc-50">
					<h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-400">
						{dictionary.home.nextJsCodeTitle}
					</h3>
					<pre className="mt-4 overflow-x-auto rounded-2xl bg-black/40 p-4 text-xs leading-6 text-zinc-100">
						<code>{`<div className="relative aspect-4/3">
  <Image
    src="/hero.jpg"
    alt="Product detail"
    fill
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    placeholder="blur"
    blurDataURL={blurDataURL}
    className="object-cover"
  />
</div>`}</code>
					</pre>
				</div>
			</section>

			<section className="grid gap-6 lg:grid-cols-2">
				<div className="rounded-3xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
					<h2 className="text-2xl font-semibold text-zinc-950 dark:text-zinc-50">
						{dictionary.home.nativeTitle}
					</h2>
					<p className="mt-3 leading-7 text-zinc-600 dark:text-zinc-400">
						{dictionary.home.nativeParagraph}
					</p>
					<ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
						{dictionary.home.nativeTips.map((tip) => (
							<li key={tip} className="flex gap-3">
								<span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
								<span>{tip}</span>
							</li>
						))}
					</ul>
				</div>

				<div className="rounded-3xl border border-zinc-200 bg-zinc-950 p-6 text-zinc-50">
					<h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-400">
						{dictionary.home.nativeCodeTitle}
					</h3>
					<pre className="mt-4 overflow-x-auto rounded-2xl bg-black/40 p-4 text-xs leading-6 text-zinc-100">
						<code>{`<img
  src="/hero.jpg"
  alt="Product detail"
  width="1200"
  height="800"
  loading="lazy"
  decoding="async"
  style={{ width: "100%", height: "auto", aspectRatio: "3 / 2" }}
/>`}</code>
					</pre>
				</div>
			</section>

			<section className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900/40">
				<h2 className="text-2xl font-semibold text-zinc-950 dark:text-zinc-50">
					{dictionary.home.placeholderTitle}
				</h2>
				<div className="mt-4 grid gap-4 text-sm leading-7 text-zinc-600 dark:text-zinc-400 lg:grid-cols-2">
					{dictionary.home.placeholderParagraphs.map((paragraph) => (
						<p key={paragraph}>{paragraph}</p>
					))}
				</div>
			</section>
		</article>
	);
}
