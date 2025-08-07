import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { useInView } from "react-intersection-observer";

export function Experience() {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const experiences = [
		{
			title: "Senior Software Engineer – Full Stack",
			company: "Okta",
			location: "Vancouver, BC",
			period: "2022 - 2024",
			description: [
				"Led frontend development and contributed to backend development of a new developer portal responsible for managing Okta developer resources using inhouse authorization service",
				"Improved test coverage by adding Cypress e2e tests to CI/CD pipelines and writing other unit/integration tests for internal tools/services",
				"Built custom Grafana dashboard charts to monitor system resources and operation using data pulled from Prometheus",
				"Created the initial demo application for next generation release web app which vastly improves release stakeholders' collaboration and progress monitoring with flowmap based UI",
			],
			technologies: [
				"React",
				"TypeScript",
				"Grafana",
				"Cypress",
				"Authorization",
				"CI/CD",
				"reactflow",
			],
		},
		{
			title: "Software Engineer – Full Stack",
			company: "CircleCI",
			location: "Toronto, ON",
			period: "2020 - 2022",
			description: [
				"Joined Permissions team to build a new Clojure-based authorization system controlling access to CircleCI resources",
				"Utilized canary deployments with observability tooling (e.g., Grafana, Datadog) for safe rollouts like Redis cache migration",
				"Created reusable React components to expose certain OpenID Connect authentication information in settings pages",
				"Led frontend onboarding sessions for new engineers (best practices, tooling changes)",
			],
			technologies: [
				"Clojure",
				"React",
				"Redis",
				"Grafana",
				"Datadog",
				"OpenID Connect",
			],
		},
		{
			title: "Junior Software Developer – Frontend",
			company: "Cover",
			location: "Toronto, ON",
			period: "2019 - 2020",
			description: [
				"Transitioned to frontend team to build a React application for policy quoting (internal/external insurance agents)",
				"Developed custom React components (autocomplete, datepicker) for internal component library",
				"Implemented tables/forms with React Context for managing vehicles/drivers information used in quoting insurance",
				"Integrated GraphQL server to streamline microservice interactions",
			],
			technologies: [
				"React",
				"Typescript",
				"GraphQL",
				"JavaScript",
				"Component Library",
			],
		},
		{
			title: "Internal Tooling Developer",
			company: "Cover",
			location: "Toronto, ON",
			period: "2018 - 2019",
			description: [
				"Created Chrome/Firefox extensions to generate Jira tickets with ticket type specific templates",
				"Updated backend services with mock API endpoints for automation testing to speed up automation workflows which has already been tested",
				"Assisted in planning features for the internal automation tools (custom device manager, API testing)",
			],
			technologies: [
				"JavaScript",
				"Browser Extensions",
				"Jira API",
				"API Testing",
				"Automation",
			],
		},
		{
			title: "Software Developer In Test",
			company: "Connected",
			location: "Kitchener, ON",
			period: "2017 - 2018",
			description: [
				"Designed 'Chatter': End-to-end voice app testing tool for Alexa skills (transcription, JSON test composition, response accuracy) using modified Alexa IOT SDK and various transcription/recording APIs",
				"Utilized Chatter tool to provide 100% test coverage for a large Alexa radio app from large U.S. based client and showcased the testing tool capabilities with company wide demo",
				"Built an early demo drag and drop chat builder for Chatter in collaboration with a designer and co-op student",
			],
			technologies: [
				"JavaScript",
				"Alexa Skills",
				"Voice Testing",
				"JSON",
				"Python",
				"Electron",
			],
		},
	];

	return (
		<section id="experience" className="py-20 bg-gray-50">
			<div className="container-max section-padding">
				<motion.div
					ref={ref}
					initial={{ opacity: 0, y: 50 }}
					animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
					transition={{ duration: 0.8 }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
						Work Experience
					</h2>
					<p className="text-gray-400 text-md max-w-2xl mx-auto">
						LinkedIn includes a full history of my work experience including
						past internships
					</p>
					<p className="text-gray-600 text-lg max-w-2xl mx-auto">
						My professional journey and the amazing teams I've worked with
					</p>
				</motion.div>

				<div className="relative">
					{/* Timeline line */}
					<div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-primary-200"></div>

					<div className="space-y-12">
						{experiences.map((exp, index) => (
							<motion.div
								key={`${exp.company}-${exp.title}-${exp.period}`}
								initial={{ opacity: 0, y: 50 }}
								animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
								transition={{ duration: 0.8, delay: index * 0.2 }}
								className={`relative flex items-center ${
									index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
								}`}
							>
								{/* Timeline dot */}
								<div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg z-10"></div>

								{/* Content */}
								<div
									className={`ml-12 md:ml-0 md:w-1/2 ${
										index % 2 === 0 ? "md:pr-12" : "md:pl-12"
									}`}
								>
									<div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
										<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
											<h3 className="text-xl font-bold text-gray-900 mb-1">
												{exp.title}
											</h3>
											<div className="flex items-center text-primary-600 text-sm font-medium">
												<Calendar size={16} className="mr-1" />
												{exp.period}
											</div>
										</div>

										<div className="flex items-center text-gray-600 mb-4">
											<span className="font-semibold">{exp.company}</span>
											<span className="mx-2">•</span>
											<div className="flex items-center">
												<MapPin size={16} className="mr-1" />
												{exp.location}
											</div>
										</div>

										<ul className="space-y-2 mb-4">
											{exp.description.map((item) => (
												<li
													key={item}
													className="text-gray-600 flex items-start"
												>
													<span className="text-primary-600 mr-2 mt-1.5 flex-shrink-0">
														•
													</span>
													{item}
												</li>
											))}
										</ul>

										<div className="flex flex-wrap gap-2">
											{exp.technologies.map((tech) => (
												<span
													key={tech}
													className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
												>
													{tech}
												</span>
											))}
										</div>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
