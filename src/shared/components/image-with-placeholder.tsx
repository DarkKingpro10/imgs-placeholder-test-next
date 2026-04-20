import Image, { type ImageProps } from "next/image";

type Props = Omit<ImageProps, "placeholder" | "blurDataURL" | "alt"> & {
	blurDataURL?: string;
	alt?: string;
};

export default function ImageWithPlaceholder({
	blurDataURL,
	alt,
	...rest
}: Props) {
	return (
		<Image
			{...rest}
			alt={alt ?? "Image with placeholder"}
			sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
			placeholder={blurDataURL ? "blur" : undefined}
			blurDataURL={blurDataURL}
			unoptimized
		/>
	);
}
