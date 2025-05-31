import { getTextColor } from "@/app/util/getTextColor";
import { Text3D } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Mesh } from "three";

const RotatingLetter = ({
	letter,
	position,
}: { letter: string; position: [number, number, number] }) => {
	const letterRef = useRef<Mesh>(null);
	useFrame((_state, delta) => {
		if (letterRef.current) {
			letterRef.current.rotation.y += delta * 0.5;
		}
	});
	return (
		<group position={position}>
			<Text3D
				ref={letterRef}
				font="/font/Light_Italic.json"
				size={1}
				height={0.2}
				bevelEnabled
				bevelSize={0.05}
				bevelThickness={0.1}
				castShadow
				receiveShadow
			>
				{letter}
				<meshStandardMaterial color={getTextColor()} attach="material" />
			</Text3D>
		</group>
	);
};

export const PP3DText = () => {
	const text = "shuhei-pp";
	const letters = text.split("");
	return (
		<group>
			{letters.map((letter, idx) => (
				<RotatingLetter
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					key={idx}
					letter={letter}
					position={[(idx - letters.length / 2) * 0.8, 0, 0]}
				/>
			))}
		</group>
	);
};
