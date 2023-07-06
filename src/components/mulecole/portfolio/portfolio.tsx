import { Picture } from "@/components/atom";
import { useWindowSize } from "@/hooks/use-window-size";
import { useTheme } from "@/themes";
import { PortfolioContainer } from "./style";

export const Portfolio = () => {
  const theme = useTheme();
  const { width } = useWindowSize();

  const images = [
    { src: "/portfolio/1.png", alt: "Cybersec", key: "portfolio-1" },
    { src: "/portfolio/2.png", alt: "RealState", key: "portfolio-2" },
    { src: "/portfolio/3.png", alt: "ItsHere", key: "portfolio-3" },
    { src: "/portfolio/4.png", alt: "SparkWorld", key: "portfolio-4" },
  ];

  return (
    <PortfolioContainer theme={theme}>
      <h2 className="portfolio-title">See Our Portfolio</h2>

      <div className="portfolio-samples">
        {images.map((image) => {
          return (
            <Picture
              alt={image.alt}
              key={image.key}
              src={image.src}
              width={width / 2}
            />
          );
        })}
      </div>
    </PortfolioContainer>
  );
};
