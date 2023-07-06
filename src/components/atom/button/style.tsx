"use client";

import styled from "@emotion/styled";
import { Button as MuiButton } from "@mui/material";
import { ButtonProps } from "./interface";

export const ButtonContainer = styled(MuiButton)<ButtonProps>`
  font-size: 14px;
  font-weight: 500;
  text-transform: none;
  padding: 0.62rem 1.5rem;
  border-radius: ${({ rounded }) => (rounded ? "24px" : "4px")};
`;
