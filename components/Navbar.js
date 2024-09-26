// components/Navbar.js
import Link from 'next/link';
import { styled } from '@mui/material/styles';

const Nav = styled('nav')({
  position: 'fixed',
  left: 10,
  top: '50%',
  transform: 'translateY(-50%)',
  width: '80px',
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  backdropFilter: 'blur(10px)',
  borderRadius: '10px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
  padding: '10px',
});

const NavItem = styled(Link)({
  margin: '15px 0',
  padding: '10px',
  color: '#fff',
  textDecoration: 'none',
  fontSize: '18px',
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.2)',
  },
});

const Navbar = () => {
  return (
    <Nav>
      <NavItem href="/">Home</NavItem>
      <NavItem href="/gallery">Gallery</NavItem>
      <NavItem href="/contact">Contact</NavItem>
    </Nav>
  );
};

export default Navbar;
