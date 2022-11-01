import './style.scss';
import SlideContainer from '../SlideContainer';
import Info from './Info';
import Steps from './Steps';

export default function WhatWeDo() {
  return (
    <SlideContainer>
      <div className="howWeDoStyle w-screen h-screen">
        <div className="howWeDoStyle_container">
          <Info />
          <Steps />
        </div>
      </div>
    </SlideContainer>
  );
}
