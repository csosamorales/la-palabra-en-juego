'use client';

import Link from 'next/link';
import React, { forwardRef } from 'react';

interface NavLinkProps {
	href?: string;
	children: React.ReactNode;
	className?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
	({ href = '#', children, className = '' }, ref) => {
		return (
			<Link
				ref={ref}
				href={href}
				className={`text-base text-center text-black hover:scale-110 transition-transform duration-700 ease-out ${className}`}
			>
				{children}
			</Link>
		);
	}
);

NavLink.displayName = 'NavLink';

export default NavLink;
