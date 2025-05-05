import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Suspense, useRef } from "react";

import { Room } from "./room";
import HeroLights from "./herolight";
import Particles from "./herolight";

const RotatingRoom = ({ isMobile }) => {
  const groupRef = useRef(null);
  const directionRef = useRef(-1); // -1 for left, 1 for right

  const maxAngle = Math.PI / 10;     // ≈ +0.39 radians
  const minAngle = -Math.PI / 4;    // ≈ -0.39 radians
  const speed = 0.005;

  useFrame(() => {
    if (!groupRef.current) return;

    groupRef.current.rotation.y += directionRef.current * speed;

    // Reverse direction at bounds
    if (groupRef.current.rotation.y <= minAngle) {
      directionRef.current = 1;
    } else if (groupRef.current.rotation.y >= maxAngle) {
      directionRef.current = -1;
    }
  });

  return (
    <group
      ref={groupRef}
      scale={isMobile ? 1.3 : 1.3}
      position={[0, -3.4, 0]}
      rotation={[0, -2, 0]} // Start facing forward
    >
      <Room />
    </group>
  );
};



const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      <ambientLight intensity={0.2} color="#1a1a40" />
      {/* <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      /> */}
      <Suspense fallback={null}>
        <HeroLights />
        <Particles count={100} />
        <RotatingRoom isMobile={isMobile} />
      </Suspense>
    </Canvas>
  );
};

export default HeroExperience;
