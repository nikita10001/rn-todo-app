import {FC, useState} from 'react';
import {Theme, ThemeContext} from './ThemeConext';
import {themes} from 'style';

interface ThemeProviderProps {
  children: JSX.Element;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({children}) => {
  const [theme, setTheme] = useState<Theme>(Theme.Dark);

  const colors = theme === Theme.Light ? themes.light : themes.dark;

  return (
    <ThemeContext.Provider value={{theme, setTheme, colors}}>
      {children}
    </ThemeContext.Provider>
  );
};
