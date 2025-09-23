"use client";
import styles from "@/styles/Product.module.css";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import TestimonialItem from "@/components/modules/TestimonialItem/TestimonialItem";

export default function ProductComment({ product }) {
  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="section-title">
          <h4
            className={`${styles.text_primary} font_vazir_Light ${styles.text_uppercase}`}
            style={{ letterSpacing: "5px" }}
          >
            نظرات شما
          </h4>
          <h1 className={`${styles.display_4} font_vazir_ExtraBold`}>
            تجربیات شما از این محصول
          </h1>
        </div>
        <div className="row">
          {product.comments && product.comments.length > 0 ? (
            <Swiper
              loop={true}
              slidesPerView={1}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
            >
              {product.comments.map(
                (comment) =>
                  comment.isAccept && (
                    <SwiperSlide
                      className={styles.swiper_slide}
                      key={comment._id}
                    >
                      <TestimonialItem key={comment._id} {...comment} />
                    </SwiperSlide>
                  )
              )}
            </Swiper>
          ) : (
            <div className={styles.no_comments}>
              <p>نظری برای این محصول وجود ندارد</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
