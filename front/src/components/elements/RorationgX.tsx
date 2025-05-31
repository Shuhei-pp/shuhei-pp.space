import { getTextColor } from "@/app/util/getTextColor";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Text3D } from "@react-three/drei";
import type { Mesh } from "three";

export const RotatingX = () => {
	const ref = useRef<Mesh>(null);

	useFrame((_state, delta) => {
		if (ref.current) {
			ref.current.rotation.y += delta / 6;
			ref.current.rotation.x += delta / 6;
			ref.current.rotation.z += delta / 5;
		}
	});
	return (
		<group ref={ref}>
			<Text3D
				font="/font/Light_Italic.json"
				size={1}
				height={0.2}
				bevelSize={0.05}
				bevelThickness={0.1}
				castShadow
				receiveShadow
				position={[5, -4, -3]}
				onClick={() => {
					window.open("https://x.com/kota_shuping", "_blank");
				}}
			>
				X
				<meshStandardMaterial color={getTextColor()} attach="material" />
			</Text3D>
		</group>
	);
};
