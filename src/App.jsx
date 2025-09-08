import { useState } from "react";
import "./App.css";
import { Tabs } from "./assets/components/Navigation/Tabs";
import { Navigation } from "./assets/components/Navigation/Navigation";
import { Home } from "./assets/components/Home/Home";
import { Experience } from "./assets/components/Experience/Experience";
import { cvData } from "./assets/data/cvData";
import { Education } from "./assets/components/Education/Education";
import { Skills } from "./assets/components/Skills/Skills";
import { ContactForm } from "./assets/components/ContactForm/ContactForm";
import { useToggleTheme } from "./assets/components/UseToggleTheme/UseToggleTheme";

const INITIAL_TAB = Object.keys(Tabs)[0];

export const App = () => {
	const [activeTab, setActiveTab] = useState(INITIAL_TAB);
	const [darkMode, toggleDarkMode] = useToggleTheme();

	return (
		<>
			<div className="app-container">
				<Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

				<button onClick={toggleDarkMode} className="theme-toggle-btn">
					{darkMode ? "☀️": "🌙"}
				</button>

				<section id="home-section">
					<Home />
				</section>

				<section id="experience-section">
					<Experience data={cvData.experience} />
				</section>

				<section id="education-section">
					<Education data={cvData.education} />
				</section>

				<section id="skills-section">
					<Skills skills={cvData.skills} />
				</section>

				<section id="contact-section">
					<ContactForm cvData={cvData} />
				</section>

				<button className="scroll-to-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
					↑
				</button>
			</div>
		</>
	);
};

export default App;
