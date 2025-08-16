// src/components/HeroSlider.jsx

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
 import { assets } from '../assets/assets';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



const HeroSlider = () => {
  const slides = [assets.hero1, assets.hero2, assets.hero3];

  return (
    <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]">
      <Swiper
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-full custom-swiper-nav"
      >
        {slides.map((img, index) => (
          <SwiperSlide key={index}>
        <img src={img} alt={`Slide ${index + 1}`} className="h-full w-full object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
