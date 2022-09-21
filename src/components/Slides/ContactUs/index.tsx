import './style.scss';
import SlideContainer from '../SlideContainer';

export default function WhatWeDo() {
  return (
    <SlideContainer>
      <div className="flex flex-col w-full ">
        <div className="contact h-[50vh] w-screen">
          <h1 className="contact_text">Get to know us.</h1>
          <button type="button" className="contact_btn">
            Don&apos;t be a stranger email us
          </button>
        </div>
        <div className="work contact place-items-center h-[50vh] w-screen">
          <h1 className="contact_text"> Work with us</h1>
          <button type="button" className="contact_btn">
            Feel free to message
          </button>
        </div>
      </div>
    </SlideContainer>
  );
}
