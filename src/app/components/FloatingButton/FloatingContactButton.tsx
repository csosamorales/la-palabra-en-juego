'use client';

import Link from 'next/link';
import { useState } from 'react';
import { BiSolidConversation } from 'react-icons/bi';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';
import { IoCalendarOutline } from 'react-icons/io5';
import { Tooltip } from '../Tooltip/Tooltip';

export const FloatingContactButton: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="fixed bottom-[19px] right-6 z-50 flex flex-col items-end">
			<div
				className={`flex flex-col-reverse items-end gap-1 space-y-2 transition-all duration-300 ${
					isOpen
						? 'opacity-100 translate-y-0'
						: 'opacity-0 translate-y-5 pointer-events-none'
				}`}
				aria-hidden={!isOpen}
				role="dialog"
				aria-modal={isOpen}
				aria-label="Mobile navigation menu"
			>
				<Tooltip text="Consultar por WhatsApp">
					<Link
						href="https://api.whatsapp.com/send?phone=5492944624173&text=Hola!%20Quiero%20saber%20más%20sobre%20los%20turnos."
						target="_blank"
						rel="noopener noreferrer"
						className="rounded-full bg-green-600 border-2 border-green-800 text-white p-2 cursor-pointer shadow-lg flex items-center space-x-2 transition-transform duration-300 hover:scale-110"
						onClick={toggleMenu}
					>
						<FaWhatsapp size={24} />
					</Link>
				</Tooltip>

				<Tooltip text="Reservar consulta de 15 minutos">
					<Link
						href="https://calendly.com/psicologalapalabraenjuego/30min?month=2023-10"
						target="_blank"
						rel="noopener noreferrer"
						className="rounded-full bg-blue-500 border-2 border-blue-800 text-white p-2 cursor-pointer shadow-lg flex items-center space-x-2 transition-transform duration-300 hover:scale-110"
						onClick={toggleMenu}
					>
						<IoCalendarOutline size={24} />
					</Link>
				</Tooltip>
			</div>

			<button
				className="rounded-full bg-[#523f7d4f] border-2 border-523f7d text-523f7d p-2 cursor-pointer transition-transform duration-300 hover:scale-110"
				onClick={toggleMenu}
			>
				{isOpen ? (
					<FaTimes size={24} />
				) : (
					<BiSolidConversation size={24} />
				)}
			</button>
		</div>
	);
};
