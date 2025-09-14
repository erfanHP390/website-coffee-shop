import React from "react";
import styles from "@/styles/Product.module.css";

import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { toPersianDigits } from "@/utils/persianNum";

const ProductsDetails = ({ product }) => {
  // تبدیل قیمت و تخفیف به عدد برای محاسبات
  const price = parseFloat(product.price);
  const discount = parseFloat(product.off);

  // محاسبه قیمت بعد از تخفیف
  const discountedPrice =
    discount > 0 ? price - (price * discount) / 100 : price;

  return (
    <div
      className={`${styles.product_main} align-items-center mb-5 text-decoration-none justify-content-center`}
    >
      <img
        className={`${styles.product_img} mb-3 mb-sm-0`}
        src={product.img}
        alt=""
      />
      <div className={styles.product_details}>
        <h4
          className={`${styles.product_title} font_vazir_ExtraBold text-white mb-3`}
        >
          {product.title}
        </h4>
        <hr className={styles.product_hr} />
        <div className={styles.stars}>
          {new Array(Math.trunc(product.score)).fill().map((_, idx) => (
            <FaStar key={idx} className={styles.fill_star} />
          ))}
          {new Array(5 - Math.trunc(product.score)).fill().map((_, idx) => (
            <FaRegStar key={idx} className={styles.empty_star} />
          ))}
        </div>
        <div className={styles.price_details}>
          {discount > 0 ? (
            <>
              <p className={styles.discount_price}>
                {toPersianDigits(discountedPrice.toLocaleString())} تومان
              </p>
              <p className={styles.original_price}>
                {toPersianDigits(price.toLocaleString())} تومان
              </p>
              {/* <span className={styles.discount_badge}>{discount}% تخفیف</span> */}
            </>
          ) : (
            <p className={styles.final_price}>{toPersianDigits(price.toLocaleString())} تومان</p>
          )}
        </div>
        <p className={`${styles.product_desc} font_vazir_Medium m-0 pr-5`}>
          {product.description}
        </p>
        <button className={styles.shopping_btn}>خرید</button>
      </div>
    </div>
  );
};

export default ProductsDetails;
