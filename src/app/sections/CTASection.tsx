import Image from 'next/image';
import { IoCalendarOutline } from 'react-icons/io5';
import { LINKS } from '@/app/constants';
import Link from 'next/link';

export const CTASection: React.FC = () => {
	return (
		<section
			id="cta-section"
			className="flex flex-col items-center text-center px-5 py-10 md:px-16 md:py-20 lg:py-20 lg:px-30"
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
						loading='lazy'
					/>
					<div className="flex flex-row gap-4">
						<Image
							src="./dashed-arrow-angled.svg"
							width={60}
							height={70}
							alt="arrow"
							className="md:hidden"
							loading='lazy'
						/>
						<Link
							href={LINKS.calendly}
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Calendar"
							className="animate-jump animate-infinite animate-duration-[4500ms] animate-delay-500"
						>
							<IoCalendarOutline
								size={60}
								aria-label="Calendar icon para reservar turno"
							/>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};
