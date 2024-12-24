import React from 'react'

import ServiceItem from '@/components/modules/ServiceItem/ServiceItem'

import styles from "../../../styles/About.module.css"

function Services({services}) {
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
          {
            services.map(service => (
              <ServiceItem
            title={service.title}
            desc={service.desc}
            img={service.img}
            icon={service.icon}
          />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Services
