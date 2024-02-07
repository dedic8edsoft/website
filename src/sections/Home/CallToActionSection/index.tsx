import React from 'react';

import { Button } from '@components/Common';

const CallToActionSection = () => {
  return (
    <div
      className="call-to-action-section py-25 text-white bg-cover"
      style={{ backgroundImage: `url(/assets/images/call-to-action/call-to-action-bg-2.jpg)` }}
    >
      <div className="container mx-auto text-center">
        <h1 className="section-title text-white">Let's Create Something Together</h1>
        <p className="section-description text-white after:hidden">
          Embark on a collaborative journey with us as we merge creativity and expertise to bring your vision to life—let's create something extraordinary together.
        </p>
        {/* <Button className="w-fit mt-2 text-13 px-6">Contact Us</Button> */}
      </div>
    </div>
  );
};

export default CallToActionSection;
