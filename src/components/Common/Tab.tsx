import classNames from 'classnames';
import React, { useMemo, useState } from 'react';

interface ITabProps {
  data: {
    id: number;
    name: string;
    content: string;
  }[];
}

export const Tab = ({ data }: ITabProps) => {
  const [activeTabId, setActiveTabId] = useState(data[0].id);

  const activeTabContent = useMemo(() => {
    return data.find((item) => item.id === activeTabId)?.content;
  }, [activeTabId]);

  return (
    <div className="border border-gray-50">
      <div className="flex">
        {data.map((item, index) => (
          <div
            key={item.id}
            className={classNames(
              'flex-1 px-4 py-2 h-12.5 text-3.5 text-gray-100 transition-all duration-300 cursor-pointer border-r border-b border-gray-50 flex justify-center items-center capitalize',
              activeTabId === item.id && 'text-blue-100 border-b-transparent',
              index === data.length - 1 && 'border-r-0'
            )}
            onClick={() => setActiveTabId(item.id)}
          >
            <p className="whitespace-nowrap">{item.name}</p>
          </div>
        ))}
      </div>
      <div className="p-7.5">
        <p className="text-3.5 text-gray-100 leading-6">{activeTabContent}</p>
      </div>
    </div>
  );
};
