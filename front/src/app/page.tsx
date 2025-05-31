"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Center, Stars } from "@react-three/drei";

import { PP3DText } from "@/components/elements/PP3DText";
import { RotatingGithub } from "@/components/elements/RotatingGithub";
import { RotatingX } from "@/components/elements/RorationgX";
import { PPIcon } from "@/components/elements/PPIcon";

const page = () => {
	return (
		<>
			<Canvas
				shadows
				camera={{ position: [0, 0, 10], fov: 50 }}
				className="w-full h-screen"
			>
				<ambientLight intensity={Math.PI / 2} />

				<Stars depth={50} count={5000} factor={4} fade />
				<spotLight
					position={[10, 10, 10]}
					angle={0.15}
					penumbra={1}
					decay={0}
					intensity={Math.PI}
				/>

				<Center>
					<PP3DText />
					<PPIcon />
				</Center>
				<RotatingGithub />
				<RotatingX />

				<pointLight position={[10, 10, 10]} decay={0} intensity={Math.PI} />
				<OrbitControls />
			</Canvas>
		</>
	);
};

export default page;
