'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BiSolidConversation } from 'react-icons/bi';
import { useIsVisible } from '../hooks/useIsVisible';
import { useRef } from 'react';

export const PresentationSection: React.FC = () => {
	const imageRef = useRef<HTMLImageElement>(null);
	const isImageVisible = useIsVisible({ ref: imageRef });

	const textContainerRef = useRef<HTMLDivElement>(null);
	const isTextContainerRef = useIsVisible({ ref: textContainerRef });

	return (
		<section
			id="presentation-section"
			className="flex flex-col sm:gap-4 lg:gap-14 py-10 md:py-20 lg:mr-auto lg:ml-auto lg:flex-row max-md:px-5"
		>
			<Image
				width={598}
				height={802}
				src="/guido.webp"
				className={`object-cover h-auto lg:h-[80vh] max-w-78 max-h-[500px] !w-full sm:max-w-100 2xl:max-w-full lg:max-h-[1000px] rounded-2xl max-lg:mx-auto max-lg:my-0 ${
					isImageVisible
						? 'animate-fade-right animate-once animate-duration-[1000ms] animate-delay-[200ms]'
						: ''
				} `}
				alt="Profile of Guido Le Vigne"
				ref={imageRef}
			/>
			<div
				className={`w-full max-w-[90vw] max-md:pt-10 flex flex-col items-center lg:items-start ${
					isTextContainerRef
						? 'animate-fade-left animate-once animate-duration-[1500ms]'
						: ''
				}`}
				ref={textContainerRef}
			>
				<h2 className="mb-10 lg:my-10 text-center text-black text-4xl sm:text-5xl lg:text-[2.5rem] xl:text-6xl 2xl:text-7xl 3xl:text-8xl">
					Hola! Soy Guido Le Vigne
				</h2>
				<div className="mb-9 text-base leading-normal text-black xl:text-xl 2xl:text-2xl">
					<p>
						<strong>
							Licenciado en Psicología (Mat. Nac.: 75427)
						</strong>{' '}
						por la Universidad de Ciencias Empresariales y Sociales
						(UCES). Mi práctica clínica se inscribe en una{' '}
						<strong>orientación psicoanalítica</strong>, desde donde
						acompaño a niños, adolescentes y adultos en su recorrido
						analitíco.
					</p>
					<p className="mt-4">
						<strong>Mi formación incluye experiencias</strong> en
						instituciones de salud mental como el{' '}
						<strong>
							Hospital Durand, el Hospital Borda, la Clínica
							Centro Psiquiátrico Ducont y el CET Proyecto
							Puente-Symbolon
						</strong>
						, ámbitos donde profundicé mi práctica como analista.
					</p>
					<p className="mt-4">
						Concibo este <strong>espacio</strong> un lugar donde la
						palabra toma cuerpo y permite al sujeto{' '}
						<strong>desplegar su verdad</strong>, siempre en un
						marco de <strong>ética, respeto y compromiso</strong>{' '}
						con su singularidad.
					</p>
					<p className="mt-4">
						<strong>¿Estás considerando iniciar terapia?</strong> Te
						ofrezco atención virtual. Podés agendar una videollamada
						de 15 minutos para conocernos o escribirme por WhatsApp.
					</p>
				</div>
				<Link
					href={'/#cta-section'}
					className="flex flex-row gap-2 items-center text-xl 2xl:text-3xl font-title font-bold rounded-2xl border-2 border-solid cursor-pointer bg-[#523f7d4f] border-523f7d text-523f7d hover:scale-110 transition-transform duration-500 ease-out py-3 px-6 w-fit"
					aria-label="Contactar a Guido Le Vigne"
				>
					<BiSolidConversation />
					Contactame
				</Link>
			</div>
		</section>
	);
};
