import React from 'react';
import { useRouter } from 'next/router';

import { Button } from '@components/Common';

const data = [
  {
    id: 1,
    title: 'Reasons to Smile',
    content:
      'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non skateboard dolor brunch.',
    image: '/assets/images/blog/post-1.jpg',
  },
  {
    id: 2,
    title: 'A Few Moments',
    content:
      'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non skateboard dolor brunch.',
    image: '/assets/images/blog/post-2.jpg',
  },
  {
    id: 3,
    title: 'Hints for Life',
    content:
      'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non skateboard dolor brunch.',
    image: '/assets/images/blog/post-3.jpg',
  },
];

const BlogSection = () => {
  const router = useRouter();
  return (
    <div className="offer-section w-full py-25 bg-gray-800">
      <div className="container mx-auto">
        <h1 className="section-title">Latest Posts</h1>
        <p className="section-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus facere accusamus,
          reprehenderit libero inventore nam.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7.5 mt-20">
          {' '}
          {data.map((blog) => (
            <div key={blog.id} className="flex flex-col bg-white">
              <img src={blog.image} alt={blog.title} />
              <div className="p-5">
                <h2 className="text-28 font-bold">{blog.title}</h2>
                <p className="text-gray-500 leading-[1.65] my-4">{blog.content}</p>
                <Button
                  className="my-4 text-13 px-6"
                  onClick={() => router.push(`/blogs/${blog.id}`)}
                >
                  Read More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
