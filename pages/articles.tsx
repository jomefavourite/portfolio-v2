import Link from "next/link";
import React from "react";
import { Layout } from "../components/Layout";
import { useBlogPost } from "../hooks/useBlogPost";
import { NextPageWithLayout } from "./_app";

const Articles: NextPageWithLayout = () => {
  const { data, error, isLoading } = useBlogPost("Favourite");

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h2 className='text-heading'>Articles</h2>

      <div className='space-y-4'>
        {data.map((post, ind) => {
          return (
            <Link
              key={ind}
              href={`https://favouritejome.hashnode.dev/${post.slug}`}
              className='block bg-darkCard p-3'
            >
              <p className='text-sm'>
                {new Date(post.dateAdded).toDateString()}
              </p>
              <h3 className='text-lg'>{post.title}</h3>
            </Link>
          );
        })}
      </div>

      <a
        href='https://favouritejome.hashnode.dev/'
        className='mx-auto inline-block text-center '
      >
        View All
      </a>
    </div>
  );
};

Articles.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Articles;
