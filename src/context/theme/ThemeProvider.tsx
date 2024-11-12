import {FC, useState, useMemo} from 'react';
import {Theme, ThemeContext} from './ThemeConext';
import {themes} from 'style';

interface ThemeProviderProps {
  initialTheme?: Theme;
  children: JSX.Element;
}

export const ThemeProvider: FC<ThemeProviderProps> = props => {
  const {children, initialTheme} = props;

  const [theme, setTheme] = useState<Theme>(initialTheme || Theme.Dark);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
      colors: theme === Theme.Light ? themes.light : themes.dark,
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
