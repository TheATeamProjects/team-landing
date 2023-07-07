import {
  TextFieldProps as MuiTextFieldProps,
  TextFieldVariants,
} from "@mui/material";

type TextFieldPropsType = {
  variant?: TextFieldVariants;
} & Omit<MuiTextFieldProps, "variant">;
export interface TextFieldProps extends TextFieldPropsType {}
