import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navItems = [
		{ href: "#home", label: "Home" },
		{ href: "#about", label: "About" },
		{ href: "#experience", label: "Experience" },
		{ href: "#skills", label: "Skills" },
		{ href: "#projects", label: "Projects" },
		{ href: "#contact", label: "Contact" },
	];

	const scrollToSection = (href: string) => {
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
		setIsOpen(false);
	};

	return (
		<nav
			className={`fixed top-0 w-full z-50 transition-all duration-300 ${
				scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
			}`}
		>
			<div className="container-max section-padding">
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<div className="flex-shrink-0">
						<button
							type="button"
							onClick={() => scrollToSection("#home")}
							className="text-xl font-bold text-gray-900 hover:text-primary-600 transition-colors"
						>
							Kevin Kim
						</button>
					</div>

					{/* Desktop Navigation */}
					<div className="hidden md:block">
						<div className="ml-10 flex items-baseline space-x-8">
							{navItems.map((item) => (
								<button
									type="button"
									key={item.href}
									onClick={() => scrollToSection(item.href)}
									className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
								>
									{item.label}
								</button>
							))}
						</div>
					</div>

					{/* Mobile menu button */}
					<div className="md:hidden">
						<button
							type="button"
							onClick={() => setIsOpen(!isOpen)}
							className="text-gray-700 hover:text-primary-600 p-2"
						>
							{isOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>
				</div>

				{/* Mobile Navigation */}
				{isOpen && (
					<div className="md:hidden">
						<div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
							{navItems.map((item) => (
								<button
									type="button"
									key={item.href}
									onClick={() => scrollToSection(item.href)}
									className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium w-full text-left transition-colors"
								>
									{item.label}
								</button>
							))}
						</div>
					</div>
				)}
			</div>
		</nav>
	);
}
