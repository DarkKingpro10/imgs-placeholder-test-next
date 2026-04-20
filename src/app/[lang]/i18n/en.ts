const en = {
	nav: {
		home: "Home",
		noPlaceholder: "No placeholder",
		static: "Static",
		dynamicPlaceholder: "Dynamic",
		switchTo: "Español",
		colorPlaceholder: "Dynamic color",
		skeleton: "Skeleton",
		localeSwitcherLabel: "Select language",
	},
	home: {
		eyebrow: "Internationalized image demo",
		title: "Responsive images, placeholders, and loading UX",
		description:
			"Start here if you want a practical guide to responsive images. The article focuses on Next.js Image features like fill and sizes, then shows how the same sizing rules can be reproduced with plain HTML and CSS on any stack.",
		primaryCta: "Read the guide",
		secondaryCta: "Jump to demos",
		featureTitle: "What this post covers",
		features: [
			"Aspect ratio first, always",
			"How sizes changes Next.js image output",
			"What to do when you do not use Next.js",
		],
		metaTitle: "Responsive Image Guide | Placeholder Strategies",
		metaDescription:
			"Practical guidance for responsive images, Next.js sizes, and placeholder strategies that improve perceived performance without sacrificing layout stability.",
		introTitle: "Build the layout before the image arrives",
		introParagraphs: [
			"A responsive image workflow starts with space reservation. If the browser knows the aspect ratio up front, it can render stable cards, hero sections, and galleries without layout shifts when the asset finally loads.",
			"Placeholders matter because they bridge the gap between rendered layout and final pixels. They do not make the file arrive faster, but they make the interface feel intentional while the real image downloads.",
		],
		nextJsTitle: "Next.js: use fill, sizes, and explicit ratios",
		nextJsParagraph:
			"With Next.js, the most reliable pattern is to wrap the image in a container with a defined aspect ratio, use fill when the image should cover the box, and describe the viewport behavior with sizes so the browser can pick the right resource.",
		nextJsTips: [
			"Use aspect ratio on the wrapper so the browser reserves the correct space before the image finishes loading.",
			"Add sizes whenever the rendered width changes across breakpoints; it helps the browser choose the right candidate instead of downloading something too large.",
			"Use placeholder blur or a color placeholder when the visual weight of the image matters and you want a softer loading state.",
		],
		nextJsCodeTitle: "Next.js example",
		nativeTitle: "Without Next.js: keep the same rules",
		nativeParagraph:
			"The same ideas apply outside Next.js. Reserve dimensions with width and height or CSS aspect-ratio, use srcset and sizes for responsive selection, and keep loading lazy for below-the-fold content.",
		nativeTips: [
			"Set width and height or aspect-ratio so the browser can calculate layout before the image loads.",
			"Use srcset plus sizes for responsive delivery; without them, small screens often download oversized files.",
			"Prefer loading=\"lazy\" and decoding=\"async\" for non-critical images, but keep above-the-fold assets direct and predictable.",
		],
		nativeCodeTitle: "Plain HTML example",
		placeholderTitle: "Where placeholders fit",
		placeholderParagraphs: [
			"A placeholder should support the layout, not replace it. The best versions respect the same ratio as the final asset and keep the user oriented while the real image arrives.",
			"If you combine placeholders with strong sizing rules, you get a stable interface, a better perceived load, and less visual jumping when content appears.",
		],
		checklistTitle: "Practical checklist",
		checklistItems: [
			"Reserve space with aspect ratio, width/height, or both.",
			"Use sizes in Next.js whenever the image is not a fixed pixel width.",
			"Choose placeholders that match the content density of the page.",
			"Measure CLS and LCP instead of guessing.",
		],
		closingTitle: "Start with the layout, then optimize delivery",
		closingParagraph:
			"That order is what makes image-heavy pages feel fast. First reserve space, then choose the right responsive source, and only after that decide whether a blur, color, or skeleton placeholder adds value.",
		plaiceholderTitle: "Why we use Plaiceholder",
		plaiceholderParagraph:
			"Plaiceholder is useful because it works outside Next.js too. In this project I chose a native server-side implementation instead of the Next-specific integration because that package mutates Next.js config internally and the library is effectively feature-complete, so I wanted more control over the setup. The docs are here if you want to compare approaches.",
		plaiceholderLinkLabel: "Read Plaiceholder docs",
		plaiceholderLinkHref: "https://plaiceholder.co/docs",
		recommendationTitle: "How to test the demos",
		recommendationMobile:
			"On mobile, use the reload button on each demo to clear the image cache before comparing states.",
		recommendationDesktop:
			"On desktop, use the same reload step. If the transition still feels too fast, slow the network in DevTools with a profile like Slow 3G.",
		recommendationReason:
			"We add a small artificial delay to image requests by default so placeholders, blur states, and loading transitions stay visible during demos. Without that delay, fast connections can make the effect almost impossible to notice.",
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
		introTitle: "Why this fallback works",
		introParagraphs: [
			"A static SVG placeholder is a good middle ground when you want a visible loading state without fetching an extra asset. It keeps the card stable, gives the eye something to read, and avoids the blank feel of an empty image slot.",
			"It is not content-aware, so it should stay simple. The strength of this approach is predictability: small payload, immediate paint, and almost no moving pieces.",
		],
		exampleTitle: "Practical Next.js example",
		exampleNote:
			"Use the same aspect ratio as the final media, keep sizes accurate, and feed blurDataURL with a compact SVG or generated data URL. This can live in a function like generateBlurPlaceholderSVG or in a static object when you want one fixed fallback for every image.",
		exampleCode: `<div className=\"relative aspect-square overflow-hidden rounded-xl\">\n  <Image\n    src=\"/api/slow-image?seed=1\"\n    alt=\"Cover image\"\n    fill\n    sizes=\"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw\"\n    placeholder=\"blur\"\n    blurDataURL={PRODUCT_BLUR_DATA_URL}\n    className=\"object-cover\"\n  />\n</div>`,
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
	skeleton: {
		title: "Gallery - Skeleton loading",
		description:
			"Each image shows a skeleton until it finishes loading, providing a consistent layout and visual feedback during loading.",
		linkLabel: "See explanation",
		reloadLabel: "Reload page",
		metaTitle: "Gallery with Skeleton Loading | UX analysis",
		metaDescription:
			"Explore skeleton loading for images and trade-offs compared with other placeholder techniques.",
		introTitle: "Why skeletons stay useful",
		introParagraphs: [
			"Skeletons are strong when the content shape matters more than a preview of the content itself. They reserve the frame, reduce the feeling of emptiness, and work well when images load in batches.",
			"This page keeps the implementation small on purpose: browser state handles the transition, so the visual logic stays simple and predictable.",
		],
		exampleTitle: "Implementation example",
		exampleNote:
			"The real mechanism is data-loaded plus the image callbacks. onLoadingComplete flips the parent container to data-loaded=\"true\" and onError does the same so the skeleton never stays forever.",
		exampleCode: `<div data-loaded=\"false\" className=\"group relative aspect-square overflow-hidden rounded-xl\">\n  <div className=\"absolute inset-0 bg-gray-300 transition-opacity group-data-[loaded=true]:opacity-0\" />\n  <Image\n    fill\n    src={\`/api/slow-image?seed=${12}\`}\n    alt=\"Random image 12\"\n    className=\"object-cover opacity-0 transition-opacity group-data-[loaded=true]:opacity-100\"\n    onLoadingComplete={(img) => {\n      img.closest(\"div\")?.setAttribute(\"data-loaded\", \"true\");\n    }}\n    onError={(img) => {\n      img.currentTarget.closest(\"div\")?.setAttribute(\"data-loaded\", \"true\");\n    }}\n  />\n</div>`,
		overviewTitle: "What is this approach?",
		overviewParagraphs: [
			"This technique uses the Image component from Next.js combined with DOM attributes (data-*) to control the loading state.",
			"Instead of using React state, the image updates its parent container once it has finished loading, allowing CSS to handle the transition.",
		],
		howItWorksTitle: "How it works",
		howItWorksList: [
			"A skeleton layer is rendered on top of the image.",
			"The container starts with data-loaded=\"false\".",
			"When the image finishes loading, the attribute updates.",
			"CSS transitions fade out the skeleton and reveal the image.",
		],
		visualHint: "This avoids React re-renders completely and delegates the visual state to the browser, making it efficient for large grids.",
		prosTitle: "Advantages",
		prosList: [
			"No React state → fewer re-renders",
			"Great for large image grids",
			"Smooth loading experience",
			"Simple and reusable",
		],
		tradeoffsTitle: "Trade-offs",
		tradeoffsList: [
			"No image preview (just skeleton)",
			"Requires small DOM manipulation",
			"Less rich than blur placeholders",
		],
		seoTitle: "SEO impact",
		seoParagraphs: [
			"This approach does not negatively affect SEO. The actual image is still rendered in the DOM, and search engines can crawl it normally as long as proper alt attributes are provided.",
			"Since the skeleton is only a visual layer, it does not interfere with indexing. Additionally, using Next.js ensures optimized image delivery, which can positively impact Core Web Vitals like LCP.",
		],
		comparisonTitle: "When to use this",
		comparisonParagraphs: [
			"Ideal for dynamic content such as galleries, feeds, or dashboards where images are loaded frequently and performance matters.",
			"If you need more visually accurate previews, consider blur placeholders or tools like Plaiceholder. For simplicity and scalability, skeleton loading is often the best trade-off.",
		],
	},
	colorPlaceholder: {
		title: "Gallery - Color placeholder",
		description:
			"Each card uses the dominant color as a loading backdrop until the full image arrives.",
		explanationTitle: "Why a color placeholder helps",
		paragraphs: [
			"A color placeholder is the lightest visual fallback you can use for an image. It reserves the shape of the card, paints the dominant tone immediately, and keeps the page from feeling empty while the asset is still loading.",
			"It is less descriptive than a blur placeholder, but it is often the best trade-off when you want a stable layout with almost no extra payload or processing cost.",
		],
		compareParagraph:
			"Compared with a blur placeholder, a color placeholder is extremely lightweight and adds no inline bytes. It gives less information about the final image, but it is a good fit when you want minimal visual feedback and the lightest possible loading treatment.",
		note: "Note: this view attempts to generate placeholders with the 'plaiceholder' library. In some tests the library returns only the dominant color instead of a blurred thumbnail (single-color result). The library is feature-complete and won't receive further updates. For that reason we implemented a native server-side helper `getBlurPlaceholderImage` instead of exporting `export default withPlaiceholder(config);`. If you prefer to touch Next.js internals, use the Next-specific package provided by the library. I recommend using the native helper for better control and to avoid coupling your code to an unmaintained library.",
		snippetTitle: "Server implementation example",
	},
	dynamicPlaceholder: {
		title: "Image Gallery - Dynamic Placeholder",
		description:
			"Each tile uses a blur placeholder generated from the real image with plaiceholder.",
		linkLabel: "See explanation",
		reloadLabel: "Reload page",
		explanationTitle:
			"Explanation of the image gallery with a dynamic blur placeholder.",
		heroTitle: "Why the blur feels closer to the final asset",
		heroParagraph:
			"This demo uses a placeholder derived from the real image, so the loading state feels connected to the final content instead of looking generic. The base64 result produced on the server is passed straight into blurDataURL.",
		listTitle: "What this setup demonstrates",
		listItems: [
			"Real-image derived blurDataURL",
			"A deterministic image set for comparison",
			"Delay added only to make the transition visible during demo",
		],
		paragraphs: [
			"This demo uses a placeholder generated from the actual image source instead of a generic SVG. The blur preview is derived from the real asset, which makes the loading state feel closer to the final content.",
			"To simulate a real API list, the page iterates over a stable set of image ids and each tile fetches its corresponding image from picsum.photos. That way the gallery behaves like a predictable dataset, but the placeholders are still computed dynamically.",
			"This approach is useful when you want the perceived quality of a blur placeholder without handcrafting static images. It is more expensive than a plain SVG placeholder, but it usually gives a better visual match.",
		],
		metaTitle: "Image Gallery With Dynamic Placeholder | UX analysis",
		metaDescription:
			"See how plaiceholder creates blur placeholders from the real image and compare the loading experience.",
			// Extended, localized content used in the page detailed explanation
			detailed: {
				intro: "For authoring and review, use DevTools network throttling (e.g. 'Slow 3G') or a manual browser delay to make the blur placeholder and transition visually apparent.",
				trickSummary: "This demo intentionally serves the first set of images without artificial latency and the second set with a small, controlled delay so the blur placeholder is visible; without the delay the transition is often imperceptible on fast connections.",
				howItWorks: "A blur placeholder is rendered first (typically a tiny base64-encoded image, 'blurDataURL') while the full-resolution image loads in the background. Once the real asset finishes loading, the placeholder is swapped out via a smooth transition (opacity/scale) to avoid jarring changes.",
				// Notes about plaiceholder behavior and our decision
				libraryNote: "Note: this demo references the 'plaiceholder' library for server-side placeholder generation. In some cases it returns only the dominant color instead of a blurred thumbnail, resulting in a single-color placeholder.",
				implementationNote: "Decision: since 'plaiceholder' is feature-complete and unlikely to receive updates, we implemented `getBlurPlaceholderImage` natively on the server (example included) instead of exporting `export default withPlaiceholder(config);`. If you prefer to avoid touching Next.js internals, use the Next-specific package the library provides.",
				bufferExplanation: "The Buffer holds the binary thumbnail server-side. Converting that Buffer to base64 and inlining it as a data URL lets the browser paint a visual placeholder immediately without extra network requests.",
				evaluationTitle: "Should you use a placeholder library?",
				advantages: [
					"Improves perceived load time by showing visual content immediately.",
					"Reduces layout shift when placeholders match image dimensions.",
					"Automates thumbnail and blurDataURL generation, reducing manual work.",
					"Provides a notably better UX for image-centric pages (galleries, products, hero images).",
				],
				disadvantages: [
					"Adds pipeline complexity (thumbnail generation, caching, storage).",
					"Small extra bytes for inlined blurDataURL, typically negligible next to full images.",
					"If thumbnails are generated on-the-fly without cache, CPU and I/O costs can grow.",
					"Requires disciplined caching or CDN integration to avoid backend load spikes.",
				],
				costsImpact: "The base64 placeholder itself is a small overhead in bytes. The real cost driver is how thumbnails are produced: pre-generated or build-time thumbnails have minimal recurring cost; on-demand generation increases CPU and latency. Use cache/CDN or precompute thumbnails to control costs.",
				bestPractices: [
					"Pre-generate thumbnails at upload or build time and serve them from a CDN.",
					"Set aggressive cache headers for generated thumbnails and transformed assets.",
					"Avoid on-demand server-side thumbnail generation on high-traffic endpoints without a queue or worker system.",
					"Measure LCP/CLS and validate that placeholders materially improve perceived UX for your users.",
				],
				whenToUse: [
					"Image-first pages where visuals drive engagement (galleries, product lists, hero images).",
					"When layout stability (low CLS) and perceived performance are priorities.",
				],
				whenNotToUse: [
					"Decorative images with negligible UX impact.",
					"Environments with extremely constrained infra and no CDN where generating thumbnails would be cost-prohibitive.",
				],
				recommendation: "Recommended for image-centric experiences when paired with caching/CDN and pre-generated thumbnails. Avoid artificial delays in production; use them only for demos or QA.",
				conclusion: "Blur placeholders are recommended when visual quality matters. Prefer a proven library that automates blurDataURL generation and combine it with caching or CDN transforms to minimize runtime cost.",
			},
	},
} as const;

export default en;