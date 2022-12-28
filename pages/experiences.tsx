import Head from "next/head";
import Link from "next/link";
import React, { Fragment } from "react";
import { FiDownload } from "react-icons/fi";
import { Layout } from "../components/Layout";
import { NextPageWithLayout } from "./_app";

const Experiences: NextPageWithLayout = () => {
  type Works = {
    company: string;
    description: string;
    role: string;
    location: string;
    period: string;
    companyLink: string;
    achievements: string[];
  };

  const works: Works[] = [
    {
      company: "Pelrio",
      description:
        "Pelrio is a simple expense & cashflow management tool that utilizes artificial intelligence to provide real-time analytics, dynamic forecasting, and expense control for small business owners.",
      role: "Frontend Developer",
      location: "Remote",
      period: "Mar 2022 - Present",
      achievements: [
        "Worked on transforming the business data, forecast data into representational charts which illustrate monthly or quarterly cashflow",
        "Built several UI layouts along with tools/technologies such as React, React Query, Graphql, Internationalization",
        "Promoted from an Intern developer to a Frontend Developer",
      ],
      companyLink: "https://pelrio.com/",
    },
    {
      company: "Vasiti",
      description:
        "Vasiti is an e-commerce brand that makes it possible for customers to save money and enjoy the best shopping experience while SMEs make money online and grow their business.",
      role: "Frontend Developer Intern",
      location: "Lagos (On site)",
      period: "July 2021 - Nov 2021",
      achievements: [
        "As an intern at Vasiti, I got introduced to the react framework, Next.js and built several UI layouts, along with the concept of SSG, SSR and CSR",
        "Built features that make it easy for customers to make payment using the Paystack API",
        "I learnt about the business perspective of the company, during daily stand-ups and meeting",
        "Learnt how teams are assigned tasks while working together",
      ],
      companyLink: "https://vasiti.com/",
    },
  ];
  return (
    <>
      <Head>
        <title>Favourite Jome Experiences</title>
      </Head>

      <div>
        <div className='mb-8 md:hidden'>
          <a
            href='/favourite-jome_resume.pdf'
            className='ml-auto flex w-fit items-center justify-end gap-2 text-sm text-lightGrey transition duration-300 ease-out hover:text-white'
            download={true}
          >
            <FiDownload />
            Download Resume
          </a>
        </div>

        <div className='space-y-8'>
          {works.map((work, ind) => (
            <section key={ind} className='group flex gap-2 text-sm'>
              <aside className=''>
                <div className='rounded-full bg-lightGrey p-2 group-hover:bg-white'>
                  <WorkIcon />
                </div>
                <span className='mx-auto block h-[calc(100%-24px-8px)] w-[2px] bg-lightGrey group-hover:bg-white '></span>
              </aside>

              <div className='space-y-2'>
                <div className='shadow- inline-block rounded-full bg-[#6a6a6a17] p-2 px-3 text-xs shadow shadow-[#0000002f]'>
                  {work.period}
                </div>

                <h2 className='flex gap-3 text-lg'>
                  <Link href={work.companyLink} className='text-xl uppercase '>
                    {work.company}
                  </Link>
                  - <span className='text-lightGrey'>{work.role}</span>
                </h2>

                <div className='text-lightGrey'>
                  <p>{work.description}</p>

                  <ul className='mt-2 space-y-1'>
                    {work.achievements.map((ach, ind) => (
                      <Fragment key={ind}>
                        <li className='text ml-4 list-item list-outside list-disc align-text-top'>
                          {ach}
                        </li>
                      </Fragment>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
};

Experiences.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default Experiences;

function WorkIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className='h-6 w-6 group-hover:stroke-lightGrey'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z'
      />
    </svg>
  );
}
