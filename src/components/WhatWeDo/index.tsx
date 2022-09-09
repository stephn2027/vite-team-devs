import ContentInfo from './ContentInfo';
import ContentSteps from './ContentSteps';
import './style.scss';

export default function WhatWeDo() {
  return (
    <div className="flex place-items-center wwd-style">
      <div className="grid flex-grow wwd-style_content">
        <ContentInfo />
      </div>

      <div className="grid flex-grow wwd-style_content">
        <ContentSteps />
        </div>
    </div>
  );
}
