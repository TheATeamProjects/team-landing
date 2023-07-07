import styled from "@emotion/styled";

export const PictureContainer = styled.div<{ autoHeight: number }>`
  position: relative;
  width: 100%;
  text-align: center;
  height: ${({ autoHeight }) => (autoHeight ? `${autoHeight}px` : "unset")};
`;
