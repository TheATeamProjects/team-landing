"use client";

import { Container, Header, Introduction, Portfolio } from "@/components";
import { Footer } from "@/components/mulecole/footer";
import { ContactOurTeam, OurTeam } from "@/components/organism";
import { useTheme } from "@/themes";

export default function Home() {
  const theme = useTheme();

  return (
    <main>
      <Container background={theme.palette.accent.main}>
        <Container padding="3rem 4rem">
          <Header />
          <Container padding="0 6rem">
            <Introduction />
          </Container>
        </Container>
      </Container>

      <Container padding="3rem 4rem">
        <Portfolio />
      </Container>
      <Container padding="3rem 4rem">
        <OurTeam />
      </Container>
      <Container padding="12rem 4rem">
        <ContactOurTeam />
      </Container>
      <Container padding="0rem 4rem">
        <Footer />
      </Container>
    </main>
  );
}
