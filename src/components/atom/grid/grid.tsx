import React from "react";
import { GridContainer } from "./style";
import { MyGridProps } from "./interface";

export const Grid = ({ children, ...props }: MyGridProps) => {
  return <GridContainer {...props}>{children}</GridContainer>;
};
