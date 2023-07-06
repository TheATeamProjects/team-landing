import { Palanquin_Dark, Roboto } from "next/font/google";

const brandFont = Palanquin_Dark({ subsets: ["latin"], weight: ["400"] });
const primaryFont = Roboto({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
});

export { brandFont, primaryFont };
