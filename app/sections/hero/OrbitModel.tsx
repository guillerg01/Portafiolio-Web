"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";

function HeroMesh() {
  return (
    <Float
      speed={2.2}
      rotationIntensity={1}
      floatIntensity={1.4}
      floatingRange={[0.05, 0.3]}
    >
      <mesh castShadow receiveShadow rotation={[Math.PI / 4, 0, 0]}>
        <torusKnotGeometry args={[1, 0.32, 140, 32]} />
        <meshStandardMaterial
          color="#F7AB0A"
          emissive="#F7AB0A"
          emissiveIntensity={0.25}
          metalness={0.6}
          roughness={0.3}
        />
      </mesh>
    </Float>
  );
}

export function OrbitModel() {
  return (
    <div className="relative h-56 w-56 rounded-full bg-gradient-to-tr from-[#f7ab0a1a] to-[#7c3aed1c] shadow-2xl sm:h-64 sm:w-64">
      <Canvas camera={{ position: [0, 0, 4], fov: 40 }}>
        <hemisphereLight intensity={0.9} groundColor="#0f0f10" />
        <pointLight position={[5, 5, 5]} intensity={1.8} />
        <Suspense fallback={null}>
          <HeroMesh />
        </Suspense>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
      </Canvas>
      <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-transparent to-[#f7ab0a1f]" />
    </div>
  );
}


