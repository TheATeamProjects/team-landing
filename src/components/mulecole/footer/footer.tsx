import { Delimiter, Logo } from "@/components/atom";
import { FooterContainer } from "./style";

export const Footer = () => {
  return (
    <FooterContainer>
      <Delimiter />
      <div className="gap">
        <Logo />
      </div>
    </FooterContainer>
  );
};
