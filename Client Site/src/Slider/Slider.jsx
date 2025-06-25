import React, { useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";

import { Autoplay, EffectCoverflow } from "swiper/modules";
import 'swiper/css/autoplay';

// import { useNavigate } from "react-router";

import Slider_Banner from "./Slider_Banner";

const Slider = ({data}) => {
  // const [data, setData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
//   const navigate = useNavigate();
  // const { setData } = useContext(AuthContext);

//   const handleClick = (appData) => {
//     const data = localStorage.getItem("AppData");
//     if (data) {
//       localStorage.removeItem("AppData");
//     }
//     localStorage.setItem("AppData", JSON.stringify(appData));
//     navigate("/about");
//   };

  return (
      <Swiper onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      effect={'coverflow'}
      modules={[Autoplay, EffectCoverflow]}
          spaceBetween={50}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay
      
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        640: {
          slidesPerView: 1.2,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 1.5,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1280: {
          slidesPerView: 2.5,
          spaceBetween: 40,
        },
      }}
      className="w-full"
    >
    
        {data.map((feature , index) => {
          return <SwiperSlide> <Slider_Banner key={feature.id} feature={feature} isActive={index === activeIndex}/> </SwiperSlide>;
        })}
      
      {/* <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide> */}
     
    </Swiper>
  );
};

export default Slider;