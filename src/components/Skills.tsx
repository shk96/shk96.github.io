import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function Skills() {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const skillCategories = [
		{
			title: "Languages / Frameworks",
			skills: [
				{ name: "Ruby", level: 90 },
				{ name: "Python", level: 88 },
				{ name: "JavaScript", level: 95 },
				{ name: "Clojure", level: 85 },
				{ name: "Swift", level: 70 },
				{ name: "HTML", level: 95 },
				{ name: "CSS", level: 90 },
				{ name: "Typescript", level: 92 },
				{ name: "GraphQL", level: 85 },
				{ name: "Rails", level: 80 },
				{ name: "React", level: 95 },
				{ name: "Next.js", level: 90 },
				{ name: "Node.js", level: 87 },
				{ name: "Falcon", level: 75 },
			],
		},
		{
			title: "Tools & Debugging",
			skills: [
				{ name: "Git", level: 95 },
				{ name: "Jira", level: 90 },
				{ name: "Yarn", level: 85 },
				{ name: "Lema", level: 80 },
				{ name: "CircleCI", level: 90 },
				{ name: "Datadog", level: 85 },
				{ name: "HoneyComb", level: 70 },
				{ name: "Grafana", level: 75 },
				{ name: "Vault", level: 70 },
				{ name: "Postman", level: 85 },
				{ name: "Cypress", level: 90 },
				{ name: "K8s", level: 80 },
			],
		},
		{
			title: "API Integrations",
			skills: [
				{ name: "Google Cloud TTS", level: 85 },
				{ name: "Google Cloud Speech", level: 85 },
				{ name: "Google Sheets", level: 80 },
				{ name: "AWS Transcribe", level: 80 },
				{ name: "AWS S3", level: 90 },
				{ name: "AWS Lambda", level: 85 },
				{ name: "Slack", level: 88 },
				{ name: "Snyk", level: 70 },
			],
		},
	];

	return (
		<section id="skills" className="py-20 bg-gray-50">
			<div className="container-max section-padding">
				<motion.div
					ref={ref}
					initial={{ opacity: 0, y: 50 }}
					animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
					transition={{ duration: 0.8 }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
						Skills & Technologies
					</h2>
					<p className="text-gray-600 text-lg max-w-2xl mx-auto">
						The tools and technologies I use to bring ideas to life
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{skillCategories.map((category, categoryIndex) => (
						<motion.div
							key={category.title}
							initial={{ opacity: 0, y: 50 }}
							animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
							transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
							className="bg-white p-6 rounded-lg shadow-md"
						>
							<h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
								{category.title}
							</h3>
							<div className="space-y-4">
								{category.skills.map((skill, skillIndex) => (
									<div key={skill.name}>
										<div className="flex justify-between items-center mb-2">
											<span className="text-gray-700 font-medium">
												{skill.name}
											</span>
											<span className="text-gray-500 text-sm">
												{skill.level}%
											</span>
										</div>
										<div className="w-full bg-gray-200 rounded-full h-2">
											<motion.div
												initial={{ width: 0 }}
												animate={
													inView ? { width: `${skill.level}%` } : { width: 0 }
												}
												transition={{
													duration: 1,
													delay: categoryIndex * 0.2 + skillIndex * 0.1,
												}}
												className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
											/>
										</div>
									</div>
								))}
							</div>
						</motion.div>
					))}
				</div>

				{/* Additional Technologies */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
					transition={{ duration: 0.8, delay: 0.8 }}
					className="mt-16 text-center"
				>
					<h3 className="text-xl font-bold text-gray-900 mb-6">
						Also experienced with
					</h3>
					<div className="flex flex-wrap justify-center gap-4">
						{[
							"Redux",
							"GraphQL",
							"Firebase",
							"Vercel",
							"Netlify",
							"Webpack",
							"Vite",
							"Sass",
							"Material-UI",
							"Chakra UI",
							"Jest",
							"Cypress",
							"Postman",
							"Linux",
							"Nginx",
						].map((tech) => (
							<span
								key={tech}
								className="px-4 py-2 bg-white text-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow"
							>
								{tech}
							</span>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}
