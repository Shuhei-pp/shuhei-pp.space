"use client";
import Header from "@/components/Header";

const AboutPage = () => {
	return (
		<div className="min-h-screen bg-black text-white">
			<Header />
			
			<div className="pt-20 p-8">
				<div className="max-w-4xl mx-auto">
					{/* Header */}
					<div className="text-center mb-16">
						<h1 className="text-4xl md:text-5xl font-light tracking-wider mb-4">
							About
						</h1>
						<div className="w-32 h-0.5 bg-white mx-auto"></div>
					</div>

					{/* About Content */}
					<div className="max-w-3xl mx-auto space-y-8">

						{/* Career Timeline */}
						<div className="space-y-6">
							<div className="space-y-4">
								<div className="border-l-2 border-gray-600 pl-6 relative">
									<div className="text-sm text-gray-400 mb-1">2019</div>
									<h3 className="text-lg font-light mb-2">Enrolled at Niigata University</h3>
								</div>

								<div className="border-l-2 border-gray-600 pl-6 relative">
									<div className="text-sm text-gray-400 mb-1">2020</div>
									<h3 className="text-lg font-light mb-2">Software Engineer at Happiness Inc.</h3>
								</div>

								<div className="border-l-2 border-gray-600 pl-6 relative">
									<div className="text-sm text-gray-400 mb-1">2023</div>
									<h3 className="text-lg font-light mb-2">Graduated & Joined CyberBuzz Inc.</h3>
									<p className="text-gray-300 text-sm">Completed my degree at Niigata University and transitioned to CyberBuzz Inc. as a software engineer</p>
								</div>

								<div className="border-l-2 border-blue-400 pl-6 relative">
									<div className="absolute w-3 h-3 bg-blue-400 rounded-full -left-2 top-2"></div>
									<div className="text-sm text-blue-300 mb-1">Present</div>
									<h3 className="text-lg font-light mb-2">Software Engineer at CyberBuzz Inc.</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutPage;
