import { useEffect, useState } from 'react';
import SlideContainer from '../SlideContainer';
import Info from './Info';
import Steps from './Steps';
import StepsCarousel from './StepsCarousel';
import './style.scss';

export default function WhatWeDo() {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 620;
  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
  }, [width]);

  return (
    <SlideContainer>
      <div className="howWeDoStyle w-screen">
        <div className="howWeDoStyle_container">
          <Info />
          {width > breakpoint ? <Steps /> : <StepsCarousel />}
        </div>
      </div>
    </SlideContainer>
  );
}
