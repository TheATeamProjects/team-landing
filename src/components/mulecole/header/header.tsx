import { Button, Delimiter, Logo, Picture } from "@/components/atom";
import { HeaderContainer } from "./style";

export const Header = () => {
  return (
    <HeaderContainer>
      <div className="header-items">
        <Logo />
        <Button rounded variant="contained">
          Start a Project
        </Button>
      </div>

      <Delimiter />
    </HeaderContainer>
  );
};
