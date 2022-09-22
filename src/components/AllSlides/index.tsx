import './style.scss';
import WhatWeDo from '../Slides/WhatWeDo';
import ContactUs from '../Slides/ContactUs';
import HowWeDo from '../Slides/HowWeDo';

export default function Slides() {
  return (
    <div className="SlideContainer">
      <HowWeDo />
      <WhatWeDo />
      <WhatWeDo />
      <ContactUs />
    </div>
  );
}
