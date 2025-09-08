import { useEffect, useState } from "react";
import "./Home.css";
import githubIcon from "../../media/icons/github.png";
import linkedinIcon from "../../media/icons/linkedin.png";
import curriculumVitae from "../../media/curriculum/raquel-ruiz-cv.pdf";

export const Home = () => {
	const [index, setIndex] = useState(0);

	const words = ["vida", "creatividad", "color", "sentido", "impacto"];

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prev) => (prev + 1) % words.length);
		}, 3500);
		return () => clearInterval(interval);
	}, []);

	return (
		<section id="home-section" className="home-section">
			<div className="home-content">
				<div className="home-text">
					<p>
						¡Hola! Soy <span className="home-accent">Raquel</span>, Full Stack Developer con alma de
						diseñadora.
					</p>

					<h1 className="main-title">
						Démosle{" "}
						<span key={words[index]} className="animated-word">
							{words[index]}
						</span>{" "}
						a tu visión
					</h1>
				</div>
			</div>

			<div className="social-container">
				<p className="social-text">Conectemos y creemos algo increíble juntos</p>
				<div className="social-icons">
					<a href="https://github.com/raquelruz" target="_blank" rel="noopener noreferrer">
						<img src={githubIcon} alt="GitHub" className="icon" />
					</a>
					<a href="https://linkedin.com/in/raquel-ruiz-lopez" target="_blank" rel="noopener noreferrer">
						<img src={linkedinIcon} alt="LinkedIn" className="icon" />
					</a>
				</div>
			</div>
			<div className="download-container">
				<a href={curriculumVitae} download className="download-cv-button">
					Descargar CV
				</a>
			</div>
		</section>
	);
};
