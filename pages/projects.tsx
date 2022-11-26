import React from "react";
import { Layout } from "../components/Layout";
import { projects } from "../utils";
import { NextPageWithLayout } from "./_app";

const Projects: NextPageWithLayout = () => {
  return (
    <div>
      <h2 className='text-heading'>Projects</h2>

      <div>
        {projects.map((project, ind) => {
          return (
            <div key={ind} className='bg-darkCard p-3'>
              <h3 className='text-3xl'>{project.title}</h3>
              <p className='text-sm uppercase'>
                {project.tags.map((tag, ind) => (
                  <span key={ind}>{tag} + </span>
                ))}
              </p>
              <p className='text-sm'>{project.description}</p>
              <div className='flex items-center space-x-2'>
                <a
                  href={project.live ? project.live : "#"}
                  className='rounded-md bg-[#5d5d5d] px-2 py-1 text-sm text-white'
                >
                  Live
                </a>
                <a
                  href={project.github ? project.github : "#"}
                  className='rounded-md bg-[#5d5d5d] px-2 py-1 text-sm text-white'
                >
                  Code
                </a>
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
