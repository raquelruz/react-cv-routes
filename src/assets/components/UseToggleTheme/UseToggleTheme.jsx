import { useState } from "react";
import './UseToggleTheme.css'
import { storage } from "../../helpers/storage.js"

export const useToggleTheme = () => {
	const storedTheme = storage.get("darkMode");
	const initialDarkMode = storedTheme !== null ? storedTheme : false;

	const [darkMode, setDarkMode] = useState(() => {
		document.documentElement.setAttribute("data-theme", initialDarkMode ? "dark" : "light");
		return initialDarkMode;
	});

	const toggleDarkMode = () => {
		const newDarkMode = !darkMode;
		setDarkMode(newDarkMode);
		document.documentElement.setAttribute("data-theme", newDarkMode ? "dark" : "light");
		storage.save("darkMode", newDarkMode);
	};

	return [darkMode, toggleDarkMode];
};