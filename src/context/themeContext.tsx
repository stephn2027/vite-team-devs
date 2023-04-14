/* eslint-disable react/function-component-definition */
import * as React from 'react';
import { PropsWithChildren } from 'react';
import { Theme, Scroll, ThemeContextType } from '../@types/theme';

export const ThemeContext = React.createContext<ThemeContextType | null>(null);

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [themeMode, setThemeMode] = React.useState<Theme>('dark');
  const [scrollEnable, setScrollState] = React.useState<Scroll>(false);

  const themeValue = React.useMemo(
    () => ({
      theme: themeMode,
      changeTheme: setThemeMode,

      scrollEnable,
      setScrollState,
    }),
    [themeMode, scrollEnable]
  );
  return (
    <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
