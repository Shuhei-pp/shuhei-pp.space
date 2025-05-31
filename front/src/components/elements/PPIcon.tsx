import { Image } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Mesh } from "three";

export const PPIcon = () => {
	const ref = useRef<Mesh>(null);
	useFrame((_, delta) => {
		if (ref.current) {
			ref.current.rotation.y += delta * 0.5;
		}
	});
	return <Image ref={ref} url="/ppicon.png" position={[0, 2.3, 0]} scale={2} />;
};
