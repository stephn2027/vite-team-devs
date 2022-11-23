/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-use-before-define */
import { useEffect, useContext } from 'react';
import { gsap } from 'gsap';
import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';
import Splitting from 'splitting';
import { Observer } from 'gsap/Observer';
import Slide from '../utils/slide';

import Navigation from '../components/Navigation';
import AllSlides from '../components/Slides';
import AnimatedCursor from '../components/AnimatedCursor';
import ScrollOrDrag from '../components/ScrollOrDrag';

import { ThemeContextType } from '../@types/theme';
import { ThemeContext } from '../context/themeContext';

gsap.registerPlugin(Observer);
Splitting();
function Main() {
  const { changeTheme, scrollEnable } = useContext(
    ThemeContext
  ) as ThemeContextType;
  useEffect(() => {
    const DOM = {
      slides: [...document.querySelectorAll('.slide')],
      navigationItems: document.querySelectorAll(
        '.frame__nav > .frame__nav-button'
      ),
    };
    // total number of slides
    const totalSlides = DOM.slides.length;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const slidesArr: any[] = [];
    DOM.slides.forEach((slide) => {
      const SlideClass = new Slide(slide);
      slidesArr.push(SlideClass);
    });

    // current slide position
    let current = -1;
    // check if animation is in progress
    let isAnimating = false;

    const setCurrentSlide = (position) => {
      // fix when modal opened it triggers
      if (scrollEnable) return;

      if (current !== -1) {
        slidesArr[current].DOM.el.classList.remove('slide--current');
      }

      current = position;
      slidesArr[current].DOM.el.classList.add('slide--current');

      DOM.navigationItems[current].classList.add('frame__nav-button--current');
    };

    const next = () => {
      const newPosition = current < totalSlides - 1 ? current + 1 : 0;
      navigate(newPosition);
    };

    const prev = () => {
      const newPosition = current > 0 ? current - 1 : totalSlides - 1;
      navigate(newPosition);
    };

    const navigate = (newPosition) => {
      isAnimating = true;
      const tempArray = Array.from(
        document.querySelectorAll('.frame__nav > .frame__nav-button')
      );
      if (newPosition === 1 || newPosition === 3) {
        changeTheme('light');
        tempArray.splice(newPosition, 1);
        tempArray.forEach((arrayElement, index) => {
          tempArray[index].classList.add('link-black');
        });
      } else {
        changeTheme('dark');
        tempArray.forEach((arrayElement, index) => {
          tempArray[index].classList.remove('link-black');
        });
      }
      // change navigation current class
      DOM.navigationItems[current].classList.remove(
        'frame__nav-button--current'
      );
      DOM.navigationItems[newPosition].classList.add(
        'frame__nav-button--current'
      );
      // navigation direction
      const direction =
        // eslint-disable-next-line no-nested-ternary
        current < newPosition
          ? current === 0 && newPosition === totalSlides - 1
            ? 'prev'
            : 'next'
          : current === totalSlides - 1 && newPosition === 0
          ? 'next'
          : 'prev';

      const currentSlide = slidesArr[current];
      current = newPosition;
      const upcomingSlide = slidesArr[current];

      gsap
        .timeline({
          defaults: {
            duration: 1.6,
            ease: 'power3.inOut',
          },
          onComplete: () => {
            currentSlide.DOM.el.classList.remove('slide--current');
            // Close the current slide if it was open
            isAnimating = false;
          },
        })
        .addLabel('start', 0)

        // Place coming slide either above (translate -100%) or below (translate 100%) and the slide__inner to the opposite translate.
        .set(
          upcomingSlide.DOM.el,
          {
            yPercent: direction === 'next' ? 100 : -100,
          },
          'start'
        )
        .set(
          upcomingSlide.DOM.inner,
          {
            yPercent: direction === 'next' ? -100 : 100,
          },
          'start'
        )

        // Add current class
        .add(() => {
          upcomingSlide.DOM.el.classList.add('slide--current');
        }, 'start')

        // Current slide moves either up or down (translate 100% or -100%)
        .to(
          currentSlide.DOM.el,
          {
            yPercent: direction === 'next' ? -100 : 100,
          },
          'start'
        )
        // Upcoming slide translates to 0
        .to(
          [upcomingSlide.DOM.el, upcomingSlide.DOM.inner],
          {
            yPercent: 0,
          },
          'start'
        );
    };
    const SlideAnimation = Observer.create({
      type: 'wheel,touch,pointer',
      onDown: () => !isAnimating && prev(),
      onUp: () => !isAnimating && next(),
      // invert the mouse wheel delta
      wheelSpeed: -1,
      tolerance: 10,
    });
    const initEvents = () => {
      // Links navigation
      [...DOM.navigationItems].forEach((item, position) => {
        item.addEventListener('click', () => {
          if (current === position || isAnimating) return;
          navigate(position);
        });
      });
    };

    // disable the All observer sroll when scrollEnable is faulty
    scrollEnable
      ? Observer.getAll().forEach((o) => o.disable())
      : SlideAnimation.enable();

    // Set current slide and initialize events
    setCurrentSlide(0);
    initEvents;
  }, [changeTheme, scrollEnable]);
  return (
    <>
      <div className="frame">
        <AnimatedCursor />
        <Navigation />
        <ScrollOrDrag />
      </div>
      <AllSlides />
    </>
  );
}

export default Main;
