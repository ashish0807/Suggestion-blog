import React from 'react'
import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const lottieAnimation = () => {
  const container = useRef(null);
  const animationInstance = useRef(null);

  useEffect(() => {

    if (animationInstance.current) {
      animationInstance.current.destroy(); // Destroy any existing animation instance
    }
    
    // Load animation
    animationInstance.current = lottie.loadAnimation({
      container: container.current, // The ref to the container
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../public/lottie.json'), // Path to your Lottie animation JSON file
    });

    // Cleanup function to destroy animation on component unmount
    return () => {
      if (animationInstance.current) {
        animationInstance.current.destroy();
      }
    };
  }, []);

  return <div ref={container} style={{ height: '500px', width: '500px' }}></div>;
}

export default lottieAnimation

