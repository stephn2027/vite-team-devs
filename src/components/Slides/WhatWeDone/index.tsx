/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from 'react';
import './style.scss';
import SlideContainer from '../SlideContainer';
import Portfolio from './Portfolio';
import PortfolioCarousel from './PortfolioCarousel';

export default function WhatWeDone() {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 620;
  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
  }, [width]);
  return (
    <SlideContainer>
      <div className="we-done-style">
        <h1 className="text-5xl font-bold text-white">What We've Done</h1>
        <h3 className="text-white text-l text-center mt-10 mb-10">
        Welcome to TeamDev's portfolio of success. From websites to mobile apps, our diverse projects demonstrate our commitment to excellence. Each success story showcases our dedication, creativity, and technical prowess. Join us as we continue to innovate and inspire. Let's create the next success together.
        </h3>
      </div>
      {width < breakpoint ? <PortfolioCarousel /> : <Portfolio />}
    </SlideContainer>
  );
}
