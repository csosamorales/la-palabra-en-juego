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
	title: 'Terapia psicoanalítica online',
	description:
		'Sesiones de psicoanálisis online. Soy Guido Le Vigne, Lic. en Psicología, con orientación psicoanalítica.',
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
		title: 'Terapia psicoanalítica online',
		description:
			'Sesiones de psicoanálisis online. Soy Guido Le Vigne, Lic. en Psicología, con orientación psicoanalítica.',
	},
	openGraph: {
		type: 'website',
		url: 'https://lapalabraenjuego.com',
		title: 'Terapia psicoanalítica online',
		description:
			'Sesiones de psicoanálisis online. Soy Guido Le Vigne, Lic. en Psicología, con orientación psicoanalítica.',
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
