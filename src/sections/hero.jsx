import React from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import HackerRoom from '../component/hackerRoom'

const HeroPage = () => {
  return (
    <section className='min-h-screen w-full flex flex-col relative'>
      <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 gap-3 sm:px-10 px-5'>
        <p className='sm:text-3xl text-2xl font-medium text-center text-white'>
          Hi, I am Dureti{' '}
          <span
            style={{
              animationName: 'wave-animation',
              animationDuration: '2.5s',
              animationIterationCount: 'infinite',
              transformOrigin: '70% 70%',
              display: 'inline-block',
              fontSize: '3rem',
            }}
          >
            👋
          </span>
        </p>
        <p className='text-center xl:text-6xl md:text-5xl sm:text-4xl text-3xl font-generalsans font-black !leading-normal bg-gradient-to-r from-[#BEC1CF] from-60% via-[#D5D8EA] via-60% to-[#D5D8EA] to-100% bg-clip-text text-transparent'>
          Software Engineer
        </p>
      </div>
      <div className='w-full h-full absolute inset-0'>
        {/* Wrap Canvas in a div */}
        <div className='w-full h-full'>
          <Canvas>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            {/* <HackerRoom /> */}
          </Canvas>
        </div>
      </div>
    </section>
  )
}

export default HeroPage