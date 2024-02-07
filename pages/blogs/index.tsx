import React from 'react';

import { FullLayout, Meta } from '@layouts';
import BlogBanner from '@sections/Blog/BlogBanner';
import BlogsSection from '@sections/Blog/BlogsSection';

const BlogPage = () => {
  return (
    <FullLayout meta={<Meta />}>
      <div className="w-full">
        <div className="blog-page pb-0">
          <BlogBanner />
          <BlogsSection />
        </div>
      </div>
    </FullLayout>
  );
};

export default BlogPage;
