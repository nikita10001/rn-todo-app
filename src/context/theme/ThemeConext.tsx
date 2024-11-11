import {createContext, useContext} from 'react';
import {BasicColors} from 'style';

export enum Theme {
  Light = 'light',
  Dark = 'dark',
}

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  colors: BasicColors;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a themeProvider');
  }
  return context;
};
