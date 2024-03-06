import React, { useState, useEffect } from 'react';
import './ScrollToTopButton.css'; // Import CSS file for styling

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <button className="scroll-to-top-button" onClick={scrollToTop}>
          <span role="img" aria-label="arrow-up">&#8593;</span>
          {/* Up arrow */}
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
