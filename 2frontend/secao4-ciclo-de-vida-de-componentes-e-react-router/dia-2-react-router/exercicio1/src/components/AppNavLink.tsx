import { useLocation } from 'react-router-dom';
import { Navbar } from 'flowbite-react';

export interface AppNavLinkProps {
  to: string;
  children: string;
}

export default function AppNavLink(props: AppNavLinkProps) {
  const location = useLocation();
  // const history = useHistory();

  const { to, children } = props;

  return (
    // onClick={() => history.push(props.to)}
    <Navbar.Link href={to} active={location.pathname === to}>
      {children}
    </Navbar.Link>
  );
}
