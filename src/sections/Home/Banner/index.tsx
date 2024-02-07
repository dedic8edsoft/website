import React from 'react';
import Slider, { CustomArrowProps } from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Button } from '@components/Common';

const data = [
  {
    id: 1,
    image: '/assets/images/slider/slider-bg-1.jpg',
    heading: 'We Combine Design and Creativity',
    content:
      'Create just what you need for your Perfect Website. Choose from a wide range of Elements & simply put them on our Canvas.',
  },
  {
    id: 2,
    image: '/assets/images/slider/slider-bg-2.jpg',
    heading: 'Crafting Digital Experience',
    content:
      'Transforming visions into seamless realities - Elevate your brand with our expertise in crafting digital experiences that captivate and resonate.',
  },
];

const PreviousArrow = ({ style, onClick }: CustomArrowProps) => {
  return (
    <div className="slick-arrow slick-prev !left-10 z-10" style={style} onClick={onClick}>
      <div className="w-17 h-17 rounded-full flex-center bg-primary opacity-50 hover:opacity-100 transition-all duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 15 15">
          <path
            fill="white"
            fillRule="evenodd"
            d="m2.707 8l3.147 3.146l-.708.707L.793 7.5l4.353-4.354l.708.708L2.707 7H14v1H2.707Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

const NextArrow = ({ style, onClick }: CustomArrowProps) => {
  return (
    <div className="slick-arrow slick-next !right-10 z-10" style={style} onClick={onClick}>
      <div className="w-17 h-17 rounded-full flex-center bg-primary opacity-50 hover:opacity-100 transition-all duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 15 15">
          <path
            fill="white"
            fillRule="evenodd"
            d="M9.854 3.146L14.207 7.5l-4.353 4.354l-.708-.708L12.293 8H1V7h11.293L9.146 3.854l.708-.708Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

const HomeBanner = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    swipeToSlide: false,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PreviousArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="home-banner w-screen h-screen">
      <Slider {...settings}>
        {data.map((slide) => (
          <div key={slide.id} className="relative w-screen h-screen">
            <div
              className="w-full h-full bg-no-repeat bg-cover bg-center -z-1"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="w-full h-full bg-black opacity-50" />
            </div>
            <div className="absolute left-0 top-0 right-0 bottom-0 flex-center">
              <div className="flex-center flex-col text-white max-w-[600px] text-center px-4">
                <h1 className="text-40 md:text-60 mb-5 mt-12.5 font-bold">{slide.heading}</h1>
                <p className="mb-5">{slide.content}</p>
                {/* <Button className="text-13 px-6">EXPLORE US</Button> */}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeBanner;
