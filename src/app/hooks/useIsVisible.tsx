'use client';

import { useEffect, useState } from 'react';

/**
 * Custom hook to check if an element is visible in the viewport using Intersection Observer API.
 * @param {React.RefObject<HTMLElement>} ref - The ref of the element to observe.
 * @returns {boolean} - Returns true if the element is visible, false otherwise.
 */

type useIsVisibleProps = {
	ref: React.RefObject<HTMLElement | null>;
};

export function useIsVisible({ ref }: useIsVisibleProps) {
	const [isIntersecting, setIntersecting] = useState(false);

	useEffect(() => {
		if (!ref.current) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && !isIntersecting) {
					// only trigger the animation once
					setIntersecting(entry.isIntersecting);

					if (ref.current) {
						observer.unobserve(ref.current);
					}
				}
			},
			{ threshold: 0.1 }
		);

		observer.observe(ref.current);
		return () => {
			observer.disconnect();
		};
	}, [ref, isIntersecting]);

	return isIntersecting;
}
