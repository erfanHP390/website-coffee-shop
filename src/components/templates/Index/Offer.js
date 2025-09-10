"use client";
import React, { useState } from "react";
import swal from "sweetalert";

import styles from "../../../styles/Offer.module.css";
import { swalAlert, toastError, toastSuccess } from "@/utils/alerts";
import { validateEmail } from "@/utils/auth";

function Offer() {
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
    <div
      className={`${styles.offer} container-fluid my-5 py-5 text-center position-relative overlay-top overlay-bottom`}
    >
      <div className="container py-5">
        <h1
          className={`${styles.display_3}  ${styles.text_primary} mt-3  font_vazir_ExtraBold`}
        >
          تخفیف های شگفت انگیز
        </h1>
        <h1
          className={` ${styles.heading_subtitle} text-white mb-3   font_vazir_Bold`}
        >
          یکشنبه ها با قیمت های باورنکردنی
        </h1>
        <h4
          className={`text-white font-weight-normal mb-4 pb-3  m-0  font_vazir_Regular  ${styles.heading_desc}`}
        >
          برای دریافت آخرین اخبار و رویداد ها در خبرنامه ما عضو شوید
        </h4>
        <form className={`${styles.form_inline} justify-content-center mb-4`}>
          <div className={`${styles.input_group}`}>
            <input
              type="text"
              className={`${styles.form_control} p-4  m-0  font_vazir_Regular`}
              placeholder="لطفا ایمیل خود را وارد کنید"
              style={{ height: "60px" }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className={`${styles.input_group_append}`}>
              <button
                onClick={(event) => {
                  event.preventDefault()
                  setIsLoading(true)
                  addEmail()
                }}
                className={`${styles.btn}  ${styles.btn_primary}  m-0  font_vazir_Regular  font-weight-bold px-4`}
                type="submit"
              >
                {isLoading ? "صبر کنید" : "عضویت"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Offer;
