import './style.scss';
import SlideContainer from '../SlideContainer';

import Button from '../../Button';

export default function WhatWeDo() {
  return (
    <SlideContainer>
      <div className="flex flex-col w-full ">
        <div className="contact h-[50vh] w-screen">
          <h1 className="contact_text">Get to know us.</h1>
          <Button
            text="Don't be a stranger email us"
            style={{ width: '250px' }}
          />
        </div>
        <div className="work contact place-items-center h-[50vh] w-screen relative">
          <h1 className="contact_text"> Work with us</h1>
          <Button text="Feel free to message" style={{ width: '200px' }} />
          <div className="footer ">
            <h4 className="w-full absolute bottom-5 text-md text-white flex justify-center">
              Copyright © 2022 | Hasoru | All rights reserved.
            </h4>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
}
