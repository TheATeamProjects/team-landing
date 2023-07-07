import { BoxProps } from "@mui/material";

export interface PersonalProfileProps extends BoxProps {
  url: string;
  name?: string;
  role?: string;
}
