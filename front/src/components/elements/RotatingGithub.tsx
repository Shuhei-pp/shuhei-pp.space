import { useFrame } from "@react-three/fiber";
import { useRef, type JSX } from "react";
import type { Mesh } from "three";
import { GithubModel } from "../model/GithubIcon";
import { Html } from "@react-three/drei";

export const RotatingGithub = (props: JSX.IntrinsicElements["group"]) => {
	const ref = useRef<Mesh>(null);
	useFrame((_, delta) => {
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
				scale={7}
				castShadow
				receiveShadow
				onClick={"https://github.com/Shuhei-pp"}
			/>
			<Html position={[-5, -9, -7]} transform>
				<div className="text-center text-xs text-black dark:text-white">
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
