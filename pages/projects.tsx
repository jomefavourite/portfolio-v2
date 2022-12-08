import React from "react";
import { Layout } from "../components/Layout";
import { otherProjects, pinnedProjects } from "../utils";
import { NextPageWithLayout } from "./_app";
import Head from "next/head";
import ProjectCard from "../components/ProjectCard";

const Projects: NextPageWithLayout = () => {
  return (
    <div className='mb-14 space-y-8'>
      <Head>
        <title>Favourite Jome - Projects</title>
      </Head>
      {/* <h2 className='text-heading'>Projects</h2> */}

      <div className='space-y-3'>
        <h2 className='uppercase text-lightGrey'>Pinned</h2>
        {pinnedProjects.map((project, ind) => (
          <ProjectCard project={project} />
        ))}
      </div>

      <div className='space-y-3'>
        <h2 className='uppercase text-lightGrey'>Other Projects</h2>

        <div className=' grid gap-3 md:grid-cols-2'>
          {otherProjects.map((project) => (
            <ProjectCard project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

Projects.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Projects;
