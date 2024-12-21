import React from "react";
import styles from "@/styles/Slider.module.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

function Slider() {
  return (
    <Swiper
      // rewind={true}
      loop={true}
      navigation={true}
      modules={[Navigation]}
      className={styles.swiper}
    >
<SwiperSlide className={styles.swiper_slide}>
  <video 
    autoPlay 
    muted 
    loop 
    id="bg-video" 
    className={styles.video_background}
  >
    <source src="/images/film/film-1.mp4" type="video/mp4" />
  </video>
  <div className={`${styles.slider_caption} d-flex flex-column align-items-center justify-content-center`}>
    <h2 className={`text-primary font-weight-medium m-0  font_vazir_medium  ${styles.h2_heading}`}>
      برای شما بهترین ها را به ارمغان آوردیم
    </h2>
    <h1 className="display-1 text-white m-0  font_vazir_medium ">در کنار شماییم</h1>
    <h2 className="text-white m-0  font_vazir_medium ">* از سال 1395 *</h2>
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
    <source src="/images/film/film-5.mp4" type="video/mp4" />
  </video>
  <div className={`${styles.slider_caption} d-flex flex-column align-items-center justify-content-center`}>
    <h2 className={`text-primary font-weight-medium m-0  font_vazir_medium  ${styles.h2_heading}`}>
      بهترین قهوه از دل جنگل های اتیوپی
    </h2>
    <h1 className="display-1 text-white m-0 font_vazir_medium">از آفریقا تا ایران</h1>
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
    <source src="/images/film/film-2.mp4" type="video/mp4" />
  </video>
  <div className={`${styles.slider_caption} d-flex flex-column align-items-center justify-content-center`}>
    <h2 className={`text-primary font-weight-medium m-0  font_vazir_medium  ${styles.h2_heading}`}>
      8 سال بهترین در مشتری مداری
    </h2>
    <h1 className="display-1 text-white m-0 font_vazir_medium">در کنار خاطرات شما</h1>
  </div>
</SwiperSlide>
<SwiperSlide
        className={styles.swiper_slide}
        style={{ backgroundImage: 'url("/images/slider/slider-3.jpg")' }}
      >
        <div
          class={`${styles.slider_caption} d-flex flex-column align-items-center justify-content-center`}
        >
          <h2 className={`text-primary font-weight-medium m-0  font_vazir_medium  ${styles.h2_heading}`}>
            محیطی آرامش بخش
          </h2>
          <h1 class="display-1 text-white m-0 font_vazir_medium">در کافه آرامش</h1>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;
