import React from 'react';

import { FullLayout, Meta } from '@layouts';
import BlogDetailBanner from '@sections/Blog/BlogDetail/BlogDetailBanner';
import BlogSingle from '@sections/Blog/BlogDetail/BlogSingle';

const BlogDetailPage = () => {
  return (
    <FullLayout meta={<Meta />}>
      <div className="w-full">
        <div className="blog-page pb-0">
          <BlogDetailBanner />
          <BlogSingle />
        </div>
      </div>
    </FullLayout>
  );
};

export default BlogDetailPage;
