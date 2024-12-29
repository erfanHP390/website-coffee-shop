import React from 'react'

import styles from "../../../styles/About.module.css"
import Card from '@/components/modules/Card/Card'


function Menu({data}) {
  return (
    <div class="container-fluid pt-5" >
      <div class="container">
        <div class="section-title">
          <h4
            class={`${styles.text_primary}  font_vazir_Light  ${styles.text_uppercase}`}
            style={{ letterSpacing: "5px" }}
          >
            منوی ما
          </h4>
          <h1 class={`${styles.display_4} font_vazir_ExtraBold`}>با تنوعی از نوشیدنی ها</h1>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <h1 class="mb-5  font_vazir_Bold">نوشیدنی داغ</h1>
            {
              data.filter((item) => item.type === "hot").slice(0,3).map((item) => (
                <Card {...item} />
              ))
            }

          </div>

          <div class="col-lg-6">
            <h1 class="mb-5   font_vazir_Bold">نوشیدنی سرد</h1>
            {
              data.filter((item) => item.type === "cold").slice(0,3).map((item) => (
                <Card {...item} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
