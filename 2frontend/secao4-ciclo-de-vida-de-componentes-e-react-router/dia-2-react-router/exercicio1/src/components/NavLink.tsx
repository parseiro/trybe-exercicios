import { Link, useLocation } from 'react-router-dom';
import React from 'react';

interface NavLinkParams {
  to: string;
  children: string | [];
  activeClass: string;
  inactiveClass: string;
}

export function NavLink({ to, children, activeClass, inactiveClass }: NavLinkParams) {
  const location = useLocation().pathname;
  const className = to === location ? activeClass : inactiveClass;

  return (
    <Link to={to} className={className} aria-current="page">
      {children}
    </Link>
  );
}
