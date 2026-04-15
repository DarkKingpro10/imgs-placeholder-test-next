import HeaderPage from "@/shared/ui/header-page";
import { generateBlurPlaceholderSVG } from "@/shared/utils/utils";
import { Metadata } from "next";
import Image from "next/image";

export const metadata = {
	title: "Image Gallery Without Placeholder | UX & Performance Analysis",
	description:
		"Learn the impact of not using image placeholders in Next.js. Understand how empty loading states affect UX, perceived performance, and why static placeholders can be a zero-cost improvement.",
	keywords: [
		"Next.js images",
		"no placeholder",
		"image loading UX",
		"web performance",
		"SEO optimization",
		"lazy loading images",
		"image placeholders comparison",
	],
	openGraph: {
		title: "No Placeholder vs Static Placeholder in Next.js",
		description:
			"A practical comparison showing how skipping placeholders impacts user experience and perceived performance in image-heavy interfaces.",
		type: "article",
	},
};

// Static placeholders are pre-configured and don't change. Generate a larger,
// simple gradient placeholder to reduce scaling artefacts and avoid dark/vignette corners.
// Pass custom colors that look good on the current site (soft light grays for a "loading" effect).
const PRODUCT_BLUR_DATA_URL = generateBlurPlaceholderSVG();

export default function StaticPlaceholder() {
	return (
		<>
			<HeaderPage title="Static SVG" />
			<section className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-4">
				{Array.from({ length: 12 }).map((_, i) => (
					<div
						key={i}
						className="relative aspect-square overflow-hidden rounded-xl hover:shadow-lg/50  hover:-translate-y-1 transition-all duration-300 ease-out dark:hover:shadow-amber-50 "
					>
						<Image
							fill
							src={`/api/slow-image?seed=${i}`}
							alt={`Random image ${i}`}
							className="object-cover hover:scale-105 transition-transform duration-300 ease-out"
							placeholder="blur"
							blurDataURL={PRODUCT_BLUR_DATA_URL}
							loading="lazy"
							unoptimized
						/>
					</div>
				))}
			</section>
			<section id="explanation">
				<h2 className="text-3xl font-bold">
					Explanation of the image gallery with a static SVG.
				</h2>
				<p>
					Compared to not having a placeholder, a static placeholder represents
					a meaningful improvement. Because it is pre-generated and embedded
					(for example, as a small base64-encoded SVG), it does not introduce
					additional network requests. This means it appears instantly,
					providing immediate visual feedback without adding runtime overhead.
					From a performance and SEO perspective, this makes static placeholders
					a very efficient solution: they improve perceived loading speed while
					keeping the actual loading cost effectively unchanged.
				</p>

				<p>
					However, static placeholders are still a compromise. Since they do not
					reflect the actual image content, they can feel generic and
					disconnected from what is about to load. More advanced techniques—such
					as blur placeholders generated from the real image or dominant color
					extraction—offer a more cohesive and visually accurate experience.
					These approaches improve perceived quality but may require additional
					processing or build-time computation.
				</p>

				<p>
					In practice, static placeholders are best understood as a low-cost
					enhancement: they are significantly better than having no placeholder
					at all, especially when prioritizing simplicity, performance, and SEO.
					However, they are not the most refined solution available and are
					typically outperformed by more dynamic or content-aware placeholder
					strategies.
				</p>
			</section>
		</>
	);
}
