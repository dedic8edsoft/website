import React from 'react';

import { FullLayout, Meta } from '@layouts';
import AboutUsSection from '@sections/Team/AboutUsSection';
import TeamSection from '@sections/AboutUs/TeamSection';
import Banner from '@sections/Home/Banner';
import CallToAction2 from '@sections/AboutUs/CallToAction2';
import ServicesSection from '@sections/Services/ServicesSection';
import CallToActionSection from '@sections/Home/CallToActionSection';
import SkillsSection from '@sections/Services/SkillsSection';
import CounterSection from '@sections/Home/CounterSection';
import OurWorksSection from '@sections/Portfolio/OurWorksSection';
import PlansSection from '@sections/Pricing/PlansSection';
import ContactFormSection from '@sections/Contact/ContactFormSection';
import MapSection from '@sections/Contact/MapSection';
import TeamSliderSection from '@sections/Home/TeamSliderSection';
import BlogSection from '@sections/Home/BlogSection';

const OnePage = () => {
  return (
    <FullLayout meta={<Meta />}>
      <div className="w-full">
        <div className="team-page pb-0">
          <Banner />
          <AboutUsSection />
          <CallToAction2 />
          <ServicesSection />
          <CallToActionSection />
          <SkillsSection />
          <CounterSection />
          <OurWorksSection />
          <TeamSection />
          <PlansSection />
          {/* <TeamSliderSection /> */}
          {/* <BlogSection /> */}
          <ContactFormSection />
          <MapSection />
        </div>
      </div>
    </FullLayout>
  );
};

export default OnePage;
