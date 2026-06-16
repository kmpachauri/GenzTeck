import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// ===== CUSTOM SCROLL HOOK =====
const useScrollPosition = () => {
  const scrollY = useRef(0);
  useEffect(() => {
    const handleScroll = () => {
      scrollY.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return scrollY;
};

// ==========================================
// 1. ABOUT PAGE BACKGROUND (Floating shapes)
// ==========================================
function FloatingShape({ geometry, position, color, speed, scrollY }) {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;
    const scrollVal = scrollY.current;
    
    if (ref.current) {
      ref.current.rotation.x = t * 0.15 + scrollVal * 0.0004;
      ref.current.rotation.y = t * 0.2 + scrollVal * 0.0006;
      ref.current.position.y = position[1] - scrollVal * 0.0012;
    }
  });

  return (
    <mesh ref={ref} position={position}>
      {geometry}
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.15}
        roughness={0.2}
        metalness={0.8}
        transparent
        opacity={0.5}
      />
    </mesh>
  );
}

export function AboutBackground() {
  const scrollY = useScrollPosition();
  return (
    <div className="fixed inset-0 pointer-events-none z-[1] opacity-40">
      <Canvas camera={{ position: [0, 0, 8], fov: 55 }} gl={{ alpha: true }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[8, 8, 8]} intensity={1.2} color="#00D4FF" />
        <pointLight position={[-8, -8, -8]} intensity={0.8} color="#7B2FBE" />
        <FloatingShape position={[-3.5, 2, -2]} color="#7B2FBE" speed={0.4} scrollY={scrollY} geometry={<icosahedronGeometry args={[1, 0]} />} />
        <FloatingShape position={[3.5, -1, -3]} color="#00D4FF" speed={0.5} scrollY={scrollY} geometry={<octahedronGeometry args={[0.9]} />} />
        <FloatingShape position={[-2.5, -3, 1]} color="#00FF88" speed={0.3} scrollY={scrollY} geometry={<tetrahedronGeometry args={[0.8]} />} />
        <FloatingShape position={[2.5, 3, -1]} color="#FF6B6B" speed={0.6} scrollY={scrollY} geometry={<torusGeometry args={[0.6, 0.2, 10, 20]} />} />
      </Canvas>
    </div>
  );
}

// ==========================================
// 2. SERVICES PAGE BACKGROUND (Grid helper)
// ==========================================
function GridScene({ scrollY }) {
  const gridRef = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const scrollVal = scrollY.current;
    if (gridRef.current) {
      gridRef.current.position.z = (t * 0.4 + scrollVal * 0.002) % 2;
      gridRef.current.rotation.x = -Math.PI / 3;
    }
  });

  return (
    <group ref={gridRef} position={[0, -1.8, -2.5]}>
      <gridHelper args={[24, 24, '#00D4FF', 'rgba(0, 212, 255, 0.08)']} />
    </group>
  );
}

export function BlueprintBackground() {
  const scrollY = useScrollPosition();
  return (
    <div className="fixed inset-0 pointer-events-none z-[1] opacity-35">
      <Canvas camera={{ position: [0, 0, 4], fov: 60 }} gl={{ alpha: true }}>
        <GridScene scrollY={scrollY} />
      </Canvas>
    </div>
  );
}

// ==========================================
// 3. PRODUCTS PAGE BACKGROUND (Digital network)
// ==========================================
function ProductNodes({ scrollY }) {
  const groupRef = useRef();
  const nodes = [
    [-1.8, 1.3, -1],
    [1.8, 1.8, -2],
    [-1.2, -1.2, 0],
    [2.0, -0.8, -1.5],
    [0, 0.3, -1.8]
  ];

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const scrollVal = scrollY.current;
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.04 + scrollVal * 0.0004;
      groupRef.current.rotation.x = Math.sin(t * 0.04) * 0.08;
    }
  });

  return (
    <group ref={groupRef}>
      {nodes.map((pos, i) => (
        <mesh key={i} position={pos}>
          <boxGeometry args={[0.25, 0.25, 0.25]} />
          <meshBasicMaterial color={i % 2 === 0 ? "#00D4FF" : "#7B2FBE"} wireframe />
        </mesh>
      ))}
      
      {nodes.slice(0, 4).map((pos, i) => {
        const points = [new THREE.Vector3(...pos), new THREE.Vector3(...nodes[4])];
        const lineGeom = new THREE.BufferGeometry().setFromPoints(points);
        return (
          <line key={i} geometry={lineGeom}>
            <lineBasicMaterial color="#ffffff" opacity={0.15} transparent />
          </line>
        );
      })}
    </group>
  );
}

