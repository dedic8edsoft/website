import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import classnames from 'classnames';

import { blogs } from '@sections/Blog/BlogsSection';
import { FacebookIcon, InstagramIcon, LinkedinIcon, SearchIcon } from '@components/Common/icons';
import { TwitterIcon } from '@components/Common/icons/Twitter';
import { Button, Input, TextArea } from '@components/Common';

const categories = [
  'Financial Advise',
  'Business Growth',
  'Investment Marketing',
  'Business Consulting',
  'Advanced Analytics',
  'Investment Marketing',
];

const BlogSingle = () => {
  const router = useRouter();
  const { id } = router.query;

  const blog = useMemo(() => {
    return blogs.find((blog) => blog.id.toString() === id);
  }, [id]);

  const selectRandomExcept = () => {
    const tempArray = blogs.filter((item) => item.id.toString() !== id);

    const shuffled = tempArray.sort(() => 0.5 - Math.random());

    return shuffled.slice(0, 3);
  };

  return (
    <section className="blog-single bg-white py-25">
      <div className="container mx-auto">
        {!blog ? (
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="col-span-2">
              <img src={blog.image} alt={blog.title} />
              <div className="mt-10 text-gray-500">
                <h2 className="text-28 font-bold text-black-dark">{blog.title}</h2>
                <p className="text-gray-500">Admin / 30 comments / 30 likes</p>
                <p className="text-gray-500 mt-6">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Sed ut perspiciatis unde omnis natus error sit
                  voluptatem accusantium dolore mque laudantium totam rem aperiam eaque ipsa quae ab
                  illo inventore veritatis et quasi archite beatae vitae dicta sunt explicabo. nemo
                  enim ipsam voluptatem quia voluptassit.aspernatur aut odit aut fugit.
                  <br />
                  <br />
                  Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt
                  neque poro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                  adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
                  dolore magnam aliquam quaerat voluptatem
                </p>
                <div className="p-10 bg-gray-700 border-l-2 border-primary my-8">
                  {blog.content}
                </div>
                <p>
                  Occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum. Seper spiciatis unde omnis natus error sit voluptatem accusantium
                  doloremque laudantium totam rem. aperiam eaque ipsa quae ab illo inventore
                  veritatis.
                </p>
              </div>
              <div className="flex gap-3 mt-4">
                <div className="flex-center w-12.5 h-12.5 border border-gray-200 hover:bg-primary transition-all duration-300 text-gray-500 hover:text-white hover:border-primary">
                  <FacebookIcon />
                </div>
                <div className="flex-center w-12.5 h-12.5 border border-gray-200 hover:bg-primary transition-all duration-300 text-gray-500 hover:text-white hover:border-primary">
                  <TwitterIcon />
                </div>
                <div className="flex-center w-12.5 h-12.5 border border-gray-200 hover:bg-primary transition-all duration-300 text-gray-500 hover:text-white hover:border-primary">
                  <InstagramIcon />
                </div>
                <div className="flex-center w-12.5 h-12.5 border border-gray-200 hover:bg-primary transition-all duration-300 text-gray-500 hover:text-white hover:border-primary">
                  <LinkedinIcon />
                </div>
              </div>
              <div className="py-8">
                <h2 className="text-28 font-bold">2 comments</h2>
                <div className="py-6 flex gap-5 border-b border-gray-200">
                  <img
                    className="w-22 h-22"
                    src="/assets/images/blog/comment-1.jpg"
                    alt="Anke Kirsch"
                  />
                  <div className="w-full">
                    <div className="flex justify-between items-start">
                      <div className="">
                        <h3 className="text-20 font-bold">Anke Kirsch</h3>
                        <h4 className="text-16 font-bold">Aug 20, 2018</h4>
                      </div>
                      <div className="py-2.5 px-7.5 border border-gray-200 cursor-pointer transition-all duration-300 hover:bg-primary flex-center hover:text-white">
                        <span className="leading-normal text-14">Reply</span>
                      </div>
                    </div>
                    <p className="text-gray-500 mt-2">
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                      dolor emque laudant tota rem ape riamipsa eaque.
                    </p>
                  </div>
                </div>
                <div className="py-6 flex gap-5 border-b border-gray-200">
                  <img
                    className="w-22 h-22"
                    src="/assets/images/blog/comment-2.jpg"
                    alt="Falk Burger"
                  />
                  <div className="w-full">
                    <div className="flex justify-between items-start">
                      <div className="">
                        <h3 className="text-20 font-bold">Falk Burger</h3>
                        <h4 className="text-16 font-bold">Aug 20, 2018</h4>
                      </div>
                      <div className="py-2.5 px-7.5 border border-gray-200 cursor-pointer transition-all duration-300 hover:bg-primary flex-center hover:text-white">
                        <span className="leading-normal text-14">Reply</span>
                      </div>
                    </div>
                    <p className="text-gray-500 mt-2">
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                      dolor emque laudant tota rem ape riamipsa eaque.
                    </p>
                  </div>
                </div>
              </div>
              <div className="py-8">
                <h2 className="text-28 font-bold">Leave A Comments</h2>
                <div className="flex gap-4 flex-col">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input placeholder="First Name" />
                    <Input placeholder="Email" />
                  </div>
                  <TextArea placeholder="Message" />
                  <Button className="rounded-0 w-fit text-14">Send Message</Button>
                </div>
              </div>
            </div>
            <div>
              <div className="flex">
                <Input placeholder="Search..." />
                <Button className="rounded-0 w-10 px-0 text-14">
                  <SearchIcon />
                </Button>
              </div>
              <div className="py-8">
                <h3 className="text-24 font-bold mb-6">Categories</h3>
                {categories.map((cat, index) => (
                  <div
                    key={cat}
                    className={classnames(
                      'py-3 text-14 hover:bg-primary transition-all duration-300 hover:text-white cursor-pointer pl-0 hover:pl-4',
                      { 'border-t border-gray-200': index > 0 }
                    )}
                  >
                    {cat}
                  </div>
                ))}
              </div>
              <div className="py-8">
                <h3 className="text-24 font-bold mb-6">Latest Post</h3>
                <div className="flex flex-col gap-6">
                  {selectRandomExcept().map((blog) => (
                    <div className="flex gap-3" key={blog.id}>
                      <img className="w-30" src={blog.image} alt={blog.title} />
                      <div className="w-full flex flex-col">
                        <h4 className="text-18 font-bold cursor-pointer hover:text-primary transition-all duration-300">
                          {blog.title}
                        </h4>
                        <h6 className="text-15 font-bold mt-2">Aug 20, 2018</h6>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSingle;
