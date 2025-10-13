"use client";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	const menuItems = [
		{ href: "/", label: "Home" },
		{ href: "/about", label: "About" },
		{ href: "/skills", label: "Skills" }
	];

	return (
		<>
			{/* Desktop Header */}
			<header className="fixed top-0 right-0 z-50 p-8 hidden md:block">
				<nav className="flex gap-6">
					{menuItems.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="px-4 py-2 text-white hover:text-gray-400 transition-colors cursor-pointer"
						>
							{item.label}
						</Link>
					))}
				</nav>
			</header>

			{/* Mobile Header */}
			<header className="fixed top-0 left-0 right-0 z-50 md:hidden">
				<div className="flex justify-end items-center p-4">
					

					{/* Hamburger Button */}
					<button
						onClick={toggleMenu}
						className="text-white p-2 hover:text-gray-400 transition-colors"
						aria-label="Toggle menu"
					>
						<div className="space-y-1.5">
							<div
								className={`w-6 h-0.5 bg-white transform transition-all duration-300 ${
									isMenuOpen ? "rotate-45 translate-y-2" : ""
								}`}
							/>
							<div
								className={`w-6 h-0.5 bg-white transition-all duration-300 ${
									isMenuOpen ? "opacity-0" : ""
								}`}
							/>
							<div
								className={`w-6 h-0.5 bg-white transform transition-all duration-300 ${
									isMenuOpen ? "-rotate-45 -translate-y-2" : ""
								}`}
							/>
						</div>
					</button>
				</div>

				{/* Mobile Menu Overlay */}
				<div
					className={`fixed inset-0 bg-black/90 backdrop-blur-sm transition-all duration-300 ${
						isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
					}`}
					onClick={closeMenu}
				>
					<nav
						className={`absolute top-0 right-0 h-full w-80 bg-black/95 backdrop-blur transform transition-transform duration-300 ${
							isMenuOpen ? "translate-x-0" : "translate-x-full"
						}`}
						onClick={(e) => e.stopPropagation()}
					>
						<div className="flex flex-col items-center justify-center h-full space-y-8">
							{menuItems.map((item, index) => (
								<Link
									key={item.href}
									href={item.href}
									className={`text-2xl text-white hover:text-gray-400 transition-all duration-300 transform ${
										isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
									}`}
									style={{ transitionDelay: `${index * 100}ms` }}
									onClick={closeMenu}
								>
									{item.label}
								</Link>
							))}
						</div>
					</nav>
				</div>
			</header>
		</>
	);
};

export default Header;
