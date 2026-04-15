import HeaderPage from "@/shared/ui/header-page";
import { generateBlurPlaceholderSVG } from "@/shared/utils/utils";
import { Metadata } from "next";
import Image from "next/image";

const metadata: Metadata = {
	title: "Static Placeholder",
	description:
		"This page shows a static placeholder that is pre-configured and doesn't change, this technique is the most basic and simple to implement, but it doesn't provide a good user experience since the placeholder doesn't match the image that is going to be loaded, this can be solved by using a more advanced technique like skeleton or blur placeholders",
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
					When no placeholder is used, the image area remains visually empty
					while the resource is loading. This creates a perception that the page
					has little or no content, even though the layout has already been
					rendered. Because there is no visual feedback during the loading
					phase, users may interpret the interface as incomplete or slow. The
					content suddenly appears only after each image finishes loading, which
					can feel abrupt and negatively affect the overall user experience.
					Placeholders help bridge this gap by reserving visual space and
					providing a preview or loading state, making the interface feel faster
					and more responsive even if the actual loading time remains the same.
				</p>
			</section>
		</>
	);
}
