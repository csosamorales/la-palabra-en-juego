'use client';

import { useRouter } from 'next/navigation';

interface ScrollToTopProps {
	children: React.ReactNode;
	className?: string;
}

export const ScrollToTop: React.FC<ScrollToTopProps> = ({
	children,
	className,
}) => {
	const router = useRouter();

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
		router.replace('/');
	};

	return (
		<button onClick={scrollToTop} className={className}>
			{children}
		</button>
	);
};
