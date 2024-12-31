import React from "react";
import styles from "@/styles/Product.module.css";

import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";

const ProductsDetails = ({ data }) => {
  const formatPrice = (price) => {
    const formattedPrice = Math.round(price * 1000).toLocaleString('fa-IR');
    return formattedPrice;
  };

  return (
    <div className={`${styles.product_main} align-items-center mb-5 text-decoration-none justify-content-center`}>
      <img className={`${styles.product_img} mb-3 mb-sm-0`} src={data.img} alt="" />
      <div className={styles.product_details}>
        <h4 className={`${styles.product_title} font_vazir_ExtraBold text-white mb-3`}>{data.title}</h4>
        <hr className={styles.product_hr} />
        <div className={styles.stars}>
          {new Array(Math.trunc(data.score)).fill().map((_, idx) => (
            <FaStar key={idx} className={styles.fill_star} />
          ))}
          {new Array(5 - Math.trunc(data.score)).fill().map((_, idx) => (
            <FaRegStar key={idx} className={styles.empty_star} />
          ))}
        </div>
        <div className={styles.price_details}>
          {data.off ? (
            <>
              <p className={styles.discount_price}>
                {formatPrice(data.price - (data.price * data.off) / 100)} تومان
              </p>
              <p className={styles.original_price}>{formatPrice(data.price)} تومان</p>
            </>
          ) : (
            <p>{formatPrice(data.price)} تومان</p>
          )}
        </div>
        <p className={`${styles.product_desc} font_vazir_Medium m-0 pr-5`}>{data.desc}</p>
        <button className={styles.shopping_btn}>
          خرید
        </button>
      </div>
    </div>
  );
};

export default ProductsDetails;
