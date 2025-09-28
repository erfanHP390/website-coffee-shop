"use client"
import React from "react";
import PropTypes from "prop-types";
import styles from "@/styles/Product.module.css";

import { FaRegStar, FaStar } from "react-icons/fa6";
import { toPersianDigits } from "@/utils/persianNum";

const ProductsDetails = ({ product }) => {
  const {
    price = 0,
    off: discount = 0,
    img = "",
    title = "",
    score = 0,
    description = "",
  } = product || {};

  const numericPrice = parseFloat(price);
  const numericDiscount = parseFloat(discount);
  const hasDiscount = numericDiscount > 0;

  const discountedPrice = hasDiscount
    ? numericPrice - (numericPrice * numericDiscount) / 100
    : numericPrice;

  const renderStars = () => {
    const filledStars = Math.floor(score);
    const emptyStars = 5 - filledStars;

    return (
      <div className={styles.stars} aria-label={`امتیاز ${score} از 5`}>
        {[...Array(filledStars)].map((_, index) => (
          <FaStar
            key={`filled-${index}`}
            className={styles.fill_star}
            aria-hidden="true"
          />
        ))}
        {[...Array(emptyStars)].map((_, index) => (
          <FaRegStar
            key={`empty-${index}`}
            className={styles.empty_star}
            aria-hidden="true"
          />
        ))}
      </div>
    );
  };

  const renderPrice = () => {
    if (hasDiscount) {
      return (
        <div className={styles.price_details}>
          <p className={styles.discount_price}>
            {toPersianDigits(discountedPrice.toLocaleString())} تومان
            <span className="sr-only">قیمت نهایی با تخفیف</span>
          </p>
          <p className={styles.original_price}>
            {toPersianDigits(numericPrice.toLocaleString())} تومان
            <span className="sr-only">قیمت اصلی</span>
          </p>
        </div>
      );
    }

    return (
      <div className={styles.price_details}>
        <p className={styles.final_price}>
          {toPersianDigits(numericPrice.toLocaleString())} تومان
        </p>
      </div>
    );
  };

  return (
    <section className={styles.product_main} aria-labelledby="product-title">
      <img
        className={styles.product_img}
        src={img}
        alt={title}
        loading="lazy"
        onError={(e) => {
          e.target.src = "/images/product-placeholder.jpg";
        }}
      />

      <div className={styles.product_details}>
        <h1
          id="product-title"
          className={`${styles.product_title} font_vazir_ExtraBold`}
        >
          {title}
        </h1>

        <hr className={styles.product_hr} aria-hidden="true" />

        {renderStars()}
        {renderPrice()}

        <p className={`${styles.product_desc} font_vazir_Medium`}>
          {description}
        </p>

        <button
          className={styles.shopping_btn}
          aria-label={`خرید محصول ${title}`}
        >
          افزودن به سبد خرید
        </button>
      </div>
    </section>
  );
};

ProductsDetails.propTypes = {
  product: PropTypes.shape({
    price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    off: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    img: PropTypes.string,
    title: PropTypes.string,
    score: PropTypes.number,
    description: PropTypes.string,
  }).isRequired,
};

ProductsDetails.defaultProps = {
  product: {
    price: 0,
    off: 0,
    img: "",
    title: "محصول",
    score: 0,
    description: "توضیحات محصول",
  },
};

export default ProductsDetails;
