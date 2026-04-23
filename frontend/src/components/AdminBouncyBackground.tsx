"use client";

import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  Float, 
  MeshDistortMaterial, 
  ContactShadows, 
  Environment
} from '@react-three/drei';
import * as THREE from 'three';

const BouncySphere = ({ position, color, scale }: { position: [number, number, number], color: string, scale: number }) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);
  
  // High-speed spring physics logic
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      
      // Floating motion
      meshRef.current.position.y = position[1] + Math.sin(time + position[0]) * 0.5;
      meshRef.current.rotation.x = Math.sin(time * 0.3) * 0.2;
      meshRef.current.rotation.y = Math.cos(time * 0.3) * 0.2;
      
      // Elastic Scale
      const targetScale = hovered ? scale * 1.8 : scale;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.15);
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      castShadow
    >
      <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial
        color={color}
        speed={hovered ? 6 : 1.5}
        distort={hovered ? 0.7 : 0.4}
        radius={1}
        roughness={0.05}
        metalness={0.9}
        emissive={color}
        emissiveIntensity={hovered ? 0.2 : 0}
      />
    </mesh>
  );
};

export default function AdminBouncyBackground() {
  const spheres = useMemo(() => {
    return Array.from({ length: 12 }).map((_, i) => ({
      position: [
        (Math.random() - 0.5) * 30, // Wide spread
        (Math.random() - 0.5) * 15,
        -2 + (Math.random() * 5),
      ] as [number, number, number],
      color: i % 2 === 0 ? "#FF0000" : "#D40000", // Vibrant High-speed Crimson
      scale: 1.5 + Math.random() * 2.5 // MASSIVE SCALE
    }));
  }, []);

  return (
    <div className="absolute inset-0 z-1 pointer-events-auto overflow-hidden">
      <Canvas shadows camera={{ position: [0, 0, 15], fov: 45 }}>
        <color attach="background" args={["#801414"]} />
        <ambientLight intensity={0.8} />
        <spotLight position={[20, 20, 20]} angle={0.2} penumbra={1} intensity={2} castShadow />
        <pointLight position={[-20, -20, -20]} intensity={1} color="#FF0000" />
        
        <Environment preset="night" />
        
        {spheres.map((sphere, i) => (
          <BouncySphere key={i} {...sphere} />
        ))}
        
        <ContactShadows 
          position={[0, -10, 0]} 
          opacity={0.4} 
          scale={40} 
          blur={2.5} 
          far={20} 
        />
      </Canvas>
    </div>
  );
}
