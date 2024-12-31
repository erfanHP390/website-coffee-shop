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
    <div className={`container-fluid p-0 ${styles.nav_bar}`}>
      <nav
        className={`${styles.navbar} ${styles.navbar_expand_lg} bg-none navbar-dark py-3`}
      >
        <div className="d-flex align-items-center position-relative">
          <Link href="/" className={`${styles.navbar_brand} px-lg-4 m-0`}>
            <h1
              className={`m-0 display-4 text-uppercase text-white  font_vazir_ExtraBold `}
            >
              کافه آرامش
            </h1>
          </Link>
        </div>
        {isMenuOpen ? (
          <>
            <button
              type="button"
              className={`${styles.navbar_toggler}`}
              data-toggle="collapse"
              data-target="#navbarCollapse"
              onClick={closeMenu}
            >
              <IoCloseSharp className={`${styles.navbar_toggler_icon}`} />
            </button>
          </>
        ) : (
          <>
            <button
              type="button"
              className={`${styles.navbar_toggler}`}
              data-toggle="collapse"
              data-target="#navbarCollapse"
              onClick={hamburgerMenu}
            >
              <RxHamburgerMenu className={`${styles.navbar_toggler_icon}`}/>
            </button>
          </>
        )}
        <div
          className={` ${styles.navbar_collapse} justify-content-between`}
          id="navbarCollapse"
        >
          <div
            className={
              isMenuOpen
                ? `${styles.navbar_nav}    ml-auto p-4`
                : `${styles.navbar_nav} ${styles.nav_none}  ml-auto p-4`
            }
          >
            <Link
              href="/"
              className={
                route.pathname === "/"
                  ? `font_vazir_Regular  ${styles.nav_link} ${styles.active_nav_link}`
                  : `font_vazir_Regular  ${styles.nav_link}`
              }
            >
              خانه
            </Link>
            <Link
              href="/about"
              className={
                route.pathname === "/about"
                  ? `font_vazir_Regular  ${styles.nav_link} ${styles.active_nav_link}`
                  : `font_vazir_Regular  ${styles.nav_link}`
              }
            >
              درباره
            </Link>
            <Link
              href="/services"
              className={
                route.pathname === "/services"
                  ? `font_vazir_Regular  ${styles.nav_link} ${styles.active_nav_link}`
                  : `font_vazir_Regular  ${styles.nav_link}`
              }
            >
              خدمات
            </Link>
            <Link
              href="/menu"
              className={
                route.pathname === "/menu"
                  ? `font_vazir_Regular  ${styles.nav_link} ${styles.active_nav_link}`
                  : `font_vazir_Regular  ${styles.nav_link}`
              }
            >
              منو
            </Link>
            <Link
              href="/reservation"
              className={
                route.pathname === "/reservation"
                  ? `font_vazir_Regular  ${styles.nav_link} ${styles.active_nav_link}`
                  : `font_vazir_Regular  ${styles.nav_link}`
              }
            >
              رزرو{" "}
            </Link>
            <Link
              href="/testimonial"
              className={
                route.pathname === "/testimonial"
                  ? `font_vazir_Regular  ${styles.nav_link} ${styles.active_nav_link}`
                  : `font_vazir_Regular  ${styles.nav_link}`
              }
            >
              نظرات
            </Link>
            <Link
              href="/contact"
              className={
                route.pathname === "/contact"
                  ? `font_vazir_Regular  ${styles.nav_link} ${styles.active_nav_link}`
                  : `font_vazir_Regular  ${styles.nav_link}`
              }
            >
              تماس با ما
            </Link>
            <Link
              href="/searching"
              className={
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
