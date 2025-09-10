"use client"
import React from "react";
import styles from "@/styles/Slider.module.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";

function Slider() {
  return (
    <Swiper
      loop={true}
      navigation={true}
      autoplay={{
        delay: 8000, // مدت زمان به میلی‌ثانیه، ۱۰ ثانیه
        disableOnInteraction: false,
      }}
      modules={[Navigation, Autoplay]}
      className={styles.swiper}
    >
      <SwiperSlide className={styles.swiper_slide}>
        <video 
          autoPlay 
          muted 
          id="bg-video" 
          className={styles.video_background}
        >
          <source src="https://v.ftcdn.net/01/58/39/40/700_F_158394014_bAFlrOIGVNBlKLFYzrbP49ClDDoyOfoq_ST.mp4" type="video/mp4" />
        </video>
        <div className={`${styles.slider_caption} d-flex flex-column align-items-center justify-content-center`}>
          <h2 className={`text-primary font-weight-medium m-0  font_vazir_Medium  ${styles.h2_heading}`}>
            برای شما بهترین ها را به ارمغان آوردیم
          </h2>
          <h1 className={`display-1 text-white m-0  font_vazir_Medium ${styles.h1_heading} `}>در کنار شماییم</h1>
          <h2 className={` ${styles.heading_sub} text-white m-0  font_vazir_Medium `}>* از سال 1395 *</h2>
        </div>
      </SwiperSlide>
      <SwiperSlide className={styles.swiper_slide}>
        <video 
          autoPlay 
          muted 
          loop 
          id="bg-video" 
          className={styles.video_background}
        >
          <source src="https://v.ftcdn.net/10/89/68/38/700_F_1089683853_eeU7d39A7M7Ps5Jg9f6BCbkkjPR2JuNp_ST.mp4" type="video/mp4" />
        </video>
        <div className={`${styles.slider_caption} d-flex flex-column align-items-center justify-content-center`}>
          <h2 className={`text-primary font-weight-medium m-0  font_vazir_Medium  ${styles.h2_heading}`}>
            بهترین قهوه از دل جنگل های اتیوپی
          </h2>
          <h1 className={`display-1 text-white m-0  font_vazir_Medium ${styles.h1_heading} `}>از آفریقا تا ایران</h1>
        </div>
      </SwiperSlide>
      <SwiperSlide className={styles.swiper_slide}>
        <video 
          autoPlay 
          muted 
          loop 
          id="bg-video" 
          className={styles.video_background}
        >
          <source src="https://v.ftcdn.net/05/52/10/31/700_F_552103110_HlYV2FtvyWiaNXmNwZftqpLkRz2NEdeV_ST.mp4" type="video/mp4" />
        </video>
        <div className={`${styles.slider_caption} d-flex flex-column align-items-center justify-content-center`}>
          <h2 className={`text-primary font-weight-medium m-0  font_vazir_Medium  ${styles.h2_heading}`}>
            8 سال بهترین در مشتری مداری
          </h2>
          <h1 className={`display-1 text-white m-0  font_vazir_Medium ${styles.h1_heading} `}>در کنار خاطرات شما</h1>
        </div>
      </SwiperSlide>
      <SwiperSlide
        className={styles.swiper_slide}
        style={{ backgroundImage: 'url("/images/slider/slider-3.jpg")' }}
      >
        <div
          className={`${styles.slider_caption} d-flex flex-column align-items-center justify-content-center`}
        >
          <h2 className={`text-primary font-weight-medium m-0  font_vazir_Medium  ${styles.h2_heading}`}>
            محیطی آرامش بخش
          </h2>
          <h1 className={`display-1 text-white m-0  font_vazir_Medium ${styles.h1_heading} `}>در کافه آرامش</h1>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;
