import { useCSS } from "@/hooks/use-css";
import { useDebounce } from "@/hooks/use-debounce";
import { useWindowSize } from "@/hooks/use-window-size";
import Image from "next/image";
import { useRef, useState } from "react";
import { PictureProps } from "./interface";
import { PictureContainer } from "./style";

export const Picture = ({
  alt,
  src,
  ratio = 1.7,
  width,
  height,
  className = "",
}: PictureProps) => {
  const { width: windowWidth } = useWindowSize();
  const { mergeClassNames } = useCSS();
  const ref = useRef<HTMLDivElement>(null);
  const [autoHeight, setAutoHeight] = useState<number>(0);

  const props = width
    ? {
        datamode: "manual",
        width,
        height: height ? height : (1 / ratio) * width,
      }
    : { datamode: "auto", fill: true };

  useDebounce({
    allow: props.datamode === "auto",
    action: () => {
      if (ref && ref?.current) {
        const { width } = ref.current.getBoundingClientRect();

        if (width && width > 0) {
          setAutoHeight(width * (1 / ratio));
        }
      }
    },
    deps: [windowWidth],
  });

  const refProps = props.datamode === "auto" ? { ref } : {};

  return (
    <PictureContainer {...refProps} autoHeight={autoHeight}>
      <Image
        alt={alt}
        src={src}
        quality={100}
        placeholder="empty"
        style={{ objectFit: "cover" }}
        className={mergeClassNames(className)}
        {...props}
        sizes="100vw"
      />
    </PictureContainer>
  );
};
