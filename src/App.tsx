import { Route, BrowserRouter as Router, Routes } from "react-router";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import Squares from "./components/Squares";

function HomePage() {
	return (
		<div className="min-h-screen">
			<Squares
				speed={0.3}
				squareSize={40}
				direction="diagonal"
				borderColor={"#000"}
				hoverFillColor={"#eee"}
			/>
			<Navbar />
			<Hero />
			<About />
			<Experience />
			<Skills />
			<Projects />
			<Contact />
			<Footer />
		</div>
	);
}

function App() {
	return (
		<div className="relative min-h-screen">
			<Router>
				<Routes>
					<Route path="/" element={<HomePage />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
