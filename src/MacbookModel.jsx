import React, { Suspense, useLayoutEffect, useState } from "react";
import * as THREE from "three";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, useTexture } from "@react-three/drei";
import gsap from "gsap";
import { motion, AnimatePresence } from "framer-motion";

function MacbookModel({ screenImage, onClickScreen }) {
  const { scene } = useGLTF("/models/macbook/scene.gltf");
  const texture = useTexture(screenImage);

  useLayoutEffect(() => {
    if (!scene || !texture) return;
    texture.flipY = false;
    texture.colorSpace = THREE.SRGBColorSpace;
  
    // 👇 fix bị ngược hình
    texture.center.set(0.5, 0.5);
    texture.rotation = Math.PI;
  
    scene.traverse((obj) => {
      if (obj.isMesh && obj.material?.name === "Material.003") {
        const mat = obj.material.clone();
        mat.map = texture;
        mat.emissive = new THREE.Color(0xffffff);
        mat.emissiveMap = texture;
        mat.emissiveIntensity = 1.0;
        mat.toneMapped = false;
        obj.material = mat;
        obj.userData.isScreen = true;
      }
    });
  }, [scene, texture]);
  
  return (
    <group
      scale={2}
      position={[0, -0.2, 0]} // 👈 dịch laptop xuống một chút
      onClick={(e) => {
        if (e.object.userData.isScreen) {
          e.stopPropagation();
          onClickScreen?.(e.object);
        }
      }}
    >
      <primitive object={scene} />
    </group>
  );
}

function CameraController({ targetMesh, onZoomComplete }) {
  const { camera } = useThree();

  React.useEffect(() => {
    if (!targetMesh) return;

    // Lấy vị trí trung tâm của màn hình
    const pos = new THREE.Vector3();
    targetMesh.getWorldPosition(pos);

    // Vector hướng màn hình
    const normal = new THREE.Vector3(0, -3, -0.7);
    normal.applyQuaternion(targetMesh.getWorldQuaternion(new THREE.Quaternion()));

    // Vị trí camera
    const camPos = pos.clone().add(normal.multiplyScalar(0.3));

    // Animation zoom bằng GSAP
    gsap.to(camera.position, {
      x: camPos.x,
      y: camPos.y,
      z: camPos.z,
      duration: 2,
      ease: "power2.inOut",
      onUpdate: () => {
        camera.lookAt(pos);
      },
      onComplete: () => {
        onZoomComplete?.();
      },
    });
  }, [targetMesh]);

  return null;
}

const Macbook3D = ({ screenImage }) => {
  const [targetMesh, setTargetMesh] = useState(null);
  const [showFull, setShowFull] = useState(false);

  return (
    <>
      {/* Laptop 3D */}
      <div className="w-full h-[600px] bg-card rounded-2xl overflow-hidden relative">
        <Canvas camera={{ position: [1.2, 0.9, 1.3], fov: 22 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Suspense
            fallback={
              <mesh>
                <boxGeometry />
                <meshBasicMaterial color="red" />
              </mesh>
            }
          >
            <MacbookModel
              screenImage={screenImage}
              onClickScreen={(mesh) => setTargetMesh(mesh)}
            />
          </Suspense>
          <OrbitControls enableZoom={false} /> {/* khoá zoom tay */}
          {targetMesh && (
            <CameraController
              targetMesh={targetMesh}
              onZoomComplete={() => setShowFull(true)}
            />
          )}
        </Canvas>
      </div>

      {/* Fullscreen overlay sau khi zoom */}
      <AnimatePresence>
        {showFull && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 cursor-pointer"
            onClick={() => {
              setShowFull(false);
              setTargetMesh(null); // reset để lần sau click lại zoom tiếp
            }}
          >
            <motion.img
              src={screenImage}
              alt="Screen Full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-full max-h-full rounded-lg shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Macbook3D;
