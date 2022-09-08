import { useRef, useEffect } from 'react';
/* eslint-disable import/extensions */
import './base.css';
import { gsap } from 'gsap';
import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';
import Splitting from 'splitting';
import { Observer } from 'gsap/Observer';
import { preloadImages } from './utils';
import { CursorText } from './cursor';
import { Slide } from './slide';

gsap.registerPlugin(Observer);
Splitting();
function Main() {
  const ref = useRef(null);
  useEffect(() => {
    const DOM = {
      slides: [...document.querySelectorAll('.slide')],
      cursor: document.querySelector('.cursor'),
      backCtrl: document.querySelector('.frame__back'),
      navigationItems: document.querySelectorAll(
        '.frame__nav > .frame__nav-button'
      ),
    };
    // cursor text chars
    DOM.cursorChars = DOM.cursor.querySelectorAll('.word > .char, .whitespace');
    // backCtrl text chars
    DOM.backChars = DOM.backCtrl.querySelectorAll('.word > .char, .whitespace');

    // total number of slides
    const totalSlides = DOM.slides.length;

    const slidesArr = [];
    DOM.slides.forEach((slide) => {
      slidesArr.push(new Slide(slide));
    });

    // current slide position
    let current = -1;
    // check if animation is in progress
    let isAnimating = false;

    const setCurrentSlide = (position) => {
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
            if (currentSlide.isOpen) {
              // eslint-disable-next-line @typescript-eslint/no-use-before-define
              hideContent(currentSlide);
            }

            isAnimating = false;
          },
        })
        .addLabel('start', 0)

        .set(
          [currentSlide.DOM.imgInner, upcomingSlide.DOM.imgInner],
          {
            transformOrigin: direction === 'next' ? '50% 0%' : '50% 100%',
          },
          'start'
        )

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

        // hide the back button and show back the cursor text if the current slide was open
        .add(() => {
          if (currentSlide.isOpen) {
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            toggleCursorBackTexts();
          }
        }, 'start')

        // Current slide moves either up or down (translate 100% or -100%)
        .to(
          currentSlide.DOM.el,
          {
            yPercent: direction === 'next' ? -100 : 100,
          },
          'start'
        )
        .to(
          currentSlide.DOM.imgInner,
          {
            scaleY: 2,
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
        )
        .to(
          upcomingSlide.DOM.imgInner,
          {
            ease: 'power2.inOut',
            startAt: { scaleY: 2 },
            scaleY: 1,
          },
          'start'
        );
    };

    const toggleCursorBackTexts = (isContent) => {
      return gsap
        .timeline({
          onStart: () => {
            gsap.set(DOM.backChars, { opacity: isContent ? 0 : 1 });
            if (isContent) {
              DOM.backCtrl.classList.add('frame__back--show');
            }
          },
          onComplete: () => {
            DOM.backCtrl.classList[isContent ? 'add' : 'remove'](
              'frame__back--show'
            );
            if (!isContent) {
              DOM.backCtrl.classList.remove('frame__back--show');
            }
          },
        })
        .to(DOM.cursorChars, {
          duration: 0.1,
          ease: 'expo',
          opacity: isContent ? 0 : 1,
          stagger: {
            amount: 0.5,
            grid: 'auto',
            from: 'random',
          },
        })
        .to(
          DOM.backChars,
          {
            duration: 0.1,
            ease: 'expo',
            opacity: isContent ? 1 : 0,
            stagger: {
              amount: 0.5,
              grid: 'auto',
              from: 'random',
            },
          },
          0
        );
    };

    const showContent = (position) => {
      if (isAnimating) return;
      isAnimating = true;

      const slide = slidesArr[position];

      slide.isOpen = true;

      gsap
        .timeline({
          defaults: {
            duration: 1.6,
            ease: 'power3.inOut',
          },
          onStart: () => {},
          onComplete: () => {
            isAnimating = false;
          },
        })
        .addLabel('start', 0)
        .add(() => {
          toggleCursorBackTexts('content');
        }, 'start')
        .to(
          slide.DOM.img,
          {
            yPercent: -100,
          },
          'start'
        )
        .set(
          slide.DOM.imgInner,
          {
            transformOrigin: '50% 100%',
          },
          'start'
        )
        .to(
          slide.DOM.imgInner,
          {
            yPercent: 100,
            scaleY: 2,
          },
          'start'
        )
        .to(
          slide.DOM.contentImg,
          {
            startAt: {
              transformOrigin: '50% 0%',
              scaleY: 1.5,
            },
            scaleY: 1,
          },
          'start'
        );
    };

    const hideContent = (slide, animate = false) => {
      // reset values
      isAnimating = true;

      const complete = () => {
        // eslint-disable-next-line no-param-reassign
        slide.isOpen = false;
        isAnimating = false;
      };

      if (animate) {
        gsap
          .timeline({
            defaults: {
              duration: 1.6,
              ease: 'power3.inOut',
            },
            onComplete: complete,
          })
          .addLabel('start', 0)
          .to(
            slide.DOM.img,
            {
              yPercent: 0,
            },
            'start'
          )
          .to(
            slide.DOM.imgInner,
            {
              yPercent: 0,
              scaleY: 1,
            },
            'start'
          );
      } else {
        gsap.set(slide.DOM.img, {
          yPercent: 0,
        });
        gsap.set(slide.DOM.imgInner, {
          yPercent: 0,
          scaleY: 1,
        });
        complete();
      }
    };

    const initEvents = () => {
      // Links navigation
      [...DOM.navigationItems].forEach((item, position) => {
        item.addEventListener('click', () => {
          if (current === position || isAnimating) return;
          navigate(position);
        });
      });

      // Back click
      DOM.backCtrl.addEventListener('click', () => {
        if (isAnimating) return;
        isAnimating = true;
        toggleCursorBackTexts();
        hideContent(slidesArr[current], true);
      });

      // Initialize the GSAP Observer plugin
      Observer.create({
        type: 'wheel,touch,pointer',
        onDown: () => !isAnimating && prev(),
        onUp: () => !isAnimating && next(),
        // invert the mouse wheel delta
        wheelSpeed: -1,
        tolerance: 10,
      });

      // eslint-disable-next-line no-restricted-syntax
      for (const [position, slide] of slidesArr.entries()) {
        slide.DOM.img.addEventListener('click', () => {
          showContent(position);
        });
      }
    };

    // Set current slide
    setCurrentSlide(0);

    // Initialize custom cursor
    // eslint-disable-next-line no-new, no-undef
    new CursorText(DOM.cursor);

    // Initialize the events
    initEvents();

    // Preload images and initialize scrolling animations
    preloadImages('.slide__img-inner').then((_) => {
      document.body.classList.remove('loading');
    });
  }, []);
  return (
    <div className="loading">
      <main>
        <div className="frame">
          <div className="frame__title">
            <a
              className="frame__title-prev"
              href="https://tympanus.net/Development/ImageToContent/"
            >
              Previous demo
            </a>
            <h1 className="frame__title-main">
              Fullscreen Scrolling Slideshow
            </h1>
            <a
              aria-label="Back to the article"
              className="frame__title-back"
              href="https://tympanus.net/codrops/?p=64521"
            >
              <span>&rarr;</span>
            </a>
          </div>
          <nav className="frame__nav">
            <button type="button" className="frame__nav-button unbutton">
              Stronger
            </button>
            <button type="button" className="frame__nav-button unbutton">
              No choice
            </button>
            <button type="button" className="frame__nav-button unbutton">
              Owned no longer
            </button>
            <button type="button" className="frame__nav-button unbutton">
              Assert control
            </button>
            <button type="button" className="frame__nav-button unbutton">
              Cold &amp; detached
            </button>
          </nav>
          <button type="button" className="frame__back unbutton">
            <span data-splitting>&larr; Go back</span>
          </button>
          <span className="frame__info">&darr; Scroll or drag &darr;</span>
        </div>
        <div className="slides">
          <div className="slide">
            <div className="slide__inner">
              <div className="slide__img">
                <div className="slide__img-inner" />
              </div>
              <div className="slide__content">
                <div className="slide__content-img" />
                <h2>Stronger</h2>
                <p>
                  You strung me along, I thought I was strong, but now you have
                  pushed me under. I’ve opened my eyes, and counted the lies,
                  now it is clearer to me. You are just a user, and an abuser,
                  and I refuse to take it.
                </p>
              </div>
            </div>
          </div>
          <div className="slide">
            <div className="slide__inner">
              <div className="slide__content">
                <div className="slide__content-img" />
                <h2>No choice</h2>
                <p>
                  Fall into line, you will do as you’re told. No choice fatigue,
                  your blood is running cold. We lose control, the world will
                  fall apart.
                </p>
              </div>
              <div className="slide__img">
                <div className="slide__img-inner" />
              </div>
            </div>
          </div>
          <div className="slide">
            <div className="slide__inner">
              <div className="slide__content">
                <div className="slide__content-img" />
                <h2>Owned no longer</h2>
                <p>
                  We need a transmutation. One we all conceive. We need a
                  revolution. So long as we stay free.
                </p>
              </div>
              <div className="slide__img">
                <div className="slide__img-inner" />
              </div>
            </div>
          </div>
          <div className="slide">
            <div className="slide__inner">
              <div className="slide__content">
                <div className="slide__content-img" />
                <h2>Assert control</h2>
                <p>
                  Cornered, I’m exhausted with fear. Our love and compassion
                  dissolved. And demons, have materialised in me. Can’t fight
                  them, they’re taking control.
                </p>
              </div>
              <div className="slide__img">
                <div className="slide__img-inner" />
              </div>
            </div>
          </div>
          <div className="slide">
            <div className="slide__inner">
              <div className="slide__content">
                <div className="slide__content-img" />
                <h2>Cold &amp; detached</h2>
                <p>
                  Fate has brought us here to face. Our hopes and dreams erased.
                  Either kill or be killed.
                </p>
              </div>
              <div className="slide__img">
                <div className="slide__img-inner" />
              </div>
            </div>
          </div>
        </div>
        <div className="cursor">
          <span className="cursor__text" data-splitting>
            + Discover more
          </span>
        </div>
      </main>
      <script src="https://tympanus.net/codrops/adpacks/cda_sponsor.js" />
      <script type="module" src="js/index.js" />
    </div>
  );
}

export default Main;
