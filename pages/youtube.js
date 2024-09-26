// pages/youtube.js
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Container = styled('div')({
  padding: '20px',
  background: 'linear-gradient(135deg, #f5a6b7, #f7c0d7)',
  minHeight: '100vh',
  color: '#fff',
  textAlign: 'center',
});

const SocialIcons = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  marginTop: '20px',
  '& a': {
    color: '#fff',
    fontSize: '24px',
    transition: 'color 0.3s',
    '&:hover': {
      color: '#f7c0d7',
    },
  },
});

const YouTubePage = () => {
  return (
    <>
      <Navbar />
      <Container>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          Contact Me
        </motion.h1>
        <motion.p
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 120 }}
        >
          Email: model@example.com
        </motion.p>
        <motion.p
          initial={{ x: '100vw' }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 120 }}
        >
          Phone: +123 456 7890
        </motion.p>
        <SocialIcons>
          <motion.a
            href="https://facebook.com"
            target="_blank"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="fab fa-facebook"></i>
          </motion.a>
          <motion.a
            href="https://instagram.com"
            target="_blank"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="fab fa-instagram"></i>
          </motion.a>
          <motion.a
            href="https://twitter.com"
            target="_blank"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="fab fa-twitter"></i>
          </motion.a>
        </SocialIcons>
      </Container>
      <Footer />
    </>
  );
};

export default YouTubePage;
