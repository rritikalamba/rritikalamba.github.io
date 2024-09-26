// pages/gallery.js
import { useEffect, useState } from 'react';
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
});

const GalleryContainer = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
  gap: '20px',
  justifyContent: 'center',
});

const ImageFrame = styled(motion.div)({
  border: '5px solid #fff',
  borderRadius: '10px',
  overflow: 'hidden',
  position: 'relative',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
});

const LoadMoreButton = styled(motion.button)({
  margin: '20px auto',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '20px',
  background: 'rgba(255, 255, 255, 0.5)',
  color: '#fff',
  cursor: 'pointer',
  transition: 'background 0.3s',
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.8)',
  },
});

const categories = ['Gallery'];

const GalleryPage = () => {
  const [images, setImages] = useState([]);
  const [visibleImages, setVisibleImages] = useState(20);

  useEffect(() => {
    // Simulate fetching images from a folder
    const fetchedImages = Array.from({ length: 105 }, (_, i) => `images/image${i + 1}.jpg`);
    setImages(fetchedImages);
  }, []);

  const loadMoreImages = () => {
    setVisibleImages((prev) => prev + 40 );
  };

  return (
    <>
      <Navbar />
      <Container>
        {categories.map((category) => (
          <div key={category}>
            <h2>{category}</h2>
            <GalleryContainer>
              {images.slice(0, visibleImages).map((src, index) => (
                <ImageFrame
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <img src={src} alt={`Image ${index + 1}`} />
                </ImageFrame>
              ))}
            </GalleryContainer>
          </div>
        ))}
        {visibleImages < images.length && (
          <LoadMoreButton
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={loadMoreImages}
          >
            Load More
          </LoadMoreButton>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default GalleryPage;
