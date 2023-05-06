import React from "react";
import { HiCode, HiExternalLink } from "react-icons/hi";
import { Project } from "../utils";
import Card from "./Card";

type ProjectProps = {
  project: Project;
  ind: number;
  type?: "box" | "card" | undefined;
};

const ProjectCard = ({ project, ind, type }: ProjectProps) => {
  return (
    <Card ind={ind} type={type}>
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

      <p className=' py-3 text-lightGrey'>
        {project.description}{" "}
        {project.desLink ? (
          <a href={project.desLink} target='_blank' rel='noreferrer'>
            {" "}
            @nworiekingslee{" "}
          </a>
        ) : null}
      </p>

      <div className='flex items-center space-x-3 text-lightGrey'>
        {project.live ? (
          <a
            href={project.live}
            className='flex items-center gap-1 text-sm transition-colors duration-300 hover:text-white'
            target='_blank'
            rel='noreferrer'
          >
            <HiExternalLink /> Live
          </a>
        ) : null}
        {project.github ? (
          <a
            href={project.github}
            className='flex items-center gap-1 text-sm transition-colors duration-300 hover:text-white'
            target='_blank'
            rel='noreferrer'
          >
            <HiCode />
            Code
          </a>
        ) : null}
      </div>
    </Card>
  );
};

export default ProjectCard;
