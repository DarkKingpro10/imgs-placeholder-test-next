import Image, { type ImageProps } from "next/image";

type Props = Omit<ImageProps, "placeholder" | "blurDataURL"> & {
	blurDataURL?: string;
};

export default function ImageWithPlaceholder({
	blurDataURL,
	alt,
	...rest
}: Props) {
	return (
		<Image
			{...(rest as ImageProps)}
			alt={alt}
			placeholder={blurDataURL ? "blur" : undefined}
			blurDataURL={blurDataURL}
		/>
	);
}
