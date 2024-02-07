import React from 'react';

import { FullLayout, Meta } from '@layouts';
import ContactFormSection from '@sections/Contact/ContactFormSection';
import MapSection from '@sections/Contact/MapSection';
import TopBanner from '@components/Common/TopBanner';

const ContactPage = () => {
  return (
    <FullLayout meta={<Meta />}>
      <div className="w-full">
        <div className="team-page pb-0">
          <TopBanner title="Contact Us" />
          <ContactFormSection />
          {/* <MapSection /> */}
        </div>
      </div>
    </FullLayout>
  );
};

export default ContactPage;
