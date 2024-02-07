import React, { FC } from 'react';

import { IIconProps } from '@components/Common/icons/types';
import { Icon } from '@components/Common/icons/Icon';

export const PlusIcon: FC<IIconProps> = (props) => (
  <Icon baseWidth={30} baseHeight={30} {...props}>
    {(width, height, color) => (
      <>
        <svg width={width} height={height} fill={color} viewBox="0 0 50 50">
          <rect fill="none" height="50" width="50" />
          <line
            fill="none"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeWidth="4"
            x1="9"
            x2="41"
            y1="25"
            y2="25"
          />
          <line
            fill="none"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeWidth="4"
            x1="25"
            x2="25"
            y1="9"
            y2="41"
          />
        </svg>
      </>
    )}
  </Icon>
);
