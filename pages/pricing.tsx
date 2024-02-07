import React from 'react';

import { FullLayout, Meta } from '@layouts';
import AboutSection from '@sections/Home/AboutSection';
import PlansSection from '@sections/Pricing/PlansSection';
import TopBanner from '@components/Common/TopBanner';

const PricingPage = () => {
  return (
    <FullLayout meta={<Meta />}>
      <div className="w-full">
        <div className="pricing-page pb-0">
          <TopBanner title="Easy Pricing" />
          <AboutSection />
          <PlansSection />
        </div>
      </div>
    </FullLayout>
  );
};

export default PricingPage;
