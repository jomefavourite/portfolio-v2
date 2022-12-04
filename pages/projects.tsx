import React from "react";
import { Layout } from "../components/Layout";
import { otherProjects, pinnedProjects } from "../utils";
import { NextPageWithLayout } from "./_app";
import Head from "next/head";
import ProjectCard from "../components/ProjectCard";

const Projects: NextPageWithLayout = () => {
  return (
    <div>
      <Head>
        <title>Favourite Jome - Projects</title>
      </Head>
      {/* <h2 className='text-heading'>Projects</h2> */}

      <div className='space-y-3'>
        <h3>Pinned</h3>
        {pinnedProjects.map((project, ind) => (
          <ProjectCard project={project} />
        ))}
      </div>

      <div>
        <h3>Other Projects</h3>

        <div className='grid grid-cols-2 gap-3'>
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
