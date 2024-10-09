import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

const Earth = () => {
  const earthRef = useRef();

  // Puedes agregar la textura que prefieras para la Tierra.
  const earthTexture = new THREE.TextureLoader().load('/textures/2k_earth_nightmap.jpg');

  return (
    <>
      <ambientLight intensity={10} />
      <pointLight position={[10, 10, 10]} />
      <mesh ref={earthRef} rotation={[0, 0, 0]}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial map={earthTexture} />
      </mesh>
      <OrbitControls />
      <Stars />
    </>
  );
};

export default Earth;
