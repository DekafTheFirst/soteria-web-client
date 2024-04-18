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
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import OptimizedImage from '../OptimizedImage/OptimizedImage';

export default function App() {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false
        }}
        loop={true}
        navigation={true}
        modules={[Pagination, Autoplay, EffectFade, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><OptimizedImage src="/assets/sermon.jpg" style={{ width: "100%", height: "100%" }} className='hero-img' /></SwiperSlide>
        <SwiperSlide><OptimizedImage src="/assets/wisdom-and-power.jpg" style={{ width: "100%", height: "100%" }} className='hero-img' /></SwiperSlide>
        <SwiperSlide><OptimizedImage src="/assets/preaching.jpg" style={{ width: "100%", height: "100%" }} className='hero-img' /></SwiperSlide>

      </Swiper>
    </>
  );
}
