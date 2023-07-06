import Image from "next/image";
import { PictureProps } from "./interface";

export const Picture = ({ alt, src, width = 100, height }: PictureProps) => {
  const ratio = 1.7;

  return (
    <Image
      alt={alt}
      src={src}
      width={width}
      height={height ? height : (1 / ratio) * width}
      quality={100}
      placeholder="empty"
    />
  );
};
