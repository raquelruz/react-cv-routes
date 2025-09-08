import "./Navigation.css";
import { Tabs } from "./Tabs";

export const Navigation = ({ activeTab, setActiveTab }) => {
	return (
		<nav className="nav-container">
			<div className="tab-container">
				{Object.entries(Tabs).map(([property, value]) => (
					<button
						key={property}
						className={`tab ${activeTab === property ? "active" : ""}`}
						onClick={() => {
							setActiveTab(property);
							const sectionId = `${property.toLowerCase()}-section`;
							const section = document.getElementById(sectionId);
							if (section) {
								section.scrollIntoView({ behavior: "smooth" });
							}
						}}
					>
						{value}
					</button>
				))}
			</div>
		</nav>
	);
};
