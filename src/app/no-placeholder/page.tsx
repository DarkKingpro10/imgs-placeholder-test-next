import HeaderPage from "@/shared/ui/header-page";
import Image from "next/image";

export const dynamic = "force-dynamic";
export const metadata = {
	title: "No Image Placeholder in Next.js | UX Impact & Performance Trade-offs",
	description:
		"Explore how rendering images without placeholders affects user experience and perceived performance in Next.js. Learn why empty loading states can hurt UX and how simple placeholders improve it.",
	keywords: [
		"Next.js Image",
		"no placeholder images",
		"image loading UX",
		"perceived performance",
		"web performance optimization",
		"lazy loading images",
		"Next.js performance tips",
	],
	openGraph: {
		title: "No Placeholder vs Placeholder in Next.js",
		description:
			"A real-world example of image loading without placeholders and its impact on perceived performance and UX.",
		type: "article",
	},
	alternates: {
		canonical: "/no-placeholder",
	},
};

export default function Page() {
	return (
		<>
			<HeaderPage title="No Placeholder" />
			<section className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-4">
				{Array.from({ length: 12 }).map((_, i) => (
					<div
						key={i}
						className="aspect-square overflow-hidden rounded-xl hover:shadow-lg/50  hover:-translate-y-1 transition-all duration-300 ease-out dark:hover:shadow-amber-50 "
					>
						<Image
							src={`/api/slow-image?seed=${i}`}
							alt={`Random image ${i}`}
							className="w-full object-cover hover:scale-105 transition-transform duration-300 ease-out"
							width={300}
							height={200}
							unoptimized
						/>
					</div>
				))}
			</section>
			<section id="explanation">
				<h2 className="text-3xl font-bold">
					Explanation of the image gallery without placeholders.
				</h2>
				<p>
					When no placeholder is used, the image area remains visually empty
					while the resource is loading. Although the layout is already rendered
					and space is reserved, the absence of visual feedback creates a
					perception that the page lacks content or has not finished loading.
				</p>

				<p>
					This empty state can negatively impact perceived performance. Users
					often interpret blank areas as a sign of slowness or incomplete
					rendering, even when the actual loading time is acceptable. The sudden
					appearance of images once they finish loading can also feel abrupt and
					visually jarring.
				</p>

				<p>
					From a technical perspective, this approach is efficient because it
					introduces no additional processing, markup, or network overhead.
					However, the trade-off is purely experiential: while performance
					metrics may remain optimal, the lack of intermediate visual feedback
					leads to a weaker user experience.
				</p>

				<p>
					In practice, this approach is rarely ideal for image-heavy interfaces.
					Even a simple static placeholder can significantly improve perceived
					responsiveness without adding meaningful cost, making the “no
					placeholder” strategy generally the least favorable option among
					modern image loading techniques.
				</p>
			</section>
		</>
	);
}
