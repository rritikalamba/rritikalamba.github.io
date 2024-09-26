// pages/contact.js
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Container = styled('div')({
  padding: '40px',
  background: 'linear-gradient(135deg, #e0c3fc, #8ec5fc)',
  minHeight: '100vh',
  color: '#fff',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const ContactForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '40px',
  '& input, & textarea': {
    padding: '10px',
    borderRadius: '10px',
    border: 'none',
    width: '100%',
    maxWidth: '500px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  '& button': {
    padding: '10px 20px',
    borderRadius: '20px',
    border: 'none',
    background: 'rgba(255, 255, 255, 0.1)',
    color: '#fff',
    cursor: 'pointer',
    transition: 'background 0.3s',
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.5)',
    },
  },
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
      color: '#e0c3fc',
    },
  },
});

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <Container>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          Get in Touch
        </motion.h1>
        <ContactForm>
          <motion.input
            type="text"
            placeholder="Your Name"
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 120 }}
          />
          <motion.input
            type="email"
            placeholder="Your Email"
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 120 }}
          />
          <motion.textarea
            placeholder="Your Message"
            rows="5"
            initial={{ y: '100vh' }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 120 }}
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Send Message
          </motion.button>
        </ContactForm>
        <motion.p
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 120 }}
        >
          Email: ritikalambawork@gmail.com
        </motion.p>
        <motion.p
          initial={{ x: '100vw' }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 120 }}
        >
          Phone: +918700759399
        </motion.p>
        <motion.p
          initial={{ y: '100vh' }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 120 }}
        >
          {/* Address: 123 Model Lane, Fashion City, USA */}
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

export default ContactPage;
