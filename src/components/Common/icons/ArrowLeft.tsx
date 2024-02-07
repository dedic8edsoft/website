import React, { FC } from 'react';
import { IIconProps } from './types';
import { Icon } from './Icon';

export const ArrowLeftIcon: FC<IIconProps> = (props) => (
  <Icon baseWidth={24} baseHeight={24} {...props}>
    {(width, height, color) => (
      <svg width={width} height={height} fill={color} viewBox="0 0 24 24">
        <g id="feArrowLeft0" fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
          <g id="feArrowLeft1" fill="currentColor">
            <path id="feArrowLeft2" d="m15 4l2 2l-6 6l6 6l-2 2l-8-8z" />
          </g>
        </g>
      </svg>
    )}
  </Icon>
);
