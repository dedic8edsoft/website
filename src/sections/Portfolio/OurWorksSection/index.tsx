import React, { useState } from 'react';

import { Button } from '@components/Common';
import { SearchIcon } from '@components/Common/icons';

const categories = [
  {
    label: 'All',
    value: 'ALL',
  },
  // {
  //   label: 'Photography',
  //   value: 'PHOTOGRAPHY',
  // },
  // {
  //   label: 'iOS App',
  //   value: 'IOS-APP',
  // },
  {
    label: 'Development',
    value: 'DEVELOPMENT',
  },
  {
    label: 'Design',
    value: 'DESIGN',
  },
];

const data = [
  {
    cats: ['ALL', 'DESIGN'],
    image: '/assets/images/portfolio/portfolio-1.jpg',
  },
  {
    cats: ['ALL', 'DESIGN'],
    image: '/assets/images/portfolio/portfolio-2.jpg',
  },
  {
    cats: ['ALL', 'DEVELOPMENT'],
    image: '/assets/images/portfolio/portfolio-3.jpg',
  },
  {
    cats: ['ALL', 'DEVELOPMENT'],
    image: '/assets/images/portfolio/portfolio-4.jpg',
  },
  {
    cats: ['ALL', 'DESIGN'],
    image: '/assets/images/portfolio/portfolio-5.jpg',
  },
  {
    cats: ['ALL', 'DEVELOPMENT', 'DESIGN'],
    image: '/assets/images/portfolio/portfolio-6.jpg',
  },
  {
    cats: ['ALL', 'DESIGN'],
    image: '/assets/images/portfolio/portfolio-7.jpg',
  },
  {
    cats: ['ALL', 'DEVELOPMENT', 'DESIGN'],
    image: '/assets/images/portfolio/portfolio-8.jpg',
  },
];

const OurWorksSection = () => {
  const [selectedCat, setSelectedCat] = useState('ALL');

  return (
    <section className="our-works-section py-20">
      <div className="container mx-auto">
        <h1 className="section-title">Our Works</h1>
        <p className="section-description">
          Explore a showcase of our proudest achievements and projects, where we exemplify our commitment to excellence, creativity, and innovation across diverse industries, leaving a lasting mark on every endeavor.
        </p>
      </div>
      <div className="pt-20">
        <div className="flex justify-center gap-3 flex-wrap">
          {categories.map((cat) => (
            <Button
              key={cat.value}
              className="rounded-0 text-13"
              onClick={() => setSelectedCat(cat.value)}
            >
              {cat.label}
            </Button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-10 px-6">
          {data
            .filter((item) => item.cats.includes(selectedCat))
            .map((item, index) => (
              <div
                key={index}
                className="w-full h-full aspect-square group bg-contain"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="relative w-full h-full flex-center opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                  <div className="absolute left-0 top-0 right-0 bottom-0 bg-black opacity-60 z-0" />
                  <div className="flex flex-col items-center z-10">
                    <div className="w-11 h-11 flex-center bg-primary rounded-full mb-3">
                      <SearchIcon className="text-white" />
                    </div>
                    <h5 className="text-white text-16 font-semibold">AirBnb Postcard</h5>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default OurWorksSection;
