import { motion } from "framer-motion";
import { Code, Palette, Zap } from "lucide-react";
import { useInView } from "react-intersection-observer";

export function About() {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const features = [
		{
			icon: <Code className="w-8 h-8" />,
			title: "Clean Code",
			description:
				"Writing maintainable, scalable, and efficient code following best practices and industry standards.",
		},
		{
			icon: <Palette className="w-8 h-8" />,
			title: "Modern Design",
			description:
				"Creating beautiful, user-centered interfaces with attention to detail and accessibility in mind.",
		},
		{
			icon: <Zap className="w-8 h-8" />,
			title: "Automation",
			description:
				"Optimizing developer productivity with elegant and efficient automation tools internal teams love to use.",
		},
	];

	return (
		<section id="about" className="py-20 bg-white">
			<div className="container-max section-padding">
				<motion.div
					ref={ref}
					initial={{ opacity: 0, y: 50 }}
					animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
					transition={{ duration: 0.8 }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
						About Me
					</h2>
					<p className="text-gray-600 text-lg max-w-2xl mx-auto">
						I'm a passionate developer who loves turning ideas into digital
						reality and reducing developer toil
					</p>
				</motion.div>

				<div className="grid lg:grid-cols-2 gap-12 items-center">
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						<div className="prose prose-lg max-w-none">
							<p className="text-gray-600 leading-relaxed mb-6">
								I am currently based in Vancouver, BC, Canada. I
								was originally born in South Korea before my family and I
								immigrated to Canada. 
							</p>
							<p className="text-gray-600 leading-relaxed mb-6">
								With a{" "}
								<strong>
									Mechanical Engineering degree from University of Waterloo
								</strong>{" "}
								and extensive full-stack development experience at companies
								like <strong>Okta</strong> and <strong>CircleCI</strong>, I
								specialize in building scalable applications and developer
								tools. My journey from mechanical engineering to software
								development has given me a unique perspective on problem-solving
								and system design.
							</p>
							<p className="text-gray-600 leading-relaxed mb-6">
								I excel at <strong>frontend development with React</strong>,{" "}
								<strong>backend systems with Python</strong>, and building
								robust CI/CD pipelines. My experience spans from creating
								developer portals to implementing authorization systems and
								building custom end-to-end testing tools for voice applications.
							</p>
							<div className="flex flex-wrap gap-4 mb-8">
								<span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
									Problem Solver
								</span>
								<span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
									Team Player
								</span>
								<span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
									Lifelong Learner
								</span>
							</div>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="space-y-6"
					>
						{features.map((feature) => (
							<div
								key={feature.title}
								className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg"
							>
								<div className="text-primary-600 flex-shrink-0">
									{feature.icon}
								</div>
								<div>
									<h3 className="text-lg font-semibold text-gray-900 mb-2">
										{feature.title}
									</h3>
									<p className="text-gray-600">{feature.description}</p>
								</div>
							</div>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
}
