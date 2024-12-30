import React from 'react'

import TestimonialItem from '@/components/modules/TestimonialItem/TestimonialItem'

import styles from "@/styles/About.module.css"

function Testimonial({data}) {
  return (
    <div class="container-fluid py-5">
      <div class="container">
        <div class="section-title">
          <h4
            class={`${styles.text_primary} text-uppercase  font_vazir_Light`}
            style={{ letterSpacing: "5px" }}
          >
            نظرات
          </h4>
          <h1 class={` ${styles.display_4}  font_vazir_ExtraBold`}>مشتریان درباره ما چه می گویند</h1>
        </div>
        <div class="owl-carousel testimonial-carousel">
          {data.slice(0, 4).map((comment) => (
            <TestimonialItem {...comment} key={comment.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonial
