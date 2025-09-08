import "./Navigation.css";
import { Tabs } from "./Tabs";
import { NavLink } from "react-router-dom";

export const Navigation = ({ activeTab, setActiveTab }) => {
	return (
		<nav className="nav-container">
			<div className="tab-container">
				{Object.entries(Tabs).map(([property, value]) => (
					<NavLink
						key={property}
						to={property === "Home" ? "/" : `/${property.toLowerCase()}`}
						className={({ isActive }) => `tab ${isActive ? "active" : ""}`}
					>
						{value}
					</NavLink>
				))}
			</div>
		</nav>
	);
};
