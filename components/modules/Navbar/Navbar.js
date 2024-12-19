import React from "react";
import styles from "@/styles/Navbar.module.css";

export default function Navbar() {
  return (
    <div class={`container-fluid p-0 ${styles.nav_bar}`}>
      <nav
        class={`${styles.navbar} ${styles.navbar_expand_lg} bg-none navbar-dark py-3`}
      >
        <a href="index.html" class={`${styles.navbar_brand} px-lg-4 m-0`}>
          <h1
            class={`m-0 display-4 text-uppercase text-white  font_vazir_extra_bold `}
          >
            کافه آرامش
          </h1>
        </a>
        <button
          type="button"
          class={`${styles.navbar_toggler}`}
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span class={`${styles.navbar_toggler_icon}`}></span>
        </button>
        <div
          class={`collapse ${styles.navbar_collapse} justify-content-between`}
          id="navbarCollapse"
        >
          <div class={`${styles.navbar_nav} ml-auto p-4`}>
            <a
              href="index.html"
              class={`${styles.nav_link} ${styles.active_nav_link}`}
            >
              خانه
            </a>
            <a href="about.html" class={`${styles.nav_link}`}>
              درباره
            </a>
            <a href="service.html" class={`${styles.nav_link}`}>
              خدمات
            </a>
            <a href="menu.html" class={`${styles.nav_link}`}>
              منو
            </a>
            <div class={`${styles.dropdown}`}>
              <a
                href="#"
                class={`${styles.nav_link} ${styles.dropdown_toggle}`}
                data-toggle="dropdown"
              >
                صفحات
              </a>
              <div class={`${styles.dropdown_menu} ${styles.text_capitalize}`}>
                <a href="reservation.html" class={`${styles.dropdown_item}`}>
                  رزرو{" "}
                </a>
                <a href="testimonial.html" class={`${styles.dropdown_item}`}>
                  نظرات
                </a>
              </div>
            </div>
            <a href="contact.html" class={`${styles.nav_link}`}>
              تماس با ما
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
