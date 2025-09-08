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
import { Routes, Route } from "react-router-dom";

const INITIAL_TAB = Object.keys(Tabs)[0];

export const App = () => {
	const [activeTab, setActiveTab] = useState(INITIAL_TAB);
	const [darkMode, toggleDarkMode] = useToggleTheme();

	return (
		<>
			<div className="app-container">
				<Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

				<button onClick={toggleDarkMode} className="theme-toggle-btn">
					{darkMode ? "☀️" : "🌙"}
				</button>

				<Routes>
					<Route path="/home" element={<Home />} />
					<Route path="/experience" element={<Experience data={cvData.experience} />} />
					<Route path="/education" element={<Education data={cvData.education} />} />
					<Route path="/skills" element={<Skills skills={cvData.skills} />} />
					<Route path="/contact" element={<ContactForm cvData={cvData} />} />
				</Routes>

				<button className="scroll-to-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
					↑
				</button>
			</div>
		</>
	);
};

export default App;
