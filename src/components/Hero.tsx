import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
	const scrollToAbout = () => {
		const element = document.querySelector("#about");
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section
			id="home"
			className="min-h-screen flex items-center justify-center relative overflow-hidden"
		>
			{/* Background Pattern */}
			<div className="absolute inset-0 opacity-5">
				<div
					className="absolute inset-0"
					style={{
						backgroundImage:
							"radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)",
						backgroundSize: "40px 40px",
					}}
				/>
			</div>

			<div className="container-max section-padding relative z-10">
				<div className="text-center">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
					>
						<h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
							Hi, I'm{" "}
							<span className="text-primary-600 bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
								Kevin Kim
							</span>
						</h1>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						<p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
							Software Engineer specializing in full-stack development with
							expertise in React, Python, and distributed systems
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
					>
						<button type="button" className="btn-primary">
							<Mail size={20} />
							Get In Touch
						</button>
					</motion.div>

					{/* Social Links */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.6 }}
						className="flex items-center justify-center gap-6 mb-16"
					>
						<a
							href="https://github.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-600 hover:text-primary-600 transition-colors"
						>
							<Github size={24} />
						</a>
						<a
							href="https://linkedin.com/in/kevinkimsh"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-600 hover:text-primary-600 transition-colors"
						>
							<Linkedin size={24} />
						</a>
						<a
							href="mailto:kevinkim.sh@gmail.com"
							className="text-gray-600 hover:text-primary-600 transition-colors"
						>
							<Mail size={24} />
						</a>
					</motion.div>

					{/* Scroll Indicator */}
					<motion.button
						type="button"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.8, delay: 1 }}
						onClick={scrollToAbout}
						className="text-gray-400 hover:text-primary-600 transition-colors animate-bounce"
					>
						<ArrowDown size={32} />
					</motion.button>
				</div>
			</div>
		</section>
	);
}
