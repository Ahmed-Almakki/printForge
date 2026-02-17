'use client'
import { Suspense, useRef, useEffect } from "react"
import { Canvas, useLoader } from "@react-three/fiber"
import { OrbitControls, Html } from "@react-three/drei"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
import { Box3, Vector3, Group } from "three"
import { useMediaQuery } from "react-responsive"
import { usePathname } from "next/navigation"

interface PathProp {
    path: string
}


// Loading component
function Loader() {
    return (
        <Html center>
            <div className="text-white bg-black p-4 rounded">
                Loading 3D Model...
            </div>
        </Html>
    )
}

function MeshComponent({ path }: PathProp) {
    const gltf = useLoader(GLTFLoader, '/threeDmodel/' + path);
    const meshRef = useRef<Group>(null!)
    
    useEffect(() => {
        if (gltf.scene) {           
            
            // FIRST: Reset any existing transforms
            gltf.scene.position.set(0, 0, 0);
            gltf.scene.rotation.set(0, 0, 0);
            gltf.scene.scale.set(1, 1, 1);
            
            // SECOND: Calculate new bounding box after reset
            const newBox = new Box3().setFromObject(gltf.scene);
            const newSize = newBox.getSize(new Vector3());

            // THIRD: Scale the model to a reasonable size
            const maxDim = Math.max(newSize.x, newSize.y, newSize.z);
            // Target size of 2 units
            const targetScale = 1 / maxDim * 5;
            gltf.scene.scale.setScalar(targetScale);
            
            // FOURTH: Center the model at origin
            // Get the new center after scaling
            const scaledBox = new Box3().setFromObject(gltf.scene);
            const scaledCenter = scaledBox.getCenter(new Vector3());
            
            // Move model so its center is at (0,0,0)
            gltf.scene.position.set(
                -scaledCenter.x,
                -scaledCenter.y,
                -scaledCenter.z
            );
            
        }
    }, [gltf]);
    
    return <primitive ref={meshRef} object={gltf.scene} />;
}

export default function ThreeDModel({ path }: PathProp) {
    // Check if the path matches your specific model
    const isChickenModel = path === "fire_planet.glb";

    const isMobile = useMediaQuery({ maxWidth: 768 });
    const pathname = usePathname();
    
    // Choose background color based on model
    const backgroundColor = isChickenModel 
        ? 'transparent' 
        : '#e0e0e0'; // Light gray - clean and professional
    
    // Alternative color options if you want something else:
    // '#f5f5f5' - off-white
    // '#2d2d2d' - dark gray
    // '#87CEEB' - sky blue
    
    return (
        <div className="flex justify-center items-center h-full">
            <Canvas
                camera={{ position: [3, 2, 5], fov: 50 }}
                style={{ 
                    width: '100%', 
                    height: '100%', 
                    background: backgroundColor 
                }}
                // Add this prop to enable transparency
                gl={{ alpha: isChickenModel }} // This enables RGBA canvas if true
            >
                {/* Bright ambient light so we can see everything */}
                <ambientLight intensity={1.5} />
                
                {/* Key lights */}
                <directionalLight position={[5, 5, 5]} intensity={2} />
                <directionalLight position={[-5, 5, 5]} intensity={1} />
                <directionalLight position={[0, 5, -5]} intensity={1} />
                
                {/* Fill lights */}
                <pointLight position={[2, 3, 4]} intensity={1} />
                <pointLight position={[-2, 1, -3]} intensity={0.8} />
                
                
                <Suspense fallback={<Loader />}>
                    <MeshComponent path={path} />
                </Suspense>
                
                <OrbitControls 
                    enableZoom={pathname !== "/"} 
                    enablePan={true}
                    enableRotate={true}
                    autoRotate={pathname === "/" && !isMobile}
                    autoRotateSpeed={1}
                />
            </Canvas>
        </div>
    )
}