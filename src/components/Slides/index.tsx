import './style.scss';
import WhoWeAre from './WhoWeAre';
import WhatWeDo from './WhatWeDo';
import ContactUs from './ContactUs';
import WhatWeDone from './WhatWeDone';

export default function Slides() {
  return (
    <div className="SlideContainer">
      <WhatWeDone />
      <WhoWeAre />
      <WhatWeDo />
      <WhatWeDo />
      <ContactUs />
    </div>
  );
}
