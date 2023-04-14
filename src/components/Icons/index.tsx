import React from 'react';
import * as TechIcons from 'react-icons/si';
import { IconContext } from 'react-icons';
// For Icon Usage refer here:
// https://react-icons.github.io/react-icons/icons?name=si

type IconProps = {
  IconName?: string;
  style?: React.CSSProperties | undefined;
};
export default function Icon({ IconName, style }: IconProps) {
  const icon = React.createElement(TechIcons[IconName]);
  return (
    <IconContext.Provider value={style}>
      <span>{icon}</span>
    </IconContext.Provider>
  );
}
const styles = {
  display: 'block',
};
Icon.defaultProps = {
  IconName: 'SiTypescript',
  style: styles,
};
