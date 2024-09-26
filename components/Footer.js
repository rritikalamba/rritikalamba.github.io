// components/Footer.js
import { styled } from '@mui/material/styles';

const FooterContainer = styled('footer')({
  textAlign: 'center',
  padding: '20px',
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  backdropFilter: 'blur(10px)',
  color: '#fff',
  position: 'relative',
  bottom: 0,
  width: '100%',
});

const Footer = () => {
  return (
    <FooterContainer>
      © {new Date().getFullYear()} Active Status
    </FooterContainer>
  );
};

export default Footer;
