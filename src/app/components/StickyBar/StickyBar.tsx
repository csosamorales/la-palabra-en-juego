'use client';

import { useEffect } from 'react';
import { useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { FloatingContactButton } from '../FloatingButton/FloatingContactButton';
import { ScrollToTop } from '../ScrollToTop/ScrollToTop';

export const StickyBar: React.FC = () => {
	return (
		<div className="flex flex-row justify-between fixed w-full p-5 bottom-0">
			<ScrollToTopButton />
			<FloatingContactButton />
		</div>
	);
};

const ScrollToTopButton: React.FC = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.scrollY > 300) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener('scroll', toggleVisibility);
		return () => window.removeEventListener('scroll', toggleVisibility);
	}, []);

	return (
		<ScrollToTop
			className={`rounded-full bg-[#523f7d4f] border-2 border-523f7d text-523f7d p-2 cursor-pointer ${
				isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
			}`}
		>
			<FaArrowUp size={24} />
		</ScrollToTop>
	);
};
