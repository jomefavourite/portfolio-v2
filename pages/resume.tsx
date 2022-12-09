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

      <div className='bg-darkCard p-8 text-lightGrey'>
        <div className=''>
          <div className='flex items-center justify-between text-white'>
            <h2 className='text-2xl'>Favourite Jome</h2>
            <div className='text-sm'>
              <Link href='#'>LinkedIn</Link>
              <Link href='#'>Download</Link>
            </div>
          </div>
          <p className='mt-2 text-white'>Frontend Developer</p>
        </div>

        <p className='my-3 text-sm'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nobis
          velit pariatur vel esse, iure corporis cum quam qui dicta.
        </p>

        <div className='space-y-3'>
          <div className='space-y-2'>
            <div className='flex items-end gap-2'>
              <h3 className='text-white'>Core Technologies</h3>
              <span className='mb-1 block h-px w-full flex-1 bg-lightGrey'></span>
            </div>
            <p className='text-sm'>
              HTML/CSS/SASS, TailwindCSS, Javascript, React JS, Next JS,
              CSS-in-JS, MUI, Typescript, Redux, Firebase.
            </p>
          </div>

          <div className='space-y-2'>
            <div className='flex items-end gap-2'>
              <h3 className='text-white'>Work Experience</h3>
              <span className='mb-1 block h-px w-full flex-1 bg-lightGrey'></span>
            </div>

            <div className='text-sm'>
              <h4 className='italic text-white'>
                Zealarax Technologies - Frontend Developer [Intern]
              </h4>
              <p className='my-2 text-xs font-light uppercase'>
                January 2021 - January 2022
              </p>
              <p className='sc-himrzO cgcgUL'>
                {" "}
                I contributed in developing user interfaces for quite a number
                of products while learning new skills.
              </p>
              <ul className='sc-gXmSlM gmcoxK'>
                <li className='sc-cCsOjp ckpGCG'>
                  <span className='icon'>■</span>
                  <span>
                    I learnt basic and mid-level frontend skills with the
                    Zealarax Team.
                  </span>
                </li>
              </ul>
              <ul className='sc-gXmSlM gmcoxK'>
                <li className='sc-cCsOjp ckpGCG'>
                  <span className='icon'>■</span>
                  <span>
                    Collaborated with Laravel and PHP developers to build a
                    software used by over 3000 university students.
                  </span>
                </li>
              </ul>
              <ul className='sc-gXmSlM gmcoxK'>
                <li className='sc-cCsOjp ckpGCG'>
                  <span className='icon'>■</span>
                  <span>
                    Worked with Laravel developers to build a web application
                    for a high school.
                  </span>
                </li>
              </ul>
              <ul className='sc-gXmSlM gmcoxK'>
                <li className='sc-cCsOjp ckpGCG'>
                  <span className='icon'>■</span>
                  <span>Built basic web components using SCSS.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Resume.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Resume;
