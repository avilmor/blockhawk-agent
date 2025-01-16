'use client'
import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function ParticleCloud() {
  const points = useRef()
  const sphere = useRef()

  const particleCount = 2000
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    const color = new THREE.Color()

    for (let i = 0; i < particleCount; i++) {
      const theta = 2 * Math.PI * Math.random()
      const phi = Math.acos(2 * Math.random() - 1)
      const r = 2 + Math.random() * 0.2

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = r * Math.cos(phi)

      color.setHSL(Math.random(), 1, 0.5)
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b
    }

    return [positions, colors]
  }, [])

  useFrame((state, delta) => {
    if (points.current && sphere.current) {
      points.current.rotation.y += delta * 0.05
      sphere.current.rotation.y -= delta * 0.08
    }
  })

  return (
    <group>
      <Points ref={points} positions={positions} stride={3}>
        <PointMaterial
          transparent
          vertexColors
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
      <mesh ref={sphere}>
        <sphereGeometry args={[1.8, 64, 64]} />
        <meshBasicMaterial color="#4F46E5" wireframe />
      </mesh>
    </group>
  )
}

export default function DiditSphere() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <ParticleCloud />
      </Canvas>
    </div>
  )
}