export function ProductsBackground() {
  const scrollY = useScrollPosition();
  return (
    <div className="fixed inset-0 pointer-events-none z-[1] opacity-40">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 55 }} gl={{ alpha: true }}>
        <ProductNodes scrollY={scrollY} />
      </Canvas>
    </div>
  );
}

// ==========================================
// 4. PORTFOLIO PAGE BACKGROUND (Cyber Double Helix)
// ==========================================
function DoubleHelixWave({ scrollY }) {
  const pointsRef = useRef();
  const count = 65; // High resolution nodes

  // Generate original DNA double helix coordinate array
  const tempPositions = useMemo(() => {
    const arr = new Float32Array(count * 2 * 3);
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 4;
      const x = (i - count / 2) * 0.16;

      // Strand 1
      const idx1 = i * 3;
      arr[idx1] = x;
      arr[idx1 + 1] = Math.sin(angle) * 0.8;
      arr[idx1 + 2] = Math.cos(angle) * 0.8;

      // Strand 2
      const idx2 = (count + i) * 3;
      arr[idx2] = x;
      arr[idx2 + 1] = Math.sin(angle + Math.PI) * 0.8;
      arr[idx2 + 2] = Math.cos(angle + Math.PI) * 0.8;
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const scrollVal = scrollY.current;

    if (pointsRef.current) {
      const posAttr = pointsRef.current.geometry.attributes.position;
      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 4 + t * 0.8 + scrollVal * 0.0018;

        // Strand 1
        const idx1 = i * 3;
        posAttr.array[idx1 + 1] = Math.sin(angle) * 0.85;
        posAttr.array[idx1 + 2] = Math.cos(angle) * 0.85;

        // Strand 2
        const idx2 = (count + i) * 3;
        posAttr.array[idx2 + 1] = Math.sin(angle + Math.PI) * 0.85;
        posAttr.array[idx2 + 2] = Math.cos(angle + Math.PI) * 0.85;
      }
      posAttr.needsUpdate = true;
      // Helix rotates on its long axis and responds to scroll
      pointsRef.current.rotation.x = t * 0.12;
      pointsRef.current.rotation.y = scrollVal * 0.0003;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={tempPositions} count={count * 2} itemSize={3} />
      </bufferGeometry>
      {/* Dynamic double-layered point rendering */}
      <pointsMaterial color="#00D4FF" size={0.065} transparent opacity={0.65} sizeAttenuation />
    </points>
  );
}

export function ProjectsBackground() {
  const scrollY = useScrollPosition();
  return (
    <div className="fixed inset-0 pointer-events-none z-[1] opacity-65">
      <Canvas camera={{ position: [0, 1.2, 5.0], fov: 50 }} gl={{ alpha: true }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#00D4FF" />
        <DoubleHelixWave scrollY={scrollY} />
      </Canvas>
    </div>
  );
}

// ==========================================
// 5. DEMOS PAGE BACKGROUND (Perspective Screen Tunnel)
// ==========================================
function FloatingCards({ scrollY }) {
  const card1 = useRef();
  const card2 = useRef();
  const card3 = useRef();
  const card4 = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const scrollVal = scrollY.current;

    // Define card position descriptors
    const cards = [
      { ref: card1, baseZ: 0, x: -1.8, y: 1.0, color: '#00D4FF' },
      { ref: card2, baseZ: -4, x: 1.8, y: -0.8, color: '#7B2FBE' },
      { ref: card3, baseZ: -8, x: -1.2, y: -1.5, color: '#00FF88' },
      { ref: card4, baseZ: -12, x: 1.2, y: 1.5, color: '#FF6B6B' }
    ];

    const loopLen = 16;
    cards.forEach((card, idx) => {
      if (card.ref.current) {
        // Compute scrolled forward position
        let curZ = card.baseZ + scrollVal * 0.0055;
        // Loop continuously in the tunnel between -12 and +4
        curZ = ((curZ + 4) % loopLen) - 12;

        card.ref.current.position.z = curZ;
        card.ref.current.position.x = card.x + Math.sin(t * 0.25 + idx) * 0.15;
        card.ref.current.position.y = card.y + Math.cos(t * 0.25 + idx) * 0.15;

        // Smooth rotations
        card.ref.current.rotation.x = t * 0.08 + Math.sin(t * 0.15 + idx) * 0.12;
        card.ref.current.rotation.y = t * 0.12 + scrollVal * 0.001;
      }
    });
  });

  return (
    <group>
      {/* 3D Wireframe Card 1 */}
      <mesh ref={card1}>
        <boxGeometry args={[1.7, 1.1, 0.03]} />
        <meshStandardMaterial color="#00D4FF" emissive="#00D4FF" emissiveIntensity={0.25} roughness={0.15} metalness={0.85} wireframe />
      </mesh>
      
      {/* 3D Wireframe Card 2 */}
      <mesh ref={card2}>
        <boxGeometry args={[1.9, 1.2, 0.03]} />
        <meshStandardMaterial color="#7B2FBE" emissive="#7B2FBE" emissiveIntensity={0.25} roughness={0.15} metalness={0.85} wireframe />
      </mesh>

      {/* 3D Wireframe Card 3 */}
      <mesh ref={card3}>
        <boxGeometry args={[1.5, 0.9, 0.03]} />
        <meshStandardMaterial color="#00FF88" emissive="#00FF88" emissiveIntensity={0.25} roughness={0.15} metalness={0.85} wireframe />
      </mesh>

      {/* 3D Wireframe Card 4 */}
      <mesh ref={card4}>
        <boxGeometry args={[1.6, 1.0, 0.03]} />
        <meshStandardMaterial color="#FF6B6B" emissive="#FF6B6B" emissiveIntensity={0.25} roughness={0.15} metalness={0.85} wireframe />
      </mesh>
    </group>
  );
}

