'use client';

import NavLink from './NavLink';

interface MobileMenuProps {
	isOpen: boolean;
	onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
	return (
		<div
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
						href="#presentation-section"
						onClick={onClose}
						className="py-2 border-b border-gray-200"
					>
						Quién Soy
					</NavLink>
					<NavLink
						href="#psychoanalysis-section"
						onClick={onClose}
						className="py-2 border-b border-gray-200"
					>
						Psicoanálisis
					</NavLink>
					<NavLink
						href="#faqs-section"
						onClick={onClose}
						className="py-2 border-b border-gray-200"
					>
						FAQs
					</NavLink>
					<NavLink
						href="#cta-section"
						onClick={onClose}
						className="py-2"
					>
						Contacto
					</NavLink>
				</nav>
			</div>
		</div>
	);
};

export default MobileMenu;
