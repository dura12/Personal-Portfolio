import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedCounter from "../component/animatorcounter";
import ButtonH from "../component/Button";
import { words } from "../constants";
import HeroExperience from "../component/models/heroexperience";
import { TypeAnimation } from "react-type-animation";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="gome" className="relative overflow-hidden  pt-28 px-4 sm:px-5">
      {/* Intro Text */}
      <div className="text-center mb-10">
        <p className="sm:text-3xl text-2xl font-medium text-white">
          Hi, I am Dureti{" "}
          <span
            style={{
              animationName: "wave-animation",
              animationDuration: "2.5s",
              animationIterationCount: "infinite",
              transformOrigin: "70% 70%",
              display: "inline-block",
            }}
          >
            👋
          </span>
        </p>

        <TypeAnimation
          sequence={[
            "Software Engineer", 2000,
            "Frontend Developer", 2000,
            "Creative Coder", 2000,
            "Tech Enthusiast", 2000,
          ]}
          wrapper="p"
          cursor={true}
          repeat={Infinity}
          className="text-center xl:text-6xl md:text-5xl sm:text-4xl text-3xl font-generalsans font-black !leading-tight bg-gradient-to-r from-[#BEC1CF] via-[#D5D8EA] to-[#D5D8EA] bg-clip-text text-transparent mt-4"
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-col sm:xl:flex-row items-center justify-between gap-10 w-full max-w-[1440px] mx-auto">
        {/* LEFT: Hero Text Content */}
        <header className="w-full xl:w-1/2 flex flex-col gap-8 px-4 md:px-0">
          <div className="flex flex-col justify-centerrelative z-10 pointer-events-none text-[30px] md:text-[60px] font-semibold leading-snug">
            <h1>
              Shaping
              <span className="absolute pt-0 px-5 py-[30px] h-[48px] md:h-[78px] md:translate-y-1 translate-y-0 overflow-hidden">
                <span className="wrapper">
                  {words.map((word, index) => (
                    <span
                      key={index}
                      className="flex items-center gap-2 md:gap-4 pb-2"
                    >
                      <img
                        src={word.imgPath}
                        alt="person"
                        className="size-7 md:size-10 xl:size-12 p-1 md:p-2 rounded-full bg-white/50"
                      />
                      <span>{word.text}</span>
                    </span>
                  ))}
                </span>
              </span>
            </h1>
            <h1>into Real Projects</h1>
            <h1>that Deliver Results</h1>
          </div>

          <ButtonH
            text="See My Work"
            className="w-52 h-12 md:w-72 md:h-14"
            id="counter"
          />
        </header>

        {/* RIGHT: 3D Model (hide on mobile) */}
       
          <figure className="w-full xl:w-1/2 h-[300px] md:h-[500px] xl:h-[600px]">
            <HeroExperience />
          </figure>
        
      
      </div>
    </section>
  );
};

export default Hero;
