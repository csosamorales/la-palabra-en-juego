'use client';

import Link from 'next/link';
import React, { forwardRef } from 'react';

interface NavLinkProps {
	href?: string;
	children: React.ReactNode;
	className?: string;
	onClick?: React.MouseEventHandler<HTMLAnchorElement> | undefined;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
	({ href = '#', children, className = '', onClick }, ref) => {
		return (
			<Link
				ref={ref}
				href={href}
				onClick={onClick}
				className={`text-base text-center 2xl:text-3xl text-black hover:scale-110 transition-transform duration-700 ease-out ${className}`}
			>
				{children}
			</Link>
		);
	}
);

NavLink.displayName = 'NavLink';

export default NavLink;
