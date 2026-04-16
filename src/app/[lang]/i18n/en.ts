const en = {
	nav: {
		home: "Home",
		noPlaceholder: "No placeholder",
		static: "Static",
		dynamicPlaceholder: "Dynamic",
		switchTo: "Español",
	},
	home: {
		eyebrow: "Internationalized image demo",
		title: "Compare image loading strategies in English or Spanish.",
		description:
			"This small gallery shows the difference between loading images without a placeholder and using a static SVG placeholder. Switch languages from the top navigation and the routes will stay localized.",
		primaryCta: "Open no-placeholder gallery",
		secondaryCta: "Open static placeholder gallery",
		featureTitle: "What is translated",
		features: [
			"Navigation labels",
			"Page headings and explanatory text",
			"Reload button labels",
		],
	},
	noPlaceholder: {
		title: "Image Gallery - No placeholder",
		description:
			"The grid stays empty while each image loads, which makes the page feel unfinished even though the layout is already in place.",
		linkLabel: "See explanation",
		reloadLabel: "Reload page",
		explanationTitle: "Explanation of the image gallery without placeholders.",
		paragraphs: [
			"When no placeholder is used, the image area remains visually empty while the resource is loading. This creates a perception that the page has little or no content, even though the layout has already been rendered.",
			"Because there is no visual feedback during the loading phase, users may interpret the interface as incomplete or slow. The content suddenly appears only after each image finishes loading, which can feel abrupt and negatively affect the overall user experience.",
			"Placeholders help bridge this gap by reserving visual space and providing a preview or loading state, making the interface feel faster and more responsive even if the actual loading time remains the same.",
		],
		metaTitle: "Image Gallery Without Placeholder | UX analysis",
		metaDescription:
			"Learn how an empty loading state affects perceived performance and why placeholders improve the experience.",
	},
	static: {
		title: "Image Gallery - Static SVG",
		description:
			"A simple embedded SVG gives each image a visible loading state without adding an extra request.",
		linkLabel: "See explanation",
		reloadLabel: "Reload page",
		explanationTitle: "Explanation of the image gallery with a static SVG.",
		paragraphs: [
			"Compared to not having a placeholder, a static placeholder represents a meaningful improvement. Because it is pre-generated and embedded as a small base64-encoded SVG, it does not introduce additional network requests.",
			"This means it appears instantly, providing immediate visual feedback without adding runtime overhead. From a performance and SEO perspective, this makes static placeholders a very efficient solution: they improve perceived loading speed while keeping the actual loading cost effectively unchanged.",
			"However, static placeholders are still a compromise. Since they do not reflect the actual image content, they can feel generic and disconnected from what is about to load. More advanced techniques, such as blur placeholders generated from the real image or dominant color extraction, offer a more cohesive and visually accurate experience.",
			"In practice, static placeholders are best understood as a low-cost enhancement: they are significantly better than having no placeholder at all, especially when prioritizing simplicity, performance, and SEO.",
		],
		metaTitle: "Image Gallery With Static Placeholder | UX analysis",
		metaDescription:
			"Compare a static SVG placeholder with an empty loading state and see why the visual fallback helps.",
	},
	dynamicPlaceholder: {
		title: "Image Gallery - Dynamic Placeholder",
		description:
			"Each tile uses a blur placeholder generated from the real image with plaiceholder.",
		linkLabel: "See explanation",
		reloadLabel: "Reload page",
		explanationTitle:
			"Explanation of the image gallery with a dynamic blur placeholder.",
		paragraphs: [
			"This demo uses a placeholder generated from the actual image source instead of a generic SVG. The blur preview is derived from the real asset, which makes the loading state feel closer to the final content.",
			"To simulate a real API list, the page iterates over a stable set of image ids and each tile fetches its corresponding image from picsum.photos. That way the gallery behaves like a predictable dataset, but the placeholders are still computed dynamically.",
			"This approach is useful when you want the perceived quality of a blur placeholder without handcrafting static images. It is more expensive than a plain SVG placeholder, but it usually gives a better visual match.",
		],
		metaTitle: "Image Gallery With Dynamic Placeholder | UX analysis",
		metaDescription:
			"See how plaiceholder creates blur placeholders from the real image and compare the loading experience.",
	},
} as const;

export default en;