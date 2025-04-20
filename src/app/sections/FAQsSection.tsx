'use client';
import classNames from 'classnames';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

export const FAQSection: React.FC = () => {
	return (
		<section id="faqs-section" className="px-5 py-10 md:px-16 md:py-20 lg:py-20 lg:px-30">
			<h2 className="mb-20 text-3xl text-center text-black sm:text-5xl xl:text-7xl 2xl:text-8xl">
				Preguntas Frecuentes
			</h2>
			<div className="mx-auto my-0 max-w-2xl max-md:px-5 max-md:py-0 divide-y">
				<Accordion />
			</div>
		</section>
	);
};

const Accordion: React.FC = () => {
	const [openFaq, setOpenFaq] = useState<number | null>(null);

	const toggleFaq = (index: number) => {
		setOpenFaq(openFaq === index ? null : index);
	};

	return (
		<>
			{faqItems.map((item, index) => (
				<div className="mb-10" key={index}>
					<button
						className="flex gap-2 items-center justify-between w-full text-left py-2 text-2xl max-sm:text-xl cursor-pointer"
						onClick={(e) => {
							e.preventDefault();
							toggleFaq(index);
						}}
						aria-expanded={openFaq === index}
						aria-controls={`faq-answer-${index}`}
					>
						<span className='text-base lg:text-xl 2xl:text-3xl'>{item.question}</span>
						<FaChevronDown
							size={20}
							className={classNames(
								'transition-transform duration-500 ease-in-out',
								{
									'rotate-180': openFaq === index,
								}
							)}
						/>
					</button>

					<div
						id={`faq-answer-${index}`}
						role="region"
						aria-labelledby={`faq-title-${index}`}
						className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
							openFaq === index
								? 'grid-rows-[1fr] opacity-100'
								: 'grid-rows-[0fr] opacity-0'
						}`}
					>
						<div className="overflow-hidden">
							<p className="pb-3 text-slate-950">{item.answer}</p>
						</div>
					</div>
				</div>
			))}
		</>
	);
};

const faqItems = [
	{
		question: '¿Trabajás con Obra Social o Prepaga?',
		answer: 'Trabajo mediante el sistema de reintegros. Puedo emitir factura para que el paciente gestione el reembolso según las condiciones de su cobertura.',
	},
	{
		question: '¿Cuál es la frecuencia de las sesiones?',
		answer: 'Las sesiones son semanales. Este ritmo permite sostener un trabajo continuo sobre lo que el paciente trae, respetando el tiempo singular de cada proceso.',
	},
	{
		question: '¿Cuánto dura una sesión?',
		answer: 'La sesión no está sujeta a un tiempo fijo. Su duración es aproximada a los 40 minutos, aunque puede extenderse según lo que surja en el trabajo analítico.',
	},
	{
		question: '¿Quién se puede atender?',
		answer: 'Adolescentes y adultos. Cada recorrido es único, y el tratamiento se ajusta a las particularidades de cada quien.',
	},
];
