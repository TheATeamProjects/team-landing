import { HTMLAttributes } from "react";

export interface ContainerProps
  extends Pick<HTMLAttributes<HTMLDivElement>, "children"> {
  padding?: string;
  margin?: string;
  background?: string;
}
