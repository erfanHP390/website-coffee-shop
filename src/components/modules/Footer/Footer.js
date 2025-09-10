"use client"
import React, { useState } from "react";

import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { BiLogoTelegram } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMap } from "react-icons/fa6";
import { FaEnvelopeOpen } from "react-icons/fa";
import { swalAlert, toastError, toastSuccess } from "@/utils/alerts";
import { validateEmail } from "@/utils/auth";
import styles from "./Footer.module.css";

export default function Footer() {

    const [email, setEmail] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

      const addEmail = async () => {
    
        if (!email) {
          setIsLoading(false);
          return swalAlert("لطفا ایمیل خود را وارد نمایید", "error", "فهمیدم");
        }
    
        const isValidEmail = validateEmail(email);
        if (!isValidEmail) {
          setIsLoading(false);
          return swalAlert("لطفا ایمیل معتبر وارد نمایید", "error", "فهمیدم");
        }
    
       const newsEmail = { email };
    
        const res = await fetch("/api/news", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newsEmail),
        });
    
        if (res.status === 201) {
          setEmail("");
          setIsLoading(false);
          toastSuccess(
            "ایمیل با موفقیت ثبت شد",
            "bottom-center",
            5000,
            false,
            true,
            true,
            true,
            undefined,
            "colored"
          );
        } else if (res.status === 400) {
          setEmail("");
          setIsLoading(false);
          toastError(
            "لطفا ایمیل خود را وارد نمایید",
            "top-center",
            5000,
            false,
            true,
            true,
            true,
            undefined,
            "colored"
          );
        } else if (res.status === 419) {
          setEmail("");
          setIsLoading(false);
          toastError(
            "ایمیل ثبت شده است",
            "bottom-center",
            5000,
            false,
            true,
            true,
            true,
            undefined,
            "colored"
          );
        } else if (res.status === 422) {
          setEmail("");
          setIsLoading(false);
          toastError(
            "لطفا ایمیل معتبر وارد نمایید",
            "top-center",
            5000,
            false,
            true,
            true,
            true,
            undefined,
            "colored"
          );
        } else if (res.status === 500) {
          setEmail("");
          setIsLoading(false);
          toastError(
            "خطا در سرور لطفا پس از چند دقیقه دوباره تلاش نمایید",
            "top-center",
            5000,
            false,
            true,
            true,
            true,
            undefined,
            "colored"
          );
        }
      };
    

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
            ما را دنبال کنید
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
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="form-control border-light"
                style={{ padding: "25px" }}
                placeholder="ایمیل خود را وارد کنید"
              />
              <div className="input-group-append">
                <button 
                onClick={() => {
                  setIsLoading(true)
                  addEmail()
                }}
                className={`btn ${styles.btn_primary} font-weight-bold px-3  font_vazir_Medium`}>
                  {isLoading ? "صبرکنید" : "ثبت"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
