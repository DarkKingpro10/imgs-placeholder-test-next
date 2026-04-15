import HeaderPage from "@/shared/ui/header-page";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default function Page() {
	return (
		<>
			<HeaderPage title="No Placeholder"/>
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
