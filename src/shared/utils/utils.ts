/**
 * Generates a blur placeholder SVG with customizable colors.
 * We use base64 encoding because Nextjs use Data URL so it needs to be a string coded in base64, and this way we can generate the SVG on the fly and use it as a placeholder for our images, this technique is useful when we don't have a pre-generated placeholder for our images, and we want to generate a placeholder that matches the colors of our website.
 *
 * But the problem is that every placeholder of the image is going to be the same
 * @param options An object containing optional color properties for the gradient.
 * @param options.color1 The first color in the gradient (default: "#f8fafc").
 * @param options.color2 The second color in the gradient (default: "#f1f5f9").
 * @param options.color3 The third color in the gradient (default: "#e2e8f0").
 * @returns A data URL for the generated SVG.
 */

import { getPlaiceholder } from "plaiceholder";

export function generateBlurPlaceholderSVG({
	color1 = "#e5e7eb",
	color2 = "#9ca3af",
	color3 = "#6b7280",
}: {
	color1?: string;
	color2?: string;
	color3?: string;
} = {}) {
	const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${color1}" />
          <stop offset="50%" stop-color="${color2}" />
          <stop offset="100%" stop-color="${color3}" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" fill="url(#g)" />
      <circle cx="20" cy="20" r="8" fill="rgba(0,0,0,0.08)" />
      <path d="M5 45L20 30L30 40L40 30L60 50V64H5Z" fill="rgba(0,0,0,0.12)" />
    </svg>
  `;

	return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
}

export async function getPlaiceholderImage(src: string) {
	try {
		const buffer = await fetch(src).then(async (res) =>
			Buffer.from(await res.arrayBuffer()),
		);

		return await getPlaiceholder(buffer, { size: 10 });
	} catch (error) {
		console.log("Error generating placeholder image:", error);
		throw error;
	}
}

export async function getBlurPlaceholderImage(src: string) {
	try {
		const { base64, color } = await getPlaiceholderImage(src);
		return {
			base64,
			color,
		};
	} catch (error) {
		return {
			base64: generateBlurPlaceholderSVG(),
			color: {
				r: 229,
				g: 231,
				b: 235,
				hex: "#e5e7eb",
			},
		};
	}
}
