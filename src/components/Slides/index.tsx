import { lazy, Suspense } from 'react';
import './style.scss';

const WhoWeAre = lazy(() => import('./WhoWeAre'));
const WhatWeDo = lazy(() => import('./WhatWeDo'));
const ContactUs = lazy(() => import('./ContactUs'));
const HowWeDoIt = lazy(() => import('./HowWeDoIt'));
const WhatWeDone = lazy(() => import('./WhatWeDone'));

// To do Suspense for loading animation on Start

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
