import React from 'react';

const CompanyMissionSection = () => {
  return (
    <div className="company-mission-section bg-gray-light py-18">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7.5">
          <div className="">
            <h2 className="text-28 font-bold mb-2">Our Mission</h2>
            <p className="text-gray-500 mb-10 min-h-40">
              Our mission is to empower businesses with transformative software solutions that drive
              efficiency, foster innovation, and seamlessly adapt to the evolving landscape of
              technology. With a relentless commitment to excellence, we strive to make a lasting
              impact by delivering cutting-edge software that not only meets the current needs of
              our clients but also anticipates and addresses their future challenges.
            </p>
            <img
              src="/assets/images/company/company-image-2.jpg"
              alt="Company Mission"
              className="w-full"
            />
          </div>
          <div className="">
            <h2 className="text-28 font-bold mb-2">Our Vision</h2>
            <p className="text-gray-500 mb-10 min-h-40">
              Our vision is to pioneer innovative solutions that redefine industry standards and
              empower our clients to thrive in an ever-evolving landscape. We are committed to
              fostering a culture of excellence, driving positive change, and shaping a future where
              our collective achievements leave a lasting impact on businesses and communities
              alike.
            </p>
            <img
              src="/assets/images/company/company-image-3.jpg"
              alt="Company Vision"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyMissionSection;
