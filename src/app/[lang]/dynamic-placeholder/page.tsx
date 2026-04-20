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
	const imageSeeds = Array.from({ length: 6 }, (_, index) => 9 + index);

	// Código de ejemplo usado en la explicación — mantener como literal aquí (no i18n)
	const serverSnippet = `import { getPlaiceholder } from 'plaiceholder';
import { generateBlurPlaceholderSVG } from '@/shared/utils/utils';

export async function getBlurPlaceholderImage(src) {
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
}`;
	return (
		<>
			<HeaderPage
				title={dictionary.dynamicPlaceholder.title}
				description={dictionary.dynamicPlaceholder.description}
				linkLabel={dictionary.dynamicPlaceholder.linkLabel}
				reloadLabel={dictionary.dynamicPlaceholder.reloadLabel}
			/>
			<h3 className="text-xl">0 tricks</h3>
			<section className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-4">
				{imageSeeds.map((seed) => (
					<div
						key={seed}
						className="relative aspect-square overflow-hidden rounded-xl transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg/50 dark:hover:shadow-amber-50"
					>
						<PlaiceholderImage
							withTrick
							fill
							seed={seed}
							alt={`Random image ${seed}`}
							className="object-cover transition-transform duration-300 ease-out hover:scale-105"
							loading="lazy"
							
						/>
					</div>
				))}
			</section>
			<h3 className="text-xl">Lag trick</h3>
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
			<section id="explanation" className="my-8">
				{(() => {
					const d = dictionary.dynamicPlaceholder.detailed;
					const advTitle = lang === "es" ? "Ventajas" : "Advantages";
					const disTitle = lang === "es" ? "Desventajas / Consideraciones" : "Disadvantages / Considerations";

					return (
						<article className="max-w-4xl mx-auto px-4 sm:px-0 text-zinc-800 dark:text-zinc-200">
							<header className="mb-8 border-b border-zinc-300 dark:border-zinc-700 pb-4">
								<h2 className="text-4xl font-extrabold tracking-tight mb-2">{dictionary.dynamicPlaceholder.explanationTitle}</h2>
								{/* Párrafos intro originales */}
								{dictionary.dynamicPlaceholder.paragraphs.map((paragraph, idx) => (
									<p key={idx} className="text-lg text-zinc-600 dark:text-zinc-400 font-normal mb-2">{paragraph}</p>
								))}
								<p className="text-lg text-zinc-600 dark:text-zinc-400 font-normal mt-4">{d.intro}</p>
							</header>

							<section className="mb-8">
								<h3 className="text-2xl font-bold mb-2 text-amber-700 dark:text-amber-400">{lang === "es" ? "Resumen del truco aplicado" : "Trick summary"}</h3>
								<p className="text-base leading-7">{d.trickSummary}</p>
							</section>

							<section className="mb-8">
								<h3 className="text-2xl font-bold mb-2 text-sky-700 dark:text-sky-400">{lang === "es" ? "Cómo funciona el placeholder y el blur" : "How the placeholder and blur work"}</h3>
								<p className="text-base leading-7">{d.howItWorks}</p>
							</section>

							<section className="mb-8">
								<h4 className="text-lg font-semibold mb-2 text-fuchsia-700 dark:text-fuchsia-400">{lang === "es" ? "Fragmento de implementación (servidor)" : "Server implementation snippet"}</h4>
								<div className="relative bg-zinc-900 rounded-lg p-4 overflow-x-auto mb-2">
									<pre className="whitespace-pre-wrap break-words font-mono text-xs text-zinc-100"><code aria-label="server-snippet">{serverSnippet}</code></pre>
								</div>
								<p className="text-xs text-zinc-500 italic mb-0">{lang === "es" ? "Este fragmento muestra cómo se genera el blurDataURL en el backend para el placeholder." : "This snippet shows how to generate the blurDataURL on the backend for the placeholder."}</p>
								{/* Nota traducida desde el diccionario */}
								<p className="text-base leading-7 mt-4">{d.libraryNote}</p>
								<p className="text-base leading-7 mt-2">{d.implementationNote}</p>
							</section>

							<section className="mb-8">
								<h3 className="text-2xl font-bold mb-2 text-emerald-700 dark:text-emerald-400">{lang === "es" ? "El papel del Buffer" : "The role of the Buffer"}</h3>
								<p className="text-base leading-7">{d.bufferExplanation}</p>
							</section>

							<section className="mb-8">
								<h3 className="text-2xl font-bold mb-4 text-indigo-700 dark:text-indigo-400">{d.evaluationTitle || (lang === "es" ? "Evaluación: ¿usar esta librería?" : "Evaluation: use a library?")}</h3>
								<div className="flex flex-col md:flex-row gap-6">
									<div className="flex-1 bg-emerald-50 dark:bg-emerald-900/30 rounded-lg p-4 border border-emerald-200 dark:border-emerald-700">
										<h4 className="font-bold text-emerald-700 dark:text-emerald-300 mb-2">{advTitle}</h4>
										<ul className="list-disc list-inside space-y-2">
											{d.advantages.map((a, i) => (
												<li key={i} className="text-sm leading-6">{a}</li>
											))}
										</ul>
									</div>
									<div className="flex-1 bg-rose-50 dark:bg-rose-900/30 rounded-lg p-4 border border-rose-200 dark:border-rose-700">
										<h4 className="font-bold text-rose-700 dark:text-rose-300 mb-2">{disTitle}</h4>
										<ul className="list-disc list-inside space-y-2">
											{d.disadvantages.map((di, i) => (
												<li key={i} className="text-sm leading-6">{di}</li>
											))}
										</ul>
									</div>
								</div>
							</section>

							<section className="mb-8">
								<h4 className="text-lg font-semibold mb-2 text-orange-700 dark:text-orange-400">{lang === "es" ? "Impacto en costes" : "Cost impact"}</h4>
								<p className="text-base leading-7">{d.costsImpact}</p>
							</section>

							{d.bestPractices && (
								<section className="mb-8">
									<h4 className="text-lg font-semibold mb-2 text-blue-700 dark:text-blue-400">{lang === "es" ? "Prácticas recomendadas" : "Best practices"}</h4>
									<ul className="list-disc list-inside space-y-2">
										{d.bestPractices.map((bp: string, i: number) => (
											<li key={i} className="text-sm leading-6">{bp}</li>
										))}
									</ul>
								</section>
							)}

							{d.recommendation && (
								<section className="mb-8">
									<div className="rounded-lg bg-amber-100 dark:bg-amber-900/30 border-l-4 border-amber-400 p-4">
										<h4 className="text-lg font-bold text-amber-700 dark:text-amber-300 mb-1">{lang === "es" ? "Recomendación" : "Recommendation"}</h4>
										<p className="font-semibold text-base leading-6">{d.recommendation}</p>
									</div>
								</section>
							)}

							<section className="mb-8">
								<h4 className="text-lg font-semibold mb-2 text-zinc-700 dark:text-zinc-200">{lang === "es" ? "Conclusión" : "Conclusion"}</h4>
								<p className="text-base leading-7">{d.conclusion}</p>
							</section>
						</article>
							);
						})()}
			</section>
		</>
	);
}
