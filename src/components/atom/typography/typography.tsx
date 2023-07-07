"use client";

import { TypographyProps } from "./interface";
import { TypographyContainer } from "./style";

export const Typography = ({ children, ...rest }: TypographyProps) => {
  return <TypographyContainer {...rest}>{children}</TypographyContainer>;
};
