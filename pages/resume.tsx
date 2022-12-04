import Head from "next/head";
import Link from "next/link";
import React from "react";
import { Layout } from "../components/Layout";
import { NextPageWithLayout } from "./_app";

const Resume: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Favourite Jome - Resume</title>
      </Head>

      <h2 className='text-heading'>Resume</h2>

      <div className='bg-darkCard p-4'>
        <div>
          <h2>Favourite Jome</h2>
          <p>Frontend Developer</p>

          <div>
            <Link href='#'>LinkedIn</Link>
            Download
          </div>
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nobis
          velit pariatur vel esse, iure corporis cum quam qui dicta.
        </p>

        <div>
          <h3>Core Technologies</h3>
          <p>
            HTML/CSS/SASS, TailwindCSS, Javascript, React JS, Next JS,
            CSS-in-JS, MUI, Typescript, Redux, Firebase.
          </p>
        </div>

        <div>
          <h3>Work Experience</h3>
        </div>
      </div>
    </>
  );
};

Resume.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Resume;
