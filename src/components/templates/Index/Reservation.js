"use client";
import React, { useState } from "react";
import swal from "sweetalert";
import DatePicker from "react-multi-date-picker";
import TimePicker from "react-time-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

import styles from "./Reservation.module.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import { swalAlert, toastError, toastSuccess } from "@/utils/alerts";
import { validateEmail } from "@/utils/auth";
import Loading from "@/app/loading";

function Reservation() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const [countPeople, setCountPeople] = useState("-1");
  const [isLoading, setIsLoading] = useState(false);

  const newReserve = {
    name,
    email,
    day,
    time,
    countPeople,
  };

  const addReserve = async () => {
    if (!email || !name || !day || !time || countPeople === "-1") {
      setIsLoading(false);
      return swalAlert(
        "لطفا اطلاعات خود را بطور کامل وارد نمایید",
        "error",
        "فهمیدم"
      );
    }

    if (!email) {
      setIsLoading(false);
      return swalAlert("لطفا ایمیل خود را وارد نمایید", "error", "فهمیدم");
    }

    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      setIsLoading(false);
      return swalAlert("لطفا ایمیل معتبر وارد نمایید", "error", "فهمیدم");
    }

    const res = await fetch("/api/reservation", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newReserve),
    });

    if (res.status === 201) {
      setEmail("");
      setName("");
      setDay("");
      setTime("");
      setCountPeople("-1");
      setIsLoading(false);
      toastSuccess(
        "رزرو با موفقیت ثبت شد",
        "bottom-center",
        false,
        true,
        true,
        true,
        undefined,
        "colored"
      );
    } else if (res.status === 400) {
      setEmail("");
      setName("");
      setDay("");
      setTime("");
      setCountPeople("-1");
      setIsLoading(false);
      toastError(
        "لطفا اطلاعات خود را بطور کامل وارد نمایید",
        "top-center",
        false,
        true,
        true,
        true,
        undefined,
        "colored"
      );
    } else if (res.status === 422) {
      setEmail("");
      setName("");
      setDay("");
      setTime("");
      setCountPeople("-1");
      setIsLoading(false);
      toastError(
        "لطفا ایمیل معتبر وارد نمایید",
        "top-center",
        false,
        true,
        true,
        true,
        undefined,
        "colored"
      );
    } else if (res.status === 500) {
      setEmail("");
      setName("");
      setDay("");
      setTime("");
      setCountPeople("-1");
      setIsLoading(false);
      toastError(
        "خطا در سرور لطفا پس از چند دقیقه دوباره تلاش نمایید",
        "top-center",
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
    <>
      {isLoading ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          {" "}
          <div className="container-fluid my-5">
            <div className="container">
              <div className="reservation position-relative overlay-top overlay-bottom">
                <div className="row align-items-center">
                  {/* Text Section */}
                  <div className="col-lg-6 my-5 my-lg-0">
                    <div className="p-5">
                      <div className="mb-4">
                        <h1
                          className={`display-3 ${styles.text_primary} font_vazir_ExtraBold`}
                        >
                          30% تخفیف!!
                        </h1>
                        <h1 className="text-white font_vazir_ExtraBold">
                          برای رزرو آنلاین
                        </h1>
                      </div>
                      <p className="text-white font_vazir_Medium">
                        اگر تصمیم دارید تجربه‌ای خاص و بی‌نظیر در کافه ما داشته
                        باشید، رزرو آنلاین بهترین انتخاب شما خواهد بود.
                      </p>
                      <ul className="list-inline text-white m-0">
                        <li className="py-2 font_vazir_Light">
                          <FontAwesomeIcon
                            className={`${styles.text_primary} ${styles.heading_title_service_item_icon} mr-3`}
                            icon={Icons.faCheck}
                          />
                          انتخاب میز دلخواه
                        </li>
                        <li className="py-2 font_vazir_Light">
                          <FontAwesomeIcon
                            className={`${styles.text_primary} ${styles.heading_title_service_item_icon} mr-3`}
                            icon={Icons.faCheck}
                          />
                          دریافت تخفیف‌های ویژه
                        </li>
                        <li className="py-2 font_vazir_Light">
                          <FontAwesomeIcon
                            className={`${styles.text_primary} ${styles.heading_title_service_item_icon} mr-3`}
                            icon={Icons.faCheck}
                          />
                          پشتیبانی و خدمات ویژه
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Form Section */}
                  <div className="col-lg-6">
                    <div
                      className={`text-center p-5 ${styles.reservation_form_container}`}
                    >
                      <h1 className="text-white mb-4 mt-5 font_vazir_ExtraBold">
                        میز خود را رزرو کنید
                      </h1>
                      <form className="mb-5">
                        {/* Name */}
                        <div className="form-group">
                          <input
                            type="text"
                            className={`${styles.form_info} form-control bg-transparent ${styles.border_primary} p-4`}
                            placeholder="نام"
                            required="required"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                          />
                        </div>

                        {/* Email */}
                        <div className="form-group">
                          <input
                            type="email"
                            className={`${styles.form_info} form-control bg-transparent ${styles.border_primary} p-4`}
                            placeholder="ایمیل"
                            required="required"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                          />
                        </div>

                        {/* Date */}
                        <div className="form-group">
                          <div className="date" id="date">
                            <DatePicker
                              calendar={persian}
                              locale={persian_fa}
                              value={day}
                              onChange={(date) =>
                                setDay(date ? date.toString() : "")
                              }
                              inputClass={`${styles.form_info} form-control bg-transparent ${styles.border_primary} p-4`}
                              containerClassName={styles.datepicker_container}
                              placeholder="تاریخ را انتخاب کنید"
                              calendarPosition="bottom-right"
                              required
                              style={{ width: "100%" }}
                            />
                          </div>
                        </div>

                        {/* Time */}
                        <div className="form-group">
                          <div className="time" id="time">
                            <div className={styles.timepicker_container}>
                              <input
                                type="time"
                                className={`${styles.form_info} form-control bg-transparent ${styles.border_primary} p-4`}
                                required="required"
                                value={time}
                                onChange={(event) =>
                                  setTime(event.target.value)
                                }
                              />
                            </div>
                          </div>
                        </div>

                        {/* People Count */}
                        <div className="form-group">
                          <select
                            className={`${styles.form_info} custom-select bg-transparent ${styles.border_primary} px-4`}
                            style={{ height: "49px" }}
                            value={countPeople}
                            onChange={(event) =>
                              setCountPeople(event.target.value)
                            }
                          >
                            <option value="-1">تعداد نفرات</option>
                            <option value="1">1 نفر</option>
                            <option value="2">2 نفر</option>
                            <option value="3">3 نفر</option>
                            <option value="4">4 نفر</option>
                          </select>
                        </div>

                        {/* Submit */}
                        <div>
                          <button
                            className={`${styles.btn} ${styles.btn_primary} btn-block font-weight-bold py-3`}
                            type="submit"
                            onClick={(event) => {
                              event.preventDefault();
                              setIsLoading(true);
                              addReserve();
                            }}
                          >
                            همین حالا رزرو کنید
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Reservation;
