import React from 'react'
import { myProjects } from '../constants'
import CanvasLoader from '../component/canvasloader';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';
import DemoComputer from '../component/demoComputer';
const Project = () => {
  const [selectedProject, setSelectedProject] = React.useState(0);
  const number_of_project = myProjects.length;

  const HandleNavigation = (direction) => {
    setSelectedProject((prevIndex) =>
      direction === 'prev'
        ? prevIndex === 0
          ? number_of_project - 1
          : prevIndex - 1
        : prevIndex === number_of_project - 1
        ? 0
        : prevIndex + 1
    );
  };

  const project = myProjects[selectedProject];

  return (
    <section className='sm:px-10 px-5 my-20' id='project'>
      <p className='sm:text-4xl text-3xl font-semibold text-gray_gradient'>
        My Projects
      </p>

      <div className='grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full'>
        <div className='flex flex-col gap-5 bg-[#0E0E10] relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200 hover:scale-[1.02] transition-transform duration-300'>
          <div className='absolute top-0 right-0'>
            <img
              src={project.spotlight}
              alt='spotlight'
              className='w-full h-96 object-cover rounded-xl'
            />
          </div>

          <div
            className='p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg'
            style={project.logoStyle}
          >
            <img src={project.logo} alt='logo' className='w-10 h-10 object-contain' />
          </div>

          <div className='flex flex-col gap-5 text-white-600 my-5'>
            <p className='text-white text-2xl font-semibold animated-Text'>
              {project.title}
            </p>
            <p className='text-[#BEC1CF] text-base font-medium'>{project.desc}</p>
            <p className='text-[#BEC1CF] text-base font-medium'>{project.subdesc}</p>
          </div>

          <div className='flex items-center justify-between flex-wrap gap-5'>
            <div className='flex items-center gap-3 flex-wrap'>
              {project.tags.map((tag, index) => (
                <img key={index} src={tag.path} alt={tag.name} />
              ))}
            </div>

            <a
              className='flex items-center gap-2 cursor-pointer text-white'
              href={project.href}
              target='_blank'
              rel='noreferrer'
            >
              <p className='lg:text-2xl bg-black sm:text-2xl text-xl'>
                Check Live Site
              </p>
              <img src='/assets/arrow-up.png' alt='arrow' className='w-3 h-3' />
            </a>
          </div>

          <div className='flex items-center justify-between flex-wrap gap-5 mt-7'>
            <button
              className='w-10 h-10 p-3 cursor-pointer active:scale-95 transition-all rounded-full arrow-gradient'
              onClick={() => HandleNavigation('prev')}
            >
              <img src='/assets/left-arrow.png' alt='prev' className='w-5 h-4' />
            </button>
            <button
              className='w-10 h-10 p-3 cursor-pointer active:scale-95 transition-all rounded-full arrow-gradient'
              onClick={() => HandleNavigation('next')}
            >
              <img src='/assets/right-arrow.png' alt='next' className='w-5 h-4' />
            </button>
          </div>
        </div>
        
        <div className="   bg-[#0E0E10] rounded-lg h-96 md:h-full">
         <Canvas>
  <ambientLight intensity={Math.PI} />
  <directionalLight position={[10, 10, 0]} />
  <Center>
    <Suspense fallback={<CanvasLoader />}>
      <group scale={2.4} position={[-0.2, -4.5, 0.8]} rotation={[0, -0.3, 0]}>
        <DemoComputer texture={project.texture} />
      </group>
    </Suspense>
  </Center>
  {/* <OrbitControls
    enableZoom={true} // Enable zoom
    zoomSpeed={0.6} // Optional: control zoom sensitivity
    minDistance={2} // Optional: how close you can zoom in
    maxDistance={10} // Optional: how far you can zoom out
    maxPolarAngle={Math.PI / 2}
  /> */}
</Canvas>

        </div>
      </div>
    </section>
  );
};

export default Project;
