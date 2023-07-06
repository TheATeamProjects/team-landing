import { brandFont } from "@/hooks/use-fonts";
import { ThemeDefinition } from "@/themes/theme.interface";
import styled from "@emotion/styled";

export const LogoContainer = styled.div<{ theme: ThemeDefinition }>`
  display: inline-flex;
  flex-direction: row;
  gap: 5px;
  font-family: ${brandFont.style.fontFamily};
  font-size: 24px;
  font-weight: 400;

  .logo-branding {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;
