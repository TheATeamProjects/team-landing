import { ThemeDefinition } from "@/themes";
import styled from "@emotion/styled";

export const PortfolioContainer = styled.div<{ theme: ThemeDefinition }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3.5rem;

  margin: 10rem 0;

  .portfolio-title {
    color: ${({ theme }) => theme.palette.secondary.main};
    text-align: center;
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .portfolio-sample-item {
    flex-basis: calc(50% - 0.75rem);

    @media screen and (max-width: 700px) {
      flex-basis: calc(100% - 0.75rem);
    }
  }

  .portfolio-sample-item-image {
    border-radius: 8px;
  }
`;
