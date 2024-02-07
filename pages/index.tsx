import React from 'react';

import { FullLayout, Meta } from '@layouts';
import HomeBanner from '@sections/Home/Banner';
import OfferSection from '@sections/Home/OfferSection';
import AboutSection from '@sections/Home/AboutSection';
import CallToActionSection from '@sections/Home/CallToActionSection';
import CounterSection from '@sections/Home/CounterSection';
import BlogSection from '@sections/Home/BlogSection';
import TeamSliderSection from '@sections/Home/TeamSliderSection';

const Index = () => {
  return (
    <FullLayout meta={<Meta />}>
      <div className="w-full">
        <div className="main-home-section pb-0">
          <HomeBanner />
          <OfferSection />
          <AboutSection />
          <CallToActionSection />
          <CounterSection />
          {/* <TeamSliderSection /> */}
          {/* <BlogSection /> */}
        </div>
      </div>
    </FullLayout>
  );
};

export default Index;
