'use client';
import classNames from 'classnames';
import Image from 'next/image';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

export const FAQSection: React.FC = () => {
	return (
		<section id="faqs-section" className="px-0 py-14">
			<h2 className="mb-20 text-5xl text-center text-black max-sm:text-3xl">
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
						<span>{item.question}</span>
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
		answer: 'Actualmente trabajo de manera particular. Sin embargo, puedo proporcionarte un recibo para que gestiones el reintegro con tu obra social o prepaga si corresponde.',
	},
	{
		question: '¿Cuál es la frecuencia de las sesiones?',
		answer: 'La frecuencia recomendada es de una sesión semanal, aunque esto puede variar según las necesidades particulares de cada persona y el momento del proceso terapéutico.',
	},
	{
		question: '¿Cuánto dura una sesión?',
		answer: 'Las sesiones tienen una duración aproximada de 45-50 minutos.',
	},
	{
		question: '¿Quién se puede atender?',
		answer: 'Atiendo a niños (a partir de 6 años), adolescentes y adultos. Cada etapa vital tiene sus particularidades, y el abordaje se adapta a las necesidades específicas de cada persona.',
	},
];
