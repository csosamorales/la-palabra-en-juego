import type { Metadata } from 'next';
import { Karma, Phudu } from 'next/font/google';
import './globals.css';
import { GoogleTagManager } from '@next/third-parties/google';
import { SpeedInsights } from '@vercel/speed-insights/next';

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
	title: 'La palabra en juego | sesiones online de psicoanálisis',
	description:
		'Soy Guido Le Vigne, Licenciado en Psicología y concibo este espacio de terapia psicoanalíitica online',
	icons: {
		icon: '/logo.png',
	},
	twitter: {
		images: '/logo.png',
		card: 'summary_large_image',
		title: 'La palabra en juego | sesiones online de psicoanálisis',
		description:
			'Soy Guido Le Vigne, Licenciado en Psicología y concibo este espacio de terapia psicoanalíitica online',
	},
	openGraph: {
		type: 'website',
		url: 'https://lapalabraenjuego.com',
		title: 'La palabra en juego | sesiones online de psicoanálisis',
		description:
			'Soy Guido Le Vigne, Licenciado en Psicología y concibo este espacio de terapia psicoanalíitica online',
		siteName: 'La palabra en juego',
		images: [{ url: '/logo.png' }],
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
			<body className={`${karma.variable} ${phudu.variable} antialiased`}>
				{children}
				<SpeedInsights />
			</body>
		</html>
	);
}