export function DemosBackground() {
  const scrollY = useScrollPosition();
  return (
    <div className="fixed inset-0 pointer-events-none z-[1] opacity-45">
      <Canvas camera={{ position: [0, 0, 5], fov: 55 }} gl={{ alpha: true }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#00D4FF" />
        <FloatingCards scrollY={scrollY} />
      </Canvas>
    </div>
  );
}

// ==========================================
// 6. DEMO VIDEOS BACKGROUND (Waveform lines)
// ==========================================
function VideoWaveform({ scrollY }) {
  const meshRef = useRef();
  const count = 30;
  
  const points = useMemo(() => {
    const arr = [];
    for (let i = 0; i < count; i++) {
      arr.push(new THREE.Vector3((i - count / 2) * 0.28, 0, 0));
    }
    return arr;
  }, [count]);

  const lineGeom = useMemo(() => new THREE.BufferGeometry().setFromPoints(points), [points]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const scrollVal = scrollY.current;
    
    if (meshRef.current) {
      const posAttr = meshRef.current.geometry.attributes.position;
      for (let i = 0; i < count; i++) {
        posAttr.array[i * 3 + 1] = Math.sin(i * 0.22 + t * 1.8 + scrollVal * 0.0008) * 0.55;
      }
      posAttr.needsUpdate = true;
      meshRef.current.rotation.y = scrollVal * 0.0004;
    }
  });

  return (
    <line ref={meshRef} geometry={lineGeom}>
      <lineBasicMaterial color="#00D4FF" transparent opacity={0.3} />
    </line>
  );
}

export function DemoVideosBackground() {
  const scrollY = useScrollPosition();
  return (
    <div className="fixed inset-0 pointer-events-none z-[1] opacity-45">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 50 }} gl={{ alpha: true }}>
        <VideoWaveform scrollY={scrollY} />
      </Canvas>
    </div>
  );
}

// ==========================================
// 7. TESTIMONIALS BACKGROUND (Star cluster)
// ==========================================
function ConstellationField({ scrollY }) {
  const ref = useRef();
  const count = 90;
  
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 2.5 + Math.random() * 8;
      const u = Math.random() * 2 - 1;
      const phi = Math.random() * Math.PI * 2;
      const theta = Math.acos(u);
      arr[i * 3] = r * Math.sin(theta) * Math.cos(phi);
      arr[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi);
      arr[i * 3 + 2] = r * Math.cos(theta);
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    const scrollVal = scrollY.current;
    ref.current.rotation.y = state.clock.getElapsedTime() * 0.006 + scrollVal * 0.00015;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={count} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#ffffff" size={0.03} transparent opacity={0.25} sizeAttenuation />
    </points>
  );
}

export function TestimonialsBackground() {
  const scrollY = useScrollPosition();
  return (
    <div className="fixed inset-0 pointer-events-none z-[1]">
      <Canvas camera={{ position: [0, 0, 6], fov: 55 }} gl={{ alpha: true }}>
        <ConstellationField scrollY={scrollY} />
      </Canvas>
    </div>
  );
}

