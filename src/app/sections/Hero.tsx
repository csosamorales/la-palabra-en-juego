import Image from 'next/image';

export const HeroSection: React.FC = () => (
	<section
		id="hero-section"
		className="w-full h-[90vh] md:min-[90vh] flex flex-col justify-center items-center gap-2"
	>
		<Image
			src="/background.png"
			alt="background image"
			fill
			priority
			className="!w-auto !h-[80%] !top-[10%] lg:!top-0 lg:!h-[90%] mr-auto ml-auto mt-16 mb-16 hidden md:inline"
		/>

		<div className="flex flex-col justify-center items-center gap-2 animate-fade animate-once animate-duration-[1500ms] animate-ease-in">
			<span className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-title">
				La palabra en juego
			</span>
			<h1 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl !font-text">
				Terapia psicoanálitica online
			</h1>
		</div>
		<Image
			src="/fondo-mobile.png"
			alt="background image"
			fill
			priority
			className="!w-[90vw] !h-auto mr-auto ml-auto !top-[35%] xs:!top-[25%] sm:!top-[64px] sm:!w-auto sm:!h-[90%] md:m-16 md:hidden"
		/>
	</section>
);
