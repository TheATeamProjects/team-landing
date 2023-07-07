import { Button, Delimiter, Logo } from "@/components/atom";
import { HeaderContainer } from "./style";
import { useScroll } from "@/hooks/use-scroll";

export const Header = () => {
  const { scrollIntoView } = useScroll();

  return (
    <HeaderContainer>
      <div className="header-items">
        <Logo />
        <Button
          rounded
          variant="contained"
          onClick={() => scrollIntoView(".star-position")}
        >
          Start a Project
        </Button>
      </div>

      <Delimiter />
    </HeaderContainer>
  );
};
