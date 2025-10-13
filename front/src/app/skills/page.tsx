"use client";
import Link from "next/link";
import Header from "@/components/Header";

const SkillsPage = () => {
	const skills = [
		{
			category: "Frontend",
			items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"]
		},
		{
			category: "Backend",
			items: ["Node.js", "Python", "Go", "PostgreSQL", "MySQL"]
		},
		{
			category: "Tools & Others",
			items: ["Git", "Docker", "AWS", "Cloudflare", "Terraform"]
		}
	];

	return (
		<div className="min-h-screen bg-black text-white">
			<Header />
			
			<div className="pt-20 p-8">
				<div className="max-w-4xl mx-auto">
					{/* Header */}
					<div className="text-center mb-16">
						<h1 className="text-4xl md:text-5xl font-light tracking-wider mb-4">
							Skills
						</h1>
						<div className="w-32 h-0.5 bg-white mx-auto"></div>
					</div>

					{/* Skills Grid */}
					<div className="grid md:grid-cols-3 gap-8">
						{skills.map((skillGroup, index) => (
							<div key={index} className="border border-gray-700 p-6 hover:border-white transition-colors">
								<h2 className="text-xl font-light mb-6 text-center">
									{skillGroup.category}
								</h2>
								<ul className="space-y-3">
									{skillGroup.items.map((skill, skillIndex) => (
										<li
											key={skillIndex}
											className="text-gray-300 text-center hover:text-white transition-colors"
										>
											{skill}
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SkillsPage;
