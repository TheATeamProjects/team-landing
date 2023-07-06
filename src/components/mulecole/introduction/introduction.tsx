"use client";

import { Button, Picture } from "@/components/atom";
import { IntroductionContainer } from "./style";
import { useTheme } from "@/themes";

export const Introduction = () => {
  const theme = useTheme();

  return (
    <IntroductionContainer theme={theme}>
      <div className="introduction-items">
        <h1 className="introduction-title">
          <p>Building Digital</p>
          <p>Products & Experience</p>
        </h1>
        <p className="introduction-description">
          We are a full-cycle team that delivers turnkey projects, creating the
          web design, and mobile app we turn it into a live product.
        </p>
        <Button rounded variant="contained" className="introduction-action">
          Start a Project
        </Button>
      </div>

      <Picture src="" alt="arrow-start" />

      <Picture src="" alt="team-members " />
    </IntroductionContainer>
  );
};
