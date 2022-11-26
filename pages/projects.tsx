import React from "react";
import { Layout } from "../components/Layout";
import { projects } from "../utils";
import { NextPageWithLayout } from "./_app";
import { HiExternalLink } from "react-icons/hi";
import { HiCode } from "react-icons/hi";
import Head from "next/head";

const Projects: NextPageWithLayout = () => {
  return (
    <div>
      <Head>
        <title>Favourite Jome - Projects</title>
      </Head>
      <h2 className='text-heading'>Projects</h2>

      <div className='space-y-3'>
        {projects.map((project, ind) => {
          return (
            <div key={ind} className='space-y-3 bg-darkCard p-3 px-5'>
              <div>
                <h3 className='mb-1 text-2xl tracking-wider'>
                  {project.title}
                </h3>
                <p className='text-[10px] font-medium uppercase tracking-widest text-lightGrey'>
                  {project.tags.map((tag, ind) => (
                    <span key={ind}>
                      {tag} {project.tags.length - 1 === ind ? "" : "+"}{" "}
                    </span>
                  ))}
                </p>
              </div>

              <p className=' text-lightGrey'>{project.description}</p>

              <div className='flex items-center space-x-3 text-lightGrey'>
                {project.live ? (
                  <a
                    href={project.live}
                    className='flex items-center gap-1 text-sm transition-colors duration-300 hover:text-white'
                  >
                    <HiExternalLink /> Live
                  </a>
                ) : null}
                {project.github ? (
                  <a
                    href={project.github}
                    className='flex items-center gap-1 text-sm transition-colors duration-300 hover:text-white'
                  >
                    <HiCode />
                    Code
                  </a>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

Projects.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Projects;
