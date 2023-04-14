import './style.scss';
import SlideContainer from '../SlideContainer';
import Explain from './Explain';
import TechStacks from './TechStacks';

export default function WhatWeDo() {
  return (
    <SlideContainer>
      <div className="howWeDoItStyle w-screen h-screen">
        <div className="howWeDoItStyle_container">
          <TechStacks />
          <Explain />
        </div>
      </div>
    </SlideContainer>
  );
}
