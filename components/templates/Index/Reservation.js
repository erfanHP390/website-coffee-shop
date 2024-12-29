import React, { useState } from "react";
import swal from 'sweetalert';

import styles from "../../../styles/About.module.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

function Reservation() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [people, setPeople] = useState("-1");

  const newReserve = {
    name,
    email,
    date,
    time,
    people,
  };

  const addReserve = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:4000/reservation", {
      method: "POST",
      headers: {
        "content-type" : "application/json"
      },
      body: JSON.stringify(newReserve)
    });

    if(response.status === 201) {
      swal({
        title: "رزرو شما با موفقیت ثبت شد",
        icon: "success",
        buttons: "باشه"
      }).then(() => {
        setName("");
        setEmail("");
        setDate("");
        setTime("");
        setPeople("-1");
      });
    }
  };

  return (
    <div className="container-fluid my-5">
      <div className="container">
        <div className="reservation position-relative overlay-top overlay-bottom">
          <div className="row align-items-center">
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
                  اگر تصمیم دارید تجربه‌ای خاص و بی‌نظیر در کافه ما داشته باشید،
                  رزرو آنلاین بهترین انتخاب شما خواهد بود. با رزرو آنلاین، نه
                  تنها می‌توانید بهترین زمان‌ها و مکان‌ها را برای خود انتخاب
                  کنید، بلکه از مزایای ویژه‌ای نیز بهره‌مند خواهید شد که تجربه
                  شما را لذت‌بخش‌تر می‌کند.
                </p>
                <ul className="list-inline text-white m-0">
                  <li className="py-2 font_vazir_Light">
                    <i className="fa fa-check text-primary mr-3"></i>
                    <FontAwesomeIcon
                      className={`${styles.text_primary} ${styles.heading_title_service_item_icon} mr-3`}
                      icon={Icons.faCheck}
                    />
                    انتخاب میز دلخواه
                  </li>
                  <li className="py-2 font_vazir_Light">
                    <i className="fa fa-check text-primary mr-3"></i>
                    دریافت تخفیف‌های ویژه
                  </li>
                  <li className="py-2 font_vazir_Light">
                    <i className="fa fa-check text-primary mr-3"></i>
                    پشتیبانی و خدمات ویژه
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="text-center p-5"
                style={{ background: "rgba(51, 33, 29, .8)" }}
              >
                <h1 className="text-white mb-4 mt-5">Book Your Table</h1>
                <form className="mb-5">
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
                  <div className="form-group">
                    <div className="date" id="date" data-target-input="nearest">
                      <input
                        type="date"
                        className={`${styles.form_info} form-control bg-transparent ${styles.border_primary} p-4`}
                        placeholder="Date"
                        data-target="#date"
                        data-toggle="datetimepicker"
                        value={date}
                        onChange={(event) => setDate(event.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="time" id="time" data-target-input="nearest">
                      <input
                        type="time"
                        className={`${styles.form_info} form-control bg-transparent ${styles.border_primary} p-4`}
                        placeholder="Time"
                        data-target="#time"
                        data-toggle="datetimepicker"
                        value={time}
                        onChange={(event) => setTime(event.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <select
                      className={`${styles.form_info} custom-select bg-transparent ${styles.border_primary} px-4`}
                      style={{ height: "49px" }}
                      value={people}
                      onChange={(event) => setPeople(event.target.value)}
                    >
                      <option value="-1">تعداد نفرات</option>
                      <option value="1">1 نفر</option>
                      <option value="2">2 نفر</option>
                      <option value="3">3 نفر</option>
                      <option value="4">4 نفر</option>
                    </select>
                  </div>

                  <div>
                    <button
                      className={`${styles.btn} ${styles.btn_primary} btn-block font-weight-bold py-3`}
                      type="submit"
                      onClick={addReserve}
                    >
                      Book Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reservation;
