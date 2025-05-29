"use client";
import { Canvas } from "@react-three/fiber";
import { Text3D, OrbitControls, Center, Stars, Html } from "@react-three/drei";
import { type JSX, useRef } from "react";
import { useFrame } from "@react-three/fiber";

import type { Mesh } from "three";
import { GithubModel } from "@/components/GithubIcon";

const RotatingGithub = (props: JSX.IntrinsicElements["group"]) => {
	const ref = useRef<Mesh>(null);
	useFrame((state, delta) => {
		if (ref.current) {
			ref.current.rotation.y += delta / 8;
			ref.current.rotation.x += delta / 16;
			ref.current.rotation.z += delta / 32;
		}
	});
	return (
		<group
			ref={ref}
			onClick={() => {
				window.open("https://github.com/Shuhei-pp", "_blank");
			}}
			{...props}
		>
			<GithubModel
				position={[-5, -7, -7]}
				scale={5}
				castShadow
				receiveShadow
				onClick={"https://github.com/Shuhei-pp"}
			/>
			<Html position={[-5, -9, -7]} transform>
				<div
					style={{
						textAlign: "center",
						color: "white",
						fontSize: "0.5em",
					}}
				>
					<a
						href="https://iconscout.com/3d-illustrations/github"
						target="_blank"
						rel="noreferrer"
						className="text-underline font-size-sm"
					>
						Github
					</a>
					{" by "}
					<a
						href="https://iconscout.com/jp/contributors/bforyuu/:assets"
						target="_blank"
						rel="noreferrer"
						className="text-underline font-size-sm"
					>
						bforyuu
					</a>
					{" on "}
					<a
						href="https://iconscout.com"
						target="_blank"
						rel="noreferrer"
						className="text-underline font-size-sm"
					>
						IconScout
					</a>
				</div>
			</Html>
		</group>
	);
};

const RotatingX = (props: JSX.IntrinsicElements["group"]) => {
	const ref = useRef<Mesh>(null);
	useFrame((state, delta) => {
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
				bevelEnabled
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
			</Text3D>
		</group>
	);
};

const RotatingLetter = ({
	letter,
	position,
}: { letter: string; position: [number, number, number] }) => {
	const letterRef = useRef<Mesh>(null);
	useFrame((state, delta) => {
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
			</Text3D>
		</group>
	);
};

const PP3DText = () => {
	const text = "shuhei-pp";
	const letters = text.split("");
	return (
		<Center>
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
		</Center>
	);
};

const page = () => {
	const ppRef = useRef<Mesh>(null);
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
