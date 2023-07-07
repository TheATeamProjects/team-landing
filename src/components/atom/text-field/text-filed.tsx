"use client";

import { TextFieldContainer } from "../text-field/style";
import { TextFieldProps } from "./interface";

export const TextField = (props: TextFieldProps) => {
  return <TextFieldContainer {...props} />;
};
