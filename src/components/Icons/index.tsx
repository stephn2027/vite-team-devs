import React from 'react';
import * as TechIcons from 'react-icons/si';

// For Icon Usage refer here:
// https://react-icons.github.io/react-icons/icons?name=si

type IconProps = {
  IconName?: string;
};
export default function Icon({ IconName }: IconProps) {
  const icon = React.createElement(TechIcons[IconName]);
  return (
    <div role="button" aria-hidden="true">
      <span>{icon}</span>
    </div>
  );
}

Icon.defaultProps = {
  IconName: 'SiTypescript',
};
