import Image from 'next/image';

export const HeroSection: React.FC = () => (
	<section>
		<div className="w-full  min-h-screen flex flex-col justify-center items-center gap-2">
			<Image
				src="/background.png"
				alt="background image"
				fill
				priority
				className="!w-auto !h-[90%] mr-auto ml-auto mt-16 mb-16 hidden lg:inline"
			/>

			<Image
				src="/fondo-mobile.png"
				alt="background image"
				fill
				priority
				className="!w-auto !h-[90%] mr-auto ml-auto mt-16 mb-16 lg:hidden"
			/>

			<h1 className="text-4xl md:text-6xl">La palabra en juego</h1>
			<p className="text-lg sm:text-3xl">
				Terapia de psicoanálisis online
			</p>
		</div>
	</section>
);
