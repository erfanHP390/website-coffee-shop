import React from "react";

import styles from "./Card.module.css";

export default function Card({ title, desc, price, img }) {
  return (
    <div class="row align-items-center mb-5">
      <div class="col-4 col-sm-3">
        <img class={styles.img_menu} src={img} alt="" />
        <h5 class={`${styles.menu_price}  font_vazir_Medium`}>{price}T</h5>
      </div>
      <div class="col-8 col-sm-9  ">
        <h4 className="font_vazir_Medium">{title}</h4>
        <p class="m-0  font_vazir_ExtraLight">{desc}</p>
      </div>
    </div>
  );
}
