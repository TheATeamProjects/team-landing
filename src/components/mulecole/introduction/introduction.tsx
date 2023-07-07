"use client";

import { Button, Picture } from "@/components/atom";
import { useTheme } from "@/themes";
import { IntroductionContainer } from "./style";

export const Introduction = () => {
  const theme = useTheme();

  return (
    <IntroductionContainer theme={theme}>
      <div className="introduction-group">
        <div className="introduction-items">
          <h1 className="introduction-title">
            <p>Building Digital</p>
            <p>Products & Experience</p>
          </h1>
          <p className="introduction-description">
            We are a full-cycle team that delivers turnkey projects, creating
            the web design, and mobile app we turn it into a live product.
          </p>
          <Button rounded variant="contained" className="introduction-action">
            Start a Project
          </Button>
        </div>

        <Picture
          className="introduction-arrow-image"
          src="/images/arrow-star.png"
          alt="arrow-start"
          width={168}
        />
      </div>

      <Picture
        src="/images/introduction.png"
        alt="team-members"
        width={285}
        ratio={0.75}
      />
    </IntroductionContainer>
  );
};
