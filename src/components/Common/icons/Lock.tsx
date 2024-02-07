import React, { FC } from 'react';
import { IIconProps } from './types';
import { Icon } from './Icon';

export const LockIcon: FC<IIconProps> = (props) => (
  <Icon baseWidth={24} baseHeight={24} {...props}>
    {(width, height, color) => (
      <svg width={width} height={height} fill={color} viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M6.615 21q-.67 0-1.143-.472Q5 20.056 5 19.385v-8.77q0-.67.472-1.143Q5.944 9 6.615 9H8V7q0-1.671 1.164-2.836T12 3q1.671 0 2.836 1.164T16 7v2h1.385q.67 0 1.143.472q.472.472.472 1.143v8.77q0 .67-.472 1.143q-.472.472-1.143.472H6.615Zm0-1h10.77q.269 0 .442-.173t.173-.442v-8.77q0-.269-.173-.442T17.385 10H6.615q-.269 0-.442.173T6 10.615v8.77q0 .269.173.442t.442.173ZM12 16.5q.633 0 1.066-.434q.434-.433.434-1.066t-.434-1.066Q12.633 13.5 12 13.5t-1.066.434Q10.5 14.367 10.5 15t.434 1.066q.433.434 1.066.434ZM9 9h6V7q0-1.25-.875-2.125T12 4q-1.25 0-2.125.875T9 7v2ZM6 20V10v10Z"
        />
      </svg>
    )}
  </Icon>
);
