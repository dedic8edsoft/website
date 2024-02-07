import React, { FC } from 'react';
import { IIconProps } from './types';
import { Icon } from './Icon';

export const CheckCircleIcon: FC<IIconProps> = (props) => (
  <Icon baseWidth={16} baseHeight={16} {...props}>
    {(width, height, color) => (
      <svg width={width} height={height} fill={color} viewBox="0 0 24 24">
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <path d="m9 11l3 3L22 4" />
        </g>
      </svg>
    )}
  </Icon>
);
