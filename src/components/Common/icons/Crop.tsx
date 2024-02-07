import React, { FC } from 'react';
import { IIconProps } from './types';
import { Icon } from './Icon';

export const CropIcon: FC<IIconProps> = (props) => (
  <Icon baseWidth={24} baseHeight={24} {...props}>
    {(width, height, color) => (
      <svg width={width} height={height} fill={color} viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M17.5 22.5v-4h-12v-12h-4v-1h4v-4h1v16h16v1h-4v4h-1Zm0-6v-10h-10v-1h11v11h-1Z"
        />
      </svg>
    )}
  </Icon>
);
