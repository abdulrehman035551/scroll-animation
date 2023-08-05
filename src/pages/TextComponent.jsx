import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TextComponent = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;
    
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsVisible(prevScrollPos > currentScrollPos);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (<div style={{width:"100vw", height:"100vh"}}>
    <motion.div 
      initial={{ y: isVisible ? 0 : 10 }}
      animate={{ y: isVisible ? 0 : -50 }}
      transition={{ type: 'spring', damping: 0, stiffness: 100 }}
      style={{
        position: 'relative', // To allow the element to move
        width: '100%',
        heightL:"100vh",
        textAlign: 'center',
        fontSize: '2rem',
        marginTop: '100px', // Adding margin for better visibility
      }}
    >
      Scroll up to move the text up!
    </motion.div>
    </div>
  );
};

export default TextComponent;