// ==========================================
// 8. CONTACT PAGE BACKGROUND (Interactive Neural net)
// ==========================================
function ConnectionNet({ scrollY }) {
  const pointsRef = useRef();
  const lineRef = useRef();
  
  const particleCount = 45;

  // Use a stable ref for particle trajectories to avoid canvas re-creation
  const particleData = useRef(null);
  
  if (!particleData.current) {
    const data = [];
    for (let i = 0; i < particleCount; i++) {
      data.push({
        pos: new THREE.Vector3(
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 5,
          (Math.random() - 0.5) * 3
        ),
        vel: new THREE.Vector3(
          (Math.random() - 0.5) * 0.012,
          (Math.random() - 0.5) * 0.012,
          (Math.random() - 0.5) * 0.012
        )
      });
    }
    particleData.current = data;
  }

  const pointsPositions = useMemo(() => new Float32Array(particleCount * 3), []);
  const linePositions = useMemo(() => new Float32Array(particleCount * particleCount * 6), []);

  useFrame((state) => {
    const scrollVal = scrollY.current;
    const mouse = state.mouse;

    // Approximate mouse coordinates in 3D scene space
    const mouseVector = new THREE.Vector3(mouse.x * 3, mouse.y * 2.5, 0);
    const data = particleData.current;
    
    // 1. Update positions and boundary check
    for (let i = 0; i < particleCount; i++) {
      const p = data[i].pos;
      const v = data[i].vel;
      
      // Update by velocity
      p.add(v);
      
      // Bounce checks
      if (Math.abs(p.x) > 3.5) v.x *= -1;
      if (Math.abs(p.y) > 2.8) v.y *= -1;
      if (Math.abs(p.z) > 2.2) v.z *= -1;

      // Mouse attraction pull
      const distToMouse = p.distanceTo(mouseVector);
      if (distToMouse < 1.8) {
        const steer = new THREE.Vector3().subVectors(mouseVector, p).normalize().multiplyScalar(0.008);
        p.add(steer);
      }

      // Copy positions to the GPU rendering buffer array
      pointsPositions[i * 3] = p.x;
      pointsPositions[i * 3 + 1] = p.y;
      pointsPositions[i * 3 + 2] = p.z;
    }

    if (pointsRef.current) {
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
      pointsRef.current.rotation.y = scrollVal * 0.0004;
    }

    // 2. Compute connections lines
    let lineCount = 0;
    for (let i = 0; i < particleCount; i++) {
      const p1 = data[i].pos;
      for (let j = i + 1; j < particleCount; j++) {
        const p2 = data[j].pos;
        const dist = p1.distanceTo(p2);
        if (dist < 1.25) {
          const idx = lineCount * 6;
          linePositions[idx] = p1.x;
          linePositions[idx + 1] = p1.y;
          linePositions[idx + 2] = p1.z;
          linePositions[idx + 3] = p2.x;
          linePositions[idx + 4] = p2.y;
          linePositions[idx + 5] = p2.z;
          lineCount++;
        }
      }
    }

    if (lineRef.current) {
      lineRef.current.geometry.attributes.position.needsUpdate = true;
      lineRef.current.geometry.setDrawRange(0, lineCount * 2);
      lineRef.current.rotation.y = scrollVal * 0.0004;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Node vertices points */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" array={pointsPositions} count={particleCount} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial color="#7B2FBE" size={0.075} transparent opacity={0.65} sizeAttenuation />
      </points>

      {/* Network edge segments */}
      <lineSegments ref={lineRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" array={linePositions} count={particleCount * particleCount * 2} itemSize={3} />
        </bufferGeometry>
        <lineBasicMaterial color="#00D4FF" transparent opacity={0.35} />
      </lineSegments>
    </group>
  );
}

export function ContactBackground() {
  const scrollY = useScrollPosition();
  return (
    <div className="fixed inset-0 pointer-events-none z-[1] opacity-50">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 50 }} gl={{ alpha: true }}>
        <ConnectionNet scrollY={scrollY} />
      </Canvas>
    </div>
  );
}

// ==========================================
// 9. BLOG PAGE BACKGROUND (Binary columns)
// ==========================================
function BinaryStream({ scrollY }) {
  const ref = useRef();
  const count = 40;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 6;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 6;
      arr[i * 3 + 2] = -Math.random() * 3;
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const scrollVal = scrollY.current;
    if (ref.current) {
      ref.current.position.y = (t * 0.15 + scrollVal * 0.0006) % 3;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={count} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#7B2FBE" size={0.04} transparent opacity={0.22} sizeAttenuation />
    </points>
  );
}

export function BlogBackground() {
  const scrollY = useScrollPosition();
  return (
    <div className="fixed inset-0 pointer-events-none z-[1] opacity-30">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 55 }} gl={{ alpha: true }}>
        <BinaryStream scrollY={scrollY} />
      </Canvas>
    </div>
  );
}
