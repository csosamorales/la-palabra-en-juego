'use client';

import React, { useEffect, useRef } from 'react';
import NavLink from './NavLink';

interface MobileMenuProps {
	isOpen: boolean;
	onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
	const menuRef = useRef<HTMLDivElement>(null);
	const firstFocusableRef = useRef<HTMLAnchorElement>(null);
	const lastFocusableRef = useRef<HTMLButtonElement>(null);

	// Handle keyboard navigation and focus trapping
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (!isOpen) return;

			// Close on ESC key
			if (e.key === 'Escape') {
				onClose();
				return;
			}

			// Trap focus within the menu
			if (e.key === 'Tab') {
				if (e.shiftKey) {
					// If shift+tab and focus is on first element, move to last element
					if (document.activeElement === firstFocusableRef.current) {
						e.preventDefault();
						lastFocusableRef.current?.focus();
					}
				} else {
					// If tab and focus is on last element, move to first element
					if (document.activeElement === lastFocusableRef.current) {
						e.preventDefault();
						firstFocusableRef.current?.focus();
					}
				}
			}
		};

		// Focus the first element when menu opens
		if (isOpen) {
			setTimeout(() => {
				firstFocusableRef.current?.focus();
			}, 100);
		}

		document.addEventListener('keydown', handleKeyDown);
		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [isOpen, onClose]);

	return (
		<div
			ref={menuRef}
			className={`fixed top-0 right-0 h-dvh w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
				isOpen ? 'translate-x-0' : 'translate-x-full'
			}`}
			aria-hidden={!isOpen}
			role="dialog"
			aria-modal={isOpen}
			aria-label="Mobile navigation menu"
		>
			<div className="flex flex-col p-6">
				<div className="flex justify-end mb-6">
					<button
						ref={lastFocusableRef}
						onClick={onClose}
						className="text-black hover:text-slate-600"
						aria-label="Close menu"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>
				<nav className="flex flex-col space-y-4">
					<NavLink
						ref={firstFocusableRef}
						href="#presentation-section"
						className="py-2 border-b border-gray-200"
					>
						Quién Soy
					</NavLink>
					<NavLink
						href="#psychoanalysis-section"
						className="py-2 border-b border-gray-200"
					>
						Psicoanálisis
					</NavLink>
					<NavLink
						href="#faqs-section"
						className="py-2 border-b border-gray-200"
					>
						FAQs
					</NavLink>
					<NavLink href="#cta-section" className="py-2">
						Contacto
					</NavLink>
				</nav>
				{/* <div className="mt-6">
					<button
						className="w-full text-base font-bold rounded-lg border-2 bg-slate-600 bg-opacity-30 border-slate-600 h-[37px] text-slate-600 hover:bg-opacity-40 transition-colors"
						aria-label="Reservar turno"
					>
						RESERVAR TURNO
					</button>
				</div> */}
			</div>
		</div>
	);
};

export default MobileMenu;
