export type Theme = 'light' | 'dark';
export type Scroll = boolean;
export type ThemeContextType = {
  theme: Theme;
  changeTheme: (theme: Theme) => void;

  scrollEnable: Scroll;
  setScrollState: (scrollEnable: Scroll) => void;
};
