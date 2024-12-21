import React from 'react'

import ServiceItem from '@/components/modules/ServiceItem/ServiceItem'

import styles from "../../../styles/About.module.css"

function Services() {
  return (
    <div class="container-fluid pt-5">
      <div class="container">
        <div class="section-title">
          <h4
            class={`${styles.text_primary}  font_vazir_light  ${styles.text_uppercase}`}
            style={{ letterSpacing: "5px" }}
          >
            خدمات ما
          </h4>
          <h1 class={`${styles.display_4} font_vazir_extra_bold`}>مواد تازه و ارگانیک</h1>
        </div>
        <div class="row">
          <ServiceItem
            title="تماس از شما ، رساندن از ما!"
            desc="با تنها یک تماس، سفارش یک فنجان قهوه‌ی خاص را به سرعت ثبت کنید و لحظات تازه و شادی را تجربه کنید"
            img="/images/service-1.jpg"
            icon=""
          />
          <ServiceItem
            title="دانه های قهوه تازه"
            desc="تذوق لحظه‌ی منحصر به فردی را تجربه کنید با دانه های قهوه‌ی تازه و بی‌نظیر ما!"
            img="/images/service-2.jpg"
            icon=""
          />
          <ServiceItem
            title="رزرو آنلاین"
            desc="با رزرو سریع ، آنلاین ، ساده خاطرات خود را  ماندگار کنید."
            img="/images/service-3.jpg"
            icon=""
          />
          <ServiceItem
            title="بهترین در کیفیت"
            desc="به دنیایی از عطر و طعم‌های خوش بو و لذت بخش خوش آمدید، جایی که قهوه‌ی تازه و با کیفیت در انتظار شماست"
            img="/images/service-4.jpg"
            icon=""
          />
        </div>
      </div>
    </div>
  )
}

export default Services
