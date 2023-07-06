import { HTMLAttributes } from "react";

export interface ThemePaletteColorDefinition {
  main: string;
  light: string;
  dark: string;
  contrast: string;
}

export interface ThemePaletteRangeColorDefinition {
  100: string;
  200: string;
}

export interface ThemePaletteDefinition {
  primary: ThemePaletteColorDefinition;
  secondary: ThemePaletteColorDefinition;
  accent: ThemePaletteColorDefinition;
}

export interface ThemeDefinition {
  palette: ThemePaletteDefinition;
  grey: ThemePaletteRangeColorDefinition;
}

export interface ThemeProviderProps
  extends Pick<HTMLAttributes<HTMLDivElement>, "children"> {}
