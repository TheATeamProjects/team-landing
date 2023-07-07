import styled from "@emotion/styled";

export const CenterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 1280px) {
    padding: 0px 8rem;
  }
  .direction {
    @media (max-width: 960px) {
      flex-direction: column-reverse;
    }
  }
`;
