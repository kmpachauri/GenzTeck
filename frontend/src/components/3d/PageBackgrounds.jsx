import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Abstract floating geometry for About page
function FloatingGeometry({ position, color, type = 'ico', speed = 1 }) {
  const ref = useRef();
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * speed * 0.2;
    ref.current.rotation.y = state.clock.elapsedTime * speed * 0.3;
  });

  const geometryMap = {
    ico: <icosahedronGeometry args={[1, 1]} />,
    oct: <octahedronGeometry args={[1]} />,
    tet: <tetrahedronGeometry args={[1]} />,
    torus: <torusGeometry args={[0.8, 0.3, 16, 32]} />,
  };

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={ref} position={position}>
        {geometryMap[type]}
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.2}
          metalness={0.8}
          roughness={0.2}
          wireframe={Math.random() > 0.5}
          transparent
          opacity={0.7}
        />
      </mesh>
    </Float>
  );
}

function AbstractParticles({ count = 60 }) {
  const ref = useRef();
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = state.clock.elapsedTime * 0.01;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={count} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#7B2FBE" size={0.04} transparent opacity={0.5} sizeAttenuation />
    </points>
  );
}

export function AboutBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-40" style={{ zIndex: 0 }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 55 }} gl={{ alpha: true, antialias: false }} dpr={[1, 1.5]}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[5, 5, 5]} intensity={0.8} color="#7B2FBE" />
          <pointLight position={[-5, -5, 3]} intensity={0.5} color="#00D4FF" />
          <FloatingGeometry position={[-4, 2, -2]} color="#7B2FBE" type="ico" speed={0.5} />
          <FloatingGeometry position={[4, -1, -3]} color="#00D4FF" type="oct" speed={0.7} />
          <FloatingGeometry position={[-3, -2, 1]} color="#00FF88" type="tet" speed={0.4} />
          <FloatingGeometry position={[3, 2, -1]} color="#7B2FBE" type="torus" speed={0.6} />
          <AbstractParticles count={50} />
        </Suspense>
      </Canvas>
    </div>
  );
}

// Blueprint grid for Services page (CSS-based, no 3D overhead)
export function BlueprintBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,212,255,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,212,255,1) 1px, transparent 1px),
            linear-gradient(rgba(0,212,255,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,212,255,0.4) 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px, 120px 120px, 30px 30px, 30px 30px',
        }}
      />
      {/* Flow lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="arrowhead" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto">
            <polygon points="0 0, 6 2, 0 4" fill="#00D4FF" />
          </marker>
        </defs>
        <path d="M 100 200 Q 300 100 500 250 Q 700 400 900 200" stroke="#00D4FF" strokeWidth="1.5" fill="none" markerEnd="url(#arrowhead)" strokeDasharray="8,4" />
        <path d="M 200 500 Q 400 300 650 480 Q 800 600 1100 400" stroke="#7B2FBE" strokeWidth="1" fill="none" strokeDasharray="6,6" />
        <path d="M 50 700 Q 250 550 450 700 Q 650 850 850 650" stroke="#00FF88" strokeWidth="0.8" fill="none" strokeDasharray="4,8" />
      </svg>
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cyan-400/5 blur-[80px]" />
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-purple-500/5 blur-[60px]" />
    </div>
  );
}

// Products ecosystem background
export function ProductsBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      <div className="absolute top-0 left-0 w-full h-full bg-dots opacity-30" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-cyan-400/5 blur-[120px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-purple-500/5 blur-[100px] translate-y-1/3 -translate-x-1/4" />
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full bg-emerald-400/3 blur-[80px] -translate-x-1/2 -translate-y-1/2" />
    </div>
  );
}

// Contact "Mission Control" background
export function ContactBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {/* Subtle particle dots */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(rgba(0,212,255,0.8) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      {/* Concentric rings */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {[200, 350, 500, 700].map((size, i) => (
          <div
            key={i}
            className="absolute border border-cyan-400/5 rounded-full"
            style={{
              width: size,
              height: size,
              left: -size / 2,
              top: -size / 2,
              animation: `spin-slow ${20 + i * 8}s linear infinite ${i % 2 === 0 ? '' : 'reverse'}`,
            }}
          />
        ))}
      </div>
      <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-cyan-400/6 blur-[100px]" />
      <div className="absolute bottom-1/4 left-1/4 w-56 h-56 rounded-full bg-purple-500/6 blur-[80px]" />
    </div>
  );
}

// Demo videos "streaming" background
export function DemoVideosBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, rgba(0,212,255,0.5) 0px, rgba(0,212,255,0.5) 1px, transparent 1px, transparent 4px)',
          backgroundSize: '100% 4px',
        }}
      />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-purple-500/6 blur-[100px] -translate-y-1/2" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-cyan-400/5 blur-[80px] translate-y-1/2" />
    </div>
  );
}

// Blog reading background  
export function BlogBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(123,47,190,0.04)_0%,transparent_60%)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-purple-500/10 via-purple-500/5 to-transparent" />
    </div>
  );
}

// Testimonials trust background
export function TestimonialsBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.03)_0%,transparent_70%)]" />
      {/* Star field */}
      {Array.from({ length: 20 }, (_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: Math.random() * 2 + 1,
            height: Math.random() * 2 + 1,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.3 + 0.1,
          }}
        />
      ))}
    </div>
  );
}

// Projects case study background
export function ProjectsBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,212,255,0.04)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(123,47,190,0.04)_0%,transparent_60%)]" />
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />
    </div>
  );
}

// Demos innovation lab background
export function DemosBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: 'radial-gradient(rgba(0,255,136,0.8) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-emerald-400/5 animate-spin-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-cyan-400/5" style={{ animation: 'spin-slow 15s linear infinite reverse' }} />
      <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-emerald-400/4 blur-[80px]" />
      <div className="absolute bottom-1/3 left-1/4 w-56 h-56 rounded-full bg-cyan-400/4 blur-[70px]" />
    </div>
  );
}
