import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Button } from '@components/Common';
import LinearProgress from '@components/Common/LinearProgress';

const data = [
  '/assets/images/client-logo/logo-1.png',
  '/assets/images/client-logo/logo-2.png',
  '/assets/images/client-logo/logo-3.png',
  '/assets/images/client-logo/logo-4.png',
  '/assets/images/client-logo/logo-5.png',
  '/assets/images/client-logo/logo-1.png',
  '/assets/images/client-logo/logo-2.png',
];

const SkillsSection = () => {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    swipeToSlide: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 968,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="skills-section py-25 bg-white">
      <div className="container mx-auto">
        <h1 className="section-title">Our Skills</h1>
        <p className="section-description">
          Our skills are the cornerstone of our excellence, encompassing a versatile spectrum of expertise that ranges from innovative technology solutions to creative design, allowing us to deliver exceptional results and meet the diverse needs of our valued clients.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
          <div className="">
            <h2 className="text-34 font-bold">Simple To Start</h2>
            <p className="text-gray-500 pt-3 pb-8">
              We streamlines the onboarding process, making it easy and intuitive for you to initiate and experience the exceptional services and solutions we offer.
            </p>
            {/* <Button className="text-13 px-6">Contact Us</Button> */}
          </div>
          <div className="flex flex-col mt-14 gap-3">
            <LinearProgress value={90} label="Mobile Development" />
            <LinearProgress value={85} label="Web Development" />
            <LinearProgress value={93} label="Software Architect" />
            <LinearProgress value={75} label="Graphic designs" />
          </div>
        </div>
        {/* <div className="mt-20">
          <Slider {...settings}>
            {data.map((slide, index) => (
              <div key={index} className="!flex flex-col items-center text-center">
                <img src={slide} alt={`Logo ${index}`} />
              </div>
            ))}
          </Slider>
        </div> */}
      </div>
    </section>
  );
};

export default SkillsSection;
