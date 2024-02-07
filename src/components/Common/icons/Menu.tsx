import React, { FC } from 'react';
import { IIconProps } from './types';
import { Icon } from './Icon';

export const MenuIcon: FC<IIconProps> = (props) => (
  <Icon baseWidth={20} baseHeight={20} {...props}>
    {(width, height, color) => (
      <svg width={width} height={height} fill={color} viewBox="0 0 20 20">
        <path
          fill={color}
          fillRule="evenodd"
          d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"
        />
      </svg>
    )}
  </Icon>
);
