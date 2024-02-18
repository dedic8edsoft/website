import React from 'react';

import { FacebookIcon, InstagramIcon, LinkedinIcon } from '@components/Common/icons';
import { TwitterIcon } from '@components/Common/icons/Twitter';
import { Button, Input, TextArea } from '@components/Common';

const ContactFormSection = () => {
  return (
    <section className="contact-form-section bg-white py-25">
      <div className="container mx-auto">
        <h1 className="section-title">Get In Touch</h1>
        <p className="section-description">
          Connecting with us is just a click away—whether you have questions, ideas, or are ready to
          embark on a collaboration. Our team at is eager to hear from you. Reach out through our
          contact form, and let's start a conversation about turning your vision into reality.
        </p>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-28 font-bold mb-3">Contact Details</h2>
            <p className="text-gray-500">
              We look forward to hearing from you and exploring how we can contribute to your
              success.
            </p>
            <div className="flex flex-col gap-3 mt-7">
              <p>Address: Sreet Martin Camaj 4001 Shkoder, Albania</p>
              <p>Phone: +355-69-844-7107</p>
              {/* <p>Fax: +880-31-000-000</p> */}
              <p>Email: contact@dedic8edsoft.com</p>
            </div>
            {/* <div className="flex gap-3 mt-4">
              <div className="flex-center w-12.5 h-12.5 rounded-full border border-gray-200 hover:bg-primary transition-all duration-300 text-gray-500 hover:text-white hover:border-primary">
                <FacebookIcon />
              </div>
              <div className="flex-center w-12.5 h-12.5 rounded-full border border-gray-200 hover:bg-primary transition-all duration-300 text-gray-500 hover:text-white hover:border-primary">
                <TwitterIcon />
              </div>
              <div className="flex-center w-12.5 h-12.5 rounded-full border border-gray-200 hover:bg-primary transition-all duration-300 text-gray-500 hover:text-white hover:border-primary">
                <InstagramIcon />
              </div>
              <div className="flex-center w-12.5 h-12.5 rounded-full border border-gray-200 hover:bg-primary transition-all duration-300 text-gray-500 hover:text-white hover:border-primary">
                <LinkedinIcon />
              </div>
            </div> */}
          </div>
          <div className="flex flex-col gap-5">
            <Input placeholder="Your Name" />
            <Input placeholder="Your Email" />
            <Input placeholder="Subject" />
            <TextArea placeholder="Message" />
            <Button className="rounded-0 text-14">Submit</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
