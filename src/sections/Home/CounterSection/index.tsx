import React from 'react';

import { AlarmIcon, AnalyticsIcon, BoltIcon, ComposeIcon } from '@components/Common/icons';

const data = [
  {
    icon: <AlarmIcon size={50} className="text-primary" />,
    value: 150,
    title: 'Happy Clients',
  },
  {
    icon: <AnalyticsIcon size={40} className="text-primary" />,
    value: 130,
    title: 'Projects completed',
  },
  {
    icon: <ComposeIcon size={35} className="text-primary" />,
    value: 99,
    title: 'Positive feedback',
  },
  {
    icon: <BoltIcon size={50} className="text-primary" />,
    value: 250,
    title: 'Cups of Coffee',
  },
];

const CounterSection = () => {
  return (
    <div className="counter-section bg-white py-20">
      <div className="container mx-auto">
        <h1 className="section-title">Award-Winning Agency</h1>
        <p className="section-description after:hidden">
          As an award-winning agency, our commitment to excellence and innovative solutions has been
          consistently recognized, assuring you that partnering with us means tapping into a proven
          track record of success and distinction.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 py-7.5">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="h-10 flex-center">{item.icon}</div>
              <h2 className="text-35 font-bold">{item.value}</h2>
              <h5 className="text-black-dark text-20">{item.title}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CounterSection;
