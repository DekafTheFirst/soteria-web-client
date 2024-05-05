import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './MySwiper.css';
import '../../App.css'

// import required modules
import { Autoplay, EffectFade, Keyboard, Navigation, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true
        }}
        // autoplay={{
          
        //   delay: 2000,
        //   disableOnInteraction: false,
        //   pauseOnMouseEnter: false
        // }}
        keyboard={
          true
        }
        loop={true}
        navigation={true}
        modules={[Pagination, Autoplay, EffectFade, Navigation, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide><div className='hero-img hero-img-1'></div></SwiperSlide>
        <SwiperSlide><div className='hero-img hero-img-2'></div></SwiperSlide>
        <SwiperSlide><div className='hero-img hero-img-3'></div></SwiperSlide>

      </Swiper>
    </>
  );
}
