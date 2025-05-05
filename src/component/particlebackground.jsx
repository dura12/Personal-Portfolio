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
            number: {
              value: 150,  // Slightly increased particle count for a more starry effect
              density: { enable: true, value_area: 1500 }
            },
            color: {
              value: '#ffffff'  // Star-like white particles
            },
            shape: {
              type: 'circle',  // Circular particles for a smoother look
              stroke: { width: 0, color: '#000000' }
            },
            opacity: {
              value: 0.7,  // Slightly transparent for a cosmic effect
              random: true,
              anim: {
                enable: true,
                speed: 1,  // Slow opacity transition
                opacity_min: 0.3  // Particles fade out a bit
              }
            },
            size: {
              value: 4,  // Increased particle size for more visibility
              random: true,
              anim: {
                enable: true,
                speed: 1,  // Smooth size change
                size_min: 1  // Minimum size for particles
              }
            },
            line_linked: {
              enable: false,  // No particle connections (clean space effect)
            },
            move: {
              enable: true,
              speed: 0.2,  // Slow movement for subtle effect
              direction: 'none',  // Random direction for organic movement
              random: true,
              straight: false,
              out_mode: 'out',  // Particles disappear on the edge
              bounce: false  // No bounce effect for a clean look
            }
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: { enable: true, mode: 'repulse' },
              onclick: { enable: true, mode: 'push' },
              resize: true
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
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
      <div className="absolute top-12 left-0 text-white font-bold text-sm ml-2 bg-[#000022] px-2 py-1 rounded">
        <span className="js-count-particles"></span>
      </div>
    </div>
  );
};

export default ParticlesBackground;
