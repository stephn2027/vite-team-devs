/* eslint-disable react/require-default-props */
import './styles.scss';
import { useContext } from 'react';
import { ThemeContextType } from '../../../@types/theme';
import { ThemeContext } from '../../../context/themeContext';

export default function SlideContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <div className="slide">
      <div className="slide__inner">
        <div
          className={`slide__content ${
            theme === 'dark' ? 'slide__content--dark' : 'slide__content--white'
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
