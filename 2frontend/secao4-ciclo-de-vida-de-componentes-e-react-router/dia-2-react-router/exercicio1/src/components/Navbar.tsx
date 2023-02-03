import React from 'react';
import { Navbar as Bar } from 'flowbite-react';
import AppNavLink from './AppNavLink';

export function Navbar() {
  return (
    <Bar fluid={true} rounded={true}>
      <Bar.Toggle />
      <Bar.Collapse>
        <AppNavLink to="/">Home</AppNavLink>
        <AppNavLink to="/about">About</AppNavLink>
      </Bar.Collapse>
    </Bar>
  );
}
