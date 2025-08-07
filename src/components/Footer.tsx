import { Github, Heart, Linkedin, Mail } from "lucide-react";

export function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-gray-900 text-white py-12">
			<div className="container-max section-padding">
				<div className="grid md:grid-cols-3 gap-8 items-center">
					{/* Logo/Name */}
					<div>
						<h3 className="text-xl font-bold mb-2">Kevin Kim</h3>
						<p className="text-gray-400">Software Engineer</p>
					</div>

					{/* Social Links */}
					<div className="flex justify-center gap-6">
						<a
							href="https://github.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-400 hover:text-white transition-colors"
							aria-label="GitHub"
						>
							<Github size={24} />
						</a>
						<a
							href="https://linkedin.com/in/kevinkimsh"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-400 hover:text-white transition-colors"
							aria-label="LinkedIn"
						>
							<Linkedin size={24} />
						</a>
						<a
							href="mailto:kevinkim.sh@gmail.com"
							className="text-gray-400 hover:text-white transition-colors"
							aria-label="Email"
						>
							<Mail size={24} />
						</a>
					</div>

					{/* Copyright */}
					<div className="text-center md:text-right">
						<p className="text-gray-400 flex items-center justify-center md:justify-end gap-1">
							© {currentYear} Made with{" "}
							<Heart size={16} className="text-red-500" /> by Kevin Kim
						</p>
					</div>
				</div>

				{/* Divider */}
				<div className="border-t border-gray-800 mt-8 pt-8 text-center">
					<p className="text-gray-400 text-sm">
						Built with React, TypeScript, and Tailwind CSS
					</p>
				</div>
			</div>
		</footer>
	);
}
