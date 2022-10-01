/* eslint-disable react/function-component-definition */
import * as React from 'react';
import { PropsWithChildren } from 'react';
import { Theme, ThemeContextType } from '../@types/theme';

export const ThemeContext = React.createContext<ThemeContextType | null>(null);

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [themeMode, setThemeMode] = React.useState<Theme>('dark');

  const themeValue = React.useMemo(
    () => ({
      theme: themeMode,
      changeTheme: setThemeMode,
    }),
    [themeMode]
  );
  return (
    <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
