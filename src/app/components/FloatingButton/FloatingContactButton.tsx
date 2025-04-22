'use client';

import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import { IoCalendarOutline } from 'react-icons/io5';
import { Tooltip } from '../Tooltip/Tooltip';
import { LINKS } from '@/app/constants';

export const FloatingContactButton: React.FC = () => {
	return (
		<div className="fixed bottom-[19px] right-6 z-50 flex flex-col items-end">
			<div
				className={`flex flex-col-reverse items-end gap-1.5 space-y-2 transition-all duration-300`}
				role="dialog"
				aria-label="Mobile navigation menu"
			>
				<Tooltip text="Consultar por WhatsApp">
					<Link
						href={LINKS.whatsapp}
						target="_blank"
						rel="noopener noreferrer"
						className="rounded-full bg-green-600 border-2 border-green-800 text-white p-2 cursor-pointer shadow-lg flex items-center space-x-2 transition-transform duration-300 hover:scale-110"
					>
						<FaWhatsapp size={24} />
					</Link>
				</Tooltip>

				<Tooltip text="Reservar consulta de 15 minutos">
					<Link
						href={LINKS.calendly}
						target="_blank"
						rel="noopener noreferrer"
						className="rounded-full bg-blue-500 border-2 border-blue-800 text-white p-2 cursor-pointer shadow-lg flex items-center space-x-2 transition-transform duration-300 hover:scale-110"
					>
						<IoCalendarOutline size={24} />
					</Link>
				</Tooltip>
			</div>
		</div>
	);
};
