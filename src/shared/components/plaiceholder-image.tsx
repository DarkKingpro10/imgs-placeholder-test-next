import { getBlurPlaceholderImage } from "@/shared/utils/utils";
import type { ImageProps } from "next/image";
import ImageWithPlaceholder from "./ImageWithPlaceholder";

type Props = Omit<ImageProps, "src" | "placeholder" | "blurDataURL"> & {
  seed: number;
};

export default async function PlaiceholderImage({
  seed,
  alt,
  ...rest
}: Props) {
  const imageSrc = `https://picsum.photos/id/${seed}/200/300`;
  const { base64 } = await getBlurPlaceholderImage(imageSrc);

  return (
    <ImageWithPlaceholder
      {...rest}
      src={`/api/slow-image/${seed}`}
      alt={alt}
      blurDataURL={base64}
    />
  );
}