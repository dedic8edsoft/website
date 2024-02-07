import React from 'react';

import { ArrowRightIcon } from '@components/Common/icons';
import { Button } from '@components/Common';

const data = [
  {
    mode: 'Basic',
    price: '19',
    description: 'Perfect for single freelancers who work by themselves',
    items: [
      '1GB Disk Space',
      '10 Email Account',
      'Script Installer',
      '1 GB Storage',
      '2 GB Bandwidth',
      '24/7 Tech Support',
    ],
  },
  {
    mode: 'Standard',
    price: '39',
    description: 'Suitable for small businesses with up to 5 employees',
    items: [
      '1GB Disk Space',
      '50 Email Account',
      'Script Installer',
      '1 GB Storage',
      '2 GB Bandwidth',
      '24/7 Tech Support',
    ],
  },
  {
    mode: 'Enterprise',
    price: '59',
    description: 'Great for large businesses with more than 5 employees',
    items: [
      'Unlimited Disk Space',
      'Unlimited Email Account',
      'Script Installer',
      'Unlimited Storage',
      'Unlimited Bandwidth',
      '24/7 Tech Support',
    ],
  },
];

const PlansSection = () => {
  return (
    <section
      className="relative plans-section py-25 bg-cover bg-center"
      style={{ backgroundImage: 'url(/assets/images/pricing-bg.jpg)' }}
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 opacity-60 bg-black z-0" />
      <div className="container mx-auto">
        <h1 className="section-title text-white">Our Greatest Plans</h1>
        <p className="section-description text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium soluta deserunt
          eaque, est, quia hic odit sed incidunt officiis quidem.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 mt-20">
          {data.map((plan) => (
            <div key={plan.mode} className="bg-white pt-10 pb-16 px-8 sm:px-14 flex flex-col z-10">
              <span className="uppercase text-14">{plan.mode}</span>
              <span className="text-primary text-50 font-bold my-2">${plan.price}</span>
              <p className="text-gray-500 text-13">{plan.description}</p>
              <div className="flex flex-col gap-5 mt-7 text-gray-500 text-14">
                {plan.items.map((item) => (
                  <div key={item} className="flex items-center gap-1">
                    <ArrowRightIcon size={20} />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
              <Button className="w-fit mt-10 text-13 px-6">Sign Up</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
