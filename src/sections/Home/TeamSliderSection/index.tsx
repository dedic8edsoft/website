import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ChatBubblesIcon } from '@components/Common/icons';

const data = [
  {
    id: 1,
    name: 'William Martin',
    job: 'CEO',
    company: 'Company Name',
    image: '/assets/images/client-logo/clients-1.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nulla, soluta dolorum. Eos earum, magni asperiores, unde corporis labore, enim, voluptatum officiis voluptates alias natus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, officia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, quia?',
  },
  {
    id: 2,
    name: 'Emma Harrison',
    job: 'CEO',
    company: 'Company Name',
    image: '/assets/images/client-logo/clients-2.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nulla, soluta dolorum. Eos earum, magni asperiores, unde corporis labore, enim, voluptatum officiis voluptates alias natus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, officia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, quia?',
  },
  {
    id: 3,
    name: 'Alexander Lucas',
    job: 'CEO',
    company: 'Company Name',
    image: '/assets/images/client-logo/clients-3.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nulla, soluta dolorum. Eos earum, magni asperiores, unde corporis labore, enim, voluptatum officiis voluptates alias natus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, officia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, quia?',
  },
];

const TeamSection = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    swipeToSlide: false,
    autoplay: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative team-section pt-25 mb-20 bg-primary">
      <div className="container mx-auto">
        <Slider {...settings}>
          {data.map((slide) => (
            <div key={slide.id} className="!flex flex-col items-center text-center">
              <ChatBubblesIcon className="text-white" size={70} />
              <p className="text-white my-10 max-w-[600px] mx-auto leading-[1.65]">
                {slide.description}
              </p>
              <img className="w-30 h-30 rounded-full" src={slide.image} alt={slide.name} />
              <h3 className="text-28 font-bold my-2">{slide.name}</h3>
              <p>
                {slide.job}, {slide.company}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TeamSection;
