import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sparkles } from '@react-three/drei';

function BlobShape() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += delta * 0.15;
    meshRef.current.rotation.y += delta * 0.2;
  });

  return (
    <Float speed={2} rotationIntensity={1.2} floatIntensity={1.6}>
      <mesh ref={meshRef} scale={1.9}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          color="#c084fc"
          attach="material"
          distort={0.45}
          speed={2}
          roughness={0.15}
          metalness={0.6}
          emissive="#7c3aed"
          emissiveIntensity={0.3}
        />
      </mesh>
    </Float>
  );
}

export default function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} intensity={1.4} color="#ff7ad9" />
        <pointLight position={[-5, -3, -5]} intensity={1} color="#38f7ff" />
        <BlobShape />
        <Sparkles count={60} scale={6} size={2.5} speed={0.3} color="#e9d5ff" />
      </Suspense>
    </Canvas>
  );
}
