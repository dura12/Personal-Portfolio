import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Developer from '../component/developers.jsx';
import CanvasLoader from '../component/canvasloader.jsx';
import { workExperiences } from '../constants/index.js';

const WorkExperience = () => {
  const [animationName, setAnimationName] = useState('idle');

  return (
    <section className="sm:px-10 px-5 my-20" id="work">
      <div className="w-full text-gray-200">
        <p className="text-3xl sm:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          My Work Experience
        </p>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 mt-12">
          {/* Left Panel (Canvas or Placeholder) */}
          <div className="col-span-1 rounded-lg bg-[#0E0E10]  border-gray-700 min-h-[300px]">
           
             
            <Canvas>
              <ambientLight intensity={1} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
              <Suspense fallback={<CanvasLoader />}>
                <Developer position-y={-3} scale={3} animationName={animationName} />
              </Suspense>
            </Canvas> 
           
          </div>

          {/* Right Panel (Timeline) */}
          <div className="col-span-2 rounded-lg bg-[#0E0E10] ">
            <div className="sm:py-10 py-5 sm:px-6 px-3">
              {workExperiences.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOver={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOut={() => setAnimationName('idle')}
                  className="grid grid-cols-[auto_1fr] items-start gap-5 transition-all duration-300 cursor-pointer rounded-lg sm:px-5 px-3 py-4 group"
                >
                  {/* Icon and line */}
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 p-2 rounded-2xl bg-gray-700 flex items-center justify-center">
                      <img src={item.icon} alt={item.name} className="w-full h-full object-contain" />
                    </div>
                    {/* Vertical line */}
                    {index !== workExperiences.length - 1 && (
                     <div className="w-[2px] h-[91.17px] mt-4 bg-[#38383a] group-hover:bg-gray-400" />

                    )}
                  </div>

                  {/* Info */}
                  <div className="sm:p-4 px-1 py-2">
                    <p className="text-2xl font-light text-white">{item.name}</p>
                    <p className="text-sm text-gray-400 mb-2">
                      {item.pos} — <span>{item.duration}</span>
                    </p>
                    <p className="text-[#AFB0B6] text-[18px] group-hover:text-white transition duration-300">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
