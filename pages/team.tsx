import React from 'react';

import { FullLayout, Meta } from '@layouts';
import AboutUsSection from '@sections/Team/AboutUsSection';
import TeamSection from '@sections/AboutUs/TeamSection';
import TopBanner from '@components/Common/TopBanner';

const TeamPage = () => {
  return (
    <FullLayout meta={<Meta />}>
      <div className="w-full">
        <div className="team-page pb-0">
          <TopBanner title="Our Team" />
          <AboutUsSection />
          <TeamSection />
        </div>
      </div>
    </FullLayout>
  );
};

export default TeamPage;
