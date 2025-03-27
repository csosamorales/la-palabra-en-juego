"use client";

import React, { forwardRef } from "react";

interface NavLinkProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ href = "#", children, className = "" }, ref) => {
    return (
      <a
        ref={ref}
        href={href}
        className={`text-base text-center text-black hover:text-slate-600 transition-colors ${className}`}
      >
        {children}
      </a>
    );
  },
);

NavLink.displayName = "NavLink";

export default NavLink;
