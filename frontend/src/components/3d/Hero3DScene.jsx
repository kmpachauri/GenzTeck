import { useRef, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

// ===== HOLOGRAPHIC CYBER GLOBE =====
function HolographicGlobe({ scrollY }) {
  const groupRef = useRef();
  const outerSphereRef = useRef();
  const outerPointsRef = useRef();
  const innerSphereRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const coreRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const scrollVal = scrollY.current;

    // Mouse Parallax - Tilt the whole assembly dynamically
    const mouseX = state.mouse.x * 0.35;
    const mouseY = state.mouse.y * 0.35;

    if (groupRef.current) {
      groupRef.current.rotation.x += (mouseY - groupRef.current.rotation.x) * 0.05;
      groupRef.current.rotation.y += (mouseX - groupRef.current.rotation.y) * 0.05;
    }

    // Outer globe rotation
    const outerSpeed = t * 0.065 + scrollVal * 0.0004;
    if (outerSphereRef.current) outerSphereRef.current.rotation.y = outerSpeed;
    if (outerPointsRef.current) outerPointsRef.current.rotation.y = outerSpeed;

    // Inner wireframe sphere rotates opposite on Y & X
    if (innerSphereRef.current) {
      innerSphereRef.current.rotation.y = -t * 0.12 - scrollVal * 0.0006;
      innerSphereRef.current.rotation.x = t * 0.08;
    }

    // Orbiting rings rotation
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z = t * 0.15 + scrollVal * 0.0008;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z = -t * 0.12 - scrollVal * 0.0006;
    }

    // Central core pulses scale and glows
    if (coreRef.current) {
      const pulse = 1.0 + Math.sin(t * 1.8) * 0.06;
      coreRef.current.scale.set(pulse, pulse, pulse);
      coreRef.current.rotation.y = -t * 0.25;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.2, 0]}>
      {/* Outer Geodesic Globe Wireframe */}
      <mesh ref={outerSphereRef}>
        <icosahedronGeometry args={[2.0, 2]} />
        <meshBasicMaterial color="#00D4FF" wireframe transparent opacity={0.16} />
      </mesh>

      {/* Outer Geodesic Globe Nodes */}
      <points ref={outerPointsRef}>
        <icosahedronGeometry args={[2.0, 2]} />
        <pointsMaterial color="#00D4FF" size={0.05} transparent opacity={0.65} sizeAttenuation />
      </points>

      {/* Inner Geodesic Core Wireframe */}
      <mesh ref={innerSphereRef}>
        <dodecahedronGeometry args={[1.2, 1]} />
        <meshBasicMaterial color="#7B2FBE" wireframe transparent opacity={0.28} />
      </mesh>

      {/* Outer Glowing Ring 1 (Emerald) */}
      <mesh ref={ring1Ref} rotation={[Math.PI / 3.5, Math.PI / 6, 0]}>
        <torusGeometry args={[2.55, 0.012, 8, 64]} />
        <meshBasicMaterial color="#00FF88" transparent opacity={0.35} />
      </mesh>

      {/* Outer Glowing Ring 2 (Purple) */}
      <mesh ref={ring2Ref} rotation={[-Math.PI / 4, -Math.PI / 6, 0]}>
        <torusGeometry args={[2.85, 0.01, 8, 64]} />
        <meshBasicMaterial color="#7B2FBE" transparent opacity={0.3} />
      </mesh>

      {/* Central Pulsating Energy Dodecahedron Core */}
      <Float speed={2.5} rotationIntensity={0.4} floatIntensity={0.2}>
        <mesh ref={coreRef}>
          <dodecahedronGeometry args={[0.55, 0]} />
          <meshStandardMaterial
            color="#00D4FF"
            emissive="#7B2FBE"
            emissiveIntensity={0.7}
            roughness={0.15}
            metalness={0.85}
            transparent
            opacity={0.65}
            wireframe
          />
        </mesh>
      </Float>
    </group>
  );
}

// ===== CAMERA CONTROLLER (SCROLL DEPTH SHIFT) =====
function CameraController({ scrollY }) {
  const { camera } = useThree();
  useFrame(() => {
    const scrollVal = scrollY.current;
    
    // Zoom out and shift camera slightly downwards on scroll
    const targetZ = 5.2 + scrollVal * 0.0012;
    const targetY = -0.2 - scrollVal * 0.0008;
    
    camera.position.y += (targetY - camera.position.y) * 0.04;
    camera.position.z += (targetZ - camera.position.z) * 0.04;
    camera.lookAt(0, -0.2 - scrollVal * 0.0004, 0);
  });
  return null;
}

// ===== SCENE CONTENT =====
function SceneContent({ isMobile, scrollY }) {
  return (
    <>
      <CameraController scrollY={scrollY} />
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 8, 5]} intensity={1.5} color="#00D4FF" />
      <pointLight position={[-5, -5, -5]} intensity={0.8} color="#7B2FBE" />

      {/* Holographic Cyber Globe */}
      <HolographicGlobe scrollY={scrollY} />
    </>
  );
}

// ===== MAIN HERO 3D SCENE =====
export default function Hero3DScene() {
  const isMobile = window.innerWidth < 768;
  const isLowEnd = navigator.hardwareConcurrency !== undefined && navigator.hardwareConcurrency < 4;
  
  const scrollY = useRef(0);
  useEffect(() => {
    const handleScroll = () => {
      scrollY.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isLowEnd && isMobile) {
    return (
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-cyan-400/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-purple-500/5 blur-[100px]" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
      <Canvas
        camera={{ position: [0, -0.2, 5.2], fov: 45 }}
        gl={{ antialias: !isMobile, alpha: true, powerPreference: 'high-performance' }}
        dpr={isMobile ? [1, 1.2] : [1, 1.5]}
        performance={{ min: 0.6 }}
      >
        <Suspense fallback={null}>
          <SceneContent isMobile={isMobile} scrollY={scrollY} />
        </Suspense>
      </Canvas>
    </div>
  );
}
