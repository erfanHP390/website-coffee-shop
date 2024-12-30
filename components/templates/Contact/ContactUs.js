import React, { useState } from "react";
import swal from 'sweetalert';


import styles from "@/styles/About.module.css";

import { FaPhoneAlt } from "react-icons/fa";
import { FaMap } from "react-icons/fa6";
import { FaEnvelopeOpen } from "react-icons/fa";

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const addMassage = async (event) => {
    event.preventDefault();

    const newMassage = {
      name,
      email,
      subject,
      body,
    };

    const response = await fetch("http://localhost:4000/massages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newMassage),
    });

    if (response.status === 201) {
      swal({
        title: "پیام شما با موفقیت ثبت شد",
        icon: "success",
        buttons: "باشه",
      }).then(() => {
        setName("")
        setEmail("")
        setSubject("")
        setBody("")
      });
    }
  };

  return (
    <div class="container-fluid pt-5">
      <div class="container">
        <div class="section-title">
          <h4
            class={`${styles.text_primary}  font_vazir_Light  ${styles.text_uppercase}`}
            style={{ letterSpacing: "5px" }}
          >
            ارتباط با ما
          </h4>
          <h1 class={`${styles.display_4} font_vazir_ExtraBold`}>
            به راحتی با ما ارتباط بگیرید
          </h1>
        </div>
        <div class="row px-3 pb-2">
          <div class="col-sm-4 text-center mb-3">
            <FaMap className={`ml-2  ${styles.icon_primary}  mb-3`} />

            <h4 class="font-weight-bold">آدرس</h4>
            <p>تهران ، خیابان فرشته</p>
          </div>
          <div class="col-sm-4 text-center mb-3">
            <FaPhoneAlt className={`ml-2  ${styles.icon_primary}  mb-3`} />

            <h4 class="font-weight-bold">تلفن</h4>
            <p>02191055666</p>
          </div>
          <div class="col-sm-4 text-center mb-3">
            <FaEnvelopeOpen className={`ml-2  ${styles.icon_primary}  mb-3`} />

            <h4 class="font-weight-bold">ایمیل</h4>
            <p>aramesh@yahoo.com</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 pb-5">
            <iframe
              style={{ width: "100%", height: "443px" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
              frameborder="0"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
          <div class="col-md-6 pb-5">
            <div class="contact-form">
              <div id="success"></div>
              <form name="sentMessage" id="contactForm" novalidate="novalidate">
                <div class="control-group">
                  <input
                    type="text"
                    class={` ${styles.input_focus} form-control bg-transparent p-4`}
                    id="name"
                    placeholder="نام"
                    required="required"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    data-validation-required-message="Please enter your name"
                  />
                  <p class="help-block text-danger"></p>
                </div>
                <div class="control-group">
                  <input
                    type="email"
                    class={` ${styles.input_focus} form-control bg-transparent p-4`}
                    id="email"
                    placeholder="ایمیل شما"
                    required="required"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    data-validation-required-message="Please enter your email"
                  />
                  <p class="help-block text-danger"></p>
                </div>
                <div class="control-group">
                  <input
                    type="text"
                    class={` ${styles.input_focus} form-control bg-transparent p-4`}
                    id="subject"
                    placeholder="موضوع"
                    required="required"
                    value={subject}
                    onChange={(event) => setSubject(event.target.value)}
                    data-validation-required-message="Please enter a subject"
                  />
                  <p class="help-block text-danger"></p>
                </div>
                <div class="control-group">
                  <textarea
                    class={` ${styles.input_focus} form-control bg-transparent py-3  px-4`}
                    rows="5"
                    id="message"
                    placeholder="پیام شما"
                    required="required"
                    value={body}
                    onChange={(event) => setBody(event.target.value)}
                    data-validation-required-message="Please enter your message"
                  ></textarea>
                  <p class="help-block text-danger"></p>
                </div>
                <div>
                  <button
                    class={`${styles.btn}  ${styles.btn_primary} font-weight-bold py-3 px-5`}
                    type="submit"
                    id="sendMessageButton"
                    onClick={addMassage}
                  >
                    ارسال پیام
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
