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
        <h3 className="text-white text-l text-center mt-12">
          Sit in nisl, et morbi. Faucibus eleifend praesent amet in aenean amet
          amet. Tellus sem estlobortis id. Tellus ut ornare nulla gravida
          rhoncus massa maecenas. Sit in nisl, et morbi text here.
        </h3>
      </div>
      {width < breakpoint ? <PortfolioCarousel /> : <Portfolio />}
    </SlideContainer>
  );
}
