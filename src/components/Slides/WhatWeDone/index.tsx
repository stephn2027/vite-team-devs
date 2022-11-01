/* eslint-disable react/no-unescaped-entities */
import './style.scss';
import SlideContainer from '../SlideContainer';
import Portfolio from './Portfolio';

export default function WhatWeDone() {
  return (
    <SlideContainer>
      <div className="we-done-style">
        <h1 className="text-5xl font-bold text-white">What We Done</h1>
        <h3 className="text-white text-l text-center mt-12">
          Sit in nisl, et morbi. Faucibus eleifend praesent amet in aenean amet
          amet. Tellus sem estlobortis id. Tellus ut ornare nulla gravida
          rhoncus massa maecenas. Sit in nisl, et morbi text here.
        </h3>
      </div>
      <Portfolio />
    </SlideContainer>
  );
}
