"use client";

import { TextFieldContainer } from "../text-field/style";
import { MyTextFieldProps } from "./interface";

export const TextField = (props : MyTextFieldProps) => {
  return <TextFieldContainer {...props} label={props.label}/>
};
