import {createContext} from 'react';
export const themes = {
  light: {
    foreground: "#e1e1e1",
    background: "#d1d1d1"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};
export const ThemeContext = createContext();