import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import TitleHeader from "../component/titleHeader";
import TechIconCardExperience from "../component/models/techLogo";
import { techStackIcons } from "../constants/index";

const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.15,
      }
    );
  }, []);

  return (
    <section className="px-5 md:px-10 mt-20 md:mt-40">
      <TitleHeader title="Tech Stack" sub="Technologies I use" />

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-8 mt-16">
        {techStackIcons.map((icon, index) => (
          <div
            key={index}
            className="tech-card rounded-xl p-2 sm:p-3 md:p-4 flex flex-col items-center justify-between transition-all w-full h-[200px] sm:h-[240px] md:h-[320px] shadow-md relative overflow-hidden group"
          >
            <div className="z-20 flex flex-col items-center gap-2 sm:gap-3 h-full justify-center">
              <p className="text-sm sm:text-base md:text-lg font-semibold text-white text-center">
                {icon.name}
              </p>
              <div className="w-full h-[100px] sm:h-[140px] md:h-[180px]">
                <TechIconCardExperience model={icon} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
