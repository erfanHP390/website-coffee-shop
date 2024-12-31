import React, { useEffect, useState } from "react";
import styles from "@/styles/Navbar.module.css";
import { useRouter } from "next/router";
import Link from "next/link";

import { IoCloseSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  const route = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);




  const hamburgerMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div class={`container-fluid p-0 ${styles.nav_bar}`}>
      <nav
        class={`${styles.navbar} ${styles.navbar_expand_lg} bg-none navbar-dark py-3`}
      >
        <div className="d-flex align-items-center position-relative">
          <Link href="/" class={`${styles.navbar_brand} px-lg-4 m-0`}>
            <h1
              class={`m-0 display-4 text-uppercase text-white  font_vazir_ExtraBold `}
            >
              کافه آرامش
            </h1>
          </Link>
        </div>
        {isMenuOpen ? (
          <>
            <button
              type="button"
              class={`${styles.navbar_toggler}`}
              data-toggle="collapse"
              data-target="#navbarCollapse"
              onClick={closeMenu}
            >
              <IoCloseSharp class={`${styles.navbar_toggler_icon}`} />
            </button>
          </>
        ) : (
          <>
            <button
              type="button"
              class={`${styles.navbar_toggler}`}
              data-toggle="collapse"
              data-target="#navbarCollapse"
              onClick={hamburgerMenu}
            >
              <RxHamburgerMenu class={`${styles.navbar_toggler_icon}`}/>
            </button>
          </>
        )}
        <div
          class={` ${styles.navbar_collapse} justify-content-between`}
          id="navbarCollapse"
        >
          <div
            class={
              isMenuOpen
                ? `${styles.navbar_nav}    ml-auto p-4`
                : `${styles.navbar_nav} ${styles.nav_none}  ml-auto p-4`
            }
          >
            <Link
              href="/"
              class={
                route.pathname === "/"
                  ? `font_vazir_Regular  ${styles.nav_link} ${styles.active_nav_link}`
                  : `font_vazir_Regular  ${styles.nav_link}`
              }
            >
              خانه
            </Link>
            <Link
              href="/about"
              class={
                route.pathname === "/about"
                  ? `font_vazir_Regular  ${styles.nav_link} ${styles.active_nav_link}`
                  : `font_vazir_Regular  ${styles.nav_link}`
              }
            >
              درباره
            </Link>
            <Link
              href="/services"
              class={
                route.pathname === "/services"
                  ? `font_vazir_Regular  ${styles.nav_link} ${styles.active_nav_link}`
                  : `font_vazir_Regular  ${styles.nav_link}`
              }
            >
              خدمات
            </Link>
            <Link
              href="/menu"
              class={
                route.pathname === "/menu"
                  ? `font_vazir_Regular  ${styles.nav_link} ${styles.active_nav_link}`
                  : `font_vazir_Regular  ${styles.nav_link}`
              }
            >
              منو
            </Link>
            <Link
              href="/reservation"
              class={
                route.pathname === "/reservation"
                  ? `font_vazir_Regular  ${styles.nav_link} ${styles.active_nav_link}`
                  : `font_vazir_Regular  ${styles.nav_link}`
              }
            >
              رزرو{" "}
            </Link>
            <Link
              href="/testimonial"
              class={
                route.pathname === "/testimonial"
                  ? `font_vazir_Regular  ${styles.nav_link} ${styles.active_nav_link}`
                  : `font_vazir_Regular  ${styles.nav_link}`
              }
            >
              نظرات
            </Link>
            <Link
              href="/contact"
              class={
                route.pathname === "/contact"
                  ? `font_vazir_Regular  ${styles.nav_link} ${styles.active_nav_link}`
                  : `font_vazir_Regular  ${styles.nav_link}`
              }
            >
              تماس با ما
            </Link>
            <Link
              href="/searching"
              class={
                route.pathname === "/searching"
                  ? `font_vazir_Regular  ${styles.nav_link} ${styles.active_nav_link}`
                  : `font_vazir_Regular  ${styles.nav_link}`
              }
            >
              جستجو
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
