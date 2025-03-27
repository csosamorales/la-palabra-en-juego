import Image from 'next/image';

export const PresentationSection: React.FC = () => (
	<section
		id="presentation-section"
		className="flex flex-col gap-14 py-8 lg:mr-auto lg:ml-auto lg:flex-row max-md:px-5 max-md:py-10"
	>
		<Image
			width={598}
			height={802}
			src="/guido.jpeg"
			className="object-cover h-[90vh] rounded-2xl max-w-[598px] max-lg:mx-auto max-lg:my-0 max-lg:w-full max-lg:h-auto max-lg:max-w-[500px]"
			alt="Profile of Guido Le Vigne"
		/>
		<div className="pt-20 w-full max-w-[90vw] max-md:pt-10">
			<h1 className="mb-10 text-6xl text-center text-black max-sm:text-4xl">
				Hola! Soy Guido Le Vigne
			</h1>
			<div className="mb-9 text-md leading-normal text-black max-sm:text-base">
				<p>
					Licenciado en Psicología (Mat. Nac.: 75427) por la
					Universidad de Ciencias Empresariales y Sociales (UCES). Mi
					práctica clínica se inscribe en una orientación
					psicoanalítica, desde donde acompaño a niños, adolescentes y
					adultos en su recorrido analitíco.
				</p>
				<p className="mt-4">
					Mi formación incluye experiencias en instituciones de salud
					mental como el Hospital Durand, el Hospital Borda, la
					Clínica Centro Psiquiátrico Ducont y el CET Proyecto
					Puente-Symbolon, ámbitos donde profundicé mi práctica como
					analista.
				</p>
				<p className="mt-4">
					Concibo este espacio un lugar donde la palabra toma cuerpo y
					permite al sujeto desplegar su verdad, siempre en un marco
					de ética, respeto y compromiso con su singularidad.
				</p>
				<p className="mt-4">
					¿Estás considerando iniciar terapia? Te ofrezco atención
					virtual. Podés agendar una videollamada de 15 minutos para
					conocernos o escribirme por WhatsApp.
				</p>
			</div>
			<button
				className="text-xl font-bold rounded-2xl border-2 border-solid cursor-pointer bg-[#523f7d4f] border-523f7d h-[65px] text-523f7d w-[223px] max-sm:w-full"
				aria-label="Contactar a Guido Le Vigne"
			>
				Contactame
			</button>
		</div>
		{/* <div className="flex flex-col gap-7">
				<h2>Hola! Soy Guido Le Vigne</h2>

				<div>
					<p>
						Licenciado en Psicología (Mat. Nac.: 75427) por la
						Universidad de Ciencias Empresariales y Sociales (UCES).
						Mi práctica clínica se inscribe en una orientación
						psicoanalítica, desde donde acompaño a niños,
						adolescentes y adultos en su recorrido analitíco.
					</p>
					<p>
						Mi formación incluye experiencias en instituciones de
						salud mental como el Hospital Durand, el Hospital Borda,
						la Clínica Centro Psiquiátrico Ducont y el CET Proyecto
						Puente-Symbolon, ámbitos donde profundicé mi práctica
						como analista.
					</p>
					<p>
						Concibo este espacio un lugar donde la palabra toma
						cuerpo y permite al sujeto desplegar su verdad, siempre
						en un marco de ética, respeto y compromiso con su
						singularidad.
					</p>
					<p>
						¿Estás considerando iniciar terapia? Te ofrezco atención
						virtual. Podés agendar una videollamada de 15 minutos
						para conocernos o escribirme por WhatsApp.
					</p>
				</div>
			</div> */}
		{/* </div> */}
	</section>
);
