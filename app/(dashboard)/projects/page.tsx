import React from 'react';
import { otherProjects, pinnedProjects } from '../../../utils';
import ProjectCard from '../../../components/ProjectCard';
import { Link } from 'react-router-dom';

export const metadata = {
  title: 'Favourite Jome - Projects',
  description: 'Favourite Jome several projects',
};

const Projects = () => {
  return (
    <div className=' '>
      {/* <h2 className='text-heading'>Projects</h2> */}

      {/* <style jsx global>{`
        body > div {
          min-height: 200%;
        }
      `}</style> */}

      <div className='space-y-8'>
        <div>
          <h2 className='mb-2 uppercase text-lightGrey'>Pinned</h2>

          <div className='group space-y-2'>
            {pinnedProjects.map((project, ind) => (
              <ProjectCard key={ind} project={project} ind={ind} />
            ))}
          </div>
        </div>

        <div className='space-y-3'>
          <h2 className='uppercase text-lightGrey'>Other Projects</h2>

          <div className='group grid gap-2 md:grid-cols-2'>
            {otherProjects.map((project, ind) => (
              <ProjectCard key={ind} project={project} ind={ind} type='box' />
            ))}
          </div>
        </div>
      </div>

      <div className='w-full text-center'>
        <Link
          to='/projects/all-project'
          className='mt-10  inline-block text-center underline'
        >
          View All Projects
        </Link>
      </div>
    </div>
  );
};

// Projects.getLayout = function getLayout(page) {
//   return <Layout>{page}</Layout>;
// };

export default Projects;
