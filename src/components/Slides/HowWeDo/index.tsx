import './style.scss';
import SlideContainer from '../SlideContainer';
import InfoContent from './InfoContent';
import StepsContent from './StepsContent';

export default function WhatWeDo() {
  return (
    <SlideContainer>
      <div className="howWeDoStyle w-screen h-screen">
        <div className="wwd-style_content wwd-style_info">
          <InfoContent />
        </div>
        <div className="wwd-style_content wwd-style_info">
          <StepsContent />
        </div>
      </div>
    </SlideContainer>
  );
}
