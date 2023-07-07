"use client";

import { ThemeDefinition } from "@/themes";
import styled from "@emotion/styled";

export const BackgroundForm = styled.div<{ theme: ThemeDefinition }>`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 40px 24px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.palette.secondary.main};
  width: 100%;
  position: relative;

  .form-footer {
    display: flex;
    flex-direction: row;
    justify-content: end;

    @media screen and (max-width: 600px) {
      flex-direction: column;
    }
  }
  .submit-btn {
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.1px;
    width: 150px;

    @media screen and (max-width: 600px) {
      width: 100%;
      margin-top: 1rem;
    }
  }
  .attach-parent {
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;

    @media screen and (max-width: 600px) {
      align-items: flex-start;
    }
  }
  .text-btn {
    padding: 0;
  }
  .star-position {
    position: absolute;
    top: -2rem;
    right: -2rem;
  }
`;
