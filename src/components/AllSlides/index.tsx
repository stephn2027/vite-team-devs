import './style.scss';
import WhatWeDo from '../Slides/WhatWeDo';
import ContactUs from '../Slides/ContactUs';

export default function Slides() {
  return (
    <div className="SlideContainer">
      <WhatWeDo />
      <WhatWeDo />
      <WhatWeDo />
      <ContactUs />
    </div>
  );
}
