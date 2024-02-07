import React, { FC, MouseEventHandler, ReactElement, useMemo } from 'react';
import Link from 'next/link';
import classnames from 'classnames';

type ButtonVariant = 'standard' | 'outline';
type ButtonColor = 'default' | 'primary' | 'info' | 'green' | 'red' | 'white' | string;
type IconPosition = 'left' | 'right';

export interface IButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
  color?: ButtonColor;
  rounded?: boolean;
  icon?: ReactElement;
  iconPosition?: IconPosition;
  iconClass?: string;
  type?: 'button' | 'submit' | 'reset';
  link?: string;
  href?: string;
  disabled?: boolean;
  responsive?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button: FC<IButtonProps> = ({
  children,
  className = '',
  variant = 'standard',
  color = 'primary',
  rounded = false,
  iconPosition = 'left',
  iconClass = '',
  icon,
  responsive = true,
  link,
  href,
  ...props
}) => {
  const buttonTheme = useMemo(() => {
    const classes: string[] = [];
    if (variant === 'outline') {
      classes.push('border border-black-light hover:bg-black hover:text-white transition-all');
    }
    switch (color) {
      case 'primary':
        if (variant === 'standard') {
          classes.push('bg-primary text-white');
        } else {
          classes.push('text-primary border-primary hover:bg-primary hover:text-white');
        }
        break;

      case 'secondary':
        if (variant === 'standard') {
          classes.push('bg-yellow text-black border-black hover:text-white hover:bg-black');
        } else {
          classes.push('text-primary border-primary hover:bg-primary hover:text-white');
        }
        break;

      case 'info':
        if (variant === 'standard') {
          classes.push('bg-info text-white');
        } else {
          classes.push('text-info border-info hover:bg-info hover:text-white');
        }
        break;

      case 'white':
        if (variant === 'standard') {
          classes.push('bg-white text-primary');
        } else {
          classes.push('text-white border-white hover:bg-white hover:text-primary');
        }
        break;
      case 'green':
        if (variant === 'standard') {
          classes.push('bg-green-dark text-white hover:bg-green-light');
        } else {
          classes.push('text-green-dark border-green-dark hover:bg-green-dark hover:text-white');
        }
        break;
      case 'red':
        if (variant === 'standard') {
          classes.push('bg-red text-white hover:bg-primary');
        } else {
          classes.push('text-red border-red hover:bg-red hover:text-white');
        }
        break;
    }

    return classes;
  }, [variant, color]);
  const button = (
    <button
      className={classnames(
        'min-h-10 min-w-[52px]',
        'inline-flex items-center justify-center px-10 py-3 text-3.5 rounded-[40px] uppercase',
        'outline-none transition-all duration-300',
        rounded && '!rounded-full',
        buttonTheme,
        className
      )}
      {...props}
    >
      {iconPosition === 'left' && !!icon && (
        <div className={classnames('flex-shrink-0 flex items-center', iconClass || 'mr-2')}>
          {icon}
        </div>
      )}
      {children}
      {iconPosition === 'right' && !!icon && (
        <div className={classnames('flex-shrink-0 flex items-center', iconClass || 'ml-2')}>
          {icon}
        </div>
      )}
    </button>
  );

  if (link) {
    return <Link href={link}>{button}</Link>;
  }

  if (href) {
    return (
      <a href={href} target="_blank">
        {button}
      </a>
    );
  }

  return button;
};
