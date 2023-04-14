import './style.scss';
import { useEffect, useContext, useRef } from 'react';
import { gsap } from 'gsap';
import { ThemeContextType } from '../../@types/theme';
import { ThemeContext } from '../../context/themeContext';

export default function ScrollOrDrag() {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  const arrowUp = useRef<HTMLDivElement>(null);
  const arrowDown = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.to(arrowUp.current, { y: -4, repeat: -1, yoyo: true });
    gsap.to(arrowDown.current, { y: 4, repeat: -1, yoyo: true });
  }, []);
  return (
    <span
      className={`scroll-or-drag-style subpixel-antialiased flex ${
        theme === 'dark' ? 'text-white' : 'text-black'
      }`}
    >
      <span className="arrow-down mr-2" ref={arrowUp}>
        &uarr;
      </span>
      Scroll or drag
      <span className="ml-2" ref={arrowDown}>
        &darr;
      </span>
    </span>
  );
}
