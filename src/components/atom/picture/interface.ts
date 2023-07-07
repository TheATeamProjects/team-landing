import { ImgHTMLAttributes } from "react";

export interface PictureProps
  extends Required<Pick<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt">>,
    Pick<ImgHTMLAttributes<HTMLImageElement>, "className"> {
  width?: number;
  height?: number;
  ratio?: number;
}
