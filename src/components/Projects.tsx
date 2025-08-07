import { motion } from "framer-motion";
import { Code, Eye } from "lucide-react";
import { useInView } from "react-intersection-observer";

export function Projects() {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const projects = [
		{
			name: "Vemo – Guided Patient Examination Transcription Service",
			description:
				"Built a medical transcription platform using React, Redux, Redux Sagas, client-side recording libraries, and AWS APIs for healthcare professionals.",
			technologies: [
				"React",
				"Redux",
				"Redux Sagas",
				"AWS APIs",
				"Recording Libraries",
			],
			demoLink: "#",
			codeLink: "#",
		},
		{
			name: "Humble Assist – Assistive Sitting Device for Seniors",
			description:
				"Managed development of a sitting aid device for low-strength seniors. Awarded by Ontario's Ministry for Seniors & Accessibility and Canadian Posture & Seating Centre.",
			technologies: [
				"Product Management",
				"Hardware Development",
				"Senior Care",
			],
			demoLink: "#",
			codeLink: "#",
		},
		{
			name: "Chatter – Voice Testing Tool for Alexa Skills",
			description:
				"Designed and built an end-to-end voice testing tool for Alexa skills with transcription/recorded conversation, JSON test composition, and response accuracy verification.",
			technologies: [
				"Electron",
				"JavaScript",
				"Voice Recognition",
				"Alexa Skills",
				"JSON",
			],
			demoLink: "#",
			codeLink: "#",
		},
	];

	return (
		<section id="projects" className="py-20 bg-white">
			<div className="container-max section-padding">
				<motion.div
					ref={ref}
					initial={{ opacity: 0, y: 50 }}
					animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
					transition={{ duration: 0.8 }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
						Projects
					</h2>
					<p className="text-gray-600 text-lg max-w-2xl mx-auto">
						Some of the projects I've worked on
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
					{projects.map((project) => (
						<motion.div
							key={project.name}
							initial={{ opacity: 0, y: 50 }}
							animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
							transition={{ duration: 0.8 }}
							className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
						>
							<h3 className="text-xl font-bold text-gray-900 mb-2">
								{project.name}
							</h3>
							<p className="text-gray-600 mb-4">{project.description}</p>
							<div className="flex flex-wrap gap-2 mb-4">
								{project.technologies.map((tech) => (
									<span
										key={tech}
										className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
									>
										{tech}
									</span>
								))}
							</div>
							<div className="flex gap-4">
								<a
									href={project.demoLink}
									className="btn-primary cursor-not-allowed opacity-50"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Eye size={16} />
									Demo
								</a>
								<a
									href={project.codeLink}
									className="btn-secondary cursor-not-allowed opacity-50"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Code size={16} />
									Code
								</a>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
