import React from 'react';

import { FullLayout, Meta } from '@layouts';
import ServicesSection from '@sections/Services/ServicesSection';
import SkillsSection from '@sections/Services/SkillsSection';
import CounterSection from '@sections/Home/CounterSection';
import TeamSliderSection from '@sections/Home/TeamSliderSection';
import TopBanner from '@components/Common/TopBanner';

const ServicesPage = () => {
  return (
    <FullLayout meta={<Meta />}>
      <div className="w-full">
        <div className="services-page pb-0">
          <TopBanner title="Our Services" />
          <ServicesSection />
          <SkillsSection />
          <CounterSection />
          {/* <TeamSliderSection /> */}
        </div>
      </div>
    </FullLayout>
  );
};

export default ServicesPage;
