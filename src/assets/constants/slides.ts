type SlideItem = {
  name: string;
  id: number;
  component: string;
};
const SLIDES: SlideItem[] = [
  {
    name: 'Who We Are',
    id: 1,
    component: 'WhoWeAre',
  },
  {
    name: 'What We Do',
    id: 2,
    component: 'WhatWeDo',
  },
  {
    name: "What We've Done",
    id: 3,
    component: 'WhatWeDone',
  },
  {
    name: 'How We Do It',
    id: 4,
    component: 'HowWeDoIt',
  },
  {
    name: 'Contact Us',
    id: 5,
    component: 'ContactUs',
  },
];

export default SLIDES;
