import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import STACKS from '../../../assets/constants/stacks';
import './style.scss';
import Icon from '../../Icons';

export default function Stacks() {
  const [active, setActive] = useState(1);
  const [width, setWidth] = useState(window.innerWidth);
  const stacks = useRef(null);
  const animation = useRef(null);
  const windowSizeSm = 360;
  const windowSizeLg = 1280;

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
    });
    if (width < windowSizeSm) {
      if (active === 1) {
        animation.current = gsap.timeline().to(stacks.current, {
          x: 0,
        });
      }
      if (active === 2) {
        animation.current = gsap.timeline().to(stacks.current, {
          x: 60,
        });
      }
      if (active === 3) {
        animation.current = gsap.timeline().to(stacks.current, {
          x: 120,
        });
      }
      if (active === 4) {
        animation.current = gsap.timeline().to(stacks.current, {
          x: 180,
        });
      }
    } else if (width >= windowSizeLg) {
      if (active === 1) {
        animation.current = gsap.timeline().to(stacks.current, {
          x: 0,
        });
      }
      if (active === 2) {
        animation.current = gsap.timeline().to(stacks.current, {
          x: 150,
        });
      }
      if (active === 3) {
        animation.current = gsap.timeline().to(stacks.current, {
          x: 300,
        });
      }
      if (active === 4) {
        animation.current = gsap.timeline().to(stacks.current, {
          x: 450,
        });
      }
    } else {
      if (active === 1) {
        animation.current = gsap.timeline().to(stacks.current, {
          x: 0,
        });
      }
      if (active === 2) {
        animation.current = gsap.timeline().to(stacks.current, {
          x: 100,
        });
      }
      if (active === 3) {
        animation.current = gsap.timeline().to(stacks.current, {
          x: 200,
        });
      }
      if (active === 4) {
        animation.current = gsap.timeline().to(stacks.current, {
          x: 300,
        });
      }
    }

    return () => {
      animation.current.kill();
    };
  }, [active, width]);

  function handleActive(id) {
    setActive(id);
  }
  return (
    <div className="stacks-style">
      <div className="tabs">
        <div className="slider" role="button" aria-hidden="true" ref={stacks} />
        {STACKS.map(({ id, title }) => (
          <li
            className={`tab ${active === id ? 'tab-active' : ''}`}
            onClick={() => handleActive(id)}
            key={id}
            role="presentation"
            aria-hidden="true"
          >
            {title}
          </li>
        ))}
      </div>
      {STACKS.map(({ id, tech }) => (
        <div
          key={id}
          className={`tab-content ${
            active === id ? 'tab-content-show' : 'tab-content-hide'
          }`}
        >
          {tech.map((icon) => (
            <Icon
              IconName={icon}
              key={icon}
              style={{
                size: width < windowSizeSm ? '1.7rem' : '2.7rem',
                color: '#0e0e12',
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
