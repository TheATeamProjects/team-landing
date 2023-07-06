import { ImgHTMLAttributes } from "react";

export interface PictureProps
  extends Required<Pick<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt">> {
  width?: number;
  height?: number;
}
