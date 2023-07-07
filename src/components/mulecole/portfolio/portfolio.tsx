import { Grid, Picture } from "@/components/atom";
import { useTheme } from "@/themes";
import { PortfolioContainer } from "./style";
import { Description } from "../description";

export const Portfolio = () => {
  const theme = useTheme();

  const images = [
    { src: "/assets/portfolio/1.png", alt: "Cybersec", key: "portfolio-1" },
    { src: "/assets/portfolio/2.png", alt: "RealState", key: "portfolio-2" },
    { src: "/assets/portfolio/3.png", alt: "ItsHere", key: "portfolio-3" },
    { src: "/assets/portfolio/4.png", alt: "SparkWorld", key: "portfolio-4" },
  ];

  return (
    <PortfolioContainer theme={theme}>
      <Description lineVisibility={true} title="See Our Portfolio" desc="" />

      <Grid container gap="1.5rem 1.5rem">
        {images.map((image) => {
          return (
            <Grid
              item
              key={image.key}
              xs={12}
              md={6}
              className="portfolio-sample-item"
            >
              <Picture
                alt={image.alt}
                src={image.src}
                className="portfolio-sample-item-image"
              />
            </Grid>
          );
        })}
      </Grid>
    </PortfolioContainer>
  );
};
