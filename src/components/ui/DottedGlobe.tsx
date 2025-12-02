import { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { InstancedMesh, Object3D } from 'three';
import * as THREE from 'three';

export function DottedGlobe() {
  const meshRef = useRef<InstancedMesh>(null!);
  const [isLoaded, setIsLoaded] = useState(false);

  // Globe Configuration
  const RADIUS = 3.2;
  const ROWS = 90; // Number of latitude bands
  const DOT_SIZE = 0.035; // Size of the square dots

  const [instanceData, setInstanceData] = useState<{ position: THREE.Vector3, rotation: THREE.Euler }[]>([]);

  useEffect(() => {
    const generateGlobe = async () => {
      // Load the earth texture map
      // Using a high contrast map where white = land, black = water
      const img = new Image();
      img.crossOrigin = "Anonymous";
      img.src = "https://assets.codepen.io/127738/earth_contrast_2.jpg";

      await new Promise((resolve) => {
        img.onload = resolve;
        img.onerror = resolve;
      });

      const canvas = document.createElement('canvas');
      canvas.width = 400; // resolution for sampling
      canvas.height = 200;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      const instances = [];
      const dummy = new Object3D();

      // Generate points on a sphere using latitude/longitude grid
      for (let latSteps = 0; latSteps < ROWS; latSteps++) {
        // Normalize latitude from 0 to PI (North to South)
        const phi = (latSteps / ROWS) * Math.PI;
        
        // Calculate radius at this latitude ring
        const radiusAtLat = RADIUS * Math.sin(phi);
        
        // Calculate circumference at this latitude
        const circumference = 2 * Math.PI * radiusAtLat;
        
        // Determine number of dots in this ring to maintain consistent density
        // Gap factor of 1.8 ensures spacing between dots
        const dotsInRow = Math.floor(circumference / (DOT_SIZE * 1.8));
        
        if (dotsInRow === 0) continue;

        for (let lonSteps = 0; lonSteps < dotsInRow; lonSteps++) {
          // Normalize longitude from 0 to 2PI
          const theta = (lonSteps / dotsInRow) * 2 * Math.PI;

          // Map spherical coordinates to UV coordinates for texture sampling
          // u: 0..1 (Longitude)
          // v: 0..1 (Latitude)
          // Offset U to center the map correctly if needed
          const u = 1 - (lonSteps / dotsInRow);
          const v = latSteps / ROWS;

          const pixelX = Math.floor(u * canvas.width);
          const pixelY = Math.floor(v * canvas.height);
          
          // Clamp to bounds
          const clampedX = Math.max(0, Math.min(canvas.width - 1, pixelX));
          const clampedY = Math.max(0, Math.min(canvas.height - 1, pixelY));
          
          const pixelIndex = (clampedY * canvas.width + clampedX) * 4;
          const brightness = data[pixelIndex]; // Red channel is sufficient for B&W image

          // Threshold to determine if this point is "Land"
          if (brightness > 100) {
            // Convert Spherical to Cartesian coordinates
            // Note: Adjusting orientation to match standard Earth view
            const x = RADIUS * Math.sin(phi) * Math.cos(theta);
            const y = RADIUS * Math.cos(phi);
            const z = RADIUS * Math.sin(phi) * Math.sin(theta);

            const position = new THREE.Vector3(x, y, z);
            
            // Rotate each instance to face the center of the globe
            dummy.position.copy(position);
            dummy.lookAt(0, 0, 0);
            
            instances.push({
              position: position,
              rotation: dummy.rotation.clone()
            });
          }
        }
      }
      setInstanceData(instances);
      setIsLoaded(true);
    };

    generateGlobe();
  }, []);

  // Update the instanced mesh when data is ready
  useEffect(() => {
    if (meshRef.current && instanceData.length > 0) {
      const dummy = new Object3D();
      instanceData.forEach((data, i) => {
        dummy.position.copy(data.position);
        dummy.rotation.copy(data.rotation);
        dummy.scale.set(DOT_SIZE, DOT_SIZE, DOT_SIZE * 0.5); // Thin squares/voxels
        dummy.updateMatrix();
        meshRef.current.setMatrixAt(i, dummy.matrix);
      });
      meshRef.current.instanceMatrix.needsUpdate = true;
    }
  }, [instanceData]);

  // Animation loop
  useFrame((state) => {
    if (!meshRef.current) return;
    // Slowly rotate the globe
    meshRef.current.rotation.y += 0.001;
    // Slight tilt oscillation
    meshRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.05;
  });

  if (!isLoaded) return null;

  return (
    <group rotation={[0.2, -0.5, 0.1]}> {/* Initial tilt/rotation */}
      <instancedMesh ref={meshRef} args={[undefined, undefined, instanceData.length]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial
            color="#ffd902"
            transparent
            opacity={0.9}
        />
      </instancedMesh>

      {/* Inner Sphere to block seeing through the back of the globe */}
      <mesh>
        <sphereGeometry args={[RADIUS - 0.1, 32, 32]} />
        <meshBasicMaterial color="#000000" />
      </mesh>
    </group>
  );
}
