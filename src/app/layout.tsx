import type { Metadata } from 'next';
import { Karma, Phudu } from 'next/font/google';
import './globals.css';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

const karma = Karma({
	variable: '--font-karma',
	weight: '400',
	subsets: ['latin'],
});

const phudu = Phudu({
	variable: '--font-phudu',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Psicoanálisis online con Guido Le Vigne | Psicólogo especializado en terapia por videollamada',
	description:
		'Ofrezco sesiones online de psicoanálisis desde una mirada profesional y comprometida. Soy Guido Le Vigne, Licenciado en Psicología, especializado en terapia por videollamada.',
	icons: {
		icon: '/logo.webp',
		apple: '/logo.webp',
	},
	keywords:['psicología', 'psicoanálisis', 'terapia online', 'psicólogo', 'Guido Le Vigne'],
	authors: [{ name: 'Guido Le Vigne', url: 'https://lapalabraenjuego.com' }],
	creator: 'Guido Le Vigne',
	applicationName: 'La palabra en juego',
	twitter: {
		images: '/logo.webp',
		card: 'summary',
		title: 'Psicoanálisis online con Guido Le Vigne | Psicólogo especializado en terapia por videollamada',
		description:
			'Ofrezco sesiones online de psicoanálisis desde una mirada profesional y comprometida. Soy Guido Le Vigne, Licenciado en Psicología, especializado en terapia por videollamada.',
	},
	openGraph: {
		type: 'website',
		url: 'https://lapalabraenjuego.com',
		title: 'Psicoanálisis online con Guido Le Vigne | Psicólogo especializado en terapia por videollamada',
		description:
			'Ofrezco sesiones online de psicoanálisis desde una mirada profesional y comprometida. Soy Guido Le Vigne, Licenciado en Psicología, especializado en terapia por videollamada.',
		siteName: 'La palabra en juego',
		images: [{ url: '/logo.webp' }],
		locale: 'es-AR',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es">
			<GoogleTagManager gtmId="GTM-WVBVM8X9" />
			<GoogleAnalytics gaId="G-9CSY4NCJF5" />
			<body className={`${karma.variable} ${phudu.variable} antialiased`}>
				{children}
				<SpeedInsights />
				<Analytics />
			</body>
		</html>
	);
}
