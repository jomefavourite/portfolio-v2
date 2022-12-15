import Head from "next/head";
import React from "react";
import { Layout } from "../components/Layout";
import { NextPageWithLayout } from "./_app";

const Experiences: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Favourite Jome Experiences</title>
      </Head>

      <div>
        <section>
          <h2>Pelrio</h2>
          <p>Projects I worked on at Pelrio</p>
        </section>

        <section>
          <h2>Vasiti.com</h2>
          <h3>Frontend Developer Intern</h3>
          <p>Projects I worked on at Vasiti</p>
        </section>
      </div>
    </>
  );
};

Experiences.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default Experiences;
