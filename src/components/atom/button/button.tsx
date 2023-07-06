"use client";

import { ButtonProps } from "./interface";
import { ButtonContainer } from "./style";

export const Button = ({ children, ...rest }: ButtonProps) => {
  return <ButtonContainer {...rest}>{children}</ButtonContainer>;
};
