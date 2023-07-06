"use client";

import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { defaultTheme } from "./definitions/default-theme";
import { ThemeContext } from "./theme-context";
import { ThemeProviderProps } from "./theme.interface";

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: defaultTheme.palette.primary.main,
      },
    },
  });

  return (
    <ThemeContext.Provider value={defaultTheme}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
