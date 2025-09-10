import React from 'react'

import styles from "./ServiceItem.module.css"
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";


export default function ServiceItem({ title, desc, img, icon }) {
  return (
    <div className="col-lg-6 mb-5">
      <div className="row align-items-center">
        <div className="col-sm-5">
          <img className="img-fluid mb-3 mb-sm-0" src={img} alt="" />
        </div>
        <div className="col-sm-7">
        <h4
            className={`font_vazir_SemiBold  ${styles.heading_title_service_item}`}
          >
            <div  className={`${styles.heading_title_service_item_con}`}
            >
              <FontAwesomeIcon
                className={`${styles.heading_title_service_item_icon}`}
                icon={Icons[icon]}
              />
            </div>

            <p className="ml-3">{title}</p>
          </h4>
          <p className="m-0  font_vazir_Regular">{desc}</p>
        </div>
      </div>
    </div>
  )
}
