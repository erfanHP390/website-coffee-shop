import React from "react";

import styles from "./Card.module.css";
import Link from "next/link";

export default function Card({id, title, desc, price, img }) {
  return (
    <div className={`row align-items-center mb-5 ${styles.card}`}>
      <div className="col-4 col-sm-3">
        <img className={styles.img_menu} src={img} alt={title} />
        <h5 className={`font_vazir_Medium ${styles.menu_price}`}>{price}T</h5>
      </div>
      <div className="col-8 col-sm-9">
        <Link href={`/product/${id}`} className={`font_vazir_Medium ${styles.menu_title}`}>{title}</Link>
        <p className={`m-0 font_vazir_ExtraLight ${styles.menu_desc}`}>{desc}</p>
      </div>
    </div>
  );
}

