import React from 'react';

import { FullLayout, Meta } from '@layouts';
import AboutShotInfoSection from '@sections/AboutUs/AboutShotInfoSection';
import CompanyMissionSection from '@sections/AboutUs/CompanyMissionSection';
import CallToAction2 from '@sections/AboutUs/CallToAction2';
import GallerySection from '@sections/AboutUs/GallerySection';
import TeamSection from '@sections/AboutUs/TeamSection';
import CounterSection from '@sections/Home/CounterSection';
import CallToActionSection from '@sections/Home/CallToActionSection';
import TopBanner from '@components/Common/TopBanner';

const AboutUsPage = () => {
  return (
    <FullLayout meta={<Meta />}>
      <div className="w-full">
        <div className="about-page pb-0">
          <TopBanner title="About Us" />
          <AboutShotInfoSection />
          <CompanyMissionSection />
          <CallToAction2 />
          <GallerySection />
          <TeamSection />
          <CounterSection />
          <CallToActionSection />
        </div>
      </div>
    </FullLayout>
  );
};

export default AboutUsPage;
