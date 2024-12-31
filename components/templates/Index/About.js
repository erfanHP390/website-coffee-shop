import React from "react";

import styles from "../../../styles/About.module.css"

function About() {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="section-title">
          <h4
            className={`${styles.text_primary}  font_vazir_Light  ${styles.text_uppercase}`}
            style={{ letterSpacing: "5px" }}
          >
            درباره ما
          </h4>
          <h1 className={`${styles.display_4} font_vazir_ExtraBold`}>از سال 1395</h1>
        </div>
        <div className="row">
          <div className="col-lg-4 py-0 py-lg-5">
            <h1 className="mb-3  font_vazir_ExtraBold">داستان ما</h1>
            <h5 className="mb-3  font_vazir_Bold">
            کافی‌شاپ ما از سال ۱۳۹۵ با هدف ارائه بهترین خدمات و محصولات در حوزه قهوه و نوشیدنی‌های گرم آغاز به کار کرد. 
            </h5>
            <p className="font_vazir_Regular">
            از آن زمان تاکنون، ما به دنبال ارتقای کیفیت و ارائه تجربه‌ی بی‌نظیری برای مشتریان خود بوده‌ایم. تلاش ما برای نوآوری و به‌روز بودن در تهیه‌ی مواد اولیه و خدمات، باعث شده تا امروزه به یکی از پرطرفدارترین کافی‌شاپ‌ها در شهر ما تبدیل شویم
            </p>
            <a
              href=""
              className={`${styles.btn} ${styles.btn_primary} font-weight-bold py-2 px-4 mt-2`}
            >
              بیشتر بدانید
            </a>
          </div>
          <div className="col-lg-4 py-5 py-lg-0" style={{ minHeight: "500px" }}>
            <div className="position-relative h-100">
              <img
                className="position-absolute w-100 h-100"
                src="/images/about.png"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-lg-4 py-0 py-lg-5">
            <h1 className="mb-3  font_vazir_ExtraBold">هدف ما</h1>
            <h5 className="font_vazir_Bold">
            در کافی‌شاپ ما، هدفمان ایجاد یک فضای دوستانه و دوام‌دار برای مشتریانمان است. ما باور داریم که هر فردی حق دارد تجربه‌ی یک قهوه تازه و لذیذ را به همراه گذراند
            </h5>
            <p className="mb-3  font_vazir_Regular">
              <i className="fa fa-check text-primary mr-3"></i>به همین دلیل، تیم ما تمام تلاش خود را می‌کند تا با ارائه‌ی بهترین قهوه‌ها و نوشیدنی‌ها، همراه با محیطی دلنشین و خدمات واقعا عالی، تمام توقعات مشتریان را برآورده کند و آنها را به خود جذب کند
            </p>
            <a href="" className={` ${styles.btn}  ${styles.btn_secondary} font-weight-bold py-2 px-4 mt-2`}>
              بیشتر بدانید
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
