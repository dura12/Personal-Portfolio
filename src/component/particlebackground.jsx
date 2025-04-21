'use client';
import { useEffect } from 'react';

const ParticlesBackground = () => {
  useEffect(() => {
    const loadParticles = async () => {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
      script.async = true;
      script.onload = () => {
        // @ts-ignore
        window.particlesJS('particles-js', {
          particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: '#ffffff' },
            shape: {
              type: 'star',
              stroke: { width: 0, color: '#000000' },
              polygon: { nb_sides: 5 },
              image: { src: 'img/github.svg', width: 100, height: 100 }
            },
            opacity: { value: 0.5 },
            size: { value: 3, random: true },
            line_linked: { enable: false },
            move: { enable: true, speed: 6, out_mode: 'out' }
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: { enable: true, mode: 'repulse' },
              onclick: { enable: true, mode: 'push' },
              resize: true
            },
            modes: {
              repulse: { distance: 200, duration: 0.4 },
              push: { particles_nb: 4 }
            }
          },
          retina_detect: true
        });
      };
      document.body.appendChild(script);
    };

    loadParticles();
  }, []);

  return (
    <div>
      <div id="particles-js" className="fixed top-0 left-0 w-full h-full z-[-1] bg-black" />
      <div className="absolute top-12 left-0 text-cyan-400 font-bold text-sm ml-2 bg-[#000022] px-2 py-1 rounded">
        <span className="js-count-particles"></span> 
      </div>
    </div>
  );
};

export default ParticlesBackground;
