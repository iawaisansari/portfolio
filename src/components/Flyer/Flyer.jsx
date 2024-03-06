import React, { useContext, useState, useRef, useEffect } from "react";
import "./Flyer.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Flyer1 from "../../img/flyer1.jpg";
import Flyer2 from "../../img/flyer2.jpg";
import Flyer3 from "../../img/flyer3.jpg";
import Flyer4 from "../../img/flyer4.jpg";
import Modal from "react-modal";
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { themeContext } from "../../Context";

const Flyer = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const modalRef = useRef();

  const openModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutsideModal = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutsideModal);
    } else {
      document.removeEventListener("mousedown", handleClickOutsideModal);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideModal);
    };
  }, [isOpen]);

  const images = [
    { original: Flyer1 },
    { original: Flyer2 },
    { original: Flyer3 },
    { original: Flyer4 }
  ];

  return (
    <div className="Flyer" id="Flyer">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Flyer Design</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="Flyer-slider"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image.original} alt="" onClick={() => openModal(image.original)} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal */}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            zIndex: 1000,
          },
          content: {
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            border: "none",
            background: "none",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
        }}
        ref={modalRef}
      >
        <div style={{ maxWidth: "80%", maxHeight: "80%" }}>
          <ImageGallery
            items={images}
            showPlayButton={false}
            showFullscreenButton={false}
            startIndex={images.findIndex(img => img.original === selectedImage)}
            onSlide={currentIndex => setSelectedImage(images[currentIndex].original)}
          />
        </div>

        <button
          onClick={closeModal}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            backgroundColor: "transparent",
            border: "none",
            color: "white",
            fontSize: "20px",
            cursor: "pointer",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </Modal>
    </div>
  );
};

export default Flyer;
