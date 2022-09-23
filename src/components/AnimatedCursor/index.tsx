import './style.scss';
import { useRef, useEffect, useContext } from 'react';

import { ThemeContextType } from '../../@types/theme';
import { ThemeContext } from '../../context/themeContext';

export default function AnimatedCursor() {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  const delay = 18;

  const dot = useRef<HTMLDivElement>(null);
  const dotOutline = useRef<HTMLDivElement>(null);

  const cursorVisible = useRef(true);
  const cursorEnlarged = useRef(true);

  const endX = useRef(window.innerWidth / 2);
  const endY = useRef(window.innerHeight / 2);
  const x = useRef(0);
  const y = useRef(0);

  const requestRef = useRef(null);

  const toggleCursorSize = () => {
    if (cursorEnlarged.current) {
      dot.current.style.transform = 'translate(-50%, -50%) scale(0.75)';
      dotOutline.current.style.transform = 'translate(-50%, -50%) scale(1.5)';
    } else {
      dot.current.style.transform = 'translate(-50%, -50%) scale(1)';
      dotOutline.current.style.transform = 'translate(-50%, -50%) scale(1)';
    }
  };
  const animateDotOutline = () => {
    x.current += (endX.current - x.current) / delay;
    y.current += (endY.current - y.current) / delay;

    dotOutline.current.style.top = `${y.current}px`;
    dotOutline.current.style.left = `${x.current}px`;

    requestRef.current = requestAnimationFrame(animateDotOutline);
  };
  const mouseOverEvent = () => {
    cursorEnlarged.current = true;
    toggleCursorSize();
  };

  const mouseOutEvent = () => {
    cursorEnlarged.current = false;
    toggleCursorSize();
  };
  const mouseMoveEvent = (e) => {
    cursorVisible.current = true;

    endX.current = e.pageX;
    endY.current = e.pageY;

    dot.current.style.top = `${endY.current}px`;
    dot.current.style.left = `${endX.current}px`;
  };
  useEffect(() => {
    document.addEventListener('mousedown', mouseOverEvent);
    document.addEventListener('mouseup', mouseOutEvent);
    document.addEventListener('mousemove', mouseMoveEvent);

    animateDotOutline();

    return () => {
      document.removeEventListener('mousedown', mouseOverEvent);
      document.removeEventListener('mouseup', mouseOutEvent);
      document.removeEventListener('mousemove', mouseMoveEvent);
      cancelAnimationFrame(requestRef.current);
    };
  });
  return (
    <>
      <div
        ref={dotOutline}
        className={`cursor-dot-outline${
          theme === 'dark'
            ? ' cursor-dot-outline--dark'
            : ' cursor-dot-outline--light'
        }`}
      />
      <div
        ref={dot}
        className={`cursor-dot${
          theme === 'dark' ? ' cursor-dot--dark' : ' cursor-dot--light'
        }`}
      />
    </>
  );
}
