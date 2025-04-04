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
					El psicoanálisis no ofrece soluciones predefinidas ni
					consejos sobre cómo vivir. No busca la adaptación ni el
					control de síntomas, sino abrir un <strong>espacio</strong>{' '}
					donde algo <strong>nuevo</strong> pueda decirse.
				</p>
				<Paragraph>
					Si hay algo que te causa <strong>malestar</strong>, si algo
					en tu vida se repite sin que puedas evitarlo o si incluso no
					sabés qué te trae hasta aquí, el trabajo analítico permite
					poner en juego la palabra para escuchar aquello que insiste
					más allá de lo consciente.
				</Paragraph>
				<Paragraph>
					<strong>Cada análisis es singular</strong>. No hay
					respuestas universales, pero sí la posibilidad de un decir
					propio. La tarea del analista es escuchar lo que resuena en
					ese decir, no para interpretar desde un saber previo, sino
					para sostener la pregunta y{' '}
					<strong>
						hacer lugar a lo que aún no ha podido ser dicho.
					</strong>
				</Paragraph>
				<Paragraph>
					Si algo de esto <strong>resuena</strong> en vos, te invito a
					que me contactes.
				</Paragraph>
			</div>
		</section>
	);
};

const Paragraph: React.FC<{ children: React.ReactNode }> = ({ children }) => (
	<p className="mt-4">{children}</p>
);
