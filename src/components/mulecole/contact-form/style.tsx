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
    justify-content: space-between;
  }
  .submit-btn {
    background-color: ${({ theme }) => theme.palette.secondary.main};
    border-radius: 4px;
    padding: 20px 50px;
  }
  .attach-parent {
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
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
