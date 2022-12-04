import React from "react";
import { HiCode, HiExternalLink } from "react-icons/hi";
import { Project } from "../utils";

type ProjectProps = { project: Project };

const ProjectCard = ({ project }: ProjectProps) => {
  return (
    <div className='space-y-3 bg-darkCard p-3 px-5'>
      <div>
        <h3 className='mb-1 text-2xl tracking-wider'>{project.title}</h3>
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
};

export default ProjectCard;
