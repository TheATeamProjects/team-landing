import { ThemeDefinition } from "@/themes";
import styled from "@emotion/styled";

export const IntroductionContainer = styled.div<{ theme: ThemeDefinition }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-top: 9rem;

  .introduction-items {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1.5rem;
    max-width: 460px;
    margin-bottom: 11rem;
  }

  .introduction-title {
    color: ${({ theme }) => theme.palette.secondary.main};
    font-size: 2.625rem;
    font-style: normal;
    font-weight: 500;
    line-height: 4.0625rem;
  }

  .introduction-description {
    color: ${({ theme }) => theme.grey[200]};
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .introduction-action {
    max-width: max-content;
  }
`;
