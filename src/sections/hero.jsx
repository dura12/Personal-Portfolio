import React, { Suspense } from 'react'
import { Canvas, extend } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'
import { TypeAnimation } from 'react-type-animation'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

import HeroCamera from '../component/HeroCamera'
import HackerRoomWithLoader from '../component/hacke'
import Target from '../component/target'
import ReactLogo from '../component/reactlogo'
import Cube from '../component/cube'
// import Python from '../component/python'
import Button from '../component/button'

import { calculateSizes } from '../constants/index'

const HeroPage = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' })
  const isSmall = useMediaQuery({ query: '(max-width: 640px)' })
  const sizes = calculateSizes(isSmall, isMobile, isTablet)

  return (
    <section className='min-h-screen w-full flex flex-col relative text-white'>
      <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 gap-3 sm:px-10 px-5 items-center text-center'>
        <p className='sm:text-3xl text-2xl font-medium text-white'>
          Hi, I am Dureti{' '}
          <span
            style={{
              animationName: 'wave-animation',
              animationDuration: '2.5s',
              animationIterationCount: 'infinite',
              transformOrigin: '70% 70%',
              display: 'inline-block',
            }}
          >
            👋
          </span>
        </p>

        <TypeAnimation
          sequence={[
            'Software Engineer', 2000,
            'Frontend Developer', 2000,
            'Creative Coder', 2000,
            'Tech Enthusiast', 2000,
          ]}
          wrapper="p"
          cursor={true}
          repeat={Infinity}
          className="text-center xl:text-6xl md:text-5xl sm:text-4xl text-3xl font-generalsans font-black !leading-normal bg-gradient-to-r from-[#BEC1CF] via-[#D5D8EA] to-[#D5D8EA] bg-clip-text text-transparent"
        />


        {/* Social Icons */}
        {/* <div className="flex justify-center mt-6 gap-6 text-cyan-300 text-2xl">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:scale-110 transition-transform" />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:scale-110 transition-transform" />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="hover:scale-110 transition-transform" />
          </a>
        </div> */}

        {/* Code Card (optional) */}
        {/* <pre className="bg-[#1e1e1e] text-green-400 p-4 rounded-xl mt-8 text-xs max-w-sm w-full font-mono overflow-x-auto">
          <code>
            {`const greet = () => {
  console.log("Hi, I'm Dureti 👋");
}`}
          </code>
        </pre> */}
      </div>

      {/* 3D Canvas Section */}
      <div className='w-full h-full absolute inset-0'>
        <Canvas>
          <Suspense>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            <HeroCamera isMobile={isMobile}>
              <HackerRoomWithLoader
                scale={sizes.deskScale}
                position={sizes.deskPosition}
                rotation={[0.1, -Math.PI, 0]}
              />
            </HeroCamera>
            <Target position={sizes.targetPosition} />
            <ReactLogo position={sizes.reactLogoPosition} />
            <Cube position={sizes.cubePosition} />
            {/* <Python position={sizes.pythonPosition} /> */}

            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

      {/* CTA Button */}
      <div className="absolute bottom-24 left-0 right-0 w-full z-10 flex justify-center">
        <a href="#about" className="w-fit">
          <Button
            name="Let's work together"
            isBeam
            containerClass="sm:w-fit w-full bg-gray-900 sm:text-3xl text-xl sm:min-w-96"
          />
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center z-10">
        <a href="#about" className="flex flex-col items-center animate-bounce text-cyan-300">
          <span className="text-sm">Scroll</span>
          <svg width="24" height="24" fill="currentColor" className="mt-1">
            <path d="M12 0v20M2 10l10 10 10-10" />
          </svg>
        </a>
      </div>
      {/* Download Resume Button (Top-right Corner) */}
      {/* <div className="absolute top-80 left-5 z-10">
  <a href="/path/to/your-resume.pdf" download>
    <button className="px-6 py-3 text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#BEC1CF] to-[#D5D8EA] border-2 border-gradient-to-r border-[#343436] hover:bg-gradient-to-l hover:from-[#D5D8EA] hover:to-[#BEC1CF] rounded-lg shadow-md hover:scale-105 transition-all">
      Download Resume
    </button>
  </a>
</div> */}

    </section>
  )
}

export default HeroPage
