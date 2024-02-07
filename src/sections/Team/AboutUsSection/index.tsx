import React from 'react';

import { CheckCircleIcon } from '@components/Common/icons';

const AboutUsSection = () => {
  return (
    <section className="about-us-section py-25">
      <div className="container mx-auto">
        <h1 className="section-title">About Us</h1>
        <p className="section-description">
          Our story is one of passion, innovation, and a relentless commitment to exceeding expectations.
        </p>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="">
            <img src="/assets/images/about-us.jpg" alt="About Us" />
          </div>
          <div>
            <p className="text-gray-500">
              Established with a vision to redefine industry standards, we pride ourselves on our dedicated team, cutting-edge solutions, and a culture that fosters collaboration and growth.
              <br/>
              <br/>
              Explore the journey that has shaped us into the dynamic force we are today, as we continue to innovate and leave a lasting imprint on the industries we serve.
            </p>
            <br/>
            {/* <h3 className="text-23 my-4 font-semibold">Lorem ipsum dolor sit.</h3> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div className="flex gap-2 items-center">
                <CheckCircleIcon size={16} className="text-primary" />
                <span className="text-13 text-black-dark">Web Development</span>
              </div>
              <div className="flex gap-2 items-center">
                <CheckCircleIcon size={16} className="text-primary" />
                <span className="text-13 text-black-dark">Application Development</span>
              </div>
              <div className="flex gap-2 items-center">
                <CheckCircleIcon size={16} className="text-primary" />
                <span className="text-13 text-black-dark">Website Design</span>
              </div>
              <div className="flex gap-2 items-center">
                <CheckCircleIcon size={16} className="text-primary" />
                <span className="text-13 text-black-dark">UI/UX Design</span>
              </div>
              <div className="flex gap-2 items-center">
                <CheckCircleIcon size={16} className="text-primary" />
                <span className="text-13 text-black-dark">SEO Service</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
