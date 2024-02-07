import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const data = [
  '/assets/images/company/gallery-1.jpg',
  '/assets/images/company/gallery-2.jpg',
  '/assets/images/company/gallery-3.jpg',
  '/assets/images/company/gallery-4.jpg',
  '/assets/images/company/gallery-5.jpg',
  '/assets/images/company/gallery-2.jpg',
  '/assets/images/company/gallery-3.jpg',
];

const GallerySection = () => {
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
    <div className="gallery-section bg-white py-25">
      <div className="container mx-auto">
        <h1 className="section-title">Sneak Peak Gallery</h1>
        <p className="section-description">
          Embark on a visual journey through our gallery, offering a tantalizing glimpse into the craftsmanship, innovation, and captivating experiences that define company's commitment to excellence
        </p>
      </div>
      <div className="px-4">
        <Slider {...settings}>
          {data.map((slide, index) => (
            <div key={index} className="!flex flex-col items-center text-center">
              <img src={slide} alt={`Gallery ${index}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default GallerySection;
