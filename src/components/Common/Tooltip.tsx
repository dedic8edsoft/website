import { FC, useMemo } from 'react';
import classnames from 'classnames';

type TooltipProps = {
  text?: string;
  position?: string | 'left' | 'center' | 'right';
  arrowPosition?: string | 'left' | 'center' | 'right';
  children: React.ReactNode;
};

export const Tooltip: FC<TooltipProps> = ({
  text = 'tooltip',
  position = 'center',
  arrowPosition = 'center',
  children,
}) => {
  const tooltipTheme = useMemo(() => {
    const classes = [];
    switch (position) {
      case 'left':
        classes.push('-left-2');
        break;
      case 'center':
        classes.push('left-1/2 transform -translate-x-1/2');
        break;
      case 'right':
        classes.push('-right-4');
        break;
    }
    return classes;
  }, [position]);

  const arrowTheme = useMemo(() => {
    const classes = [];
    switch (arrowPosition) {
      case 'left':
        classes.push('left-4');
        break;
      case 'center':
        classes.push('left-1/2 transform -translate-x-1/2');
        break;
      case 'right':
        classes.push('right-4');
        break;
    }

    return classes;
  }, [arrowPosition]);

  return (
    <div className="tooltip group relative text-left">
      <div className="tooltip-body">{children}</div>
      <div
        className={classnames(
          'tooltip-text hidden absolute top-[150%] py-4 px-2.5 w-[215px]',
          'bg-primary-dark text-white rounded-lg transform',
          'group-hover:inline-block',
          tooltipTheme
        )}
      >
        {text}
        <div
          className={classnames(
            'tooltip-arrow absolute top-0 w-0 h-0',
            'border-primary-dark border-[16px] border-t-transparent border-l-transparent border-r-transparent',
            'transform -translate-y-full',
            arrowTheme
          )}
        />
      </div>
    </div>
  );
};
