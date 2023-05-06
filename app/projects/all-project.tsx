import React from "react";
import Navigation from "../../components/Navigation";

const ProjectAll = () => {
  return (
    <>
      <Navigation />
      <main className='container grid h-[calc(100vh-48px)] gap-3 py-5 lg:grid-cols-2 lg:py-10'>
        <h1 className='text-2xl'>Projects</h1>

        <p className='text-center font-bold'>Under Construction</p>
      </main>
    </>
  );
};

export default ProjectAll;
