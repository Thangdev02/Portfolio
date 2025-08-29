import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { motion } from "framer-motion"

function MacbookModel() {
  const gltf = useGLTF("/models/macbook/scene.gltf");
  console.log("GLTF loaded:", gltf); // Log toàn bộ GLTF object
  console.log("Scene:", gltf.scene);
  console.log("Materials:", gltf.materials);
  console.log("Textures:", gltf.textures);
  if (!gltf.scene) return <mesh><boxGeometry /><meshBasicMaterial color="yellow" /></mesh>; // Fallback tạm thời
  return <primitive object={gltf.scene} scale={1} />;
}

const Macbook3D = () => {
    
    const fadeLeft = {
        hidden: { opacity: 0, x: -100 },
        show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
      }
  return (
    <motion.div
    variants={fadeLeft}
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 2,delay: 1 }}
    viewport={{ once: true }}
    style={{ textDecoration: "none" }} className="w-full h-[600px] bg-black rounded-2xl overflow-hidden relative">
      <Canvas
        camera={{ position: [1, 1, 1], fov: 20 }} // Tăng vị trí camera
        style={{ width: "100%", height: "100%" }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Suspense fallback={<mesh><boxGeometry /><meshBasicMaterial color="red" /></mesh>}>
          <MacbookModel />
        </Suspense>
        <OrbitControls enableZoom={true} minDistance={-1000} maxDistance={50} />
      </Canvas>
    </motion.div>
  );
};

export default Macbook3D;