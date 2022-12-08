import './style.scss';
import SlideContainer from '../SlideContainer';
import Explain from './Explain';
import Stacks from './Stacks';

export default function WhatWeDo() {
  return (
    <SlideContainer>
      <div className="howWeDoItStyle w-screen h-screen">
        <div className="howWeDoItStyle_container">
          <Stacks />
          <Explain />
        </div>
      </div>
    </SlideContainer>
  );
}
