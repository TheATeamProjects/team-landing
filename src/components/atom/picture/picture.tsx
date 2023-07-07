import { useCSS } from "@/hooks/use-css";
import Image from "next/image";
import { PictureProps } from "./interface";

export const Picture = ({
  alt,
  src,
  ratio = 1.7,
  width = 100,
  height,
  className = "",
}: PictureProps) => {
  const { mergeClassNames } = useCSS();
  return (
    <Image
      alt={alt}
      src={src}
      width={width}
      height={height ? height : (1 / ratio) * width}
      quality={100}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
      placeholder="empty"
      className={mergeClassNames(className)}
    />
  );
};
