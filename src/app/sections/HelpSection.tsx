'use client';

import { useRef } from 'react';
import { useIsVisible } from '../hooks/useIsVisible';

export const HelpSection: React.FC = () => {
	const titleRef = useRef<HTMLHeadingElement>(null);
	const isTitleVisible = useIsVisible({ ref: titleRef });

	const textContainerRef = useRef<HTMLDivElement>(null);
	const isTextContainerVisible = useIsVisible({ ref: textContainerRef });

	return (
		<section
			id="help-section"
			className="flex flex-col md:flex-row  gap-16 justify-center items-center px-5 py-10 md:px-16 md:py-20"
		>
			<h2
				ref={titleRef}
				className={`text-3xl text-center w-full sm:text-5xl xl:text-7xl 2xl:text-8xl transition-opacity ease-in duration-700 animate-delay-200 ${
					isTitleVisible
						? 'animate-fade-up opacity-100'
						: 'opacity-0'
				}`}
			>
				Te preguntas, ¿Cómo puede ayudarte el psicoanálisis?
			</h2>
			<div
				ref={textContainerRef}
				className={`text-base leading-normal w-full max-md:w-full lg:text-xl 2xl:text-3xl transition-opacity ease-in duration-700 animate-delay-200 ${
					isTextContainerVisible
						? 'opacity-100 animate-fade-up'
						: 'opacity-0'
				}`}
			>
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
