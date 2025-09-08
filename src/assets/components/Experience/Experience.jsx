import "./Experience.css";

export const Experience = ({ data }) => {
	if (!data || data.length === 0) {
		return <p>No hay experiencia disponible.</p>;
	}

	return (
		<section className="experience-section">
			<h2 className="section-title">Experiencia Profesional</h2>
			{data.map((item, index) => (
				<div key={index} className="experience-card">
					<h3>{item.position}</h3>
					<h4>{item.company}</h4>
					<p className="experience-period">
						{item.period} | {item.location}
					</p>
					<ul className="experience-description">
						{item.description
							?.split("•")
							.map((point, index) => (point.trim() !== "" ? <li key={index}>{point.trim()}</li> : null))}
					</ul>
				</div>
			))}
		</section>
	);
};
