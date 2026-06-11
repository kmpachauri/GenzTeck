import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial, Sphere, Box, Torus, Line } from '@react-three/drei';
import * as THREE from 'three';

// ===== FLOATING DASHBOARD PANEL =====
function DashboardPanel({ position, rotation, color = '#00D4FF', scale = 1 }) {
  const meshRef = useRef();
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.15;
    meshRef.current.rotation.y += 0.002;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
        <boxGeometry args={[2.4, 1.4, 0.05]} />
        <meshStandardMaterial
          color="#12121E"
          metalness={0.8}
          roughness={0.2}
          emissive={color}
          emissiveIntensity={0.04}
        />
      </mesh>
      {/* Screen glow */}
      <mesh position={[position[0], position[1], position[2] + 0.03]} scale={scale}>
        <boxGeometry args={[2.2, 1.2, 0.01]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.15}
          transparent
          opacity={0.6}
        />
      </mesh>
    </Float>
  );
}

// ===== ORBITING SPHERE =====
function OrbitingSphere({ radius, speed, size, color, offset = 0 }) {
  const ref = useRef();
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime * speed + offset;
    ref.current.position.x = Math.cos(t) * radius;
    ref.current.position.y = Math.sin(t * 0.7) * (radius * 0.4);
    ref.current.position.z = Math.sin(t) * radius;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[size, 16, 16]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.6}
        metalness={0.9}
        roughness={0.1}
      />
    </mesh>
  );
}

// ===== PARTICLE FIELD =====
function Particles({ count = 80, color = '#00D4FF' }) {
  const ref = useRef();
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 16;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={count} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color={color} size={0.03} transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

// ===== GLOWING TORUS RING =====
function GlowRing({ position = [0, 0, 0], rotation = [0, 0, 0], color = '#7B2FBE' }) {
  const ref = useRef();
  useFrame(() => {
    if (!ref.current) return;
    ref.current.rotation.z += 0.005;
    ref.current.rotation.x += 0.003;
  });

  return (
    <mesh ref={ref} position={position} rotation={rotation}>
      <torusGeometry args={[1.8, 0.02, 16, 100]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.8}
        metalness={1}
        roughness={0}
      />
    </mesh>
  );
}

// ===== CENTRAL SPHERE (DISTORTED) =====
function CentralSphere() {
  const ref = useRef();
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.1;
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.3}>
      <Sphere ref={ref} args={[1.2, 64, 64]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#00D4FF"
          emissive="#00D4FF"
          emissiveIntensity={0.15}
          metalness={0.9}
          roughness={0.1}
          distort={0.3}
          speed={1.5}
          transparent
          opacity={0.15}
          wireframe
        />
      </Sphere>
    </Float>
  );
}

// ===== MOUSE CAMERA CONTROLLER =====
function CameraController() {
  const { camera } = useThree();
  useFrame((state) => {
    const mouseX = state.mouse.x * 0.3;
    const mouseY = state.mouse.y * 0.2;
    camera.position.x += (mouseX - camera.position.x) * 0.02;
    camera.position.y += (mouseY - camera.position.y) * 0.02;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

// ===== SCENE CONTENT =====
function SceneContent({ isMobile }) {
  return (
    <>
      <CameraController />
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#00D4FF" />
      <pointLight position={[-5, -3, -5]} intensity={0.6} color="#7B2FBE" />
      <pointLight position={[0, 8, 0]} intensity={0.4} color="#ffffff" />

      {/* Central distorted sphere */}
      <CentralSphere />

      {/* Glowing rings */}
      <GlowRing position={[0, 0, 0]} rotation={[Math.PI / 4, 0, 0]} color="#00D4FF" />
      <GlowRing position={[0, 0, 0]} rotation={[0, Math.PI / 4, Math.PI / 6]} color="#7B2FBE" />

      {/* Floating panels - software ecosystem */}
      {!isMobile && (
        <>
          <DashboardPanel position={[-3.5, 1.2, -1]} rotation={[0, 0.3, 0]} color="#00D4FF" scale={0.85} />
          <DashboardPanel position={[3.2, 0.8, -1.5]} rotation={[0, -0.3, 0]} color="#7B2FBE" scale={0.8} />
          <DashboardPanel position={[-2.8, -1.8, 0.5]} rotation={[0.1, 0.2, 0]} color="#00FF88" scale={0.7} />
          <DashboardPanel position={[2.5, -1.5, 0]} rotation={[-0.1, -0.2, 0]} color="#00D4FF" scale={0.75} />
        </>
      )}

      {/* Orbiting spheres */}
      <OrbitingSphere radius={3.5} speed={0.3} size={0.12} color="#00D4FF" offset={0} />
      <OrbitingSphere radius={3.5} speed={0.3} size={0.08} color="#7B2FBE" offset={Math.PI * 0.66} />
      <OrbitingSphere radius={3.5} speed={0.3} size={0.1} color="#00FF88" offset={Math.PI * 1.33} />
      <OrbitingSphere radius={2} speed={0.5} size={0.06} color="#ffffff" offset={Math.PI} />
      <OrbitingSphere radius={2} speed={0.5} size={0.06} color="#00D4FF" offset={0} />

      {/* Particle field */}
      <Particles count={isMobile ? 40 : 100} color="#00D4FF" />
    </>
  );
}

// ===== MAIN HERO 3D SCENE =====
export default function Hero3DScene() {
  const isMobile = window.innerWidth < 768;
  const isLowEnd = navigator.hardwareConcurrency !== undefined && navigator.hardwareConcurrency < 4;

  if (isLowEnd && isMobile) {
    // Return a simple CSS gradient fallback for very low-end devices
    return (
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-cyan-400/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-purple-500/10 blur-[100px]" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 7], fov: 50 }}
        gl={{ antialias: !isMobile, alpha: true, powerPreference: 'high-performance' }}
        dpr={isMobile ? [1, 1.5] : [1, 2]}
        performance={{ min: 0.5 }}
      >
        <Suspense fallback={null}>
          <SceneContent isMobile={isMobile} />
        </Suspense>
      </Canvas>
    </div>
  );
}
