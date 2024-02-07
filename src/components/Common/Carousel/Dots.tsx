import classNames from 'classnames';

type Props = {
  itemsLength: number;
  selectedIndex: number;
};

const Dots = ({ itemsLength, selectedIndex }: Props) => {
  const arr = new Array(itemsLength).fill(0);
  return (
    <div className="flex gap-2 my-2 justify-center items-center -translate-y-20 h-0">
      {arr.map((_, index) => {
        const selected = index === selectedIndex;
        return (
          <div
            className={classNames({
              'w-3 h-3 bg-white rounded-full': true,
              'bg-transparent !w-2.5 !h-2.5 border-2 border-white rounded-full': !selected,
            })}
            key={index}
          ></div>
        );
      })}
    </div>
  );
};

export default Dots;
