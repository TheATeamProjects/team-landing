"use client";

import { Button, Grid, Picture } from "@/components/atom";
import { useTheme } from "@/themes";
import { IntroductionContainer } from "./style";
import { useScroll } from "@/hooks/use-scroll";

export const Introduction = () => {
  const theme = useTheme();
  const { scrollIntoView } = useScroll();

  return (
    <IntroductionContainer theme={theme}>
      <Grid container alignItems="space-between">
        <Grid container item xs={12} md={8}>
          <Grid item xs={12} md={7}>
            <h1 className="introduction-title">
              <p>Building Digital</p>
              <p>Products & Experience</p>
            </h1>
            <p className="introduction-description">
              We are a full-cycle team that delivers turnkey projects, creating
              the web design, and mobile app we turn it into a live product.
            </p>
            <Button
              rounded
              variant="contained"
              className="introduction-action"
              onClick={() => scrollIntoView(".star-position")}
            >
              Start a Project
            </Button>
          </Grid>

          <Grid
            item
            xs={12}
            md={5}
            alignSelf="baseline"
            className="introduction-arrow-parent"
          >
            <Picture
              className="introduction-arrow"
              src="/assets/shared/arrow-star.png"
              alt="arrow-start"
              width={167.81}
              ratio={1.715}
            />
          </Grid>
        </Grid>

        <Grid
          container
          item
          xs={12}
          md={4}
          justifyContent="center"
          marginTop="-5%"
        >
          <Picture
            src="/assets/shared/introduction.png"
            alt="team-members"
            width={340}
            ratio={0.796}
          />
        </Grid>
      </Grid>
    </IntroductionContainer>
  );
};
