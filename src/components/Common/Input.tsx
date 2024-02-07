import React, { ComponentProps, FC, ReactNode } from 'react';
import classnames from 'classnames';

type InputProps = {
  label?: string;
  className?;
  icon?: ReactNode;
} & ComponentProps<'input'>;

export const Input: FC<InputProps> = ({
  className,
  color = 'yellow',
  name,
  label,
  placeholder,
  required = false,
  icon,
  ...restProps
}) => {
  return (
    <div className="relative flex flex-col w-full box-content">
      {label && (
        <span className="text-gray-100 text-md mb-2">
          {label} {required ? '*' : ''}
        </span>
      )}
      <input
        className={classnames(
          'h-11 py-1 pr-2 px-4 text-14 text-gray-100  w-full placeholder-gray-100 transition-all duration-75 bg-white border-2 border-gray-50 focus:border-blue-100',
          className
        )}
        name={name}
        placeholder={placeholder}
        {...restProps}
      />
      {icon && (
        <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-100">{icon}</div>
      )}
    </div>
  );
};
