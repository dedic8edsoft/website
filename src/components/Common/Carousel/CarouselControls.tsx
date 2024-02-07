import classNames from 'classnames';

import { ArrowLeftIcon, ArrowRightIcon } from '@components/Common/icons';

type Props = {
  canScrollPrev: boolean;
  canScrollNext: boolean;
  onPrev(): void;
  onNext(): void;
};
const CarouselControls = (props: Props) => {
  return (
    <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between gap-2 px-4">
      <button
        onClick={() => {
          if (props.canScrollPrev) {
            props.onPrev();
          }
        }}
        disabled={!props.canScrollPrev}
        className={classNames({
          'h-12.5 w-12.5 border-2 border-white bg-transparent flex items-center justify-center text-white opacity-50 hover:opacity-100 transition-all duration-300':
            true,
        })}
      >
        <ArrowLeftIcon />
      </button>
      <button
        onClick={() => {
          if (props.canScrollNext) {
            props.onNext();
          }
        }}
        disabled={!props.canScrollNext}
        className={classNames({
          'h-12.5 w-12.5 border-2 border-white bg-transparent flex items-center justify-center text-white opacity-50 hover:opacity-100 transition-all duration-300':
            true,
        })}
      >
        <ArrowRightIcon />
      </button>
    </div>
  );
};

export default CarouselControls;
