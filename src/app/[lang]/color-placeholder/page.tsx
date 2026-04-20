import HeaderPage from "@/shared/ui/header-page";
import { getBlurPlaceholderImage } from "@/shared/utils/utils";
import type { Metadata } from "next";
import Image from "next/image";
import { getDictionary, hasLocale, Locale } from "../dictionaries";

export async function generateMetadata({
	params,
}: Readonly<{ params: Promise<{ lang: string }> }>): Promise<Metadata> {
	const { lang } = await params;

	if (!hasLocale(lang)) return {};

	const dictionary = await getDictionary(lang as Locale);

	return {
		title: dictionary.colorPlaceholder.title,
		description: dictionary.colorPlaceholder.description,
	};
}

export default async function ColorPlaceholder({
	params,
}: Readonly<{ params: Promise<{ lang: Locale }> }>) {
	const { lang } = await params;
	const dictionary = await getDictionary(lang);

	const seeds = Array.from({ length: 12 }).map((_, i) => i);

	const colors = await Promise.all(
		seeds.map(async (seed) => {
			try {
				const src = `https://picsum.photos/id/${seed}/200/300`;
				const { color } = await getBlurPlaceholderImage(src);
				return color?.hex ?? "#080808";
			} catch {
				return "#e5e7eb";
			}
		}),
	);

	return (
		<>
			<HeaderPage
				title={dictionary.colorPlaceholder.title}
				description={dictionary.colorPlaceholder.description}
				linkLabel={lang === "es" ? "Ver explicación" : "See explanation"}
				reloadLabel={lang === "es" ? "Recargar página" : "Reload page"}
			/>

			<section className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-4">
				{seeds.map((seed, idx) => (
					<div
						key={seed}
						className="relative aspect-square overflow-hidden rounded-xl transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg/50 dark:hover:shadow-amber-50"
						style={{ backgroundColor: colors[idx] }}
					>
						<Image
							fill
							src={`/api/slow-image?seed=${seed}`}
							alt={`Random image ${seed}`}
							className="object-cover transition-transform duration-300 ease-out hover:scale-105"
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							loading="lazy"
							unoptimized
						/>
					</div>
				))}
			</section>

			<section id="explanation" className="mt-6 space-y-4">
				<h2 className="text-3xl font-bold">{dictionary.colorPlaceholder.explanationTitle}</h2>

				{dictionary.colorPlaceholder.paragraphs.map((paragraph, index) => (
					<p key={index} className="max-w-4xl leading-7 text-zinc-700 dark:text-zinc-300">{paragraph}</p>
				))}

				<p className="max-w-4xl leading-7 text-zinc-700 dark:text-zinc-300">{dictionary.colorPlaceholder.compareParagraph}</p>

				{/* Nota tomada del diccionario */}
				<div className="max-w-4xl">
					<p className="mt-4 max-w-4xl leading-7 text-zinc-700 dark:text-zinc-300">{dictionary.colorPlaceholder.note}</p>

					<h4 className="text-lg font-semibold mt-4 mb-2 text-fuchsia-700 dark:text-fuchsia-400">{dictionary.colorPlaceholder.snippetTitle}</h4>
					<div className="relative mt-4 overflow-x-auto rounded-lg bg-zinc-900 p-4">
						<pre className="whitespace-pre-wrap font-mono text-xs text-zinc-100">
							<code>{`export async function getBlurPlaceholderImage(src) {
	try {
		const buffer = await fetch(src).then(async (res) => Buffer.from(await res.arrayBuffer()));
		const { base64, color } = await getPlaiceholder(buffer, { size: 10 });
		return { base64, color };
	} catch (error) {
		return {
			base64: generateBlurPlaceholderSVG(),
			color: { r: 229, g: 231, b: 235, hex: '#e5e7eb' },
		};
	}
}`}</code>
						</pre>
					</div>
				</div>
			</section>
		</>
	);
}
