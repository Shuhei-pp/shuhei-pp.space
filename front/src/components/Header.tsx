"use client";
import Link from "next/link";

const Header = () => {
	return (
		<header className="fixed top-0 right-0 z-50 p-8">
			<nav className="flex gap-6">
				<Link
					href="/"
					className="px-4 py-2 text-white hover:text-gray-400 transition-colors cursor-pointer"
				>
					Home
				</Link>
				<Link
					href="/skills"
					className="px-4 py-2 text-white hover:text-gray-400 transition-colors cursor-pointer"
				>
					Skills
				</Link>
			</nav>
		</header>
	);
};

export default Header;
