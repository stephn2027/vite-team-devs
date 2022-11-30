import React, { useState } from 'react';
import STACKS from '../../../assets/constants/stacks';
import './style.scss';
import Icon from '../../Icons';

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
            role="button"
            tabIndex="0"
            aria-hidden="true"
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
          <Icon IconName={tech} />
        </div>
      ))}
    </div>
  );
}
