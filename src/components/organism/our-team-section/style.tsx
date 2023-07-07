import { Grid } from "@/components/atom";
import styled from "@emotion/styled";

export const SectionContainer = styled(Grid)`
  display: flex;
  justify-content: space-between;
  .team-div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 24px;
    margin-left: 72px;
  }
`;
