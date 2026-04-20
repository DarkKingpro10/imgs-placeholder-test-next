"use client";

import Image, { type ImageProps } from "next/image";

type Props = Omit<ImageProps, "src" | "placeholder" | "blurDataURL" | "alt"> & {
	seed: number;
	alt?: string;
};

export default function ImageWithSkeleton({ seed, alt, ...props }: Props) {
	return (
		<div
			data-loaded="false"
			className="group relative aspect-square overflow-hidden rounded-xl transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg/50 dark:hover:shadow-amber-50"
		>
			{/* 
        Skeleton layer:
        - Covers the entire container while the image is loading
        - Uses a shimmer effect (animated gradient) instead of a simple pulse
        - Fades out when data-loaded="true"
      */}
			<div className="absolute inset-0 overflow-hidden rounded-xl bg-gray-300 dark:bg-gray-700 transition-opacity duration-500 group-data-[loaded=true]:opacity-0">
				<div className="animate-shimmer absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent dark:via-white/10" />
			</div>

			{/* 
        Next.js Image:
        - Starts invisible (opacity-0)
        - Becomes visible when the container gets data-loaded="true"
        - onLoadingComplete updates the parent attribute instead of using React state
      */}
			<Image
				fill
				src={`/api/slow-image?seed=${seed}`}
				alt={alt ?? `Random image ${seed}`}
				sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				className="object-cover opacity-0 transition-opacity duration-500 group-data-[loaded=true]:opacity-100"
				loading="lazy"
				unoptimized
				onLoadingComplete={(img) => {
					// When the image finishes loading, mark container as loaded
					img.closest("div")?.setAttribute("data-loaded", "true");
				}}
				onError={(img) => {
					// Prevent skeleton from staying forever if image fails
					img.currentTarget.closest("div")?.setAttribute("data-loaded", "true");
				}}
				{...props}
			/>
		</div>
	);
}
