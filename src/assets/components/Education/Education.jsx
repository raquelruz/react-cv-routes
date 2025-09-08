import "./Education.css";

export const Education = ({ data }) => {
	if (!data || data.length === 0) {
		return <p>No hay formación disponible.</p>;
	}

	return (
		<section className="education-section">
			<h2 className="section-title">Formación Académica</h2>
			{data.map((item, index) => (
				<div key={index} className="education-card">
					<h3>{item.degree}</h3>
					<h4>{item.institution}</h4>
					<p className="education-period">{item.period}</p>
					{item.description && (
						<ul className="education-description">
							{item.description
								.split("•")
								.map((point, index) => (point.trim() !== "" ? <li key={index}>{point.trim()}</li> : null))}
						</ul>
					)}
				</div>
			))}
		</section>
	);
};
