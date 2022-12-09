import Head from "next/head";
import Link from "next/link";
import React from "react";
import ArticleCard from "../components/ArticleCard";
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
      <Head>
        <title>Favourite Jome - Articles</title>
      </Head>

      <h2 className='mb-3 uppercase text-lightGrey'>Recent (6)</h2>

      <div className='group grid gap-2 md:grid-cols-2 md:grid-rows-3'>
        {data.map((post, ind) => {
          return <ArticleCard key={ind} post={post} />;
        })}
      </div>

      <Link
        href='https://favouritejome.hashnode.dev/'
        className='text- mx-auto my-10 block text-center '
      >
        View All
      </Link>
    </div>
  );
};

Articles.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Articles;
