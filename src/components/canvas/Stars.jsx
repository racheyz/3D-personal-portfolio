import React, { useRef, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

import { Points, PointMaterial, Preload } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm'
const Stars = (props) => {
  const ref = useRef();

  const sphere = random.inSphere(new Float32Array(10000), { radius: 1.2});
  
  
  return (
    <group>
      <Points ref={ref} positions={sphere} {...props} >
      <PointMaterial
        transparent
        color='#f272c8'
        size={0.0015}
        depthWrite={false} 
        />
      </ Points>
    </group>
  )
}

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0,0,1]}}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  )
}

export default StarsCanvas;