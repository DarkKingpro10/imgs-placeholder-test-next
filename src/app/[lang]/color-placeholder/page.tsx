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
		title:
			lang === "es"
				? "Galería - Placeholder por color"
				: "Gallery - Color placeholder",
		description:
			lang === "es"
				? "Cada tarjeta usa el color dominante como fondo hasta que se carga la imagen."
				: "Each tile uses the dominant color as background until the image loads.",
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
				console.log(`Color for seed ${seed}:`, color);
				return color?.hex ?? "#080808";
			} catch {
				return "#e5e7eb";
			}
		}),
	);

	const title =
		lang === "es"
			? "Galería - Placeholder por color"
			: "Image Gallery - Color placeholder";
	const description =
		lang === "es"
			? "Cada tarjeta muestra el color dominante como fondo mientras la imagen carga. Cuando la imagen termina de cargar, el color queda oculto bajo la imagen."
			: "Each tile shows the dominant color as background while the image loads. Once the image finishes loading the color is hidden under the image.";

	const compareParagraph =
		lang === "es"
			? "Comparado con un placeholder base64 (miniatura borrosa), el placeholder por color es extremadamente ligero y no añade bytes inline; sin embargo ofrece menos información visual sobre la imagen final. Es ideal cuando quieres feedback visual mínimo sin costear generación de miniaturas."
			: "Compared to a base64 blur placeholder, a color placeholder is extremely lightweight and adds no inline bytes; however it conveys less visual information about the final image. It's ideal when you want minimal visual feedback without the cost of generating thumbnails.";

	return (
		<>
			<HeaderPage
				title={title}
				description={description}
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

			<section id="explanation" className="space-y-4 mt-6">
				<h2 className="text-3xl font-bold">
					{lang === "es" ? "Explicación: Placeholder por color" : "Explanation: Color placeholder"}
				</h2>

				{dictionary.static.paragraphs.map((p, i) => (
					<p key={i} className="max-w-4xl leading-7 text-zinc-700 dark:text-zinc-300">{p}</p>
				))}

				<p className="max-w-4xl leading-7 text-zinc-700 dark:text-zinc-300">{compareParagraph}</p>

				{/* Nota tomada del diccionario */}
				<div className="max-w-4xl">
					<p className="mt-4 max-w-4xl leading-7 text-zinc-700 dark:text-zinc-300">{dictionary.colorPlaceholder.note}</p>

					<h4 className="text-lg font-semibold mt-4 mb-2 text-fuchsia-700 dark:text-fuchsia-400">{dictionary.colorPlaceholder.snippetTitle}</h4>
					<div className="relative bg-zinc-900 rounded-lg p-4 overflow-x-auto my-4">
						<pre className="whitespace-pre-wrap break-words font-mono text-xs text-zinc-100">
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
