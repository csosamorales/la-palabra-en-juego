import { LINKS } from '@/app/constants';
import Link from 'next/link';
import { IoCalendarOutline } from 'react-icons/io5';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

export const SiteFooter: React.FC = () => (
	<footer className="px-0 py-5 text-center z-50">
		<div className="flex gap-5 justify-center">
			<Link
				href={LINKS.whatsapp}
				target="_blank"
				rel="noopener noreferrer"
				aria-label="WhatsApp"
				className="cursor-pointer"
			>
				<FaWhatsapp size={20} />
			</Link>
			<Link
				href={LINKS.instagram}
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Instagram"
				className="cursor-pointer"
			>
				<FaInstagram size={20} />
			</Link>
			<Link
				href={LINKS.calendly}
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Calendar"
			>
				<IoCalendarOutline size={20} />
			</Link>
		</div>
		<p className="mt-4 text-base font-bold">
			© 2025 Todos los derechos reservados
		</p>
	</footer>
);
