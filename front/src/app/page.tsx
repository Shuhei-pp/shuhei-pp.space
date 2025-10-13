"use client";
import Header from "@/components/Header";

const page = () => {
	return (
		<div className="min-h-screen bg-black text-white">
			<Header />
			
			{/* Main content */}
			<div className="flex flex-col items-center justify-center min-h-screen p-8">
				{/* Main heading */}
				<div className="text-center mb-8">
					<h1 className="text-4xl md:text-5xl font-light tracking-wider mb-4">
						shuhei-pp
					</h1>
					<div className="w-32 h-0.5 bg-white mx-auto"></div>
				</div>

				{/* Self introduction */}
				<div className="text-center mb-10 max-w-2xl px-4">
					<p className="text-base md:text-lg text-gray-300 leading-relaxed">
						I'm a software engineer who loves development.
					</p>
				</div>

				{/* Social links */}
				<div className="flex flex-col sm:flex-row gap-6 mb-12">
					<a
						href="https://github.com/Shuhei-pp"
						target="_blank"
						rel="noreferrer"
						className="px-8 py-3 border border-white hover:bg-white hover:text-black transition-all duration-300 text-center min-w-[120px]"
					>
						GitHub
					</a>
					<a
						href="https://x.com/kota_shuping"
						target="_blank"
						rel="noreferrer"
						className="px-8 py-3 border border-white hover:bg-white hover:text-black transition-all duration-300 text-center min-w-[120px]"
					>
						X
					</a>
				</div>
			</div>
		</div>
	);
};

export default page;