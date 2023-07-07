import { ThemeDefinition } from "@/themes";
import styled from "@emotion/styled";

export const DescriptionContainer = styled.div<{ theme: ThemeDefinition }>`
  display: flex;
  flex-direction: column;
  position: relative;
  .text-line {
    width: 4.5rem;
    background: ${({ theme }) => theme.palette.primary.main};
    height: 0.5rem;
    position: absolute;
    top: 1.75rem;
    left: 4rem;
    @media (max-width: 600px) {
      display: none;
    }
  }
  .title {
    z-index: 20;
  }
`;
