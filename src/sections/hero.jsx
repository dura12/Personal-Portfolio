import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, Ring } from '@react-three/drei'
import HeroCamera from '../component/HeroCamera'
 import HackerRoom from '../component/hackerRoom'
 import { calculateSizes } from '../constants/index.js';
 import HackerRoomWithLoader from '../component/hacke'
import CanvasLoader from '../component/canvasloader'
import { Svg } from '@react-three/drei';
import { extend } from '@react-three/fiber';
extend({ Svg })
import { Leva, useControls } from 'leva'
import Target from '../component/target'
import { useMediaQuery } from 'react-responsive'
import ReactLogo from '../component/reactlogo.jsx';
import Cube from '../component/cube.jsx';
import Rings from '../component/ring.jsx';
import Python  from '../component/python.jsx';
import Button from '../component/button.jsx'
const HeroPage = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' })
  const isDesktop = useMediaQuery({ query: '(min-width: 1025px)' })
  const isLargeDesktop = useMediaQuery({ query: '(min-width: 1440px)' })
  const isExtraLargeDesktop = useMediaQuery({ query: '(min-width: 1920px)' })
  const isExtraSmall = useMediaQuery({ query: '(max-width: 480px)' })
  const isSmall = useMediaQuery({ query: '(max-width: 640px)' })
  const isMedium = useMediaQuery({ query: '(max-width: 768px)' }) 
  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  // const controls = useControls('hackerRoom', {
  //   rotationX: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationY: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationZ: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionX: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionY: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionZ: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   scale: {
  //     value: 0.05,
  //     min: 0,
  //     max: 1,
  //   },
  // })

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
            <Suspense>
            <PerspectiveCamera makeDefault position={[0, 0, 20]}  />
            <HeroCamera isMobile={isMobile} >
               <HackerRoomWithLoader 
                      scale={sizes.deskScale}
                      position={sizes.deskPosition}
                        rotation={[0.1, -Math.PI, 0]} />
              </HeroCamera >
             <Target position={sizes.targetPosition} />
             <ReactLogo position={sizes.reactLogoPosition} />
              {/* <Rings position={sizes.ringPosition} /> */}
             <Cube position={sizes.cubePosition} />
              {/* <Python position={sizes.pythonPosition} /> */}
       
  
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={0.5} /> 
            
              </Suspense>
          </Canvas>
        </div>

      <div className="absolute bottom-7 left-0 right-0 w-full  z-10 sm:px-10 px-5;">
        <a href="#about" className="w-fit">
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full bg-gray-900 sm:min-w-96" />
        </a>
      </div>
      </div>
    </section>
  )
}

export default HeroPage