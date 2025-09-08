import "./Skills.css";

export const Skills = ({ skills }) => {
	if (!skills || skills.length < 2) return null;

	return (
		<section className="skills-section">
			<h2 className="section-title">Skills</h2>

			<div className="skills-container">
				<h3>Hard Skills</h3>
				<div className="skill-buttons">
					{skills[0].hardskills.map((skill, index) => (
						<button key={index} className="skill-btn">
							{skill.name}
						</button>
					))}
				</div>

				<h3>Soft Skills</h3>
				<div className="skill-buttons">
					{skills[1].softskills.map((skill, index) => (
						<button key={index} className="skill-btn">
							{skill.name}
						</button>
					))}
				</div>
			</div>
		</section>
	);
};
