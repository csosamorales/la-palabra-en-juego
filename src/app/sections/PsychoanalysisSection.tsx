'use client';

import { useRef } from 'react';
import { useIsVisible } from '../hooks/useIsVisible';

export const PsychoanalysisSection: React.FC = () => {
	const titleRef = useRef<HTMLHeadingElement>(null);
	const isTitleVisible = useIsVisible({ ref: titleRef });

	const textContainerRef = useRef<HTMLDivElement>(null);
	const isTextContainerVisible = useIsVisible({ ref: textContainerRef });

	return (
		<section
			id="psychoanalysis-section"
			className="px-5 py-10 md:px-16 md:py-20 lg:py-20 lg:px-30"
		>
			<h2
				ref={titleRef}
				className={`mb-16 text-3xl sm:text-5xl xl:text-7xl 2xl:text-8xl ${
					isTitleVisible
						? 'animate-fade-down animate-duration-[1500ms]'
						: ''
				}`}
			>
				Un poquito sobre el psicoanálisis....
			</h2>

			<div
				ref={textContainerRef}
				className={`flex flex-col gap-1 ${
					isTextContainerVisible
						? 'animate-fade-left animate-duration-[1500ms]'
						: ''
				}`}
			>
				<Paragraph>
					<strong>Lacan</strong>, a partir del{' '}
					<strong>signo lingüístico</strong> de{' '}
					<strong>Saussure</strong>, entiende y explica la forma de{' '}
					<strong>escuchar</strong> que <strong>Freud</strong>{' '}
					descubrió. Según <strong>Saussure</strong>, la{' '}
					<strong>palabra</strong> consta de dos componentes: el{' '}
					<strong>significado</strong> (el sentido) y el{' '}
					<strong>significante</strong> (el sonido).
				</Paragraph>

				<Paragraph>
					Por ejemplo, si alguien dice{' '}
					<em>&ldquo;delfín azulado&ldquo;</em> en castellano, otro
					podría escuchar <em>&ldquo;del fin a su lado&ldquo;</em>.
					Pero, ¿es válido suponer que la persona quiso decir algo
					distinto solo porque las <strong>palabras</strong> suenan
					parecidas?
				</Paragraph>

				<Paragraph>
					<strong>Freud</strong> escucha más allá de la{' '}
					<strong>lingüística</strong>. Lo hace bajo la hipótesis de
					que su <strong>interlocutor</strong> tiene cosas que{' '}
					<strong>desearía decir</strong> pero no puede, debido a la{' '}
					<strong>represión</strong>.
				</Paragraph>

				<Paragraph>
					<strong>Freud</strong> sostiene que lo{' '}
					<strong>reprimido</strong> es el <strong>contenido</strong>,
					mientras que <strong>Lacan</strong>, apoyándose en el{' '}
					<strong>signo lingüístico</strong>, plantea que lo{' '}
					<strong>reprimido</strong> es el{' '}
					<strong>significado</strong>, dejando el{' '}
					<strong>significante</strong> resonando.
				</Paragraph>

				<Paragraph>
					Hay elementos que el <strong>analizante</strong> no puede
					expresar directamente, pero que se hacen sonar. El{' '}
					<strong>analista</strong>, al captar estos{' '}
					<strong>sonidos</strong>, los introduce en el espacio de la{' '}
					<strong>conversación</strong> para <strong>trabajar</strong>{' '}
					con ellos.
				</Paragraph>
			</div>
		</section>
	);
};

const Paragraph: React.FC<{ children: React.ReactNode }> = ({ children }) => (
	<p className="text-base leading-normal max-w-full lg:text-xl 2xl:text-3xl">
		{children}
	</p>
);
