import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { useInView } from "react-intersection-observer";

export function Contact() {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	return (
		<section
			id="contact"
			className="py-20 bg-gradient-to-br from-gray-50 to-white"
		>
			<div className="container-max section-padding">
				<motion.div
					ref={ref}
					initial={{ opacity: 0, y: 50 }}
					animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
					transition={{ duration: 0.8 }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
						Get In Touch
					</h2>
					<p className="text-gray-600 text-lg max-w-2xl mx-auto">
						Let's work together on your next project or just have a chat.
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
					transition={{ duration: 0.8, delay: 0.4 }}
					className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-lg"
				>
					<form className="grid grid-cols-1 gap-y-6">
						<input
							type="text"
							placeholder="Your Name"
							className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 shadow-sm text-gray-700"
							required
						/>
						<input
							type="email"
							placeholder="Your Email"
							className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 shadow-sm text-gray-700"
							required
						/>
						<textarea
							placeholder="Your Message"
							rows={4}
							className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 shadow-sm text-gray-700"
							required
						></textarea>
						<button type="submit" className="btn-primary mx-auto">
							<Send size={16} />
							Send Message
						</button>
					</form>
				</motion.div>

				{/* Contact Details */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
					transition={{ duration: 0.8, delay: 0.6 }}
					className="mt-12 flex justify-center gap-8 text-gray-600"
				>
					<a
						href="mailto:kevinkim.sh@gmail.com"
						className="hover:text-primary-600 transition-colors"
					>
						<Mail size={24} />
					</a>
					{/* Add other contact icons or details here */}
				</motion.div>
			</div>
		</section>
	);
}
