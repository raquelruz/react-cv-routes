import { useState } from "react";
import { cvData } from "../../data/cvData";
import "./ContactForm.css";

export const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		reason: "",
		message: "",
		privacy: false,
	});

	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState("");

	const handleChange = (event) => {
		const { name, value, type, checked } = event.target;
		setFormData((prev) => ({
			...prev,
			[name]: type === "checkbox" ? checked : value,
		}));
		setError(""); // limpia errores al escribir
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const { name, email, reason, message, privacy } = formData;

		if (!name) return setError("Rellena el campo 'Nombre'");
		if (!email) return setError("Rellena el campo 'Email'");
		if (!reason) return setError("Selecciona un motivo de contacto");
		if (!message) return setError("Rellena el mensaje");
		if (!privacy) return setError("Debes aceptar la política de privacidad");

		const subject = `${name} (${email}) - [${reason}]`;
		const body = message;
		const mailToLink = `mailto:${cvData.personalInfo.email}?subject=${encodeURIComponent(
			subject
		)}&body=${encodeURIComponent(body)}`;

		const tempLink = document.createElement("a");
		tempLink.href = mailToLink;
		tempLink.style.display = "none";
		document.body.appendChild(tempLink);
		tempLink.click();
		document.body.removeChild(tempLink);

		setSubmitted(true);
		setFormData({
			name: "",
			email: "",
			reason: "",
			message: "",
			privacy: false,
		});
	};

	return (
		<section className="contact-section">
			<div className="contact-container">
				<h2>Contacto</h2>

				{error && <p className="form-error">{error}</p>}

				{!submitted ? (
					<form className="contact-form" onSubmit={handleSubmit} noValidate>
						<input
							type="text"
							name="name"
							value={formData.name}
							onChange={handleChange}
							placeholder="Tu nombre"
							required
						/>

						<input
							type="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							placeholder="tu@correo.com"
							required
						/>

						<select name="reason" value={formData.reason} onChange={handleChange} required>
							<option value="">--Selecciona un motivo--</option>
							<option value="consulta">Consulta</option>
							<option value="soporte">Soporte</option>
							<option value="colaboracion">Colaboración</option>
							<option value="otro">Otro</option>
						</select>

						<textarea
							name="message"
							value={formData.message}
							onChange={handleChange}
							placeholder="Escribe tu mensaje aquí..."
							rows="4"
							required
						/>

						<label className="checkbox">
							<input type="checkbox" name="privacy" checked={formData.privacy} onChange={handleChange} />
							Acepto la{" "}
							<a href="/privacidad" target="_blank" rel="noopener noreferrer">
								política de privacidad
							</a>
						</label>

						<button type="submit">Enviar mensaje</button>
					</form>
				) : (
					<p className="thank-you">
						🎉 ¡Mensaje preparado! <br />
						Se ha abierto tu app de correo. <br />
						<b>Revisa y envía el mensaje para completar el contacto.</b>
					</p>
				)}
			</div>
		</section>
	);
};
