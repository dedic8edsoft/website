import React from 'react';
import Link from 'next/link';

interface TopBannerProps {
  title: string;
}

const TopBanner = ({ title }: TopBannerProps) => {
  return (
    <div
      className="relative pt-35 pb-18 bg-cover"
      style={{ backgroundImage: 'url(/assets/images/about/about-header.jpg)' }}
    >
      <div className="overlay absolute left-0 top-0 right-0 bottom-0 bg-black opacity-80"></div>
      <div className="text-white text-center relative container mx-auto">
        <h2 className="text-32 font-bold mb-5">{title}</h2>
        <p className="text-gray-400">
          <Link href="/" className="text-white">
            Home
          </Link>{' '}
          / {title}
        </p>
      </div>
    </div>
  );
};

export default TopBanner;
