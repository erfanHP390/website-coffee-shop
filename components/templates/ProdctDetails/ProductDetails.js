import React from 'react'
import styles from "@/styles/Product.module.css"

import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";

const ProductsDetails = ({ data }) => {
    return (
      <div
        className={`${styles.product_main}   align-items-center mb-5 text-decoration-none justify-content-center`}
      >
        <img
          className={`${styles.product_img}  mb-3 mb-sm-0`}
          src={data.img}
          alt=""
        />
        <div style={{ width: "500px" }}>
          <h4 className={`${styles.product_title}  font_vazir_ExtraBold  text-white mb-3`}>{data.title}</h4>
          <hr style={{ borderColor: "white" }} />
          <div className={styles.stars}>
            {new Array(Math.trunc(data.score)).fill().map(() => (
              <FaStar className={styles.fill_star}  />
            ))}
            {new Array(5 - Math.trunc(data.score)).fill().map(() => (
              <FaRegStar className={styles.empty_star}  />
            ))}
          </div>
          <div className={styles.price_details}>
            {data.off ? (
              <>
                <p>T{data.price - (data.price * data.off) / 100}</p>
                <p>T{data.price}</p>
              </>
            ) : (
              <p>${data.price}</p>
            )}
          </div>
          <p style={{ color: "#fff" }} className={`${styles.product_desc}  font_vazir_Medium  m-0 pr-5`}>
            {data.desc}
          </p>
          <button className={styles.shopping_btn}>
            خرید
            {/* <FontAwesomeIcon className="ml-2" icon={faShoppingBag} /> */}
          </button>
        </div>
      </div>
    );
  };
  
  export default ProductsDetails;
  