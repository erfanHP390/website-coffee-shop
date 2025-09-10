import React from 'react'

import TestimonialItem from '@/components/modules/TestimonialItem/TestimonialItem'

import styles from "@/styles/About.module.css"

function Testimonial({data}) {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="section-title">
          <h4
            className={`${styles.text_primary} text-uppercase  font_vazir_Light`}
            style={{ letterSpacing: "5px" }}
          >
            نظرات
          </h4>
          <h1 className={` ${styles.display_4}  font_vazir_ExtraBold`}>مشتریان درباره ما چه می گویند</h1>
        </div>
        <div className="owl-carousel testimonial-carousel">
          {data.slice(0, 4).map((comment) => (
            <TestimonialItem {...comment} key={comment.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonial
