import React from 'react';

const AboutShotInfoSection = () => {
  return (
    <div className="about-shot-info-section bg-white py-18">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="">
            <h2 className="text-32 font-bold leading-tight mb-4">
              We create designs
              <br /> and technology
            </h2>
            <p className="text-gray-500">
              We seamlessly blend cutting-edge technology with captivating designs, ensuring that
              every software solution we create is not just functional but also visually engaging.
              <br />
              <br />
              Our team of skilled designers and technologists collaborates to bring forth innovative
              software products that not only meet industry standards but also redefine user
              expectations.
              <br />
              <br />
              Discover the intersection of creativity and functionality with our commitment to
              crafting designs and technology that not only solve problems but also enhance the
              overall digital experience for our clients.
            </p>
          </div>
          <div className="">
            <img
              className="w-full h-fit"
              src="/assets/images/company/company-image.jpg"
              alt="gallery-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutShotInfoSection;
