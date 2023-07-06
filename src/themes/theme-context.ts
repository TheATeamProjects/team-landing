"use client";

import { createContext } from "react";
import { defaultTheme } from "./definitions/default-theme";
import { ThemeDefinition } from "./theme.interface";

const ThemeContext = createContext<ThemeDefinition>(defaultTheme);

export { ThemeContext };
