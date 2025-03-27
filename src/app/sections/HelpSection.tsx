export const HelpSection: React.FC = () => {
	return (
		<section
			id="help-section"
			className="flex gap-16 justify-center items-center px-16 py-20 max-lg:flex-col max-md:px-5 max-md:py-10"
		>
			<h2 className="text-5xl text-center w-full max-sm:text-3xl">
				Te preguntas, ¿Cómo puede ayudarte el psicoanálisis?
			</h2>
			<div className="text-xl leading-normal w-full max-md:w-full max-sm:text-base">
				<p>
					Si estás atravesando ansiedad, estrés, dificultades en tus
					relaciones o simplemente quieres explorar más sobre ti
					mismo, el psicoanálisis ofrece un espacio de escucha y
					reflexión. A través de la palabra, podemos trabajar juntos
					en comprender lo que te sucede y encontrar nuevas formas de
					afrontar tu realidad.
				</p>
				<p className="mt-4">
					Mi enfoque se basa en la escucha atenta y en el respeto por
					los tiempos de cada persona. En cada sesión, construiremos
					un espacio donde puedas hablar sin juicios y donde el
					malestar encuentre nuevas formas de expresión y elaboración.
				</p>
				<p className="mt-4">
					Si queres saber más sobre cómo funciona la terapia
					psicoanalítica o agendar una consulta, podes contactarme
				</p>
			</div>
		</section>
	);
};
