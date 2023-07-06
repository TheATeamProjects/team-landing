"use client";

import styled from "@emotion/styled";
import { ContainerProps } from "./interface";

export const Containment = styled.div<ContainerProps>`
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  background: ${({ background }) => background};
`;
