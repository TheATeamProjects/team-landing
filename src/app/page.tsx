"use client";

import { Container, Header, Introduction, Portfolio } from "@/components";
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
    </main>
  );
}
