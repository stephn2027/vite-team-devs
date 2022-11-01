import './style.scss';
import WhoWeAre from '../Slides/WhoWeAre';
import WhatWeDo from '../Slides/WhatWeDo';
import ContactUs from '../Slides/ContactUs';

export default function Slides() {
  return (
    <div className="SlideContainer">
      <WhoWeAre />
      <WhatWeDo />
      <WhoWeAre />
      <WhatWeDo />
      <ContactUs />
    </div>
  );
}
