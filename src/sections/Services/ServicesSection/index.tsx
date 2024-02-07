import React from 'react';
import classnames from 'classnames';

import {
  AlarmIcon,
  BookIcon,
  BriefcaseIcon,
  CopyIcon,
  CropIcon,
  HomeIcon,
} from '@components/Common/icons';

const data = [
  {
    icon: <CopyIcon size={60} />,
    name: 'Wordpress Theme',
    description:
      'Elevate your online presence with our bespoke WordPress theme services, where we seamlessly blend design expertise and technical proficiency to deliver visually stunning, user-friendly websites that perfectly align with your brand identity.',
  },
  {
    icon: <AlarmIcon size={60} className="text-primary" />,
    name: 'Responsive Design',
    description:
      'Experience the epitome of user engagement and accessibility with our Responsive Design services, where we craft seamlessly adaptable websites that ensure optimal viewing and interaction experiences across a myriad of devices, leaving a lasting impression on your audience.',
  },
  {
    icon: <BookIcon size={60} />,
    name: 'Media & Advertisement',
    description:
      'Amplify your brand\'s reach and impact through our Media & Advertisement services, where we leverage strategic insights and creative prowess to craft compelling campaigns that captivate audiences, drive engagement, and elevate your brand to new heights in the digital landscape.',
  },
  {
    icon: <BriefcaseIcon size={60} className="text-primary" />,
    name: 'Graphic Design',
    description:
      'Transform your brand aesthetic into a visual masterpiece with our Graphic Design services, where our talented team combines artistic flair with strategic thinking to create captivating visuals that not only resonate with your audience but also convey your unique identity and messaging.',
  },
  {
    icon: <CropIcon size={60} />,
    name: 'Apps Development',
    description:
      'Elevate your digital presence with our cutting-edge Apps Development services, where our skilled team combines innovation and functionality to craft seamless and user-centric mobile applications, ensuring your business stays at the forefront of technological advancement.',
  },
  {
    icon: <HomeIcon size={60} className="text-primary" />,
    name: 'Web Development',
    description:
      'Empower your online presence with our Web Development services, where we seamlessly blend creativity and technology to craft dynamic, user-friendly websites that not only captivate visitors but also drive meaningful engagement, reflecting the essence of your brand.',
  },
];

const ServicesSection = () => {
  return (
    <section className="services-section py-25">
      <div className="container mx-auto">
        <h1 className="section-title">Our Services</h1>
        <p className="section-description">
          Our comprehensive suite of services is designed to meet the unique needs of our clients, delivering unmatched quality, innovation, and reliability in every aspect of our offerings.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-20 gap-y-6 lg:gap-0">
          {data.map((item, index) => (
            <div
              key={item.name}
              className={classnames('p-8 flex flex-col items-center', {
                'bg-primary text-white': index % 2 === 0,
              })}
            >
              {item.icon}
              <h4 className="uppercase text-16 font-bold my-4">{item.name}</h4>
              <p className="text-14 text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
