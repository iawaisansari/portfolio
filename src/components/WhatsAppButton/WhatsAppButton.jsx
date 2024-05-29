import React from 'react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const handleClick = () => {
    const phoneNumber = '923035897703';
    const message = 'Hello! I need assistance.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button className="whatsapp-button" onClick={handleClick}>
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png" 
        alt="WhatsApp" 
      />
    </button>
  );
};

export default WhatsAppButton;
