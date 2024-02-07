import React, { ComponentProps, FC, ReactNode } from 'react';
import classnames from 'classnames';

type TextAreaProps = {
  label?: string;
  className?: string;
  icon?: ReactNode;
} & ComponentProps<'textarea'>;

export const TextArea: FC<TextAreaProps> = ({
  className,
  color = 'yellow',
  name,
  label,
  placeholder,
  icon,
  required = false,
  ...restProps
}) => {
  return (
    <div className="relative flex flex-col w-full box-content">
      {label && (
        <span className="text-white text-md mb-2">
          {label} {required ? '*' : ''}
        </span>
      )}
      <textarea
        className={classnames(
          'min-h-30 pt-3.5 pb-1.5 pr-4 pl-4 text-3.5 w-full text-gray-100 placeholder-gray-100 transition-all duration-75 bg-transparent border-2 border-gray-50 focus:border-blue-50',
          className
        )}
        name={name}
        placeholder={placeholder}
        rows={3}
        {...restProps}
      />
      {icon && <div className="absolute left-3.5 top-3.5 text-gray-100">{icon}</div>}
    </div>
  );
};
