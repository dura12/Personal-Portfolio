import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Target = (props) => {
  const targetRef = useRef();
  const { scene } = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf',
  );

  useGSAP(() => {
    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 1,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      rotation: {
        y: Math.PI * 2,
      },
      ease: 'power1.inOut',
      onUpdate: () => {
        targetRef.current.rotation.y += 0.01;
      },
      onComplete: () => {
        gsap.to(targetRef.current.rotation, {
          y: Math.PI * 2,
          duration: 1.5,
          ease: 'power1.inOut',
        });
      },
      onReverseComplete: () => {
        gsap.to(targetRef.current.rotation, {
          y: 0,
          duration: 1.5,
          ease: 'power1.inOut',
        });
      },
      paused: false,
    });
  });

  return (
    <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Target;