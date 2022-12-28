import Head from "next/head";
import Link from "next/link";
import React from "react";
import ArticleCard from "../components/ArticleCard";
import { Layout } from "../components/Layout";
import { useBlogPost } from "../hooks/useBlogPost";
import { NextPageWithLayout } from "./_app";

const Articles: NextPageWithLayout = () => {
  const { data, isLoading } = useBlogPost("Favourite");

  return (
    <div>
      <Head>
        <title>Favourite Jome - Articles</title>
      </Head>

      <h2 className='mb-3 uppercase text-lightGrey'>Recent (6)</h2>

      {isLoading ? (
        <div className='group grid gap-2 md:grid-cols-2 md:grid-rows-3'>
          {Array(6)
            .fill(0)
            .map((arr, ind) => (
              <div
                key={ind}
                className='mx-auto w-full max-w-sm bg-darkCard p-8 shadow'
              >
                <div className='flex animate-pulse space-x-4'>
                  <div className='flex-1 space-y-6 py-1'>
                    <div className='h-2 rounded bg-slate-500 opacity-25'></div>

                    <div className='space-y-3'>
                      <div className='h-2 rounded bg-slate-500 opacity-25'></div>
                      <div className='h-2 rounded bg-slate-500 opacity-25'></div>
                      <div className='grid grid-cols-3 gap-4'>
                        <div className='col-span-2 h-2 rounded bg-slate-500 opacity-25'></div>
                        <div className='col-span-1 h-2 rounded bg-slate-500 opacity-25'></div>
                      </div>
                    </div>

                    <div className='h-2 w-8 rounded bg-slate-500 opacity-25'></div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      ) : (
        <>
          <div className='group grid gap-2 md:grid-cols-2 md:grid-rows-3'>
            {data.map((post, ind) => (
              <ArticleCard key={ind} post={post} />
            ))}
          </div>

          <a
            href='https://favouritejome.hashnode.dev/'
            className='mx-auto my-10 block text-center underline '
            target='_blank'
            rel='noreferrer'
          >
            View All
          </a>
        </>
      )}
    </div>
  );
};

Articles.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Articles;
