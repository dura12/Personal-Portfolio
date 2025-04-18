import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

function Python(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Python_Python_0.geometry}
          material={materials.Python}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')

export default Python;
