import React from 'react';

import { FullLayout, Meta } from '@layouts';
import OurWorksSection from '@sections/Portfolio/OurWorksSection';
import TeamSliderSection from '@sections/Home/TeamSliderSection';
import TopBanner from '@components/Common/TopBanner';

const Portfolio = () => {
  return (
    <FullLayout meta={<Meta />}>
      <div className="w-full">
        <div className="about-page pb-0">
          <TopBanner title="Portfolio" />
          <OurWorksSection />
          {/* <TeamSliderSection /> */}
        </div>
      </div>
    </FullLayout>
  );
};

export default Portfolio;
