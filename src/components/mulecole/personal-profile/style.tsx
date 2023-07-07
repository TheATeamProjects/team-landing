"use client";

import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { PersonalProfileProps } from "./interface";


export const BackgroundDiv = styled(Box)<PersonalProfileProps>`
  background-image: url(${({ url }) => url});
  background-size: cover;
  background-position: center;
  height: 210px;
  width: 100%;
  border-radius: 8px;
  @media (max-width: 960px) {
    height: 185px;
  }
`;

export const ProfileContainer = styled.div`
display: flex;
flex-direction: column;
`