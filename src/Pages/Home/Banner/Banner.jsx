/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Banner.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Banner = () => {
  return (
    <div>
      <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper max-h-[600px]"
        >
          <SwiperSlide>
            <div className="swiper-image">
              <img src="https://i.imgur.com/FsIXvFK.jpg" alt="" />{" "}
              <div className="z-30">
                <h2 className="text-white text-4xl font-bold">
                  Your Text Here
                </h2>
                <p className="text-white text-lg">More text can go here</p>
              </div>{" "}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-image">
              <img src="https://i.imgur.com/1PYD0b6.jpg" alt="" />{" "}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-image">
              <img src="https://i.imgur.com/0qL8aep.jpg" alt="" />{" "}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-image">
              <img src="https://i.imgur.com/fZn7RWh.jpg" alt="" />{" "}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-image">
              <img src="https://i.imgur.com/oaN8jQn.jpg" alt="" />{" "}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-image">
              <img src="https://i.imgur.com/7n6G5kA.jpg" alt="" />{" "}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-image">
              <img src="https://i.imgur.com/WloVTsD.jpg" alt="" />{" "}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-image">
              <img src="https://i.imgur.com/UsHda9U.jpg" alt="" />{" "}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-image">
              <img src="https://i.imgur.com/oaN8jQn.jpg" alt="" />{" "}
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default Banner;
