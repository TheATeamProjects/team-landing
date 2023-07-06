import { useContext } from "react";
import { ThemeContext } from "./theme-context";

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("theme content cannot be used before theme-provider");
  }

  return context;
};
