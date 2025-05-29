"use client";
import { Canvas } from "@react-three/fiber";
import { Text3D, OrbitControls, Center, Stars } from "@react-three/drei";

const page = () => {
	return (
		<>
			<Canvas
				shadows
				camera={{ position: [0, 0, 10], fov: 50 }}
				className="w-full h-screen"
			>
				<ambientLight intensity={Math.PI / 2} />
				{/* Add Stars for space background */}
				<Stars radius={100} depth={50} count={5000} factor={4} fade />
				<spotLight
					position={[10, 10, 10]}
					angle={0.15}
					penumbra={1}
					decay={0}
					intensity={Math.PI}
				/>
				{/* Wrap Text3D with Center to align it in the middle */}
				<Center>
					<Text3D
						position={[0, 0, 0]}
						font="/font/Light_Italic.json"
						size={1}
						height={0.2}
						bevelEnabled
						bevelSize={0.05}
						bevelThickness={0.1}
						castShadow // added to cast shadow
						receiveShadow // added to receive shadow
					>
						shuhei-pp
					</Text3D>
				</Center>
				<pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />

				<OrbitControls />
			</Canvas>
		</>
	);
};

export default page;
