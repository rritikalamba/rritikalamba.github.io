// pages/index.js
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Container = styled('div')({
  padding: '20px',
  background: 'linear-gradient(135deg, #e0c3fc, #8ec5fc)',
  minHeight: '100vh',
  color: '#fff',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const ProfilePicture = styled(motion.img)({
  width: '300px',
  height: '300px',
  borderRadius: '50%',
  border: '5px solid #fff',
  marginBottom: '20px',
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

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Container>
        <ProfilePicture 
          src="images/image71.jpg" 
          alt="Profile Picture"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          Welcome to My Portfolio
        </motion.h1>
        <motion.p
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 120 }}
        >
          Hi, I am a professional model showcasing my work and projects.
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

export default HomePage;
