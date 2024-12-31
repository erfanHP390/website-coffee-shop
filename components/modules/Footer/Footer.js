import React from "react";

import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { BiLogoTelegram } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMap } from "react-icons/fa6";
import { FaEnvelopeOpen } from "react-icons/fa";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className="container-fluid footer text-white mt-5 pt-5 px-0 position-relative overlay-top">
      <div className="row mx-0 pt-5 px-sm-3 px-lg-5 mt-4">
        <div className="col-lg-3 col-md-6 mb-5">
          <h4
            className="text-white text-uppercase mb-4  font_vazir_SemiBold"
            style={{ letterSpacing: "3px" }}
          >
            منتظر شما هستیم
          </h4>
          <p className="font_vazir_Light">
            <FaMap className={`ml-2  ${styles.icon_primary}`} />
            تهران ، خیابان فرشته
          </p>
          <p className="font_vazir_Light">
            <FaPhoneAlt className={`ml-2  ${styles.icon_primary}`} />
            02191055666
          </p>
          <p className="m-0  font_vazir_Light">
            <FaEnvelopeOpen className={`ml-2  ${styles.icon_primary}`} />
            aramesh@yahoo.com
          </p>
        </div>
        <div className="col-lg-3 col-md-6 mb-5">
          <h4
            className="text-white text-uppercase mb-4  font_vazir_SemiBold"
            style={{ letterSpacing: "3px" }}
          >
            ما را دنبال کیند
          </h4>
          <p className="font_vazir_Light">
            آخرین اطلاعیه و اخبار ها را در شبکه های اجتماعی پیگیر باشید
          </p>
          <div className="d-flex justify-content-start">
            <a className="btn btn-lg  btn-lg-square" href="#">
              <BsTwitterX className={`${styles.icon_socials}`} />
            </a>
            <a className="btn btn-lg  btn-lg-square" href="#">
              <BiLogoTelegram className={`${styles.icon_socials}`} />
            </a>
            <a className="btn btn-lg  btn-lg-square" href="#">
              <FaLinkedinIn className={`${styles.icon_socials}`} />
            </a>
            <a className="btn btn-lg  btn-lg-square" href="#">
              <FaInstagram className={`${styles.icon_socials}`} />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-5">
          <h4
            className="text-white text-uppercase mb-4  font_vazir_SemiBold"
            style={{ letterSpacing: "3px" }}
          >
            ساعت کاری
          </h4>
          <div>
            <h6 className="text-white text-uppercase  font_vazir_Light">
              شنبه - چهارشنبه
            </h6>
            <p className="font_vazir_Light">7.30 - 23.00</p>
            <h6 className="text-white text-uppercase  font_vazir_Light">
              پنج شنبه - جمعه
            </h6>
            <p className="font_vazir_Light">9.00 - 3.00 بامداد</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-5">
          <h4
            className="text-white text-uppercase mb-4  font_vazir_SemiBold"
            style={{ letterSpacing: "3px" }}
          >
            خبرنامه
          </h4>
          <p className="font_vazir_Light">از آخرین اخبار کافه مطلع باشید</p>
          <div className="w-100">
            <div className="input-group">
              <input
                type="email"
                className="form-control border-light"
                style={{ padding: "25px" }}
                placeholder="ایمیل خود را وارد کنید"
              />
              <div className="input-group-append">
                <button className={`btn ${styles.btn_primary} font-weight-bold px-3  font_vazir_Medium`}>
                  ثبت
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
