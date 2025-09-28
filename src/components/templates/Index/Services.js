import React from "react";

import ServiceItem from "@/components/modules/ServiceItem/ServiceItem";

import styles from "../../../styles/About.module.css";
import { services } from "@/utils/persianNum";

function Services() {
  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="section-title">
          <h4
            className={`${styles.text_primary}  font_vazir_Light  ${styles.text_uppercase}`}
            style={{ letterSpacing: "5px" }}
          >
            خدمات ما
          </h4>
          <h1 className={`${styles.display_4} font_vazir_ExtraBold`}>
            مواد تازه و ارگانیک
          </h1>
        </div>
        <div className="row">
          {services.map((service) => (
            <ServiceItem
              key={service.id}
              title={service.title}
              desc={service.desc}
              img={service.img}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
