import React from 'react';

import { CheckCircleIcon } from '@components/Common/icons';
import { Button } from '@components/Common';

const data = [
  'We specialize in delivering innovative solutions tailored to meet your unique needs, offering a diverse range of services that seamlessly blend creativity, technology, and strategic thinking.',
  'Explore the full spectrum of our capabilities, from transformative digital experiences and robust software development to strategic consulting, all aimed at empowering your business for sustained growth and success.',
  'Our dedicated team of experts is committed to translating your vision into reality, leveraging the latest technologies and industry best practices to ensure your business stays ahead in today\'s dynamic marketplace.',
  'With a keen focus on client satisfaction, we take pride in delivering exceptional results through a collaborative approach, working closely with you to understand your goals and surpass your expectations.',
  'Discover how we redefine possibilities and drive innovation. Whether you are a startup seeking a digital presence or an established enterprise aiming for digital transformation, [Company Name] is your partner in achieving excellence.',
];

const AboutSection = () => {
  return (
    <div className="offer-section w-full py-25 bg-gray-800">
      <div className="container mx-auto">
        <h1 className="section-title">We Are Dedic8ed Soft</h1>
        {/* <p className="section-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam reprehenderit
          accusamus labore iusto, aut, eum itaque illo totam tempora eius.
        </p> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 pt-20">
          <div className="flex justify-center">
            <img className="w-full h-fit " src="/assets/images/about/about-2.png" alt="About" />
          </div>
          <div className="text-gray-500 flex flex-col gap-2 pr-4">
            {data.map((item) => (
              <div key={item} className="flex gap-4">
                <CheckCircleIcon size={24} className="mt-2" />
                <p>{item}</p>
              </div>
            ))}
            {/* <Button className="w-fit mt-6 text-13 px-6">Learn More</Button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
