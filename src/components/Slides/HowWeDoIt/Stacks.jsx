/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import STACKS from '../../../assets/constants/stacks';
import './style.scss';

export default function Stacks() {
  const [active, setActive] = useState(1);
  function handleActive(id) {
    setActive(id);
  }
  return (
    <div className="stacks-style">
      <div className="tabs">
        {STACKS.map(({ id, title }) => (
          <div
            className={`tab ${active === id ? 'tab-active' : ''}`}
            onClick={() => handleActive(id)}
            key={id}
          >
            {title}
          </div>
        ))}
      </div>
      {STACKS.map(({ id, tech }) => (
        <div
          key={id}
          className={`tab-content ${
            active === id ? 'tab-content-show' : 'tab-content-hide'
          }`}
        >
          {tech}
        </div>
      ))}
    </div>
  );
}
