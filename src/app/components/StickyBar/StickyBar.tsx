'use client';

import { useEffect } from 'react';
import { useState } from 'react';
import { BiSolidConversation } from 'react-icons/bi';
import { FaArrowUp } from 'react-icons/fa';

export const StickyBar: React.FC = () => {
	return (
		<div className="flex flex-row justify-between fixed w-full p-4 bottom-0">
			<button className="rounded-full bg-[#523f7d4f] border-2 border-523f7d text-523f7d p-2 cursor-pointer animate-bounce animate-infinite">
				<BiSolidConversation />
			</button>
			<ScrollToTopButton />
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

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<button
			className={`rounded-full bg-[#523f7d4f] border-2 border-523f7d text-523f7d p-2 cursor-pointer ${
				isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
			}`}
			onClick={scrollToTop}
		>
			<FaArrowUp />
		</button>
	);
};
