import React, { FC } from 'react';
import { IIconProps } from './types';
import { Icon } from './Icon';

export const CloseIcon: FC<IIconProps> = (props) => (
  <Icon baseWidth={36} baseHeight={36} {...props}>
    {(width, height, color) => (
      <svg width={width} height={height} fill={color} viewBox="0 0 24 24">
        <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
      </svg>
    )}
  </Icon>
);
