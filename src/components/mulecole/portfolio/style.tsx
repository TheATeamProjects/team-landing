import { ThemeDefinition } from "@/themes";
import styled from "@emotion/styled";

export const PortfolioContainer = styled.div<{ theme: ThemeDefinition }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3.5rem;

  margin-top: 10rem;

  .portfolio-title {
    color: ${({ theme }) => theme.palette.secondary.main};
    text-align: center;
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .portfolio-samples {
    display: flex;
    flex-direction: row;
    gap: 1.5rem 1.5rem;
    justify-content: space-between;
    align-items: center;

    flex-wrap: wrap;

    > * {
      /* width: 54rem; */
      /* height: 22rem; */
      flex-grow: 0;
      flex-shrink: 1;
      border-radius: 8px;
    }
  }
`;
