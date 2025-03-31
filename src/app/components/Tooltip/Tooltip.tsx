import React from 'react';

interface TooltipProps {
	children: React.ReactNode;
	text: string;
}

export const Tooltip: React.FC<TooltipProps> = ({ children, text }) => {
	return (
		<div className="relative group inline-block">
			{children}

			<div className="absolute right-full mr-2 top-1/2 -translate-y-1/2 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out w-max bg-white text-black text-xs rounded px-2 py-1 shadow-lg">
				{text}
				<div className="absolute top-1/2 -translate-y-1/2 left-full h-0 w-0 border-t-4 border-b-4 border-l-4 border-t-transparent border-b-transparent border-l-white"></div>
			</div>
		</div>
	);
};
