import ContentInfo from './InfoContent';
import ContentSteps from './StepsContent';
import './style.scss';
// <<<<<<< HEAD
// =======
import SlideContainer from '../SlideContainer';
import WWDInfo from './WWDInfo';
// >>>>>>> 298685d075e30329f49f106a0f111bc31cca36f4

export default function WhatWeDo() {
  return (
    <div className="flex place-items-center wwd-style">
      <div className="wwd-style_content wwd-style_info">
        <ContentInfo />
      </div>

      <div className="wwd-style_content wwd-style_steps">
        <ContentSteps />
      </div>
    </div>
  );
}
