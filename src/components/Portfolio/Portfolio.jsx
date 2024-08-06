import React, { useContext, useState, useRef, useEffect } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Modal from "react-modal";
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";

const Portfolio = () => {
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
    { original: Sidebar },
    { original: Ecommerce },
    { original: MusicApp },
    { original: HOC }
  ];

  return (
    <div className="portfolio" id="portfolio">
      <span>Social Media Posts</span>

      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Sidebar} alt="" onClick={() => openModal(Sidebar)} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" onClick={() => openModal(Ecommerce)} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" onClick={() => openModal(MusicApp)} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" onClick={() => openModal(HOC)} />
        </SwiperSlide>
      </Swiper>

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

export default Portfolio;
