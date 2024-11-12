import {useContext} from 'react';
import {Theme, ThemeContext} from '.';
import {BasicColors, themes} from 'style';

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
  colors: BasicColors;
}

export function useTheme(): UseThemeResult {
  const {theme, setTheme, colors} = useContext(ThemeContext);

  const toggleTheme = () => {
    let newTheme: Theme;

    console.log('toggle theme', theme);

    switch (theme) {
      case Theme.Dark:
        newTheme = Theme.Light;
        break;
      case Theme.Light:
        newTheme = Theme.Dark;
        break;
      default:
        newTheme = Theme.Dark;
        break;
    }
    setTheme?.(newTheme);
  };

  return {
    theme: theme || Theme.Dark,
    toggleTheme,
    colors: colors || themes.dark,
  };
}
