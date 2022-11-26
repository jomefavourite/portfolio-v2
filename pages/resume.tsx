import Head from "next/head";
import React from "react";
import { Layout } from "../components/Layout";
import { NextPageWithLayout } from "./_app";

const Resume: NextPageWithLayout = () => {
  return (
    <div>
      <Head>
        <title>Favourite Jome - Resume</title>
      </Head>

      <h2 className='text-heading'>Resume</h2>

      <div className='bg-darkCard p-4'>
        <h2>Favourite Jome</h2>
      </div>
    </div>
  );
};

Resume.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Resume;
