import React, { FC } from 'react';
import { IIconProps } from './types';
import { Icon } from './Icon';

export const EyeIcon: FC<IIconProps> = (props) => (
  <Icon baseWidth={24} baseHeight={24} {...props}>
    {(width, height, color) => (
      <svg width={width} height={height} fill={color} viewBox="0 0 1792 1280">
        <path
          fill="currentColor"
          d="M1664 704q-152-236-381-353q61 104 61 225q0 185-131.5 316.5T896 1024T579.5 892.5T448 576q0-121 61-225q-229 117-381 353q133 205 333.5 326.5T896 1152t434.5-121.5T1664 704zM944 320q0-20-14-34t-34-14q-125 0-214.5 89.5T592 576q0 20 14 34t34 14t34-14t14-34q0-86 61-147t147-61q20 0 34-14t14-34zm848 384q0 34-20 69q-140 230-376.5 368.5T896 1280t-499.5-139T20 773Q0 738 0 704t20-69q140-229 376.5-368T896 128t499.5 139T1772 635q20 35 20 69z"
        />
      </svg>
    )}
  </Icon>
);
