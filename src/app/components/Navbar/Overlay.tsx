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
			className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
			onClick={onClick}
			aria-hidden="true"
			role="presentation"
		/>
	);
};
