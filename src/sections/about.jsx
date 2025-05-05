import { useState } from 'react';
import Globe from 'react-globe.gl';
import Button from '../component/button';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(' adrian@jsmastery.pro');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="sm:px-10 px-5 my-20"  id="about">
 <p className='sm:text-4xl text-3xl font-semibold text-gray_gradient mb-5'>
      Just A Little About Me
      </p>
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="w-full h-full  bg-[#0E0E10] rounded-lg sm:p-7 p-4 flex flex-col gap-5 hover:scale-[1.02] transition-transform duration-300">
            <img src="assets/dd" alt="grid-1" className="w-full sm:h-[276px] h-[150px] rounded-full object-contain" />

            <div>
              <p className="text-xl font-semibold mb-2 text-white font-generalsans">Hi, I’m Dureti</p>
              <p className="text-[#afb0b6] text-base font-generalsans">
              Motivated web developer and A2SV graduate with a strong foundation in data structures and algorithms. Hands-on experience in web development, product management, and solving real-world challenges. Recognized for competitive programming achievements and consistently performing at a high academic level.  </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="w-full h-full  bg-[#0E0E10] rounded-lg sm:p-7 p-4 flex flex-col gap-5 hover:scale-[1.02] transition-transform duration-300">
            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[300px] h-fit object-contain" />

            <div>
              <p className="text-xl font-semibold mb-2 text-white font-generalsans">Tech Stack</p>
              <p className="text-[#afb0b6] text-base font-generalsans">
              I specialize in a wide range of languages, frameworks, and tools, including JavaScript, TypeScript, React, Node.js, MongoDB, Express, Flask, Tailwind CSS, Git, and Docker, enabling me to build robust and scalable applications.

              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="w-full h-full  bg-[#0E0E10] rounded-lg sm:p-7 p-4 flex flex-col gap-5 hover:scale-[1.02] transition-transform duration-300">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="text-xl font-semibold mb-2 text-white font-generalsans">
                I’m very flexible with time zone communications & locations
              </p>
              <p className="text-[#afb0b6] text-base font-generalsans">
              I&apos;m Open to remote and onsite work worldwide.
              </p>
              <Button name="Contact Me" isBeam w-full h-full border border-black-300 bg-black-200 rounded-lg sm:p-7  p-4 flex flex-col gap-5 className="w-full  sm:text-3xl text-xl mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="w-full h-full  bg-[#0E0E10] rounded-lg sm:p-7 p-4 flex flex-col gap-5 hover:scale-[1.02] transition-transform duration-300">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="text-xl font-semibold mb-2 text-white font-generalsans">My Passion for Coding</p>
              <p className="text-[#afb0b6] text-base font-generalsans">
                I love solving problems and building things through code. Programming isn&apos;t just my
                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="w-full h-full  border-black-300 bg-[#0E0E10] rounded-lg sm:p-7 p-4 flex flex-col gap-5 hover:scale-[1.02] transition-transform duration-300">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className=" text-base sm:text-3xl  font-generalsans text-center">Contact me</p>
              <div
                className="cursor-pointer flex justify-center items-center gap-2 w-full h-full border border-black-300 rounded-lg sm:p-7 p-4 flex-col hover:scale-[1.02] transition-transform duration-300"
                onClick={handleCopy}
              >
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="text-base sm:text-xl md:text-2xl xl:text-3xl font-medium bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
  dureti104@gmail.com
</p>

              </div>
            </div>
          </div>
        </div>
      </div>
    
    </section>
  );
};

export default About;
