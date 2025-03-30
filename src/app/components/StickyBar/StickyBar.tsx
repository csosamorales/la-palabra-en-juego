'use client';

import { useEffect } from 'react';
import { useState } from 'react';
import { BiSolidConversation } from 'react-icons/bi';
import { FaArrowUp, FaWhatsapp } from 'react-icons/fa';
import { IoCalendarOutline } from 'react-icons/io5';

export const StickyBar: React.FC = () => {
	return (
		<div className="flex flex-row justify-between fixed w-full p-5 bottom-0">
			<ScrollToTopButton />
			<ContactButton />
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

const ContactButton: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div>
			<button
				className="rounded-full bg-[#523f7d4f] border-2 border-523f7d text-523f7d p-2 cursor-pointer "
				onClick={toggleMenu}
			>
				<BiSolidConversation />
			</button>

			<div
				className={`fixed w-fit bg-transparent transform transition-transform duration-300 ease-in-out z-50 ${
					isOpen
						? 'translate-y-0 bottom-[70px] right-[20px]'
						: 'translate-y-full bottom-0 right-0'
				}`}
				aria-hidden={!isOpen}
				role="dialog"
				aria-modal={isOpen}
				aria-label="Mobile navigation menu"
			>
				<div className="flex flex-col gap-2">
					<button
						className="rounded-full bg-[#523f7d4f] border-2 border-523f7d text-523f7d p-2 cursor-pointer "
						onClick={toggleMenu}
					>
						<FaWhatsapp />
					</button>
					<button
						className="rounded-full bg-[#523f7d4f] border-2 border-523f7d text-523f7d p-2 cursor-pointer "
						onClick={toggleMenu}
					>
						<IoCalendarOutline />
					</button>
				</div>
			</div>
		</div>
	);
};

// const ContactButton: React.FC = () => {
// 	return (
// 		<DropdownMenu.Root>
// 			<DropdownMenu.Trigger asChild>
// 				{/* animate-bounce animate-infinite */}
// 				<button className="rounded-full bg-[#523f7d4f] border-2 border-523f7d text-523f7d p-2 cursor-pointer ">
// 					<BiSolidConversation />
// 				</button>
// 			</DropdownMenu.Trigger>
// 			<DropdownMenu.Portal>
// 				<DropdownMenu.Content
// 					className="flex flex-col gap-2 rounded-md bg-transparent p-2 shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade"
// 					sideOffset={5}
// 					side="top"
// 				>
// 					<DropdownMenu.Item>
// 						<button className="rounded-full bg-[#523f7d4f] border-2 border-523f7d text-523f7d p-2 cursor-pointer">
// 							<BiSolidConversation />
// 						</button>
// 					</DropdownMenu.Item>
// 					<DropdownMenu.Item>
// 						<button className="rounded-full bg-[#523f7d4f] border-2 border-523f7d text-523f7d p-2 cursor-pointer">
// 							<BiSolidConversation />
// 						</button>
// 					</DropdownMenu.Item>
// 				</DropdownMenu.Content>
// 			</DropdownMenu.Portal>
// 		</DropdownMenu.Root>
// 	);
// };
