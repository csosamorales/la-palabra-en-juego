import Image from 'next/image';
import { CTASection } from './sections/CTASection';
import { FAQSection } from './sections/FAQsSection';
import { HelpSection } from './sections/HelpSection';
import { HeroSection } from './sections/Hero';
import { PresentationSection } from './sections/PresentationSection';
import { PsychoanalysisSection } from './sections/PsychoanalysisSection';
import NavigationBar from './components/Navbar/NavigationBar';

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-items-center min-h-screen gap-16 font-text bg-gradient-to-b from-background from-29% via-7288a9 via-71% to-5378B0 to-100%">
			<NavigationBar />
			<main className="flex flex-col gap-[32px] row-start-2 items-center  mx-4 md:mx-24">
				<HeroSection />
				<PresentationSection />
				<PsychoanalysisSection />
				<HelpSection />
				<FAQSection />
				<CTASection />
			</main>
			<SiteFooter />
		</div>
	);
}

const SiteFooter: React.FC = () => (
	<footer className="px-0 py-5 text-center">
		<div className="flex gap-5 justify-center">
			<a href="#" aria-label="WhatsApp">
				<Image
					src="./whatsapp-icon.svg"
					alt="WhatsApp icon para comunicarse via WhatsApp"
					width={20}
					height={20}
				/>
			</a>
			<a href="#" aria-label="Instagram">
				<Image
					src="./instagram-icon.svg"
					alt="Instagram icon para acceder al perfil del licenciado Guido Le Vigne"
					width={20}
					height={20}
				/>
			</a>
			<a href="#" aria-label="Calendar">
				<Image
					src="./calendar-icon.svg"
					alt="Calendar icon para poder acceder a Calendly y asi reservar un turno con el licenciado Guido Le Vigne"
					width={20}
					height={20}
				/>
			</a>
		</div>
		<p className="mt-4 text-base font-bold">
			© 2025 Todos los derechos reservados
		</p>
	</footer>
);
