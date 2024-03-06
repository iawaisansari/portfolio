import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import Fiverrclient from "../../img/Fiverrclient.png"

const Testimonial = () => {
  const clients = [
    {
      img: Fiverrclient,
      review:
        "He is amazing person. follow all my instruction and his contribution brought my farewell video to success. everytime again my bro. thanks from china your german/turkish friend.",
    },
    {
      img: Fiverrclient,
      review:
        "Thanks so much for the quick turn around! Very happy with the design of a banner for my website. I'll definitely be using your services again. ",
    },
    {
      img: Fiverrclient,
      review:
        "Quick to respond, flexible and easy to work with. Will be working with again in the future.",
    },
    {
      img: Fiverrclient,
      review:
        "Awesome service and amazingly quick at short notice. Thank you!",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
