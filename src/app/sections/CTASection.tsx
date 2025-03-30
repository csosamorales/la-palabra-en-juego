import Image from 'next/image';

export const CTASection: React.FC = () => {
	return (
		<section
			id="cta-section"
			className="flex flex-col items-center px-0 py-26 lg:py-48 text-center"
		>
			<div>
				<div className="flex flex-col md:flex-row gap-4 items-center ">
					<div className="flex flex-col gap-2">
						<h2 className="mb-2 text-5xl font-bold text-black max-sm:text-3xl">
							Te invito a que charlemos
						</h2>
						<p className="text-xl md:text-2xl font-bold text-black">
							Agendá 15 minutos conmigo
						</p>
					</div>
					<Image
						src="./dashed-arrow.svg"
						width={100}
						height={70}
						alt="arrow"
						className="hidden md:inline"
					/>
					<div className="flex flex-row gap-4">
						<Image
							src="./dashed-arrow-angled.svg"
							width={60}
							height={70}
							alt="arrow"
							className="md:hidden"
						/>
						<button className="cursor-pointer">
							<Image
								src="./calendar-icon.svg"
								width={60}
								height={60}
								alt="Calendar icon para reservar turno"
								className="scale-95 hover:scale-110 transition-transform duration-500 ease-out animate-pulse animate-infinite"
							/>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};
