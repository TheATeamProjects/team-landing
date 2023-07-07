"use client";

import styled from "@emotion/styled";
import { Typography as MuiTypography } from "@mui/material";
import { TypographyProps } from "./interface";

export const TypographyContainer = styled(MuiTypography)<TypographyProps>`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
`;
