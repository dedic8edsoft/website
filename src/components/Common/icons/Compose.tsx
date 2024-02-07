import React, { FC } from 'react';
import { IIconProps } from './types';
import { Icon } from './Icon';

export const ComposeIcon: FC<IIconProps> = (props) => (
  <Icon baseWidth={24} baseHeight={24} {...props}>
    {(width, height, color) => (
      <svg width={width} height={height} fill={color} viewBox="0 0 32 32">
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M27 15v15H2V5h15m13 1l-4-4L9 19l-2 6l6-2Zm-8 0l4 4ZM9 19l4 4Z"
        />
      </svg>
    )}
  </Icon>
);
