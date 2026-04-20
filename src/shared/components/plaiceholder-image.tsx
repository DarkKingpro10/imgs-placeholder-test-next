import { getBlurPlaceholderImage } from "@/shared/utils/utils";
import type { ImageProps } from "next/image";
import ImageWithPlaceholder from "./image-with-placeholder";

type Props = Omit<ImageProps, "src" | "placeholder" | "blurDataURL"> & {
	seed: number;
	withTrick?: boolean;
};

export default async function PlaiceholderImage({
	seed,
	alt,
	withTrick,
	...rest
}: Props) {
	const imageSrc = `https://picsum.photos/id/${seed}/200/300`;
	const { base64 } = await getBlurPlaceholderImage(imageSrc);

	return (
		<ImageWithPlaceholder
			{...rest}
			{...(withTrick ? { src: imageSrc } : { src: `/api/slow-image?seed=${seed}` })}
			alt={alt}
			blurDataURL={base64}
		/>
	);
}
