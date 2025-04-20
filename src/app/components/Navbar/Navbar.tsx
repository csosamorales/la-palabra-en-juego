'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import NavLink from './NavLink';
import Link from 'next/link';
import MobileMenu from './MobileMenu';
import { Overlay } from './Overlay';
import { RxHamburgerMenu } from 'react-icons/rx';
import { LINKS } from '@/app/constants';

import { ScrollToTop } from '../ScrollToTop/ScrollToTop';

const Navbar: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuButtonRef = useRef<HTMLButtonElement>(null);

	const [hidden, setHidden] = useState(false);
	const [lastScrollY, setLastScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			if (currentScrollY > lastScrollY && currentScrollY > 50) {
				setHidden(true);
			} else {
				setHidden(false);
			}
			setLastScrollY(currentScrollY);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [lastScrollY]);

	// Handle focus when menu closes
	useEffect(() => {
		if (!isMenuOpen) {
			// Return focus to menu button when menu closes
			menuButtonRef.current?.focus();
		}
	}, [isMenuOpen]);

	// Handle body scroll lock when menu is open
	useEffect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}

		return () => {
			document.body.style.overflow = '';
		};
	}, [isMenuOpen]);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<>
			<nav
				className={`fixed top-0 left-0 transition-transform duration-500 flex justify-between items-center px-4 sm:px-9 w-full min-h-16 backdrop-blur-[2px] bg-transparent bg-opacity-0 z-50 animate-fade-down animate-once animate-duration-1000 animate-delay-200 ${
					hidden ? '-translate-y-full' : 'translate-y-0'
				}`}
				role="navigation"
				aria-label="Main Navigation"
			>
				<div className="flex items-center">
					<ScrollToTop>
						<Image
							src="./logo-divan.svg"
							width={50}
							height={50}
							alt="Logo La palabra en juego"
							className="cursor-pointer 2xl:w-[70px] 2xl:h-[70px]"
							loading='lazy'
						/>
					</ScrollToTop>
				</div>

				<div className="flex gap-4 items-center max-sm:hidden">
					<NavLink href="#presentation-section">Quién Soy</NavLink>
					<NavLink href="#psychoanalysis-section">
						Psicoanálisis
					</NavLink>
					<NavLink href="#faqs-section">FAQs</NavLink>
					<NavLink href="#cta-section">Contacto</NavLink>
				</div>

				<div className="flex items-center">
					<Link
						href={LINKS.calendly}
						target="_blank"
						rel="noopener noreferrer"
						className="text-base 2xl:text-2xl py-0.5 px-1 font-bold rounded-lg border-2 cursor-pointer bg-[#523f7d4f] border-523f7d text-523f7d font-title hover:scale-110 transition-transform duration-500 ease-out"
						aria-label="Reservar turno"
					>
						RESERVAR TURNO
					</Link>
					<button
						ref={menuButtonRef}
						className="ml-4 block sm:hidden"
						aria-label="Toggle menu"
						aria-expanded={isMenuOpen}
						onClick={toggleMenu}
					>
						<RxHamburgerMenu size={24} />
					</button>
					<MobileMenu
						isOpen={isMenuOpen}
						onClose={() => setIsMenuOpen(false)}
					/>
					<Overlay
						isVisible={isMenuOpen}
						onClick={() => setIsMenuOpen(false)}
					/>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
