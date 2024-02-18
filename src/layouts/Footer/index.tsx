import React from 'react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <>
      <section className="footer my-0 bg-black-100 pt-25 pb-20">
        <div className="container mx-auto">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-6">
            <div className="col-span-1 md:col-span-4">
              <h4 className="uppercase text-white mb-5">ABOUT</h4>
              <p className="text-gray-600 text-13 leading-[25px]">
                We pride ourselves on being a dynamic software company dedicated to crafting
                intuitive solutions that seamlessly integrate into your workflow, enhancing
                efficiency and elevating user experiences.
              </p>
            </div>
            <div className="col-span-1 md:col-span-3">
              <h4 className="uppercase text-white mb-5">Our Services</h4>
              <div className="flex flex-col gap-3 text-13 text-gray-600">
                <Link href="#">UI/UX Design</Link>
                <Link href="#">Graphic Design</Link>
                <Link href="#">Web Design</Link>
                <Link href="#">Web Development</Link>
              </div>
            </div>
            <div className="col-span-1 md:col-span-2">
              <h4 className="uppercase text-white mb-5">Quick Links</h4>
              <div className="flex flex-col gap-3 text-13 text-gray-600">
                <Link href="/about">About</Link>
                <Link href="/services">Services</Link>
                <Link href="/portfolio">Portfolio</Link>
                <Link href="/team">Team</Link>
              </div>
            </div>
            {/* <div className="col-span-1 md:col-span-3">
              <h4 className="uppercase text-white mb-5">Connect With Us Socially</h4>
              <div className="flex flex-col gap-3 text-13 text-gray-600">
                <Link href="#">Facebook</Link>
                <Link href="#">Twitter</Link>
                <Link href="#">Youtube</Link>
                <Link href="#">Github</Link>
              </div>
            </div> */}
            <div className="col-span-1 md:col-span-3">
              <h4 className="uppercase text-white mb-5">Contact US Today</h4>
              <div className="flex flex-col gap-3 text-13 text-gray-600">
                <Link href="#">Call Us +355698447107</Link>
                <Link href="#">Send an Email on contact@dedic8edsoft.com</Link>
                <Link href="#">Sreet Martin Camaj</Link>
                <Link href="#">4001 Shkoder, Albania</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
