/* eslint-disable react/function-component-definition */
import React, { PropsWithChildren } from 'react';
import { ThemeContextType } from '../../@types/theme';
import { ThemeContext } from '../../context/themeContext';

const ThemeWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  const { theme } = React.useContext(ThemeContext) as ThemeContextType;
  // To Do JP / ENG theme
  //   const handleLangChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //     changeTheme(event.target.value as Theme);
  //   };

  return (
    <div data-theme={theme}>
      {/* <select name="toggleTheme" onChange={handleLangChange}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select> */}
      {children}
    </div>
  );
};
export default ThemeWrapper;
