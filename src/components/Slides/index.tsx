import './style.scss';
import WhoWeAre from './WhoWeAre';
import WhatWeDo from './WhatWeDo';
import ContactUs from './ContactUs';
import HowWeDoIt from './HowWeDoIt';
import WhatWeDone from './WhatWeDone';

export default function Slides() {
  return (
    <div className="SlideContainer">
      <WhoWeAre />
      <WhatWeDo />
      <WhatWeDone />
      <HowWeDoIt />
      <ContactUs />
    </div>
  );
}
