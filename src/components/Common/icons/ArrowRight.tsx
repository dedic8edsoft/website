import React, { FC } from 'react';
import { IIconProps } from './types';
import { Icon } from './Icon';

export const ArrowRightIcon: FC<IIconProps> = (props) => (
  <Icon baseWidth={24} baseHeight={24} {...props}>
    {(width, height, color) => (
      <svg width={width} height={height} fill={color} viewBox="0 0 24 24">
        <g id="feArrowRight0" fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
          <g id="feArrowRight1" fill="currentColor">
            <path id="feArrowRight2" d="m9.005 4l8 8l-8 8L7 18l6.005-6L7 6z" />
          </g>
        </g>
      </svg>
    )}
  </Icon>
);
