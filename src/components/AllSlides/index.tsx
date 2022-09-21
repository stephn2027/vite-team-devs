import './style.scss';
import SlideContainer from '../Slides/SlideContainer';
import WhatWeDo from '../Slides/WhatWeDo';

export default function Slides() {
  return (
    <div className="SlideContainer">
      <SlideContainer>
        <WhatWeDo />
      </SlideContainer>
      <SlideContainer>
        <WhatWeDo />
      </SlideContainer>
      <SlideContainer>
        <WhatWeDo />
      </SlideContainer>
      <SlideContainer>
        <WhatWeDo />
      </SlideContainer>
    </div>
  );
}
