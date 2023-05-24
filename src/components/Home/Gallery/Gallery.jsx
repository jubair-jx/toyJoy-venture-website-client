import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import AOS from "aos";
import "aos/dist/aos.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { EffectCoverflow, Pagination } from "swiper";

import galler1 from "../../../assets/images/kids.webp";
import galler2 from "../../../assets/images/kids7.avif";
import galler3 from "../../../assets/images/kids3.webp";
import galler4 from "../../../assets/images/kids4.webp";
import galler5 from "../../../assets/images/kids5.webp";
import galler6 from "../../../assets/images/kids6.avif";
import galler7 from "../../../assets/images/kids7.avif";
import galler8 from "../../../assets/images/toy.webp";
import galler9 from "../../../assets/images/toy1.webp";
import galler10 from "../../../assets/images/toy2.webp";

const Gallery = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
  return (
    <div>
      <h1
        data-aos="fade-up"
        className="text-center bg-gradient-to-r animate-text from-gray-800 via-orange-500 to-violet-300 bg-clip-text text-transparent mt-8 font-bold text-4xl px-20"
      >
        Toys Gallery
      </h1>

      <div data-aos="fade-up" className="mt-12">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          slidesPerView={2}
          coverflowEffect={{
            rotate: 45,
            stretch: 0,
            depth: 150,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={false}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <div data-aos="fade-up" className="swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <SwiperSlide key={1}>
                  <div>
                    <img
                      className="p-4 sm:w-1/2 h-[300px] md:h-96  md:w-96 lg:w-96 rounded-3xl"
                      src={galler1}
                    />
                  </div>
                </SwiperSlide>
              </div>
              <div className="swiper-slide">
                <SwiperSlide key={2}>
                  <div>
                    <img
                      className="sm:w-1/2 h-[300px] md:h-96 md:w-96 lg:w-96 rounded-3xl"
                      src={galler2}
                    />
                  </div>
                </SwiperSlide>
              </div>
              <div className="swiper-slide">
                <SwiperSlide key={3}>
                  <div>
                    <img
                      className="sm:w-1/2 h-[300px] md:h-96 md:w-96 lg:w-96 rounded-3xl"
                      src={galler4}
                    />
                  </div>
                </SwiperSlide>
              </div>
              <div className="swiper-slide">
                <SwiperSlide key={4}>
                  <div>
                    <img
                      className="sm:w-1/2 h-[300px] md:h-96 md:w-96 lg:w-96 rounded-3xl"
                      src={galler3}
                    />
                  </div>
                </SwiperSlide>
              </div>
              <div className="swiper-slide">
                <SwiperSlide key={5}>
                  <div>
                    <img
                      className="sm:w-1/2 h-[300px] md:h-96 md:w-96 lg:w-96 rounded-3xl"
                      src={galler5}
                    />
                  </div>
                </SwiperSlide>
              </div>
              <div className="swiper-slide">
                <SwiperSlide key={6}>
                  <div>
                    <img
                      className="sm:w-1/2 h-[300px] md:h-96 md:w-96 lg:w-96 rounded-3xl"
                      src={galler6}
                    />
                  </div>
                </SwiperSlide>
              </div>
              <div className="swiper-slide">
                <SwiperSlide key={7}>
                  <div>
                    <img
                      className="sm:w-1/2 h-[300px] md:h-96 md:w-96 lg:w-96 rounded-3xl"
                      src={galler7}
                    />
                  </div>
                </SwiperSlide>
              </div>
              <div className="swiper-slide">
                <SwiperSlide key={8}>
                  <div>
                    <img
                      className="sm:w-1/2 h-[300px] md:h-96 md:w-96 lg:w-96 rounded-3xl"
                      src={galler3}
                    />
                  </div>
                </SwiperSlide>
              </div>
              <div className="swiper-slide">
                <SwiperSlide key={9}>
                  <div>
                    <img
                      className="sm:w-1/2 h-[300px] md:h-96 md:w-96 lg:w-96 rounded-3xl"
                      src={galler8}
                    />
                  </div>
                </SwiperSlide>
              </div>
              <div className="swiper-slide">
                <SwiperSlide key={10}>
                  <div>
                    <img
                      className="sm:w-1/2 h-[300px] md:h-96 md:w-96 lg:w-96 rounded-3xl"
                      src={galler9}
                    />
                  </div>
                </SwiperSlide>
              </div>
              <div className="swiper-slide">
                <SwiperSlide key={11}>
                  <div>
                    <img
                      className="sm:w-1/2 h-[300px] md:h-96 md:w-96 lg:w-96 rounded-3xl"
                      src={galler10}
                    />
                  </div>
                </SwiperSlide>
              </div>
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Gallery;
