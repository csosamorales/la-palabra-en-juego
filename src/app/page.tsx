import { CTASection } from './sections/CTASection';
import { FAQSection } from './sections/FAQsSection';
import { HelpSection } from './sections/HelpSection';
import { HeroSection } from './sections/Hero';
import { PresentationSection } from './sections/PresentationSection';
import { PsychoanalysisSection } from './sections/PsychoanalysisSection';
import { StickyBar, SiteFooter, NavigationBar } from './components';

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-items-center min-h-screen font-text bg-gradient-to-b from-background from-29% via-7288a9 via-71% to-5378B0 to-100%">
			<NavigationBar />
			<main className="flex flex-col sm:gap-8 row-start-2 items-center mt-16 mx-4 md:mx-8 lg:mx-24 max-w-7xl">
				<HeroSection />
				<PresentationSection />
				<PsychoanalysisSection />
				<HelpSection />
				<FAQSection />
				<CTASection />
			</main>
			<StickyBar />
			<SiteFooter />
		</div>
	);
}
