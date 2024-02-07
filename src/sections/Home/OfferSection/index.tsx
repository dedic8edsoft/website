import React from 'react';

import { AlarmIcon, BriefcaseIcon, EmailIcon, LockIcon } from '@components/Common/icons';

const data = [
  {
    icon: <AlarmIcon size={40} />,
    heading: 'Time Management',
    content:
      'Efficiency meets excellence with our dedicated commitment to time management, ensuring that every moment invested in our solutions translates into optimized processes and accelerated success for your business.',
  },
  {
    icon: <BriefcaseIcon size={40} />,
    heading: 'Business Ideas',
    content:
      'Unleash the power of innovation with our curated reservoir of business ideas, propelling your enterprise towards unprecedented heights of creativity, sustainability, and market distinction.',
  },
  {
    icon: <EmailIcon size={35} />,
    heading: 'Maintenance Support',
    content:
      'Experience uninterrupted operations with our comprehensive maintenance support, where reliability meets efficiency, ensuring your systems run seamlessly, and your business remains resilient.',
  },
  {
    icon: <LockIcon size={40} />,
    heading: 'Secure System',
    content:
      'Safeguard your digital ecosystem with our cutting-edge secure systems, meticulously crafted to fortify your data integrity, protect against cyber threats, and provide you with peace of mind in an ever-evolving digital landscape.',
  },
];

const OfferSection = () => {
  return (
    <div className="offer-section w-full py-25 bg-white">
      <div className="container mx-auto">
        <h1 className="section-title">What Do We Offer</h1>
        <p className="section-description">
        Discover a spectrum of tailored solutions designed to empower your business—ranging from cutting-edge technology services to strategic consultancy, ensuring unparalleled growth and innovation.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-7.5 pt-20">
          <div className="hidden md:flex justify-center">
            <img src={'/assets/images/about/member.jpg'} alt="Member" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 col-span-2 gap-7.5">
            {data.map((item) => (
              <div
                className="flex flex-col items-center py-12.5 px-5 border border-gray-700"
                key={item.heading}
              >
                <div className="w-14 h-14 bg-primary flex-center rounded-full text-white mb-5">
                  {item.icon}
                </div>
                <h2 className="text-26 font-bold mb-2 text-center">{item.heading}</h2>
                <p className="text-center text-gray-500">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferSection;
