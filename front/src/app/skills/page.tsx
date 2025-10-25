"use client";
import Header from "@/components/Header";

const SkillsPage = () => {
	const skills = [
		{
			category: "Frontend",
			items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "MUI", "Mantine"]
		},
		{
			category: "Backend",
			items: ["Node.js", "NestJS", "Hono", "Python", "Go", "PostgreSQL", "MySQL"]
		},
		{
			category: "Tools & Others",
			items: [ "AWS", "Cloudflare", "Terraform","Docker", "CI/CD", "openapi"]
		}
	];

	return (
		<div className="min-h-screen bg-black text-white">
			<Header />
			
			<div className="py-16 sm:py-20 px-4 sm:px-8">
				<div className="max-w-6xl mx-auto">
					{/* Mobile-First Header */}
					<div className="text-center mb-12 sm:mb-16">
						<h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wider mb-4">
							Skills
						</h1>
						<div className="w-24 sm:w-32 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-4 sm:mb-6"></div>
						<p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto px-4">
							Technologies and tools I use to build modern, scalable applications
						</p>
					</div>

					{/* Skills Categories */}
					<div className="space-y-8">
						<h2 className="text-xl sm:text-2xl font-light mb-6 sm:mb-8 text-center">Technical Stack</h2>
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
							{skills.map((skillGroup, index) => {
								const icons: Record<string, string> = {
									"Frontend": "🎨",
									"Backend": "⚡",
									"Tools & Others": "🛠️"
								};
								const gradients: Record<string, string> = {
									"Frontend": "from-pink-500/20 to-rose-500/20",
									"Backend": "from-blue-500/20 to-cyan-500/20", 
									"Tools & Others": "from-purple-500/20 to-violet-500/20"
								};
								
								return (
									<div key={index} className={`relative overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-br ${gradients[skillGroup.category]} backdrop-blur hover:border-gray-600 transition-all duration-300 group hover:transform hover:scale-[1.02]`}>
										<div className="absolute inset-0 bg-black/40"></div>
										<div className="relative p-4 sm:p-6 lg:p-8">
											<div className="text-center mb-4 sm:mb-6">
												<div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{icons[skillGroup.category]}</div>
												<h3 className="text-lg sm:text-xl font-medium text-white">{skillGroup.category}</h3>
											</div>
											<div className="space-y-2 sm:space-y-3">
												{skillGroup.items.map((skill, skillIndex) => (
													<div
														key={skillIndex}
														className="flex items-center justify-center"
													>
														<span className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm bg-white/10 hover:bg-white/20 rounded-full text-gray-200 transition-all duration-200 border border-white/20 hover:border-white/40 cursor-default">
															{skill}
														</span>
													</div>
												))}
											</div>
										</div>
										{/* Shine effect */}
										<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
									</div>
								);
							})}
						</div>
					</div>

				</div>
			</div>
		</div>
	);
};

export default SkillsPage;
