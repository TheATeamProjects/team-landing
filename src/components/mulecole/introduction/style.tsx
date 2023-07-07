import { ThemeDefinition } from "@/themes";
import styled from "@emotion/styled";

export const IntroductionContainer = styled.div<{ theme: ThemeDefinition }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-top: 9rem;
  padding: 0 6rem;

  @media screen and (max-width: 897px) {
    padding: 0 0;

    .introduction-arrow {
      visibility: hidden;
    }
  }

  .introduction-arrow-parent {
    > div {
      text-align: left;
    }
  }

  .introduction-arrow {
    margin-top: 50px;
    justify-self: flex-start;
  }

  .introduction-group {
    display: flex;
    flex-direction: row;

    width: 45%;
  }

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
    line-height: 4.0625rem;
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 500;
    line-height: 4.0625rem;
  }

  .introduction-description {
    color: ${({ theme }) => theme.grey[200]};
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 1.5rem;
  }

  .introduction-action {
    max-width: max-content;
  }

  @media screen and (max-width: 400px) {
    flex-direction: column;
    align-items: center;

    .introduction-arrow-image {
      transform: rotate(90deg);
    }
  }
`;
