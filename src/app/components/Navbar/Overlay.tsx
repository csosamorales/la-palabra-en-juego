'use client';

import React from 'react';

interface OverlayProps {
	isVisible: boolean;
	onClick: () => void;
}

export const Overlay: React.FC<OverlayProps> = ({ isVisible, onClick }) => {
	if (!isVisible) return null;

	return (
		<div
			className="fixed inset-0 h-dvh backdrop-blur-[2px] bg-transparent bg-opacity-0 z-40 transition-opacity duration-300"
			onClick={onClick}
			aria-hidden="true"
			role="presentation"
		/>
	);
};
