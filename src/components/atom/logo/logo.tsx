"use client";

import { useTheme } from "@/themes";
import { LogoContainer } from "./logo.style";

export const Logo = () => {
  const theme = useTheme();

  return (
    <LogoContainer theme={theme}>
      <p>The</p>
      <p className="logo-branding">A Team</p>
    </LogoContainer>
  );
};
